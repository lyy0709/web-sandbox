FROM caddy:alpine

# 替换 Alpine 源为国内镜像
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
COPY ./resource/public /var/www/html
COPY ./resource/Caddyfile /etc/caddy/Caddyfile

CMD caddy run --config /etc/caddy/Caddyfile