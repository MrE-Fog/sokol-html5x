
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program";function k(a,b){throw b;}var ea="object"===typeof window,l="function"===typeof importScripts,q="",fa,t,u,fs,ha,ia;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",ia=function(){fs||(fs=require("fs"),ha=require("path"))},fa=function(a,b){ia();a=ha.normalize(a);return fs.readFileSync(a,b?null:"utf8")},u=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=function(a,b,c){ia();a=ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof w))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=function(a,b){if(noExitRuntime||0<ja)throw process.exitCode=a,b;b instanceof w||x("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),
q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ka=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(k=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1;
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=z(r);A(n,B,p,r)}return p},array:function(n){var p=z(n.length);C.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?sa(B,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=z(b);A(a,C,c,b);return c}var va,C,B,E,wa,F,xa,G,H;
function ya(){var a=ma.buffer;va=a;f.HEAP8=C=new Int8Array(a);f.HEAP16=E=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var za,Aa=[],Ba=[],Ca=[],Da=[],Ea=[],ja=0;function Fa(){var a=f.preRun.shift();Aa.unshift(a)}var I=0,Ga=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function la(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ha(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="triangle-sapp-ui.wasm";if(!Ha()){var Ia=K;K=f.locateFile?f.locateFile(Ia,q):q+Ia}function Ja(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function Ka(){if(!y&&(ea||l)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(t)return new Promise(function(a,b){t(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Ic;"number"===typeof c?void 0===b.ec?L(c)():L(c)(b.ec):c(void 0===b.ec?null:b.ec)}}}var Ma=[];function L(a){var b=Ma[a];b||(a>=Ma.length&&(Ma.length=a+1),Ma[a]=b=za.get(a));return b}var Na=[null,[],[]],Oa={},Pa=0;function Qa(){for(var a=N.length-1;0<=a;--a)Ra(a);N=[];Sa=[]}var Sa=[];function Ta(){if(Pa&&Ua.$b)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Sc.apply(null,b.Ec)}}var N=[];
function Ra(a){var b=N[a];b.target.removeEventListener(b.Tb,b.Ac,b.Ub);N.splice(a,1)}function O(a){function b(d){++Pa;Ua=a;Ta();a.Wb(d);Ta();--Pa}if(a.Vb)a.Ac=b,a.target.addEventListener(a.Tb,b,a.Ub),N.push(a),Va||(Da.push(Qa),Va=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Tb==a.Tb&&Ra(c--)}function Wa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Va,Ua,Xa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?D(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function fb(a,b,c,d,e,h){Xa||(Xa=Q(256));a={target:P(a),Tb:h,Vb:d,Wb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Xa;A(Wa(g.target),B,n+0,128);A(m,B,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Ub:c};O(a)}
function gb(a,b,c,d,e,h){Ya||(Ya=Q(176));a={target:P(a),$b:!0,Tb:h,Vb:d,Wb:function(g){var m=Ya;H[m>>3]=g.timeStamp;var n=m>>2;F[n+2]=g.location;F[n+3]=g.ctrlKey;F[n+4]=g.shiftKey;F[n+5]=g.altKey;F[n+6]=g.metaKey;F[n+7]=g.repeat;F[n+8]=g.charCode;F[n+9]=g.keyCode;F[n+10]=g.which;A(g.key||"",B,m+44,32);A(g.code||"",B,m+76,32);A(g.char||"",B,m+108,32);A(g.locale||"",B,m+140,32);L(d)(e,m,b)&&g.preventDefault()},Ub:c};O(a)}
function hb(a,b,c){H[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;E[2*a+20]=b.button;E[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=eb(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function R(a,b,c,d,e,h){Za||(Za=Q(72));a=P(a);O({target:a,$b:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Tb:h,Vb:d,Wb:function(g){g=g||event;hb(Za,g,a);L(d)(e,Za,b)&&g.preventDefault()},Ub:c})}function ib(a,b,c,d,e){$a||($a=Q(260));O({target:a,Tb:e,Vb:d,Wb:function(h){h=h||event;var g=$a,m=document.pointerLockElement||document.hc||document.jc||document.ic;F[g>>2]=!!m;var n=m&&m.id?m.id:"";A(Wa(m),B,g+4,128);A(n,B,g+132,128);L(d)(20,g,b)&&h.preventDefault()},Ub:c})}
function jb(a,b,c,d,e){O({target:a,Tb:e,Vb:d,Wb:function(h){h=h||event;L(d)(38,0,b)&&h.preventDefault()},Ub:c})}
function kb(a,b,c,d){ab||(ab=Q(36));a=P(a);O({target:a,Tb:"resize",Vb:d,Wb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=ab;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Ub:c})}
function lb(a,b,c,d,e,h){bb||(bb=Q(1696));a=P(a);O({target:a,$b:"touchstart"==h||"touchend"==h,Tb:h,Vb:d,Wb:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.oc=m.qc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.oc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].qc=1;p=bb;H[p>>3]=g.timeStamp;var v=p>>2;F[v+3]=g.ctrlKey;F[v+4]=g.shiftKey;F[v+5]=g.altKey;F[v+6]=g.metaKey;v+=7;var M=eb(a),qb=0;for(r in n)if(m=
n[r],F[v]=m.identifier,F[v+1]=m.screenX,F[v+2]=m.screenY,F[v+3]=m.clientX,F[v+4]=m.clientY,F[v+5]=m.pageX,F[v+6]=m.pageY,F[v+7]=m.oc,F[v+8]=m.qc,F[v+9]=m.clientX-M.left,F[v+10]=m.clientY-M.top,v+=13,31<++qb)break;F[p+8>>2]=qb;L(d)(e,p,b)&&g.preventDefault()},Ub:c})}function mb(a,b,c,d,e,h){a={target:P(a),Tb:h,Vb:d,Wb:function(g){g=g||event;L(d)(e,0,b)&&g.preventDefault()},Ub:c};O(a)}
function nb(a,b,c,d){cb||(cb=Q(104));O({target:a,$b:!0,Tb:"wheel",Vb:d,Wb:function(e){e=e||event;var h=cb;hb(h,e,a);H[h+72>>3]=e.deltaX;H[h+80>>3]=e.deltaY;H[h+88>>3]=e.deltaZ;F[h+96>>2]=e.deltaMode;L(d)(9,h,b)&&e.preventDefault()},Ub:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function rb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function sb(a){a.Gc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function tb(a){a.Lc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ub(a){a.Nc=a.getExtension("WEBGL_multi_draw")}var vb=1,wb=[],S=[],xb=[],yb=[],zb=[],T=[],Ab=[],Bb=[],Cb={},Db={};function U(a){Eb||(Eb=a)}function Fb(a){for(var b=vb++,c=a.length;c<b;c++)a[c]=null;return b}
function Gb(a,b){a.nc||(a.nc=a.getContext,a.getContext=function(d,e){e=a.nc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.pc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Hb(c,b):0}function Hb(a,b){var c=Fb(Bb),d={Kc:c,attributes:b,version:b.pc,dc:a};a.canvas&&(a.canvas.Dc=d);Bb[c]=d;("undefined"===typeof b.mc||b.mc)&&Ib(d);return c}
function Ib(a){a||(a=V);if(!a.Cc){a.Cc=!0;var b=a.dc;ob(b);pb(b);rb(b);sb(b);tb(b);2<=a.version&&(b.lc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.lc)b.lc=b.getExtension("EXT_disjoint_timer_query");ub(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Eb,V,Jb=["default","low-power","high-performance"];
function Kb(a,b,c,d){for(var e=0;e<a;e++){var h=W[c](),g=h&&Fb(d);h?(h.name=g,d[g]=h):U(1282);F[b+4*e>>2]=g}}
function Lb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=W.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U(1282);return}c=2*(W.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=W.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}
function X(a){var b=ta(a)+1,c=Q(b);A(a,B,c,b);return c}function Mb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Nb(a){a-=5120;return 0==a?C:1==a?B:2==a?E:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Y(a){var b=W.zc;if(b){var c=b.Zb[a];"number"===typeof c&&(b.Zb[a]=c=W.getUniformLocation(b,b.xc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var Z=[],W,Ob=new Float32Array(288),Pb=0;288>Pb;++Pb)Z[Pb]=Ob.subarray(0,Pb+1);
var Ub={ga:function(){return 0},hb:function(){return 0},jb:function(){},T:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},pa:function(a,b,c){a=P(a);if(!a)return-4;a=eb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},eb:function(a,b,c){B.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-va.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},U:function(a,b,c,d){fb(a,b,c,d,12,"blur");return 0},Q:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},V:function(a,b,c,d){fb(a,b,c,d,13,"focus");return 0},ca:function(a,b,c,d){gb(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){gb(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){gb(a,b,c,d,3,"keyup");
return 0},oa:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},ja:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.hc||document.body.jc||document.body.ic))return-1;a=P(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");ib(a,b,
c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.hc||document.body.jc||document.body.ic))return-1;a=P(a);if(!a)return-4;jb(a,b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},cb:function(a,b,c,d){kb(a,b,c,d);return 0},Y:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");
return 0},Z:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){lb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){mb(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d),0):-1},I:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+
4],preserveDrawingBuffer:!!F[b+5],powerPreference:Jb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],pc:F[b+8],Mc:F[b+9],mc:F[b+10],Bc:F[b+11],Oc:F[b+12],Pc:F[b+13]};a=P(a);return!a||b.Bc?0:Gb(a,b)},wa:function(a,b){a=Bb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(W);"OES_vertex_array_object"==b&&pb(W);"WEBGL_draw_buffers"==b&&rb(W);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&sb(W);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&tb(W);"WEBGL_multi_draw"==
b&&ub(W);return!!a.dc.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Da:function(a){V=Bb[a];f.Fc=W=V&&V.dc;return!a||W?0:-5},ha:function(){return 0},gb:function(a,b,c,d){a=Oa.Jc(a);b=Oa.Hc(a,b,c);F[d>>2]=b;return 0},db:function(){},ib:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=F[b>>2],m=F[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=B[g+n],r=Na[a];0===p||10===p?((1===a?ka:x)(sa(r,0)),r.length=0):r.push(p)}e+=m}F[d>>2]=e;return 0},b:function(a){W.activeTexture(a)},
E:function(a,b){W.attachShader(S[a],T[b])},c:function(a,b){35051==a?W.kc=b:35052==a&&(W.Xb=b);W.bindBuffer(a,wb[b])},h:function(a,b){W.bindFramebuffer(a,xb[b])},Ha:function(a,b){W.bindRenderbuffer(a,yb[b])},a:function(a,b){W.bindTexture(a,zb[b])},O:function(a){W.bindVertexArray(Ab[a])},K:function(a,b,c,d){W.blendColor(a,b,c,d)},L:function(a,b){W.blendEquationSeparate(a,b)},M:function(a,b,c,d){W.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,g,m,n,p){W.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},Ja:function(a,
b,c,d){2<=V.version?c?W.bufferData(a,B,d,c,b):W.bufferData(a,b,d):W.bufferData(a,c?B.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=V.version?W.bufferSubData(a,b,B,d,c):W.bufferSubData(a,b,B.subarray(d,d+c))},wb:function(a){W.clear(a)},na:function(a,b,c,d){W.clearColor(a,b,c,d)},A:function(a){W.clearDepth(a)},xb:function(a){W.clearStencil(a)},j:function(a,b,c,d){W.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){W.compileShader(T[a])},Ca:function(a,b,c,d,e,h,g,m){2<=V.version?W.Xb?W.compressedTexImage2D(a,
b,c,d,e,h,g,m):W.compressedTexImage2D(a,b,c,d,e,h,B,m,g):W.compressedTexImage2D(a,b,c,d,e,h,m?B.subarray(m,m+g):null)},Aa:function(a,b,c,d,e,h,g,m,n){W.Xb?W.compressedTexImage3D(a,b,c,d,e,h,g,m,n):W.compressedTexImage3D(a,b,c,d,e,h,g,B,n,m)},ya:function(){var a=Fb(S),b=W.createProgram();b.name=a;b.cc=b.ac=b.bc=0;b.fc=1;S[a]=b;return a},ua:function(a){var b=Fb(T);T[b]=W.createShader(a);return b},G:function(a){W.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=wb[d];e&&(W.deleteBuffer(e),
e.name=0,wb[d]=null,d==W.kc&&(W.kc=0),d==W.Xb&&(W.Xb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=xb[d];e&&(W.deleteFramebuffer(e),e.name=0,xb[d]=null)}},y:function(a){if(a){var b=S[a];b?(W.deleteProgram(b),b.name=0,S[a]=null):U(1281)}},P:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=yb[d];e&&(W.deleteRenderbuffer(e),e.name=0,yb[d]=null)}},u:function(a){if(a){var b=T[a];b?(W.deleteShader(b),T[a]=null):U(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=zb[d];
e&&(W.deleteTexture(e),e.name=0,zb[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];W.deleteVertexArray(Ab[d]);Ab[d]=null}},x:function(a){W.depthFunc(a)},w:function(a){W.depthMask(!!a)},e:function(a){W.disable(a)},N:function(a){W.disableVertexAttribArray(a)},kb:function(a,b,c){W.drawArrays(a,b,c)},lb:function(a,b,c,d){W.drawArraysInstanced(a,b,c,d)},mb:function(a,b,c,d){W.drawElements(a,b,c,d)},nb:function(a,b,c,d,e){W.drawElementsInstanced(a,b,c,d,e)},g:function(a){W.enable(a)},
tb:function(a){W.enableVertexAttribArray(a)},H:function(a){W.frontFace(a)},Ka:function(a,b){Kb(a,b,"createBuffer",wb)},Ia:function(a,b){Kb(a,b,"createRenderbuffer",yb)},Ea:function(a,b){Kb(a,b,"createTexture",zb)},Oa:function(a,b){Kb(a,b,"createVertexArray",Ab)},qa:function(a,b){return W.getAttribLocation(S[a],D(b))},d:function(a,b){Lb(a,b)},va:function(a,b,c,d){a=W.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(F[c>>2]=b)},D:function(a,b,c){if(c)if(a>=vb)U(1281);
else if(a=S[a],35716==b)a=W.getProgramInfoLog(a),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b){if(!a.cc)for(b=0;b<W.getProgramParameter(a,35718);++b)a.cc=Math.max(a.cc,W.getActiveUniform(a,b).name.length+1);F[c>>2]=a.cc}else if(35722==b){if(!a.ac)for(b=0;b<W.getProgramParameter(a,35721);++b)a.ac=Math.max(a.ac,W.getActiveAttrib(a,b).name.length+1);F[c>>2]=a.ac}else if(35381==b){if(!a.bc)for(b=0;b<W.getProgramParameter(a,35382);++b)a.bc=Math.max(a.bc,W.getActiveUniformBlockName(a,
b).length+1);F[c>>2]=a.bc}else F[c>>2]=W.getProgramParameter(a,b);else U(1281)},ra:function(a,b,c,d){a=W.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(F[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=W.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=W.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=W.getShaderParameter(T[a],b):U(1281)},Ua:function(a){var b=Cb[a];if(!b){switch(a){case 7939:b=W.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=X(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=W.getParameter(a))||U(1280);b=b&&X(b);break;case 7938:b=W.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=X(b);break;case 35724:b=W.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=X(b);break;default:U(1280)}Cb[a]=b}return b},Ta:function(a,
b){if(2>V.version)return U(1282),0;var c=Db[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=W.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return X(d)}),c=Db[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},l:function(a,b){b=D(b);if(a=S[a]){var c=a,d=c.Zb,e=c.yc,h;if(!d)for(c.Zb=d={},c.xc={},h=0;h<W.getProgramParameter(c,35718);++h){var g=W.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Mb(m);n=0<n?
m.slice(0,n):m;var p=c.fc;c.fc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.xc[p++]=n}c=a.Zb;d=0;e=b;h=Mb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.yc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||W.getUniformLocation(a,b)))return d}else U(1281);return-1},xa:function(a){a=S[a];W.linkProgram(a);a.Zb=0;a.yc={}},J:function(a,b){W.polygonOffset(a,b)},r:function(a){W.readBuffer(a)},Fa:function(a,b,c,d){W.renderbufferStorage(a,b,c,d)},Ga:function(a,b,c,d,e){W.renderbufferStorageMultisample(a,b,c,d,e)},
s:function(a,b,c,d){W.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=D(F[c+4*h>>2],0>g?void 0:g)}W.shaderSource(T[a],e)},Ma:function(a,b,c){W.stencilFunc(a,b,c)},ma:function(a,b,c,d){W.stencilFuncSeparate(a,b,c,d)},v:function(a){W.stencilMask(a)},La:function(a,b,c){W.stencilOp(a,b,c)},la:function(a,b,c,d){W.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,h,g,m,n){if(2<=V.version)if(W.Xb)W.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Nb(m);W.texImage2D(a,
b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else W.texImage2D(a,b,c,d,e,h,g,m,null);else{p=W;var r=p.texImage2D;if(n){var v=Nb(m),M=31-Math.clz32(v.BYTES_PER_ELEMENT);n=v.subarray(n>>M,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<M)+4-1&-4)>>M)}else n=null;r.call(p,a,b,c,d,e,h,g,m,n)}},za:function(a,b,c,d,e,h,g,m,n,p){if(W.Xb)W.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var r=Nb(n);W.texImage3D(a,b,c,d,e,h,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else W.texImage3D(a,
b,c,d,e,h,g,m,n,null)},F:function(a,b,c){W.texParameterf(a,b,c)},f:function(a,b,c){W.texParameteri(a,b,c)},sb:function(a,b,c){if(2<=V.version)W.uniform1fv(Y(a),G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);W.uniform1fv(Y(a),d)}},C:function(a,b){W.uniform1i(Y(a),b)},rb:function(a,b,c){if(2<=V.version)W.uniform2fv(Y(a),G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,
c+8*b>>2);W.uniform2fv(Y(a),d)}},qb:function(a,b,c){if(2<=V.version)W.uniform3fv(Y(a),G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);W.uniform3fv(Y(a),d)}},pb:function(a,b,c){if(2<=V.version)W.uniform4fv(Y(a),G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);W.uniform4fv(Y(a),
d)}},ob:function(a,b,c,d){if(2<=V.version)W.uniformMatrix4fv(Y(a),!!c,G,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);W.uniformMatrix4fv(Y(a),!!c,e)}},k:function(a){a=S[a];W.useProgram(a);W.zc=
a},ub:function(a,b){W.vertexAttribDivisor(a,b)},vb:function(a,b,c,d,e,h){W.vertexAttribPointer(a,b,c,!!d,e,h)},t:function(a,b,c,d){W.viewport(a,b,c,d)},bb:function(){f.rc=function(a){0!=Qb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.rc)},ab:function(){f.wc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.wc)},$a:function(a){f.Qc=[];a=D(a);a=document.getElementById(a);f.sc=function(b){b.stopPropagation();
b.preventDefault()};f.tc=function(b){b.stopPropagation();b.preventDefault()};f.uc=function(b){b.stopPropagation();b.preventDefault()};f.vc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Rc=c;Rb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Sb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.sc,!1);a.addEventListener("dragleave",f.tc,!1);a.addEventListener("dragover",f.uc,!1);a.addEventListener("drop",f.vc,!1)},
Wa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},yb:function(a){a=D(a);f.Yb=document.getElementById(a);f.Yb||console.log("sokol_app.h: invalid target:"+a);f.Yb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},_a:function(){window.removeEventListener("beforeunload",f.rc)},Za:function(){window.removeEventListener("paste",f.wc)},Ya:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.sc);a.removeEventListener("dragleave",f.tc);a.removeEventListener("dragover",f.uc);a.removeEventListener("drop",f.vc)},z:function(){f.Yb&&f.Yb.requestPointerLock&&f.Yb.requestPointerLock()},Va:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
h=e.createImageData(a,b);h.data.set(B.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Xa:function(a){a=D(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left=
"-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ia:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ma=f.asm.zb;ya();za=f.asm.Sb;Ba.unshift(f.asm.Ab);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ga&&(clearInterval(Ga),Ga=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);la(h)})}var d={a:Ub};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Ab).apply(null,arguments)};var Tb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Bb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Cb).apply(null,arguments)};
var Qb=f.__sapp_html5_get_ask_leave_site=function(){return(Qb=f.__sapp_html5_get_ask_leave_site=f.asm.Db).apply(null,arguments)},Rb=f.__sapp_emsc_begin_drop=function(){return(Rb=f.__sapp_emsc_begin_drop=f.asm.Eb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Fb).apply(null,arguments)};var Sb=f.__sapp_emsc_end_drop=function(){return(Sb=f.__sapp_emsc_end_drop=f.asm.Gb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Hb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Ib).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Jb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Kb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Lb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Mb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Nb).apply(null,arguments)};
var Q=f._malloc=function(){return(Q=f._malloc=f.asm.Ob).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Pb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Qb).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Rb).apply(null,arguments)},Vb;function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Wb(){Vb||Xb();Vb||(J=Wb)};
function Xb(a){function b(){if(!Vb&&(Vb=!0,f.calledRun=!0,!na)){La(Ba);La(Ca);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Yb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=z(4*(e+1));F[h>>2]=ua(da);for(var g=1;g<e;g++)F[(h>>2)+g]=ua(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(m);na=!0}k(m,new w(m))}catch(n){n instanceof w||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ea.unshift(c);La(Ea)}}a=a||ca;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();La(Aa);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Xb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Yb=!0;f.noInitialRun&&(Yb=!1);Xb();
