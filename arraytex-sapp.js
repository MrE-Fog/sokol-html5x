
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var ka,la=!1;function assert(a,b){a||x("Assertion failed: "+b)}function ma(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=A(q);C(n,D,p,q)}return p},array:function(n){var p=A(n.length);oa.set(n,p);return p}};a=ma(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=A(b);C(a,oa,c,b);return c}var ua,oa,D,va,wa,F,xa,G,H;
function ya(){var a=ka.buffer;ua=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=va=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var I,za=[],Aa=[],Ba=[],Ca=[],Da=[];Aa.push({ec:function(){Ea()}});function Fa(){var a=f.preRun.shift();za.unshift(a)}var J=0,Ga=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function x(a){if(f.onAbort)f.onAbort(a);y(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ha(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ia(){return Ha("data:application/octet-stream;base64,")}var L="arraytex-sapp.wasm";if(!Ia()){var Ja=L;L=f.locateFile?f.locateFile(Ja,v):v+Ja}
function Ka(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function La(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Ha("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.ec;"number"===typeof c?void 0===b.Ob?I.get(c)():I.get(c)(b.Ob):c(void 0===b.Ob?null:b.Ob)}}}var Na=0;function Oa(){for(var a=M.length-1;0<=a;--a)Pa(a);M=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.Mb)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.wc.apply(null,b.kc)}}var M=[];function Pa(a){var b=M[a];b.target.removeEventListener(b.Eb,b.cc,b.Fb);M.splice(a,1)}
function N(a){function b(d){++Na;Sa=a;Ra();a.Hb(d);Ra();--Na}if(a.Gb)a.cc=b,a.target.addEventListener(a.Eb,b,a.Fb),M.push(a),Ta||(Ca.push(Oa),Ta=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Eb==a.Eb&&Pa(c--)}var Ta,Sa,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function bb(a,b,c,d,e,h){Ua||(Ua=P(164));a={target:O(a),Mb:!0,Eb:h,Gb:d,Hb:function(g){var m=Ua,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(e,m,b)&&g.preventDefault()},Fb:c};N(a)}
function cb(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;va[2*a+16]=b.button;va[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=ab(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function Q(a,b,c,d,e,h){Va||(Va=P(64));a=O(a);N({target:a,Mb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Eb:h,Gb:d,Hb:function(g){g=g||event;cb(Va,g,a);I.get(d)(e,Va,b)&&g.preventDefault()},Fb:c})}
function db(a,b,c,d,e){Wa||(Wa=P(260));N({target:a,Eb:e,Gb:d,Hb:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.Qb||document.Sb||document.Rb;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&h.preventDefault()},Fb:c})}function eb(a,b,c,d,e){N({target:a,Eb:e,Gb:d,Hb:function(h){h=h||event;I.get(d)(38,0,b)&&h.preventDefault()},Fb:c})}
function fb(a,b,c,d){Xa||(Xa=P(36));a=O(a);N({target:a,Eb:"resize",Gb:d,Hb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Xa;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&e.preventDefault()}}},Fb:c})}
function gb(a,b,c,d,e,h){Ya||(Ya=P(1684));a=O(a);N({target:a,Mb:"touchstart"==h||"touchend"==h,Eb:h,Gb:d,Hb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.hc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].ic=1;n=Ya;q=n>>2;F[q+1]=g.ctrlKey;F[q+2]=g.shiftKey;F[q+3]=g.altKey;F[q+4]=g.metaKey;q+=5;var nb=ab(a),ob=0;for(p in m){var B=m[p];F[q]=B.identifier;F[q+1]=B.screenX;F[q+2]=
B.screenY;F[q+3]=B.clientX;F[q+4]=B.clientY;F[q+5]=B.pageX;F[q+6]=B.pageY;F[q+7]=B.hc;F[q+8]=B.ic;F[q+9]=B.clientX-nb.left;F[q+10]=B.clientY-nb.top;q+=13;if(31<++ob)break}F[n>>2]=ob;I.get(d)(e,n,b)&&g.preventDefault()},Fb:c})}function hb(a,b,c,d,e,h){a={target:O(a),Eb:h,Gb:d,Hb:function(g){g=g||event;I.get(d)(e,0,b)&&g.preventDefault()},Fb:c};N(a)}
function ib(a,b,c,d){Za||(Za=P(96));N({target:a,Mb:!0,Eb:"wheel",Gb:d,Hb:function(e){e=e||event;var h=Za;cb(h,e,a);H[h+64>>3]=e.deltaX;H[h+72>>3]=e.deltaY;H[h+80>>3]=e.deltaZ;F[h+88>>2]=e.deltaMode;I.get(d)(9,h,b)&&e.preventDefault()},Fb:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.mc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.pc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.rc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],R=[],tb=[],ub=[],vb=[],S=[],T=[],wb=[],xb=[],U={},yb={},zb={};function V(a){Ab||(Ab=a)}function W(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a){a||(a=X);if(!a.fc){a.fc=!0;var b=a.Nb;jb(b);kb(b);lb(b);mb(b);pb(b);b.nc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Ab,X,Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var e=0;e<a;e++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);F[b+4*e>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else V(1281)}
function Fb(a){var b=sa(a)+1,c=P(b);C(a,D,c,b);return c}function Gb(a){a-=5120;return 0==a?oa:1==a?D:2==a?va:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Hb(a,b,c,d,e){a=Gb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Ib=new Float32Array(288),Jb=0;288>Jb;++Jb)Z[Jb]=Ib.subarray(0,Jb+1);
var Ob={S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=O(a);if(!a)return-4;a=ab(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Xa:function(a,b,c){D.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},R:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},fa:function(a,
b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Qb||document.body.Sb||document.body.Rb))return-1;a=O(a);if(!a)return-4;db(a,b,c,d,"pointerlockchange");db(a,b,c,d,"mozpointerlockchange");db(a,b,c,d,"webkitpointerlockchange");db(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Qb||
document.body.Sb||document.body.Rb))return-1;a=O(a);if(!a)return-4;eb(a,b,c,d,"pointerlockerror");eb(a,b,c,d,"mozpointerlockerror");eb(a,b,c,d,"webkitpointerlockerror");eb(a,b,c,d,"mspointerlockerror");return 0},Wa:function(a,b,c,d){fb(a,b,c,d);return 0},X:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},U:function(a,b,c,
d){hb(a,b,c,d,31,"webglcontextlost");return 0},T:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d),0):-1},D:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Cb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],Vb:F[b+8],qc:F[b+9],Ub:F[b+10],dc:F[b+11],sc:F[b+12],tc:F[b+13]};a=O(a);if(!a||b.dc)b=0;
else if(a=1<b.Vb?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=W(xb),d={oc:c,attributes:b,version:b.Vb,Nb:a};a.canvas&&(a.canvas.jc=d);xb[c]=d;("undefined"===typeof b.Ub||b.Ub)&&Bb(d);b=c}else b=0;return b},ra:function(a,b){a=xb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(Y);"OES_vertex_array_object"==b&&kb(Y);"WEBGL_draw_buffers"==b&&lb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&mb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&pb(Y);"WEBGL_multi_draw"==b&&qb(Y);return!!a.Nb.getExtension(b)},Ga:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},xa:function(a){X=xb[a];f.lc=Y=X&&X.Nb;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},B:function(a,b){Y.attachShader(R[a],T[b])},c:function(a,b){35051==a?Y.Tb=b:35052==a&&(Y.Ib=b);Y.bindBuffer(a,sb[b])},h:function(a,b){Y.bindFramebuffer(a,tb[b])},Ea:function(a,b){Y.bindRenderbuffer(a,ub[b])},a:function(a,b){Y.bindTexture(a,vb[b])},O:function(a){Y.bindVertexArray(wb[a])},
K:function(a,b,c,d){Y.blendColor(a,b,c,d)},L:function(a,b){Y.blendEquationSeparate(a,b)},M:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},F:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},E:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},hb:function(a){Y.clear(a)},x:function(a,b,c,d){Y.clearColor(a,b,c,d)},
w:function(a){Y.clearDepth(a)},ib:function(a){Y.clearStencil(a)},j:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},pa:function(a){Y.compileShader(T[a])},Aa:function(a,b,c,d,e,h,g,m){2<=X.version?Y.Ib?Y.compressedTexImage2D(a,b,c,d,e,h,g,m):Y.compressedTexImage2D(a,b,c,d,e,h,D,m,g):Y.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+g):null)},ya:function(a,b,c,d,e,h,g,m,n){Y.Ib?Y.compressedTexImage3D(a,b,c,d,e,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,e,h,g,D,n,m)},va:function(){var a=W(R),b=Y.createProgram();
b.name=a;R[a]=b;return a},sa:function(a){var b=W(T);T[b]=Y.createShader(a);return b},H:function(a){Y.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=sb[d];e&&(Y.deleteBuffer(e),e.name=0,sb[d]=null,d==Y.Tb&&(Y.Tb=0),d==Y.Ib&&(Y.Ib=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=tb[d];e&&(Y.deleteFramebuffer(e),e.name=0,tb[d]=null)}},P:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,U[a]=null):V(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=
F[b+4*c>>2],e=ub[d];e&&(Y.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},r:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),T[a]=null):V(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=vb[d];e&&(Y.deleteTexture(e),e.name=0,vb[d]=null)}},La:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Y.deleteVertexArray(wb[d]);wb[d]=null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},N:function(a){Y.disableVertexAttribArray(a)},Za:function(a,b,
c){Y.drawArrays(a,b,c)},_a:function(a,b,c,d){Y.drawElements(a,b,c,d)},g:function(a){Y.enable(a)},eb:function(a){Y.enableVertexAttribArray(a)},I:function(a){Y.frontFace(a)},G:function(a,b){Db(a,b,"createBuffer",sb)},Fa:function(a,b){Db(a,b,"createRenderbuffer",ub)},Ba:function(a,b){Db(a,b,"createTexture",vb)},Ja:function(a,b){Db(a,b,"createVertexArray",wb)},na:function(a,b){return Y.getAttribLocation(R[a],E(b))},e:function(a,b){Eb(a,b)},ta:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a=
"(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},A:function(a,b,c){if(c)if(a>=rb)V(1281);else{var d=U[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Pb;else if(35722==b){if(-1==d.Jb){a=R[a];var e=Y.getProgramParameter(a,35721);for(b=d.Jb=0;b<e;++b)d.Jb=Math.max(d.Jb,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Jb}else if(35381==b){if(-1==d.Kb)for(a=R[a],e=Y.getProgramParameter(a,35382),b=d.Kb=0;b<e;++b)d.Kb=
Math.max(d.Kb,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Kb}else F[c>>2]=Y.getProgramParameter(R[a],b);else V(1282)}else V(1281)},oa:function(a,b,c,d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Pa:function(a){if(yb[a])return yb[a];
switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Fb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Fb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=
Fb(b);break;default:return V(1280),0}return yb[a]=b},Oa:function(a,b){if(2>X.version)return V(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Fb(d)}),c=zb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},k:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=U[a]&&U[a].bc[b])&&0<=c&&c<a[0]?a[1]+c:-1},ua:function(a){Y.linkProgram(R[a]);var b=R[a];a=U[a]={bc:{},Pb:0,Jb:-1,Kb:-1};for(var c=a.bc,d=Y.getProgramParameter(b,35718),e=0;e<d;++e){var h=Y.getActiveUniform(b,e),g=h.name;a.Pb=Math.max(a.Pb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(S);c[g]=[h.size,n];S[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(S),S[n]=m}}},J:function(a,b){Y.polygonOffset(a,
b)},q:function(a){Y.readBuffer(a)},Ca:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Da:function(a,b,c,d,e){Y.renderbufferStorageMultisample(a,b,c,d,e)},la:function(a,b,c,d){Y.scissor(a,b,c,d)},qa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(T[a],e)},Ia:function(a,b,c){Y.stencilFunc(a,b,c)},ia:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},Ha:function(a,b,c){Y.stencilOp(a,b,c)},ha:function(a,
b,c,d){Y.stencilOpSeparate(a,b,c,d)},za:function(a,b,c,d,e,h,g,m,n){if(2<=X.version)if(Y.Ib)Y.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Gb(m);Y.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,e,h,g,m,null);else Y.texImage2D(a,b,c,d,e,h,g,m,n?Hb(m,g,d,e,n):null)},wa:function(a,b,c,d,e,h,g,m,n,p){if(Y.Ib)Y.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Gb(n);Y.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,
b,c,d,e,h,g,m,n,null)},C:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},db:function(a,b,c){if(2<=X.version)Y.uniform1fv(S[a],G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(S[a],d)}},z:function(a,b){Y.uniform1i(S[a],b)},cb:function(a,b,c){if(2<=X.version)Y.uniform2fv(S[a],G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,
c+8*b>>2);Y.uniform2fv(S[a],d)}},bb:function(a,b,c){if(2<=X.version)Y.uniform3fv(S[a],G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Y.uniform3fv(S[a],d)}},ab:function(a,b,c){if(2<=X.version)Y.uniform4fv(S[a],G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(S[a],
d)}},$a:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(S[a],!!c,G,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(S[a],!!c,e)}},l:function(a){Y.useProgram(R[a])},fb:function(a,
b){Y.vertexAttribDivisor(a,b)},gb:function(a,b,c,d,e,h){Y.vertexAttribPointer(a,b,c,!!d,e,h)},ma:function(a,b,c,d){Y.viewport(a,b,c,d)},Va:function(){f.Wb=function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Wb)},Ua:function(){f.ac=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.ac)},Ta:function(a){f.uc=[];a=E(a);a=document.getElementById(a);f.Xb=function(b){b.stopPropagation();
b.preventDefault()};f.Yb=function(b){b.stopPropagation();b.preventDefault()};f.Zb=function(b){b.stopPropagation();b.preventDefault()};f.$b=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.vc=c;Lb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Mb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Xb,!1);a.addEventListener("dragleave",f.Yb,!1);a.addEventListener("dragover",f.Zb,!1);a.addEventListener("drop",f.$b,!1)},
o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},jb:function(a){a=E(a);f.Lb=document.getElementById(a);f.Lb||console.log("sokol_app.h: invalid target:"+a);f.Lb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Sa:function(){window.removeEventListener("beforeunload",
f.Wb)},Ra:function(){window.removeEventListener("paste",f.ac)},Qa:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Xb);a.removeEventListener("dragleave",f.Yb);a.removeEventListener("dragover",f.Zb);a.removeEventListener("drop",f.$b)},v:function(){f.Lb&&f.Lb.requestPointerLock&&f.Lb.requestPointerLock()},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.kb;ya();I=f.asm.Db;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ga&&(clearInterval(Ga),Ga=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Ob};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||Ha("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ea=f.___wasm_call_ctors=function(){return(Ea=f.___wasm_call_ctors=f.asm.lb).apply(null,arguments)},Nb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.mb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.nb).apply(null,arguments)};
var Kb=f.__sapp_html5_get_ask_leave_site=function(){return(Kb=f.__sapp_html5_get_ask_leave_site=f.asm.ob).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.pb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.qb).apply(null,arguments)};var Mb=f.__sapp_emsc_end_drop=function(){return(Mb=f.__sapp_emsc_end_drop=f.asm.rb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.sb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.tb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.ub).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.vb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.wb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.xb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.yb).apply(null,arguments)};
var P=f._malloc=function(){return(P=f._malloc=f.asm.zb).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Ab).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Bb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Cb).apply(null,arguments)},Pb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Qb(){Pb||Rb();Pb||(K=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,f.calledRun=!0,!la)){Ma(Aa);Ma(Ba);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Sb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));F[h>>2]=ta(aa);for(var g=1;g<e;g++)F[(h>>2)+g]=ta(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);la=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Da.unshift(c);Ma(Da)}}a=a||r;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();Ma(za);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Rb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();
var Sb=!0;f.noInitialRun&&(Sb=!1);Rb();
