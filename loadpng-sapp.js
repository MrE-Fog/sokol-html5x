var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,u;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof v||a.context instanceof v))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);var x=g.printErr||console.error.bind(console);Object.assign(g,aa);
aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var ia,ja=!1,ka,A,la,ma,B,na,C,D;
function oa(){var a=ia.buffer;g.HEAP8=ka=new Int8Array(a);g.HEAP16=la=new Int16Array(a);g.HEAP32=B=new Int32Array(a);g.HEAPU8=A=new Uint8Array(a);g.HEAPU16=ma=new Uint16Array(a);g.HEAPU32=na=new Uint32Array(a);g.HEAPF32=C=new Float32Array(a);g.HEAPF64=D=new Float64Array(a)}var pa,qa=[],ra=[],sa=[],ta=[],ua=[];function va(){var a=g.preRun.shift();qa.unshift(a)}var E=0,wa=null,F=null;
function z(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";x(a);ja=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function xa(a){return a.startsWith("data:application/octet-stream;base64,")}var G;G="loadpng-sapp.wasm";if(!xa(G)){var ya=G;G=g.locateFile?g.locateFile(ya,q):q+ya}function za(a){try{if(a==G&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Aa(a){if(!y&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>za(a));if(t)return new Promise((b,c)=>{t(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>za(a))}function Ba(a,b,c){return Aa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);z(d)})}
function Ca(a,b){var c=G;y||"function"!=typeof WebAssembly.instantiateStreaming||xa(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Ba(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){x("wasm streaming compile failed: "+e);x("falling back to ArrayBuffer instantiation");return Ba(c,a,b)}))}function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Da(a){for(;0<a.length;)a.shift()(g)}function Ea(a){var b=Fa();a();Ga(b)}var Ha=0;function Ia(){for(var a=H.length-1;0<=a;--a)Ja(a);H=[];Ka=[]}var Ka=[];function La(){if(Ha&&Ma.Tb)for(var a=0;a<Ka.length;++a){var b=Ka[a];Ka.splice(a,1);--a;b.Gc.apply(null,b.vc)}}var H=[];function Ja(a){var b=H[a];b.target.removeEventListener(b.Mb,b.rc,b.Nb);H.splice(a,1)}
function I(a){function b(d){++Ha;Ma=a;La();a.Pb(d);La();--Ha}if(!a.target)return-4;if(a.Ob)a.rc=b,a.target.addEventListener(a.Mb,b,a.Nb),H.push(a),Na||(ta.push(Ia),Na=!0);else for(var c=0;c<H.length;++c)H[c].target==a.target&&H[c].Mb==a.Mb&&Ja(c--);return 0}function Oa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Na,Ma,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function J(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&Wa)a=Wa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
var Xa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function K(a){a=2<a?J(a):a;return Xa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Za=[];function L(a){var b=Za[a];b||(a>=Za.length&&(Za.length=a+1),Za[a]=b=pa.get(a));return b}
function M(a,b,c){var d=A;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e}
function $a(a,b,c,d,e,k){Pa||(Pa=O(256));a={target:K(a),Mb:k,Ob:d,Pb:function(f=event){var m=f.target.id?f.target.id:"",n=Pa;M(Oa(f.target),n+0,128);M(m,n+128,128);L(d)(e,n,b)&&f.preventDefault()},Nb:c};return I(a)}
function ab(a,b,c,d,e,k){Qa||(Qa=O(176));a={target:K(a),Tb:!0,Mb:k,Ob:d,Pb:function(f){var m=Qa;D[m>>3]=f.timeStamp;var n=m>>2;B[n+2]=f.location;B[n+3]=f.ctrlKey;B[n+4]=f.shiftKey;B[n+5]=f.altKey;B[n+6]=f.metaKey;B[n+7]=f.repeat;B[n+8]=f.charCode;B[n+9]=f.keyCode;B[n+10]=f.which;M(f.key||"",m+44,32);M(f.code||"",m+76,32);M(f.char||"",m+108,32);M(f.locale||"",m+140,32);L(d)(e,m,b)&&f.preventDefault()},Nb:c};return I(a)}
function bb(a,b,c){D[a>>3]=b.timeStamp;a>>=2;B[a+2]=b.screenX;B[a+3]=b.screenY;B[a+4]=b.clientX;B[a+5]=b.clientY;B[a+6]=b.ctrlKey;B[a+7]=b.shiftKey;B[a+8]=b.altKey;B[a+9]=b.metaKey;la[2*a+20]=b.button;la[2*a+21]=b.buttons;B[a+11]=b.movementX;B[a+12]=b.movementY;c=Ya(c);B[a+13]=b.clientX-c.left;B[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Ra||(Ra=O(72));a=K(a);return I({target:a,Tb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Mb:k,Ob:d,Pb:function(f=event){bb(Ra,f,a);L(d)(e,Ra,b)&&f.preventDefault()},Nb:c})}function cb(a,b,c,d,e){Sa||(Sa=O(260));return I({target:a,Mb:e,Ob:d,Pb:function(k=event){var f=Sa,m=document.pointerLockElement||document.Qb||document.ac||document.$b;B[f>>2]=!!m;var n=m&&m.id?m.id:"";M(Oa(m),f+4,128);M(n,f+132,128);L(d)(20,f,b)&&k.preventDefault()},Nb:c})}
function db(a,b,c,d,e){return I({target:a,Mb:e,Ob:d,Pb:function(k=event){L(d)(38,0,b)&&k.preventDefault()},Nb:c})}
function eb(a,b,c,d){Ta||(Ta=O(36));a=K(a);return I({target:a,Mb:"resize",Ob:d,Pb:function(e=event){if(e.target==a){var k=document.body;if(k){var f=Ta;B[f>>2]=e.detail;B[f+4>>2]=k.clientWidth;B[f+8>>2]=k.clientHeight;B[f+12>>2]=innerWidth;B[f+16>>2]=innerHeight;B[f+20>>2]=outerWidth;B[f+24>>2]=outerHeight;B[f+28>>2]=pageXOffset;B[f+32>>2]=pageYOffset;L(d)(10,f,b)&&e.preventDefault()}}},Nb:c})}
function fb(a,b,c,d,e,k){Ua||(Ua=O(1696));a=K(a);return I({target:a,Tb:"touchstart"==k||"touchend"==k,Mb:k,Ob:d,Pb:function(f){for(var m,n={},p=f.touches,w=0;w<p.length;++w)m=p[w],m.ec=m.hc=0,n[m.identifier]=m;for(w=0;w<f.changedTouches.length;++w)m=f.changedTouches[w],m.ec=1,n[m.identifier]=m;for(w=0;w<f.targetTouches.length;++w)n[f.targetTouches[w].identifier].hc=1;p=Ua;D[p>>3]=f.timeStamp;var r=p>>2;B[r+3]=f.ctrlKey;B[r+4]=f.shiftKey;B[r+5]=f.altKey;B[r+6]=f.metaKey;r+=7;var N=Ya(a),T=0;for(w in n)if(m=
n[w],B[r]=m.identifier,B[r+1]=m.screenX,B[r+2]=m.screenY,B[r+3]=m.clientX,B[r+4]=m.clientY,B[r+5]=m.pageX,B[r+6]=m.pageY,B[r+7]=m.ec,B[r+8]=m.hc,B[r+9]=m.clientX-N.left,B[r+10]=m.clientY-N.top,r+=13,31<++T)break;B[p+8>>2]=T;L(d)(e,p,b)&&f.preventDefault()},Nb:c})}
function gb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function jb(a){a.xc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function kb(a){a.zc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function lb(a){a.Bc=a.getExtension("WEBGL_multi_draw")}var mb=1,nb=[],Q=[],ob=[],pb=[],qb=[],R=[],rb=[],sb=[],tb={},ub=4;function S(a){vb||(vb=a)}function wb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}
function xb(a,b){a.Qb||(a.Qb=a.getContext,a.getContext=function(d,e){e=a.Qb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.fc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?yb(c,b):0}function yb(a,b){var c=wb(sb),d={yc:c,attributes:b,version:b.fc,Yb:a};a.canvas&&(a.canvas.uc=d);sb[c]=d;("undefined"==typeof b.dc||b.dc)&&zb(d);return c}
function zb(a){a||(a=U);if(!a.tc){a.tc=!0;var b=a.Yb;gb(b);hb(b);ib(b);jb(b);kb(b);2<=a.version&&(b.cc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.cc)b.cc=b.getExtension("EXT_disjoint_timer_query");lb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var vb,U;function Ab(a,b,c,d,e,k){a={target:K(a),Mb:k,Ob:d,Pb:(f=event)=>{L(d)(e,0,b)&&f.preventDefault()},Nb:c};I(a)}
function Bb(a,b,c,d){Va||(Va=O(104));return I({target:a,Tb:!0,Mb:"wheel",Ob:d,Pb:function(e=event){var k=Va;bb(k,e,a);D[k+72>>3]=e.deltaX;D[k+80>>3]=e.deltaY;D[k+88>>3]=e.deltaZ;B[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},Nb:c})}var Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var e=0;e<a;e++){var k=V[c](),f=k&&wb(d);k?(k.name=f,d[f]=k):S(1282);B[b+4*e>>2]=f}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){S(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}B[b>>2]=c}else S(1281)}
function Fb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Gb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Hb=[];function Ib(a){a-=5120;return 0==a?ka:1==a?A:2==a?la:4==a?B:6==a?C:5==a||28922==a||28520==a||30779==a||30782==a?na:ma}function W(a){var b=V.qc;if(b){var c=b.Sb[a];"number"==typeof c&&(b.Sb[a]=c=V.getUniformLocation(b,b.oc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];
function Jb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);ja=!0}h(a,new v(a))}function Kb(a){var b=Fb(a)+1,c=Lb(b);M(a,c,b);return c}for(var V,Z=0;32>Z;++Z)Hb.push(Array(Z));var Mb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Mb.subarray(0,Z+1);var Nb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Nb.subarray(0,Z+1);
var Yb={j:function(){z("")},ca:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},da:function(a,b,c){a=K(a);if(!a)return-4;a=Ya(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},Wa:function(a,b,c){A.copyWithin(a,b,b+c)},Ta:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Va:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);
d+=(65536-d%65536)%65536;a:{var f=ia.buffer;try{ia.grow(k.call(e,2147483648,d)-f.byteLength+65535>>>16);oa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},M:function(a,b,c,d){return $a(a,b,c,d,12,"blur")},ba:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},N:function(a,b,c,d){return $a(a,b,c,d,13,"focus")},W:function(a,b,c,d){return ab(a,b,c,d,2,"keydown")},U:function(a,b,c,d){return ab(a,b,c,d,1,"keypress")},V:function(a,b,c,d){return ab(a,b,c,d,3,"keyup")},aa:function(a,
b,c,d){return P(a,b,c,d,5,"mousedown")},Z:function(a,b,c,d){return P(a,b,c,d,33,"mouseenter")},Y:function(a,b,c,d){return P(a,b,c,d,34,"mouseleave")},_:function(a,b,c,d){return P(a,b,c,d,8,"mousemove")},$:function(a,b,c,d){return P(a,b,c,d,6,"mouseup")},P:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Qb||document.body.ac||document.body.$b))return-1;a=K(a);if(!a)return-4;cb(a,b,c,d,"mozpointerlockchange");cb(a,b,c,d,"webkitpointerlockchange");cb(a,
b,c,d,"mspointerlockchange");return cb(a,b,c,d,"pointerlockchange")},O:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Qb||document.body.ac||document.body.$b))return-1;a=K(a);if(!a)return-4;db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return db(a,b,c,d,"pointerlockerror")},Ua:function(a,b,c,d){return eb(a,b,c,d)},Q:function(a,b,c,d){return fb(a,b,c,d,25,"touchcancel")},R:function(a,b,c,d){return fb(a,b,c,
d,23,"touchend")},S:function(a,b,c,d){return fb(a,b,c,d,24,"touchmove")},T:function(a,b,c,d){return fb(a,b,c,d,22,"touchstart")},L:function(a,b,c,d){Ab(a,b,c,d,31,"webglcontextlost");return 0},K:function(a,b,c,d){Ab(a,b,c,d,32,"webglcontextrestored");return 0},X:function(a,b,c,d){return(a=K(a))?"undefined"!=typeof a.onwheel?Bb(a,b,c,d):-1:-4},Ra:function(a,b){b>>=2;b={alpha:!!B[b],depth:!!B[b+1],stencil:!!B[b+2],antialias:!!B[b+3],premultipliedAlpha:!!B[b+4],preserveDrawingBuffer:!!B[b+5],powerPreference:Cb[B[b+
6]],failIfMajorPerformanceCaveat:!!B[b+7],fc:B[b+8],Ac:B[b+9],dc:B[b+10],sc:B[b+11],Cc:B[b+12],Dc:B[b+13]};a=K(a);return!a||b.sc?0:xb(a,b)},Pa:function(a,b){a=sb[a];b=J(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&gb(V);"OES_vertex_array_object"==b&&hb(V);"WEBGL_draw_buffers"==b&&ib(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&jb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&kb(V);"WEBGL_multi_draw"==b&&lb(V);return!!a.Yb.getExtension(b)},Sa:function(a){a>>=
2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},Qa:function(a){U=sb[a];g.wc=V=U&&U.Yb;return!a||V?0:-5},g:function(a){V.activeTexture(a)},z:function(a,b){V.attachShader(Q[a],R[b])},d:function(a,b){35051==a?V.bc=b:35052==a&&(V.Ub=b);V.bindBuffer(a,nb[b])},k:function(a,b){V.bindFramebuffer(a,ob[b])},a:function(a,b){V.bindTexture(a,qb[b])},I:function(a){V.bindVertexArray(rb[a])},E:function(a,b,c,d){V.blendColor(a,b,c,d)},F:function(a,b){V.blendEquationSeparate(a,b)},G:function(a,
b,c,d){V.blendFuncSeparate(a,b,c,d)},Ya:function(a,b,c,d,e,k,f,m,n,p){V.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},za:function(a,b,c,d){2<=U.version?c&&b?V.bufferData(a,A,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?A.subarray(c,c+b):b,d)},ya:function(a,b,c,d){2<=U.version?c&&V.bufferSubData(a,b,A,d,c):V.bufferSubData(a,b,A.subarray(d,d+c))},rb:function(a,b,c,d){V.clearBufferfi(a,b,c,d)},ia:function(a,b,c){V.clearBufferfv(a,b,C,c>>2)},qb:function(a,b,c){V.clearBufferiv(a,b,B,c>>2)},h:function(a,b,c,d){V.colorMask(!!a,
!!b,!!c,!!d)},na:function(a){V.compileShader(R[a])},ta:function(){var a=wb(Q),b=V.createProgram();b.name=a;b.Xb=b.Vb=b.Wb=0;b.Zb=1;Q[a]=b;return a},pa:function(a){var b=wb(R);R[b]=V.createShader(a);return b},B:function(a){V.cullFace(a)},La:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=nb[d];e&&(V.deleteBuffer(e),e.name=0,nb[d]=null,d==V.bc&&(V.bc=0),d==V.Ub&&(V.Ub=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],e=ob[d];e&&(V.deleteFramebuffer(e),e.name=0,ob[d]=null)}},J:function(a){if(a){var b=
Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=pb[d];e&&(V.deleteRenderbuffer(e),e.name=0,pb[d]=null)}},q:function(a){if(a){var b=R[a];b?(V.deleteShader(b),R[a]=null):S(1281)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=qb[d];e&&(V.deleteTexture(e),e.name=0,qb[d]=null)}},Ha:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];V.deleteVertexArray(rb[d]);rb[d]=null}},t:function(a){V.depthFunc(a)},s:function(a){V.depthMask(!!a)},
c:function(a){V.disable(a)},H:function(a){V.disableVertexAttribArray(a)},_a:function(a,b,c){V.drawArrays(a,b,c)},ab:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},bb:function(a,b,c,d){V.drawElements(a,b,c,d)},cb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},f:function(a){V.enable(a)},nb:function(a){V.enableVertexAttribArray(a)},C:function(a){V.frontFace(a)},Aa:function(a,b){Db(a,b,"createBuffer",nb)},xa:function(a,b){Db(a,b,"createTexture",qb)},Ga:function(a,b){Db(a,b,"createVertexArray",
rb)},la:function(a,b){return V.getAttribLocation(Q[a],J(b))},b:function(a,b){Eb(a,b)},ra:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(B[c>>2]=b)},y:function(a,b,c){if(c)if(a>=mb)S(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1;else if(35719==b){if(!a.Xb)for(b=0;b<V.getProgramParameter(a,35718);++b)a.Xb=Math.max(a.Xb,V.getActiveUniform(a,b).name.length+1);B[c>>2]=a.Xb}else if(35722==
b){if(!a.Vb)for(b=0;b<V.getProgramParameter(a,35721);++b)a.Vb=Math.max(a.Vb,V.getActiveAttrib(a,b).name.length+1);B[c>>2]=a.Vb}else if(35381==b){if(!a.Wb)for(b=0;b<V.getProgramParameter(a,35382);++b)a.Wb=Math.max(a.Wb,V.getActiveUniformBlockName(a,b).length+1);B[c>>2]=a.Wb}else B[c>>2]=V.getProgramParameter(a,b);else S(1281)},ma:function(a,b,c,d){a=V.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(B[c>>2]=b)},w:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(R[a]),
null===a&&(a="(unknown error)"),B[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(R[a]),B[c>>2]=a?a.length+1:0):B[c>>2]=V.getShaderParameter(R[a],b):S(1281)},Ma:function(a,b){if(2>U.version)return S(1282),0;var c=tb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Fb(d)+1,k=O(e);k&&M(d,k,e);return k}),c=tb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),
0}},l:function(a,b){b=J(b);if(a=Q[a]){var c=a,d=c.Sb,e=c.pc,k;if(!d)for(c.Sb=d={},c.oc={},k=0;k<V.getProgramParameter(c,35718);++k){var f=V.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Gb(m);n=0<n?m.slice(0,n):m;var p=c.Zb;c.Zb+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.oc[p++]=n}c=a.Sb;d=0;e=b;k=Gb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.pc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else S(1281);return-1},Xa:function(a,b,c){for(var d=Hb[b],e=0;e<b;e++)d[e]=
B[c+4*e>>2];V.invalidateFramebuffer(a,d)},sa:function(a){a=Q[a];V.linkProgram(a);a.Sb=0;a.pc={}},Fa:function(a,b){3317==a&&(ub=b);V.pixelStorei(a,b)},D:function(a,b){V.polygonOffset(a,b)},Za:function(a){V.readBuffer(a)},ja:function(a,b,c,d){V.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?B[d+4*k>>2]:-1;e+=J(B[c+4*k>>2],0>f?void 0:f)}V.shaderSource(R[a],e)},Da:function(a,b,c){V.stencilFunc(a,b,c)},ha:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},r:function(a){V.stencilMask(a)},
Ca:function(a,b,c){V.stencilOp(a,b,c)},ga:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},va:function(a,b,c,d,e,k,f,m,n){if(2<=U.version)if(V.Ub)V.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=Ib(m);V.texImage2D(a,b,c,d,e,k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,b,c,d,e,k,f,m,null);else{p=V;var w=p.texImage2D;if(n){var r=Ib(m),N=31-Math.clz32(r.BYTES_PER_ELEMENT),T=ub;n=r.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<
N)+T-1&-T)>>N)}else n=null;w.call(p,a,b,c,d,e,k,f,m,n)}},ua:function(a,b,c,d,e,k,f,m,n,p){if(V.Ub)V.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var w=Ib(n);V.texImage3D(a,b,c,d,e,k,f,m,n,w,p>>31-Math.clz32(w.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,k,f,m,n,null)},A:function(a,b,c){V.texParameterf(a,b,c)},e:function(a,b,c){V.texParameteri(a,b,c)},mb:function(a,b,c){if(2<=U.version)b&&V.uniform1fv(W(a),C,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>
2,c+4*b>>2);V.uniform1fv(W(a),d)}},x:function(a,b){V.uniform1i(W(a),b)},hb:function(a,b,c){if(2<=U.version)b&&V.uniform1iv(W(a),B,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)}},lb:function(a,b,c){if(2<=U.version)b&&V.uniform2fv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)}},gb:function(a,b,c){if(2<=U.version)b&&
V.uniform2iv(W(a),B,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)}},jb:function(a,b,c){if(2<=U.version)b&&V.uniform3fv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)}},fb:function(a,b,c){if(2<=U.version)b&&V.uniform3iv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=
Y[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)}},ib:function(a,b,c){if(2<=U.version)b&&V.uniform4fv(W(a),C,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=C;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=C.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)}},eb:function(a,b,c){if(2<=U.version)b&&V.uniform4iv(W(a),B,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<
4*b;e+=4)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2],d[e+3]=B[c+(4*e+12)>>2];else d=B.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)}},db:function(a,b,c,d){if(2<=U.version)b&&V.uniformMatrix4fv(W(a),!!c,C,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=C;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=
k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=C.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)}},m:function(a){a=Q[a];V.useProgram(a);V.qc=a},ob:function(a,b){V.vertexAttribDivisor(a,b)},pb:function(a,b,c,d,e,k){V.vertexAttribPointer(a,b,c,!!d,e,k)},ka:function(a,b,c,d){V.viewport(a,b,c,d)},Oa:function(){g.ic=a=>{0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.ic)},Ja:function(){g.nc=a=>{const b=a.clipboardData.getData("text");Ea(()=>{const c=Kb(b);
Pb(c)})};window.addEventListener("paste",g.nc)},Ba:function(a){g.Ec=[];a=J(a);a=document.getElementById(a);g.jc=b=>{b.stopPropagation();b.preventDefault()};g.kc=b=>{b.stopPropagation();b.preventDefault()};g.lc=b=>{b.stopPropagation();b.preventDefault()};g.mc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Fc=c;Qb(c.length);for(let e=0;e<c.length;e++)Ea(()=>{const k=Kb(c[e].name);Rb(e,k)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Sb(b.clientX,
b.clientY,d)};a.addEventListener("dragenter",g.jc,!1);a.addEventListener("dragleave",g.kc,!1);a.addEventListener("dragover",g.lc,!1);a.addEventListener("drop",g.mc,!1)},kb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},
qa:function(a){a=J(a);g.Rb=document.getElementById(a);g.Rb||console.log("sokol_app.h: invalid target:"+a);g.Rb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Na:function(){window.removeEventListener("beforeunload",g.ic)},Ea:function(){window.removeEventListener("paste",g.nc)},wa:function(a){a=J(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.jc);a.removeEventListener("dragleave",g.kc);a.removeEventListener("dragover",g.lc);a.removeEventListener("drop",
g.mc)},v:function(){g.Rb&&g.Rb.requestPointerLock&&g.Rb.requestPointerLock()},$a:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(A.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},u:function(a,b,c,d,e,k){b=J(b);
const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(A.set(n,e),Ub(a,d,p)):Vb(a)}else Wb(a,f.status)};f.send()},fa:function(a,b){b=J(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=
c.getResponseHeader("Content-Length");Xb(a,d)}else Wb(a,c.status)};c.send()},ea:function(a,b){b=J(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;g.asm=c;ia=g.asm.sb;oa();pa=g.asm.Ib;ra.unshift(g.asm.tb);E--;g.monitorRunDependencies&&g.monitorRunDependencies(E);if(0==E&&(null!==wa&&(clearInterval(wa),wa=null),F)){var d=F;F=null;d()}return c}var b={a:Yb};E++;g.monitorRunDependencies&&g.monitorRunDependencies(E);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}Ca(b,function(c){a(c.instance)});return{}})();
var Tb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.ub).apply(null,arguments)},Pb=g.__sapp_emsc_onpaste=function(){return(Pb=g.__sapp_emsc_onpaste=g.asm.vb).apply(null,arguments)},Ob=g.__sapp_html5_get_ask_leave_site=function(){return(Ob=g.__sapp_html5_get_ask_leave_site=g.asm.wb).apply(null,arguments)},Qb=g.__sapp_emsc_begin_drop=function(){return(Qb=g.__sapp_emsc_begin_drop=g.asm.xb).apply(null,arguments)},Rb=g.__sapp_emsc_drop=function(){return(Rb=
g.__sapp_emsc_drop=g.asm.yb).apply(null,arguments)},Sb=g.__sapp_emsc_end_drop=function(){return(Sb=g.__sapp_emsc_end_drop=g.asm.zb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Ab).apply(null,arguments)};var Zb=g._main=function(){return(Zb=g._main=g.asm.Bb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Cb).apply(null,arguments)};
var Xb=g.__sfetch_emsc_head_response=function(){return(Xb=g.__sfetch_emsc_head_response=g.asm.Db).apply(null,arguments)},Ub=g.__sfetch_emsc_get_response=function(){return(Ub=g.__sfetch_emsc_get_response=g.asm.Eb).apply(null,arguments)},Wb=g.__sfetch_emsc_failed_http_status=function(){return(Wb=g.__sfetch_emsc_failed_http_status=g.asm.Fb).apply(null,arguments)},Vb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Vb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.Gb).apply(null,arguments)};
function O(){return(O=g.asm.Hb).apply(null,arguments)}function Fa(){return(Fa=g.asm.Jb).apply(null,arguments)}function Ga(){return(Ga=g.asm.Kb).apply(null,arguments)}function Lb(){return(Lb=g.asm.Lb).apply(null,arguments)}g.___start_em_js=16616;g.___stop_em_js=26291;var $b;F=function ac(){$b||bc();$b||(F=ac)};function cc(a=[]){var b=Zb;a.unshift(ca);var c=a.length,d=Lb(4*(c+1)),e=d>>2;a.forEach(f=>{B[e++]=Kb(f)});B[e]=0;try{var k=b(c,d);Jb(k)}catch(f){f instanceof v||"unwind"==f||h(1,f)}}
function bc(){var a=ba;function b(){if(!$b&&($b=!0,g.calledRun=!0,!ja)){Da(ra);Da(sa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();dc&&cc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();ua.unshift(c)}Da(ua)}}if(!(0<E)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)va();Da(qa);0<E||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var dc=!0;g.noInitialRun&&(dc=!1);bc();
