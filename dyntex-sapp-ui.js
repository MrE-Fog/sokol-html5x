
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
function Aa(){var a=la.buffer;wa=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var I,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];Ca.push({qc:function(){Ga()}});function Ha(){var a=f.preRun.shift();Ba.unshift(a)}var J=0,Ia=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function x(a){if(f.onAbort)f.onAbort(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var L="dyntex-sapp-ui.wasm";if(!Ka()){var La=L;L=f.locateFile?f.locateFile(La,v):v+La}
function Ma(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Na(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Ja("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.qc;"number"===typeof c?void 0===b.Zb?I.get(c)():I.get(c)(b.Zb):c(void 0===b.Zb?null:b.Zb)}}}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=M.length-1;0<=a;--a)Ta(a);M=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.Xb)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.Jc.apply(null,b.vc)}}var M=[];function Ta(a){var b=M[a];b.target.removeEventListener(b.Pb,b.oc,b.Qb);M.splice(a,1)}
function N(a){function b(d){++Ra;Wa=a;Va();a.Tb(d);Va();--Ra}if(a.Rb)a.oc=b,a.target.addEventListener(a.Pb,b,a.Qb),M.push(a),Xa||(Ea.push(Sa),Xa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Pb==a.Pb&&Ta(c--)}var Xa,Wa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,e,h){Ya||(Ya=P(164));a={target:O(a),Xb:!0,Pb:h,Rb:d,Tb:function(g){var m=Ya,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(e,m,b)&&g.preventDefault()},Qb:c};N(a)}
function gb(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=eb(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function Q(a,b,c,d,e,h){Za||(Za=P(64));a=O(a);N({target:a,Xb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Pb:h,Rb:d,Tb:function(g){g=g||event;gb(Za,g,a);I.get(d)(e,Za,b)&&g.preventDefault()},Qb:c})}
function hb(a,b,c,d,e){$a||($a=P(260));N({target:a,Pb:e,Rb:d,Tb:function(h){h=h||event;var g=$a,m=document.pointerLockElement||document.ac||document.cc||document.bc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&h.preventDefault()},Qb:c})}function ib(a,b,c,d,e){N({target:a,Pb:e,Rb:d,Tb:function(h){h=h||event;I.get(d)(38,0,b)&&h.preventDefault()},Qb:c})}
function jb(a,b,c,d){ab||(ab=P(36));a=O(a);N({target:a,Pb:"resize",Rb:d,Tb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=ab;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&e.preventDefault()}}},Qb:c})}
function kb(a,b,c,d,e,h){bb||(bb=P(1684));a=O(a);N({target:a,Xb:"touchstart"==h||"touchend"==h,Pb:h,Rb:d,Tb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.sc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].tc=1;n=bb;q=n>>2;F[q+1]=g.ctrlKey;F[q+2]=g.shiftKey;F[q+3]=g.altKey;F[q+4]=g.metaKey;q+=5;var Z=eb(a),rb=0;for(p in m){var B=m[p];F[q]=B.identifier;F[q+1]=B.screenX;F[q+2]=B.screenY;
F[q+3]=B.clientX;F[q+4]=B.clientY;F[q+5]=B.pageX;F[q+6]=B.pageY;F[q+7]=B.sc;F[q+8]=B.tc;F[q+9]=B.clientX-Z.left;F[q+10]=B.clientY-Z.top;q+=13;if(31<++rb)break}F[n>>2]=rb;I.get(d)(e,n,b)&&g.preventDefault()},Qb:c})}function lb(a,b,c,d,e,h){a={target:O(a),Pb:h,Rb:d,Tb:function(g){g=g||event;I.get(d)(e,0,b)&&g.preventDefault()},Qb:c};N(a)}
function mb(a,b,c,d){cb||(cb=P(96));N({target:a,Xb:!0,Pb:"wheel",Rb:d,Tb:function(e){e=e||event;var h=cb;gb(h,e,a);H[h+64>>3]=e.deltaX;H[h+72>>3]=e.deltaY;H[h+80>>3]=e.deltaZ;F[h+88>>2]=e.deltaMode;I.get(d)(9,h,b)&&e.preventDefault()},Qb:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.xc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function sb(a){a.Cc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function tb(a){a.Ec=a.getExtension("WEBGL_multi_draw")}var ub=1,vb=[],R=[],wb=[],xb=[],yb=[],S=[],T=[],zb=[],Ab=[],Bb={},Cb={},Db={};function U(a){Eb||(Eb=a)}function V(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}
function Fb(a){a||(a=W);if(!a.rc){a.rc=!0;var b=a.Yb;nb(b);ob(b);pb(b);qb(b);sb(b);b.yc=b.getExtension("EXT_disjoint_timer_query");tb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Eb,W,Gb=["default","low-power","high-performance"];function Hb(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),g=h&&V(d);h?(h.name=g,d[g]=h):U(1282);F[b+4*e>>2]=g}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){U(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}
function Jb(a){var b=ua(a)+1,c=P(b);C(a,D,c,b);return c}function Kb(a){a-=5120;return 0==a?pa:1==a?D:2==a?xa:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Lb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Mb(a,b,c,d,e){a=Kb(a);var h=Lb(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Y=[],X,Nb=new Float32Array(288),Ob=0;288>Ob;++Ob)Y[Ob]=Nb.subarray(0,Ob+1);
var Tb={ja:function(){return 0},fb:function(){return 0},hb:function(){},W:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ua:function(a,b,c){a=O(a);if(!a)return-4;a=eb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},cb:function(a,b,c){D.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},db:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},V:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},fa:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},da:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ea:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},ta:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},ia:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");
return 0},ha:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},_:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ac||document.body.cc||document.body.bc))return-1;a=O(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},Z:function(a,
b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ac||document.body.cc||document.body.bc))return-1;a=O(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},ab:function(a,b,c,d){jb(a,b,c,d);return 0},$:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},aa:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},ba:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},
ca:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},Y:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},X:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ga:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d),0):-1},J:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Gb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],fc:F[b+8],Dc:F[b+
9],ec:F[b+10],pc:F[b+11],Fc:F[b+12],Gc:F[b+13]};a=O(a);if(!a||b.pc)b=0;else if(a=1<b.fc?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=V(Ab),d={Bc:c,attributes:b,version:b.fc,Yb:a};a.canvas&&(a.canvas.uc=d);Ab[c]=d;("undefined"===typeof b.ec||b.ec)&&Fb(d);b=c}else b=0;return b},Aa:function(a,b){a=Ab[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(X);"OES_vertex_array_object"==b&&ob(X);"WEBGL_draw_buffers"==b&&pb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==
b&&qb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&sb(X);"WEBGL_multi_draw"==b&&tb(X);return!!a.Yb.getExtension(b)},La:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ga:function(a){W=Ab[a];f.wc=X=W&&W.Yb;return!a||X?0:-5},ka:function(){return 0},eb:function(a,b,c,d){a=Qa.Ac(a);b=Qa.zc(a,b,c);F[d>>2]=b;return 0},bb:function(){},gb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=F[b+8*h>>2],m=F[b+(8*h+4)>>2],n=0;n<m;n++){var p=D[g+n],
q=Pa[a];0===p||10===p?((1===a?ka:y)(ta(q,0)),q.length=0):q.push(p)}e+=m}F[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},E:function(a,b){X.attachShader(R[a],T[b])},c:function(a,b){35051==a?X.dc=b:35052==a&&(X.Sb=b);X.bindBuffer(a,vb[b])},h:function(a,b){X.bindFramebuffer(a,wb[b])},H:function(a,b){X.bindRenderbuffer(a,xb[b])},a:function(a,b){X.bindTexture(a,yb[b])},T:function(a){X.bindVertexArray(zb[a])},P:function(a,b,c,d){X.blendColor(a,b,c,d)},Q:function(a,b){X.blendEquationSeparate(a,b)},
R:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,e,h,g,m,n,p){X.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},K:function(a,b,c,d){2<=W.version?c?X.bufferData(a,D,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?D.subarray(c,c+b):b,d)},u:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,D,d,c):X.bufferSubData(a,b,D.subarray(d,d+c))},sb:function(a){X.clear(a)},A:function(a,b,c,d){X.clearColor(a,b,c,d)},sa:function(a){X.clearDepth(a)},tb:function(a){X.clearStencil(a)},j:function(a,b,c,d){X.colorMask(!!a,
!!b,!!c,!!d)},xa:function(a){X.compileShader(T[a])},Ia:function(a,b,c,d,e,h,g,m){2<=W.version?X.Sb?X.compressedTexImage2D(a,b,c,d,e,h,g,m):X.compressedTexImage2D(a,b,c,d,e,h,D,m,g):X.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+g):null)},Fa:function(a,b,c,d,e,h,g,m,n){X.Sb?X.compressedTexImage3D(a,b,c,d,e,h,g,m,n):X.compressedTexImage3D(a,b,c,d,e,h,g,D,n,m)},Da:function(){var a=V(R),b=X.createProgram();b.name=a;R[a]=b;return a},za:function(a){var b=V(T);T[b]=X.createShader(a);return b},M:function(a){X.cullFace(a)},
Sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=vb[d];e&&(X.deleteBuffer(e),e.name=0,vb[d]=null,d==X.dc&&(X.dc=0),d==X.Sb&&(X.Sb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=wb[d];e&&(X.deleteFramebuffer(e),e.name=0,wb[d]=null)}},y:function(a){if(a){var b=R[a];b?(X.deleteProgram(b),b.name=0,R[a]=null,Bb[a]=null):U(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=xb[d];e&&(X.deleteRenderbuffer(e),e.name=0,xb[d]=null)}},t:function(a){if(a){var b=T[a];b?(X.deleteShader(b),
T[a]=null):U(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=yb[d];e&&(X.deleteTexture(e),e.name=0,yb[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];X.deleteVertexArray(zb[d]);zb[d]=null}},x:function(a){X.depthFunc(a)},w:function(a){X.depthMask(!!a)},d:function(a){X.disable(a)},S:function(a){X.disableVertexAttribArray(a)},ib:function(a,b,c){X.drawArrays(a,b,c)},jb:function(a,b,c,d){X.drawElements(a,b,c,d)},g:function(a){X.enable(a)},pb:function(a){X.enableVertexAttribArray(a)},
N:function(a){X.frontFace(a)},L:function(a,b){Hb(a,b,"createBuffer",vb)},I:function(a,b){Hb(a,b,"createRenderbuffer",xb)},Ja:function(a,b){Hb(a,b,"createTexture",yb)},Oa:function(a,b){Hb(a,b,"createVertexArray",zb)},va:function(a,b){return X.getAttribLocation(R[a],E(b))},e:function(a,b){Ib(a,b)},Ba:function(a,b,c,d){a=X.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},D:function(a,b,c){if(c)if(a>=ub)U(1281);else{var d=Bb[a];if(d)if(35716==b)a=X.getProgramInfoLog(R[a]),
null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.$b;else if(35722==b){if(-1==d.Ub){a=R[a];var e=X.getProgramParameter(a,35721);for(b=d.Ub=0;b<e;++b)d.Ub=Math.max(d.Ub,X.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Ub}else if(35381==b){if(-1==d.Vb)for(a=R[a],e=X.getProgramParameter(a,35382),b=d.Vb=0;b<e;++b)d.Vb=Math.max(d.Vb,X.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Vb}else F[c>>2]=X.getProgramParameter(R[a],b);else U(1282)}else U(1281)},wa:function(a,b,c,
d){a=X.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=X.getShaderParameter(T[a],b):U(1281)},Ua:function(a){if(Cb[a])return Cb[a];switch(a){case 7939:var b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Jb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
X.getParameter(a))||U(1280);b=Jb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Jb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Jb(b);break;default:return U(1280),0}return Cb[a]=b},Ta:function(a,b){if(2>W.version)return U(1282),0;var c=Db[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=
X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Jb(d)}),c=Db[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},n:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Bb[a]&&Bb[a].nc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ca:function(a){X.linkProgram(R[a]);var b=R[a];a=Bb[a]={nc:{},$b:0,Ub:-1,Vb:-1};for(var c=a.nc,d=X.getProgramParameter(b,35718),e=0;e<
d;++e){var h=X.getActiveUniform(b,e),g=h.name;a.$b=Math.max(a.$b,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=X.getUniformLocation(b,g);if(m){var n=V(S);c[g]=[h.size,n];S[n]=m;for(var p=1;p<h.size;++p)m=X.getUniformLocation(b,g+"["+p+"]"),n=V(S),S[n]=m}}},O:function(a,b){X.polygonOffset(a,b)},s:function(a){X.readBuffer(a)},Ka:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},l:function(a,b,c,d){X.scissor(a,
b,c,d)},ya:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}X.shaderSource(T[a],e)},Na:function(a,b,c){X.stencilFunc(a,b,c)},ra:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},v:function(a){X.stencilMask(a)},Ma:function(a,b,c){X.stencilOp(a,b,c)},qa:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Ha:function(a,b,c,d,e,h,g,m,n){if(2<=W.version)if(X.Sb)X.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Kb(m);X.texImage2D(a,b,c,d,e,h,g,m,p,n>>Lb(p))}else X.texImage2D(a,
b,c,d,e,h,g,m,null);else X.texImage2D(a,b,c,d,e,h,g,m,n?Mb(m,g,d,e,n):null)},Ea:function(a,b,c,d,e,h,g,m,n,p){if(X.Sb)X.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Kb(n);X.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>Lb(q))}else X.texImage3D(a,b,c,d,e,h,g,m,n,null)},F:function(a,b,c){X.texParameterf(a,b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},oa:function(a,b,c,d,e,h,g,m,n){if(2<=W.version)if(X.Sb)X.texSubImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Kb(m);X.texSubImage2D(a,b,c,d,e,h,g,m,p,n>>Lb(p))}else X.texSubImage2D(a,
b,c,d,e,h,g,m,null);else p=null,n&&(p=Mb(m,g,e,h,n)),X.texSubImage2D(a,b,c,d,e,h,g,m,p)},na:function(a,b,c,d,e,h,g,m,n,p,q){if(X.Sb)X.texSubImage3D(a,b,c,d,e,h,g,m,n,p,q);else if(q){var Z=Kb(p);X.texSubImage3D(a,b,c,d,e,h,g,m,n,p,Z,q>>Lb(Z))}else X.texSubImage3D(a,b,c,d,e,h,g,m,n,p,null)},ob:function(a,b,c){if(2<=W.version)X.uniform1fv(S[a],G,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);X.uniform1fv(S[a],d)}},C:function(a,b){X.uniform1i(S[a],
b)},nb:function(a,b,c){if(2<=W.version)X.uniform2fv(S[a],G,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);X.uniform2fv(S[a],d)}},mb:function(a,b,c){if(2<=W.version)X.uniform3fv(S[a],G,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);X.uniform3fv(S[a],d)}},lb:function(a,b,c){if(2<=W.version)X.uniform4fv(S[a],G,
c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);X.uniform4fv(S[a],d)}},kb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(S[a],!!c,G,d>>2,16*b);else{if(18>=b){var e=Y[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];
e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(S[a],!!c,e)}},k:function(a){X.useProgram(R[a])},qb:function(a,b){X.vertexAttribDivisor(a,b)},rb:function(a,b,c,d,e,h){X.vertexAttribPointer(a,b,c,!!d,e,h)},m:function(a,b,c,d){X.viewport(a,b,c,d)},$a:function(){f.hc=function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.hc)},_a:function(){f.mc=function(a){a=a.clipboardData.getData("text");
oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.mc)},Za:function(a){f.Hc=[];a=E(a);a=document.getElementById(a);f.ic=function(b){b.stopPropagation();b.preventDefault()};f.jc=function(b){b.stopPropagation();b.preventDefault()};f.kc=function(b){b.stopPropagation();b.preventDefault()};f.lc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Ic=c;Qb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Rb(b.clientX,
b.clientY)};a.addEventListener("dragenter",f.ic,!1);a.addEventListener("dragleave",f.jc,!1);a.addEventListener("dragover",f.kc,!1);a.addEventListener("drop",f.lc,!1)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},ub:function(a){a=E(a);f.Wb=document.getElementById(a);f.Wb||console.log("sokol_app.h: invalid target:"+
a);f.Wb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ya:function(){window.removeEventListener("beforeunload",f.hc)},Xa:function(){window.removeEventListener("paste",f.mc)},Wa:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.ic);a.removeEventListener("dragleave",f.jc);a.removeEventListener("dragover",f.kc);a.removeEventListener("drop",f.lc)},z:function(){f.Wb&&f.Wb.requestPointerLock&&f.Wb.requestPointerLock()},o:function(){document.getElementById("_sokol_app_input_element").blur()},
Va:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ma:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.vb;Aa();I=f.asm.Ob;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ia&&(clearInterval(Ia),Ia=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Tb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ga=f.___wasm_call_ctors=function(){return(Ga=f.___wasm_call_ctors=f.asm.wb).apply(null,arguments)},Sb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Sb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.xb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.yb).apply(null,arguments)};
var Pb=f.__sapp_html5_get_ask_leave_site=function(){return(Pb=f.__sapp_html5_get_ask_leave_site=f.asm.zb).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Ab).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Bb).apply(null,arguments)};var Rb=f.__sapp_emsc_end_drop=function(){return(Rb=f.__sapp_emsc_end_drop=f.asm.Cb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Db).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Eb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Fb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Gb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Hb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Ib).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Jb).apply(null,arguments)};
var P=f._malloc=function(){return(P=f._malloc=f.asm.Kb).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Lb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Mb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Nb).apply(null,arguments)},Ub;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Vb(){Ub||Wb();Ub||(K=Vb)};
function Wb(a){function b(){if(!Ub&&(Ub=!0,f.calledRun=!0,!ma)){Oa(Ca);Oa(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Xb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));F[h>>2]=va(aa);for(var g=1;g<e;g++)F[(h>>2)+g]=va(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ma=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Oa(Fa)}}a=a||r;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Oa(Ba);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Wb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();
var Xb=!0;f.noInitialRun&&(Xb=!1);Wb();
