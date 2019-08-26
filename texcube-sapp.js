var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var n=[],aa="./this.program";function q(a,b){throw b;}var t=!1,v=!1,ba=!1,ca=!1,da=!1;t="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!v;da=!t&&!ba&&!v;var w="",ea,x;
if(ba){w=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",
z);q=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(q=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(t||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(q=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,ka=!1,la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&la)a=la.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function F(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var m=a.charCodeAt(++h);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ma(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function na(a){var b=ma(a)+1,c=oa(b);F(a,G,c,b);return c}function pa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,G,E,H,qa,I,ra,J,K;
function sa(){f.HEAP8=G=new Int8Array(buffer);f.HEAP16=H=new Int16Array(buffer);f.HEAP32=I=new Int32Array(buffer);f.HEAPU8=E=new Uint8Array(buffer);f.HEAPU16=qa=new Uint16Array(buffer);f.HEAPU32=ra=new Uint32Array(buffer);f.HEAPF32=J=new Float32Array(buffer);f.HEAPF64=K=new Float64Array(buffer)}var ta=f.TOTAL_MEMORY||33554432;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:ta/65536});C&&(buffer=C.buffer);ta=buffer.byteLength;sa();I[7028]=5271008;
function ua(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Mb;"number"===typeof c?void 0===b.Db?f.dynCall_v(c):f.dynCall_vi(c,b.Db):c(void 0===b.Db?null:b.Db)}}}var va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=f.preRun.shift();va.unshift(a)}var L=0,Ba=null,Ca=null;f.preloadedImages={};f.preloadedAudios={};
function Da(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="texcube-sapp.wasm";if(!Da()){var Ea=M;M=f.locateFile?f.locateFile(Ea,w):w+Ea}function Fa(){try{if(B)return new Uint8Array(B);if(x)return x(M);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Ga(){return B||!t&&!v||"function"!==typeof fetch?new Promise(function(a){a(Fa())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Fa()})}
function Ha(a){function b(a){f.asm=a.exports;L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Ba&&(clearInterval(Ba),Ba=null),Ca&&(a=Ca,Ca=null,a()))}function c(a){b(a.instance)}function d(a){return Ga().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var e={env:a};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(h){return A("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch)return d(c);fetch(M,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=C;b.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});return Ha(b)};wa.push({Mb:function(){Ia()}});
var Ka=0,La=0,N=0,Ma=0,Na=0,Oa=null,Pa=null,Qa=!1;function Ra(){for(var a=O.length-1;0<=a;--a)Sa(a);O=[];Ta=[]}var Ta=[];function Ua(){if(Va&&Wa.vb)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.Wb.apply(this,b.Qb)}}var Va=0,Wa=null,O=[];function Xa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Sa(a){var b=O[a];b.target.removeEventListener(b.ub,b.Kb,b.wb);O.splice(a,1)}
function P(a){function b(b){++Va;Wa=a;Ua();a.zb(b);Ua();--Va}if(a.xb)a.Kb=b,a.target.addEventListener(a.ub,b,a.wb),O.push(a),Qa||(ya.push(Ra),Qa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].ub==a.ub&&Sa(c--)}var Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=Ya[a]||D(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Za(a){"number"===typeof a&&(a=D(a));return a&&"#canvas"!==a?"undefined"!==typeof $a&&ab[a]?ab[a]:Q(a):"undefined"!==typeof $a&&ab.canvas?ab.canvas:f.canvas}
function bb(a,b,c,d,e,h){Ka||(Ka=R(164));a={target:Q(a),vb:Xa()?!1:!0,ub:h,xb:d,zb:function(a){a=a||event;var c=Ka;F(a.key?a.key:"",E,c+0,32);F(a.code?a.code:"",E,c+32,32);I[c+64>>2]=a.location;I[c+68>>2]=a.ctrlKey;I[c+72>>2]=a.shiftKey;I[c+76>>2]=a.altKey;I[c+80>>2]=a.metaKey;I[c+84>>2]=a.repeat;F(a.locale?a.locale:"",E,c+88,32);F(a.char?a.char:"",E,c+120,32);I[c+152>>2]=a.charCode;I[c+156>>2]=a.keyCode;I[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},wb:c};P(a)}
function cb(a,b,c){K[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();I[a+8>>2]=b.screenX;I[a+12>>2]=b.screenY;I[a+16>>2]=b.clientX;I[a+20>>2]=b.clientY;I[a+24>>2]=b.ctrlKey;I[a+28>>2]=b.shiftKey;I[a+32>>2]=b.altKey;I[a+36>>2]=b.metaKey;H[a+40>>1]=b.button;H[a+42>>1]=b.buttons;I[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Oa;I[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Pa;if(f.canvas){var d=f.canvas.getBoundingClientRect();
I[a+60>>2]=b.clientX-d.left;I[a+64>>2]=b.clientY-d.top}else I[a+60>>2]=0,I[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},I[a+52>>2]=b.clientX-d.left,I[a+56>>2]=b.clientY-d.top):(I[a+52>>2]=0,I[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Oa=b.screenX,Pa=b.screenY)}
function db(a,b,c,d,e,h){La||(La=R(72));a=Q(a);c={target:a,vb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,ub:h,xb:d,zb:function(c){c=c||event;cb(La,c,a);S(d,e,La,b)&&c.preventDefault()},wb:c};Xa()&&"mousedown"==h&&(c.vb=!1);P(c)}
function eb(a,b,c,d){Ma||(Ma=R(36));a=Q(a);P({target:a,vb:!1,ub:"resize",xb:d,zb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ma;I[l>>2]=c.detail;I[l+4>>2]=document.body.clientWidth;I[l+8>>2]=document.body.clientHeight;
I[l+12>>2]=innerWidth;I[l+16>>2]=innerHeight;I[l+20>>2]=outerWidth;I[l+24>>2]=outerHeight;I[l+28>>2]=e[0];I[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},wb:c})}
function fb(a,b,c,d,e,h){Na||(Na=R(1684));a=Q(a);P({target:a,vb:"touchstart"==h||"touchend"==h,ub:h,xb:d,zb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var r=c.touches[l];r.Fb=!1;h[r.identifier]=r}for(l=0;l<c.changedTouches.length;++l)r=c.changedTouches[l],h[r.identifier]=r,r.Fb=!0;for(l=0;l<c.targetTouches.length;++l)r=c.targetTouches[l],h[r.identifier].Ob=!0;var u=r=Na;I[u+4>>2]=c.ctrlKey;I[u+8>>2]=c.shiftKey;I[u+12>>2]=c.altKey;I[u+16>>2]=c.metaKey;u+=20;var Ja=f.canvas?f.canvas.getBoundingClientRect():
void 0,kb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},lb=0;for(l in h){var y=h[l];I[u>>2]=y.identifier;I[u+4>>2]=y.screenX;I[u+8>>2]=y.screenY;I[u+12>>2]=y.clientX;I[u+16>>2]=y.clientY;I[u+20>>2]=y.pageX;I[u+24>>2]=y.pageY;I[u+28>>2]=y.Fb;I[u+32>>2]=y.Ob;Ja?(I[u+44>>2]=y.clientX-Ja.left,I[u+48>>2]=y.clientY-Ja.top):(I[u+44>>2]=0,I[u+48>>2]=0);I[u+36>>2]=y.clientX-kb.left;I[u+40>>2]=y.clientY-kb.top;u+=52;if(32<=++lb)break}I[r>>2]=lb;S(d,e,r,b)&&c.preventDefault()},wb:c})}
function gb(a,b,c,d,e,h){a||(a=f.canvas);a={target:Q(a),vb:!1,ub:h,xb:d,zb:function(a){a=a||event;S(d,e,0,b)&&a.preventDefault()},wb:c};P(a)}
function hb(a,b,c,d,e){function h(c){c=c||event;cb(N,c,a);K[N+72>>3]=c.wheelDeltaX||0;K[N+80>>3]=-(c.wheelDeltaY||c.wheelDelta);K[N+88>>3]=0;I[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||event;var e=N;cb(e,c,a);K[e+72>>3]=c.deltaX;K[e+80>>3]=c.deltaY;K[e+88>>3]=c.deltaZ;I[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,vb:!0,ub:e,xb:d,zb:"wheel"==e?l:h,wb:c})}
var ib=1,jb=0,mb=[],T=[],nb=[],ob=[],pb=[],U=[],V=[],qb=[],rb={},W=null,ab={},sb={},tb={},ub={};function X(a){jb||(jb=a)}function vb(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}var wb=null,Y=[0];
function xb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.Ib,Cb:a};e.tb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Pb=e);rb[d]=e;("undefined"===typeof b.Hb||b.Hb)&&yb(e);return d}
function zb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Ab(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Bb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function yb(a){a||(a=W);if(!a.Nb){a.Nb=!0;var b=a.Cb;2>a.version&&(zb(b),Ab(b),Bb(b));b.Sb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var $a={},Cb,Db,Eb=["default","low-power","high-performance"],Fb=[];function Gb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&vb(d);h?(h.name=l,d[l]=h):X(1282);I[b+4*e>>2]=l}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else X(1281)}
function Ib(a){var b=ma(a)+1,c=R(b);F(a,E,c,b);return c}var Jb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Kb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Lb(a,b,c,d,e){if(b=Jb[b]*Kb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return G.subarray(e,c);case 5121:return E.subarray(e,c);case 5122:return H.subarray(e>>1,c>>1);case 5124:return I.subarray(e>>2,c>>2);case 5126:return J.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:return ra.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return qa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Mb(a){switch(a){case 5120:return G;case 5121:return E;case 5122:return H;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return qa;case 5124:return I;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return ra;case 5126:return J}}var Nb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1};function Ob(){f.___errno_location&&(I[f.___errno_location()>>2]=12)}
function Pb(a){a=pa(a);var b=buffer.byteLength;try{return-1!==C.grow((a-b)/65536)?(buffer=C.buffer,!0):!1}catch(c){return!1}}var Z;wb=new Float32Array(256);for(var Qb=0;256>Qb;Qb++)Y[Qb]=wb.subarray(0,Qb+1);for(var Rb=0;32>Rb;Rb++)Fb.push(Array(Rb));
var Yb=f.asm({},{V:function(){return devicePixelRatio||1},X:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),K[b>>3]=a.right-a.left,K[c>>3]=a.bottom-a.top):(K[b>>3]=a.clientWidth,K[c>>3]=a.clientHeight);return 0},Wa:function(a,b,c){E.set(E.subarray(b,b+c),a)},Ka:function(a,b){function c(d){Sb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},T:function(a,b,c){a=Za(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ta:function(a,b,
c,d){bb(a,b,c,d,2,"keydown");return 0},Ra:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},Sa:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){db(a,b,c,d,5,"mousedown");return 0},Xa:function(a,b,c,d){db(a,b,c,d,33,"mouseenter");return 0},Va:function(a,b,c,d){db(a,b,c,d,34,"mouseleave");return 0},bb:function(a,b,c,d){db(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){db(a,b,c,d,6,"mouseup");return 0},cb:function(a,b,c,d){eb(a,b,c,d);return 0},Na:function(a,b,c,d){fb(a,
b,c,d,25,"touchcancel");return 0},Oa:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},Pa:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},Qa:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},Ma:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},La:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},Ua:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(hb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(hb(a,b,c,d,"mousewheel"),0):-1},J:function(a,
b){var c={};b>>=2;c.alpha=!!I[b];c.depth=!!I[b+1];c.stencil=!!I[b+2];c.antialias=!!I[b+3];c.premultipliedAlpha=!!I[b+4];c.preserveDrawingBuffer=!!I[b+5];c.powerPreference=Eb[I[b+6]];c.failIfMajorPerformanceCaveat=!!I[b+7];c.Ib=I[b+8];c.Tb=I[b+9];c.Hb=I[b+10];c.Lb=I[b+11];c.Ub=I[b+12];c.Vb=I[b+13];a=Za(a);!a||c.Lb?c=0:c=(a=1<c.Ib?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?xb(a,c):0;return c},na:function(a,b){a=rb[a];b=D(b);0==b.indexOf("GL_")&&(b=b.substr(3));
"ANGLE_instanced_arrays"==b?zb(Z):"OES_vertex_array_object"==b?Ab(Z):"WEBGL_draw_buffers"==b&&Bb(Z);return!!a.Cb.getExtension(b)},Ca:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},ra:function(a){W=rb[a];f.Rb=Z=W&&W.Cb;return!a||Z?0:-5},k:function(a){Z.activeTexture(a)},I:function(a,b){Z.attachShader(T[a],V[b])},d:function(a,b){35051==a?Z.Gb=b:35052==a&&(Z.yb=b);Z.bindBuffer(a,mb[b])},h:function(a,b){Z.bindFramebuffer(a,nb[b])},M:function(a,b){Z.bindRenderbuffer(a,
ob[b])},b:function(a,b){Z.bindTexture(a,pb[b])},U:function(a){Z.bindVertexArray(qb[a])},B:function(a,b,c,d){Z.blendColor(a,b,c,d)},C:function(a,b){Z.blendEquationSeparate(a,b)},D:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},l:function(a,b,c,d,e,h,l,m,p,r){Z.blitFramebuffer(a,b,c,d,e,h,l,m,p,r)},P:function(a,b,c,d){W.tb?c?Z.bufferData(a,E,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?E.subarray(c,c+b):b,d)},O:function(a,b,c,d){W.tb?Z.bufferSubData(a,b,E,d,c):Z.bufferSubData(a,b,E.subarray(d,d+c))},
G:function(a){Z.clear(a)},oa:function(a,b,c,d){Z.clearColor(a,b,c,d)},ma:function(a){Z.clearDepth(a)},la:function(a){Z.clearStencil(a)},u:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Za:function(a){Z.compileShader(V[a])},za:function(a,b,c,d,e,h,l,m){W.tb?Z.yb?Z.compressedTexImage2D(a,b,c,d,e,h,l,m):Z.compressedTexImage2D(a,b,c,d,e,h,E,m,l):Z.compressedTexImage2D(a,b,c,d,e,h,m?E.subarray(m,m+l):null)},xa:function(a,b,c,d,e,h,l,m,p){W.tb?Z.yb?Z.compressedTexImage3D(a,b,c,d,e,h,l,m,p):Z.compressedTexImage3D(a,
b,c,d,e,h,l,E,p,m):Z.compressedTexImage3D(a,b,c,d,e,h,l,p?E.subarray(p,p+m):null)},va:function(){var a=vb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},$a:function(a){var b=vb(V);V[b]=Z.createShader(a);return b},A:function(a){Z.cullFace(a)},Ea:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=mb[d];e&&(Z.deleteBuffer(e),e.name=0,mb[d]=null,d==Cb&&(Cb=0),d==Db&&(Db=0),d==Z.Gb&&(Z.Gb=0),d==Z.yb&&(Z.yb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],e=nb[d];e&&(Z.deleteFramebuffer(e),
e.name=0,nb[d]=null)}},R:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,sb[a]=null):X(1281)}},S:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=ob[d];e&&(Z.deleteRenderbuffer(e),e.name=0,ob[d]=null)}},v:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},Da:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=pb[d];e&&(Z.deleteTexture(e),e.name=0,pb[d]=null)}},Fa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2];Z.deleteVertexArray(qb[d]);qb[d]=
null}},s:function(a){Z.depthFunc(a)},t:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},_:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=Fb[a],d=0;d<a;d++)c[d]=I[b+4*d>>2];Z.drawBuffers(c)},$:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ga:function(a){Z.enableVertexAttribArray(a)},z:function(a){Z.frontFace(a)},Q:function(a,b){Gb(a,b,"createBuffer",mb)},N:function(a,b){Gb(a,b,"createRenderbuffer",ob)},Aa:function(a,
b){Gb(a,b,"createTexture",pb)},Ga:function(a,b){Gb(a,b,"createVertexArray",qb)},sa:function(a,b){return Z.getAttribLocation(T[a],D(b))},g:function(a,b){Hb(a,b)},ta:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,E,d,b):0;c&&(I[c>>2]=b)},H:function(a,b,c){if(c)if(a>=ib)X(1281);else{var d=sb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b)I[c>>2]=d.Eb;else if(35722==b){if(-1==d.Ab){a=T[a];
var e=Z.getProgramParameter(a,35721);for(b=d.Ab=0;b<e;++b)d.Ab=Math.max(d.Ab,Z.getActiveAttrib(a,b).name.length+1)}I[c>>2]=d.Ab}else if(35381==b){if(-1==d.Bb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Bb=0;b<e;++b)d.Bb=Math.max(d.Bb,Z.getActiveUniformBlockName(a,b).length+1);I[c>>2]=d.Bb}else I[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},Ya:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,E,d,b):0;c&&(I[c>>2]=b)},W:function(a,b,c){c?
35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),I[c>>2]=null===a||0==a.length?0:a.length+1):I[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Ia:function(a){if(tb[a])return tb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Ib(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Ib(b);break;case 7938:b=Z.getParameter(Z.VERSION);
b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ib(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:return X(1280),0}return tb[a]=b},Ha:function(a,b){if(2>W.version)return X(1282),0;var c=ub[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+
a})),c=c.map(function(a){return Ib(a)}),c=ub[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},j:function(a,b){b=D(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=sb[a]&&sb[a].Jb[b])&&0<=c&&c<a[0]?a[1]+c:-1},ua:function(a){Z.linkProgram(T[a]);var b=T[a];a=sb[a]={Jb:{},Eb:0,Ab:-1,Bb:-1};for(var c=a.Jb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.Eb=Math.max(a.Eb,l.length+
1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var p=vb(U);c[l]=[h.size,p];U[p]=m;for(var r=1;r<h.size;++r)m=Z.getUniformLocation(b,l+"["+r+"]"),p=vb(U),U[p]=m}}},y:function(a,b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},Ba:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},pa:function(a,b,c,d){Z.scissor(a,b,c,d)},_a:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?I[d+4*h>>
2]:-1;e+=D(I[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},Z:function(a,b,c){Z.stencilFunc(a,b,c)},F:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},r:function(a){Z.stencilMask(a)},Y:function(a,b,c){Z.stencilOp(a,b,c)},E:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,e,h,l,m,p){W.tb?Z.yb?Z.texImage2D(a,b,c,d,e,h,l,m,p):0!=p?Z.texImage2D(a,b,c,d,e,h,l,m,Mb(m),p>>(Nb[m]|0)):Z.texImage2D(a,b,c,d,e,h,l,m,null):Z.texImage2D(a,b,c,d,e,h,l,m,p?Lb(m,l,d,e,p):null)},wa:function(a,
b,c,d,e,h,l,m,p,r){Z.yb?Z.texImage3D(a,b,c,d,e,h,l,m,p,r):0!=r?Z.texImage3D(a,b,c,d,e,h,l,m,p,Mb(p),r>>(Nb[p]|0)):Z.texImage3D(a,b,c,d,e,h,l,m,p,null)},K:function(a,b,c){Z.texParameterf(a,b,c)},f:function(a,b,c){Z.texParameteri(a,b,c)},fa:function(a,b,c){if(W.tb)Z.uniform1fv(U[a],J,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=J[c+4*e>>2];else d=J.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},x:function(a,b){Z.uniform1i(U[a],b)},da:function(a,b,c){if(W.tb)Z.uniform2fv(U[a],J,c>>2,2*b);
else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2];else d=J.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},ca:function(a,b,c){if(W.tb)Z.uniform3fv(U[a],J,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2];else d=J.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},ba:function(a,b,c){if(W.tb)Z.uniform4fv(U[a],J,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=J[c+4*e>>2],d[e+
1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2],d[e+3]=J[c+(4*e+12)>>2];else d=J.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},aa:function(a,b,c,d){if(W.tb)Z.uniformMatrix4fv(U[a],!!c,J,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=J[d+4*h>>2],e[h+1]=J[d+(4*h+4)>>2],e[h+2]=J[d+(4*h+8)>>2],e[h+3]=J[d+(4*h+12)>>2],e[h+4]=J[d+(4*h+16)>>2],e[h+5]=J[d+(4*h+20)>>2],e[h+6]=J[d+(4*h+24)>>2],e[h+7]=J[d+(4*h+28)>>2],e[h+8]=J[d+(4*h+32)>>2],e[h+9]=J[d+(4*h+36)>>2],e[h+10]=J[d+(4*h+40)>>
2],e[h+11]=J[d+(4*h+44)>>2],e[h+12]=J[d+(4*h+48)>>2],e[h+13]=J[d+(4*h+52)>>2],e[h+14]=J[d+(4*h+56)>>2],e[h+15]=J[d+(4*h+60)>>2];else e=J.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},ja:function(a){Z.useProgram(T[a])},ha:function(a,b){Z.vertexAttribDivisor(a,b)},ia:function(a,b,c,d,e,h){Z.vertexAttribPointer(a,b,c,!!d,e,h)},qa:function(a,b,c,d){Z.viewport(a,b,c,d)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";
a.addEventListener("focusout",function(){Tb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Ja:function(){window.addEventListener("beforeunload",function(a){0!=Ub()&&(a.preventDefault(),a.returnValue=" ")})},o:function(){document.getElementById("_sokol_app_input_element").blur()},w:function(a){a|=0;var b=G.length|0;var c=I[7028]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return z("OOM"),0,Ob(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;
else{for(b=Math.max(G.length,16777216);b<a;)536870912>=b?b=pa(2*b):b=Math.min(pa((3*b+2147483648)/4),2147418112);Pb(b)?(sa(),a=!0):a=!1}a=!(a|0)}if(a)return Ob(),-1;I[7028]=d|0;return c|0},ab:function(a,b,c,d,e,h){b=D(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var m=0<d;m&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var b=new Uint8Array(l.response),c=b.length;
c<=h?(E.set(b,e),Vb(a,d,c)):Wb(a)}else Xb(a,this.status)};l.send()}},buffer);f.asm=Yb;var Ia=f.___wasm_call_ctors=function(){return f.asm.db.apply(null,arguments)},Tb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.eb.apply(null,arguments)},Ub=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.fb.apply(null,arguments)};f._main=function(){return f.asm.gb.apply(null,arguments)};var R=f._malloc=function(){return f.asm.hb.apply(null,arguments)};
f._free=function(){return f.asm.ib.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.jb.apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return f.asm.kb.apply(null,arguments)};
var Vb=f.__sfetch_emsc_get_response=function(){return f.asm.lb.apply(null,arguments)},Xb=f.__sfetch_emsc_failed_http_status=function(){return f.asm.mb.apply(null,arguments)},Wb=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.nb.apply(null,arguments)},oa=f.stackAlloc=function(){return f.asm.ob.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.pb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.qb.apply(null,arguments)};
var S=f.dynCall_iiii=function(){return f.asm.rb.apply(null,arguments)},Sb=f.dynCall_idi=function(){return f.asm.sb.apply(null,arguments)};f.asm=Yb;var Zb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ca=function $b(){Zb||ac();Zb||(Ca=$b)};
function ac(a){function b(){if(!Zb&&(Zb=!0,!ka)){ua(wa);ua(xa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(bc){var b=a;b=b||[];var d=b.length+1,e=oa(4*(d+1));I[e>>2]=na(aa);for(var h=1;h<d;h++)I[(e>>2)+h]=na(b[h-1]);I[(e>>2)+d]=0;try{var l=f._main(d,e);if(!f.noExitRuntime||0!==l){if(!f.noExitRuntime&&(ka=!0,f.onExit))f.onExit(l);q(l,new ia(l))}}catch(m){m instanceof ia||("SimulateInfiniteLoop"==m?f.noExitRuntime=!0:((b=m)&&"object"===typeof m&&m.stack&&(b=[m,m.stack]),A("exception thrown: "+
b),q(1,m)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),za.unshift(b);ua(za)}}a=a||n;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Aa();ua(va);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=ac;
function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=z;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var bc=!0;f.noInitialRun&&(bc=!1);f.noExitRuntime=!0;ac();
