
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,h="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l="",ha,ia,ja,fs,ka,la;
if(fa)l=h?require("path").dirname(l)+"/":__dirname+"/",la=()=>{ka||(fs=require("fs"),ka=require("path"))},ha=function(a,b){la();a=ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a},ia=(a,b,c)=>{la();a=ka.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=g),process.on("uncaughtException",
function(a){if(!(a instanceof ma))throw a;}),process.on("unhandledRejection",function(a){throw a;}),da=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ma||r("exiting due to exception: "+b);process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(ea||h)h?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),l=0!==l.indexOf("blob:")?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},h&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var na=g.print||console.log.bind(console),r=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);
g.thisProgram&&(ca=g.thisProgram);g.quit&&(da=g.quit);var t;g.wasmBinary&&(t=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&oa("no native wasm support detected");var pa,qa=!1;
function ra(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=u(q);v(n,x,p,q)}return p},array:function(n){var p=u(n.length);sa.set(n,p);return p}};a=g["_"+a];var e=[],k=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===k&&(k=ta()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(n){0!==k&&ua(k);return n}(b)}var va="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function wa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&va)return va.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function y(a,b){return a?wa(x,a,b):""}
function v(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function xa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var ya,sa,x,za,Aa,z,A,B,C;function Ba(){var a=pa.buffer;ya=a;g.HEAP8=sa=new Int8Array(a);g.HEAP16=za=new Int16Array(a);g.HEAP32=z=new Int32Array(a);g.HEAPU8=x=new Uint8Array(a);g.HEAPU16=Aa=new Uint16Array(a);g.HEAPU32=A=new Uint32Array(a);g.HEAPF32=B=new Float32Array(a);g.HEAPF64=C=new Float64Array(a)}
var Ca,Da=[],Ea=[],Fa=[],Ga=[],Ha=[];function Ia(){var a=g.preRun.shift();Da.unshift(a)}var D=0,Ja=null,E=null;function oa(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";r(a);qa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ka(){return F.startsWith("data:application/octet-stream;base64,")}var F;F="mrt-pixelformats-sapp-ui.wasm";if(!Ka()){var La=F;F=g.locateFile?g.locateFile(La,l):l+La}
function Ma(){var a=F;try{if(a==F&&t)return new Uint8Array(t);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){oa(b)}}
function Na(){if(!t&&(ea||h)){if("function"==typeof fetch&&!F.startsWith("file://"))return fetch(F,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+F+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(ia)return new Promise(function(a,b){ia(F,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}function Oa(a){for(;0<a.length;)a.shift()(g)}var Pa=[];
function G(a){var b=Pa[a];b||(a>=Pa.length&&(Pa.length=a+1),Pa[a]=b=Ca.get(a));return b}var Qa=0;function Ra(){for(var a=H.length-1;0<=a;--a)Sa(a);H=[];Ta=[]}var Ta=[];function Ua(){if(Qa&&Va.oc)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.$c.apply(null,b.Pc)}}var H=[];function Sa(a){var b=H[a];b.target.removeEventListener(b.fc,b.Lc,b.hc);H.splice(a,1)}
function I(a){function b(d){++Qa;Va=a;Ua();a.jc(d);Ua();--Qa}if(a.ic)a.Lc=b,a.target.addEventListener(a.fc,b,a.hc),H.push(a),Wa||(Ga.push(Ra),Wa=!0);else for(var c=0;c<H.length;++c)H[c].target==a.target&&H[c].fc==a.fc&&Sa(c--)}function Xa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Wa,Va,Ya,Za,$a,ab,bb,cb,db,eb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function J(a){a=2<a?y(a):a;return eb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function fb(a){return 0>eb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function gb(a,b,c,d,e,k){Ya||(Ya=K(256));a={target:J(a),fc:k,ic:d,jc:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Ya;v(Xa(f.target),x,n+0,128);v(m,x,n+128,128);G(d)(e,n,b)&&f.preventDefault()},hc:c};I(a)}
function hb(a,b,c,d,e,k){Za||(Za=K(176));a={target:J(a),oc:!0,fc:k,ic:d,jc:function(f){var m=Za;C[m>>3]=f.timeStamp;var n=m>>2;z[n+2]=f.location;z[n+3]=f.ctrlKey;z[n+4]=f.shiftKey;z[n+5]=f.altKey;z[n+6]=f.metaKey;z[n+7]=f.repeat;z[n+8]=f.charCode;z[n+9]=f.keyCode;z[n+10]=f.which;v(f.key||"",x,m+44,32);v(f.code||"",x,m+76,32);v(f.char||"",x,m+108,32);v(f.locale||"",x,m+140,32);G(d)(e,m,b)&&f.preventDefault()},hc:c};I(a)}
function ib(a,b,c){C[a>>3]=b.timeStamp;a>>=2;z[a+2]=b.screenX;z[a+3]=b.screenY;z[a+4]=b.clientX;z[a+5]=b.clientY;z[a+6]=b.ctrlKey;z[a+7]=b.shiftKey;z[a+8]=b.altKey;z[a+9]=b.metaKey;za[2*a+20]=b.button;za[2*a+21]=b.buttons;z[a+11]=b.movementX;z[a+12]=b.movementY;c=fb(c);z[a+13]=b.clientX-c.left;z[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,k){$a||($a=K(72));a=J(a);I({target:a,oc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,fc:k,ic:d,jc:function(f){f=f||event;ib($a,f,a);G(d)(e,$a,b)&&f.preventDefault()},hc:c})}function jb(a,b,c,d,e){ab||(ab=K(260));I({target:a,fc:e,ic:d,jc:function(k){k=k||event;var f=ab,m=document.pointerLockElement||document.mc||document.yc||document.xc;z[f>>2]=!!m;var n=m&&m.id?m.id:"";v(Xa(m),x,f+4,128);v(n,x,f+132,128);G(d)(20,f,b)&&k.preventDefault()},hc:c})}
function kb(a,b,c,d,e){I({target:a,fc:e,ic:d,jc:function(k){k=k||event;G(d)(38,0,b)&&k.preventDefault()},hc:c})}
function lb(a,b,c,d){bb||(bb=K(36));a=J(a);I({target:a,fc:"resize",ic:d,jc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var f=bb;z[f>>2]=e.detail;z[f+4>>2]=k.clientWidth;z[f+8>>2]=k.clientHeight;z[f+12>>2]=innerWidth;z[f+16>>2]=innerHeight;z[f+20>>2]=outerWidth;z[f+24>>2]=outerHeight;z[f+28>>2]=pageXOffset;z[f+32>>2]=pageYOffset;G(d)(10,f,b)&&e.preventDefault()}}},hc:c})}
function mb(a,b,c,d,e,k){cb||(cb=K(1696));a=J(a);I({target:a,oc:"touchstart"==k||"touchend"==k,fc:k,ic:d,jc:function(f){for(var m,n={},p=f.touches,q=0;q<p.length;++q)m=p[q],m.zc=m.Bc=0,n[m.identifier]=m;for(q=0;q<f.changedTouches.length;++q)m=f.changedTouches[q],m.zc=1,n[m.identifier]=m;for(q=0;q<f.targetTouches.length;++q)n[f.targetTouches[q].identifier].Bc=1;p=cb;C[p>>3]=f.timeStamp;var w=p>>2;z[w+3]=f.ctrlKey;z[w+4]=f.shiftKey;z[w+5]=f.altKey;z[w+6]=f.metaKey;w+=7;var N=fb(a),ob=0;for(q in n)if(m=
n[q],z[w]=m.identifier,z[w+1]=m.screenX,z[w+2]=m.screenY,z[w+3]=m.clientX,z[w+4]=m.clientY,z[w+5]=m.pageX,z[w+6]=m.pageY,z[w+7]=m.zc,z[w+8]=m.Bc,z[w+9]=m.clientX-N.left,z[w+10]=m.clientY-N.top,w+=13,31<++ob)break;z[p+8>>2]=ob;G(d)(e,p,b)&&f.preventDefault()},hc:c})}function nb(a,b,c,d,e,k){a={target:J(a),fc:k,ic:d,jc:function(f){f=f||event;G(d)(e,0,b)&&f.preventDefault()},hc:c};I(a)}
function pb(a,b,c,d){db||(db=K(104));I({target:a,oc:!0,fc:"wheel",ic:d,jc:function(e){e=e||event;var k=db;ib(k,e,a);C[k+72>>3]=e.deltaX;C[k+80>>3]=e.deltaY;C[k+88>>3]=e.deltaZ;z[k+96>>2]=e.deltaMode;G(d)(9,k,b)&&e.preventDefault()},hc:c})}
function qb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function rb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function sb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function tb(a){a.Rc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ub(a){a.Tc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function vb(a){a.Vc=a.getExtension("WEBGL_multi_draw")}var wb=1,xb=[],M=[],yb=[],O=[],P=[],Q=[],zb=[],Ab=[],Bb={},Cb={};function R(a){Db||(Db=a)}function Eb(a){for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b}
function Fb(a,b){a.mc||(a.mc=a.getContext,a.getContext=function(d,e){e=a.mc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ac?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Gb(c,b):0}function Gb(a,b){var c=Eb(Ab),d={Sc:c,attributes:b,version:b.Ac,sc:a};a.canvas&&(a.canvas.Oc=d);Ab[c]=d;("undefined"==typeof b.wc||b.wc)&&Hb(d);return c}
function Hb(a){a||(a=S);if(!a.Nc){a.Nc=!0;var b=a.sc;qb(b);rb(b);sb(b);tb(b);ub(b);2<=a.version&&(b.vc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.vc)b.vc=b.getExtension("EXT_disjoint_timer_query");vb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Db,S,Ib=["default","low-power","high-performance"],Jb=[null,[],[]],Kb=[];
function T(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),f=k&&Eb(d);k?(k.name=f,d[f]=k):R(1282);z[b+4*e>>2]=f}}
function Lb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)z[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);r("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);r("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}z[b>>2]=c}else R(1281)}
function V(a){var b=xa(a)+1,c=K(b);v(a,x,c,b);return c}function Mb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Nb(a){a-=5120;return 0==a?sa:1==a?x:2==a?za:4==a?z:6==a?B:5==a||28922==a||28520==a||30779==a||30782==a?A:Aa}function W(a){var b=U.Kc;if(b){var c=b.nc[a];"number"==typeof c&&(b.nc[a]=c=U.getUniformLocation(b,b.Ic[a]+(0<c?"["+c+"]":"")));return c}R(1282)}for(var X=[],Y=[],U,Z=0;32>Z;++Z)Kb.push(Array(Z));var Ob=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Ob.subarray(0,Z+1);
var Pb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Pb.subarray(0,Z+1);
var Ub={oa:function(){return 0},nb:function(){return 0},ob:function(){},$:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},xa:function(a,b,c){a=J(a);if(!a)return-4;a=fb(a);C[b>>3]=a.width;C[c>>3]=a.height;return 0},kb:function(a,b,c){x.copyWithin(a,b,b+c)},Ua:function(a,b){function c(d){G(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},jb:function(a){var b=x.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{pa.grow(e-ya.byteLength+65535>>>16);Ba();var k=1;break a}catch(f){}k=void 0}if(k)return!0}return!1},aa:function(a,b,c,d){gb(a,b,c,d,12,"blur");return 0},Y:function(a,b,c){a=J(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){gb(a,b,c,d,13,"focus");return 0},ka:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},ia:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},ja:function(a,b,c,d){hb(a,b,
c,d,3,"keyup");return 0},wa:function(a,b,c,d){L(a,b,c,d,5,"mousedown");return 0},qa:function(a,b,c,d){L(a,b,c,d,33,"mouseenter");return 0},na:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},ra:function(a,b,c,d){L(a,b,c,d,8,"mousemove");return 0},va:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},da:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.mc||document.body.yc||document.body.xc))return-1;a=J(a);if(!a)return-4;jb(a,b,c,d,"pointerlockchange");
jb(a,b,c,d,"mozpointerlockchange");jb(a,b,c,d,"webkitpointerlockchange");jb(a,b,c,d,"mspointerlockchange");return 0},ca:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.mc||document.body.yc||document.body.xc))return-1;a=J(a);if(!a)return-4;kb(a,b,c,d,"pointerlockerror");kb(a,b,c,d,"mozpointerlockerror");kb(a,b,c,d,"webkitpointerlockerror");kb(a,b,c,d,"mspointerlockerror");return 0},hb:function(a,b,c,d){lb(a,b,c,d);return 0},ea:function(a,b,c,d){mb(a,b,c,d,25,"touchcancel");
return 0},fa:function(a,b,c,d){mb(a,b,c,d,23,"touchend");return 0},ga:function(a,b,c,d){mb(a,b,c,d,24,"touchmove");return 0},ha:function(a,b,c,d){mb(a,b,c,d,22,"touchstart");return 0},_:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");return 0},Z:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},la:function(a,b,c,d){a=J(a);return"undefined"!=typeof a.onwheel?(pb(a,b,c,d),0):-1},R:function(a,b){b>>=2;b={alpha:!!z[b],depth:!!z[b+1],stencil:!!z[b+2],antialias:!!z[b+3],premultipliedAlpha:!!z[b+
4],preserveDrawingBuffer:!!z[b+5],powerPreference:Ib[z[b+6]],failIfMajorPerformanceCaveat:!!z[b+7],Ac:z[b+8],Uc:z[b+9],wc:z[b+10],Mc:z[b+11],Wc:z[b+12],Xc:z[b+13]};a=J(a);return!a||b.Mc?0:Fb(a,b)},Da:function(a,b){a=Ab[a];b=y(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&qb(U);"OES_vertex_array_object"==b&&rb(U);"WEBGL_draw_buffers"==b&&sb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&tb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ub(U);"WEBGL_multi_draw"==
b&&vb(U);return!!a.sc.getExtension(b)},Ra:function(a){a>>=2;for(var b=0;14>b;++b)z[a+b]=0;z[a]=z[a+1]=z[a+3]=z[a+4]=z[a+8]=z[a+10]=1},La:function(a){S=Ab[a];g.Qc=U=S&&S.sc;return!a||U?0:-5},ma:function(){return 52},mb:function(){return 52},ib:function(){return 70},lb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var f=A[b>>2],m=A[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=x[f+n],q=Jb[a];0===p||10===p?((1===a?na:r)(wa(q,0)),q.length=0):q.push(p)}e+=m}A[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},
J:function(a,b){U.attachShader(M[a],Q[b])},d:function(a,b){35051==a?U.uc=b:35052==a&&(U.lc=b);U.bindBuffer(a,xb[b])},f:function(a,b){U.bindFramebuffer(a,yb[b])},M:function(a,b){U.bindRenderbuffer(a,O[b])},a:function(a,b){U.bindTexture(a,P[b])},W:function(a){U.bindVertexArray(zb[a])},S:function(a,b,c,d){U.blendColor(a,b,c,d)},T:function(a,b){U.blendEquationSeparate(a,b)},U:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},w:function(a,b,c,d,e,k,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Na:function(a,
b,c,d){2<=S.version?c&&b?U.bufferData(a,x,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?x.subarray(c,c+b):b,d)},A:function(a,b,c,d){2<=S.version?c&&U.bufferSubData(a,b,x,d,c):U.bufferSubData(a,b,x.subarray(d,d+c))},q:function(a){return U.checkFramebufferStatus(a)},Hb:function(a){U.clear(a)},Gb:function(a,b,c,d){U.clearBufferfi(a,b,c,d)},ua:function(a,b,c){U.clearBufferfv(a,b,B,c>>2)},Fb:function(a,b,c){U.clearBufferiv(a,b,z,c>>2)},Kb:function(a,b,c,d){U.clearColor(a,b,c,d)},Jb:function(a){U.clearDepth(a)},
Ib:function(a){U.clearStencil(a)},n:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},za:function(a){U.compileShader(Q[a])},Ja:function(a,b,c,d,e,k,f,m){2<=S.version?U.lc||!f?U.compressedTexImage2D(a,b,c,d,e,k,f,m):U.compressedTexImage2D(a,b,c,d,e,k,x,m,f):U.compressedTexImage2D(a,b,c,d,e,k,m?x.subarray(m,m+f):null)},Ha:function(a,b,c,d,e,k,f,m,n){U.lc?U.compressedTexImage3D(a,b,c,d,e,k,f,m,n):U.compressedTexImage3D(a,b,c,d,e,k,f,x,n,m)},Fa:function(){var a=Eb(M),b=U.createProgram();b.name=a;b.rc=b.pc=
b.qc=0;b.tc=1;M[a]=b;return a},Ba:function(a){var b=Eb(Q);Q[b]=U.createShader(a);return b},O:function(a){U.cullFace(a)},Wa:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=xb[d];e&&(U.deleteBuffer(e),e.name=0,xb[d]=null,d==U.uc&&(U.uc=0),d==U.lc&&(U.lc=0))}},l:function(a,b){for(var c=0;c<a;++c){var d=z[b+4*c>>2],e=yb[d];e&&(U.deleteFramebuffer(e),e.name=0,yb[d]=null)}},E:function(a){if(a){var b=M[a];b?(U.deleteProgram(b),b.name=0,M[a]=null):R(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=
z[b+4*c>>2],e=O[d];e&&(U.deleteRenderbuffer(e),e.name=0,O[d]=null)}},z:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):R(1281)}},Va:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=P[d];e&&(U.deleteTexture(e),e.name=0,P[d]=null)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2];U.deleteVertexArray(zb[d]);zb[d]=null}},D:function(a){U.depthFunc(a)},C:function(a){U.depthMask(!!a)},g:function(a){U.disable(a)},V:function(a){U.disableVertexAttribArray(a)},pb:function(a,b,c){U.drawArrays(a,
b,c)},qb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},p:function(a,b){for(var c=Kb[a],d=0;d<a;d++)c[d]=z[b+4*d>>2];U.drawBuffers(c)},rb:function(a,b,c,d){U.drawElements(a,b,c,d)},sb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},i:function(a){U.enable(a)},Cb:function(a){U.enableVertexAttribArray(a)},m:function(a,b,c,d){U.framebufferRenderbuffer(a,b,c,O[d])},c:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,P[d],e)},k:function(a,b,c,d,e){U.framebufferTextureLayer(a,b,P[c],d,e)},P:function(a){U.frontFace(a)},
Oa:function(a,b){T(a,b,"createBuffer",xb)},r:function(a,b){T(a,b,"createFramebuffer",yb)},N:function(a,b){T(a,b,"createRenderbuffer",O)},Ka:function(a,b){T(a,b,"createTexture",P)},Sa:function(a,b){T(a,b,"createVertexArray",zb)},Lb:function(a,b){return U.getAttribLocation(M[a],y(b))},e:function(a,b){Lb(a,b)},Ca:function(a,b,c,d){a=U.getProgramInfoLog(M[a]);null===a&&(a="(unknown error)");b=0<b&&d?v(a,x,d,b):0;c&&(z[c>>2]=b)},I:function(a,b,c){if(c)if(a>=wb)R(1281);else if(a=M[a],35716==b)a=U.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),z[c>>2]=a.length+1;else if(35719==b){if(!a.rc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.rc=Math.max(a.rc,U.getActiveUniform(a,b).name.length+1);z[c>>2]=a.rc}else if(35722==b){if(!a.pc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.pc=Math.max(a.pc,U.getActiveAttrib(a,b).name.length+1);z[c>>2]=a.pc}else if(35381==b){if(!a.qc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.qc=Math.max(a.qc,U.getActiveUniformBlockName(a,b).length+1);z[c>>2]=a.qc}else z[c>>2]=U.getProgramParameter(a,
b);else R(1281)},ya:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?v(a,x,d,b):0;c&&(z[c>>2]=b)},G:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),z[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(Q[a]),z[c>>2]=a?a.length+1:0):z[c>>2]=U.getShaderParameter(Q[a],b):R(1281)},Ya:function(a){var b=Bb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||R(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:R(1280)}Bb[a]=b}return b},Xa:function(a,b){if(2>S.version)return R(1282),0;var c=Cb[a];if(c)return 0>
b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Cb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},s:function(a,b){b=y(b);if(a=M[a]){var c=a,d=c.nc,e=c.Jc,k;if(!d)for(c.nc=d={},c.Ic={},k=0;k<U.getProgramParameter(c,35718);++k){var f=U.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Mb(m);n=0<n?m.slice(0,n):m;var p=c.tc;c.tc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=
m,c.Ic[p++]=n}c=a.nc;d=0;e=b;k=Mb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Jc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else R(1281);return-1},Ea:function(a){a=M[a];U.linkProgram(a);a.nc=0;a.Jc={}},Q:function(a,b){U.polygonOffset(a,b)},x:function(a){U.readBuffer(a)},Ma:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},y:function(a,b,c,d){U.scissor(a,b,c,d)},Aa:function(a,b,c,d){for(var e=
"",k=0;k<b;++k){var f=d?z[d+4*k>>2]:-1;e+=y(z[c+4*k>>2],0>f?void 0:f)}U.shaderSource(Q[a],e)},Qa:function(a,b,c){U.stencilFunc(a,b,c)},ta:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},B:function(a){U.stencilMask(a)},Pa:function(a,b,c){U.stencilOp(a,b,c)},sa:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ia:function(a,b,c,d,e,k,f,m,n){if(2<=S.version)if(U.lc)U.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=Nb(m);U.texImage2D(a,b,c,d,e,k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,
b,c,d,e,k,f,m,null);else{p=U;var q=p.texImage2D;if(n){var w=Nb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;q.call(p,a,b,c,d,e,k,f,m,n)}},Ga:function(a,b,c,d,e,k,f,m,n,p){if(U.lc)U.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var q=Nb(n);U.texImage3D(a,b,c,d,e,k,f,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,f,m,n,null)},K:function(a,b,c){U.texParameterf(a,
b,c)},h:function(a,b,c){U.texParameteri(a,b,c)},Bb:function(a,b,c){if(2<=S.version)b&&U.uniform1fv(W(a),B,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},H:function(a,b){U.uniform1i(W(a),b)},xb:function(a,b,c){if(2<=S.version)b&&U.uniform1iv(W(a),z,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},Ab:function(a,b,c){if(2<=S.version)b&&U.uniform2fv(W(a),
B,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},wb:function(a,b,c){if(2<=S.version)b&&U.uniform2iv(W(a),z,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},zb:function(a,b,c){if(2<=S.version)b&&U.uniform3fv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],
d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},vb:function(a,b,c){if(2<=S.version)b&&U.uniform3iv(W(a),z,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},yb:function(a,b,c){if(2<=S.version)b&&U.uniform4fv(W(a),B,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=B;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+
1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=B.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},ub:function(a,b,c){if(2<=S.version)b&&U.uniform4iv(W(a),z,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2],d[e+3]=z[c+(4*e+12)>>2];else d=z.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},tb:function(a,b,c,d){if(2<=S.version)b&&U.uniformMatrix4fv(W(a),!!c,B,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=B;d>>=2;for(var f=0;f<16*b;f+=16){var m=
d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=B.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},o:function(a){a=M[a];U.useProgram(a);U.Kc=a},Db:function(a,b){U.vertexAttribDivisor(a,b)},Eb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},j:function(a,b,c,d){U.viewport(a,b,c,d)},gb:function(){g.Cc=
function(a){0!=Qb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.Cc)},fb:function(){g.Hc=function(a){a=a.clipboardData.getData("text");ra("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.Hc)},eb:function(a){g.Yc=[];a=y(a);a=document.getElementById(a);g.Dc=function(b){b.stopPropagation();b.preventDefault()};g.Ec=function(b){b.stopPropagation();b.preventDefault()};g.Fc=function(b){b.stopPropagation();b.preventDefault()};g.Gc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;g.Zc=c;Rb(c.length);var d;for(d=0;d<c.length;d++)ra("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Sb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.Dc,!1);a.addEventListener("dragleave",g.Ec,!1);a.addEventListener("dragover",g.Fc,!1);a.addEventListener("drop",g.Gc,!1)},_a:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},v:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},u:function(){document.getElementById("_sokol_app_input_element").focus()},Mb:function(a){a=y(a);g.kc=document.getElementById(a);g.kc||console.log("sokol_app.h: invalid target:"+a);g.kc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},db:function(){window.removeEventListener("beforeunload",g.Cc)},cb:function(){window.removeEventListener("paste",g.Hc)},bb:function(a){a=
y(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.Dc);a.removeEventListener("dragleave",g.Ec);a.removeEventListener("dragover",g.Fc);a.removeEventListener("drop",g.Gc)},F:function(){g.kc&&g.kc.requestPointerLock&&g.kc.requestPointerLock()},ab:function(a,b){if(g.kc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a=
"nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.kc.style.cursor=a}},Za:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(x.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},t:function(){document.getElementById("_sokol_app_input_element").blur()},
$a:function(a){a=y(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},pa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){g.asm=e.exports;pa=g.asm.Nb;Ba();Ca=g.asm.bc;Ea.unshift(g.asm.Ob);D--;g.monitorRunDependencies&&g.monitorRunDependencies(D);0==D&&(null!==Ja&&(clearInterval(Ja),Ja=null),E&&(e=E,E=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){r("failed to asynchronously prepare wasm: "+k);oa(k)})}var d={a:Ub};D++;g.monitorRunDependencies&&g.monitorRunDependencies(D);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return r("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return t||"function"!=typeof WebAssembly.instantiateStreaming||Ka()||F.startsWith("file://")||fa||"function"!=typeof fetch?c(b):fetch(F,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){r("wasm streaming compile failed: "+k);r("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Ob).apply(null,arguments)};var Tb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Pb).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.Qb).apply(null,arguments)};
var Qb=g.__sapp_html5_get_ask_leave_site=function(){return(Qb=g.__sapp_html5_get_ask_leave_site=g.asm.Rb).apply(null,arguments)},Rb=g.__sapp_emsc_begin_drop=function(){return(Rb=g.__sapp_emsc_begin_drop=g.asm.Sb).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.Tb).apply(null,arguments)};var Sb=g.__sapp_emsc_end_drop=function(){return(Sb=g.__sapp_emsc_end_drop=g.asm.Ub).apply(null,arguments)};
g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Vb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Wb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Xb).apply(null,arguments)};g.__sfetch_emsc_head_response=function(){return(g.__sfetch_emsc_head_response=g.asm.Yb).apply(null,arguments)};g.__sfetch_emsc_get_response=function(){return(g.__sfetch_emsc_get_response=g.asm.Zb).apply(null,arguments)};
g.__sfetch_emsc_failed_http_status=function(){return(g.__sfetch_emsc_failed_http_status=g.asm._b).apply(null,arguments)};g.__sfetch_emsc_failed_buffer_too_small=function(){return(g.__sfetch_emsc_failed_buffer_too_small=g.asm.$b).apply(null,arguments)};
var K=g._malloc=function(){return(K=g._malloc=g.asm.ac).apply(null,arguments)},ta=g.stackSave=function(){return(ta=g.stackSave=g.asm.cc).apply(null,arguments)},ua=g.stackRestore=function(){return(ua=g.stackRestore=g.asm.dc).apply(null,arguments)},u=g.stackAlloc=function(){return(u=g.stackAlloc=g.asm.ec).apply(null,arguments)},Vb;function ma(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}E=function Wb(){Vb||Xb();Vb||(E=Wb)};
function Yb(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=u(4*(c+1)),e=d>>2;a.forEach(f=>{var m=z,n=e++,p=xa(f)+1,q=u(p);v(f,sa,q,p);m[n]=q});z[e]=0;try{var k=b(c,d);Zb(k)}catch(f){f instanceof ma||"unwind"==f||da(1,f)}finally{}}
function Xb(a){function b(){if(!Vb&&(Vb=!0,g.calledRun=!0,!qa)){Oa(Ea);Oa(Fa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();$b&&Yb(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();Ha.unshift(c)}Oa(Ha)}}a=a||ba;if(!(0<D)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ia();Oa(Da);0<D||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}g.run=Xb;function Zb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);qa=!0}da(a,new ma(a))}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var $b=!0;g.noInitialRun&&($b=!1);Xb();
