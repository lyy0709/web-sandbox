var c=(t=>(t.READY="ready",t.LOG="log",t.RUN_START="run_start",t.ENVIRONMENT_STATUS="environment_status",t.ENVIRONMENT_ERROR="environment_error",t.SET_BACKGROUND_COLOR="set_background_color",t.INSTRUMENT="instrument",t.OUTPUT="output",t.ERROR="error",t.RUN_COMPLETE="run_complete",t))(c||{}),f=(t=>(t[t.INITIALIZING=0]="INITIALIZING",t[t.INSTALLING_PACKAGES=1]="INSTALLING_PACKAGES",t[t.RUNNING_CODE=2]="RUNNING_CODE",t))(f||{});const y=(t,e)=>{t.runPython(`
def reformat_exception():
  import sys
  from traceback import format_exception, format_tb, extract_tb
  return {
      "line": extract_tb(sys.last_traceback)[-1].lineno,
      "lastValue": str(sys.last_value),
      "lastType": str(sys.last_type),
      "traceback": format_tb(sys.last_traceback)[2:]
  }
`.trim(),{globals:e})},N=t=>{if(typeof t!="string")return null;const e=t.match(/\(<exec>, line (\d+)\)/);if(!e)return null;const[,n]=e,o=parseInt(n);return isNaN(o)?null:o},h=t=>{if(typeof t!="string")return null;const e=t.match(/<class '([a-zA-Z0-9]*)'/);if(!e)return null;const[,n]=e;return n||null},I=t=>{const n=t.get("reformat_exception")(),{line:o,lastValue:i,lastType:s,traceback:a}=n.toJs({create_proxies:!1,dict_converter:Object.fromEntries}),r=a.filter(u=>!String(u).includes("_pyodide/_base.py")).flatMap(u=>u.replace('File "<exec>",',"").split(`
`)).filter(Boolean),p=N(i),g=h(s);return n.destroy(),{name:g,message:i,line:p??o,stack:r.length>1?r:[]}},E=async()=>{const{loadPyodide:t}=await import("./pyodide-CAuAWlEr.js");return await t({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.4/full"})},P=(t,e)=>{t.runPython(`
import warnings
import matplotlib

matplotlib.use("AGG")
warnings.filterwarnings(
  "ignore",
  message="Matplotlib is currently using agg, which is a non-GUI backend, so cannot show the figure."
)
`.trim(),{globals:e})},m=`image_bytes_list_${Math.random().toString().split(".")[1]}`,T=(t,e)=>{t.runPython(`
from matplotlib import pyplot as plt
for i, fig in enumerate(plt.get_fignums()):
    try:
      plt.close(fig)
    except Exception:
      continue
`.trim(),{globals:e})},b=(t,e)=>{t.runPython(`
import io
from matplotlib import pyplot as plt

${m} = []
for i, fig in enumerate(plt.get_fignums()):
    plt.figure(fig)

    # Save the plot to a BytesIO buffer
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    ${m}.append(buf.read())
`.trim(),{globals:e});const n=e.get(m);if(!n)return[];const o=[];for(let i=0;i<n.length;i++){const s=n.get(i),a=new Uint8Array(s.toJs());let r="";for(const u of a)r+=String.fromCharCode(u);const g=`data:image/png;base64,${btoa(r)}`;o.push(g)}return n.destroy(),o},R="|",_=" | ",A=(t,e,n)=>{t.runPython(`
import inspect
_print = print
def print(*args):
   _print(inspect.getframeinfo(inspect.currentframe().f_back).lineno, "${R}", *args)
`.trim(),{globals:e}),t.setStdout({write:o=>{const i=new TextDecoder("utf-8").decode(o),[s,...a]=i.split(_),r=a.length?parseInt(s):null;if(r==null)return o.length;const p=a.length?a.join(_):s;return n({level:"info",log:p,line:r}),o.length}}),t.setStderr({batched:o=>{n({level:"warn",log:o,line:null})}})},w=async(t,e,n)=>{const o=t.pyodide_py.code.find_imports(e).toJs(),i=await t.loadPackagesFromImports(e),s=new Set(i.map(({name:r})=>r)),a=o.filter(r=>!s.has(r));if(a.length){await t.loadPackage("micropip");const r=`
import micropip
${a.map(p=>`
try:
  await micropip.install("${p}")
except:
  pass
`).join(`
`)}
  `.trim();await t.runPythonAsync(r,{globals:n})}},l=postMessage;let d=null;const O=async()=>d??(d=await E()),L=async t=>{l({type:c.ENVIRONMENT_STATUS,status:f.INITIALIZING});const e=await O(),n=e.globals.get("dict")();e.runPython('globals()["__name__"] = "__main__"',{globals:n}),y(e,n),A(e,n,s=>l({type:c.LOG,...s}));const o=performance.now(),i=t.includes("matplotlib");try{l({type:c.ENVIRONMENT_STATUS,status:f.INSTALLING_PACKAGES}),await w(e,t,n),l({type:c.ENVIRONMENT_STATUS,status:f.RUNNING_CODE}),i&&P(e,n);const s=await e.runPythonAsync(t,{globals:n});if(i){const a=b(e,n);for(const r of a)l({type:c.OUTPUT,output:r});l({type:c.INSTRUMENT,instrument:{type:"count",label:"chart_shown",count:a.length}})}s!==void 0&&l({type:c.OUTPUT,output:s})}catch{const a=I(n),{line:r}=a;l({type:c.ERROR,line:r,error:a})}finally{i&&T(e,n);const s=performance.now();l({type:c.RUN_COMPLETE,duration:s-o}),n.destroy()}};self.onmessage=async t=>{const{data:e}=t;if(e&&typeof e=="object"&&"code"in e){const{code:n}=e;await L(n)}};console.debug("python worker ready");l({type:c.READY});
