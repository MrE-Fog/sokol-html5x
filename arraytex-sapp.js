
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var B,ka=new WebAssembly.Table({initial:21,maximum:21,element:"anyfunc"}),la=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function ma(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function na(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);oa.set(n,p);return p}},d=ma(),f=[],h=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===h&&(h=pa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=C(b);D(a,oa,c,b);return c}var G,oa,E,ua,va,H,wa,I,J;
function xa(a){G=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=ua=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=va=new Uint16Array(a);e.HEAPU32=wa=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var ya=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:ya/65536,maximum:32768});B&&(G=B.buffer);ya=G.byteLength;xa(G);H[8808]=5278272;
function za(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.nc;"number"===typeof c?void 0===b.Zb?e.dynCall_v(c):e.dynCall_vi(c,b.Zb):c(void 0===b.Zb?null:b.Zb)}}}var Aa=[],Ba=[],Ca=[],Da=[],Ea=[];function Fa(){var a=e.preRun.shift();Aa.unshift(a)}var K=0,Ga=null,L=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);ja(a);y(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ha(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ia(){return Ha("data:application/octet-stream;base64,")}var M="arraytex-sapp.wasm";if(!Ia()){var Ja=M;M=e.locateFile?e.locateFile(Ja,v):v+Ja}function Ka(){try{if(z)return new Uint8Array(z);if(w)return w(M);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function La(){return z||!ba&&!u||"function"!==typeof fetch||Ha("file://")?new Promise(function(a){a(Ka())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ka()})}Ba.push({nc:function(){Ma()}});function Na(){for(var a=N.length-1;0<=a;--a)Oa(a);N=[];Pa=[]}var Pa=[];function Qa(){if(Ra.fc&&Sa.Xb)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Ac.apply(null,b.sc)}}var N=[];
function Oa(a){var b=N[a];b.target.removeEventListener(b.Qb,b.lc,b.Rb);N.splice(a,1)}function O(a){function b(d){++Ra.fc;Sa=a;Qa();a.Tb(d);Qa();--Ra.fc}if(a.Sb)a.lc=b,a.target.addEventListener(a.Qb,b,a.Rb),N.push(a),Ta||(Da.push(Na),Ta=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Qb==a.Qb&&Oa(c--)}var Ra={},Ta,Sa,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){a=2<a?F(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function bb(a,b,c,d,f,h){Ua||(Ua=Q(164));a={target:P(a),Xb:!0,Qb:h,Sb:d,Tb:function(g){var m=Ua,n=m>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);R(d,f,m,b)&&g.preventDefault()},Rb:c};O(a)}
function cb(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;ua[2*a+16]=b.button;ua[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=ab(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function db(a,b,c,d,f,h){Va||(Va=Q(64));a=P(a);O({target:a,Xb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Qb:h,Sb:d,Tb:function(g){g=g||event;cb(Va,g,a);R(d,f,Va,b)&&g.preventDefault()},Rb:c})}
function eb(a,b,c,d,f){Wa||(Wa=Q(260));O({target:a,Qb:f,Sb:d,Tb:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.ac||document.cc||document.bc;H[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);R(d,20,g,b)&&h.preventDefault()},Rb:c})}function fb(a,b,c,d,f){O({target:a,Qb:f,Sb:d,Tb:function(h){h=h||event;R(d,38,0,b)&&h.preventDefault()},Rb:c})}
function gb(a,b,c,d){Xa||(Xa=Q(36));a=P(a);O({target:a,Qb:"resize",Sb:d,Tb:function(f){f=f||event;if(f.target==a){var h=Xa,g=document.body;H[h>>2]=f.detail;H[h+4>>2]=g.clientWidth;H[h+8>>2]=g.clientHeight;H[h+12>>2]=innerWidth;H[h+16>>2]=innerHeight;H[h+20>>2]=outerWidth;H[h+24>>2]=outerHeight;H[h+28>>2]=pageXOffset;H[h+32>>2]=pageYOffset;R(d,10,h,b)&&f.preventDefault()}},Rb:c})}
function hb(a,b,c,d,f,h){Ya||(Ya=Q(1684));a=P(a);O({target:a,Xb:"touchstart"==h||"touchend"==h,Qb:h,Sb:d,Tb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.pc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].qc=1;n=Ya;q=n>>2;H[q+1]=g.ctrlKey;H[q+2]=g.shiftKey;H[q+3]=g.altKey;H[q+4]=g.metaKey;q+=5;var mb=ab(a),nb=0;for(p in m){var A=m[p];H[q]=A.identifier;H[q+1]=A.screenX;H[q+2]=
A.screenY;H[q+3]=A.clientX;H[q+4]=A.clientY;H[q+5]=A.pageX;H[q+6]=A.pageY;H[q+7]=A.pc;H[q+8]=A.qc;H[q+9]=A.clientX-mb.left;H[q+10]=A.clientY-mb.top;q+=13;if(31<++nb)break}H[n>>2]=nb;R(d,f,n,b)&&g.preventDefault()},Rb:c})}function ib(a,b,c,d,f,h){a={target:P(a),Qb:h,Sb:d,Tb:function(g){g=g||event;R(d,f,0,b)&&g.preventDefault()},Rb:c};O(a)}
function jb(a,b,c,d){Za||(Za=Q(96));O({target:a,Xb:!0,Qb:"wheel",Sb:d,Tb:function(f){f=f||event;var h=Za;cb(h,f,a);J[h+64>>3]=f.deltaX;J[h+72>>3]=f.deltaY;J[h+80>>3]=f.deltaZ;H[h+88>>2]=f.deltaMode;R(d,9,h,b)&&f.preventDefault()},Rb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.uc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var qb=1,rb=[],S=[],sb=[],tb=[],ub=[],T=[],U=[],vb=[],wb=[],xb={},yb={},zb={};function V(a){Ab||(Ab=a)}function W(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a){a||(a=X);if(!a.oc){a.oc=!0;var b=a.Yb;kb(b);lb(b);ob(b);pb(b);b.vc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Ab,X,Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);H[b+4*f>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Fb(a){var b=sa(a)+1,c=Q(b);D(a,E,c,b);return c}function Gb(a){a-=5120;return 0==a?oa:1==a?E:2==a?ua:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?wa:va}function Hb(a,b,c,d,f){a=Gb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Ib=new Float32Array(288),Jb=0;288>Jb;++Jb)Z[Jb]=Ib.subarray(0,Jb+1);
var Nb={_sapp_emsc_exit_pointerlock:function(){document.exitPointerLock&&document.exitPointerLock()},v:function(a){a=F(a);var b=document.getElementById(a);b?b.requestPointerLock?b.requestPointerLock():console.log("sokol_app.h: target doesn't doesn't support pointer lock:"+a):console.log("sokol_app.h: invalid target:"+a)},Y:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=P(a);if(!a)return-4;a=ab(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Wa:function(a,
b,c){E.copyWithin(a,b,b+c)},Na:function(a,b){function c(d){Kb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Xa:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);xa(B.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},R:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=
c;return 0},ba:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},y:function(a,b,c,d){db(a,b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){db(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){db(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){db(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){db(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||
!(document.body.requestPointerLock||document.body.ac||document.body.cc||document.body.bc))return-1;a=P(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ac||document.body.cc||document.body.bc))return-1;a=P(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,
"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},gb:function(a,b,c,d){gb(a,b,c,d);return 0},W:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},T:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},S:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=P(a);
return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},G:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Cb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.hc=H[b+8];c.xc=H[b+9];c.ec=H[b+10];c.mc=H[b+11];c.yc=H[b+12];c.zc=H[b+13];if(a=P(a))if(c.mc)c=-1;else if(a=1<c.hc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(wb);var d={wc:b,attributes:c,version:c.hc,
Yb:a};a.canvas&&(a.canvas.rc=d);wb[b]=d;("undefined"===typeof c.ec||c.ec)&&Bb(d);c=b}else c=0;else c=-4;return c},wa:function(a,b){a=wb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(Y);"OES_vertex_array_object"==b&&lb(Y);"WEBGL_draw_buffers"==b&&ob(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&pb(Y);return!!a.Yb.getExtension(b)},Ka:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Ca:function(a){X=wb[a];e.tc=Y=X&&
X.Yb;return!a||Y?0:-5},i:function(a){Y.activeTexture(a)},D:function(a,b){Y.attachShader(S[a],U[b])},d:function(a,b){35051==a?Y.dc=b:35052==a&&(Y.Ub=b);Y.bindBuffer(a,rb[b])},g:function(a,b){Y.bindFramebuffer(a,sb[b])},Ia:function(a,b){Y.bindRenderbuffer(a,tb[b])},a:function(a,b){Y.bindTexture(a,ub[b])},Q:function(a){Y.bindVertexArray(vb[a])},M:function(a,b,c,d){Y.blendColor(a,b,c,d)},N:function(a,b){Y.blendEquationSeparate(a,b)},O:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},o:function(a,b,c,d,
f,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,h,g,m,n,p)},H:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,E,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?E.subarray(c,c+b):b,d)},F:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,E,d,c):Y.bufferSubData(a,b,E.subarray(d,d+c))},ja:function(a){Y.clear(a)},ma:function(a,b,c,d){Y.clearColor(a,b,c,d)},la:function(a){Y.clearDepth(a)},ka:function(a){Y.clearStencil(a)},r:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},ta:function(a){Y.compileShader(U[a])},Ea:function(a,
b,c,d,f,h,g,m){2<=X.version?Y.Ub?Y.compressedTexImage2D(a,b,c,d,f,h,g,m):Y.compressedTexImage2D(a,b,c,d,f,h,E,m,g):Y.compressedTexImage2D(a,b,c,d,f,h,m?E.subarray(m,m+g):null)},Ba:function(a,b,c,d,f,h,g,m,n){Y.Ub?Y.compressedTexImage3D(a,b,c,d,f,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,h,g,E,n,m)},za:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},va:function(a){var b=W(U);U[b]=Y.createShader(a);return b},J:function(a){Y.cullFace(a)},qa:function(a,b){for(var c=0;c<a;c++){var d=
H[b+4*c>>2],f=rb[d];f&&(Y.deleteBuffer(f),f.name=0,rb[d]=null,d==Y.dc&&(Y.dc=0),d==Y.Ub&&(Y.Ub=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=sb[d];f&&(Y.deleteFramebuffer(f),f.name=0,sb[d]=null)}},B:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,xb[a]=null):V(1281)}},x:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=tb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,tb[d]=null)}},q:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},pa:function(a,
b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=ub[d];f&&(Y.deleteTexture(f),f.name=0,ub[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(vb[d]);vb[d]=null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},b:function(a){Y.disable(a)},P:function(a){Y.disableVertexAttribArray(a)},Ya:function(a,b,c){Y.drawArrays(a,b,c)},Za:function(a,b,c,d){Y.drawElements(a,b,c,d)},f:function(a){Y.enable(a)},db:function(a){Y.enableVertexAttribArray(a)},K:function(a){Y.frontFace(a)},
I:function(a,b){Db(a,b,"createBuffer",rb)},Ja:function(a,b){Db(a,b,"createRenderbuffer",tb)},Fa:function(a,b){Db(a,b,"createTexture",ub)},Oa:function(a,b){Db(a,b,"createVertexArray",vb)},ra:function(a,b){return Y.getAttribLocation(S[a],F(b))},c:function(a,b){Eb(a,b)},xa:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},C:function(a,b,c){if(c)if(a>=qb)V(1281);else{var d=xb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a=
"(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.$b;else if(35722==b){if(-1==d.Vb){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.Vb=0;b<f;++b)d.Vb=Math.max(d.Vb,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Vb}else if(35381==b){if(-1==d.Wb)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.Wb=0;b<f;++b)d.Wb=Math.max(d.Wb,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Wb}else H[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},sa:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);
null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Ra:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Y.getParameter(a))||V(1280);b=Fb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Fb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:return V(1280),0}return yb[a]=b},Qa:function(a,b){if(2>X.version)return V(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=
Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Fb(d)}),c=zb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},k:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].kc[b])&&0<=c&&c<a[0]?a[1]+c:-1},ya:function(a){Y.linkProgram(S[a]);var b=S[a];a=xb[a]={kc:{},$b:0,Vb:-1,Wb:-1};for(var c=a.kc,d=Y.getProgramParameter(b,35718),f=0;f<
d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.$b=Math.max(a.$b,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),T[n]=m}}},L:function(a,b){Y.polygonOffset(a,b)},p:function(a){Y.readBuffer(a)},Ga:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ha:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},na:function(a,b,c,d){Y.scissor(a,
b,c,d)},ua:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;f+=F(H[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},Ma:function(a,b,c){Y.stencilFunc(a,b,c)},w:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},La:function(a,b,c){Y.stencilOp(a,b,c)},ga:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Da:function(a,b,c,d,f,h,g,m,n){if(2<=X.version)if(Y.Ub)Y.texImage2D(a,b,c,d,f,h,g,m,n);else if(n){var p=Gb(m);Y.texImage2D(a,b,c,d,f,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,
b,c,d,f,h,g,m,null);else Y.texImage2D(a,b,c,d,f,h,g,m,n?Hb(m,g,d,f,n):null)},Aa:function(a,b,c,d,f,h,g,m,n,p){if(Y.Ub)Y.texImage3D(a,b,c,d,f,h,g,m,n,p);else if(p){var q=Gb(n);Y.texImage3D(a,b,c,d,f,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,h,g,m,n,null)},E:function(a,b,c){Y.texParameterf(a,b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},cb:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=
I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},A:function(a,b){Y.uniform1i(T[a],b)},bb:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},ab:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>
2);Y.uniform3fv(T[a],d)}},$a:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},_a:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,I,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=
h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=I.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},j:function(a){Y.useProgram(S[a])},eb:function(a,b){Y.vertexAttribDivisor(a,b)},fb:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},oa:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:B,Va:function(){e.ic=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
e.ic)},Ua:function(){e.jc=function(a){a=a.clipboardData.getData("text");na([a])};window.addEventListener("paste",e.jc)},n:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},m:function(){document.getElementById("_sokol_app_input_element").focus()},l:function(){document.getElementById("_sokol_app_input_element").blur()},Ta:function(){window.removeEventListener("beforeunload",
e.ic)},Sa:function(){window.removeEventListener("paste",e.jc)},table:ka};
(function(){function a(f){e.asm=f.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ga&&(clearInterval(Ga),Ga=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Nb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||Ha("file://")||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ma=e.___wasm_call_ctors=function(){return(Ma=e.___wasm_call_ctors=e.asm.hb).apply(null,arguments)},Mb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.ib).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.jb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.kb).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.lb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.mb).apply(null,arguments)};var Lb=e.__sapp_html5_get_ask_leave_site=function(){return(Lb=e.__sapp_html5_get_ask_leave_site=e.asm.nb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.ob).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.pb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.qb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.rb).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.sb).apply(null,arguments)};e.___em_js___sapp_emsc_request_pointerlock=function(){return(e.___em_js___sapp_emsc_request_pointerlock=e.asm.tb).apply(null,arguments)};e.___em_js___sapp_emsc_exit_pointerlock=function(){return(e.___em_js___sapp_emsc_exit_pointerlock=e.asm.ub).apply(null,arguments)};e._main=function(){return(e._main=e.asm.vb).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.wb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.xb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.yb).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.zb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Ab).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Bb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Cb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Db).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Eb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Fb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Gb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Hb).apply(null,arguments)};
var Q=e._malloc=function(){return(Q=e._malloc=e.asm.Ib).apply(null,arguments)},pa=e.stackSave=function(){return(pa=e.stackSave=e.asm.Jb).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.Kb).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Lb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Mb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Nb).apply(null,arguments)};
var R=e.dynCall_iiii=function(){return(R=e.dynCall_iiii=e.asm.Ob).apply(null,arguments)},Kb=e.dynCall_idi=function(){return(Kb=e.dynCall_idi=e.asm.Pb).apply(null,arguments)},Ob;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Pb(){Ob||Qb();Ob||(L=Pb)};
function Qb(a){function b(){if(!Ob&&(Ob=!0,e.calledRun=!0,!la)){za(Ba);za(Ca);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Rb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));H[h>>2]=ta(aa);for(var g=1;g<f;g++)H[(h>>2)+g]=ta(c[g-1]);H[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(la=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ea.unshift(c);za(Ea)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Fa();za(Aa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Qb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Rb=!0;e.noInitialRun&&(Rb=!1);noExitRuntime=!0;Qb();
