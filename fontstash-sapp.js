
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},g),ca=[],da="./this.program",k=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,q="",fa,t,u,fs,ha,ia;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",ia=()=>{ha||(fs=require("fs"),ha=require("path"))},fa=function(a,b){ia();a=ha.normalize(a);return fs.readFileSync(a,b?null:"utf8")},u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=(a,b,c)=>{ia();a=ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,"/")),ca=process.argv.slice(2),
"undefined"!==typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime||0<ka)throw process.exitCode=a,b;b instanceof ja||v("exiting due to exception: "+b);process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?
q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);
var v=g.printErr||console.warn.bind(console);aa(g,ba);ba=null;g.arguments&&(ca=g.arguments);g.thisProgram&&(da=g.thisProgram);g.quit&&(k=g.quit);var x;g.wasmBinary&&(x=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!==typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1;
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=y(r);z(n,A,p,r)}return p},array:function(n){var p=y(n.length);pa.set(n,p);return p}};a=g["_"+a];var e=[],h=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===h&&(h=qa()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(n){0!==h&&ra(h);return n}(b)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function B(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function z(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var m=a.charCodeAt(++h);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=y(b);z(a,pa,c,b);return c}var va,pa,A,wa,xa,C,ya,D,E;
function za(){var a=ma.buffer;va=a;g.HEAP8=pa=new Int8Array(a);g.HEAP16=wa=new Int16Array(a);g.HEAP32=C=new Int32Array(a);g.HEAPU8=A=new Uint8Array(a);g.HEAPU16=xa=new Uint16Array(a);g.HEAPU32=ya=new Uint32Array(a);g.HEAPF32=D=new Float32Array(a);g.HEAPF64=E=new Float64Array(a)}var Aa,Ba=[],Ca=[],Da=[],Ea=[],Fa=[],ka=0;function Ga(){var a=g.preRun.shift();Ba.unshift(a)}var F=0,Ha=null,G=null;g.preloadedImages={};g.preloadedAudios={};
function la(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";v(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ia(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="fontstash-sapp.wasm";if(!Ia()){var Ja=H;H=g.locateFile?g.locateFile(Ja,q):q+Ja}function Ka(){var a=H;try{if(a==H&&x)return new Uint8Array(x);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function La(){if(!x&&(ea||l)){if("function"===typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(t)return new Promise(function(a,b){t(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.Gc;"number"===typeof c?void 0===b.dc?I(c)():I(c)(b.dc):c(void 0===b.dc?null:b.dc)}}}var Na=[];function I(a){var b=Na[a];b||(a>=Na.length&&(Na.length=a+1),Na[a]=b=Aa.get(a));return b}var Oa=0;function Pa(){for(var a=J.length-1;0<=a;--a)Qa(a);J=[];Ra=[]}var Ra=[];function Sa(){if(Oa&&Ta.Zb)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.Pc.apply(null,b.Dc)}}var J=[];
function Qa(a){var b=J[a];b.target.removeEventListener(b.Sb,b.zc,b.Tb);J.splice(a,1)}function K(a){function b(d){++Oa;Ta=a;Sa();a.Vb(d);Sa();--Oa}if(a.Ub)a.zc=b,a.target.addEventListener(a.Sb,b,a.Tb),J.push(a),Ua||(Ea.push(Pa),Ua=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].Sb==a.Sb&&Qa(c--)}function Va(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ua,Ta,Wa,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function L(a){a=2<a?B(a):a;return cb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function eb(a,b,c,d,e,h){Wa||(Wa=M(256));a={target:L(a),Sb:h,Ub:d,Vb:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Wa;z(Va(f.target),A,n+0,128);z(m,A,n+128,128);I(d)(e,n,b)&&f.preventDefault()},Tb:c};K(a)}
function fb(a,b,c,d,e,h){Xa||(Xa=M(176));a={target:L(a),Zb:!0,Sb:h,Ub:d,Vb:function(f){var m=Xa;E[m>>3]=f.timeStamp;var n=m>>2;C[n+2]=f.location;C[n+3]=f.ctrlKey;C[n+4]=f.shiftKey;C[n+5]=f.altKey;C[n+6]=f.metaKey;C[n+7]=f.repeat;C[n+8]=f.charCode;C[n+9]=f.keyCode;C[n+10]=f.which;z(f.key||"",A,m+44,32);z(f.code||"",A,m+76,32);z(f.char||"",A,m+108,32);z(f.locale||"",A,m+140,32);I(d)(e,m,b)&&f.preventDefault()},Tb:c};K(a)}
function gb(a,b,c){E[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=db(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function N(a,b,c,d,e,h){Ya||(Ya=M(72));a=L(a);K({target:a,Zb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Sb:h,Ub:d,Vb:function(f){f=f||event;gb(Ya,f,a);I(d)(e,Ya,b)&&f.preventDefault()},Tb:c})}function hb(a,b,c,d,e){Za||(Za=M(260));K({target:a,Sb:e,Ub:d,Vb:function(h){h=h||event;var f=Za,m=document.pointerLockElement||document.fc||document.ic||document.hc;C[f>>2]=!!m;var n=m&&m.id?m.id:"";z(Va(m),A,f+4,128);z(n,A,f+132,128);I(d)(20,f,b)&&h.preventDefault()},Tb:c})}
function ib(a,b,c,d,e){K({target:a,Sb:e,Ub:d,Vb:function(h){h=h||event;I(d)(38,0,b)&&h.preventDefault()},Tb:c})}
function jb(a,b,c,d){$a||($a=M(36));a=L(a);K({target:a,Sb:"resize",Ub:d,Vb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var f=$a;C[f>>2]=e.detail;C[f+4>>2]=h.clientWidth;C[f+8>>2]=h.clientHeight;C[f+12>>2]=innerWidth;C[f+16>>2]=innerHeight;C[f+20>>2]=outerWidth;C[f+24>>2]=outerHeight;C[f+28>>2]=pageXOffset;C[f+32>>2]=pageYOffset;I(d)(10,f,b)&&e.preventDefault()}}},Tb:c})}
function kb(a,b,c,d,e,h){ab||(ab=M(1696));a=L(a);K({target:a,Zb:"touchstart"==h||"touchend"==h,Sb:h,Ub:d,Vb:function(f){for(var m,n={},p=f.touches,r=0;r<p.length;++r)m=p[r],m.nc=m.pc=0,n[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.nc=1,n[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].pc=1;p=ab;E[p>>3]=f.timeStamp;var w=p>>2;C[w+3]=f.ctrlKey;C[w+4]=f.shiftKey;C[w+5]=f.altKey;C[w+6]=f.metaKey;w+=7;var qb=db(a),rb=0;for(r in n)if(m=
n[r],C[w]=m.identifier,C[w+1]=m.screenX,C[w+2]=m.screenY,C[w+3]=m.clientX,C[w+4]=m.clientY,C[w+5]=m.pageX,C[w+6]=m.pageY,C[w+7]=m.nc,C[w+8]=m.pc,C[w+9]=m.clientX-qb.left,C[w+10]=m.clientY-qb.top,w+=13,31<++rb)break;C[p+8>>2]=rb;I(d)(e,p,b)&&f.preventDefault()},Tb:c})}function lb(a,b,c,d,e,h){a={target:L(a),Sb:h,Ub:d,Vb:function(f){f=f||event;I(d)(e,0,b)&&f.preventDefault()},Tb:c};K(a)}
function mb(a,b,c,d){bb||(bb=M(104));K({target:a,Zb:!0,Sb:"wheel",Ub:d,Vb:function(e){e=e||event;var h=bb;gb(h,e,a);E[h+72>>3]=e.deltaX;E[h+80>>3]=e.deltaY;E[h+88>>3]=e.deltaZ;C[h+96>>2]=e.deltaMode;I(d)(9,h,b)&&e.preventDefault()},Tb:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function sb(a){a.Fc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function tb(a){a.Ic=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ub(a){a.Kc=a.getExtension("WEBGL_multi_draw")}var vb=1,wb=[],O=[],xb=[],yb=[],zb=[],P=[],Ab=[],Bb=[],Cb={},Db={};function Q(a){Eb||(Eb=a)}function Fb(a){for(var b=vb++,c=a.length;c<b;c++)a[c]=null;return b}
function Gb(a,b){a.mc||(a.mc=a.getContext,a.getContext=function(d,e){e=a.mc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.oc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Hb(c,b):0}function Hb(a,b){var c=Fb(Bb),d={Hc:c,attributes:b,version:b.oc,cc:a};a.canvas&&(a.canvas.Cc=d);Bb[c]=d;("undefined"===typeof b.lc||b.lc)&&Ib(d);return c}
function Ib(a){a||(a=R);if(!a.Bc){a.Bc=!0;var b=a.cc;nb(b);ob(b);pb(b);sb(b);tb(b);2<=a.version&&(b.kc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.kc)b.kc=b.getExtension("EXT_disjoint_timer_query");ub(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Eb,R,Jb=["default","low-power","high-performance"];
function Kb(a,b,c,d){for(var e=0;e<a;e++){var h=S[c](),f=h&&Fb(d);h?(h.name=f,d[f]=h):Q(1282);C[b+4*e>>2]=f}}
function Lb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);v("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);v("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else Q(1281)}
function T(a){var b=ta(a)+1,c=M(b);z(a,A,c,b);return c}function Mb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function U(a){a-=5120;return 0==a?pa:1==a?A:2==a?wa:4==a?C:6==a?D:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Nb(a,b,c,d,e){a=U(a);var h=V(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
function W(a){var b=S.yc;if(b){var c=b.Yb[a];"number"===typeof c&&(b.Yb[a]=c=S.getUniformLocation(b,b.wc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}for(var X=[],Y=[],S,Ob=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Ob.subarray(0,Z+1);var Pb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Pb.subarray(0,Z+1);
var Yb={S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ba:function(a,b,c){a=L(a);if(!a)return-4;a=db(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},$a:function(a,b,c){A.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,
d)-va.byteLength+65535>>>16);za();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},V:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},Q:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},W:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},ea:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},la:function(a,b,c,d){N(a,b,c,d,5,"mousedown");return 0},ha:function(a,
b,c,d){N(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){N(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){N(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){N(a,b,c,d,6,"mouseup");return 0},Y:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.fc||document.body.ic||document.body.hc))return-1;a=L(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");
return 0},X:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.fc||document.body.ic||document.body.hc))return-1;a=L(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){jb(a,b,c,d);return 0},Z:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},_:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},$:function(a,b,c,d){kb(a,b,c,d,24,
"touchmove");return 0},aa:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},U:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},T:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=L(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d),0):-1},E:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+5],powerPreference:Jb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+
7],oc:C[b+8],Jc:C[b+9],lc:C[b+10],Ac:C[b+11],Lc:C[b+12],Mc:C[b+13]};a=L(a);return!a||b.Ac?0:Gb(a,b)},wb:function(a,b){a=Bb[a];b=B(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(S);"OES_vertex_array_object"==b&&ob(S);"WEBGL_draw_buffers"==b&&pb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&sb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&tb(S);"WEBGL_multi_draw"==b&&ub(S);return!!a.cc.getExtension(b)},Ha:function(a){a>>=2;for(var b=0;14>b;++b)C[a+
b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},wa:function(a){R=Bb[a];g.Ec=S=R&&R.cc;return!a||S?0:-5},b:function(a){S.activeTexture(a)},C:function(a,b){S.attachShader(O[a],P[b])},c:function(a,b){35051==a?S.jc=b:35052==a&&(S.Wb=b);S.bindBuffer(a,wb[b])},h:function(a,b){S.bindFramebuffer(a,xb[b])},G:function(a,b){S.bindRenderbuffer(a,yb[b])},a:function(a,b){S.bindTexture(a,zb[b])},P:function(a){S.bindVertexArray(Ab[a])},L:function(a,b,c,d){S.blendColor(a,b,c,d)},M:function(a,b){S.blendEquationSeparate(a,
b)},N:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,f,m,n,p){S.blitFramebuffer(a,b,c,d,e,h,f,m,n,p)},Fa:function(a,b,c,d){2<=R.version?c?S.bufferData(a,A,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?A.subarray(c,c+b):b,d)},l:function(a,b,c,d){2<=R.version?S.bufferSubData(a,b,A,d,c):S.bufferSubData(a,b,A.subarray(d,d+c))},sb:function(a){S.clear(a)},vb:function(a,b,c,d){S.clearColor(a,b,c,d)},ub:function(a){S.clearDepth(a)},tb:function(a){S.clearStencil(a)},m:function(a,b,c,
d){S.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){S.compileShader(P[a])},Ca:function(a,b,c,d,e,h,f,m){2<=R.version?S.Wb?S.compressedTexImage2D(a,b,c,d,e,h,f,m):S.compressedTexImage2D(a,b,c,d,e,h,A,m,f):S.compressedTexImage2D(a,b,c,d,e,h,m?A.subarray(m,m+f):null)},Aa:function(a,b,c,d,e,h,f,m,n){S.Wb?S.compressedTexImage3D(a,b,c,d,e,h,f,m,n):S.compressedTexImage3D(a,b,c,d,e,h,f,A,n,m)},ya:function(){var a=Fb(O),b=S.createProgram();b.name=a;b.bc=b.$b=b.ac=0;b.ec=1;O[a]=b;return a},ua:function(a){var b=
Fb(P);P[b]=S.createShader(a);return b},I:function(a){S.cullFace(a)},Oa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=wb[d];e&&(S.deleteBuffer(e),e.name=0,wb[d]=null,d==S.jc&&(S.jc=0),d==S.Wb&&(S.Wb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=xb[d];e&&(S.deleteFramebuffer(e),e.name=0,xb[d]=null)}},w:function(a){if(a){var b=O[a];b?(S.deleteProgram(b),b.name=0,O[a]=null):Q(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=yb[d];e&&(S.deleteRenderbuffer(e),e.name=
0,yb[d]=null)}},s:function(a){if(a){var b=P[a];b?(S.deleteShader(b),P[a]=null):Q(1281)}},Na:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=zb[d];e&&(S.deleteTexture(e),e.name=0,zb[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];S.deleteVertexArray(Ab[d]);Ab[d]=null}},v:function(a){S.depthFunc(a)},u:function(a){S.depthMask(!!a)},e:function(a){S.disable(a)},O:function(a){S.disableVertexAttribArray(a)},cb:function(a,b,c){S.drawArrays(a,b,c)},db:function(a,b,c,d){S.drawArraysInstanced(a,
b,c,d)},eb:function(a,b,c,d){S.drawElements(a,b,c,d)},fb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},g:function(a){S.enable(a)},pb:function(a){S.enableVertexAttribArray(a)},J:function(a){S.frontFace(a)},Ga:function(a,b){Kb(a,b,"createBuffer",wb)},H:function(a,b){Kb(a,b,"createRenderbuffer",yb)},Da:function(a,b){Kb(a,b,"createTexture",zb)},La:function(a,b){Kb(a,b,"createVertexArray",Ab)},qa:function(a,b){return S.getAttribLocation(O[a],B(b))},d:function(a,b){Lb(a,b)},va:function(a,b,c,
d){a=S.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(C[c>>2]=b)},B:function(a,b,c){if(c)if(a>=vb)Q(1281);else if(a=O[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.bc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.bc=Math.max(a.bc,S.getActiveUniform(a,b).name.length+1);C[c>>2]=a.bc}else if(35722==b){if(!a.$b)for(b=0;b<S.getProgramParameter(a,35721);++b)a.$b=Math.max(a.$b,S.getActiveAttrib(a,b).name.length+
1);C[c>>2]=a.$b}else if(35381==b){if(!a.ac)for(b=0;b<S.getProgramParameter(a,35382);++b)a.ac=Math.max(a.ac,S.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.ac}else C[c>>2]=S.getProgramParameter(a,b);else Q(1281)},ra:function(a,b,c,d){a=S.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(C[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(P[a]),C[c>>2]=a?a.length+
1:0):C[c>>2]=S.getShaderParameter(P[a],b):Q(1281)},Qa:function(a){var b=Cb[a];if(!b){switch(a){case 7939:b=S.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=T(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=S.getParameter(a))||Q(1280);b=b&&T(b);break;case 7938:b=S.getParameter(7938);b=2<=R.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=T(b);break;case 35724:b=S.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=T(b);break;default:Q(1280)}Cb[a]=b}return b},Pa:function(a,b){if(2>R.version)return Q(1282),0;var c=Db[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return T(d)}),c=Db[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},k:function(a,b){b=B(b);if(a=O[a]){var c=a,d=c.Yb,e=c.xc,h;
if(!d)for(c.Yb=d={},c.wc={},h=0;h<S.getProgramParameter(c,35718);++h){var f=S.getActiveUniform(c,h);var m=f.name;f=f.size;var n=Mb(m);n=0<n?m.slice(0,n):m;var p=c.ec;c.ec+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.wc[p++]=n}c=a.Yb;d=0;e=b;h=Mb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.xc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else Q(1281);return-1},xa:function(a){a=O[a];S.linkProgram(a);a.Yb=0;a.xc={}},K:function(a,b){S.polygonOffset(a,b)},r:function(a){S.readBuffer(a)},
Ea:function(a,b,c,d){S.renderbufferStorage(a,b,c,d)},F:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},oa:function(a,b,c,d){S.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?C[d+4*h>>2]:-1;e+=B(C[c+4*h>>2],0>f?void 0:f)}S.shaderSource(P[a],e)},Ja:function(a,b,c){S.stencilFunc(a,b,c)},na:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},t:function(a){S.stencilMask(a)},Ia:function(a,b,c){S.stencilOp(a,b,c)},ma:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},
Ba:function(a,b,c,d,e,h,f,m,n){if(2<=R.version)if(S.Wb)S.texImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=U(m);S.texImage2D(a,b,c,d,e,h,f,m,p,n>>V(p))}else S.texImage2D(a,b,c,d,e,h,f,m,null);else S.texImage2D(a,b,c,d,e,h,f,m,n?Nb(m,f,d,e,n):null)},za:function(a,b,c,d,e,h,f,m,n,p){if(S.Wb)S.texImage3D(a,b,c,d,e,h,f,m,n,p);else if(p){var r=U(n);S.texImage3D(a,b,c,d,e,h,f,m,n,r,p>>V(r))}else S.texImage3D(a,b,c,d,e,h,f,m,n,null)},D:function(a,b,c){S.texParameterf(a,b,c)},f:function(a,b,c){S.texParameteri(a,
b,c)},bb:function(a,b,c,d,e,h,f,m,n){if(2<=R.version)if(S.Wb)S.texSubImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=U(m);S.texSubImage2D(a,b,c,d,e,h,f,m,p,n>>V(p))}else S.texSubImage2D(a,b,c,d,e,h,f,m,null);else p=null,n&&(p=Nb(m,f,e,h,n)),S.texSubImage2D(a,b,c,d,e,h,f,m,p)},ab:function(a,b,c,d,e,h,f,m,n,p,r){if(S.Wb)S.texSubImage3D(a,b,c,d,e,h,f,m,n,p,r);else if(r){var w=U(p);S.texSubImage3D(a,b,c,d,e,h,f,m,n,p,w,r>>V(w))}else S.texSubImage3D(a,b,c,d,e,h,f,m,n,p,null)},ob:function(a,b,c){if(2<=R.version)S.uniform1fv(W(a),
D,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);S.uniform1fv(W(a),d)}},A:function(a,b){S.uniform1i(W(a),b)},kb:function(a,b,c){if(2<=R.version)S.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);S.uniform1iv(W(a),d)}},nb:function(a,b,c){if(2<=R.version)S.uniform2fv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=
D.subarray(c>>2,c+8*b>>2);S.uniform2fv(W(a),d)}},jb:function(a,b,c){if(2<=R.version)S.uniform2iv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);S.uniform2iv(W(a),d)}},mb:function(a,b,c){if(2<=R.version)S.uniform3fv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);S.uniform3fv(W(a),d)}},ib:function(a,
b,c){if(2<=R.version)S.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);S.uniform3iv(W(a),d)}},lb:function(a,b,c){if(2<=R.version)S.uniform4fv(W(a),D,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=D;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=D.subarray(c>>2,c+16*b>>2);S.uniform4fv(W(a),d)}},hb:function(a,b,c){if(2<=R.version)S.uniform4iv(W(a),
C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);S.uniform4iv(W(a),d)}},gb:function(a,b,c,d){if(2<=R.version)S.uniformMatrix4fv(W(a),!!c,D,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],h=D;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=h[m];e[f+1]=h[m+1];e[f+2]=h[m+2];e[f+3]=h[m+3];e[f+4]=h[m+4];e[f+5]=h[m+5];e[f+6]=h[m+6];e[f+7]=h[m+7];e[f+8]=h[m+8];e[f+9]=h[m+9];e[f+10]=
h[m+10];e[f+11]=h[m+11];e[f+12]=h[m+12];e[f+13]=h[m+13];e[f+14]=h[m+14];e[f+15]=h[m+15]}}else e=D.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(W(a),!!c,e)}},j:function(a){a=O[a];S.useProgram(a);S.yc=a},qb:function(a,b){S.vertexAttribDivisor(a,b)},rb:function(a,b,c,d,e,h){S.vertexAttribPointer(a,b,c,!!d,e,h)},pa:function(a,b,c,d){S.viewport(a,b,c,d)},Za:function(){g.qc=function(a){0!=Qb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.qc)},Ya:function(){g.vc=function(a){a=
a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.vc)},Wa:function(a){g.Nc=[];a=B(a);a=document.getElementById(a);g.rc=function(b){b.stopPropagation();b.preventDefault()};g.sc=function(b){b.stopPropagation();b.preventDefault()};g.tc=function(b){b.stopPropagation();b.preventDefault()};g.uc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;g.Oc=c;Rb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number",
"string"],[d,c[d].name]);Sb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.rc,!1);a.addEventListener("dragleave",g.sc,!1);a.addEventListener("dragover",g.tc,!1);a.addEventListener("drop",g.uc,!1)},Sa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},
xb:function(a){a=B(a);g.Xb=document.getElementById(a);g.Xb||console.log("sokol_app.h: invalid target:"+a);g.Xb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Va:function(){window.removeEventListener("beforeunload",g.qc)},Ua:function(){window.removeEventListener("paste",g.vc)},Ta:function(a){a=B(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.rc);a.removeEventListener("dragleave",g.sc);a.removeEventListener("dragover",g.tc);a.removeEventListener("drop",
g.uc)},x:function(){g.Xb&&g.Xb.requestPointerLock&&g.Xb.requestPointerLock()},Ra:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(A.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},y:function(a,b,c,d,e,h){b=B(b);var f=
new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";var m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(f.response),p=n.length;p<=h?(A.set(n,e),Ub(a,d,p)):Vb(a)}else Wb(a,this.status)};f.send()},ja:function(a,b){b=B(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");
Xb(a,d)}else Wb(a,this.status)};c.send()}};
(function(){function a(e){g.asm=e.exports;ma=g.asm.yb;za();Aa=g.asm.Ob;Ca.unshift(g.asm.zb);F--;g.monitorRunDependencies&&g.monitorRunDependencies(F);0==F&&(null!==Ha&&(clearInterval(Ha),Ha=null),G&&(e=G,G=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){v("failed to asynchronously prepare wasm: "+h);la(h)})}var d={a:Yb};F++;g.monitorRunDependencies&&g.monitorRunDependencies(F);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||H.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){v("wasm streaming compile failed: "+h);v("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.zb).apply(null,arguments)};var M=g._malloc=function(){return(M=g._malloc=g.asm.Ab).apply(null,arguments)},Tb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Bb).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.Cb).apply(null,arguments)};
var Qb=g.__sapp_html5_get_ask_leave_site=function(){return(Qb=g.__sapp_html5_get_ask_leave_site=g.asm.Db).apply(null,arguments)},Rb=g.__sapp_emsc_begin_drop=function(){return(Rb=g.__sapp_emsc_begin_drop=g.asm.Eb).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.Fb).apply(null,arguments)};var Sb=g.__sapp_emsc_end_drop=function(){return(Sb=g.__sapp_emsc_end_drop=g.asm.Gb).apply(null,arguments)};
g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Hb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Ib).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Jb).apply(null,arguments)};
var Xb=g.__sfetch_emsc_head_response=function(){return(Xb=g.__sfetch_emsc_head_response=g.asm.Kb).apply(null,arguments)},Ub=g.__sfetch_emsc_get_response=function(){return(Ub=g.__sfetch_emsc_get_response=g.asm.Lb).apply(null,arguments)},Wb=g.__sfetch_emsc_failed_http_status=function(){return(Wb=g.__sfetch_emsc_failed_http_status=g.asm.Mb).apply(null,arguments)},Vb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Vb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.Nb).apply(null,arguments)},qa=
g.stackSave=function(){return(qa=g.stackSave=g.asm.Pb).apply(null,arguments)},ra=g.stackRestore=function(){return(ra=g.stackRestore=g.asm.Qb).apply(null,arguments)},y=g.stackAlloc=function(){return(y=g.stackAlloc=g.asm.Rb).apply(null,arguments)},Zb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}G=function $b(){Zb||ac();Zb||(G=$b)};
function ac(a){function b(){if(!Zb&&(Zb=!0,g.calledRun=!0,!na)){Ma(Ca);Ma(Da);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(bc){var c=a,d=g._main;c=c||[];var e=c.length+1,h=y(4*(e+1));C[h>>2]=ua(da);for(var f=1;f<e;f++)C[(h>>2)+f]=ua(c[f-1]);C[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ka)){if(g.onExit)g.onExit(m);na=!0}k(m,new ja(m))}catch(n){n instanceof ja||"unwind"==n||k(1,n)}finally{}}if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)c=g.postRun.shift(),
Fa.unshift(c);Ma(Fa)}}a=a||ca;if(!(0<F)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ga();Ma(Ba);0<F||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=ac;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var bc=!0;g.noInitialRun&&(bc=!1);ac();
