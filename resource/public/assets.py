import re
import requests
import os
import shutil
import glob
import urllib3
from DrissionPage import ChromiumPage, ChromiumOptions

# 忽略不安全请求警告
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# 设置 ChromiumOptions 参数
options = ChromiumOptions()
options.set_argument('--headless')  # 启用无头模式，不打开窗口

# 初始化 ChromiumPage，传入 ChromiumOptions 对象
page = ChromiumPage(options)

# 创建一个目录来保存下载的文件
os.makedirs('assets', exist_ok=True)

# 获取当前目录下所有的HTML文件
html_files = glob.glob('./*.html')+glob.glob('./assets/*.js')+glob.glob('./assets/*.css')

# 已下载资源列表
downloaded_files = []
# 下载失败的URL列表
failed_downloads = []

# 遍历每个HTML文件
for html_file in html_files:
    # 读取HTML文件内容
    with open(html_file, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # 查找所有包含 https://web-sandbox.oaiusercontent.com 的URL
    pattern_cdn = r'https://web-sandbox\.oaiusercontent\.com[^\s"\')]+' 
    urls_cdn = re.findall(pattern_cdn, html_content)

    # 查找所有包含 assets/ 的URL
    pattern_assets = r'assets/[^\s"\')]+' 
    urls_assets = re.findall(pattern_assets, html_content)

    # 查找所有包含 ./ 的 .js 或 .css 文件
    pattern_local = r'\./[a-zA-Z0-9_-]+\.(?:js|css)'
    urls_local = re.findall(pattern_local, html_content)

    # 合并所有URL
    urls = urls_cdn + [f'https://web-sandbox.oaiusercontent.com/{url}' for url in urls_assets] + [f'https://web-sandbox.oaiusercontent.com/assets{url[1:]}' for url in urls_local]

    # 打印找到的原始资源名称
    for url in urls_cdn:
        print(f'在cdn文件 {html_file} 中找到资源: {url}')
    for url in urls_assets:
        print(f'在assets文件 {html_file} 中找到资源: {url}')
    for url in urls_local:
        print(f'在local文件 {html_file} 中找到资源: {url}')

    # 下载每个URL对应的资源并保存到本地
    for url in urls:
        filename = os.path.join('assets', url.split('/')[-1])
        if os.path.exists(filename):
            print(f'文件已存在，跳过下载: {filename}')
            continue

        # 打印未拼接前的资源名称和拼接后的资源URL
        if url in urls_cdn:
            original_url = url
        elif url in [f'https://web-sandbox.oaiusercontent.com/{u}' for u in urls_assets]:
            original_url = url.replace('https://web-sandbox.oaiusercontent.com/', '')
        else:
            original_url = f'./{url.replace("https://web-sandbox.oaiusercontent.com/assets", "")}'

        print(f'拼接后的资源URL: {url}')

        try:
            # 检查文件扩展名
            file_extension = os.path.splitext(filename)[1].lower()

            # if file_extension in ['.js', '.css']:
            #     print(f'正在下载文本: {url}')
            #     response = requests.get(url)

            #     # 自动根据 HTTP 响应头处理编码
            #     response.encoding = response.apparent_encoding  # 自动检测编码

            #     # 获取文本
            #     visible_text = response.text

            #     # 确保目录存在
            #     os.makedirs(os.path.dirname(filename), exist_ok=True)

            #     # 将显示的文本内容保存为文件，使用检测到的编码
            #     with open(filename, 'w', encoding=response.encoding) as file:
            #         file.write(visible_text)
            #     print(f'下载完成: {filename}')
            if file_extension in ['.js', '.css', '.woff2']:
                print(f'正在使用浏览器下载: {url}')
                page.get(url)
                page.download(url, filename)  # 直接使用浏览器下载器下载文件
                print(f'下载完成: {filename}')
            else:
                print(f'正在下载二进制: {url}')
                response = requests.get(url)
                # 对于非 .js 和 .css 文件，采用二进制方式下载
                if response.status_code == 200:
                    with open(filename, 'wb') as file:
                        file.write(response.content)
                    print(f'下载成功: {url}')
                else:
                    print(f'下载失败: {url}, 状态码: {response.status_code}')
                    failed_downloads.append(url)

            downloaded_files.append(filename)

        except requests.exceptions.RequestException as e:
            print(f'请求错误: {url}, 错误信息: {e}')
            failed_downloads.append(url)

# 打印下载失败的URL
if failed_downloads:
    print("\n下载失败的URL列表:")
    for url in failed_downloads:
        print(url)

# 关闭浏览器
page.close()

print('所有文件下载完成')

def clean_up_nested_folders_with_temp(download_dir):
    """
    使用临时文件夹清理嵌套的文件夹，将嵌套文件夹中的文件移动到指定目录，
    并删除空的嵌套文件夹，避免与同名文件夹冲突。
    
    :param download_dir: 目标下载文件夹的路径
    """
    temp_dir = os.path.join(download_dir, 'temp')  # 创建一个临时文件夹
    os.makedirs(temp_dir, exist_ok=True)

    # 第一步：将嵌套的文件移动到临时文件夹
    for root, dirs, files in os.walk(download_dir):
        for file in files:
            file_path = os.path.join(root, file)  # 当前文件的完整路径

            if root != download_dir:  # 只处理嵌套文件
                temp_file_path = os.path.join(temp_dir, file)  # 临时文件夹中的路径

                # 检查并创建目标路径的文件夹
                os.makedirs(os.path.dirname(temp_file_path), exist_ok=True)

                print(f"移动文件到临时文件夹：{file_path} -> {temp_file_path}")
                shutil.move(file_path, temp_file_path)  # 先移动到临时文件夹

        # 删除空的嵌套文件夹
        for dir_name in dirs:
            dir_path = os.path.join(root, dir_name)
            if not os.listdir(dir_path):  # 如果文件夹是空的，删除它
                print(f"删除空文件夹：{dir_path}")
                os.rmdir(dir_path)

    # 第二步：删除所有嵌套的文件夹
    for root, dirs, _ in os.walk(download_dir, topdown=False):
        for dir_name in dirs:
            dir_path = os.path.join(root, dir_name)
            try:
                os.rmdir(dir_path)  # 删除空文件夹
                print(f"成功删除文件夹：{dir_path}")
            except OSError:
                print(f"文件夹非空，无法删除：{dir_path}")

    # 第三步：从临时文件夹移动文件到目标目录
    for file in os.listdir(temp_dir):
        temp_file_path = os.path.join(temp_dir, file)
        target_path = os.path.join(download_dir, file)

        # 检查是否存在同名文件夹
        if os.path.isdir(target_path):
            print(f"目标路径存在同名文件夹，先删除文件夹：{target_path}")
            shutil.rmtree(target_path)  # 删除同名文件夹，确保可以移动文件

        # 检查是否已经存在同名文件
        if os.path.exists(target_path):
            print(f"目标路径已存在同名文件，跳过文件: {target_path}")
            continue  # 如果文件已经存在，也跳过

        print(f"从临时文件夹移动文件到目标目录：{temp_file_path} -> {target_path}")
        shutil.move(temp_file_path, target_path)  # 移动文件到目标目录

    # 删除临时文件夹
    if os.path.exists(temp_dir) and not os.listdir(temp_dir):
        print(f"删除临时文件夹：{temp_dir}")
        os.rmdir(temp_dir)

# 调用函数，传入下载目录
download_dir = './assets'
clean_up_nested_folders_with_temp(download_dir)