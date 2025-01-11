var c=(t=>(t.READY="ready",t.LOG="log",t.RUN_START="run_start",t.ENVIRONMENT_STATUS="environment_status",t.ENVIRONMENT_ERROR="environment_error",t.INSTRUMENT="instrument",t.OUTPUT="output",t.ERROR="error",t.RUN_COMPLETE="run_complete",t.FETCH_REQUEST="fetch_request",t))(c||{}),f=(t=>(t[t.INITIALIZING=0]="INITIALIZING",t[t.INSTALLING_PACKAGES=1]="INSTALLING_PACKAGES",t[t.RUNNING_CODE=2]="RUNNING_CODE",t))(f||{});const y=(t,e)=>{t.runPython(`
def reformat_exception():
  import sys
  from traceback import format_exception, format_tb, extract_tb
  return {
      "line": extract_tb(sys.last_traceback)[-1].lineno,
      "lastValue": str(sys.last_value),
      "lastType": str(sys.last_type),
      "traceback": format_tb(sys.last_traceback)[2:]
  }
`.trim(),{globals:e})},N=t=>{if(typeof t!="string")return null;const e=t.match(/\(<exec>, line (\d+)\)/);if(!e)return null;const[,n]=e,s=parseInt(n);return isNaN(s)?null:s},h=t=>{if(typeof t!="string")return null;const e=t.match(/<class '([a-zA-Z0-9]*)'/);if(!e)return null;const[,n]=e;return n||null},I=t=>{const n=t.get("reformat_exception")(),{line:s,lastValue:i,lastType:o,traceback:a}=n.toJs({create_proxies:!1,dict_converter:Object.fromEntries}),r=a.filter(u=>!String(u).includes("_pyodide/_base.py")).flatMap(u=>u.replace('File "<exec>",',"").split(`
`)).filter(Boolean),p=N(i),m=h(o);return n.destroy(),{name:m,message:i,line:p??s,stack:r.length>1?r:[]}},E=async()=>{const{loadPyodide:t}=await import("./pyodide-CAuAWlEr.js");return await t({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.4/full"})},P=(t,e)=>{t.runPython(`
import warnings
import matplotlib

matplotlib.use("AGG")
warnings.filterwarnings(
  "ignore",
  message="Matplotlib is currently using agg, which is a non-GUI backend, so cannot show the figure."
)
`.trim(),{globals:e})},g=`image_bytes_list_${Math.random().toString().split(".")[1]}`,T=(t,e)=>{t.runPython(`
from matplotlib import pyplot as plt
for i, fig in enumerate(plt.get_fignums()):
    try:
      plt.close(fig)
    except Exception:
      continue
`.trim(),{globals:e})},R=(t,e)=>{t.runPython(`
import io
from matplotlib import pyplot as plt

${g} = []
for i, fig in enumerate(plt.get_fignums()):
    plt.figure(fig)

    # Save the plot to a BytesIO buffer
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    ${g}.append(buf.read())
`.trim(),{globals:e});const n=e.get(g);if(!n)return[];const s=[];for(let i=0;i<n.length;i++){const o=n.get(i),a=new Uint8Array(o.toJs());let r="";for(const u of a)r+=String.fromCharCode(u);const m=`data:image/png;base64,${btoa(r)}`;s.push(m)}return n.destroy(),s},b="|",_=" | ",A=(t,e,n)=>{t.runPython(`
import inspect
_print = print
def print(*args):
   _print(inspect.getframeinfo(inspect.currentframe().f_back).lineno, "${b}", *args)
`.trim(),{globals:e}),t.setStdout({write:s=>{const i=new TextDecoder("utf-8").decode(s),[o,...a]=i.split(_),r=a.length?parseInt(o):null;if(r==null)return s.length;const p=a.length?a.join(_):o;return n({level:"info",log:p,line:r}),s.length}}),t.setStderr({batched:s=>{n({level:"warn",log:s,line:null})}})},w=async(t,e,n)=>{const s=t.pyodide_py.code.find_imports(e).toJs(),i=await t.loadPackagesFromImports(e),o=new Set(i.map(({name:r})=>r)),a=s.filter(r=>!o.has(r));if(a.length){await t.loadPackage("micropip");const r=`
import micropip
${a.map(p=>`
try:
  await micropip.install("${p}")
except:
  pass
`).join(`
`)}
  `.trim();await t.runPythonAsync(r,{globals:n})}},l=postMessage;let d=null;const L=async()=>d??(d=await E()),O=async t=>{l({type:c.ENVIRONMENT_STATUS,status:f.INITIALIZING});const e=await L(),n=e.globals.get("dict")();e.runPython('globals()["__name__"] = "__main__"',{globals:n}),y(e,n),A(e,n,o=>l({type:c.LOG,...o}));const s=performance.now(),i=t.includes("matplotlib");try{l({type:c.ENVIRONMENT_STATUS,status:f.INSTALLING_PACKAGES}),await w(e,t,n),l({type:c.ENVIRONMENT_STATUS,status:f.RUNNING_CODE}),i&&P(e,n);const o=await e.runPythonAsync(t,{globals:n});if(i){const a=R(e,n);for(const r of a)l({type:c.OUTPUT,output:r});l({type:c.INSTRUMENT,instrument:{type:"count",label:"chart_shown",count:a.length}})}o!==void 0&&l({type:c.OUTPUT,output:o})}catch{const a=I(n),{line:r}=a;l({type:c.ERROR,line:r,error:a})}finally{i&&T(e,n);const o=performance.now();l({type:c.RUN_COMPLETE,duration:o-s}),n.destroy()}};self.onmessage=async t=>{const{data:e}=t;if(e&&typeof e=="object"&&"code"in e){const{code:n}=e;await O(n)}};l({type:c.READY});
