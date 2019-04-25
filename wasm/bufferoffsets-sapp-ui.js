var aa,f;var h;h||(h=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in h)h.hasOwnProperty(m)&&(k[m]=h[m]);h.arguments=[];h.thisProgram="./this.program";h.quit=function(a,b){throw b;};h.preRun=[];h.postRun=[];var t=!1,u=!1,ba=!1,ca=!1;t="object"===typeof window;u="function"===typeof importScripts;ba="object"===typeof process&&"function"===typeof require&&!t&&!u;ca=!t&&!ba&&!u;var v="";
if(ba){v=__dirname+"/";var da,ea;h.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};h.readBinary=function(a){a=h.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a};1<process.argv.length&&(h.thisProgram=process.argv[1].replace(/\\/g,"/"));h.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=h);process.on("uncaughtException",function(a){if(!(a instanceof
x))throw a;});process.on("unhandledRejection",w);h.quit=function(a){process.exit(a)};h.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(h.read=function(a){return read(a)}),h.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||w("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?h.arguments=scriptArgs:"undefined"!=typeof arguments&&(h.arguments=arguments),
"function"===typeof quit&&(h.quit=function(a){quit(a)});else if(t||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",h.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(h.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),h.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},h.setWindowTitle=function(a){document.title=a};var fa=h.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=h.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(m in k)k.hasOwnProperty(m)&&(h[m]=k[m]);k=void 0;
var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&y("no native wasm support detected");var ia,ja=!1,ka="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function z(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ka)a=ka.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var g=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var n=a.charCodeAt(++g);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ma(a){var b=la(a)+1,c=na(b);C(a,D,c,b);return c}var buffer,D,B,E,oa,F,pa,G,H,qa=h.TOTAL_MEMORY||134217728;5242880>qa&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+qa+"! (TOTAL_STACK=5242880)");
h.buffer?buffer=h.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(ia=new WebAssembly.Memory({initial:qa/65536,maximum:qa/65536}),buffer=ia.buffer):buffer=new ArrayBuffer(qa);h.HEAP8=D=new Int8Array(buffer);h.HEAP16=E=new Int16Array(buffer);h.HEAP32=F=new Int32Array(buffer);h.HEAPU8=B=new Uint8Array(buffer);h.HEAPU16=oa=new Uint16Array(buffer);h.HEAPU32=pa=new Uint32Array(buffer);h.HEAPF32=G=new Float32Array(buffer);h.HEAPF64=H=new Float64Array(buffer);F[321240]=6527872;
function ra(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.$b;"number"===typeof c?void 0===b.Ib?h.dynCall_v(c):h.dynCall_vi(c,b.Ib):c(void 0===b.Ib?null:b.Ib)}}}var sa=[],ta=[],ua=[],va=[],wa=[],xa=!1;function ya(){var a=h.preRun.shift();sa.unshift(a)}var za=Math.abs,Aa=Math.ceil,Ba=Math.floor,Ca=Math.min,I=0,Da=null,Ea=null;h.preloadedImages={};h.preloadedAudios={};
function Fa(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="bufferoffsets-sapp-ui.wasm";if(!Fa()){var Ha=J;J=h.locateFile?h.locateFile(Ha,v):v+Ha}function Ia(){try{if(h.wasmBinary)return new Uint8Array(h.wasmBinary);if(h.readBinary)return h.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){w(a)}}
function Ja(){return h.wasmBinary||!t&&!u||"function"!==typeof fetch?new Promise(function(a){a(Ia())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ia()})}
function Ka(a){function b(a){h.asm=a.exports;I--;h.monitorRunDependencies&&h.monitorRunDependencies(I);0==I&&(null!==Da&&(clearInterval(Da),Da=null),Ea&&(a=Ea,Ea=null,a()))}function c(a){b(a.instance)}function d(a){Ja().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);w(a)})}var e={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};I++;h.monitorRunDependencies&&h.monitorRunDependencies(I);if(h.instantiateWasm)try{return h.instantiateWasm(e,
b)}catch(g){return y("Module.instantiateWasm callback failed with error: "+g),!1}h.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(J,{credentials:"same-origin"}),e).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");d(c)});return{}}
h.asm=function(a,b){b.memory=ia;b.table=new WebAssembly.Table({initial:120,maximum:120,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ka(b)};var K=0;function L(){K+=4;return F[K-4>>2]}function M(){var a=(void 0).ac(L());if(!a)throw new (void 0).Vb(9);return a}function La(a){h.___errno_location&&(F[h.___errno_location()>>2]=a);return a}var Ma=0,Na=0,N=0,Oa=0,Pa=0,Qa=null,Ra=null,Sa=!1;function Ta(){for(var a=O.length-1;0<=a;--a)Ua(a);O=[];Va=[]}var Va=[];
function Wa(){if(Xa&&Ya.Ab)for(var a=0;a<Va.length;++a){var b=Va[a];Va.splice(a,1);--a;b.hc.apply(this,b.Xb)}}var Xa=0,Ya=null,O=[];function Za(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ua(a){var b=O[a];b.target.removeEventListener(b.yb,b.Qb,b.Bb);O.splice(a,1)}
function P(a){function b(b){++Xa;Ya=a;Wa();a.Eb(b);Wa();--Xa}if(a.Cb)a.Qb=b,a.target.addEventListener(a.yb,b,a.Bb),O.push(a),Sa||(va.push(Ta),Sa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].yb==a.yb&&Ua(c--)}var $a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=$a[a]||z(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?h.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function ab(){w("OOM")}function bb(a){"number"===typeof a&&(a=z(a));return a&&"#canvas"!==a?"undefined"!==typeof cb&&db[a]?db[a]:Q(a):"undefined"!==typeof cb&&db.canvas?db.canvas:h.canvas}
function eb(a,b,c,d,e,g){Ma||(Ma=R(164));a={target:Q(a),Ab:Za()?!1:!0,yb:g,Cb:d,Eb:function(a){a=a||window.event;var c=Ma;C(a.key?a.key:"",B,c+0,32);C(a.code?a.code:"",B,c+32,32);F[c+64>>2]=a.location;F[c+68>>2]=a.ctrlKey;F[c+72>>2]=a.shiftKey;F[c+76>>2]=a.altKey;F[c+80>>2]=a.metaKey;F[c+84>>2]=a.repeat;C(a.locale?a.locale:"",B,c+88,32);C(a.char?a.char:"",B,c+120,32);F[c+152>>2]=a.charCode;F[c+156>>2]=a.keyCode;F[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},Bb:c};P(a)}
function fb(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();F[a+8>>2]=b.screenX;F[a+12>>2]=b.screenY;F[a+16>>2]=b.clientX;F[a+20>>2]=b.clientY;F[a+24>>2]=b.ctrlKey;F[a+28>>2]=b.shiftKey;F[a+32>>2]=b.altKey;F[a+36>>2]=b.metaKey;E[a+40>>1]=b.button;E[a+42>>1]=b.buttons;F[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Qa;F[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ra;if(h.canvas){var d=h.canvas.getBoundingClientRect();
F[a+60>>2]=b.clientX-d.left;F[a+64>>2]=b.clientY-d.top}else F[a+60>>2]=0,F[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},F[a+52>>2]=b.clientX-d.left,F[a+56>>2]=b.clientY-d.top):(F[a+52>>2]=0,F[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Qa=b.screenX,Ra=b.screenY)}
function gb(a,b,c,d,e,g){Na||(Na=R(72));a=Q(a);c={target:a,Ab:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,yb:g,Cb:d,Eb:function(c){c=c||window.event;fb(Na,c,a);S(d,e,Na,b)&&c.preventDefault()},Bb:c};Za()&&"mousedown"==g&&(c.Ab=!1);P(c)}
function hb(a,b,c,d){Oa||(Oa=R(36));a=Q(a);P({target:a,Ab:!1,yb:"resize",Cb:d,Eb:function(c){c=c||window.event;if(c.target==a){var e=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Oa;F[l>>2]=c.detail;F[l+4>>2]=document.body.clientWidth;
F[l+8>>2]=document.body.clientHeight;F[l+12>>2]=window.innerWidth;F[l+16>>2]=window.innerHeight;F[l+20>>2]=window.outerWidth;F[l+24>>2]=window.outerHeight;F[l+28>>2]=e[0];F[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},Bb:c})}
function kb(a,b,c,d,e,g){Pa||(Pa=R(1684));a=Q(a);P({target:a,Ab:"touchstart"==g||"touchend"==g,yb:g,Cb:d,Eb:function(c){c=c||window.event;for(var g={},l=0;l<c.touches.length;++l){var q=c.touches[l];g[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],g[q.identifier]=q,q.Pb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],g[q.identifier].Ub=!0;var r=q=Pa;F[r+4>>2]=c.ctrlKey;F[r+8>>2]=c.shiftKey;F[r+12>>2]=c.altKey;F[r+16>>2]=c.metaKey;r+=20;var Ga=h.canvas?h.canvas.getBoundingClientRect():
void 0,ib=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},jb=0;for(l in g){var A=g[l];F[r>>2]=A.identifier;F[r+4>>2]=A.screenX;F[r+8>>2]=A.screenY;F[r+12>>2]=A.clientX;F[r+16>>2]=A.clientY;F[r+20>>2]=A.pageX;F[r+24>>2]=A.pageY;F[r+28>>2]=A.Pb;F[r+32>>2]=A.Ub;Ga?(F[r+44>>2]=A.clientX-Ga.left,F[r+48>>2]=A.clientY-Ga.top):(F[r+44>>2]=0,F[r+48>>2]=0);F[r+36>>2]=A.clientX-ib.left;F[r+40>>2]=A.clientY-ib.top;r+=52;if(32<=++jb)break}F[q>>2]=jb;S(d,e,q,b)&&c.preventDefault()},Bb:c})}
function lb(a,b,c,d,e,g){a||(a=h.canvas);a={target:Q(a),Ab:!1,yb:g,Cb:d,Eb:function(a){a=a||window.event;S(d,e,0,b)&&a.preventDefault()},Bb:c};P(a)}
function mb(a,b,c,d,e){function g(c){c=c||window.event;fb(N,c,a);H[N+72>>3]=c.wheelDeltaX||0;H[N+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);H[N+88>>3]=0;F[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||window.event;var e=N;fb(e,c,a);H[e+72>>3]=c.deltaX;H[e+80>>3]=c.deltaY;H[e+88>>3]=c.deltaZ;F[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,Ab:!0,yb:e,Cb:d,Eb:"wheel"==e?l:g,Bb:c})}
var nb=1,ob=0,pb=[],T=[],qb=[],rb=[],sb=[],U=[],V=[],tb=[],ub={},W=null,db={},vb={},wb={};function X(a){ob||(ob=a)}function xb(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}var yb=null,Y=[0];function zb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.Nb,Kb:a};e.zb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Wb=e);ub[d]=e;("undefined"===typeof b.Mb||b.Mb)&&Ab(e);return d}
function Ab(a){a||(a=W);if(!a.Tb){a.Tb=!0;var b=a.Kb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,e){c.drawArraysInstancedANGLE(a,b,d,e)},b.drawElementsInstanced=function(a,b,d,e,g){c.drawElementsInstancedANGLE(a,b,d,e,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var e=b.getExtension("WEBGL_draw_buffers");e&&(b.drawBuffers=function(a,b){e.drawBuffersWEBGL(a,b)})}b.Zb=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}var cb={},Bb,Cb,Db=["default","low-power","high-performance"],Eb=[];function Fb(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&xb(d);g?(g.name=l,d[l]=g):X(1282);F[b+4*e>>2]=l}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);y("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);return}F[b>>2]=c}else X(1281)}
function Hb(a){var b=la(a)+1,c=R(b);C(a,B,c,b);return c}var Ib={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Jb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Kb(a,b,c,d,e){if(b=Ib[b]*Jb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return D.subarray(e,c);case 5121:return B.subarray(e,c);case 5122:return E.subarray(e>>1,c>>1);case 5124:return F.subarray(e>>2,c>>2);case 5126:return G.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return pa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return oa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Lb(a){switch(a){case 5120:return D;case 5121:return B;case 5122:return E;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return oa;case 5124:return F;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return pa;case 5126:return G}}var Mb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1},Z;yb=new Float32Array(256);for(var Nb=0;256>Nb;Nb++)Y[Nb]=yb.subarray(0,Nb+1);for(var Ob=0;32>Ob;Ob++)Eb.push(Array(Ob));
var Rb=h.asm({},{c:w,C:function(){},_:La,Ka:function(a,b){K=b;try{var c=M(),d=L(),e=L(),g=L(),l=L();if(!(-1==d&&0>e||0==d&&0<=e))return-75;(void 0).cc(c,e,l);aa=[c.position>>>0,(f=c.position,1<=+za(f)?0<f?(Ca(+Ba(f/4294967296),4294967295)|0)>>>0:~~+Aa((f-+(~~f>>>0))/4294967296)>>>0:0)];F[g>>2]=aa[0];F[g+4>>2]=aa[1];c.Sb&&0===e&&0===l&&(c.Sb=null);return 0}catch(n){return w(n),-n.Db}},Aa:function(a,b){K=b;try{var c=M(),d=L();a:{var e=L();for(b=a=0;b<e;b++){var g=F[d+(8*b+4)>>2],l=(void 0).read(c,D,
F[d+8*b>>2],g,void 0);if(0>l){var n=-1;break a}a+=l;if(l<g)break}n=a}return n}catch(p){return w(p),-p.Db}},S:function(a,b){K=b;try{var c=M(),d=L();a:{var e=L();for(b=a=0;b<e;b++){var g=(void 0).write(c,D,F[d+8*b>>2],F[d+(8*b+4)>>2],void 0);if(0>g){var l=-1;break a}a+=g}l=a}return l}catch(n){return w(n),-n.Db}},n:function(a,b){K=b;try{var c=M();switch(L()){case 0:var d=L();return 0>d?-22:(void 0).open(c.path,c.flags,0,d).fd;case 1:case 2:return 0;case 3:return c.flags;case 4:return d=L(),c.flags|=
d,0;case 12:return d=L(),E[d+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-22;case 9:return La(22),-1;default:return-22}}catch(e){return w(e),-e.Db}},ra:function(a,b){K=b;try{var c=z(L()),d=L(),e=L();return(void 0).open(c,d,e).fd}catch(g){return w(g),-g.Db}},L:function(a,b){K=b;try{var c=M(),d=L();switch(d){case 21509:case 21505:return c.tty?0:-25;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?0:-25;case 21519:if(!c.tty)return-25;var e=L();return F[e>>2]=
0;case 21520:return c.tty?-22:-25;case 21531:return e=L(),(void 0).bc(c,d,e);case 21523:return c.tty?0:-25;case 21524:return c.tty?0:-25;default:w("bad ioctl syscall "+d)}}catch(g){return w(g),-g.Db}},H:function(a,b){K=b;try{var c=M();(void 0).close(c);return 0}catch(d){return w(d),-d.Db}},B:function(){},r:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},
p:function(){document.getElementById("_sokol_app_input_element").blur()},aa:function(){return window.devicePixelRatio||1},$:function(a,b,c){a=a?Q(a):h.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},Xa:function(){return D.length},Wa:function(a,b,c){B.set(B.subarray(b,b+c),a)},Va:function(a,b){function c(d){Qb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
Ua:function(a){ab(a)},Z:function(a,b,c){a=bb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ta:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},Sa:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},Ra:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},Qa:function(a,b,c,d){gb(a,b,c,d,5,"mousedown");return 0},Pa:function(a,b,c,d){gb(a,b,c,d,33,"mouseenter");return 0},Oa:function(a,b,c,d){gb(a,b,c,d,34,"mouseleave");return 0},Na:function(a,b,c,d){gb(a,b,c,d,8,"mousemove");return 0},Ma:function(a,
b,c,d){gb(a,b,c,d,6,"mouseup");return 0},La:function(a,b,c,d){hb(a,b,c,d);return 0},Ja:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},Ia:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},Ha:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},Ga:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},Fa:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},Ea:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},Da:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?
(mb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(mb(a,b,c,d,"mousewheel"),0):-1},Y:function(a,b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=Db[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.Nb=F[b+8];c.dc=F[b+9];c.Mb=F[b+10];c.Rb=F[b+11];c.ec=F[b+12];c.fc=F[b+13];a=bb(a);!a||c.Rb?c=0:c=(a=1<c.Nb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",
c))&&zb(a,c);return c},Ca:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ba:function(a){W=ub[a];h.Yb=Z=W&&W.Kb;return!a||Z?0:-5},A:function(a){Z.activeTexture(a)},X:function(a,b){Z.attachShader(T[a],V[b])},f:function(a,b){35051==a?Z.Lb=b:35052==a&&(Z.Hb=b);Z.bindBuffer(a,pb[b])},h:function(a,b){Z.bindFramebuffer(a,qb[b])},z:function(a,b){Z.bindTexture(a,sb[b])},W:function(a){Z.bindVertexArray(tb[a])},V:function(a,b,c,d){Z.blendColor(a,b,c,d)},U:function(a,
b){Z.blendEquationSeparate(a,b)},T:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},o:function(a,b,c,d,e,g,l,n,p,q){Z.blitFramebuffer(a,b,c,d,e,g,l,n,p,q)},R:function(a,b,c,d){W.zb?c?Z.bufferData(a,B,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?B.subarray(c,c+b):b,d)},y:function(a,b,c,d){W.zb?Z.bufferSubData(a,b,B,d,c):Z.bufferSubData(a,b,B.subarray(d,d+c))},za:function(a){Z.clear(a)},ya:function(a,b,c,d){Z.clearColor(a,b,c,d)},xa:function(a){Z.clearDepth(a)},wa:function(a){Z.clearStencil(a)},x:function(a,
b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},va:function(a){Z.compileShader(V[a])},ua:function(){var a=xb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},ta:function(a){var b=xb(V);V[b]=Z.createShader(a);return b},Q:function(a){Z.cullFace(a)},P:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=pb[d];e&&(Z.deleteBuffer(e),e.name=0,pb[d]=null,d==Bb&&(Bb=0),d==Cb&&(Cb=0),d==Z.Lb&&(Z.Lb=0),d==Z.Hb&&(Z.Hb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=qb[d];e&&(Z.deleteFramebuffer(e),e.name=
0,qb[d]=null)}},w:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,vb[a]=null):X(1281)}},m:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=rb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,rb[d]=null)}},v:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=sb[d];e&&(Z.deleteTexture(e),e.name=0,sb[d]=null)}},sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Z.deleteVertexArray(tb[d]);tb[d]=null}},
u:function(a){Z.depthFunc(a)},t:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},qa:function(a,b,c){Z.drawArrays(a,b,c)},l:function(a,b){for(var c=Eb[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Z.drawBuffers(c)},pa:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},oa:function(a){Z.enableVertexAttribArray(a)},N:function(a){Z.frontFace(a)},M:function(a,b){Fb(a,b,"createBuffer",pb)},na:function(a,b){Fb(a,b,"createTexture",sb)},ma:function(a,
b){Fb(a,b,"createVertexArray",tb)},la:function(a,b){return Z.getAttribLocation(T[a],z(b))},K:function(a,b){Gb(a,b)},ka:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=C(a,B,d,b),c&&(F[c>>2]=b)):c&&(F[c>>2]=0)},J:function(a,b,c){if(c)if(a>=nb)X(1281);else{var d=vb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Jb;else if(35722==b){if(-1==d.Fb){a=T[a];var e=Z.getProgramParameter(a,
35721);for(b=d.Fb=0;b<e;++b)d.Fb=Math.max(d.Fb,Z.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Fb}else if(35381==b){if(-1==d.Gb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Gb=0;b<e;++b)d.Gb=Math.max(d.Gb,Z.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Gb}else F[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},ja:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&d?(b=C(a,B,d,b),c&&(F[c>>2]=b)):c&&(F[c>>2]=0)},I:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),
null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},ia:function(a){if(wb[a])return wb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Hb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Hb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+
b+")":"OpenGL ES 2.0 ("+b+")";b=Hb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Hb(b);break;default:return X(1280),0}return wb[a]=b},i:function(a,b){b=z(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=vb[a]&&vb[a].Ob[b])&&0<=c&&c<a[0]?a[1]+c:-1},ha:function(a){Z.linkProgram(T[a]);
var b=T[a];a=vb[a]={Ob:{},Jb:0,Fb:-1,Gb:-1};for(var c=a.Ob,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Jb=Math.max(a.Jb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var p=xb(U);c[l]=[g.size,p];U[p]=n;for(var q=1;q<g.size;++q)n=Z.getUniformLocation(b,l+"["+q+"]"),p=xb(U),U[p]=n}}},G:function(a,b){Z.polygonOffset(a,b)},k:function(a){Z.readBuffer(a)},F:function(a,b,c,d){Z.scissor(a,b,c,d)},ga:function(a,
b,c,d){for(var e="",g=0;g<b;++g){var l=d?F[d+4*g>>2]:-1;e+=z(F[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},fa:function(a,b,c){Z.stencilFunc(a,b,c)},E:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},s:function(a){Z.stencilMask(a)},ea:function(a,b,c){Z.stencilOp(a,b,c)},D:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},da:function(a,b,c,d,e,g,l,n,p){W.zb?Z.Hb?Z.texImage2D(a,b,c,d,e,g,l,n,p):0!=p?Z.texImage2D(a,b,c,d,e,g,l,n,Lb(n),p>>(Mb[n]|0)):Z.texImage2D(a,b,c,d,e,g,l,n,null):Z.texImage2D(a,
b,c,d,e,g,l,n,p?Kb(n,l,d,e,p):null)},gb:function(a,b,c,d,e,g,l,n,p,q){Z.Hb?Z.texImage3D(a,b,c,d,e,g,l,n,p,q):0!=q?Z.texImage3D(a,b,c,d,e,g,l,n,p,Lb(p),q>>(Mb[p]|0)):Z.texImage3D(a,b,c,d,e,g,l,n,p,null)},ca:function(a,b,c){Z.texParameterf(a,b,c)},g:function(a,b,c){Z.texParameteri(a,b,c)},fb:function(a,b,c){if(W.zb)Z.uniform1fv(U[a],G,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},ba:function(a,b){Z.uniform1i(U[a],b)},eb:function(a,
b,c){if(W.zb)Z.uniform2fv(U[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},db:function(a,b,c){if(W.zb)Z.uniform3fv(U[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},cb:function(a,b,c){if(W.zb)Z.uniform4fv(U[a],G,c>>2,4*b);else{if(256>=4*b)for(var d=
Y[4*b-1],e=0;e<4*b;e+=4)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2],d[e+3]=G[c+(4*e+12)>>2];else d=G.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},bb:function(a,b,c,d){if(W.zb)Z.uniformMatrix4fv(U[a],!!c,G,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],g=0;g<16*b;g+=16)e[g]=G[d+4*g>>2],e[g+1]=G[d+(4*g+4)>>2],e[g+2]=G[d+(4*g+8)>>2],e[g+3]=G[d+(4*g+12)>>2],e[g+4]=G[d+(4*g+16)>>2],e[g+5]=G[d+(4*g+20)>>2],e[g+6]=G[d+(4*g+24)>>2],e[g+7]=G[d+(4*g+28)>>2],e[g+8]=G[d+(4*g+32)>>2],e[g+
9]=G[d+(4*g+36)>>2],e[g+10]=G[d+(4*g+40)>>2],e[g+11]=G[d+(4*g+44)>>2],e[g+12]=G[d+(4*g+48)>>2],e[g+13]=G[d+(4*g+52)>>2],e[g+14]=G[d+(4*g+56)>>2],e[g+15]=G[d+(4*g+60)>>2];else e=G.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},ab:function(a){Z.useProgram(T[a])},$a:function(a,b){Z.vertexAttribDivisor(a,b)},_a:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},Za:function(a,b,c,d){Z.viewport(a,b,c,d)},Ya:ab,a:1284960},buffer);h.asm=Rb;
h.___em_js___sapp_js_create_textfield=function(){return h.asm.hb.apply(null,arguments)};h.___em_js___sapp_js_focus_textfield=function(){return h.asm.ib.apply(null,arguments)};h.___em_js___sapp_js_unfocus_textfield=function(){return h.asm.jb.apply(null,arguments)};h.___em_js___saudio_js_buffer_frames=function(){return h.asm.kb.apply(null,arguments)};h.___em_js___saudio_js_init=function(){return h.asm.lb.apply(null,arguments)};
h.___em_js___saudio_js_sample_rate=function(){return h.asm.mb.apply(null,arguments)};h.___em_js___stm_js_perfnow=function(){return h.asm.nb.apply(null,arguments)};var Pb=h.__sapp_emsc_notify_keyboard_hidden=function(){return h.asm.ob.apply(null,arguments)};h.__saudio_emsc_pull=function(){return h.asm.pb.apply(null,arguments)};h._free=function(){return h.asm.qb.apply(null,arguments)};h._main=function(){return h.asm.rb.apply(null,arguments)};
var R=h._malloc=function(){return h.asm.sb.apply(null,arguments)},na=h.stackAlloc=function(){return h.asm.xb.apply(null,arguments)},Qb=h.dynCall_idi=function(){return h.asm.tb.apply(null,arguments)},S=h.dynCall_iiii=function(){return h.asm.ub.apply(null,arguments)};h.dynCall_v=function(){return h.asm.vb.apply(null,arguments)};h.dynCall_vi=function(){return h.asm.wb.apply(null,arguments)};h.asm=Rb;
function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}x.prototype=Error();x.prototype.constructor=x;Ea=function Sb(){h.calledRun||Tb();h.calledRun||(Ea=Sb)};
h.callMain=function(a){a=a||[];xa||(xa=!0,ra(ta));var b=a.length+1,c=na(4*(b+1));F[c>>2]=ma(h.thisProgram);for(var d=1;d<b;d++)F[(c>>2)+d]=ma(a[d-1]);F[(c>>2)+b]=0;try{var e=h._main(b,c,0);if(!h.noExitRuntime||0!==e){if(!h.noExitRuntime&&(ja=!0,h.onExit))h.onExit(e);h.quit(e,new x(e))}}catch(g){g instanceof x||("SimulateInfiniteLoop"==g?h.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),y("exception thrown: "+a),h.quit(1,g)))}finally{}};
function Tb(a){function b(){if(!h.calledRun&&(h.calledRun=!0,!ja)){xa||(xa=!0,ra(ta));ra(ua);if(h.onRuntimeInitialized)h.onRuntimeInitialized();h._main&&Ub&&h.callMain(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var b=h.postRun.shift();wa.unshift(b)}ra(wa)}}a=a||h.arguments;if(!(0<I)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)ya();ra(sa);0<I||h.calledRun||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},
1);b()},1)):b())}}h.run=Tb;function w(a){if(h.onAbort)h.onAbort(a);void 0!==a?(fa(a),y(a),a=JSON.stringify(a)):a="";ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}h.abort=w;if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var Ub=!0;h.noInitialRun&&(Ub=!1);h.noExitRuntime=!0;Tb();
