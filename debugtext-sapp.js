
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},e),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,v,fs,w,ha;
if(ea)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=()=>{w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=(a,b,c)=>{ha();a=w.normalize(a);fs.readFile(a,function(d,f){d?c(d):b(f.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof
x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);
b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);Object.assign(e,aa);aa=null;e.arguments&&(ba=e.arguments);
e.thisProgram&&(ca=e.thisProgram);e.quit&&(h=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var ja,ka=!1;
function la(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=A(r);B(n,C,p,r)}return p},array:function(n){var p=A(n.length);D.set(n,p);return p}};a=e["_"+a];var f=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=ma()),f[g]=m(c[g])):f[g]=c[g]}b=a.apply(null,f);b=function(n){0!==k&&na(k);return n}(b)}var oa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&oa)a=oa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var qa,D,C,F,ra,G,sa,ta,H;function ua(){var a=ja.buffer;qa=a;e.HEAP8=D=new Int8Array(a);e.HEAP16=F=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=C=new Uint8Array(a);e.HEAPU16=ra=new Uint16Array(a);e.HEAPU32=sa=new Uint32Array(a);e.HEAPF32=ta=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}
var va,wa=[],xa=[],ya=[],za=[],Aa=[];function Ba(){var a=e.preRun.shift();wa.unshift(a)}var I=0,Ca=null,J=null;function ia(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";y(a);ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Da(){return L.startsWith("data:application/octet-stream;base64,")}var L;L="debugtext-sapp.wasm";if(!Da()){var Ea=L;L=e.locateFile?e.locateFile(Ea,q):q+Ea}
function Fa(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Ga(){if(!z&&(da||l)){if("function"==typeof fetch&&!L.startsWith("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Fa()});if(t)return new Promise(function(a,b){t(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Fa()})}function M(a){for(;0<a.length;)a.shift()(e)}var N=[];
function O(a){var b=N[a];b||(a>=N.length&&(N.length=a+1),N[a]=b=va.get(a));return b}var Ha=0;function Ia(){for(var a=P.length-1;0<=a;--a)Ja(a);P=[];Ka=[]}var Ka=[];function La(){if(Ha&&Ma.Nb)for(var a=0;a<Ka.length;++a){var b=Ka[a];Ka.splice(a,1);--a;b.zc.apply(null,b.oc)}}var P=[];function Ja(a){var b=P[a];b.target.removeEventListener(b.Fb,b.kc,b.Gb);P.splice(a,1)}
function Q(a){function b(d){++Ha;Ma=a;La();a.Ib(d);La();--Ha}if(a.Hb)a.kc=b,a.target.addEventListener(a.Fb,b,a.Gb),P.push(a),Na||(za.push(Ia),Na=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Fb==a.Fb&&Ja(c--)}function Oa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Na,Ma,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function R(a){a=2<a?E(a):a;return Wa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Xa(a){return 0>Wa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function Ya(a,b,c,d,f,k){Pa||(Pa=S(256));a={target:R(a),Fb:k,Hb:d,Ib:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Pa;B(Oa(g.target),C,n+0,128);B(m,C,n+128,128);O(d)(f,n,b)&&g.preventDefault()},Gb:c};Q(a)}
function Za(a,b,c,d,f,k){Qa||(Qa=S(176));a={target:R(a),Nb:!0,Fb:k,Hb:d,Ib:function(g){var m=Qa;H[m>>3]=g.timeStamp;var n=m>>2;G[n+2]=g.location;G[n+3]=g.ctrlKey;G[n+4]=g.shiftKey;G[n+5]=g.altKey;G[n+6]=g.metaKey;G[n+7]=g.repeat;G[n+8]=g.charCode;G[n+9]=g.keyCode;G[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);O(d)(f,m,b)&&g.preventDefault()},Gb:c};Q(a)}
function $a(a,b,c){H[a>>3]=b.timeStamp;a>>=2;G[a+2]=b.screenX;G[a+3]=b.screenY;G[a+4]=b.clientX;G[a+5]=b.clientY;G[a+6]=b.ctrlKey;G[a+7]=b.shiftKey;G[a+8]=b.altKey;G[a+9]=b.metaKey;F[2*a+20]=b.button;F[2*a+21]=b.buttons;G[a+11]=b.movementX;G[a+12]=b.movementY;c=Xa(c);G[a+13]=b.clientX-c.left;G[a+14]=b.clientY-c.top}
function T(a,b,c,d,f,k){Ra||(Ra=S(72));a=R(a);Q({target:a,Nb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Fb:k,Hb:d,Ib:function(g){g=g||event;$a(Ra,g,a);O(d)(f,Ra,b)&&g.preventDefault()},Gb:c})}function ab(a,b,c,d,f){Sa||(Sa=S(260));Q({target:a,Fb:f,Hb:d,Ib:function(k){k=k||event;var g=Sa,m=document.pointerLockElement||document.Kb||document.Ub||document.Tb;G[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Oa(m),C,g+4,128);B(n,C,g+132,128);O(d)(20,g,b)&&k.preventDefault()},Gb:c})}
function bb(a,b,c,d,f){Q({target:a,Fb:f,Hb:d,Ib:function(k){k=k||event;O(d)(38,0,b)&&k.preventDefault()},Gb:c})}
function cb(a,b,c,d){Ta||(Ta=S(36));a=R(a);Q({target:a,Fb:"resize",Hb:d,Ib:function(f){f=f||event;if(f.target==a){var k=document.body;if(k){var g=Ta;G[g>>2]=f.detail;G[g+4>>2]=k.clientWidth;G[g+8>>2]=k.clientHeight;G[g+12>>2]=innerWidth;G[g+16>>2]=innerHeight;G[g+20>>2]=outerWidth;G[g+24>>2]=outerHeight;G[g+28>>2]=pageXOffset;G[g+32>>2]=pageYOffset;O(d)(10,g,b)&&f.preventDefault()}}},Gb:c})}
function db(a,b,c,d,f,k){Ua||(Ua=S(1696));a=R(a);Q({target:a,Nb:"touchstart"==k||"touchend"==k,Fb:k,Hb:d,Ib:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.Yb=m.$b=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.Yb=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].$b=1;p=Ua;H[p>>3]=g.timeStamp;var u=p>>2;G[u+3]=g.ctrlKey;G[u+4]=g.shiftKey;G[u+5]=g.altKey;G[u+6]=g.metaKey;u+=7;var K=Xa(a),jb=0;for(r in n)if(m=
n[r],G[u]=m.identifier,G[u+1]=m.screenX,G[u+2]=m.screenY,G[u+3]=m.clientX,G[u+4]=m.clientY,G[u+5]=m.pageX,G[u+6]=m.pageY,G[u+7]=m.Yb,G[u+8]=m.$b,G[u+9]=m.clientX-K.left,G[u+10]=m.clientY-K.top,u+=13,31<++jb)break;G[p+8>>2]=jb;O(d)(f,p,b)&&g.preventDefault()},Gb:c})}function eb(a,b,c,d,f,k){a={target:R(a),Fb:k,Hb:d,Ib:function(g){g=g||event;O(d)(f,0,b)&&g.preventDefault()},Gb:c};Q(a)}
function fb(a,b,c,d){Va||(Va=S(104));Q({target:a,Nb:!0,Fb:"wheel",Hb:d,Ib:function(f){f=f||event;var k=Va;$a(k,f,a);H[k+72>>3]=f.deltaX;H[k+80>>3]=f.deltaY;H[k+88>>3]=f.deltaZ;G[k+96>>2]=f.deltaMode;O(d)(9,k,b)&&f.preventDefault()},Gb:c})}
function gb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function kb(a){a.qc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function lb(a){a.sc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function mb(a){a.uc=a.getExtension("WEBGL_multi_draw")}var nb=1,ob=[],U=[],pb=[],qb=[],rb=[],V=[],sb=[],tb=[],ub={},vb={};function W(a){wb||(wb=a)}function xb(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}
function yb(a,b){a.Kb||(a.Kb=a.getContext,a.getContext=function(d,f){f=a.Kb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.Zb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?zb(c,b):0}function zb(a,b){var c=xb(tb),d={rc:c,attributes:b,version:b.Zb,Rb:a};a.canvas&&(a.canvas.nc=d);tb[c]=d;("undefined"==typeof b.Xb||b.Xb)&&Ab(d);return c}
function Ab(a){a||(a=X);if(!a.mc){a.mc=!0;var b=a.Rb;gb(b);hb(b);ib(b);kb(b);lb(b);2<=a.version&&(b.Wb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Wb)b.Wb=b.getExtension("EXT_disjoint_timer_query");mb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var wb,X,Bb=["default","low-power","high-performance"];
function Cb(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),g=k&&xb(d);k?(k.name=g,d[g]=k):W(1282);G[b+4*f>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else W(1281)}
function Z(a){var b=pa(a)+1,c=S(b);B(a,C,c,b);return c}function Eb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Fb(a){a-=5120;return 0==a?D:1==a?C:2==a?F:4==a?G:6==a?ta:5==a||28922==a||28520==a||30779==a||30782==a?sa:ra}
var Y,Kb={R:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=R(a);if(!a)return-4;a=Xa(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},_a:function(a,b,c){C.copyWithin(a,b,b+c)},La:function(a,b){function c(d){O(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var f=Math;d=Math.max(a,d);f=f.min.call(f,2147483648,d+
(65536-d%65536)%65536);a:{try{ja.grow(f-qa.byteLength+65535>>>16);ua();var k=1;break a}catch(g){}k=void 0}if(k)return!0}return!1},S:function(a,b,c,d){Ya(a,b,c,d,12,"blur");return 0},O:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){Ya(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){Za(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){Za(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){Za(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){T(a,b,c,d,5,
"mousedown");return 0},da:function(a,b,c,d){T(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Kb||document.body.Ub||document.body.Tb))return-1;a=R(a);if(!a)return-4;ab(a,b,c,d,"pointerlockchange");ab(a,b,c,d,"mozpointerlockchange");ab(a,b,c,d,"webkitpointerlockchange");
ab(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Kb||document.body.Ub||document.body.Tb))return-1;a=R(a);if(!a)return-4;bb(a,b,c,d,"pointerlockerror");bb(a,b,c,d,"mozpointerlockerror");bb(a,b,c,d,"webkitpointerlockerror");bb(a,b,c,d,"mspointerlockerror");return 0},Ya:function(a,b,c,d){cb(a,b,c,d);return 0},W:function(a,b,c,d){db(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){db(a,b,c,d,23,"touchend");return 0},
Y:function(a,b,c,d){db(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){db(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){eb(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){eb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=R(a);return"undefined"!=typeof a.onwheel?(fb(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!G[b],depth:!!G[b+1],stencil:!!G[b+2],antialias:!!G[b+3],premultipliedAlpha:!!G[b+4],preserveDrawingBuffer:!!G[b+5],powerPreference:Bb[G[b+
6]],failIfMajorPerformanceCaveat:!!G[b+7],Zb:G[b+8],tc:G[b+9],Xb:G[b+10],lc:G[b+11],vc:G[b+12],wc:G[b+13]};a=R(a);return!a||b.lc?0:yb(a,b)},ra:function(a,b){a=tb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&gb(Y);"OES_vertex_array_object"==b&&hb(Y);"WEBGL_draw_buffers"==b&&ib(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&kb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&lb(Y);"WEBGL_multi_draw"==b&&mb(Y);return!!a.Rb.getExtension(b)},Ia:function(a){a>>=
2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ya:function(a){X=tb[a];e.pc=Y=X&&X.Rb;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},C:function(a,b){Y.attachShader(U[a],V[b])},c:function(a,b){35051==a?Y.Vb=b:35052==a&&(Y.Jb=b);Y.bindBuffer(a,ob[b])},h:function(a,b){Y.bindFramebuffer(a,pb[b])},Ca:function(a,b){Y.bindRenderbuffer(a,qb[b])},a:function(a,b){Y.bindTexture(a,rb[b])},M:function(a){Y.bindVertexArray(sb[a])},I:function(a,b,c,d){Y.blendColor(a,b,c,d)},J:function(a,
b){Y.blendEquationSeparate(a,b)},K:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,k,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,k,g,m,n,p)},Ea:function(a,b,c,d){2<=X.version?c&&b?Y.bufferData(a,C,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?C.subarray(c,c+b):b,d)},s:function(a,b,c,d){2<=X.version?c&&Y.bufferSubData(a,b,C,d,c):Y.bufferSubData(a,b,C.subarray(d,d+c))},gb:function(a){Y.clear(a)},ia:function(a,b,c,d){Y.clearColor(a,b,c,d)},y:function(a){Y.clearDepth(a)},hb:function(a){Y.clearStencil(a)},
j:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},na:function(a){Y.compileShader(V[a])},xa:function(a,b,c,d,f,k,g,m){2<=X.version?Y.Jb||!g?Y.compressedTexImage2D(a,b,c,d,f,k,g,m):Y.compressedTexImage2D(a,b,c,d,f,k,C,m,g):Y.compressedTexImage2D(a,b,c,d,f,k,m?C.subarray(m,m+g):null)},va:function(a,b,c,d,f,k,g,m,n){Y.Jb?Y.compressedTexImage3D(a,b,c,d,f,k,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,k,g,C,n,m)},ta:function(){var a=xb(U),b=Y.createProgram();b.name=a;b.Qb=b.Ob=b.Pb=0;b.Sb=1;U[a]=b;return a},
pa:function(a){var b=xb(V);V[b]=Y.createShader(a);return b},E:function(a){Y.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=ob[d];f&&(Y.deleteBuffer(f),f.name=0,ob[d]=null,d==Y.Vb&&(Y.Vb=0),d==Y.Jb&&(Y.Jb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=pb[d];f&&(Y.deleteFramebuffer(f),f.name=0,pb[d]=null)}},w:function(a){if(a){var b=U[a];b?(Y.deleteProgram(b),b.name=0,U[a]=null):W(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=qb[d];f&&(Y.deleteRenderbuffer(f),
f.name=0,qb[d]=null)}},r:function(a){if(a){var b=V[a];b?(Y.deleteShader(b),V[a]=null):W(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=rb[d];f&&(Y.deleteTexture(f),f.name=0,rb[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Y.deleteVertexArray(sb[d]);sb[d]=null}},v:function(a){Y.depthFunc(a)},u:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},L:function(a){Y.disableVertexAttribArray(a)},$a:function(a,b,c){Y.drawArrays(a,b,c)},ab:function(a,b,c,d){Y.drawArraysInstanced(a,
b,c,d)},bb:function(a,b,c,d){Y.drawElements(a,b,c,d)},cb:function(a,b,c,d,f){Y.drawElementsInstanced(a,b,c,d,f)},g:function(a){Y.enable(a)},db:function(a){Y.enableVertexAttribArray(a)},G:function(a){Y.frontFace(a)},Fa:function(a,b){Cb(a,b,"createBuffer",ob)},Da:function(a,b){Cb(a,b,"createRenderbuffer",qb)},za:function(a,b){Cb(a,b,"createTexture",rb)},Ja:function(a,b){Cb(a,b,"createVertexArray",sb)},la:function(a,b){return Y.getAttribLocation(U[a],E(b))},d:function(a,b){Db(a,b)},qa:function(a,b,c,
d){a=Y.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(G[c>>2]=b)},B:function(a,b,c){if(c)if(a>=nb)W(1281);else if(a=U[a],35716==b)a=Y.getProgramInfoLog(a),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b){if(!a.Qb)for(b=0;b<Y.getProgramParameter(a,35718);++b)a.Qb=Math.max(a.Qb,Y.getActiveUniform(a,b).name.length+1);G[c>>2]=a.Qb}else if(35722==b){if(!a.Ob)for(b=0;b<Y.getProgramParameter(a,35721);++b)a.Ob=Math.max(a.Ob,Y.getActiveAttrib(a,b).name.length+
1);G[c>>2]=a.Ob}else if(35381==b){if(!a.Pb)for(b=0;b<Y.getProgramParameter(a,35382);++b)a.Pb=Math.max(a.Pb,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=a.Pb}else G[c>>2]=Y.getProgramParameter(a,b);else W(1281)},ma:function(a,b,c,d){a=Y.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(G[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),G[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(V[a]),G[c>>2]=a?a.length+
1:0):G[c>>2]=Y.getShaderParameter(V[a],b):W(1281)},Pa:function(a){var b=ub[a];if(!b){switch(a){case 7939:b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}ub[a]=b}return b},Oa:function(a,b){if(2>X.version)return W(1282),0;var c=vb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=vb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},l:function(a,b){b=E(b);if(a=U[a]){var c=a,d=c.Mb,f=c.ic,k;
if(!d)for(c.Mb=d={},c.hc={},k=0;k<Y.getProgramParameter(c,35718);++k){var g=Y.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Eb(m);n=0<n?m.slice(0,n):m;var p=c.Sb;c.Sb+=g;f[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.hc[p++]=n}c=a.Mb;d=0;f=b;k=Eb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,f=b.slice(0,k));if((f=a.ic[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Y.getUniformLocation(a,b)))return d}else W(1281);return-1},sa:function(a){a=U[a];Y.linkProgram(a);a.Mb=0;a.ic={}},H:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},
Aa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ba:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},ib:function(a,b,c,d){Y.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?G[d+4*k>>2]:-1;f+=E(G[c+4*k>>2],0>g?void 0:g)}Y.shaderSource(V[a],f)},Ha:function(a,b,c){Y.stencilFunc(a,b,c)},ha:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},t:function(a){Y.stencilMask(a)},Ga:function(a,b,c){Y.stencilOp(a,b,c)},ga:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},
wa:function(a,b,c,d,f,k,g,m,n){if(2<=X.version)if(Y.Jb)Y.texImage2D(a,b,c,d,f,k,g,m,n);else if(n){var p=Fb(m);Y.texImage2D(a,b,c,d,f,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,k,g,m,null);else{p=Y;var r=p.texImage2D;if(n){var u=Fb(m),K=31-Math.clz32(u.BYTES_PER_ELEMENT);n=u.subarray(n>>K,n+f*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<K)+4-1&-4)>>K)}else n=null;r.call(p,a,b,c,d,f,k,g,m,n)}},ua:function(a,b,c,d,f,k,g,m,n,p){if(Y.Jb)Y.texImage3D(a,
b,c,d,f,k,g,m,n,p);else if(p){var r=Fb(n);Y.texImage3D(a,b,c,d,f,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,k,g,m,n,null)},D:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},A:function(a,b){var c=Y,d=c.uniform1i;var f=Y.jc;if(f){var k=f.Mb[a];"number"==typeof k&&(f.Mb[a]=k=Y.getUniformLocation(f,f.hc[a]+(0<k?"["+k+"]":"")));a=k}else W(1282),a=void 0;d.call(c,a,b)},k:function(a){a=U[a];Y.useProgram(a);Y.jc=a},eb:function(a,b){Y.vertexAttribDivisor(a,
b)},fb:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},jb:function(a,b,c,d){Y.viewport(a,b,c,d)},Xa:function(){e.ac=function(a){0!=Gb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.ac)},Wa:function(){e.fc=function(a){a=a.clipboardData.getData("text");la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.fc)},Va:function(a){e.xc=[];a=E(a);a=document.getElementById(a);e.bc=function(b){b.stopPropagation();b.preventDefault()};e.cc=
function(b){b.stopPropagation();b.preventDefault()};e.dc=function(b){b.stopPropagation();b.preventDefault()};e.ec=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.yc=c;Hb(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ib(b.clientX,b.clientY)};a.addEventListener("dragenter",e.bc,!1);a.addEventListener("dragleave",e.cc,!1);a.addEventListener("dragover",e.dc,!1);a.addEventListener("drop",e.ec,!1)},Ra:function(){var a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Jb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},kb:function(a){a=E(a);e.Lb=document.getElementById(a);e.Lb||console.log("sokol_app.h: invalid target:"+a);e.Lb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Ua:function(){window.removeEventListener("beforeunload",e.ac)},Ta:function(){window.removeEventListener("paste",e.fc)},Sa:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.bc);a.removeEventListener("dragleave",e.cc);a.removeEventListener("dragover",e.dc);a.removeEventListener("drop",e.ec)},x:function(){e.Lb&&e.Lb.requestPointerLock&&e.Lb.requestPointerLock()},Qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),
k=f.createImageData(a,b);k.data.set(C.subarray(c,c+a*b*4));f.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;ja=e.asm.lb;ua();va=e.asm.Bb;xa.unshift(e.asm.mb);I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Ca&&(clearInterval(Ca),Ca=null),J&&(f=J,J=null,f()))}function b(f){a(f.instance)}function c(f){return Ga().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(f,function(k){y("failed to asynchronously prepare wasm: "+k);ia(k)})}var d={a:Kb};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return z||"function"!=typeof WebAssembly.instantiateStreaming||Da()||L.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.mb).apply(null,arguments)};var S=e._malloc=function(){return(S=e._malloc=e.asm.nb).apply(null,arguments)},Jb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Jb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.ob).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.pb).apply(null,arguments)};
var Gb=e.__sapp_html5_get_ask_leave_site=function(){return(Gb=e.__sapp_html5_get_ask_leave_site=e.asm.qb).apply(null,arguments)},Hb=e.__sapp_emsc_begin_drop=function(){return(Hb=e.__sapp_emsc_begin_drop=e.asm.rb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.sb).apply(null,arguments)};var Ib=e.__sapp_emsc_end_drop=function(){return(Ib=e.__sapp_emsc_end_drop=e.asm.tb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.ub).apply(null,arguments)};e._main=function(){return(e._main=e.asm.vb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.wb).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.xb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.yb).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.zb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Ab).apply(null,arguments)};
var ma=e.stackSave=function(){return(ma=e.stackSave=e.asm.Cb).apply(null,arguments)},na=e.stackRestore=function(){return(na=e.stackRestore=e.asm.Db).apply(null,arguments)},A=e.stackAlloc=function(){return(A=e.stackAlloc=e.asm.Eb).apply(null,arguments)},Lb;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Mb(){Lb||Nb();Lb||(J=Mb)};
function Ob(a){var b=e._main;a=a||[];a.unshift(ca);var c=a.length,d=A(4*(c+1)),f=d>>2;a.forEach(g=>{var m=G,n=f++,p=pa(g)+1,r=A(p);B(g,D,r,p);m[n]=r});G[f]=0;try{var k=b(c,d);Pb(k)}catch(g){g instanceof x||"unwind"==g||h(1,g)}finally{}}
function Nb(a){function b(){if(!Lb&&(Lb=!0,e.calledRun=!0,!ka)){M(xa);M(ya);if(e.onRuntimeInitialized)e.onRuntimeInitialized();Qb&&Ob(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var c=e.postRun.shift();Aa.unshift(c)}M(Aa)}}a=a||ba;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ba();M(wa);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):
b())}}e.run=Nb;function Pb(a){if(!noExitRuntime){if(e.onExit)e.onExit(a);ka=!0}h(a,new x(a))}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Qb=!0;e.noInitialRun&&(Qb=!1);Nb();
