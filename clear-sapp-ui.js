
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=f.print||console.log.bind(console),y=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var la,ma=!1;function assert(a,b){a||x("Assertion failed: "+b)}function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=A(q);C(n,D,p,q)}return p},array:function(n){var p=A(n.length);pa.set(n,p);return p}};a=na(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=qa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==h&&ra(h)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?ta(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=A(b);C(a,pa,c,b);return c}var wa,pa,D,xa,ya,F,za,G,H;
function Aa(){var a=la.buffer;wa=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var I,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];Ca.push({oc:function(){Ga()}});function Ha(){var a=f.preRun.shift();Ba.unshift(a)}var J=0,Ia=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function x(a){if(f.onAbort)f.onAbort(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var L="clear-sapp-ui.wasm";if(!Ka()){var La=L;L=f.locateFile?f.locateFile(La,v):v+La}
function Ma(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Na(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Ja("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.oc;"number"===typeof c?void 0===b.Xb?I.get(c)():I.get(c)(b.Xb):c(void 0===b.Xb?null:b.Xb)}}}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=M.length-1;0<=a;--a)Ta(a);M=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.Vb)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.Hc.apply(null,b.tc)}}var M=[];function Ta(a){var b=M[a];b.target.removeEventListener(b.Nb,b.mc,b.Ob);M.splice(a,1)}
function N(a){function b(d){++Ra;Wa=a;Va();a.Qb(d);Va();--Ra}if(a.Pb)a.mc=b,a.target.addEventListener(a.Nb,b,a.Ob),M.push(a),Xa||(Ea.push(Sa),Xa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Nb==a.Nb&&Ta(c--)}var Xa,Wa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,e,h){Ya||(Ya=P(164));a={target:O(a),Vb:!0,Nb:h,Pb:d,Qb:function(g){var m=Ya,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(e,m,b)&&g.preventDefault()},Ob:c};N(a)}
function gb(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=eb(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function Q(a,b,c,d,e,h){Za||(Za=P(64));a=O(a);N({target:a,Vb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Nb:h,Pb:d,Qb:function(g){g=g||event;gb(Za,g,a);I.get(d)(e,Za,b)&&g.preventDefault()},Ob:c})}
function hb(a,b,c,d,e){$a||($a=P(260));N({target:a,Nb:e,Pb:d,Qb:function(h){h=h||event;var g=$a,m=document.pointerLockElement||document.Zb||document.ac||document.$b;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&h.preventDefault()},Ob:c})}function ib(a,b,c,d,e){N({target:a,Nb:e,Pb:d,Qb:function(h){h=h||event;I.get(d)(38,0,b)&&h.preventDefault()},Ob:c})}
function jb(a,b,c,d){ab||(ab=P(36));a=O(a);N({target:a,Nb:"resize",Pb:d,Qb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=ab;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&e.preventDefault()}}},Ob:c})}
function kb(a,b,c,d,e,h){bb||(bb=P(1684));a=O(a);N({target:a,Vb:"touchstart"==h||"touchend"==h,Nb:h,Pb:d,Qb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.qc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].rc=1;n=bb;q=n>>2;F[q+1]=g.ctrlKey;F[q+2]=g.shiftKey;F[q+3]=g.altKey;F[q+4]=g.metaKey;q+=5;var pb=eb(a),qb=0;for(p in m){var B=m[p];F[q]=B.identifier;F[q+1]=B.screenX;F[q+2]=
B.screenY;F[q+3]=B.clientX;F[q+4]=B.clientY;F[q+5]=B.pageX;F[q+6]=B.pageY;F[q+7]=B.qc;F[q+8]=B.rc;F[q+9]=B.clientX-pb.left;F[q+10]=B.clientY-pb.top;q+=13;if(31<++qb)break}F[n>>2]=qb;I.get(d)(e,n,b)&&g.preventDefault()},Ob:c})}function lb(a,b,c,d,e,h){a={target:O(a),Nb:h,Pb:d,Qb:function(g){g=g||event;I.get(d)(e,0,b)&&g.preventDefault()},Ob:c};N(a)}
function mb(a,b,c,d){cb||(cb=P(96));N({target:a,Vb:!0,Nb:"wheel",Pb:d,Qb:function(e){e=e||event;var h=cb;gb(h,e,a);H[h+64>>3]=e.deltaX;H[h+72>>3]=e.deltaY;H[h+80>>3]=e.deltaZ;F[h+88>>2]=e.deltaMode;I.get(d)(9,h,b)&&e.preventDefault()},Ob:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function rb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function sb(a){a.vc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function tb(a){a.Ac=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ub(a){a.Cc=a.getExtension("WEBGL_multi_draw")}var vb=1,wb=[],R=[],xb=[],yb=[],zb=[],S=[],T=[],Ab=[],Bb=[],U={},Cb={},Db={};function V(a){Eb||(Eb=a)}function W(a){for(var b=vb++,c=a.length;c<b;c++)a[c]=null;return b}
function Fb(a){a||(a=X);if(!a.pc){a.pc=!0;var b=a.Wb;nb(b);ob(b);rb(b);sb(b);tb(b);b.wc=b.getExtension("EXT_disjoint_timer_query");ub(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Eb,X,Gb=["default","low-power","high-performance"];function Hb(a,b,c,d){for(var e=0;e<a;e++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);F[b+4*e>>2]=g}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else V(1281)}
function Jb(a){var b=ua(a)+1,c=P(b);C(a,D,c,b);return c}function Kb(a){a-=5120;return 0==a?pa:1==a?D:2==a?xa:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Lb(a,b,c,d,e){a=Kb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Mb=new Float32Array(288),Nb=0;288>Nb;++Nb)Z[Nb]=Mb.subarray(0,Nb+1);
var Sb={ga:function(){return 0},db:function(){return 0},fb:function(){},T:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},pa:function(a,b,c){a=O(a);if(!a)return-4;a=eb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},ab:function(a,b,c){D.copyWithin(a,b,b+c)},Oa:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},S:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ca:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},oa:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");
return 0},ea:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},ha:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Zb||document.body.ac||document.body.$b))return-1;a=O(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},W:function(a,
b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Zb||document.body.ac||document.body.$b))return-1;a=O(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},_a:function(a,b,c,d){jb(a,b,c,d);return 0},Y:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},
$:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},V:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},U:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d),0):-1},G:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Gb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],dc:F[b+8],Bc:F[b+
9],cc:F[b+10],nc:F[b+11],Dc:F[b+12],Ec:F[b+13]};a=O(a);if(!a||b.nc)b=0;else if(a=1<b.dc?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=W(Bb),d={zc:c,attributes:b,version:b.dc,Wb:a};a.canvas&&(a.canvas.sc=d);Bb[c]=d;("undefined"===typeof b.cc||b.cc)&&Fb(d);b=c}else b=0;return b},va:function(a,b){a=Bb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(Y);"OES_vertex_array_object"==b&&ob(Y);"WEBGL_draw_buffers"==b&&rb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==
b&&sb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&tb(Y);"WEBGL_multi_draw"==b&&ub(Y);return!!a.Wb.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ba:function(a){X=Bb[a];f.uc=Y=X&&X.Wb;return!a||Y?0:-5},ia:function(){return 0},cb:function(a,b,c,d){a=Qa.yc(a);b=Qa.xc(a,b,c);F[d>>2]=b;return 0},$a:function(){},eb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=F[b+8*h>>2],m=F[b+(8*h+4)>>2],n=0;n<m;n++){var p=D[g+n],
q=Pa[a];0===p||10===p?((1===a?ka:y)(ta(q,0)),q.length=0):q.push(p)}e+=m}F[d>>2]=e;return 0},b:function(a){Y.activeTexture(a)},E:function(a,b){Y.attachShader(R[a],T[b])},c:function(a,b){35051==a?Y.bc=b:35052==a&&(Y.Rb=b);Y.bindBuffer(a,wb[b])},h:function(a,b){Y.bindFramebuffer(a,xb[b])},Ha:function(a,b){Y.bindRenderbuffer(a,yb[b])},a:function(a,b){Y.bindTexture(a,zb[b])},Q:function(a){Y.bindVertexArray(Ab[a])},M:function(a,b,c,d){Y.blendColor(a,b,c,d)},N:function(a,b){Y.blendEquationSeparate(a,b)},
O:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,e,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},H:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},u:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},qb:function(a){Y.clear(a)},A:function(a,b,c,d){Y.clearColor(a,b,c,d)},na:function(a){Y.clearDepth(a)},rb:function(a){Y.clearStencil(a)},j:function(a,b,c,d){Y.colorMask(!!a,
!!b,!!c,!!d)},sa:function(a){Y.compileShader(T[a])},Da:function(a,b,c,d,e,h,g,m){2<=X.version?Y.Rb?Y.compressedTexImage2D(a,b,c,d,e,h,g,m):Y.compressedTexImage2D(a,b,c,d,e,h,D,m,g):Y.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+g):null)},Aa:function(a,b,c,d,e,h,g,m,n){Y.Rb?Y.compressedTexImage3D(a,b,c,d,e,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,e,h,g,D,n,m)},ya:function(){var a=W(R),b=Y.createProgram();b.name=a;R[a]=b;return a},ua:function(a){var b=W(T);T[b]=Y.createShader(a);return b},J:function(a){Y.cullFace(a)},
Qa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=wb[d];e&&(Y.deleteBuffer(e),e.name=0,wb[d]=null,d==Y.bc&&(Y.bc=0),d==Y.Rb&&(Y.Rb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=xb[d];e&&(Y.deleteFramebuffer(e),e.name=0,xb[d]=null)}},y:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,U[a]=null):V(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=yb[d];e&&(Y.deleteRenderbuffer(e),e.name=0,yb[d]=null)}},t:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),
T[a]=null):V(1281)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=zb[d];e&&(Y.deleteTexture(e),e.name=0,zb[d]=null)}},Na:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Y.deleteVertexArray(Ab[d]);Ab[d]=null}},x:function(a){Y.depthFunc(a)},w:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},P:function(a){Y.disableVertexAttribArray(a)},gb:function(a,b,c){Y.drawArrays(a,b,c)},hb:function(a,b,c,d){Y.drawElements(a,b,c,d)},g:function(a){Y.enable(a)},nb:function(a){Y.enableVertexAttribArray(a)},
K:function(a){Y.frontFace(a)},I:function(a,b){Hb(a,b,"createBuffer",wb)},Ia:function(a,b){Hb(a,b,"createRenderbuffer",yb)},Ea:function(a,b){Hb(a,b,"createTexture",zb)},Ma:function(a,b){Hb(a,b,"createVertexArray",Ab)},qa:function(a,b){return Y.getAttribLocation(R[a],E(b))},e:function(a,b){Ib(a,b)},wa:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},D:function(a,b,c){if(c)if(a>=vb)V(1281);else{var d=U[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),
null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Yb;else if(35722==b){if(-1==d.Sb){a=R[a];var e=Y.getProgramParameter(a,35721);for(b=d.Sb=0;b<e;++b)d.Sb=Math.max(d.Sb,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Sb}else if(35381==b){if(-1==d.Tb)for(a=R[a],e=Y.getProgramParameter(a,35382),b=d.Tb=0;b<e;++b)d.Tb=Math.max(d.Tb,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Tb}else F[c>>2]=Y.getProgramParameter(R[a],b);else V(1282)}else V(1281)},ra:function(a,b,c,
d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Sa:function(a){if(Cb[a])return Cb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Jb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Y.getParameter(a))||V(1280);b=Jb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Jb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Jb(b);break;default:return V(1280),0}return Cb[a]=b},Ra:function(a,b){if(2>X.version)return V(1282),0;var c=Db[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=
Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Jb(d)}),c=Db[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},n:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=U[a]&&U[a].lc[b])&&0<=c&&c<a[0]?a[1]+c:-1},xa:function(a){Y.linkProgram(R[a]);var b=R[a];a=U[a]={lc:{},Yb:0,Sb:-1,Tb:-1};for(var c=a.lc,d=Y.getProgramParameter(b,35718),e=0;e<d;++e){var h=
Y.getActiveUniform(b,e),g=h.name;a.Yb=Math.max(a.Yb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(S);c[g]=[h.size,n];S[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(S),S[n]=m}}},L:function(a,b){Y.polygonOffset(a,b)},s:function(a){Y.readBuffer(a)},Fa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ga:function(a,b,c,d,e){Y.renderbufferStorageMultisample(a,b,c,d,e)},l:function(a,b,c,d){Y.scissor(a,b,c,d)},ta:function(a,
b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(T[a],e)},La:function(a,b,c){Y.stencilFunc(a,b,c)},ma:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},v:function(a){Y.stencilMask(a)},Ka:function(a,b,c){Y.stencilOp(a,b,c)},la:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ca:function(a,b,c,d,e,h,g,m,n){if(2<=X.version)if(Y.Rb)Y.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Kb(m);Y.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,
b,c,d,e,h,g,m,null);else Y.texImage2D(a,b,c,d,e,h,g,m,n?Lb(m,g,d,e,n):null)},za:function(a,b,c,d,e,h,g,m,n,p){if(Y.Rb)Y.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Kb(n);Y.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,e,h,g,m,n,null)},F:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},mb:function(a,b,c){if(2<=X.version)Y.uniform1fv(S[a],G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=
G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(S[a],d)}},C:function(a,b){Y.uniform1i(S[a],b)},lb:function(a,b,c){if(2<=X.version)Y.uniform2fv(S[a],G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Y.uniform2fv(S[a],d)}},kb:function(a,b,c){if(2<=X.version)Y.uniform3fv(S[a],G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>
2);Y.uniform3fv(S[a],d)}},jb:function(a,b,c){if(2<=X.version)Y.uniform4fv(S[a],G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(S[a],d)}},ib:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(S[a],!!c,G,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=
h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(S[a],!!c,e)}},k:function(a){Y.useProgram(R[a])},ob:function(a,b){Y.vertexAttribDivisor(a,b)},pb:function(a,b,c,d,e,h){Y.vertexAttribPointer(a,b,c,!!d,e,h)},m:function(a,b,c,d){Y.viewport(a,b,c,d)},Za:function(){f.ec=function(a){0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
f.ec)},Ya:function(){f.kc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.kc)},Xa:function(a){f.Fc=[];a=E(a);a=document.getElementById(a);f.fc=function(b){b.stopPropagation();b.preventDefault()};f.hc=function(b){b.stopPropagation();b.preventDefault()};f.ic=function(b){b.stopPropagation();b.preventDefault()};f.jc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Gc=c;Pb(c.length);var d;for(d=0;d<
c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Qb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.fc,!1);a.addEventListener("dragleave",f.hc,!1);a.addEventListener("dragover",f.ic,!1);a.addEventListener("drop",f.jc,!1)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Rb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},
sb:function(a){a=E(a);f.Ub=document.getElementById(a);f.Ub||console.log("sokol_app.h: invalid target:"+a);f.Ub.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Wa:function(){window.removeEventListener("beforeunload",f.ec)},Va:function(){window.removeEventListener("paste",f.kc)},Ua:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.fc);a.removeEventListener("dragleave",f.hc);a.removeEventListener("dragover",f.ic);a.removeEventListener("drop",
f.jc)},z:function(){f.Ub&&f.Ub.requestPointerLock&&f.Ub.requestPointerLock()},o:function(){document.getElementById("_sokol_app_input_element").blur()},Ta:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},ja:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.tb;Aa();I=f.asm.Mb;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ia&&(clearInterval(Ia),Ia=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Sb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ga=f.___wasm_call_ctors=function(){return(Ga=f.___wasm_call_ctors=f.asm.ub).apply(null,arguments)},Rb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Rb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.vb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.wb).apply(null,arguments)};
var Ob=f.__sapp_html5_get_ask_leave_site=function(){return(Ob=f.__sapp_html5_get_ask_leave_site=f.asm.xb).apply(null,arguments)},Pb=f.__sapp_emsc_begin_drop=function(){return(Pb=f.__sapp_emsc_begin_drop=f.asm.yb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.zb).apply(null,arguments)};var Qb=f.__sapp_emsc_end_drop=function(){return(Qb=f.__sapp_emsc_end_drop=f.asm.Ab).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Bb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Cb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Db).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Eb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Fb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Gb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Hb).apply(null,arguments)};
var P=f._malloc=function(){return(P=f._malloc=f.asm.Ib).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Jb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Kb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Lb).apply(null,arguments)},Tb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Ub(){Tb||Vb();Tb||(K=Ub)};
function Vb(a){function b(){if(!Tb&&(Tb=!0,f.calledRun=!0,!ma)){Oa(Ca);Oa(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Wb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));F[h>>2]=va(aa);for(var g=1;g<e;g++)F[(h>>2)+g]=va(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ma=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Oa(Fa)}}a=a||r;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Oa(Ba);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Vb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();
var Wb=!0;f.noInitialRun&&(Wb=!1);Vb();
