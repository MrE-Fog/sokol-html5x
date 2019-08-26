var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in f)f.hasOwnProperty(h)&&(g[h]=f[h]);var m=[],aa="./this.program";function q(a,b){throw b;}var t=!1,u=!1,ba=!1,ca=!1,da=!1;t="object"===typeof window;u="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!u;da=!t&&!ba&&!u;var v="",ea,w;
if(ba){v=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||y("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));m=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",
y);q=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||y("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?m=scriptArgs:"undefined"!=typeof arguments&&(m=arguments),"function"===typeof quit&&(q=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(t||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(h in g)g.hasOwnProperty(h)&&(f[h]=g[h]);g=null;f.arguments&&(m=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(q=f.quit);var A;f.wasmBinary&&(A=f.wasmBinary);"object"!==typeof WebAssembly&&z("no native wasm support detected");var B,ka=!1,la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function C(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&la)a=la.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|l:(e&7)<<18|k<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function E(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var p=a.charCodeAt(++k);l=65536+((l&1023)<<10)|p&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ma(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function na(a){var b=ma(a)+1,c=oa(b);E(a,pa,c,b);return c}function qa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,pa,D,ra,F,G,H;
function sa(){f.HEAP8=pa=new Int8Array(buffer);f.HEAP16=ra=new Int16Array(buffer);f.HEAP32=F=new Int32Array(buffer);f.HEAPU8=D=new Uint8Array(buffer);f.HEAPU16=new Uint16Array(buffer);f.HEAPU32=new Uint32Array(buffer);f.HEAPF32=G=new Float32Array(buffer);f.HEAPF64=H=new Float64Array(buffer)}var ta=f.TOTAL_MEMORY||33554432;f.wasmMemory?B=f.wasmMemory:B=new WebAssembly.Memory({initial:ta/65536});B&&(buffer=B.buffer);ta=buffer.byteLength;sa();F[6840]=5270256;
function ua(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Bb;"number"===typeof c?void 0===b.rb?f.dynCall_v(c):f.dynCall_vi(c,b.rb):c(void 0===b.rb?null:b.rb)}}}var va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=f.preRun.shift();va.unshift(a)}var I=0,Ba=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function Ca(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="cube-sapp.wasm";if(!Ca()){var Da=K;K=f.locateFile?f.locateFile(Da,v):v+Da}function Fa(){try{if(A)return new Uint8Array(A);if(w)return w(K);throw"both async and sync fetching of the wasm failed";}catch(a){y(a)}}
function Ga(){return A||!t&&!u||"function"!==typeof fetch?new Promise(function(a){a(Fa())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Fa()})}
function Ha(a){function b(a){f.asm=a.exports;I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ba&&(clearInterval(Ba),Ba=null),J&&(a=J,J=null,a()))}function c(a){b(a.instance)}function d(a){return Ga().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);y(a)})}var e={env:a};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(k){return z("Module.instantiateWasm callback failed with error: "+
k),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ca()||"function"!==typeof fetch)return d(c);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=B;b.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});return Ha(b)};wa.push({Bb:function(){Ia()}});
var Ja=0,Ka=0,L=0,La=0,Ma=0,Na=null,Oa=null,Pa=!1;function Qa(){for(var a=M.length-1;0<=a;--a)Ra(a);M=[];Sa=[]}var Sa=[];function Ta(){if(Ua&&Va.jb)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Lb.apply(this,b.Fb)}}var Ua=0,Va=null,M=[];function Wa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ra(a){var b=M[a];b.target.removeEventListener(b.ib,b.zb,b.lb);M.splice(a,1)}
function N(a){function b(b){++Ua;Va=a;Ta();a.nb(b);Ta();--Ua}if(a.mb)a.zb=b,a.target.addEventListener(a.ib,b,a.lb),M.push(a),Pa||(ya.push(Qa),Pa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].ib==a.ib&&Ra(c--)}var Xa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){try{if(!a)return window;"number"===typeof a&&(a=Xa[a]||C(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ya(a){"number"===typeof a&&(a=C(a));return a&&"#canvas"!==a?"undefined"!==typeof Za&&$a[a]?$a[a]:O(a):"undefined"!==typeof Za&&$a.canvas?$a.canvas:f.canvas}
function ab(a,b,c,d,e,k){Ja||(Ja=P(164));a={target:O(a),jb:Wa()?!1:!0,ib:k,mb:d,nb:function(a){a=a||event;var c=Ja;E(a.key?a.key:"",D,c+0,32);E(a.code?a.code:"",D,c+32,32);F[c+64>>2]=a.location;F[c+68>>2]=a.ctrlKey;F[c+72>>2]=a.shiftKey;F[c+76>>2]=a.altKey;F[c+80>>2]=a.metaKey;F[c+84>>2]=a.repeat;E(a.locale?a.locale:"",D,c+88,32);E(a.char?a.char:"",D,c+120,32);F[c+152>>2]=a.charCode;F[c+156>>2]=a.keyCode;F[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},lb:c};N(a)}
function bb(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();F[a+8>>2]=b.screenX;F[a+12>>2]=b.screenY;F[a+16>>2]=b.clientX;F[a+20>>2]=b.clientY;F[a+24>>2]=b.ctrlKey;F[a+28>>2]=b.shiftKey;F[a+32>>2]=b.altKey;F[a+36>>2]=b.metaKey;ra[a+40>>1]=b.button;ra[a+42>>1]=b.buttons;F[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Na;F[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Oa;if(f.canvas){var d=f.canvas.getBoundingClientRect();
F[a+60>>2]=b.clientX-d.left;F[a+64>>2]=b.clientY-d.top}else F[a+60>>2]=0,F[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},F[a+52>>2]=b.clientX-d.left,F[a+56>>2]=b.clientY-d.top):(F[a+52>>2]=0,F[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Na=b.screenX,Oa=b.screenY)}
function S(a,b,c,d,e,k){Ka||(Ka=P(72));a=O(a);c={target:a,jb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ib:k,mb:d,nb:function(c){c=c||event;bb(Ka,c,a);R(d,e,Ka,b)&&c.preventDefault()},lb:c};Wa()&&"mousedown"==k&&(c.jb=!1);N(c)}
function cb(a,b,c,d){La||(La=P(36));a=O(a);N({target:a,jb:!1,ib:"resize",mb:d,nb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=La;F[l>>2]=c.detail;F[l+4>>2]=document.body.clientWidth;F[l+8>>2]=document.body.clientHeight;
F[l+12>>2]=innerWidth;F[l+16>>2]=innerHeight;F[l+20>>2]=outerWidth;F[l+24>>2]=outerHeight;F[l+28>>2]=e[0];F[l+32>>2]=e[1];R(d,10,l,b)&&c.preventDefault()}},lb:c})}
function db(a,b,c,d,e,k){Ma||(Ma=P(1684));a=O(a);N({target:a,jb:"touchstart"==k||"touchend"==k,ib:k,mb:d,nb:function(c){c=c||event;for(var k={},l=0;l<c.touches.length;++l){var r=c.touches[l];r.tb=!1;k[r.identifier]=r}for(l=0;l<c.changedTouches.length;++l)r=c.changedTouches[l],k[r.identifier]=r,r.tb=!0;for(l=0;l<c.targetTouches.length;++l)r=c.targetTouches[l],k[r.identifier].Db=!0;var n=r=Ma;F[n+4>>2]=c.ctrlKey;F[n+8>>2]=c.shiftKey;F[n+12>>2]=c.altKey;F[n+16>>2]=c.metaKey;n+=20;var Ea=f.canvas?f.canvas.getBoundingClientRect():
void 0,gb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},hb=0;for(l in k){var x=k[l];F[n>>2]=x.identifier;F[n+4>>2]=x.screenX;F[n+8>>2]=x.screenY;F[n+12>>2]=x.clientX;F[n+16>>2]=x.clientY;F[n+20>>2]=x.pageX;F[n+24>>2]=x.pageY;F[n+28>>2]=x.tb;F[n+32>>2]=x.Db;Ea?(F[n+44>>2]=x.clientX-Ea.left,F[n+48>>2]=x.clientY-Ea.top):(F[n+44>>2]=0,F[n+48>>2]=0);F[n+36>>2]=x.clientX-gb.left;F[n+40>>2]=x.clientY-gb.top;n+=52;if(32<=++hb)break}F[r>>2]=hb;R(d,e,r,b)&&c.preventDefault()},lb:c})}
function eb(a,b,c,d,e,k){a||(a=f.canvas);a={target:O(a),jb:!1,ib:k,mb:d,nb:function(a){a=a||event;R(d,e,0,b)&&a.preventDefault()},lb:c};N(a)}
function fb(a,b,c,d,e){function k(c){c=c||event;bb(L,c,a);H[L+72>>3]=c.wheelDeltaX||0;H[L+80>>3]=-(c.wheelDeltaY||c.wheelDelta);H[L+88>>3]=0;F[L+96>>2]=0;R(d,9,L,b)&&c.preventDefault()}function l(c){c=c||event;var e=L;bb(e,c,a);H[e+72>>3]=c.deltaX;H[e+80>>3]=c.deltaY;H[e+88>>3]=c.deltaZ;F[e+96>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}L||(L=P(104));N({target:a,jb:!0,ib:e,mb:d,nb:"wheel"==e?l:k,lb:c})}
var ib=1,jb=0,kb=[],T=[],lb=[],mb=[],nb=[],U=[],V=[],ob=[],pb={},W=null,$a={},qb={},rb={},sb={};function X(a){jb||(jb=a)}function tb(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}var ub=null,Y=[0];
function vb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=P(8),e={handle:d,attributes:b,version:b.xb,qb:a};e.kb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Eb=e);pb[d]=e;("undefined"===typeof b.wb||b.wb)&&wb(e);return d}
function xb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,k){b.drawArraysInstancedANGLE(a,d,e,k)},a.drawElementsInstanced=function(a,d,e,k,l){b.drawElementsInstancedANGLE(a,d,e,k,l)})}
function yb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function zb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function wb(a){a||(a=W);if(!a.Cb){a.Cb=!0;var b=a.qb;2>a.version&&(xb(b),yb(b),zb(b));b.Hb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var Za={},Ab,Bb,Cb=["default","low-power","high-performance"],Db=[];function Eb(a,b,c,d){for(var e=0;e<a;e++){var k=Z[c](),l=k&&tb(d);k?(k.name=l,d[l]=k):X(1282);F[b+4*e>>2]=l}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else X(1281)}
function Gb(a){var b=ma(a)+1,c=P(b);E(a,D,c,b);return c}function Hb(){f.___errno_location&&(F[f.___errno_location()>>2]=12)}function Ib(a){a=qa(a);var b=buffer.byteLength;try{return-1!==B.grow((a-b)/65536)?(buffer=B.buffer,!0):!1}catch(c){return!1}}var Z;ub=new Float32Array(256);for(var Jb=0;256>Jb;Jb++)Y[Jb]=ub.subarray(0,Jb+1);for(var Kb=0;32>Kb;Kb++)Db.push(Array(Kb));
var Rb=f.asm({},{R:function(){return devicePixelRatio||1},S:function(a,b,c){a=a?O(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},T:function(a,b,c){D.set(D.subarray(b,b+c),a)},Fa:function(a,b){function c(d){Lb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},P:function(a,b,c){a=Ya(a);if(!a)return-4;a.width=b;a.height=c;return 0},Oa:function(a,b,c,
d){ab(a,b,c,d,2,"keydown");return 0},Ma:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},Na:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},fa:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},Ra:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},Qa:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},Sa:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},Y:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},Ta:function(a,b,c,d){cb(a,b,c,d);return 0},Ia:function(a,b,c,d){db(a,b,c,d,
25,"touchcancel");return 0},Ja:function(a,b,c,d){db(a,b,c,d,23,"touchend");return 0},Ka:function(a,b,c,d){db(a,b,c,d,24,"touchmove");return 0},La:function(a,b,c,d){db(a,b,c,d,22,"touchstart");return 0},Ha:function(a,b,c,d){eb(a,b,c,d,31,"webglcontextlost");return 0},Ga:function(a,b,c,d){eb(a,b,c,d,32,"webglcontextrestored");return 0},Pa:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(fb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(fb(a,b,c,d,"mousewheel"),0):-1},H:function(a,
b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=Cb[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.xb=F[b+8];c.Ib=F[b+9];c.wb=F[b+10];c.Ab=F[b+11];c.Jb=F[b+12];c.Kb=F[b+13];a=Ya(a);!a||c.Ab?c=0:c=(a=1<c.xb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?vb(a,c):0;return c},ma:function(a,b){a=pb[a];b=C(b);0==b.indexOf("GL_")&&(b=b.substr(3));
"ANGLE_instanced_arrays"==b?xb(Z):"OES_vertex_array_object"==b?yb(Z):"WEBGL_draw_buffers"==b&&zb(Z);return!!a.qb.getExtension(b)},xa:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},oa:function(a){W=pb[a];f.Gb=Z=W&&W.qb;return!a||Z?0:-5},p:function(a){Z.activeTexture(a)},J:function(a,b){Z.attachShader(T[a],V[b])},d:function(a,b){35051==a?Z.ub=b:35052==a&&(Z.vb=b);Z.bindBuffer(a,kb[b])},g:function(a,b){Z.bindFramebuffer(a,lb[b])},b:function(a,b){Z.bindTexture(a,
nb[b])},Q:function(a){Z.bindVertexArray(ob[a])},B:function(a,b,c,d){Z.blendColor(a,b,c,d)},C:function(a,b){Z.blendEquationSeparate(a,b)},D:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},m:function(a,b,c,d,e,k,l,p,Q,r){Z.blitFramebuffer(a,b,c,d,e,k,l,p,Q,r)},L:function(a,b,c,d){W.kb?c?Z.bufferData(a,D,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?D.subarray(c,c+b):b,d)},K:function(a,b,c,d){W.kb?Z.bufferSubData(a,b,D,d,c):Z.bufferSubData(a,b,D.subarray(d,d+c))},G:function(a){Z.clear(a)},qa:function(a,
b,c,d){Z.clearColor(a,b,c,d)},pa:function(a){Z.clearDepth(a)},na:function(a){Z.clearStencil(a)},u:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},V:function(a){Z.compileShader(V[a])},wa:function(){var a=tb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},X:function(a){var b=tb(V);V[b]=Z.createShader(a);return b},A:function(a){Z.cullFace(a)},za:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=kb[d];e&&(Z.deleteBuffer(e),e.name=0,kb[d]=null,d==Ab&&(Ab=0),d==Bb&&(Bb=0),d==Z.ub&&(Z.ub=0),d==Z.vb&&
(Z.vb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=lb[d];e&&(Z.deleteFramebuffer(e),e.name=0,lb[d]=null)}},N:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,qb[a]=null):X(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=mb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,mb[d]=null)}},v:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},ya:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=nb[d];e&&(Z.deleteTexture(e),e.name=0,
nb[d]=null)}},Aa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Z.deleteVertexArray(ob[d]);ob[d]=null}},s:function(a){Z.depthFunc(a)},t:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},aa:function(a,b,c){Z.drawArrays(a,b,c)},o:function(a,b){for(var c=Db[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Z.drawBuffers(c)},ba:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ia:function(a){Z.enableVertexAttribArray(a)},z:function(a){Z.frontFace(a)},
M:function(a,b){Eb(a,b,"createBuffer",kb)},Ba:function(a,b){Eb(a,b,"createVertexArray",ob)},ta:function(a,b){return Z.getAttribLocation(T[a],C(b))},f:function(a,b){Fb(a,b)},ua:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,D,d,b):0;c&&(F[c>>2]=b)},I:function(a,b,c){if(c)if(a>=ib)X(1281);else{var d=qb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.sb;else if(35722==b){if(-1==d.ob){a=
T[a];var e=Z.getProgramParameter(a,35721);for(b=d.ob=0;b<e;++b)d.ob=Math.max(d.ob,Z.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.ob}else if(35381==b){if(-1==d.pb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.pb=0;b<e;++b)d.pb=Math.max(d.pb,Z.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.pb}else F[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},U:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,D,d,b):0;c&&(F[c>>2]=b)},w:function(a,b,
c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Da:function(a){if(rb[a])return rb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Gb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Gb(b);break;case 7938:b=Z.getParameter(Z.VERSION);
b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Gb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;default:return X(1280),0}return rb[a]=b},Ca:function(a,b){if(2>W.version)return X(1282),0;var c=sb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+
a})),c=c.map(function(a){return Gb(a)}),c=sb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},i:function(a,b){b=C(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=qb[a]&&qb[a].yb[b])&&0<=c&&c<a[0]?a[1]+c:-1},va:function(a){Z.linkProgram(T[a]);var b=T[a];a=qb[a]={yb:{},sb:0,ob:-1,pb:-1};for(var c=a.yb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var k=Z.getActiveUniform(b,e),l=k.name;a.sb=Math.max(a.sb,l.length+
1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var p=Z.getUniformLocation(b,l);if(p){var Q=tb(U);c[l]=[k.size,Q];U[Q]=p;for(var r=1;r<k.size;++r)p=Z.getUniformLocation(b,l+"["+r+"]"),Q=tb(U),U[Q]=p}}},y:function(a,b){Z.polygonOffset(a,b)},n:function(a){Z.readBuffer(a)},ra:function(a,b,c,d){Z.scissor(a,b,c,d)},W:function(a,b,c,d){for(var e="",k=0;k<b;++k){var l=d?F[d+4*k>>2]:-1;e+=C(F[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},$:function(a,b,c){Z.stencilFunc(a,b,c)},F:function(a,b,c,d){Z.stencilFuncSeparate(a,
b,c,d)},r:function(a){Z.stencilMask(a)},_:function(a,b,c){Z.stencilOp(a,b,c)},E:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},ha:function(a,b,c){if(W.kb)Z.uniform1fv(U[a],G,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},x:function(a,b){Z.uniform1i(U[a],b)},ga:function(a,b,c){if(W.kb)Z.uniform2fv(U[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>
2,c+8*b>>2);Z.uniform2fv(U[a],d)}},ea:function(a,b,c){if(W.kb)Z.uniform3fv(U[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},da:function(a,b,c){if(W.kb)Z.uniform4fv(U[a],G,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2],d[e+3]=G[c+(4*e+12)>>2];else d=G.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],
d)}},ca:function(a,b,c,d){if(W.kb)Z.uniformMatrix4fv(U[a],!!c,G,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],k=0;k<16*b;k+=16)e[k]=G[d+4*k>>2],e[k+1]=G[d+(4*k+4)>>2],e[k+2]=G[d+(4*k+8)>>2],e[k+3]=G[d+(4*k+12)>>2],e[k+4]=G[d+(4*k+16)>>2],e[k+5]=G[d+(4*k+20)>>2],e[k+6]=G[d+(4*k+24)>>2],e[k+7]=G[d+(4*k+28)>>2],e[k+8]=G[d+(4*k+32)>>2],e[k+9]=G[d+(4*k+36)>>2],e[k+10]=G[d+(4*k+40)>>2],e[k+11]=G[d+(4*k+44)>>2],e[k+12]=G[d+(4*k+48)>>2],e[k+13]=G[d+(4*k+52)>>2],e[k+14]=G[d+(4*k+56)>>2],e[k+15]=G[d+(4*
k+60)>>2];else e=G.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},la:function(a){Z.useProgram(T[a])},ja:function(a,b){Z.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,e,k){Z.vertexAttribPointer(a,b,c,!!d,e,k)},sa:function(a,b,c,d){Z.viewport(a,b,c,d)},l:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},k:function(){document.getElementById("_sokol_app_input_element").focus()},
Ea:function(){window.addEventListener("beforeunload",function(a){0!=Nb()&&(a.preventDefault(),a.returnValue=" ")})},j:function(){document.getElementById("_sokol_app_input_element").blur()},q:function(a){a|=0;var b=pa.length|0;var c=F[6840]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return y("OOM"),0,Hb(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(pa.length,16777216);b<a;)536870912>=b?b=qa(2*b):b=Math.min(qa((3*b+2147483648)/4),2147418112);Ib(b)?(sa(),a=!0):a=!1}a=!(a|0)}if(a)return Hb(),
-1;F[6840]=d|0;return c|0},Z:function(a,b,c,d,e,k){b=C(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var p=0<d;p&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!p){var b=new Uint8Array(l.response),c=b.length;c<=k?(D.set(b,e),Ob(a,d,c)):Pb(a)}else Qb(a,this.status)};l.send()}},buffer);f.asm=Rb;
var Ia=f.___wasm_call_ctors=function(){return f.asm.Ua.apply(null,arguments)},Mb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.Va.apply(null,arguments)},Nb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.Wa.apply(null,arguments)};f._main=function(){return f.asm.Xa.apply(null,arguments)};var P=f._malloc=function(){return f.asm.Ya.apply(null,arguments)};f._free=function(){return f.asm.Za.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm._a.apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return f.asm.$a.apply(null,arguments)};var Ob=f.__sfetch_emsc_get_response=function(){return f.asm.ab.apply(null,arguments)},Qb=f.__sfetch_emsc_failed_http_status=function(){return f.asm.bb.apply(null,arguments)},Pb=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.cb.apply(null,arguments)},oa=f.stackAlloc=function(){return f.asm.db.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.eb.apply(null,arguments)};
f.dynCall_v=function(){return f.asm.fb.apply(null,arguments)};var R=f.dynCall_iiii=function(){return f.asm.gb.apply(null,arguments)},Lb=f.dynCall_idi=function(){return f.asm.hb.apply(null,arguments)};f.asm=Rb;var Sb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Tb(){Sb||Ub();Sb||(J=Tb)};
function Ub(a){function b(){if(!Sb&&(Sb=!0,!ka)){ua(wa);ua(xa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Vb){var b=a;b=b||[];var d=b.length+1,e=oa(4*(d+1));F[e>>2]=na(aa);for(var k=1;k<d;k++)F[(e>>2)+k]=na(b[k-1]);F[(e>>2)+d]=0;try{var l=f._main(d,e);if(!f.noExitRuntime||0!==l){if(!f.noExitRuntime&&(ka=!0,f.onExit))f.onExit(l);q(l,new ia(l))}}catch(p){p instanceof ia||("SimulateInfiniteLoop"==p?f.noExitRuntime=!0:((b=p)&&"object"===typeof p&&p.stack&&(b=[p,p.stack]),z("exception thrown: "+
b),q(1,p)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),za.unshift(b);ua(za)}}a=a||m;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Aa();ua(va);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Ub;
function y(a){if(f.onAbort)f.onAbort(a);ja(a);z(a);ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=y;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Vb=!0;f.noInitialRun&&(Vb=!1);f.noExitRuntime=!0;Ub();
