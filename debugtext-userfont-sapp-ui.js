var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,u,v;
if(ea){var fs=require("fs"),ha=require("path");r=l?ha.dirname(r)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};u=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof w||a.context instanceof w))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};f.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=f.print||console.log.bind(console),x=f.printErr||console.error.bind(console);Object.assign(f,aa);
aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1,ma,z,na,oa,A,B,C,D;
function pa(){var a=ka.buffer;f.HEAP8=ma=new Int8Array(a);f.HEAP16=na=new Int16Array(a);f.HEAP32=A=new Int32Array(a);f.HEAPU8=z=new Uint8Array(a);f.HEAPU16=oa=new Uint16Array(a);f.HEAPU32=B=new Uint32Array(a);f.HEAPF32=C=new Float32Array(a);f.HEAPF64=D=new Float64Array(a)}var qa,ra=[],sa=[],ta=[],ua=[],va=[];function wa(){var a=f.preRun.shift();ra.unshift(a)}var E=0,xa=null,F=null;
function ja(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function ya(a){return a.startsWith("data:application/octet-stream;base64,")}var G;G="debugtext-userfont-sapp-ui.wasm";if(!ya(G)){var za=G;G=f.locateFile?f.locateFile(za,r):r+za}function Aa(a){try{if(a==G&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ba(a){if(!y&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Aa(a));if(u)return new Promise((b,c)=>{u(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Aa(a))}function Ca(a,b,c){return Ba(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);ja(d)})}
function Da(a,b){var c=G;y||"function"!=typeof WebAssembly.instantiateStreaming||ya(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Ca(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){x("wasm streaming compile failed: "+e);x("falling back to ArrayBuffer instantiation");return Ca(c,a,b)}))}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ea(a){for(;0<a.length;)a.shift()(f)}var Fa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ga(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Fa)return Fa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function H(a,b){return a?Ga(z,a,b):""}
function Ha(a){var b=Ia();a();Ja(b)}var Ka=0;function La(){for(var a=I.length-1;0<=a;--a)Ma(a);I=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.fc)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Sc.apply(null,b.Hc)}}var I=[];function Ma(a){var b=I[a];b.target.removeEventListener(b.Yb,b.Dc,b.Zb);I.splice(a,1)}
function J(a){function b(d){++Ka;Pa=a;Oa();a.ac(d);Oa();--Ka}if(!a.target)return-4;if(a.$b)a.Dc=b,a.target.addEventListener(a.Yb,b,a.Zb),I.push(a),Qa||(ua.push(La),Qa=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].Yb==a.Yb&&Ma(c--);return 0}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function K(a){a=2<a?H(a):a;return Za[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var ab=[];function L(a){var b=ab[a];b||(a>=ab.length&&(ab.length=a+1),ab[a]=b=qa.get(a));return b}
function M(a,b,c){var d=z;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-e}
function bb(a,b,c,d,e,k){Sa||(Sa=O(256));a={target:K(a),Yb:k,$b:d,ac:function(g=event){var m=g.target.id?g.target.id:"",n=Sa;M(Ra(g.target),n+0,128);M(m,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Zb:c};return J(a)}
function cb(a,b,c,d,e,k){Ta||(Ta=O(176));a={target:K(a),fc:!0,Yb:k,$b:d,ac:function(g){var m=Ta;D[m>>3]=g.timeStamp;var n=m>>2;A[n+2]=g.location;A[n+3]=g.ctrlKey;A[n+4]=g.shiftKey;A[n+5]=g.altKey;A[n+6]=g.metaKey;A[n+7]=g.repeat;A[n+8]=g.charCode;A[n+9]=g.keyCode;A[n+10]=g.which;M(g.key||"",m+44,32);M(g.code||"",m+76,32);M(g.char||"",m+108,32);M(g.locale||"",m+140,32);L(d)(e,m,b)&&g.preventDefault()},Zb:c};return J(a)}
function db(a,b,c){D[a>>3]=b.timeStamp;a>>=2;A[a+2]=b.screenX;A[a+3]=b.screenY;A[a+4]=b.clientX;A[a+5]=b.clientY;A[a+6]=b.ctrlKey;A[a+7]=b.shiftKey;A[a+8]=b.altKey;A[a+9]=b.metaKey;na[2*a+20]=b.button;na[2*a+21]=b.buttons;A[a+11]=b.movementX;A[a+12]=b.movementY;c=$a(c);A[a+13]=b.clientX-c.left;A[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Ua||(Ua=O(72));a=K(a);return J({target:a,fc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Yb:k,$b:d,ac:function(g=event){db(Ua,g,a);L(d)(e,Ua,b)&&g.preventDefault()},Zb:c})}function eb(a,b,c,d,e){Va||(Va=O(260));return J({target:a,Yb:e,$b:d,ac:function(k=event){var g=Va,m=document.pointerLockElement||document.dc||document.mc||document.nc;A[g>>2]=!!m;var n=m&&m.id?m.id:"";M(Ra(m),g+4,128);M(n,g+132,128);L(d)(20,g,b)&&k.preventDefault()},Zb:c})}
function fb(a,b,c,d,e){return J({target:a,Yb:e,$b:d,ac:function(k=event){L(d)(38,0,b)&&k.preventDefault()},Zb:c})}
function gb(a,b,c,d){Wa||(Wa=O(36));a=K(a);return J({target:a,Yb:"resize",$b:d,ac:function(e=event){if(e.target==a){var k=document.body;if(k){var g=Wa;A[g>>2]=e.detail;A[g+4>>2]=k.clientWidth;A[g+8>>2]=k.clientHeight;A[g+12>>2]=innerWidth;A[g+16>>2]=innerHeight;A[g+20>>2]=outerWidth;A[g+24>>2]=outerHeight;A[g+28>>2]=pageXOffset;A[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Zb:c})}
function hb(a,b,c,d,e,k){Xa||(Xa=O(1696));a=K(a);return J({target:a,fc:"touchstart"==k||"touchend"==k,Yb:k,$b:d,ac:function(g){for(var m,n={},p=g.touches,q=0;q<p.length;++q)m=p[q],m.rc=m.tc=0,n[m.identifier]=m;for(q=0;q<g.changedTouches.length;++q)m=g.changedTouches[q],m.rc=1,n[m.identifier]=m;for(q=0;q<g.targetTouches.length;++q)n[g.targetTouches[q].identifier].tc=1;p=Xa;D[p>>3]=g.timeStamp;var t=p>>2;A[t+3]=g.ctrlKey;A[t+4]=g.shiftKey;A[t+5]=g.altKey;A[t+6]=g.metaKey;t+=7;var N=$a(a),U=0;for(q in n)if(m=
n[q],A[t]=m.identifier,A[t+1]=m.screenX,A[t+2]=m.screenY,A[t+3]=m.clientX,A[t+4]=m.clientY,A[t+5]=m.pageX,A[t+6]=m.pageY,A[t+7]=m.rc,A[t+8]=m.tc,A[t+9]=m.clientX-N.left,A[t+10]=m.clientY-N.top,t+=13,31<++U)break;A[p+8>>2]=U;L(d)(e,p,b)&&g.preventDefault()},Zb:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function lb(a){a.Jc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function mb(a){a.Lc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function nb(a){a.Nc=a.getExtension("WEBGL_multi_draw")}var ob=1,pb=[],Q=[],qb=[],rb=[],sb=[],R=[],tb=[],ub=[],vb={},wb=4;function S(a){xb||(xb=a)}function yb(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a,b){a.dc||(a.dc=a.getContext,a.getContext=function(d,e){e=a.dc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.sc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Ab(c,b):0}function Ab(a,b){var c=yb(ub),d={Kc:c,attributes:b,version:b.sc,kc:a};a.canvas&&(a.canvas.Gc=d);ub[c]=d;("undefined"==typeof b.qc||b.qc)&&Bb(d);return c}
function Bb(a){a||(a=T);if(!a.Fc){a.Fc=!0;var b=a.kc;ib(b);jb(b);kb(b);lb(b);mb(b);2<=a.version&&(b.pc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.pc)b.pc=b.getExtension("EXT_disjoint_timer_query");nb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var xb,T;function Cb(a,b,c,d,e,k){a={target:K(a),Yb:k,$b:d,ac:(g=event)=>{L(d)(e,0,b)&&g.preventDefault()},Zb:c};J(a)}
function Db(a,b,c,d){Ya||(Ya=O(104));return J({target:a,fc:!0,Yb:"wheel",$b:d,ac:function(e=event){var k=Ya;db(k,e,a);D[k+72>>3]=e.deltaX;D[k+80>>3]=e.deltaY;D[k+88>>3]=e.deltaZ;A[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},Zb:c})}var Eb=["default","low-power","high-performance"],Fb=[null,[],[]];function Gb(a,b,c,d){for(var e=0;e<a;e++){var k=V[c](),g=k&&yb(d);k?(k.name=g,d[g]=k):S(1282);A[b+4*e>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)A[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}A[b>>2]=c}else S(1281)}
function Ib(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Jb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Kb=[];function Lb(a){a-=5120;return 0==a?ma:1==a?z:2==a?na:4==a?A:6==a?C:5==a||28922==a||28520==a||30779==a||30782==a?B:oa}function W(a){var b=V.Cc;if(b){var c=b.ec[a];"number"==typeof c&&(b.ec[a]=c=V.getUniformLocation(b,b.Ac[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];
function Mb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);la=!0}h(a,new w(a))}function Nb(a){var b=Ib(a)+1,c=Ob(b);M(a,c,b);return c}for(var V,Z=0;32>Z;++Z)Kb.push(Array(Z));var Pb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var Xb={ka:function(){return 0},cb:function(){return 0},eb:function(){},h:function(){ja("")},ga:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=K(a);if(!a)return-4;a=$a(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},$a:function(a,b,c){z.copyWithin(a,b,b+c)},Va:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/
c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var g=ka.buffer;try{ka.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);pa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},Q:function(a,b,c,d){return bb(a,b,c,d,12,"blur")},fa:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:function(a,b,c,d){return bb(a,b,c,d,13,"focus")},_:function(a,b,c,d){return cb(a,b,c,d,2,"keydown")},Y:function(a,b,c,d){return cb(a,b,c,d,1,"keypress")},
Z:function(a,b,c,d){return cb(a,b,c,d,3,"keyup")},ea:function(a,b,c,d){return P(a,b,c,d,5,"mousedown")},ba:function(a,b,c,d){return P(a,b,c,d,33,"mouseenter")},aa:function(a,b,c,d){return P(a,b,c,d,34,"mouseleave")},ca:function(a,b,c,d){return P(a,b,c,d,8,"mousemove")},da:function(a,b,c,d){return P(a,b,c,d,6,"mouseup")},T:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.dc||document.body.mc||document.body.nc))return-1;a=K(a);if(!a)return-4;eb(a,b,c,
d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return eb(a,b,c,d,"pointerlockchange")},S:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.dc||document.body.mc||document.body.nc))return-1;a=K(a);if(!a)return-4;fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return fb(a,b,c,d,"pointerlockerror")},Wa:function(a,b,c,d){return gb(a,b,c,d)},U:function(a,b,c,d){return hb(a,
b,c,d,25,"touchcancel")},V:function(a,b,c,d){return hb(a,b,c,d,23,"touchend")},W:function(a,b,c,d){return hb(a,b,c,d,24,"touchmove")},X:function(a,b,c,d){return hb(a,b,c,d,22,"touchstart")},P:function(a,b,c,d){Cb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){Cb(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){return(a=K(a))?"undefined"!=typeof a.onwheel?Db(a,b,c,d):-1:-4},Ta:function(a,b){b>>=2;b={alpha:!!A[b],depth:!!A[b+1],stencil:!!A[b+2],antialias:!!A[b+3],premultipliedAlpha:!!A[b+
4],preserveDrawingBuffer:!!A[b+5],powerPreference:Eb[A[b+6]],failIfMajorPerformanceCaveat:!!A[b+7],sc:A[b+8],Mc:A[b+9],qc:A[b+10],Ec:A[b+11],Oc:A[b+12],Pc:A[b+13]};a=K(a);return!a||b.Ec?0:zb(a,b)},Ra:function(a,b){a=ub[a];b=H(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(V);"OES_vertex_array_object"==b&&jb(V);"WEBGL_draw_buffers"==b&&kb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&lb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&mb(V);"WEBGL_multi_draw"==
b&&nb(V);return!!a.kc.getExtension(b)},Ua:function(a){a>>=2;for(var b=0;14>b;++b)A[a+b]=0;A[a]=A[a+1]=A[a+3]=A[a+4]=A[a+8]=A[a+10]=1},Sa:function(a){T=ub[a];f.Ic=V=T&&T.kc;return!a||V?0:-5},ja:function(){return 52},bb:function(){return 52},Za:function(){return 70},ab:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=B[b>>2],m=B[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=z[g+n],q=Fb[a];0===p||10===p?((1===a?ia:x)(Ga(q,0)),q.length=0):q.push(p)}e+=m}B[d>>2]=e;return 0},g:function(a){V.activeTexture(a)},
C:function(a,b){V.attachShader(Q[a],R[b])},b:function(a,b){35051==a?V.oc=b:35052==a&&(V.cc=b);V.bindBuffer(a,pb[b])},r:function(a,b){V.bindFramebuffer(a,qb[b])},Ca:function(a,b){V.bindRenderbuffer(a,rb[b])},a:function(a,b){V.bindTexture(a,sb[b])},L:function(a){V.bindVertexArray(tb[a])},H:function(a,b,c,d){V.blendColor(a,b,c,d)},I:function(a,b){V.blendEquationSeparate(a,b)},J:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},gb:function(a,b,c,d,e,k,g,m,n,p){V.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Ea:function(a,
b,c,d){2<=T.version?c&&b?V.bufferData(a,z,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?z.subarray(c,c+b):b,d)},l:function(a,b,c,d){2<=T.version?c&&V.bufferSubData(a,b,z,d,c):V.bufferSubData(a,b,z.subarray(d,d+c))},zb:function(a,b,c,d){V.clearBufferfi(a,b,c,d)},Ab:function(a,b,c){V.clearBufferfv(a,b,C,c>>2)},m:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},oa:function(a){V.compileShader(R[a])},ya:function(a,b,c,d,e,k,g,m){2<=T.version?V.cc||!g?V.compressedTexImage2D(a,b,c,d,e,k,g,m):V.compressedTexImage2D(a,
b,c,d,e,k,z,m,g):V.compressedTexImage2D(a,b,c,d,e,k,m?z.subarray(m,m+g):null)},wa:function(a,b,c,d,e,k,g,m,n){V.cc?V.compressedTexImage3D(a,b,c,d,e,k,g,m,n):V.compressedTexImage3D(a,b,c,d,e,k,g,z,n,m)},ua:function(){var a=yb(Q),b=V.createProgram();b.name=a;b.jc=b.hc=b.ic=0;b.lc=1;Q[a]=b;return a},qa:function(a){var b=yb(R);R[b]=V.createShader(a);return b},E:function(a){V.cullFace(a)},Oa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=pb[d];e&&(V.deleteBuffer(e),e.name=0,pb[d]=null,d==V.oc&&
(V.oc=0),d==V.cc&&(V.cc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=A[b+4*c>>2],e=qb[d];e&&(V.deleteFramebuffer(e),e.name=0,qb[d]=null)}},x:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=rb[d];e&&(V.deleteRenderbuffer(e),e.name=0,rb[d]=null)}},t:function(a){if(a){var b=R[a];b?(V.deleteShader(b),R[a]=null):S(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=sb[d];e&&(V.deleteTexture(e),e.name=
0,sb[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2];V.deleteVertexArray(tb[d]);tb[d]=null}},w:function(a){V.depthFunc(a)},v:function(a){V.depthMask(!!a)},d:function(a){V.disable(a)},K:function(a){V.disableVertexAttribArray(a)},ib:function(a,b,c){V.drawArrays(a,b,c)},jb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},kb:function(a,b,c,d){V.drawElements(a,b,c,d)},lb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},f:function(a){V.enable(a)},vb:function(a){V.enableVertexAttribArray(a)},
F:function(a){V.frontFace(a)},Fa:function(a,b){Gb(a,b,"createBuffer",pb)},Da:function(a,b){Gb(a,b,"createRenderbuffer",rb)},za:function(a,b){Gb(a,b,"createTexture",sb)},La:function(a,b){Gb(a,b,"createVertexArray",tb)},Bb:function(a,b){return V.getAttribLocation(Q[a],H(b))},c:function(a,b){Hb(a,b)},ra:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(A[c>>2]=b)},B:function(a,b,c){if(c)if(a>=ob)S(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),A[c>>2]=a.length+1;else if(35719==b){if(!a.jc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.jc=Math.max(a.jc,V.getActiveUniform(a,b).name.length+1);A[c>>2]=a.jc}else if(35722==b){if(!a.hc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.hc=Math.max(a.hc,V.getActiveAttrib(a,b).name.length+1);A[c>>2]=a.hc}else if(35381==b){if(!a.ic)for(b=0;b<V.getProgramParameter(a,35382);++b)a.ic=Math.max(a.ic,V.getActiveUniformBlockName(a,b).length+1);A[c>>2]=a.ic}else A[c>>2]=V.getProgramParameter(a,
b);else S(1281)},Cb:function(a,b,c,d){a=V.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(A[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),A[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(R[a]),A[c>>2]=a?a.length+1:0):A[c>>2]=V.getShaderParameter(R[a],b):S(1281)},Pa:function(a,b){if(2>T.version)return S(1282),0;var c=vb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||
[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Ib(d)+1,k=O(e);k&&M(d,k,e);return k}),c=vb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},k:function(a,b){b=H(b);if(a=Q[a]){var c=a,d=c.ec,e=c.Bc,k;if(!d)for(c.ec=d={},c.Ac={},k=0;k<V.getProgramParameter(c,35718);++k){var g=V.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Jb(m);n=0<n?m.slice(0,n):m;var p=c.lc;c.lc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Ac[p++]=n}c=a.ec;d=0;e=b;k=Jb(b);0<k&&(d=parseInt(b.slice(k+
1))>>>0,e=b.slice(0,k));if((e=a.Bc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else S(1281);return-1},fb:function(a,b,c){for(var d=Kb[b],e=0;e<b;e++)d[e]=A[c+4*e>>2];V.invalidateFramebuffer(a,d)},sa:function(a){a=Q[a];V.linkProgram(a);a.ec=0;a.Bc={}},Ka:function(a,b){3317==a&&(wb=b);V.pixelStorei(a,b)},G:function(a,b){V.polygonOffset(a,b)},hb:function(a){V.readBuffer(a)},Aa:function(a,b,c,d,e){V.renderbufferStorageMultisample(a,b,c,d,e)},p:function(a,b,c,d){V.scissor(a,b,
c,d)},pa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?A[d+4*k>>2]:-1;e+=H(A[c+4*k>>2],0>g?void 0:g)}V.shaderSource(R[a],e)},Ia:function(a,b,c){V.stencilFunc(a,b,c)},na:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},u:function(a){V.stencilMask(a)},Ha:function(a,b,c){V.stencilOp(a,b,c)},ma:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,e,k,g,m,n){if(2<=T.version)if(V.cc)V.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Lb(m);V.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,
b,c,d,e,k,g,m,null);else{p=V;var q=p.texImage2D;if(n){var t=Lb(m),N=31-Math.clz32(t.BYTES_PER_ELEMENT),U=wb;n=t.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+U-1&-U)>>N)}else n=null;q.call(p,a,b,c,d,e,k,g,m,n)}},va:function(a,b,c,d,e,k,g,m,n,p){if(V.cc)V.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var q=Lb(n);V.texImage3D(a,b,c,d,e,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,k,g,m,n,null)},D:function(a,b,c){V.texParameterf(a,
b,c)},e:function(a,b,c){V.texParameteri(a,b,c)},ub:function(a,b,c){if(2<=T.version)b&&V.uniform1fv(W(a),C,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)}},A:function(a,b){V.uniform1i(W(a),b)},qb:function(a,b,c){if(2<=T.version)b&&V.uniform1iv(W(a),A,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)}},tb:function(a,b,c){if(2<=T.version)b&&V.uniform2fv(W(a),
C,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)}},pb:function(a,b,c){if(2<=T.version)b&&V.uniform2iv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)}},sb:function(a,b,c){if(2<=T.version)b&&V.uniform3fv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],
d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)}},ob:function(a,b,c){if(2<=T.version)b&&V.uniform3iv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)}},rb:function(a,b,c){if(2<=T.version)b&&V.uniform4fv(W(a),C,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=C;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+
1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=C.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)}},nb:function(a,b,c){if(2<=T.version)b&&V.uniform4iv(W(a),A,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2],d[e+3]=A[c+(4*e+12)>>2];else d=A.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)}},mb:function(a,b,c,d){if(2<=T.version)b&&V.uniformMatrix4fv(W(a),!!c,C,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=C;d>>=2;for(var g=0;g<16*b;g+=16){var m=
d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=C.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)}},j:function(a){a=Q[a];V.useProgram(a);V.Cc=a},wb:function(a,b){V.vertexAttribDivisor(a,b)},yb:function(a,b,c,d,e,k){V.vertexAttribPointer(a,b,c,!!d,e,k)},q:function(a,b,c,d){V.viewport(a,b,c,d)},Qa:function(){f.uc=
a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.uc)},Ja:function(){f.zc=a=>{const b=a.clipboardData.getData("text");Ha(()=>{const c=Nb(b);Sb(c)})};window.addEventListener("paste",f.zc)},ta:function(a){f.Qc=[];a=H(a);a=document.getElementById(a);f.vc=b=>{b.stopPropagation();b.preventDefault()};f.wc=b=>{b.stopPropagation();b.preventDefault()};f.xc=b=>{b.stopPropagation();b.preventDefault()};f.yc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;
f.Rc=c;Tb(c.length);for(let e=0;e<c.length;e++)Ha(()=>{const k=Nb(c[e].name);Ub(e,k)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Vb(b.clientX,b.clientY,d)};a.addEventListener("dragenter",f.vc,!1);a.addEventListener("dragleave",f.wc,!1);a.addEventListener("dragover",f.xc,!1);a.addEventListener("drop",f.yc,!1)},Ya:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},s:function(){const a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},xb:function(a){a=H(a);f.bc=document.getElementById(a);f.bc||console.log("sokol_app.h: invalid target:"+a);f.bc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Na:function(){window.removeEventListener("beforeunload",f.uc)},Ga:function(){window.removeEventListener("paste",
f.zc)},Db:function(a){a=H(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.vc);a.removeEventListener("dragleave",f.wc);a.removeEventListener("dragover",f.xc);a.removeEventListener("drop",f.yc)},y:function(){f.bc&&f.bc.requestPointerLock&&f.bc.requestPointerLock()},db:function(a,b){if(f.bc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";
break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}f.bc.style.cursor=a}},Xa:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(z.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},
Ba:function(a){a=H(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},la:function(){return navigator.userAgent.includes("Macintosh")?1:0},ia:function(a,b){b=H(b);switch(a){case 0:console.error(b);
break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;f.asm=c;ka=f.asm.Eb;pa();qa=f.asm.Ub;sa.unshift(f.asm.Fb);E--;f.monitorRunDependencies&&f.monitorRunDependencies(E);if(0==E&&(null!==xa&&(clearInterval(xa),xa=null),F)){var d=F;F=null;d()}return c}var b={a:Xb};E++;f.monitorRunDependencies&&f.monitorRunDependencies(E);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}Da(b,function(c){a(c.instance)});return{}})();
function O(){return(O=f.asm.Gb).apply(null,arguments)}
var Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Hb).apply(null,arguments)},Sb=f.__sapp_emsc_onpaste=function(){return(Sb=f.__sapp_emsc_onpaste=f.asm.Ib).apply(null,arguments)},Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Jb).apply(null,arguments)},Tb=f.__sapp_emsc_begin_drop=function(){return(Tb=f.__sapp_emsc_begin_drop=f.asm.Kb).apply(null,arguments)},Ub=f.__sapp_emsc_drop=function(){return(Ub=
f.__sapp_emsc_drop=f.asm.Lb).apply(null,arguments)},Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.Mb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Nb).apply(null,arguments)};var Yb=f._main=function(){return(Yb=f._main=f.asm.Ob).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Pb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Qb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Rb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Sb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Tb).apply(null,arguments)};
function Ia(){return(Ia=f.asm.Vb).apply(null,arguments)}function Ja(){return(Ja=f.asm.Wb).apply(null,arguments)}function Ob(){return(Ob=f.asm.Xb).apply(null,arguments)}f.___start_em_js=42808;f.___stop_em_js=52577;var Zb;F=function $b(){Zb||ac();Zb||(F=$b)};function bc(a=[]){var b=Yb;a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(g=>{A[e++]=Nb(g)});A[e]=0;try{var k=b(c,d);Mb(k)}catch(g){g instanceof w||"unwind"==g||h(1,g)}}
function ac(){var a=ba;function b(){if(!Zb&&(Zb=!0,f.calledRun=!0,!la)){Ea(sa);Ea(ta);if(f.onRuntimeInitialized)f.onRuntimeInitialized();cc&&bc(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();va.unshift(c)}Ea(va)}}if(!(0<E)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)wa();Ea(ra);0<E||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var cc=!0;f.noInitialRun&&(cc=!1);ac();
