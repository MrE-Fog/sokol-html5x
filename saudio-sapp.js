
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},e),ca=[],da="./this.program",k=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,t="",fa,u,v,fs,w,ha;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=l?require("path").dirname(t)+"/":__dirname+"/",ha=()=>{w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?null:"utf8")},v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=(a,b,c)=>{ha();a=w.normalize(a);fs.readFile(a,function(d,f){d?c(d):b(f.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,"/")),ca=process.argv.slice(2),
"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime||0<ia)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),t=0!==t.indexOf("blob:")?
t.substr(0,t.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);
var y=e.printErr||console.warn.bind(console);aa(e,ba);ba=null;e.arguments&&(ca=e.arguments);e.thisProgram&&(da=e.thisProgram);e.quit&&(k=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1;
function ma(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=A(r);B(n,C,p,r)}return p},array:function(n){var p=A(n.length);na.set(n,p);return p}};a=e["_"+a];var f=[],g=0;if(c)for(var h=0;h<c.length;h++){var m=d[b[h]];m?(0===g&&(g=oa()),f[h]=m(c[h])):f[h]=c[h]}b=a.apply(null,f);b=function(n){0!==g&&pa(g);return n}(b)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a){if(a){for(var b=C,c=a+NaN,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.subarray&&qa)a=qa.decode(b.subarray(a,d));else{for(c="";a<d;){var f=b[a++];if(f&128){var g=b[a++]&63;if(192==(f&224))c+=String.fromCharCode((f&31)<<6|g);else{var h=b[a++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|b[a++]&63;65536>f?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else c+=String.fromCharCode(f)}a=c}}else a="";return a}
function B(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function sa(a){var b=ra(a)+1,c=A(b);B(a,na,c,b);return c}var ta,na,C,ua,E,va,F;
function wa(){var a=ka.buffer;ta=a;e.HEAP8=na=new Int8Array(a);e.HEAP16=ua=new Int16Array(a);e.HEAP32=E=new Int32Array(a);e.HEAPU8=C=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=va=new Float32Array(a);e.HEAPF64=F=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[],ia=0;function Da(){var a=e.preRun.shift();ya.unshift(a)}var G=0,Ea=null,H=null;e.preloadedImages={};e.preloadedAudios={};
function ja(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";y(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Fa(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="saudio-sapp.wasm";if(!Fa()){var Ga=I;I=e.locateFile?e.locateFile(Ga,t):t+Ga}function Ha(){var a=I;try{if(a==I&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ia(){if(!z&&(ea||l)){if("function"===typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(u)return new Promise(function(a,b){u(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function J(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Jb;"number"===typeof c?void 0===b.jb?K(c)():K(c)(b.jb):c(void 0===b.jb?null:b.jb)}}}var L=[];function K(a){var b=L[a];b||(a>=L.length&&(L.length=a+1),L[a]=b=xa.get(a));return b}var Ja=0;function Ka(){for(var a=M.length-1;0<=a;--a)La(a);M=[];N=[]}var N=[];function Ma(){if(Ja&&Na.hb)for(var a=0;a<N.length;++a){var b=N[a];N.splice(a,1);--a;b.Sb.apply(null,b.Fb)}}var M=[];
function La(a){var b=M[a];b.target.removeEventListener(b.ab,b.Bb,b.bb);M.splice(a,1)}function O(a){function b(d){++Ja;Na=a;Ma();a.eb(d);Ma();--Ja}if(a.cb)a.Bb=b,a.target.addEventListener(a.ab,b,a.bb),M.push(a),Oa||(Ba.push(Ka),Oa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].ab==a.ab&&La(c--)}function Pa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Oa,Na,Qa,Ra,P,Sa,Ta,Ua,Va,Wa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?D(a):a;return Wa[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Xa(a){return 0>Wa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function Ya(a,b,c,d,f,g){Qa||(Qa=R(256));a={target:Q(a),ab:g,cb:d,eb:function(h){h=h||event;var m=h.target.id?h.target.id:"",n=Qa;B(Pa(h.target),C,n+0,128);B(m,C,n+128,128);K(d)(f,n,b)&&h.preventDefault()},bb:c};O(a)}
function Za(a,b,c,d,f,g){Ra||(Ra=R(176));a={target:Q(a),hb:!0,ab:g,cb:d,eb:function(h){var m=Ra;F[m>>3]=h.timeStamp;var n=m>>2;E[n+2]=h.location;E[n+3]=h.ctrlKey;E[n+4]=h.shiftKey;E[n+5]=h.altKey;E[n+6]=h.metaKey;E[n+7]=h.repeat;E[n+8]=h.charCode;E[n+9]=h.keyCode;E[n+10]=h.which;B(h.key||"",C,m+44,32);B(h.code||"",C,m+76,32);B(h.char||"",C,m+108,32);B(h.locale||"",C,m+140,32);K(d)(f,m,b)&&h.preventDefault()},bb:c};O(a)}
function $a(a,b,c){F[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=Xa(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function S(a,b,c,d,f,g){P||(P=R(72));a=Q(a);O({target:a,hb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,ab:g,cb:d,eb:function(h){h=h||event;$a(P,h,a);K(d)(f,P,b)&&h.preventDefault()},bb:c})}function T(a,b,c,d,f){Sa||(Sa=R(260));O({target:a,ab:f,cb:d,eb:function(g){g=g||event;var h=Sa,m=document.pointerLockElement||document.kb||document.mb||document.lb;E[h>>2]=!!m;var n=m&&m.id?m.id:"";B(Pa(m),C,h+4,128);B(n,C,h+132,128);K(d)(20,h,b)&&g.preventDefault()},bb:c})}
function U(a,b,c,d,f){O({target:a,ab:f,cb:d,eb:function(g){g=g||event;K(d)(38,0,b)&&g.preventDefault()},bb:c})}
function ab(a,b,c,d){Ta||(Ta=R(36));a=Q(a);O({target:a,ab:"resize",cb:d,eb:function(f){f=f||event;if(f.target==a){var g=document.body;if(g){var h=Ta;E[h>>2]=f.detail;E[h+4>>2]=g.clientWidth;E[h+8>>2]=g.clientHeight;E[h+12>>2]=innerWidth;E[h+16>>2]=innerHeight;E[h+20>>2]=outerWidth;E[h+24>>2]=outerHeight;E[h+28>>2]=pageXOffset;E[h+32>>2]=pageYOffset;K(d)(10,h,b)&&f.preventDefault()}}},bb:c})}
function bb(a,b,c,d,f,g){Ua||(Ua=R(1696));a=Q(a);O({target:a,hb:"touchstart"==g||"touchend"==g,ab:g,cb:d,eb:function(h){for(var m,n={},p=h.touches,r=0;r<p.length;++r)m=p[r],m.sb=m.ub=0,n[m.identifier]=m;for(r=0;r<h.changedTouches.length;++r)m=h.changedTouches[r],m.sb=1,n[m.identifier]=m;for(r=0;r<h.targetTouches.length;++r)n[h.targetTouches[r].identifier].ub=1;p=Ua;F[p>>3]=h.timeStamp;var q=p>>2;E[q+3]=h.ctrlKey;E[q+4]=h.shiftKey;E[q+5]=h.altKey;E[q+6]=h.metaKey;q+=7;var db=Xa(a),eb=0;for(r in n)if(m=
n[r],E[q]=m.identifier,E[q+1]=m.screenX,E[q+2]=m.screenY,E[q+3]=m.clientX,E[q+4]=m.clientY,E[q+5]=m.pageX,E[q+6]=m.pageY,E[q+7]=m.sb,E[q+8]=m.ub,E[q+9]=m.clientX-db.left,E[q+10]=m.clientY-db.top,q+=13,31<++eb)break;E[p+8>>2]=eb;K(d)(f,p,b)&&h.preventDefault()},bb:c})}function cb(a,b,c,d,f,g){a={target:Q(a),ab:g,cb:d,eb:function(h){h=h||event;K(d)(f,0,b)&&h.preventDefault()},bb:c};O(a)}
function fb(a,b,c,d){Va||(Va=R(104));O({target:a,hb:!0,ab:"wheel",cb:d,eb:function(f){f=f||event;var g=Va;$a(g,f,a);F[g+72>>3]=f.deltaX;F[g+80>>3]=f.deltaY;F[g+88>>3]=f.deltaZ;E[g+96>>2]=f.deltaMode;K(d)(9,g,b)&&f.preventDefault()},bb:c})}
function gb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,g){b.drawArraysInstancedANGLE(c,d,f,g)},a.drawElementsInstanced=function(c,d,f,g,h){b.drawElementsInstancedANGLE(c,d,f,g,h)})}
function hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function jb(a){a.Ib=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function kb(a){a.Lb=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function lb(a){a.Nb=a.getExtension("WEBGL_multi_draw")}var mb=1,nb=[],ob=[],pb=[],qb=[],rb=[],V=[],sb=[],tb={},ub={};function W(a){vb||(vb=a)}function wb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}
function xb(a,b){a.rb||(a.rb=a.getContext,a.getContext=function(d,f){f=a.rb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.tb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?yb(c,b):0}function yb(a,b){var c=wb(sb),d={Kb:c,attributes:b,version:b.tb,ib:a};a.canvas&&(a.canvas.Eb=d);sb[c]=d;("undefined"===typeof b.qb||b.qb)&&zb(d);return c}
function zb(a){a||(a=X);if(!a.Db){a.Db=!0;var b=a.ib;gb(b);hb(b);ib(b);jb(b);kb(b);2<=a.version&&(b.pb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.pb)b.pb=b.getExtension("EXT_disjoint_timer_query");lb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var vb,X,Ab=["default","low-power","high-performance"];
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else W(1281)}
function Z(a){var b=ra(a)+1,c=R(b);B(a,C,c,b);return c}
var Y,Hb={B:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},T:function(a,b,c){a=Q(a);if(!a)return-4;a=Xa(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},W:function(a,b,c){C.copyWithin(a,b,b+c)},ra:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},V:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ta.byteLength+65535>>>16);wa();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},C:function(a,b,c,d){Ya(a,b,c,d,12,"blur");return 0},y:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},D:function(a,b,c,d){Ya(a,b,c,d,13,"focus");return 0},M:function(a,b,c,d){Za(a,b,c,d,2,"keydown");return 0},K:function(a,b,c,d){Za(a,b,c,d,1,"keypress");return 0},L:function(a,b,c,d){Za(a,b,c,d,3,"keyup");return 0},S:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},P:function(a,b,c,
d){S(a,b,c,d,33,"mouseenter");return 0},O:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},Q:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},R:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},F:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.kb||document.body.mb||document.body.lb))return-1;a=Q(a);if(!a)return-4;T(a,b,c,d,"pointerlockchange");T(a,b,c,d,"mozpointerlockchange");T(a,b,c,d,"webkitpointerlockchange");T(a,b,c,d,"mspointerlockchange");
return 0},E:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.kb||document.body.mb||document.body.lb))return-1;a=Q(a);if(!a)return-4;U(a,b,c,d,"pointerlockerror");U(a,b,c,d,"mozpointerlockerror");U(a,b,c,d,"webkitpointerlockerror");U(a,b,c,d,"mspointerlockerror");return 0},Ea:function(a,b,c,d){ab(a,b,c,d);return 0},G:function(a,b,c,d){bb(a,b,c,d,25,"touchcancel");return 0},H:function(a,b,c,d){bb(a,b,c,d,23,"touchend");return 0},I:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");
return 0},J:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},A:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},z:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},N:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(fb(a,b,c,d),0):-1},s:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Ab[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+7],tb:E[b+
8],Mb:E[b+9],qb:E[b+10],Cb:E[b+11],Ob:E[b+12],Pb:E[b+13]};a=Q(a);return!a||b.Cb?0:xb(a,b)},U:function(a,b){a=sb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&gb(Y);"OES_vertex_array_object"==b&&hb(Y);"WEBGL_draw_buffers"==b&&ib(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&jb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&kb(Y);"WEBGL_multi_draw"==b&&lb(Y);return!!a.ib.getExtension(b)},la:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+
1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},_:function(a){X=sb[a];e.Gb=Y=X&&X.ib;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},g:function(a,b){35051==a?Y.nb=b:35052==a&&(Y.ob=b);Y.bindBuffer(a,nb[b])},d:function(a,b){Y.bindFramebuffer(a,pb[b])},a:function(a,b){Y.bindTexture(a,rb[b])},w:function(a){Y.bindVertexArray(V[a])},ga:function(a,b,c,d){Y.blendColor(a,b,c,d)},ha:function(a,b){Y.blendEquationSeparate(a,b)},ia:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},h:function(a,b,c,d,f,g,h,m,n,p){Y.blitFramebuffer(a,
b,c,d,f,g,h,m,n,p)},$:function(a){Y.clear(a)},r:function(a,b,c,d){Y.clearColor(a,b,c,d)},n:function(a){Y.clearDepth(a)},aa:function(a){Y.clearStencil(a)},j:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},da:function(a){Y.cullFace(a)},ta:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],f=nb[d];f&&(Y.deleteBuffer(f),f.name=0,nb[d]=null,d==Y.nb&&(Y.nb=0),d==Y.ob&&(Y.ob=0))}},f:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],f=pb[d];f&&(Y.deleteFramebuffer(f),f.name=0,pb[d]=null)}},qa:function(a){if(a){var b=
ob[a];b?(Y.deleteProgram(b),b.name=0,ob[a]=null):W(1281)}},x:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],f=qb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,qb[d]=null)}},sa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],f=rb[d];f&&(Y.deleteTexture(f),f.name=0,rb[d]=null)}},oa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];Y.deleteVertexArray(V[d]);V[d]=null}},v:function(a){Y.depthFunc(a)},u:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},ma:function(a){Y.disableVertexAttribArray(a)},
o:function(a){Y.enable(a)},ea:function(a){Y.frontFace(a)},na:function(a,b){for(var c=0;c<a;c++){var d=Y.createVertexArray(),f=d&&wb(V);d?(d.name=f,V[f]=d):W(1282);E[b+4*c>>2]=f}},c:function(a,b){Bb(a,b)},va:function(a){var b=tb[a];if(!b){switch(a){case 7939:b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+
b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}tb[a]=b}return b},ua:function(a,b){if(2>X.version)return W(1282),0;var c=ub[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),
c=ub[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},fa:function(a,b){Y.polygonOffset(a,b)},i:function(a){Y.readBuffer(a)},ba:function(a,b,c,d){Y.scissor(a,b,c,d)},ka:function(a,b,c){Y.stencilFunc(a,b,c)},t:function(a){Y.stencilMask(a)},ja:function(a,b,c){Y.stencilOp(a,b,c)},pa:function(a){a=ob[a];Y.useProgram(a);Y.Hb=a},ca:function(a,b,c,d){Y.viewport(a,b,c,d)},Da:function(){e.vb=function(a){0!=Cb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
e.vb)},Ca:function(){e.Ab=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Ab)},Ba:function(a){e.Qb=[];a=D(a);a=document.getElementById(a);e.wb=function(b){b.stopPropagation();b.preventDefault()};e.xb=function(b){b.stopPropagation();b.preventDefault()};e.yb=function(b){b.stopPropagation();b.preventDefault()};e.zb=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.Rb=c;Db(c.length);var d;for(d=0;d<
c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Eb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.wb,!1);a.addEventListener("dragleave",e.xb,!1);a.addEventListener("dragover",e.yb,!1);a.addEventListener("drop",e.zb,!1)},xa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},m:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Fb()});
document.body.append(a)},l:function(){document.getElementById("_sokol_app_input_element").focus()},Fa:function(a){a=D(a);e.gb=document.getElementById(a);e.gb||console.log("sokol_app.h: invalid target:"+a);e.gb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Aa:function(){window.removeEventListener("beforeunload",e.vb)},za:function(){window.removeEventListener("paste",e.Ab)},ya:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",
e.wb);a.removeEventListener("dragleave",e.xb);a.removeEventListener("dragover",e.yb);a.removeEventListener("drop",e.zb)},p:function(){e.gb&&e.gb.requestPointerLock&&e.gb.requestPointerLock()},wa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),g=f.createImageData(a,b);g.data.set(C.subarray(c,c+a*b*4));f.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
k:function(){document.getElementById("_sokol_app_input_element").blur()},X:function(){return e.fb?e.fb.bufferSize:0},Z:function(a,b,c){e.$a=null;e.fb=null;"undefined"!==typeof AudioContext?e.$a=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.$a=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.$a=null,console.log("sokol_audio.h: no WebAudio support"));return e.$a?(console.log("sokol_audio.h: sample rate ",e.$a.sampleRate),e.fb=
e.$a.createScriptProcessor(c,0,b),e.fb.onaudioprocess=function(d){var f=d.outputBuffer.length,g=Gb(f);if(g)for(var h=d.outputBuffer.numberOfChannels,m=0;m<h;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=va[(g>>2)+(h*p+m)]},e.fb.connect(e.$a.destination),a=function(){e.$a&&"suspended"===e.$a.state&&e.$a.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},Y:function(){return e.$a?
e.$a.sampleRate:0},q:function(){null!==e.$a&&(e.fb&&e.fb.disconnect(),e.$a.close(),e.$a=null,e.fb=null)}};
(function(){function a(f){e.asm=f.exports;ka=e.asm.Ga;wa();xa=e.asm.Wa;za.unshift(e.asm.Ha);G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==Ea&&(clearInterval(Ea),Ea=null),H&&(f=H,H=null,f()))}function b(f){a(f.instance)}function c(f){return Ia().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(f,function(g){y("failed to asynchronously prepare wasm: "+g);ja(g)})}var d={a:Hb};G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||I.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){y("wasm streaming compile failed: "+g);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.Ha).apply(null,arguments)};var Fb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Fb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Ia).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Ja).apply(null,arguments)};
var Cb=e.__sapp_html5_get_ask_leave_site=function(){return(Cb=e.__sapp_html5_get_ask_leave_site=e.asm.Ka).apply(null,arguments)},Db=e.__sapp_emsc_begin_drop=function(){return(Db=e.__sapp_emsc_begin_drop=e.asm.La).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Ma).apply(null,arguments)};var Eb=e.__sapp_emsc_end_drop=function(){return(Eb=e.__sapp_emsc_end_drop=e.asm.Na).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.Oa).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Pa).apply(null,arguments)};var Gb=e.__saudio_emsc_pull=function(){return(Gb=e.__saudio_emsc_pull=e.asm.Qa).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Ra).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Sa).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Ta).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Ua).apply(null,arguments)};
var R=e._malloc=function(){return(R=e._malloc=e.asm.Va).apply(null,arguments)},oa=e.stackSave=function(){return(oa=e.stackSave=e.asm.Xa).apply(null,arguments)},pa=e.stackRestore=function(){return(pa=e.stackRestore=e.asm.Ya).apply(null,arguments)},A=e.stackAlloc=function(){return(A=e.stackAlloc=e.asm.Za).apply(null,arguments)},Ib;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}H=function Jb(){Ib||Kb();Ib||(H=Jb)};
function Kb(a){function b(){if(!Ib&&(Ib=!0,e.calledRun=!0,!la)){J(za);J(Aa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Lb){var c=a,d=e._main;c=c||[];var f=c.length+1,g=A(4*(f+1));E[g>>2]=sa(da);for(var h=1;h<f;h++)E[(g>>2)+h]=sa(c[h-1]);E[(g>>2)+f]=0;try{var m=d(f,g);if(!(noExitRuntime||0<ia)){if(e.onExit)e.onExit(m);la=!0}k(m,new x(m))}catch(n){n instanceof x||"unwind"==n||k(1,n)}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),
Ca.unshift(c);J(Ca)}}a=a||ca;if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();J(ya);0<G||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Kb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Lb=!0;e.noInitialRun&&(Lb=!1);Kb();
