
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=f.print||console.log.bind(console),y=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var la,ma=!1;function assert(a,b){a||x("Assertion failed: "+b)}function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=A(q);C(n,D,p,q)}return p},array:function(n){var p=A(n.length);E.set(n,p);return p}};a=na(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function F(a,b){return a?sa(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=G(b);c&&C(a,E,c,b);return c}function va(a){var b=ta(a)+1,c=A(b);C(a,E,c,b);return c}var wa,E,D,xa,ya,H,za,I,J;
function Aa(){var a=la.buffer;wa=a;f.HEAP8=E=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=H=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var K,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];Ca.push({nc:function(){Ga()}});function Ha(){var a=f.preRun.shift();Ba.unshift(a)}var L=0,Ia=null,M=null;f.preloadedImages={};f.preloadedAudios={};
function x(a){if(f.onAbort)f.onAbort(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(a){var b=N;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var N="nuklear-sapp.wasm";if(!Ka()){var La=N;N=f.locateFile?f.locateFile(La,v):v+La}
function Ma(){var a=N;try{if(a==N&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Na(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Ja("file://"))return fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(fa)return new Promise(function(a,b){fa(N,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.nc;"number"===typeof c?void 0===b.Wb?K.get(c)():K.get(c)(b.Wb):c(void 0===b.Wb?null:b.Wb)}}}
function Pa(){function a(g){return(g=g.toTimeString().match(/\(([A-Za-z ]+)\)$/))?g[1]:"GMT"}if(!Qa){Qa=!0;var b=(new Date).getFullYear(),c=new Date(b,0,1),d=new Date(b,6,1);b=c.getTimezoneOffset();var e=d.getTimezoneOffset(),h=Math.max(b,e);H[Ra()>>2]=60*h;H[Sa()>>2]=Number(b!=e);c=a(c);d=a(d);c=ua(c);d=ua(d);e<b?(H[O()>>2]=c,H[O()+4>>2]=d):(H[O()>>2]=d,H[O()+4>>2]=c)}}var Qa,Ta=0;function Ua(){for(var a=P.length-1;0<=a;--a)Va(a);P=[];Wa=[]}var Wa=[];
function Xa(){if(Ta&&Ya.Ub)for(var a=0;a<Wa.length;++a){var b=Wa[a];Wa.splice(a,1);--a;b.Ec.apply(null,b.sc)}}var P=[];function Va(a){var b=P[a];b.target.removeEventListener(b.Mb,b.lc,b.Nb);P.splice(a,1)}function Q(a){function b(d){++Ta;Ya=a;Xa();a.Pb(d);Xa();--Ta}if(a.Ob)a.lc=b,a.target.addEventListener(a.Mb,b,a.Nb),P.push(a),Za||(Ea.push(Ua),Za=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Mb==a.Mb&&Va(c--)}
var Za,Ya,$a,ab,bb,cb,db,eb,fb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function R(a){a=2<a?F(a):a;return fb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function gb(a){return 0>fb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function hb(a,b,c,d,e,h){$a||($a=G(164));a={target:R(a),Ub:!0,Mb:h,Ob:d,Pb:function(g){var m=$a,n=m>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);K.get(d)(e,m,b)&&g.preventDefault()},Nb:c};Q(a)}
function ib(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=gb(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function jb(a,b,c,d,e,h){ab||(ab=G(64));a=R(a);Q({target:a,Ub:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Mb:h,Ob:d,Pb:function(g){g=g||event;ib(ab,g,a);K.get(d)(e,ab,b)&&g.preventDefault()},Nb:c})}
function kb(a,b,c,d,e){bb||(bb=G(260));Q({target:a,Mb:e,Ob:d,Pb:function(h){h=h||event;var g=bb,m=document.pointerLockElement||document.Yb||document.$b||document.Zb;H[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);K.get(d)(20,g,b)&&h.preventDefault()},Nb:c})}function lb(a,b,c,d,e){Q({target:a,Mb:e,Ob:d,Pb:function(h){h=h||event;K.get(d)(38,0,b)&&h.preventDefault()},Nb:c})}
function mb(a,b,c,d){cb||(cb=G(36));a=R(a);Q({target:a,Mb:"resize",Ob:d,Pb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=cb;H[g>>2]=e.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;K.get(d)(10,g,b)&&e.preventDefault()}}},Nb:c})}
function nb(a,b,c,d,e,h){db||(db=G(1684));a=R(a);Q({target:a,Ub:"touchstart"==h||"touchend"==h,Mb:h,Ob:d,Pb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.pc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].qc=1;n=db;q=n>>2;H[q+1]=g.ctrlKey;H[q+2]=g.shiftKey;H[q+3]=g.altKey;H[q+4]=g.metaKey;q+=5;var tb=gb(a),ub=0;for(p in m){var B=m[p];H[q]=B.identifier;H[q+1]=B.screenX;H[q+2]=
B.screenY;H[q+3]=B.clientX;H[q+4]=B.clientY;H[q+5]=B.pageX;H[q+6]=B.pageY;H[q+7]=B.pc;H[q+8]=B.qc;H[q+9]=B.clientX-tb.left;H[q+10]=B.clientY-tb.top;q+=13;if(31<++ub)break}H[n>>2]=ub;K.get(d)(e,n,b)&&g.preventDefault()},Nb:c})}function ob(a,b,c,d,e,h){a={target:R(a),Mb:h,Ob:d,Pb:function(g){g=g||event;K.get(d)(e,0,b)&&g.preventDefault()},Nb:c};Q(a)}
function pb(a,b,c,d){eb||(eb=G(96));Q({target:a,Ub:!0,Mb:"wheel",Ob:d,Pb:function(e){e=e||event;var h=eb;ib(h,e,a);J[h+64>>3]=e.deltaX;J[h+72>>3]=e.deltaY;J[h+80>>3]=e.deltaZ;H[h+88>>2]=e.deltaMode;K.get(d)(9,h,b)&&e.preventDefault()},Nb:c})}
function qb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function rb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function sb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function vb(a){a.uc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function wb(a){a.xc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function xb(a){a.zc=a.getExtension("WEBGL_multi_draw")}var yb=1,zb=[],S=[],Ab=[],Bb=[],Cb=[],T=[],U=[],Db=[],Eb=[],Fb={},Gb={},Hb={};function V(a){Ib||(Ib=a)}function W(a){for(var b=yb++,c=a.length;c<b;c++)a[c]=null;return b}
function Jb(a){a||(a=X);if(!a.oc){a.oc=!0;var b=a.Vb;qb(b);rb(b);sb(b);vb(b);wb(b);b.vc=b.getExtension("EXT_disjoint_timer_query");xb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Ib,X,Kb=["default","low-power","high-performance"],Lb=[null,[],[]];function Mb(a,b,c,d){for(var e=0;e<a;e++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);H[b+4*e>>2]=g}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Ob(a){var b=ta(a)+1,c=G(b);C(a,D,c,b);return c}function Pb(a){a-=5120;return 0==a?E:1==a?D:2==a?xa:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Qb(a,b,c,d,e){a=Pb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Rb=new Float32Array(288),Sb=0;288>Sb;++Sb)Z[Sb]=Rb.subarray(0,Sb+1);
var Xb={Xa:function(a,b){Pa();a=new Date(1E3*H[a>>2]);H[b>>2]=a.getSeconds();H[b+4>>2]=a.getMinutes();H[b+8>>2]=a.getHours();H[b+12>>2]=a.getDate();H[b+16>>2]=a.getMonth();H[b+20>>2]=a.getFullYear()-1900;H[b+24>>2]=a.getDay();var c=new Date(a.getFullYear(),0,1);H[b+28>>2]=(a.getTime()-c.getTime())/864E5|0;H[b+36>>2]=-(60*a.getTimezoneOffset());var d=(new Date(a.getFullYear(),6,1)).getTimezoneOffset();c=c.getTimezoneOffset();a=(d!=c&&a.getTimezoneOffset()==Math.min(c,d))|0;H[b+32>>2]=a;a=H[O()+(a?
4:0)>>2];H[b+40>>2]=a;return b},R:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},V:function(a,b,c){a=R(a);if(!a)return-4;a=gb(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Va:function(a,b,c){D.copyWithin(a,b,b+c)},Da:function(a,b){function c(d){K.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-
d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},O:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},ca:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){jb(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){jb(a,b,c,d,33,"mouseenter");return 0},ea:function(a,
b,c,d){jb(a,b,c,d,34,"mouseleave");return 0},ga:function(a,b,c,d){jb(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){jb(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Yb||document.body.$b||document.body.Zb))return-1;a=R(a);if(!a)return-4;kb(a,b,c,d,"pointerlockchange");kb(a,b,c,d,"mozpointerlockchange");kb(a,b,c,d,"webkitpointerlockchange");kb(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||
!(document.body.requestPointerLock||document.body.Yb||document.body.$b||document.body.Zb))return-1;a=R(a);if(!a)return-4;lb(a,b,c,d,"pointerlockerror");lb(a,b,c,d,"mozpointerlockerror");lb(a,b,c,d,"webkitpointerlockerror");lb(a,b,c,d,"mspointerlockerror");return 0},Ma:function(a,b,c,d){mb(a,b,c,d);return 0},Y:function(a,b,c,d){nb(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,d){nb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){nb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){nb(a,
b,c,d,22,"touchstart");return 0},U:function(a,b,c,d){ob(a,b,c,d,31,"webglcontextlost");return 0},T:function(a,b,c,d){ob(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(pb(a,b,c,d),0):-1},C:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Kb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+7],cc:H[b+8],yc:H[b+9],bc:H[b+10],mc:H[b+
11],Ac:H[b+12],Bc:H[b+13]};a=R(a);if(!a||b.mc)b=0;else if(a=1<b.cc?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=W(Eb),d={wc:c,attributes:b,version:b.cc,Vb:a};a.canvas&&(a.canvas.rc=d);Eb[c]=d;("undefined"===typeof b.bc||b.bc)&&Jb(d);b=c}else b=0;return b},eb:function(a,b){a=Eb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&qb(Y);"OES_vertex_array_object"==b&&rb(Y);"WEBGL_draw_buffers"==b&&sb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&vb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&wb(Y);"WEBGL_multi_draw"==b&&xb(Y);return!!a.Vb.getExtension(b)},xa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},mb:function(a){X=Eb[a];f.tc=Y=X&&X.Vb;return!a||Y?0:-5},Ya:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=H[b+8*h>>2],m=H[b+(8*h+4)>>2],n=0;n<m;n++){var p=D[g+n],q=Lb[a];0===p||10===p?((1===a?ka:y)(sa(q,0)),q.length=0):q.push(p)}e+=m}H[d>>2]=e;return 0},b:function(a){Y.activeTexture(a)},E:function(a,b){Y.attachShader(S[a],U[b])},c:function(a,
b){35051==a?Y.ac=b:35052==a&&(Y.Qb=b);Y.bindBuffer(a,zb[b])},h:function(a,b){Y.bindFramebuffer(a,Ab[b])},Ba:function(a,b){Y.bindRenderbuffer(a,Bb[b])},a:function(a,b){Y.bindTexture(a,Cb[b])},Q:function(a){Y.bindVertexArray(Db[a])},L:function(a,b,c,d){Y.blendColor(a,b,c,d)},M:function(a,b){Y.blendEquationSeparate(a,b)},N:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},G:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):
Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},t:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},ib:function(a){Y.clear(a)},lb:function(a,b,c,d){Y.clearColor(a,b,c,d)},kb:function(a){Y.clearDepth(a)},jb:function(a){Y.clearStencil(a)},l:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},na:function(a){Y.compileShader(U[a])},wa:function(a,b,c,d,e,h,g,m){2<=X.version?Y.Qb?Y.compressedTexImage2D(a,b,c,d,e,h,g,m):Y.compressedTexImage2D(a,b,c,
d,e,h,D,m,g):Y.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+g):null)},ua:function(a,b,c,d,e,h,g,m,n){Y.Qb?Y.compressedTexImage3D(a,b,c,d,e,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,e,h,g,D,n,m)},sa:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},pa:function(a){var b=W(U);U[b]=Y.createShader(a);return b},I:function(a){Y.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=zb[d];e&&(Y.deleteBuffer(e),e.name=0,zb[d]=null,d==Y.ac&&(Y.ac=0),d==Y.Qb&&(Y.Qb=0))}},
i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=Ab[d];e&&(Y.deleteFramebuffer(e),e.name=0,Ab[d]=null)}},x:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,Fb[a]=null):V(1281)}},S:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=Bb[d];e&&(Y.deleteRenderbuffer(e),e.name=0,Bb[d]=null)}},s:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=Cb[d];e&&(Y.deleteTexture(e),e.name=0,Cb[d]=null)}},
Ha:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(Db[d]);Db[d]=null}},w:function(a){Y.depthFunc(a)},v:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},P:function(a){Y.disableVertexAttribArray(a)},Za:function(a,b,c){Y.drawArrays(a,b,c)},_a:function(a,b,c,d){Y.drawElements(a,b,c,d)},g:function(a){Y.enable(a)},fb:function(a){Y.enableVertexAttribArray(a)},J:function(a){Y.frontFace(a)},H:function(a,b){Mb(a,b,"createBuffer",zb)},Ca:function(a,b){Mb(a,b,"createRenderbuffer",
Bb)},ya:function(a,b){Mb(a,b,"createTexture",Cb)},Ga:function(a,b){Mb(a,b,"createVertexArray",Db)},la:function(a,b){return Y.getAttribLocation(S[a],F(b))},e:function(a,b){Nb(a,b)},qa:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(H[c>>2]=b)},D:function(a,b,c){if(c)if(a>=yb)V(1281);else{var d=Fb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Xb;else if(35722==b){if(-1==
d.Rb){a=S[a];var e=Y.getProgramParameter(a,35721);for(b=d.Rb=0;b<e;++b)d.Rb=Math.max(d.Rb,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Rb}else if(35381==b){if(-1==d.Sb)for(a=S[a],e=Y.getProgramParameter(a,35382),b=d.Sb=0;b<e;++b)d.Sb=Math.max(d.Sb,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Sb}else H[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},ma:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(H[c>>2]=b)},A:function(a,
b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},La:function(a){if(Gb[a])return Gb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ob(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Ob(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?
"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ob(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ob(b);break;default:return V(1280),0}return Gb[a]=b},Ka:function(a,b){if(2>X.version)return V(1282),0;var c=Hb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+
d})),c=c.map(function(d){return Ob(d)}),c=Hb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},k:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Fb[a]&&Fb[a].kc[b])&&0<=c&&c<a[0]?a[1]+c:-1},ra:function(a){Y.linkProgram(S[a]);var b=S[a];a=Fb[a]={kc:{},Xb:0,Rb:-1,Sb:-1};for(var c=a.kc,d=Y.getProgramParameter(b,35718),e=0;e<d;++e){var h=Y.getActiveUniform(b,e),g=h.name;a.Xb=Math.max(a.Xb,g.length+
1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),T[n]=m}}},K:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},za:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Aa:function(a,b,c,d,e){Y.renderbufferStorageMultisample(a,b,c,d,e)},r:function(a,b,c,d){Y.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?H[d+4*h>>
2]:-1;e+=F(H[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],e)},Fa:function(a,b,c){Y.stencilFunc(a,b,c)},ka:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},u:function(a){Y.stencilMask(a)},Ea:function(a,b,c){Y.stencilOp(a,b,c)},ja:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},va:function(a,b,c,d,e,h,g,m,n){if(2<=X.version)if(Y.Qb)Y.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Pb(m);Y.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,e,h,g,m,null);else Y.texImage2D(a,
b,c,d,e,h,g,m,n?Qb(m,g,d,e,n):null)},ta:function(a,b,c,d,e,h,g,m,n,p){if(Y.Qb)Y.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Pb(n);Y.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,e,h,g,m,n,null)},F:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},db:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],
d)}},B:function(a,b){Y.uniform1i(T[a],b)},cb:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},bb:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},ab:function(a,b,
c){if(2<=X.version)Y.uniform4fv(T[a],I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},$a:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,I,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=
h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=I.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,e)}},j:function(a){Y.useProgram(S[a])},gb:function(a,b){Y.vertexAttribDivisor(a,b)},hb:function(a,b,c,d,e,h){Y.vertexAttribPointer(a,b,c,!!d,e,h)},z:function(a,b,c,d){Y.viewport(a,b,c,d)},Ta:function(){f.dc=function(a){0!=Tb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.dc)},Sa:function(){f.jc=
function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.jc)},Ra:function(a){f.Cc=[];a=F(a);a=document.getElementById(a);f.ec=function(b){b.stopPropagation();b.preventDefault()};f.fc=function(b){b.stopPropagation();b.preventDefault()};f.hc=function(b){b.stopPropagation();b.preventDefault()};f.ic=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Dc=c;Ub(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",
["number","string"],[d,c[d].name]);Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.ec,!1);a.addEventListener("dragleave",f.fc,!1);a.addEventListener("dragover",f.hc,!1);a.addEventListener("drop",f.ic,!1)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},Ua:function(a){a=F(a);
f.Tb=document.getElementById(a);f.Tb||console.log("sokol_app.h: invalid target:"+a);f.Tb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",f.dc)},Pa:function(){window.removeEventListener("paste",f.jc)},Oa:function(a){a=F(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.ec);a.removeEventListener("dragleave",f.fc);a.removeEventListener("dragover",f.hc);a.removeEventListener("drop",
f.ic)},y:function(){f.Tb&&f.Tb.requestPointerLock&&f.Tb.requestPointerLock()},m:function(){document.getElementById("_sokol_app_input_element").blur()},Na:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},ob:function(){return navigator.userAgent.includes("Macintosh")?1:0},nb:function(a){var b=Date.now()/1E3|0;a&&(H[a>>2]=b);return b}};
(function(){function a(e){f.asm=e.exports;la=f.asm.pb;Aa();K=f.asm.Lb;L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Ia&&(clearInterval(Ia),Ia=null),M&&(e=M,M=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Xb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ga=f.___wasm_call_ctors=function(){return(Ga=f.___wasm_call_ctors=f.asm.qb).apply(null,arguments)},G=f._malloc=function(){return(G=f._malloc=f.asm.rb).apply(null,arguments)},Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.sb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.tb).apply(null,arguments)};
var Tb=f.__sapp_html5_get_ask_leave_site=function(){return(Tb=f.__sapp_html5_get_ask_leave_site=f.asm.ub).apply(null,arguments)},Ub=f.__sapp_emsc_begin_drop=function(){return(Ub=f.__sapp_emsc_begin_drop=f.asm.vb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.wb).apply(null,arguments)};var Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.xb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.yb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.zb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Ab).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Bb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Cb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Db).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Eb).apply(null,arguments)};
var O=f.__get_tzname=function(){return(O=f.__get_tzname=f.asm.Fb).apply(null,arguments)},Sa=f.__get_daylight=function(){return(Sa=f.__get_daylight=f.asm.Gb).apply(null,arguments)},Ra=f.__get_timezone=function(){return(Ra=f.__get_timezone=f.asm.Hb).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Ib).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Jb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Kb).apply(null,
arguments)},Yb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Zb(){Yb||$b();Yb||(M=Zb)};
function $b(a){function b(){if(!Yb&&(Yb=!0,f.calledRun=!0,!ma)){Oa(Ca);Oa(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(ac){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));H[h>>2]=va(aa);for(var g=1;g<e;g++)H[(h>>2)+g]=va(c[g-1]);H[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ma=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Oa(Fa)}}a=a||r;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Oa(Ba);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=$b;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();
var ac=!0;f.noInitialRun&&(ac=!1);$b();
