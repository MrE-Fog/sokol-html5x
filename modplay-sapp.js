
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},l;for(l in e)e.hasOwnProperty(l)&&(g[l]=e[l]);var r=[],t="./this.program";function u(a,b){throw b;}var v=!1,x=!1,y=!1,aa=!1;v="object"===typeof window;x="function"===typeof importScripts;y="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;aa=!v&&!y&&!x;var z="",ba,ca,A,da,ea;
if(y)z=x?require("path").dirname(z)+"/":__dirname+"/",ba=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);return da.readFileSync(a,b?null:"utf8")},A=function(a){a=ba(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(t=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof fa))throw a;}),process.on("unhandledRejection",
B),u=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(aa)"undefined"!=typeof read&&(ba=function(a){return read(a)}),A=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(u=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(v||x)x?z=self.location.href:"undefined"!==typeof document&&document.currentScript&&(z=document.currentScript.src),z=0!==z.indexOf("blob:")?z.substr(0,z.lastIndexOf("/")+1):"",ba=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},x&&(A=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
ca=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ha=e.print||console.log.bind(console),C=e.printErr||console.warn.bind(console);for(l in g)g.hasOwnProperty(l)&&(e[l]=g[l]);g=null;e.arguments&&(r=e.arguments);e.thisProgram&&(t=e.thisProgram);e.quit&&(u=e.quit);var D;e.wasmBinary&&(D=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;
"object"!==typeof WebAssembly&&B("no native wasm support detected");var ia,ja=!1;function assert(a,b){a||B("Assertion failed: "+b)}function ka(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function la(a,b,c){var d={string:function(m){var p=0;if(null!==m&&void 0!==m&&0!==m){var q=(m.length<<2)+1;p=E(q);F(m,G,p,q)}return p},array:function(m){var p=E(m.length);H.set(m,p);return p}};a=ka(a);var f=[],h=0;if(c)for(var k=0;k<c.length;k++){var n=d[b[k]];n?(0===h&&(h=ma()),f[k]=n(c[k])):f[k]=c[k]}a.apply(null,f);0!==h&&na(h)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|k:(f&7)<<18|h<<12|k<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function I(a){return a?pa(G,a,void 0):""}
function F(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var k=a.charCodeAt(++f);h=65536+((h&1023)<<10)|k&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=E(b);F(a,H,c,b);return c}var sa,H,G,ta,J,ua,K;
function va(){var a=ia.buffer;sa=a;e.HEAP8=H=new Int8Array(a);e.HEAP16=ta=new Int16Array(a);e.HEAP32=J=new Int32Array(a);e.HEAPU8=G=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=ua=new Float32Array(a);e.HEAPF64=K=new Float64Array(a)}var L,wa=[],xa=[],ya=[],za=[],Aa=[];xa.push({Fb:function(){Ba()}});function Ca(){var a=e.preRun.shift();wa.unshift(a)}var M=0,Da=null,N=null;e.preloadedImages={};e.preloadedAudios={};
function B(a){if(e.onAbort)e.onAbort(a);C(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ea(a){var b=O;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Fa(){return Ea("data:application/octet-stream;base64,")}var O="modplay-sapp.wasm";if(!Fa()){var Ga=O;O=e.locateFile?e.locateFile(Ga,z):z+Ga}
function Ha(){var a=O;try{if(a==O&&D)return new Uint8Array(D);if(A)return A(a);throw"both async and sync fetching of the wasm failed";}catch(b){B(b)}}
function Ia(){if(!D&&(v||x)){if("function"===typeof fetch&&!Ea("file://"))return fetch(O,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+O+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(ca)return new Promise(function(a,b){ca(O,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Fb;"number"===typeof c?void 0===b.pb?L.get(c)():L.get(c)(b.pb):c(void 0===b.pb?null:b.pb)}}}var Ka=[null,[],[]],La={},Ma=0;function Na(){for(var a=P.length-1;0<=a;--a)Oa(a);P=[];Pa=[]}var Pa=[];function Qa(){if(Ma&&Ra.nb)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Yb.apply(null,b.Kb)}}var P=[];function Oa(a){var b=P[a];b.target.removeEventListener(b.hb,b.Db,b.ib);P.splice(a,1)}
function Q(a){function b(d){++Ma;Ra=a;Qa();a.lb(d);Qa();--Ma}if(a.kb)a.Db=b,a.target.addEventListener(a.hb,b,a.ib),P.push(a),Sa||(za.push(Na),Sa=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].hb==a.hb&&Oa(c--)}var Sa,Ra,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function R(a){a=2<a?I(a):a;return Za[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function ab(a,b,c,d,f,h){Ta||(Ta=S(164));a={target:R(a),nb:!0,hb:h,kb:d,lb:function(k){var n=Ta,m=n>>2;J[m]=k.location;J[m+1]=k.ctrlKey;J[m+2]=k.shiftKey;J[m+3]=k.altKey;J[m+4]=k.metaKey;J[m+5]=k.repeat;J[m+6]=k.charCode;J[m+7]=k.keyCode;J[m+8]=k.which;F(k.key||"",G,n+36,32);F(k.code||"",G,n+68,32);F(k.char||"",G,n+100,32);F(k.locale||"",G,n+132,32);L.get(d)(f,n,b)&&k.preventDefault()},ib:c};Q(a)}
function bb(a,b,c){a>>=2;J[a]=b.screenX;J[a+1]=b.screenY;J[a+2]=b.clientX;J[a+3]=b.clientY;J[a+4]=b.ctrlKey;J[a+5]=b.shiftKey;J[a+6]=b.altKey;J[a+7]=b.metaKey;ta[2*a+16]=b.button;ta[2*a+17]=b.buttons;J[a+9]=b.movementX;J[a+10]=b.movementY;c=$a(c);J[a+11]=b.clientX-c.left;J[a+12]=b.clientY-c.top}function T(a,b,c,d,f,h){Ua||(Ua=S(64));a=R(a);Q({target:a,nb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,hb:h,kb:d,lb:function(k){k=k||event;bb(Ua,k,a);L.get(d)(f,Ua,b)&&k.preventDefault()},ib:c})}
function cb(a,b,c,d,f){Va||(Va=S(260));Q({target:a,hb:f,kb:d,lb:function(h){h=h||event;var k=Va,n=document.pointerLockElement||document.tb||document.vb||document.ub;J[k>>2]=!!n;var m=n&&n.id?n.id:"";F(n?n==window?"#window":n==screen?"#screen":n&&n.nodeName?n.nodeName:"":"",G,k+4,128);F(m,G,k+132,128);L.get(d)(20,k,b)&&h.preventDefault()},ib:c})}function db(a,b,c,d,f){Q({target:a,hb:f,kb:d,lb:function(h){h=h||event;L.get(d)(38,0,b)&&h.preventDefault()},ib:c})}
function eb(a,b,c,d){Wa||(Wa=S(36));a=R(a);Q({target:a,hb:"resize",kb:d,lb:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var k=Wa;J[k>>2]=f.detail;J[k+4>>2]=h.clientWidth;J[k+8>>2]=h.clientHeight;J[k+12>>2]=innerWidth;J[k+16>>2]=innerHeight;J[k+20>>2]=outerWidth;J[k+24>>2]=outerHeight;J[k+28>>2]=pageXOffset;J[k+32>>2]=pageYOffset;L.get(d)(10,k,b)&&f.preventDefault()}}},ib:c})}
function fb(a,b,c,d,f,h){Xa||(Xa=S(1684));a=R(a);Q({target:a,nb:"touchstart"==h||"touchend"==h,hb:h,kb:d,lb:function(k){for(var n={},m=k.touches,p=0;p<m.length;++p){var q=m[p];n[q.identifier]=q}m=k.changedTouches;for(p=0;p<m.length;++p)q=m[p],q.Hb=1,n[q.identifier]=q;m=k.targetTouches;for(p=0;p<m.length;++p)n[m[p].identifier].Ib=1;m=Xa;q=m>>2;J[q+1]=k.ctrlKey;J[q+2]=k.shiftKey;J[q+3]=k.altKey;J[q+4]=k.metaKey;q+=5;var gb=$a(a),hb=0;for(p in n){var w=n[p];J[q]=w.identifier;J[q+1]=w.screenX;J[q+2]=
w.screenY;J[q+3]=w.clientX;J[q+4]=w.clientY;J[q+5]=w.pageX;J[q+6]=w.pageY;J[q+7]=w.Hb;J[q+8]=w.Ib;J[q+9]=w.clientX-gb.left;J[q+10]=w.clientY-gb.top;q+=13;if(31<++hb)break}J[m>>2]=hb;L.get(d)(f,m,b)&&k.preventDefault()},ib:c})}function ib(a,b,c,d,f,h){a={target:R(a),hb:h,kb:d,lb:function(k){k=k||event;L.get(d)(f,0,b)&&k.preventDefault()},ib:c};Q(a)}
function jb(a,b,c,d){Ya||(Ya=S(96));Q({target:a,nb:!0,hb:"wheel",kb:d,lb:function(f){f=f||event;var h=Ya;bb(h,f,a);K[h+64>>3]=f.deltaX;K[h+72>>3]=f.deltaY;K[h+80>>3]=f.deltaZ;J[h+88>>2]=f.deltaMode;L.get(d)(9,h,b)&&f.preventDefault()},ib:c})}var U;y?U=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?U=dateNow:U=function(){return performance.now()};
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,k){b.drawElementsInstancedANGLE(c,d,f,h,k)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.Mb=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ob(a){a.Rb=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function pb(a){a.Tb=a.getExtension("WEBGL_multi_draw")}var qb=1,rb=[],sb=[],tb=[],ub=[],vb=[],V=[],wb=[],xb={},yb={};function W(a){zb||(zb=a)}function Ab(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a){a||(a=X);if(!a.Gb){a.Gb=!0;var b=a.ob;kb(b);lb(b);mb(b);nb(b);ob(b);b.Nb=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var zb,X,Cb=["default","low-power","high-performance"],Db={};
function Eb(){if(!Fb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:t||"./this.program"},b;for(b in Db)a[b]=Db[b];var c=[];for(b in a)c.push(b+"="+a[b]);Fb=c}return Fb}var Fb;
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)J[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);C("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);C("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}J[b>>2]=c}else W(1281)}
function Z(a){var b=qa(a)+1,c=S(b);F(a,G,c,b);return c}
var Y,Mb={p:function(){return 0},$:function(){return 0},ba:function(){},V:function(){B()},z:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},R:function(a,b,c){a=R(a);if(!a)return-4;a=$a(a);K[b>>3]=a.width;K[c>>3]=a.height;return 0},T:function(a,b,c){G.copyWithin(a,b,b+c)},ya:function(a,b){function c(d){L.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},U:function(a){var b=G.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,
a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ia.grow(Math.min(2147483648,d)-sa.byteLength+65535>>>16);va();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},y:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},K:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},I:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},J:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},Q:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},N:function(a,b,c,d){T(a,b,c,
d,33,"mouseenter");return 0},M:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},O:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},P:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},D:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.tb||document.body.vb||document.body.ub))return-1;a=R(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");
return 0},C:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.tb||document.body.vb||document.body.ub))return-1;a=R(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Ma:function(a,b,c,d){eb(a,b,c,d);return 0},E:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},F:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},G:function(a,b,c,d){fb(a,b,c,d,24,
"touchmove");return 0},H:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},B:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},A:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},L:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},Z:function(a){for(var b=U();U()-b<a;);},s:function(a,b){b>>=2;b={alpha:!!J[b],depth:!!J[b+1],stencil:!!J[b+2],antialias:!!J[b+3],premultipliedAlpha:!!J[b+4],preserveDrawingBuffer:!!J[b+5],powerPreference:Cb[J[b+
6]],failIfMajorPerformanceCaveat:!!J[b+7],wb:J[b+8],Sb:J[b+9],sb:J[b+10],Eb:J[b+11],Ub:J[b+12],Vb:J[b+13]};a=R(a);if(!a||b.Eb)b=0;else if(a=1<b.wb?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=Ab(wb),d={Qb:c,attributes:b,version:b.wb,ob:a};a.canvas&&(a.canvas.Jb=d);wb[c]=d;("undefined"===typeof b.sb||b.sb)&&Bb(d);b=c}else b=0;return b},W:function(a,b){a=wb[a];b=I(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(Y);"OES_vertex_array_object"==b&&lb(Y);"WEBGL_draw_buffers"==
b&&mb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ob(Y);"WEBGL_multi_draw"==b&&pb(Y);return!!a.ob.getExtension(b)},ta:function(a){a>>=2;for(var b=0;14>b;++b)J[a+b]=0;J[a]=J[a+1]=J[a+3]=J[a+4]=J[a+8]=J[a+10]=1},da:function(a){X=wb[a];e.Lb=Y=X&&X.ob;return!a||Y?0:-5},X:function(a,b){var c=0;Eb().forEach(function(d,f){var h=b+c;f=J[a+4*f>>2]=h;for(h=0;h<d.length;++h)H[f++>>0]=d.charCodeAt(h);H[f>>0]=0;c+=d.length+1});return 0},
Y:function(a,b){var c=Eb();J[a>>2]=c.length;var d=0;c.forEach(function(f){d+=f.length+1});J[b>>2]=d;return 0},q:function(){return 0},_:function(a,b,c,d){a=La.Pb(a);b=La.Ob(a,b,c);J[d>>2]=b;return 0},S:function(){},aa:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var k=J[b+8*h>>2],n=J[b+(8*h+4)>>2],m=0;m<n;m++){var p=G[k+m],q=Ka[a];0===p||10===p?((1===a?ha:C)(pa(q,0)),q.length=0):q.push(p)}f+=n}J[d>>2]=f;return 0},b:function(a){Y.activeTexture(a)},g:function(a,b){35051==a?Y.qb=b:35052==a&&(Y.rb=b);
Y.bindBuffer(a,rb[b])},d:function(a,b){Y.bindFramebuffer(a,tb[b])},a:function(a,b){Y.bindTexture(a,vb[b])},w:function(a){Y.bindVertexArray(V[a])},qa:function(a,b,c,d){Y.blendColor(a,b,c,d)},ra:function(a,b){Y.blendEquationSeparate(a,b)},sa:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},h:function(a,b,c,d,f,h,k,n,m,p){Y.blitFramebuffer(a,b,c,d,f,h,k,n,m,p)},ha:function(a){Y.clear(a)},ka:function(a,b,c,d){Y.clearColor(a,b,c,d)},ja:function(a){Y.clearDepth(a)},ia:function(a){Y.clearStencil(a)},m:function(a,
b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},na:function(a){Y.cullFace(a)},Da:function(a,b){for(var c=0;c<a;c++){var d=J[b+4*c>>2],f=rb[d];f&&(Y.deleteBuffer(f),f.name=0,rb[d]=null,d==Y.qb&&(Y.qb=0),d==Y.rb&&(Y.rb=0))}},f:function(a,b){for(var c=0;c<a;++c){var d=J[b+4*c>>2],f=tb[d];f&&(Y.deleteFramebuffer(f),f.name=0,tb[d]=null)}},Ba:function(a){if(a){var b=sb[a];b?(Y.deleteProgram(b),b.name=0,sb[a]=null):W(1281)}},x:function(a,b){for(var c=0;c<a;c++){var d=J[b+4*c>>2],f=ub[d];f&&(Y.deleteRenderbuffer(f),
f.name=0,ub[d]=null)}},Ca:function(a,b){for(var c=0;c<a;c++){var d=J[b+4*c>>2],f=vb[d];f&&(Y.deleteTexture(f),f.name=0,vb[d]=null)}},za:function(a,b){for(var c=0;c<a;c++){var d=J[b+4*c>>2];Y.deleteVertexArray(V[d]);V[d]=null}},v:function(a){Y.depthFunc(a)},u:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},wa:function(a){Y.disableVertexAttribArray(a)},n:function(a){Y.enable(a)},oa:function(a){Y.frontFace(a)},xa:function(a,b){for(var c=0;c<a;c++){var d=Y.createVertexArray(),f=d&&Ab(V);d?(d.name=
f,V[f]=d):W(1282);J[b+4*c>>2]=f}},c:function(a,b){Gb(a,b)},Fa:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return W(1280),0}return xb[a]=b},Ea:function(a,b){if(2>X.version)return W(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=yb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},pa:function(a,b){Y.polygonOffset(a,b)},i:function(a){Y.readBuffer(a)},
la:function(a,b,c,d){Y.scissor(a,b,c,d)},va:function(a,b,c){Y.stencilFunc(a,b,c)},t:function(a){Y.stencilMask(a)},ua:function(a,b,c){Y.stencilOp(a,b,c)},Aa:function(a){Y.useProgram(sb[a])},ma:function(a,b,c,d){Y.viewport(a,b,c,d)},La:function(){e.xb=function(a){0!=Hb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.xb)},Ka:function(){e.Cb=function(a){a=a.clipboardData.getData("text");la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Cb)},
Ja:function(a){e.Wb=[];a=I(a);a=document.getElementById(a);e.yb=function(b){b.stopPropagation();b.preventDefault()};e.zb=function(b){b.stopPropagation();b.preventDefault()};e.Ab=function(b){b.stopPropagation();b.preventDefault()};e.Bb=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.Xb=c;Ib(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Jb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.yb,!1);a.addEventListener("dragleave",
e.zb,!1);a.addEventListener("dragover",e.Ab,!1);a.addEventListener("drop",e.Bb,!1)},l:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Kb()});document.body.append(a)},k:function(){document.getElementById("_sokol_app_input_element").focus()},Na:function(a){a=I(a);e.mb=document.getElementById(a);e.mb||console.log("sokol_app.h: invalid target:"+a);e.mb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Ia:function(){window.removeEventListener("beforeunload",e.xb)},Ha:function(){window.removeEventListener("paste",e.Cb)},Ga:function(a){a=I(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.yb);a.removeEventListener("dragleave",e.zb);a.removeEventListener("dragover",e.Ab);a.removeEventListener("drop",e.Bb)},o:function(){e.mb&&e.mb.requestPointerLock&&e.mb.requestPointerLock()},j:function(){document.getElementById("_sokol_app_input_element").blur()},ea:function(){return e.jb?e.jb.bufferSize:
0},ga:function(a,b,c){e.gb=null;e.jb=null;"undefined"!==typeof AudioContext?e.gb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.gb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.gb=null,console.log("sokol_audio.h: no WebAudio support"));return e.gb?(console.log("sokol_audio.h: sample rate ",e.gb.sampleRate),e.jb=e.gb.createScriptProcessor(c,0,b),e.jb.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Lb(f);if(h)for(var k=
d.outputBuffer.numberOfChannels,n=0;n<k;n++)for(var m=d.outputBuffer.getChannelData(n),p=0;p<f;p++)m[p]=ua[(h>>2)+(k*p+n)]},e.jb.connect(e.gb.destination),a=function(){e.gb&&"suspended"===e.gb.state&&e.gb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},fa:function(){return e.gb?e.gb.sampleRate:0},r:function(){null!==e.gb&&(e.jb&&e.jb.disconnect(),e.gb.close(),e.gb=null,e.jb=null)},ca:function(a){var b=
Date.now()/1E3|0;a&&(J[a>>2]=b);return b}};
(function(){function a(f){e.asm=f.exports;ia=e.asm.Oa;va();L=e.asm.fb;M--;e.monitorRunDependencies&&e.monitorRunDependencies(M);0==M&&(null!==Da&&(clearInterval(Da),Da=null),N&&(f=N,N=null,f()))}function b(f){a(f.instance)}function c(f){return Ia().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){C("failed to asynchronously prepare wasm: "+h);B(h)})}var d={a:Mb};M++;e.monitorRunDependencies&&e.monitorRunDependencies(M);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return C("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return D||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||Ea("file://")||"function"!==typeof fetch?c(b):fetch(O,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){C("wasm streaming compile failed: "+h);C("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ba=e.___wasm_call_ctors=function(){return(Ba=e.___wasm_call_ctors=e.asm.Pa).apply(null,arguments)},Kb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Kb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Qa).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Ra).apply(null,arguments)};
var Hb=e.__sapp_html5_get_ask_leave_site=function(){return(Hb=e.__sapp_html5_get_ask_leave_site=e.asm.Sa).apply(null,arguments)},Ib=e.__sapp_emsc_begin_drop=function(){return(Ib=e.__sapp_emsc_begin_drop=e.asm.Ta).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Ua).apply(null,arguments)};var Jb=e.__sapp_emsc_end_drop=function(){return(Jb=e.__sapp_emsc_end_drop=e.asm.Va).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.Wa).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Xa).apply(null,arguments)};var Lb=e.__saudio_emsc_pull=function(){return(Lb=e.__saudio_emsc_pull=e.asm.Ya).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Za).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm._a).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.$a).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.ab).apply(null,arguments)};
var S=e._malloc=function(){return(S=e._malloc=e.asm.bb).apply(null,arguments)},ma=e.stackSave=function(){return(ma=e.stackSave=e.asm.cb).apply(null,arguments)},na=e.stackRestore=function(){return(na=e.stackRestore=e.asm.db).apply(null,arguments)},E=e.stackAlloc=function(){return(E=e.stackAlloc=e.asm.eb).apply(null,arguments)},Nb;function fa(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}N=function Ob(){Nb||Pb();Nb||(N=Ob)};
function Pb(a){function b(){if(!Nb&&(Nb=!0,e.calledRun=!0,!ja)){Ja(xa);Ja(ya);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Qb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=E(4*(f+1));J[h>>2]=ra(t);for(var k=1;k<f;k++)J[(h>>2)+k]=ra(c[k-1]);J[(h>>2)+f]=0;try{var n=d(f,h);if(!noExitRuntime||0!==n){if(!noExitRuntime){if(e.onExit)e.onExit(n);ja=!0}u(n,new fa(n))}}catch(m){m instanceof fa||("unwind"==m?noExitRuntime=!0:((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),C("exception thrown: "+
c),u(1,m)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Aa.unshift(c);Ja(Aa)}}a=a||r;if(!(0<M)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ca();Ja(wa);0<M||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Pb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Qb=!0;e.noInitialRun&&(Qb=!1);Pb();
