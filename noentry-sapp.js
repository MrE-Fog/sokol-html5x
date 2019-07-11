var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in e)e.hasOwnProperty(h)&&(g[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var m=!1,q=!1,aa=!1,ba=!1,ca=!1;m="object"===typeof window;q="function"===typeof importScripts;aa=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!m&&!q;ca=!m&&!aa&&!q;var r="";
if(aa){r=__dirname+"/";var da,ea;e.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||t("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof
u))throw a;});process.on("unhandledRejection",t);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||t("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),
"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(m||q)q?r=self.location.href:document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var fa=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(h in g)g.hasOwnProperty(h)&&(e[h]=g[h]);g=void 0;
var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&v("no native wasm support detected");var x,ia=!1,ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function y(a,b){if(a){var c=z,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ja)a=ja.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|l:(f&7)<<18|k<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var F=a.charCodeAt(++k);l=65536+((l&1023)<<10)|F&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-f}
function ka(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function la(a){var b=ka(a)+1,c=ma(b);A(a,na,c,b);return c}function oa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,na,z,pa,B,C,D;
function qa(){e.HEAP8=na=new Int8Array(buffer);e.HEAP16=pa=new Int16Array(buffer);e.HEAP32=B=new Int32Array(buffer);e.HEAPU8=z=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=C=new Float32Array(buffer);e.HEAPF64=D=new Float64Array(buffer)}var E=e.TOTAL_MEMORY||33554432;5242880>E&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+E+"! (TOTAL_STACK=5242880)");e.wasmMemory?x=e.wasmMemory:x=new WebAssembly.Memory({initial:E/65536});
x&&(buffer=x.buffer);E=buffer.byteLength;qa();B[5868]=5266384;function ra(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Kb;"number"===typeof c?void 0===b.ub?e.dynCall_v(c):e.dynCall_vi(c,b.ub):c(void 0===b.ub?null:b.ub)}}}var sa=[],ta=[],ua=[],va=[],wa=[];function xa(){var a=e.preRun.shift();sa.unshift(a)}var G=0,za=null,H=null;e.preloadedImages={};e.preloadedAudios={};
function Aa(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var I="noentry-sapp.wasm";if(!Aa()){var Ba=I;I=e.locateFile?e.locateFile(Ba,r):r+Ba}function Ca(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(I);throw"both async and sync fetching of the wasm failed";}catch(a){t(a)}}
function Da(){return e.wasmBinary||!m&&!q||"function"!==typeof fetch?new Promise(function(a){a(Ca())}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ca()})}
function Ea(a){function b(a){e.asm=a.exports;G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==za&&(clearInterval(za),za=null),H&&(a=H,H=null,a()))}function c(a){b(a.instance)}function d(a){return Da().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){v("failed to asynchronously prepare wasm: "+a);t(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);if(e.instantiateWasm)try{return e.instantiateWasm(f,
b)}catch(k){return v("Module.instantiateWasm callback failed with error: "+k),!1}(function(){if(e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Aa()||"function"!==typeof fetch)return d(c);fetch(I,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,f).then(c,function(a){v("wasm streaming compile failed: "+a);v("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}
e.asm=function(a,b){b.memory=x;b.table=new WebAssembly.Table({initial:27,maximum:27,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ea(b)};var Fa=0,Ga=0,J=0,Ha=0,Ia=0,Ja=null,Ka=null,La=!1;function Ma(){for(var a=K.length-1;0<=a;--a)Na(a);K=[];Oa=[]}var Oa=[];function Pa(){if(Qa&&Ra.mb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Ob.apply(this,b.Hb)}}var Qa=0,Ra=null,K=[];
function Sa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Na(a){var b=K[a];b.target.removeEventListener(b.lb,b.Cb,b.ob);K.splice(a,1)}function L(a){function b(b){++Qa;Ra=a;Pa();a.qb(b);Pa();--Qa}if(a.pb)a.Cb=b,a.target.addEventListener(a.lb,b,a.ob),K.push(a),La||(va.push(Ma),La=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].lb==a.lb&&Na(c--)}
var Ta=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function M(a){try{if(!a)return window;"number"===typeof a&&(a=Ta[a]||y(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ua(){return na.length}
function Va(a){"number"===typeof a&&(a=y(a));return a&&"#canvas"!==a?"undefined"!==typeof Wa&&Xa[a]?Xa[a]:M(a):"undefined"!==typeof Wa&&Xa.canvas?Xa.canvas:e.canvas}
function Ya(a,b,c,d,f,k){Fa||(Fa=N(164));a={target:M(a),mb:Sa()?!1:!0,lb:k,pb:d,qb:function(a){a=a||window.event;var c=Fa;A(a.key?a.key:"",z,c+0,32);A(a.code?a.code:"",z,c+32,32);B[c+64>>2]=a.location;B[c+68>>2]=a.ctrlKey;B[c+72>>2]=a.shiftKey;B[c+76>>2]=a.altKey;B[c+80>>2]=a.metaKey;B[c+84>>2]=a.repeat;A(a.locale?a.locale:"",z,c+88,32);A(a.char?a.char:"",z,c+120,32);B[c+152>>2]=a.charCode;B[c+156>>2]=a.keyCode;B[c+160>>2]=a.which;O(d,f,c,b)&&a.preventDefault()},ob:c};L(a)}
function Za(a,b,c){D[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();B[a+8>>2]=b.screenX;B[a+12>>2]=b.screenY;B[a+16>>2]=b.clientX;B[a+20>>2]=b.clientY;B[a+24>>2]=b.ctrlKey;B[a+28>>2]=b.shiftKey;B[a+32>>2]=b.altKey;B[a+36>>2]=b.metaKey;pa[a+40>>1]=b.button;pa[a+42>>1]=b.buttons;B[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ja;B[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ka;if(e.canvas){var d=e.canvas.getBoundingClientRect();
B[a+60>>2]=b.clientX-d.left;B[a+64>>2]=b.clientY-d.top}else B[a+60>>2]=0,B[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},B[a+52>>2]=b.clientX-d.left,B[a+56>>2]=b.clientY-d.top):(B[a+52>>2]=0,B[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ja=b.screenX,Ka=b.screenY)}
function P(a,b,c,d,f,k){Ga||(Ga=N(72));a=M(a);c={target:a,mb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,lb:k,pb:d,qb:function(c){c=c||window.event;Za(Ga,c,a);O(d,f,Ga,b)&&c.preventDefault()},ob:c};Sa()&&"mousedown"==k&&(c.mb=!1);L(c)}
function $a(a,b,c,d){Ha||(Ha=N(36));a=M(a);L({target:a,mb:!1,lb:"resize",pb:d,qb:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ha;B[l>>2]=c.detail;B[l+4>>2]=document.body.clientWidth;
B[l+8>>2]=document.body.clientHeight;B[l+12>>2]=window.innerWidth;B[l+16>>2]=window.innerHeight;B[l+20>>2]=window.outerWidth;B[l+24>>2]=window.outerHeight;B[l+28>>2]=f[0];B[l+32>>2]=f[1];O(d,10,l,b)&&c.preventDefault()}},ob:c})}
function cb(a,b,c,d,f,k){Ia||(Ia=N(1684));a=M(a);L({target:a,mb:"touchstart"==k||"touchend"==k,lb:k,pb:d,qb:function(c){c=c||window.event;for(var k={},l=0;l<c.touches.length;++l){var p=c.touches[l];p.wb=!1;k[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],k[p.identifier]=p,p.wb=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],k[p.identifier].Fb=!0;var n=p=Ia;B[n+4>>2]=c.ctrlKey;B[n+8>>2]=c.shiftKey;B[n+12>>2]=c.altKey;B[n+16>>2]=c.metaKey;n+=20;var ya=e.canvas?
e.canvas.getBoundingClientRect():void 0,ab=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},bb=0;for(l in k){var w=k[l];B[n>>2]=w.identifier;B[n+4>>2]=w.screenX;B[n+8>>2]=w.screenY;B[n+12>>2]=w.clientX;B[n+16>>2]=w.clientY;B[n+20>>2]=w.pageX;B[n+24>>2]=w.pageY;B[n+28>>2]=w.wb;B[n+32>>2]=w.Fb;ya?(B[n+44>>2]=w.clientX-ya.left,B[n+48>>2]=w.clientY-ya.top):(B[n+44>>2]=0,B[n+48>>2]=0);B[n+36>>2]=w.clientX-ab.left;B[n+40>>2]=w.clientY-ab.top;n+=52;if(32<=++bb)break}B[p>>2]=bb;O(d,f,p,b)&&
c.preventDefault()},ob:c})}function db(a,b,c,d,f,k){a||(a=e.canvas);a={target:M(a),mb:!1,lb:k,pb:d,qb:function(a){a=a||window.event;O(d,f,0,b)&&a.preventDefault()},ob:c};L(a)}
function eb(a,b,c,d,f){function k(c){c=c||window.event;Za(J,c,a);D[J+72>>3]=c.wheelDeltaX||0;D[J+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);D[J+88>>3]=0;B[J+96>>2]=0;O(d,9,J,b)&&c.preventDefault()}function l(c){c=c||window.event;var f=J;Za(f,c,a);D[f+72>>3]=c.deltaX;D[f+80>>3]=c.deltaY;D[f+88>>3]=c.deltaZ;B[f+96>>2]=c.deltaMode;O(d,9,f,b)&&c.preventDefault()}J||(J=N(104));L({target:a,mb:!0,lb:f,pb:d,qb:"wheel"==f?l:k,ob:c})}
var fb=1,gb=0,hb=[],Q=[],ib=[],jb=[],kb=[],S=[],T=[],lb=[],mb={},U=null,Xa={},V={},nb={};function W(a){gb||(gb=a)}function X(a){for(var b=fb++,c=a.length;c<b;c++)a[c]=null;return b}var ob=null,Y=[0];function pb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=N(8),f={handle:d,attributes:b,version:b.Ab,tb:a};f.nb=2<=f.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Gb=f);mb[d]=f;("undefined"===typeof b.zb||b.zb)&&qb(f);return d}
function qb(a){a||(a=U);if(!a.Eb){a.Eb=!0;var b=a.tb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,k){c.drawElementsInstancedANGLE(a,b,d,f,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.Jb=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var Wa={},rb,sb,tb=["default","low-power","high-performance"],ub=[];function vb(a,b,c,d){for(var f=0;f<a;f++){var k=Z[c](),l=k&&X(d);k?(k.name=l,d[l]=k):W(1282);B[b+4*f>>2]=l}}
function wb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){W(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>U.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);v("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);return}B[b>>2]=c}else W(1281)}
function xb(a){var b=ka(a)+1,c=N(b);A(a,z,c,b);return c}function yb(a){a=oa(a);var b=buffer.byteLength;try{return-1!==x.grow((a-b)/65536)?(buffer=x.buffer,!0):!1}catch(c){return!1}}var Z;ob=new Float32Array(256);for(var zb=0;256>zb;zb++)Y[zb]=ob.subarray(0,zb+1);for(var Ab=0;32>Ab;Ab++)ub.push(Array(Ab));
var Db=e.asm({},{g:t,ha:function(a){e.___errno_location&&(B[e.___errno_location()>>2]=a);return a},Z:function(){return window.devicePixelRatio||1},Q:function(a,b,c){a=a?M(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),D[b>>3]=a.right-a.left,D[c>>3]=a.bottom-a.top):(D[b>>3]=a.clientWidth,D[c>>3]=a.clientHeight);return 0},Ra:Ua,Ja:function(a,b,c){z.set(z.subarray(b,b+c),a)},F:function(a,b){function c(d){Bb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
Aa:function(a){if(2147418112<a)return!1;for(var b=Math.max(Ua(),16777216);b<a;)536870912>=b?b=oa(2*b):b=Math.min(oa((3*b+2147483648)/4),2147418112);if(!yb(b))return!1;qa();return!0},z:function(a,b,c){a=Va(a);if(!a)return-4;a.width=b;a.height=c;return 0},v:function(a,b,c,d){Ya(a,b,c,d,2,"keydown");return 0},ga:function(a,b,c,d){Ya(a,b,c,d,1,"keypress");return 0},fa:function(a,b,c,d){Ya(a,b,c,d,3,"keyup");return 0},ea:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){P(a,b,c,
d,33,"mouseenter");return 0},ca:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ba:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},aa:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},Ta:function(a,b,c,d){$a(a,b,c,d);return 0},$:function(a,b,c,d){cb(a,b,c,d,25,"touchcancel");return 0},_:function(a,b,c,d){cb(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){cb(a,b,c,d,24,"touchmove");return 0},X:function(a,b,c,d){cb(a,b,c,d,22,"touchstart");return 0},W:function(a,b,c,d){db(a,b,c,d,
31,"webglcontextlost");return 0},V:function(a,b,c,d){db(a,b,c,d,32,"webglcontextrestored");return 0},U:function(a,b,c,d){a=M(a);return"undefined"!==typeof a.onwheel?(eb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(eb(a,b,c,d,"mousewheel"),0):-1},T:function(a,b){var c={};b>>=2;c.alpha=!!B[b];c.depth=!!B[b+1];c.stencil=!!B[b+2];c.antialias=!!B[b+3];c.premultipliedAlpha=!!B[b+4];c.preserveDrawingBuffer=!!B[b+5];c.powerPreference=tb[B[b+6]];c.failIfMajorPerformanceCaveat=!!B[b+7];c.Ab=B[b+
8];c.Lb=B[b+9];c.zb=B[b+10];c.Db=B[b+11];c.Mb=B[b+12];c.Nb=B[b+13];a=Va(a);!a||c.Db?c=0:c=(a=1<c.Ab?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?pb(a,c):0;return c},S:function(a,b){a=mb[a];b=y(b);0==b.indexOf("GL_")&&(b=b.substr(3));return!!a.tb.getExtension(b)},Sa:function(a){a>>=2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},R:function(a){U=mb[a];e.Ib=Z=U&&U.tb;return!a||Z?0:-5},n:function(a){Z.activeTexture(a)},P:function(a,
b){Z.attachShader(Q[a],T[b])},e:function(a,b){35051==a?Z.xb=b:35052==a&&(Z.yb=b);Z.bindBuffer(a,hb[b])},h:function(a,b){Z.bindFramebuffer(a,ib[b])},c:function(a,b){Z.bindTexture(a,kb[b])},O:function(a){Z.bindVertexArray(lb[a])},N:function(a,b,c,d){Z.blendColor(a,b,c,d)},M:function(a,b){Z.blendEquationSeparate(a,b)},L:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},m:function(a,b,c,d,f,k,l,F,R,p){Z.blitFramebuffer(a,b,c,d,f,k,l,F,R,p)},K:function(a,b,c,d){U.nb?c?Z.bufferData(a,z,d,c,b):Z.bufferData(a,
b,d):Z.bufferData(a,c?z.subarray(c,c+b):b,d)},J:function(a,b,c,d){U.nb?Z.bufferSubData(a,b,z,d,c):Z.bufferSubData(a,b,z.subarray(d,d+c))},Qa:function(a){Z.clear(a)},Pa:function(a,b,c,d){Z.clearColor(a,b,c,d)},Oa:function(a){Z.clearDepth(a)},Na:function(a){Z.clearStencil(a)},t:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Ma:function(a){Z.compileShader(T[a])},La:function(){var a=X(Q),b=Z.createProgram();b.name=a;Q[a]=b;return a},Ka:function(a){var b=X(T);T[b]=Z.createShader(a);return b},I:function(a){Z.cullFace(a)},
Ia:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],f=hb[d];f&&(Z.deleteBuffer(f),f.name=0,hb[d]=null,d==rb&&(rb=0),d==sb&&(sb=0),d==Z.xb&&(Z.xb=0),d==Z.yb&&(Z.yb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],f=ib[d];f&&(Z.deleteFramebuffer(f),f.name=0,ib[d]=null)}},H:function(a){if(a){var b=Q[a];b?(Z.deleteProgram(b),b.name=0,Q[a]=null,V[a]=null):W(1281)}},G:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],f=jb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,jb[d]=null)}},s:function(a){if(a){var b=
T[a];b?(Z.deleteShader(b),T[a]=null):W(1281)}},Ha:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],f=kb[d];f&&(Z.deleteTexture(f),f.name=0,kb[d]=null)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];Z.deleteVertexArray(lb[d]);lb[d]=null}},r:function(a){Z.depthFunc(a)},q:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},Fa:function(a,b,c){Z.drawArrays(a,b,c)},l:function(a,b){for(var c=ub[a],d=0;d<a;d++)c[d]=B[b+4*d>>2];Z.drawBuffers(c)},
Ea:function(a,b,c,d){Z.drawElements(a,b,c,d)},f:function(a){Z.enable(a)},Da:function(a){Z.enableVertexAttribArray(a)},E:function(a){Z.frontFace(a)},D:function(a,b){vb(a,b,"createBuffer",hb)},Ca:function(a,b){vb(a,b,"createVertexArray",lb)},Ba:function(a,b){return Z.getAttribLocation(Q[a],y(b))},p:function(a,b){wb(a,b)},za:function(a,b,c,d){a=Z.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,z,d,b),c&&(B[c>>2]=b)):c&&(B[c>>2]=0)},C:function(a,b,c){if(c)if(a>=fb)W(1281);else{var d=
V[a];if(d)if(35716==b)a=Z.getProgramInfoLog(Q[a]),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1;else if(35719==b)B[c>>2]=d.vb;else if(35722==b){if(-1==d.rb){a=Q[a];var f=Z.getProgramParameter(a,35721);for(b=d.rb=0;b<f;++b)d.rb=Math.max(d.rb,Z.getActiveAttrib(a,b).name.length+1)}B[c>>2]=d.rb}else if(35381==b){if(-1==d.sb)for(a=Q[a],f=Z.getProgramParameter(a,35382),b=d.sb=0;b<f;++b)d.sb=Math.max(d.sb,Z.getActiveUniformBlockName(a,b).length+1);B[c>>2]=d.sb}else B[c>>2]=Z.getProgramParameter(Q[a],
b);else W(1282)}else W(1281)},ya:function(a,b,c,d){a=Z.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,z,d,b),c&&(B[c>>2]=b)):c&&(B[c>>2]=0)},B:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(T[a]),B[c>>2]=null===a||0==a.length?0:a.length+1):B[c>>2]=Z.getShaderParameter(T[a],b):W(1281)},xa:function(a){if(nb[a])return nb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],
d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=xb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||W(1280);b=xb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=xb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=xb(b);break;default:return W(1280),
0}return nb[a]=b},i:function(a,b){b=y(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=V[a]&&V[a].Bb[b])&&0<=c&&c<a[0]?a[1]+c:-1},wa:function(a){Z.linkProgram(Q[a]);var b=Q[a];a=V[a]={Bb:{},vb:0,rb:-1,sb:-1};for(var c=a.Bb,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var k=Z.getActiveUniform(b,f),l=k.name;a.vb=Math.max(a.vb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var F=Z.getUniformLocation(b,l);if(F){var R=
X(S);c[l]=[k.size,R];S[R]=F;for(var p=1;p<k.size;++p)F=Z.getUniformLocation(b,l+"["+p+"]"),R=X(S),S[R]=F}}},A:function(a,b){Z.polygonOffset(a,b)},k:function(a){Z.readBuffer(a)},va:function(a,b,c,d){Z.scissor(a,b,c,d)},ua:function(a,b,c,d){for(var f="",k=0;k<b;++k){var l=d?B[d+4*k>>2]:-1;f+=y(B[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(T[a],f)},ta:function(a,b,c){Z.stencilFunc(a,b,c)},y:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},o:function(a){Z.stencilMask(a)},sa:function(a,b,c){Z.stencilOp(a,
b,c)},x:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},ra:function(a,b,c){if(U.nb)Z.uniform1fv(S[a],C,c>>2,b);else{if(256>=b)for(var d=Y[b-1],f=0;f<b;++f)d[f]=C[c+4*f>>2];else d=C.subarray(c>>2,c+4*b>>2);Z.uniform1fv(S[a],d)}},w:function(a,b){Z.uniform1i(S[a],b)},qa:function(a,b,c){if(U.nb)Z.uniform2fv(S[a],C,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],f=0;f<2*b;f+=2)d[f]=C[c+4*f>>2],d[f+1]=C[c+(4*f+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);Z.uniform2fv(S[a],d)}},pa:function(a,b,c){if(U.nb)Z.uniform3fv(S[a],
C,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],f=0;f<3*b;f+=3)d[f]=C[c+4*f>>2],d[f+1]=C[c+(4*f+4)>>2],d[f+2]=C[c+(4*f+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);Z.uniform3fv(S[a],d)}},oa:function(a,b,c){if(U.nb)Z.uniform4fv(S[a],C,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],f=0;f<4*b;f+=4)d[f]=C[c+4*f>>2],d[f+1]=C[c+(4*f+4)>>2],d[f+2]=C[c+(4*f+8)>>2],d[f+3]=C[c+(4*f+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);Z.uniform4fv(S[a],d)}},na:function(a,b,c,d){if(U.nb)Z.uniformMatrix4fv(S[a],!!c,C,d>>2,16*
b);else{if(256>=16*b)for(var f=Y[16*b-1],k=0;k<16*b;k+=16)f[k]=C[d+4*k>>2],f[k+1]=C[d+(4*k+4)>>2],f[k+2]=C[d+(4*k+8)>>2],f[k+3]=C[d+(4*k+12)>>2],f[k+4]=C[d+(4*k+16)>>2],f[k+5]=C[d+(4*k+20)>>2],f[k+6]=C[d+(4*k+24)>>2],f[k+7]=C[d+(4*k+28)>>2],f[k+8]=C[d+(4*k+32)>>2],f[k+9]=C[d+(4*k+36)>>2],f[k+10]=C[d+(4*k+40)>>2],f[k+11]=C[d+(4*k+44)>>2],f[k+12]=C[d+(4*k+48)>>2],f[k+13]=C[d+(4*k+52)>>2],f[k+14]=C[d+(4*k+56)>>2],f[k+15]=C[d+(4*k+60)>>2];else f=C.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(S[a],!!c,
f)}},ma:function(a){Z.useProgram(Q[a])},la:function(a,b){Z.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,f,k){Z.vertexAttribPointer(a,b,c,!!d,f,k)},ja:function(a,b,c,d){Z.viewport(a,b,c,d)},u:function(){window.addEventListener("beforeunload",function(a){0!=Cb()&&(a.preventDefault(),a.returnValue=" ")})},ia:function(){t("OOM")},a:23472},buffer);e.asm=Db;e.___em_js__sapp_js_create_textfield=function(){return e.asm.Ua.apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return e.asm.Va.apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return e.asm.Wa.apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return e.asm.Xa.apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return e.asm.Ya.apply(null,arguments)};e.___em_js__saudio_js_init=function(){return e.asm.Za.apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return e.asm._a.apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return e.asm.$a.apply(null,arguments)};e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.ab.apply(null,arguments)};var Cb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.bb.apply(null,arguments)};e.__saudio_emsc_pull=function(){return e.asm.cb.apply(null,arguments)};e._free=function(){return e.asm.db.apply(null,arguments)};e._main=function(){return e.asm.eb.apply(null,arguments)};
var N=e._malloc=function(){return e.asm.fb.apply(null,arguments)},ma=e.stackAlloc=function(){return e.asm.kb.apply(null,arguments)},Bb=e.dynCall_idi=function(){return e.asm.gb.apply(null,arguments)},O=e.dynCall_iiii=function(){return e.asm.hb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.ib.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.jb.apply(null,arguments)};e.asm=Db;
function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}u.prototype=Error();u.prototype.constructor=u;H=function Eb(){e.calledRun||Fb();e.calledRun||(H=Eb)};
e.callMain=function(a){a=a||[];var b=a.length+1,c=ma(4*(b+1));B[c>>2]=la(e.thisProgram);for(var d=1;d<b;d++)B[(c>>2)+d]=la(a[d-1]);B[(c>>2)+b]=0;try{var f=e._main(b,c,0);if(!e.noExitRuntime||0!==f){if(!e.noExitRuntime&&(ia=!0,e.onExit))e.onExit(f);e.quit(f,new u(f))}}catch(k){k instanceof u||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),v("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Fb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ia)){ra(ta);ra(ua);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Gb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();wa.unshift(b)}ra(wa)}}a=a||e.arguments;if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)xa();ra(sa);0<G||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Fb;function t(a){if(e.onAbort)e.onAbort(a);void 0!==a?(fa(a),v(a),a='"'+a+'"'):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=t;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Gb=!0;e.noInitialRun&&(Gb=!1);e.noExitRuntime=!0;Fb();
