var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},k;for(k in e)e.hasOwnProperty(k)&&(f[k]=e[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var w="",x,y;
if(ba){w=__dirname+"/";var ea,fa;x=function(a,b){ea||(ea=require("fs"));fa||(fa=require("path"));a=fa.normalize(a);a=ea.readFileSync(a);return b?a:a.toString()};y=function(a){a=x(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof ha))throw a;});process.on("unhandledRejection",
z);t=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(x=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ia=e.print||console.log.bind(console),A=e.printErr||console.warn.bind(console);for(k in f)f.hasOwnProperty(k)&&(e[k]=f[k]);f=null;e.arguments&&(n=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var B;e.wasmBinary&&(B=e.wasmBinary);"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,ja=!1,ka="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a){if(a){for(var b=E,c=a+void 0,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.subarray&&ka)a=ka.decode(b.subarray(a,d));else{for(c="";a<d;){var g=b[a++];if(g&128){var h=b[a++]&63;if(192==(g&224))c+=String.fromCharCode((g&31)<<6|h);else{var l=b[a++]&63;g=224==(g&240)?(g&15)<<12|h<<6|l:(g&7)<<18|h<<12|l<<6|b[a++]&63;65536>g?c+=String.fromCharCode(g):(g-=65536,c+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else c+=String.fromCharCode(g)}a=c}}else a="";return a}
function F(a,b,c,d){if(0<d){d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var l=a.charCodeAt(++g);h=65536+((h&1023)<<10)|l&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ma(a){var b=la(a)+1,c=na(b);F(a,G,c,b);return c}function oa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,G,E,pa,H,I;
function qa(){e.HEAP8=G=new Int8Array(buffer);e.HEAP16=pa=new Int16Array(buffer);e.HEAP32=H=new Int32Array(buffer);e.HEAPU8=E=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=I=new Float64Array(buffer)}var ra=e.TOTAL_MEMORY||33554432;e.wasmMemory?C=e.wasmMemory:C=new WebAssembly.Memory({initial:ra/65536});C&&(buffer=C.buffer);ra=buffer.byteLength;qa();H[4620]=5261376;
function J(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ua;"number"===typeof c?void 0===b.Ma?e.dynCall_v(c):e.dynCall_vi(c,b.Ma):c(void 0===b.Ma?null:b.Ma)}}}var sa=[],ta=[],va=[],wa=[],xa=[];function ya(){var a=e.preRun.shift();sa.unshift(a)}var K=0,za=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function Aa(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="clear-sapp.wasm";if(!Aa()){var Ba=M;M=e.locateFile?e.locateFile(Ba,w):w+Ba}function Ca(){try{if(B)return new Uint8Array(B);if(y)return y(M);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Da(){return B||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ca())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ca()})}
function Ea(a){function b(a){e.asm=a.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==za&&(clearInterval(za),za=null),L&&(a=L,L=null,a()))}function c(a){b(a.instance)}function d(a){return Da().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var g={env:a};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(g,b)}catch(h){return A("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||Aa()||"function"!==typeof fetch)return d(c);fetch(M,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,g).then(c,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}e.asm=function(a,b){b.memory=C;b.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});return Ea(b)};ta.push({Ua:function(){Fa()}});
var Ga=0,N=0,O=0,Ha=0,Ia=0,Ja=null,Ka=null,La=!1;function Ma(){for(var a=P.length-1;0<=a;--a)Na(a);P=[];Oa=[]}var Oa=[];function Pa(){if(Qa&&Ra.Ha)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.fb.apply(this,b.Ya)}}var Qa=0,Ra=null,P=[];function Sa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Na(a){var b=P[a];b.target.removeEventListener(b.Ga,b.Sa,b.Ia);P.splice(a,1)}
function Q(a){function b(b){++Qa;Ra=a;Pa();a.Ka(b);Pa();--Qa}if(a.Ja)a.Sa=b,a.target.addEventListener(a.Ga,b,a.Ia),P.push(a),La||(wa.push(Ma),La=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Ga==a.Ga&&Na(c--)}var Ta=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function R(a){try{if(!a)return window;"number"===typeof a&&(a=Ta[a]||D(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ua(a){"number"===typeof a&&(a=D(a));return a&&"#canvas"!==a?"undefined"!==typeof Va&&Wa[a]?Wa[a]:R(a):"undefined"!==typeof Va&&Wa.canvas?Wa.canvas:e.canvas}
function Xa(a,b,c,d,g,h){Ga||(Ga=S(164));a={target:R(a),Ha:Sa()?!1:!0,Ga:h,Ja:d,Ka:function(a){a=a||event;var c=Ga;F(a.key?a.key:"",E,c+0,32);F(a.code?a.code:"",E,c+32,32);H[c+64>>2]=a.location;H[c+68>>2]=a.ctrlKey;H[c+72>>2]=a.shiftKey;H[c+76>>2]=a.altKey;H[c+80>>2]=a.metaKey;H[c+84>>2]=a.repeat;F(a.locale?a.locale:"",E,c+88,32);F(a.char?a.char:"",E,c+120,32);H[c+152>>2]=a.charCode;H[c+156>>2]=a.keyCode;H[c+160>>2]=a.which;T(d,g,c,b)&&a.preventDefault()},Ia:c};Q(a)}
function $a(a,b,c){I[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();H[a+8>>2]=b.screenX;H[a+12>>2]=b.screenY;H[a+16>>2]=b.clientX;H[a+20>>2]=b.clientY;H[a+24>>2]=b.ctrlKey;H[a+28>>2]=b.shiftKey;H[a+32>>2]=b.altKey;H[a+36>>2]=b.metaKey;pa[a+40>>1]=b.button;pa[a+42>>1]=b.buttons;H[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ja;H[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ka;if(e.canvas){var d=e.canvas.getBoundingClientRect();
H[a+60>>2]=b.clientX-d.left;H[a+64>>2]=b.clientY-d.top}else H[a+60>>2]=0,H[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},H[a+52>>2]=b.clientX-d.left,H[a+56>>2]=b.clientY-d.top):(H[a+52>>2]=0,H[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ja=b.screenX,Ka=b.screenY)}
function U(a,b,c,d,g,h){N||(N=S(72));a=R(a);c={target:a,Ha:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ga:h,Ja:d,Ka:function(c){c=c||event;$a(N,c,a);T(d,g,N,b)&&c.preventDefault()},Ia:c};Sa()&&"mousedown"==h&&(c.Ha=!1);Q(c)}
function ab(a,b,c,d){Ha||(Ha=S(36));a=R(a);Q({target:a,Ha:!1,Ga:"resize",Ja:d,Ka:function(c){c=c||event;if(c.target==a){var g=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ha;H[l>>2]=c.detail;H[l+4>>2]=document.body.clientWidth;H[l+8>>2]=document.body.clientHeight;
H[l+12>>2]=innerWidth;H[l+16>>2]=innerHeight;H[l+20>>2]=outerWidth;H[l+24>>2]=outerHeight;H[l+28>>2]=g[0];H[l+32>>2]=g[1];T(d,10,l,b)&&c.preventDefault()}},Ia:c})}
function bb(a,b,c,d,g,h){Ia||(Ia=S(1684));a=R(a);Q({target:a,Ha:"touchstart"==h||"touchend"==h,Ga:h,Ja:d,Ka:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var p=c.touches[l];p.Na=!1;h[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],h[p.identifier]=p,p.Na=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],h[p.identifier].Wa=!0;var m=p=Ia;H[m+4>>2]=c.ctrlKey;H[m+8>>2]=c.shiftKey;H[m+12>>2]=c.altKey;H[m+16>>2]=c.metaKey;m+=20;var ua=e.canvas?e.canvas.getBoundingClientRect():
void 0,Ya=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},Za=0;for(l in h){var r=h[l];H[m>>2]=r.identifier;H[m+4>>2]=r.screenX;H[m+8>>2]=r.screenY;H[m+12>>2]=r.clientX;H[m+16>>2]=r.clientY;H[m+20>>2]=r.pageX;H[m+24>>2]=r.pageY;H[m+28>>2]=r.Na;H[m+32>>2]=r.Wa;ua?(H[m+44>>2]=r.clientX-ua.left,H[m+48>>2]=r.clientY-ua.top):(H[m+44>>2]=0,H[m+48>>2]=0);H[m+36>>2]=r.clientX-Ya.left;H[m+40>>2]=r.clientY-Ya.top;m+=52;if(32<=++Za)break}H[p>>2]=Za;T(d,g,p,b)&&c.preventDefault()},Ia:c})}
function cb(a,b,c,d,g,h){a||(a=e.canvas);a={target:R(a),Ha:!1,Ga:h,Ja:d,Ka:function(a){a=a||event;T(d,g,0,b)&&a.preventDefault()},Ia:c};Q(a)}
function db(a,b,c,d,g){function h(c){c=c||event;$a(O,c,a);I[O+72>>3]=c.wheelDeltaX||0;I[O+80>>3]=-(c.wheelDeltaY||c.wheelDelta);I[O+88>>3]=0;H[O+96>>2]=0;T(d,9,O,b)&&c.preventDefault()}function l(c){c=c||event;var g=O;$a(g,c,a);I[g+72>>3]=c.deltaX;I[g+80>>3]=c.deltaY;I[g+88>>3]=c.deltaZ;H[g+96>>2]=c.deltaMode;T(d,9,g,b)&&c.preventDefault()}O||(O=S(104));Q({target:a,Ha:!0,Ga:g,Ja:d,Ka:"wheel"==g?l:h,Ia:c})}var eb=1,fb=0,gb=[],hb=[],ib=[],jb=[],kb=[],V=[],lb={},W=null,Wa={},mb={},nb={};
function X(a){fb||(fb=a)}function ob(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=S(8),g={handle:d,attributes:b,version:b.Ra,La:a};g.eb=2<=g.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Xa=g);lb[d]=g;("undefined"===typeof b.Qa||b.Qa)&&pb(g);return d}
function qb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,g,h){b.drawArraysInstancedANGLE(a,d,g,h)},a.drawElementsInstanced=function(a,d,g,h,l){b.drawElementsInstancedANGLE(a,d,g,h,l)})}
function rb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function sb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function pb(a){a||(a=W);if(!a.Va){a.Va=!0;var b=a.La;2>a.version&&(qb(b),rb(b),sb(b));b.$a=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var Va={},tb,ub,vb=["default","low-power","high-performance"],wb=[];
function xb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else X(1281)}
function Z(a){var b=la(a)+1,c=S(b);F(a,E,c,b);return c}function yb(){e.___errno_location&&(H[e.___errno_location()>>2]=12)}function zb(a){a=oa(a);var b=buffer.byteLength;try{return-1!==C.grow((a-b)/65536)?(buffer=C.buffer,!0):!1}catch(c){return!1}}for(var Y,Bb=0;256>Bb;Bb++);for(var Cb=0;32>Cb;Cb++)wb.push(Array(Cb));
var Jb=e.asm({},{z:function(){return devicePixelRatio||1},A:function(a,b,c){a=a?R(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),I[b>>3]=a.right-a.left,I[c>>3]=a.bottom-a.top):(I[b>>3]=a.clientWidth,I[c>>3]=a.clientHeight);return 0},E:function(a,b,c){E.set(E.subarray(b,b+c),a)},ba:function(a,b){function c(d){Db(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},x:function(a,b,c){a=Ua(a);if(!a)return-4;a.width=b;a.height=c;return 0},ka:function(a,b,c,
d){Xa(a,b,c,d,2,"keydown");return 0},ia:function(a,b,c,d){Xa(a,b,c,d,1,"keypress");return 0},ja:function(a,b,c,d){Xa(a,b,c,d,3,"keyup");return 0},C:function(a,b,c,d){U(a,b,c,d,5,"mousedown");return 0},na:function(a,b,c,d){U(a,b,c,d,33,"mouseenter");return 0},ma:function(a,b,c,d){U(a,b,c,d,34,"mouseleave");return 0},oa:function(a,b,c,d){U(a,b,c,d,8,"mousemove");return 0},B:function(a,b,c,d){U(a,b,c,d,6,"mouseup");return 0},pa:function(a,b,c,d){ab(a,b,c,d);return 0},ea:function(a,b,c,d){bb(a,b,c,d,
25,"touchcancel");return 0},fa:function(a,b,c,d){bb(a,b,c,d,23,"touchend");return 0},ga:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},ha:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},da:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},ca:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},la:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(db(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(db(a,b,c,d,"mousewheel"),0):-1},q:function(a,
b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=vb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.Ra=H[b+8];c.ab=H[b+9];c.Qa=H[b+10];c.Ta=H[b+11];c.bb=H[b+12];c.cb=H[b+13];a=Ua(a);!a||c.Ta?c=0:c=(a=1<c.Ra?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?ob(a,c):0;return c},D:function(a,b){a=lb[a];b=D(b);0==b.indexOf("GL_")&&(b=b.substr(3));
"ANGLE_instanced_arrays"==b?qb(Y):"OES_vertex_array_object"==b?rb(Y):"WEBGL_draw_buffers"==b&&sb(Y);return!!a.La.getExtension(b)},U:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},I:function(a){W=lb[a];e.Za=Y=W&&W.La;return!a||Y?0:-5},v:function(a){Y.activeTexture(a)},m:function(a,b){35051==a?Y.Oa=b:35052==a&&(Y.Pa=b);Y.bindBuffer(a,gb[b])},d:function(a,b){Y.bindFramebuffer(a,ib[b])},b:function(a,b){Y.bindTexture(a,kb[b])},y:function(a){Y.bindVertexArray(V[a])},
M:function(a,b,c,d){Y.blendColor(a,b,c,d)},N:function(a,b){Y.blendEquationSeparate(a,b)},O:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},j:function(a,b,c,d,g,h,l,q,Ab,p){Y.blitFramebuffer(a,b,c,d,g,h,l,q,Ab,p)},p:function(a){Y.clear(a)},R:function(a,b,c,d){Y.clearColor(a,b,c,d)},Q:function(a){Y.clearDepth(a)},P:function(a){Y.clearStencil(a)},u:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},L:function(a){Y.cullFace(a)},X:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],g=gb[d];g&&(Y.deleteBuffer(g),
g.name=0,gb[d]=null,d==tb&&(tb=0),d==ub&&(ub=0),d==Y.Oa&&(Y.Oa=0),d==Y.Pa&&(Y.Pa=0))}},f:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],g=ib[d];g&&(Y.deleteFramebuffer(g),g.name=0,ib[d]=null)}},V:function(a){if(a){var b=hb[a];b?(Y.deleteProgram(b),b.name=0,hb[a]=null):X(1281)}},w:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],g=jb[d];g&&(Y.deleteRenderbuffer(g),g.name=0,jb[d]=null)}},W:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],g=kb[d];g&&(Y.deleteTexture(g),g.name=0,kb[d]=null)}},
Y:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(V[d]);V[d]=null}},s:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},a:function(a){Y.disableVertexAttribArray(a)},l:function(a,b){for(var c=wb[a],d=0;d<a;d++)c[d]=H[b+4*d>>2];Y.drawBuffers(c)},o:function(a){Y.enable(a)},K:function(a){Y.frontFace(a)},Z:function(a,b){for(var c=0;c<a;c++){var d=Y.createVertexArray(),g;if(g=d){g=V;for(var h=eb++,l=g.length;l<h;l++)g[l]=null;g=h}d?(d.name=
g,V[g]=d):X(1282);H[b+4*c>>2]=g}},c:function(a,b){xb(a,b)},$:function(a){if(mb[a])return mb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||X(1280);b=Z(b);break;case 7938:b=Y.getParameter(Y.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(Y.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return X(1280),0}return mb[a]=b},_:function(a,b){if(2>W.version)return X(1282),0;var c=nb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Z(a)}),c=nb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},J:function(a,b){Y.polygonOffset(a,b)},k:function(a){Y.readBuffer(a)},
S:function(a,b,c,d){Y.scissor(a,b,c,d)},H:function(a,b,c){Y.stencilFunc(a,b,c)},r:function(a){Y.stencilMask(a)},G:function(a,b,c){Y.stencilOp(a,b,c)},T:function(a,b,c,d){Y.viewport(a,b,c,d)},i:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Eb()});document.body.append(a)},h:function(){document.getElementById("_sokol_app_input_element").focus()},aa:function(){window.addEventListener("beforeunload",
function(a){0!=Fb()&&(a.preventDefault(),a.returnValue=" ")})},g:function(){document.getElementById("_sokol_app_input_element").blur()},n:function(a){a|=0;var b=G.length|0;var c=H[4620]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return z("OOM"),0,yb(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(G.length,16777216);b<a;)536870912>=b?b=oa(2*b):b=Math.min(oa((3*b+2147483648)/4),2147418112);zb(b)?(qa(),a=!0):a=!1}a=!(a|0)}if(a)return yb(),-1;H[4620]=d|0;return c|0},F:function(a,
b,c,d,g,h){b=D(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var q=0<d;q&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!q){var b=new Uint8Array(l.response),c=b.length;c<=h?(E.set(b,g),Gb(a,d,c)):Hb(a)}else Ib(a,this.status)};l.send()}},buffer);e.asm=Jb;
var Fa=e.___wasm_call_ctors=function(){return e.asm.qa.apply(null,arguments)},Eb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.ra.apply(null,arguments)},Fb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.sa.apply(null,arguments)};e._main=function(){return e.asm.ta.apply(null,arguments)};var S=e._malloc=function(){return e.asm.ua.apply(null,arguments)};e._free=function(){return e.asm.va.apply(null,arguments)};e.__saudio_emsc_pull=function(){return e.asm.wa.apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return e.asm.xa.apply(null,arguments)};var Gb=e.__sfetch_emsc_get_response=function(){return e.asm.ya.apply(null,arguments)},Ib=e.__sfetch_emsc_failed_http_status=function(){return e.asm.za.apply(null,arguments)},Hb=e.__sfetch_emsc_failed_buffer_too_small=function(){return e.asm.Aa.apply(null,arguments)},na=e.stackAlloc=function(){return e.asm.Ba.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.Ca.apply(null,arguments)};
e.dynCall_v=function(){return e.asm.Da.apply(null,arguments)};var T=e.dynCall_iiii=function(){return e.asm.Ea.apply(null,arguments)},Db=e.dynCall_idi=function(){return e.asm.Fa.apply(null,arguments)};e.asm=Jb;var Kb;function ha(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Lb(){Kb||Mb();Kb||(L=Lb)};
function Mb(a){function b(){if(!Kb&&(Kb=!0,!ja)){J(ta);J(va);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Nb){var b=a;b=b||[];var d=b.length+1,g=na(4*(d+1));H[g>>2]=ma(aa);for(var h=1;h<d;h++)H[(g>>2)+h]=ma(b[h-1]);H[(g>>2)+d]=0;try{var l=e._main(d,g);if(!e.noExitRuntime||0!==l){if(!e.noExitRuntime&&(ja=!0,e.onExit))e.onExit(l);t(l,new ha(l))}}catch(q){q instanceof ha||("SimulateInfiniteLoop"==q?e.noExitRuntime=!0:((b=q)&&"object"===typeof q&&q.stack&&(b=[q,q.stack]),A("exception thrown: "+
b),t(1,q)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)b=e.postRun.shift(),xa.unshift(b);J(xa)}}a=a||n;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ya();J(sa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Mb;
function z(a){if(e.onAbort)e.onAbort(a);ia(a);A(a);ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=z;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Nb=!0;e.noInitialRun&&(Nb=!1);e.noExitRuntime=!0;Mb();
