
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in g)g.hasOwnProperty(l)&&(k[l]=g[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);var y=g.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(g[l]=k[l]);k=null;g.arguments&&(r=g.arguments);g.thisProgram&&(aa=g.thisProgram);g.quit&&(t=g.quit);var z;g.wasmBinary&&(z=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var ka,la=!1;function assert(a,b){a||x("Assertion failed: "+b)}function ma(a){var b=g["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=A(q);C(n,D,p,q)}return p},array:function(n){var p=A(n.length);oa.set(n,p);return p}};a=ma(a);var e=[],h=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===h&&(h=pa()),e[f]=m(c[f])):e[f]=c[f]}a.apply(null,e);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var m=a.charCodeAt(++h);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=A(b);C(a,oa,c,b);return c}var ua,oa,D,va,wa,F,xa,G,H;
function ya(){var a=ka.buffer;ua=a;g.HEAP8=oa=new Int8Array(a);g.HEAP16=va=new Int16Array(a);g.HEAP32=F=new Int32Array(a);g.HEAPU8=D=new Uint8Array(a);g.HEAPU16=wa=new Uint16Array(a);g.HEAPU32=xa=new Uint32Array(a);g.HEAPF32=G=new Float32Array(a);g.HEAPF64=H=new Float64Array(a)}var I,za=[],Aa=[],Ba=[],Ca=[],Da=[];Aa.push({jc:function(){Ea()}});function Fa(){var a=g.preRun.shift();za.unshift(a)}var J=0,Ga=null,K=null;g.preloadedImages={};g.preloadedAudios={};
function x(a){if(g.onAbort)g.onAbort(a);y(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ha(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ia(){return Ha("data:application/octet-stream;base64,")}var L="fontstash-sapp.wasm";if(!Ia()){var Ja=L;L=g.locateFile?g.locateFile(Ja,v):v+Ja}
function Ka(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function La(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Ha("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.jc;"number"===typeof c?void 0===b.Sb?I.get(c)():I.get(c)(b.Sb):c(void 0===b.Sb?null:b.Sb)}}}var Na=0;function Oa(){for(var a=M.length-1;0<=a;--a)Pa(a);M=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.Qb)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.Ac.apply(null,b.oc)}}var M=[];function Pa(a){var b=M[a];b.target.removeEventListener(b.Ib,b.hc,b.Jb);M.splice(a,1)}
function N(a){function b(d){++Na;Sa=a;Ra();a.Mb(d);Ra();--Na}if(a.Kb)a.hc=b,a.target.addEventListener(a.Ib,b,a.Jb),M.push(a),Ta||(Ca.push(Oa),Ta=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Ib==a.Ib&&Pa(c--)}var Ta,Sa,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function bb(a,b,c,d,e,h){Ua||(Ua=P(164));a={target:O(a),Qb:!0,Ib:h,Kb:d,Mb:function(f){var m=Ua,n=m>>2;F[n]=f.location;F[n+1]=f.ctrlKey;F[n+2]=f.shiftKey;F[n+3]=f.altKey;F[n+4]=f.metaKey;F[n+5]=f.repeat;F[n+6]=f.charCode;F[n+7]=f.keyCode;F[n+8]=f.which;C(f.key||"",D,m+36,32);C(f.code||"",D,m+68,32);C(f.char||"",D,m+100,32);C(f.locale||"",D,m+132,32);I.get(d)(e,m,b)&&f.preventDefault()},Jb:c};N(a)}
function cb(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;va[2*a+16]=b.button;va[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=ab(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function Q(a,b,c,d,e,h){Va||(Va=P(64));a=O(a);N({target:a,Qb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ib:h,Kb:d,Mb:function(f){f=f||event;cb(Va,f,a);I.get(d)(e,Va,b)&&f.preventDefault()},Jb:c})}
function db(a,b,c,d,e){Wa||(Wa=P(260));N({target:a,Ib:e,Kb:d,Mb:function(h){h=h||event;var f=Wa,m=document.pointerLockElement||document.Ub||document.Wb||document.Vb;F[f>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,f+4,128);C(n,D,f+132,128);I.get(d)(20,f,b)&&h.preventDefault()},Jb:c})}function eb(a,b,c,d,e){N({target:a,Ib:e,Kb:d,Mb:function(h){h=h||event;I.get(d)(38,0,b)&&h.preventDefault()},Jb:c})}
function fb(a,b,c,d){Xa||(Xa=P(36));a=O(a);N({target:a,Ib:"resize",Kb:d,Mb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var f=Xa;F[f>>2]=e.detail;F[f+4>>2]=h.clientWidth;F[f+8>>2]=h.clientHeight;F[f+12>>2]=innerWidth;F[f+16>>2]=innerHeight;F[f+20>>2]=outerWidth;F[f+24>>2]=outerHeight;F[f+28>>2]=pageXOffset;F[f+32>>2]=pageYOffset;I.get(d)(10,f,b)&&e.preventDefault()}}},Jb:c})}
function gb(a,b,c,d,e,h){Ya||(Ya=P(1684));a=O(a);N({target:a,Qb:"touchstart"==h||"touchend"==h,Ib:h,Kb:d,Mb:function(f){for(var m={},n=f.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=f.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.lc=1,m[q.identifier]=q;n=f.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].mc=1;n=Ya;q=n>>2;F[q+1]=f.ctrlKey;F[q+2]=f.shiftKey;F[q+3]=f.altKey;F[q+4]=f.metaKey;q+=5;var Z=ab(a),qb=0;for(p in m){var B=m[p];F[q]=B.identifier;F[q+1]=B.screenX;F[q+2]=B.screenY;
F[q+3]=B.clientX;F[q+4]=B.clientY;F[q+5]=B.pageX;F[q+6]=B.pageY;F[q+7]=B.lc;F[q+8]=B.mc;F[q+9]=B.clientX-Z.left;F[q+10]=B.clientY-Z.top;q+=13;if(31<++qb)break}F[n>>2]=qb;I.get(d)(e,n,b)&&f.preventDefault()},Jb:c})}function hb(a,b,c,d,e,h){a={target:O(a),Ib:h,Kb:d,Mb:function(f){f=f||event;I.get(d)(e,0,b)&&f.preventDefault()},Jb:c};N(a)}
function ib(a,b,c,d){Za||(Za=P(96));N({target:a,Qb:!0,Ib:"wheel",Kb:d,Mb:function(e){e=e||event;var h=Za;cb(h,e,a);H[h+64>>3]=e.deltaX;H[h+72>>3]=e.deltaY;H[h+80>>3]=e.deltaZ;F[h+88>>2]=e.deltaMode;I.get(d)(9,h,b)&&e.preventDefault()},Jb:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.qc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function nb(a){a.tc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ob(a){a.vc=a.getExtension("WEBGL_multi_draw")}var pb=1,rb=[],R=[],sb=[],tb=[],ub=[],S=[],T=[],vb=[],wb=[],xb={},yb={},zb={};function U(a){Ab||(Ab=a)}function V(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a){a||(a=W);if(!a.kc){a.kc=!0;var b=a.Rb;jb(b);kb(b);lb(b);mb(b);nb(b);b.rc=b.getExtension("EXT_disjoint_timer_query");ob(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Ab,W,Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),f=h&&V(d);h?(h.name=f,d[f]=h):U(1282);F[b+4*e>>2]=f}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){U(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}
function Fb(a){var b=sa(a)+1,c=P(b);C(a,D,c,b);return c}function Gb(a){a-=5120;return 0==a?oa:1==a?D:2==a?va:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Hb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Ib(a,b,c,d,e){a=Gb(a);var h=Hb(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Y=[],X,Jb=new Float32Array(288),Kb=0;288>Kb;++Kb)Y[Kb]=Jb.subarray(0,Kb+1);
var Tb={V:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ca:function(a,b,c){a=O(a);if(!a)return-4;a=ab(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Ya:function(a,b,c){D.copyWithin(a,b,b+c)},Ia:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},T:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},fa:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},da:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},ea:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},na:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},ia:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},ha:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},ja:function(a,
b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ub||document.body.Wb||document.body.Vb))return-1;a=O(a);if(!a)return-4;db(a,b,c,d,"pointerlockchange");db(a,b,c,d,"mozpointerlockchange");db(a,b,c,d,"webkitpointerlockchange");db(a,b,c,d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Ub||
document.body.Wb||document.body.Vb))return-1;a=O(a);if(!a)return-4;eb(a,b,c,d,"pointerlockerror");eb(a,b,c,d,"mozpointerlockerror");eb(a,b,c,d,"webkitpointerlockerror");eb(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){fb(a,b,c,d);return 0},_:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},X:function(a,b,
c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},ga:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d),0):-1},E:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Cb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],Zb:F[b+8],uc:F[b+9],Yb:F[b+10],ic:F[b+11],wc:F[b+12],xc:F[b+13]};a=O(a);if(!a||b.ic)b=
0;else if(a=1<b.Zb?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=V(wb),d={sc:c,attributes:b,version:b.Zb,Rb:a};a.canvas&&(a.canvas.nc=d);wb[c]=d;("undefined"===typeof b.Yb||b.Yb)&&Bb(d);b=c}else b=0;return b},mb:function(a,b){a=wb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(X);"OES_vertex_array_object"==b&&kb(X);"WEBGL_draw_buffers"==b&&lb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&mb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&nb(X);"WEBGL_multi_draw"==b&&ob(X);return!!a.Rb.getExtension(b)},Ha:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},xa:function(a){W=wb[a];g.pc=X=W&&W.Rb;return!a||X?0:-5},b:function(a){X.activeTexture(a)},D:function(a,b){X.attachShader(R[a],T[b])},c:function(a,b){35051==a?X.Xb=b:35052==a&&(X.Lb=b);X.bindBuffer(a,rb[b])},h:function(a,b){X.bindFramebuffer(a,sb[b])},H:function(a,b){X.bindRenderbuffer(a,tb[b])},a:function(a,b){X.bindTexture(a,ub[b])},S:function(a){X.bindVertexArray(vb[a])},
O:function(a,b,c,d){X.blendColor(a,b,c,d)},P:function(a,b){X.blendEquationSeparate(a,b)},Q:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,f,m,n,p){X.blitFramebuffer(a,b,c,d,e,h,f,m,n,p)},J:function(a,b,c,d){2<=W.version?c?X.bufferData(a,D,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?D.subarray(c,c+b):b,d)},l:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,D,d,c):X.bufferSubData(a,b,D.subarray(d,d+c))},jb:function(a){X.clear(a)},ra:function(a,b,c,d){X.clearColor(a,b,c,d)},
lb:function(a){X.clearDepth(a)},kb:function(a){X.clearStencil(a)},m:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},ua:function(a){X.compileShader(T[a])},Ea:function(a,b,c,d,e,h,f,m){2<=W.version?X.Lb?X.compressedTexImage2D(a,b,c,d,e,h,f,m):X.compressedTexImage2D(a,b,c,d,e,h,D,m,f):X.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+f):null)},Ca:function(a,b,c,d,e,h,f,m,n){X.Lb?X.compressedTexImage3D(a,b,c,d,e,h,f,m,n):X.compressedTexImage3D(a,b,c,d,e,h,f,D,n,m)},Aa:function(){var a=V(R),b=X.createProgram();
b.name=a;R[a]=b;return a},wa:function(a){var b=V(T);T[b]=X.createShader(a);return b},L:function(a){X.cullFace(a)},Oa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=rb[d];e&&(X.deleteBuffer(e),e.name=0,rb[d]=null,d==X.Xb&&(X.Xb=0),d==X.Lb&&(X.Lb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=sb[d];e&&(X.deleteFramebuffer(e),e.name=0,sb[d]=null)}},w:function(a){if(a){var b=R[a];b?(X.deleteProgram(b),b.name=0,R[a]=null,xb[a]=null):U(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=
F[b+4*c>>2],e=tb[d];e&&(X.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},s:function(a){if(a){var b=T[a];b?(X.deleteShader(b),T[a]=null):U(1281)}},Na:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=ub[d];e&&(X.deleteTexture(e),e.name=0,ub[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];X.deleteVertexArray(vb[d]);vb[d]=null}},v:function(a){X.depthFunc(a)},u:function(a){X.depthMask(!!a)},d:function(a){X.disable(a)},R:function(a){X.disableVertexAttribArray(a)},$a:function(a,b,
c){X.drawArrays(a,b,c)},ab:function(a,b,c,d){X.drawElements(a,b,c,d)},g:function(a){X.enable(a)},gb:function(a){X.enableVertexAttribArray(a)},M:function(a){X.frontFace(a)},K:function(a,b){Db(a,b,"createBuffer",rb)},I:function(a,b){Db(a,b,"createRenderbuffer",tb)},Fa:function(a,b){Db(a,b,"createTexture",ub)},La:function(a,b){Db(a,b,"createVertexArray",vb)},sa:function(a,b){return X.getAttribLocation(R[a],E(b))},e:function(a,b){Eb(a,b)},ya:function(a,b,c,d){a=X.getProgramInfoLog(R[a]);null===a&&(a=
"(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},C:function(a,b,c){if(c)if(a>=pb)U(1281);else{var d=xb[a];if(d)if(35716==b)a=X.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Tb;else if(35722==b){if(-1==d.Nb){a=R[a];var e=X.getProgramParameter(a,35721);for(b=d.Nb=0;b<e;++b)d.Nb=Math.max(d.Nb,X.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Nb}else if(35381==b){if(-1==d.Ob)for(a=R[a],e=X.getProgramParameter(a,35382),b=d.Ob=0;b<e;++b)d.Ob=
Math.max(d.Ob,X.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Ob}else F[c>>2]=X.getProgramParameter(R[a],b);else U(1282)}else U(1281)},ta:function(a,b,c,d){a=X.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=X.getShaderParameter(T[a],b):U(1281)},Qa:function(a){if(yb[a])return yb[a];
switch(a){case 7939:var b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||U(1280);b=Fb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Fb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=
Fb(b);break;default:return U(1280),0}return yb[a]=b},Pa:function(a,b){if(2>W.version)return U(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Fb(d)}),c=zb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},k:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=xb[a]&&xb[a].fc[b])&&0<=c&&c<a[0]?a[1]+c:-1},za:function(a){X.linkProgram(R[a]);var b=R[a];a=xb[a]={fc:{},Tb:0,Nb:-1,Ob:-1};for(var c=a.fc,d=X.getProgramParameter(b,35718),e=0;e<d;++e){var h=X.getActiveUniform(b,e),f=h.name;a.Tb=Math.max(a.Tb,f.length+1);"]"==f.slice(-1)&&(f=f.slice(0,f.lastIndexOf("[")));var m=X.getUniformLocation(b,f);if(m){var n=V(S);c[f]=[h.size,n];S[n]=m;for(var p=1;p<h.size;++p)m=X.getUniformLocation(b,f+"["+p+"]"),n=V(S),S[n]=m}}},N:function(a,b){X.polygonOffset(a,
b)},r:function(a){X.readBuffer(a)},Ga:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},y:function(a,b,c,d){X.scissor(a,b,c,d)},va:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>f?void 0:f)}X.shaderSource(T[a],e)},Ka:function(a,b,c){X.stencilFunc(a,b,c)},pa:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},t:function(a){X.stencilMask(a)},Ja:function(a,b,c){X.stencilOp(a,b,c)},oa:function(a,b,
c,d){X.stencilOpSeparate(a,b,c,d)},Da:function(a,b,c,d,e,h,f,m,n){if(2<=W.version)if(X.Lb)X.texImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=Gb(m);X.texImage2D(a,b,c,d,e,h,f,m,p,n>>Hb(p))}else X.texImage2D(a,b,c,d,e,h,f,m,null);else X.texImage2D(a,b,c,d,e,h,f,m,n?Ib(m,f,d,e,n):null)},Ba:function(a,b,c,d,e,h,f,m,n,p){if(X.Lb)X.texImage3D(a,b,c,d,e,h,f,m,n,p);else if(p){var q=Gb(n);X.texImage3D(a,b,c,d,e,h,f,m,n,q,p>>Hb(q))}else X.texImage3D(a,b,c,d,e,h,f,m,n,null)},F:function(a,b,c){X.texParameterf(a,
b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},ma:function(a,b,c,d,e,h,f,m,n){if(2<=W.version)if(X.Lb)X.texSubImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=Gb(m);X.texSubImage2D(a,b,c,d,e,h,f,m,p,n>>Hb(p))}else X.texSubImage2D(a,b,c,d,e,h,f,m,null);else p=null,n&&(p=Ib(m,f,e,h,n)),X.texSubImage2D(a,b,c,d,e,h,f,m,p)},la:function(a,b,c,d,e,h,f,m,n,p,q){if(X.Lb)X.texSubImage3D(a,b,c,d,e,h,f,m,n,p,q);else if(q){var Z=Gb(p);X.texSubImage3D(a,b,c,d,e,h,f,m,n,p,Z,q>>Hb(Z))}else X.texSubImage3D(a,b,c,d,e,
h,f,m,n,p,null)},fb:function(a,b,c){if(2<=W.version)X.uniform1fv(S[a],G,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);X.uniform1fv(S[a],d)}},B:function(a,b){X.uniform1i(S[a],b)},eb:function(a,b,c){if(2<=W.version)X.uniform2fv(S[a],G,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);X.uniform2fv(S[a],d)}},db:function(a,b,c){if(2<=W.version)X.uniform3fv(S[a],G,c>>
2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);X.uniform3fv(S[a],d)}},cb:function(a,b,c){if(2<=W.version)X.uniform4fv(S[a],G,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=G.subarray(c>>2,c+16*b>>2);X.uniform4fv(S[a],d)}},bb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(S[a],!!c,G,d>>2,16*b);
else{if(18>=b){var e=Y[16*b-1],h=G;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=h[m];e[f+1]=h[m+1];e[f+2]=h[m+2];e[f+3]=h[m+3];e[f+4]=h[m+4];e[f+5]=h[m+5];e[f+6]=h[m+6];e[f+7]=h[m+7];e[f+8]=h[m+8];e[f+9]=h[m+9];e[f+10]=h[m+10];e[f+11]=h[m+11];e[f+12]=h[m+12];e[f+13]=h[m+13];e[f+14]=h[m+14];e[f+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(S[a],!!c,e)}},j:function(a){X.useProgram(R[a])},hb:function(a,b){X.vertexAttribDivisor(a,b)},ib:function(a,b,c,d,e,h){X.vertexAttribPointer(a,
b,c,!!d,e,h)},z:function(a,b,c,d){X.viewport(a,b,c,d)},Xa:function(){g.$b=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.$b)},Wa:function(){g.ec=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.ec)},Va:function(a){g.yc=[];a=E(a);a=document.getElementById(a);g.ac=function(b){b.stopPropagation();b.preventDefault()};g.bc=function(b){b.stopPropagation();b.preventDefault()};g.cc=
function(b){b.stopPropagation();b.preventDefault()};g.dc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;g.zc=c;Mb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.ac,!1);a.addEventListener("dragleave",g.bc,!1);a.addEventListener("dragover",g.cc,!1);a.addEventListener("drop",g.dc,!1)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},nb:function(a){a=E(a);g.Pb=document.getElementById(a);g.Pb||console.log("sokol_app.h: invalid target:"+a);g.Pb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",g.$b)},Sa:function(){window.removeEventListener("paste",g.ec)},Ra:function(a){a=
E(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.ac);a.removeEventListener("dragleave",g.bc);a.removeEventListener("dragover",g.cc);a.removeEventListener("drop",g.dc)},x:function(){g.Pb&&g.Pb.requestPointerLock&&g.Pb.requestPointerLock()},n:function(){document.getElementById("_sokol_app_input_element").blur()},qa:function(a,b,c,d,e,h){b=E(b);var f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";var m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=
function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(f.response),p=n.length;p<=h?(D.set(n,e),Pb(a,d,p)):Qb(a)}else Rb(a,this.status)};f.send()},_a:function(a,b){b=E(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Sb(a,d)}else Rb(a,this.status)};c.send()}};
(function(){function a(e){g.asm=e.exports;ka=g.asm.ob;ya();I=g.asm.Hb;J--;g.monitorRunDependencies&&g.monitorRunDependencies(J);0==J&&(null!==Ga&&(clearInterval(Ga),Ga=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Tb};J++;g.monitorRunDependencies&&g.monitorRunDependencies(J);if(g.instantiateWasm)try{return g.instantiateWasm(d,a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||Ha("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ea=g.___wasm_call_ctors=function(){return(Ea=g.___wasm_call_ctors=g.asm.pb).apply(null,arguments)},P=g._malloc=function(){return(P=g._malloc=g.asm.qb).apply(null,arguments)},Ob=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=g.__sapp_emsc_notify_keyboard_hidden=g.asm.rb).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.sb).apply(null,arguments)};
var Lb=g.__sapp_html5_get_ask_leave_site=function(){return(Lb=g.__sapp_html5_get_ask_leave_site=g.asm.tb).apply(null,arguments)},Mb=g.__sapp_emsc_begin_drop=function(){return(Mb=g.__sapp_emsc_begin_drop=g.asm.ub).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.vb).apply(null,arguments)};var Nb=g.__sapp_emsc_end_drop=function(){return(Nb=g.__sapp_emsc_end_drop=g.asm.wb).apply(null,arguments)};
g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.xb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.yb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.zb).apply(null,arguments)};
var Sb=g.__sfetch_emsc_head_response=function(){return(Sb=g.__sfetch_emsc_head_response=g.asm.Ab).apply(null,arguments)},Pb=g.__sfetch_emsc_get_response=function(){return(Pb=g.__sfetch_emsc_get_response=g.asm.Bb).apply(null,arguments)},Rb=g.__sfetch_emsc_failed_http_status=function(){return(Rb=g.__sfetch_emsc_failed_http_status=g.asm.Cb).apply(null,arguments)},Qb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Qb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.Db).apply(null,arguments)},pa=
g.stackSave=function(){return(pa=g.stackSave=g.asm.Eb).apply(null,arguments)},qa=g.stackRestore=function(){return(qa=g.stackRestore=g.asm.Fb).apply(null,arguments)},A=g.stackAlloc=function(){return(A=g.stackAlloc=g.asm.Gb).apply(null,arguments)},Ub;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Vb(){Ub||Wb();Ub||(K=Vb)};
function Wb(a){function b(){if(!Ub&&(Ub=!0,g.calledRun=!0,!la)){Ma(Aa);Ma(Ba);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(Xb){var c=a,d=g._main;c=c||[];var e=c.length+1,h=A(4*(e+1));F[h>>2]=ta(aa);for(var f=1;f<e;f++)F[(h>>2)+f]=ta(c[f-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(g.onExit)g.onExit(m);la=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)c=g.postRun.shift(),Da.unshift(c);Ma(Da)}}a=a||r;if(!(0<J)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Fa();Ma(za);0<J||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=Wb;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();
var Xb=!0;g.noInitialRun&&(Xb=!1);Wb();
