
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var ka,la=!1;function assert(a,b){a||x("Assertion failed: "+b)}function ma(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c){var d={string:function(n){var q=0;if(null!==n&&void 0!==n&&0!==n){var p=(n.length<<2)+1;q=A(p);C(n,D,q,p)}return q},array:function(n){var q=A(n.length);oa.set(n,q);return q}};a=ma(a);var f=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=pa()),f[g]=m(c[g])):f[g]=c[g]}a.apply(null,f);0!==k&&qa(k)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=A(b);C(a,oa,c,b);return c}var ua,oa,D,va,F,G,H;
function wa(){var a=ka.buffer;ua=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=G=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var I,xa=[],ya=[],za=[],Aa=[],Ba=[];ya.push({Wb:function(){Ca()}});function Da(){var a=e.preRun.shift();xa.unshift(a)}var J=0,Ea=null,K=null;e.preloadedImages={};e.preloadedAudios={};
function x(a){if(e.onAbort)e.onAbort(a);y(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Fa(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ga(){return Fa("data:application/octet-stream;base64,")}var L="instancing-sapp.wasm";if(!Ga()){var Ha=L;L=e.locateFile?e.locateFile(Ha,v):v+Ha}
function Ia(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Ja(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Fa("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ia()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ia()})}
function Ka(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Wb;"number"===typeof c?void 0===b.Eb?I.get(c)():I.get(c)(b.Eb):c(void 0===b.Eb?null:b.Eb)}}}var La=0;function Ma(){for(var a=M.length-1;0<=a;--a)Na(a);M=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Cb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.nc.apply(null,b.ac)}}var M=[];function Na(a){var b=M[a];b.target.removeEventListener(b.vb,b.Ub,b.wb);M.splice(a,1)}
function N(a){function b(d){++La;Qa=a;Pa();a.yb(d);Pa();--La}if(a.xb)a.Ub=b,a.target.addEventListener(a.vb,b,a.wb),M.push(a),Ra||(Aa.push(Ma),Ra=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].vb==a.vb&&Na(c--)}var Ra,Qa,Sa,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function $a(a,b,c,d,f,k){Sa||(Sa=P(164));a={target:O(a),Cb:!0,vb:k,xb:d,yb:function(g){var m=Sa,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(f,m,b)&&g.preventDefault()},wb:c};N(a)}
function ab(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;va[2*a+16]=b.button;va[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=Za(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function Q(a,b,c,d,f,k){Ta||(Ta=P(64));a=O(a);N({target:a,Cb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,vb:k,xb:d,yb:function(g){g=g||event;ab(Ta,g,a);I.get(d)(f,Ta,b)&&g.preventDefault()},wb:c})}
function bb(a,b,c,d,f){Ua||(Ua=P(260));N({target:a,vb:f,xb:d,yb:function(k){k=k||event;var g=Ua,m=document.pointerLockElement||document.Rb||document.Tb||document.Sb;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&k.preventDefault()},wb:c})}function cb(a,b,c,d,f){N({target:a,vb:f,xb:d,yb:function(k){k=k||event;I.get(d)(38,0,b)&&k.preventDefault()},wb:c})}
function db(a,b,c,d){Va||(Va=P(36));a=O(a);N({target:a,vb:"resize",xb:d,yb:function(f){f=f||event;if(f.target==a){var k=document.body;if(k){var g=Va;F[g>>2]=f.detail;F[g+4>>2]=k.clientWidth;F[g+8>>2]=k.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&f.preventDefault()}}},wb:c})}
function eb(a,b,c,d,f,k){Wa||(Wa=P(1684));a=O(a);N({target:a,Cb:"touchstart"==k||"touchend"==k,vb:k,xb:d,yb:function(g){for(var m={},n=g.touches,q=0;q<n.length;++q){var p=n[q];m[p.identifier]=p}n=g.changedTouches;for(q=0;q<n.length;++q)p=n[q],p.Yb=1,m[p.identifier]=p;n=g.targetTouches;for(q=0;q<n.length;++q)m[n[q].identifier].Zb=1;n=Wa;p=n>>2;F[p+1]=g.ctrlKey;F[p+2]=g.shiftKey;F[p+3]=g.altKey;F[p+4]=g.metaKey;p+=5;var ib=Za(a),jb=0;for(q in m){var B=m[q];F[p]=B.identifier;F[p+1]=B.screenX;F[p+2]=
B.screenY;F[p+3]=B.clientX;F[p+4]=B.clientY;F[p+5]=B.pageX;F[p+6]=B.pageY;F[p+7]=B.Yb;F[p+8]=B.Zb;F[p+9]=B.clientX-ib.left;F[p+10]=B.clientY-ib.top;p+=13;if(31<++jb)break}F[n>>2]=jb;I.get(d)(f,n,b)&&g.preventDefault()},wb:c})}function fb(a,b,c,d,f,k){a={target:O(a),vb:k,xb:d,yb:function(g){g=g||event;I.get(d)(f,0,b)&&g.preventDefault()},wb:c};N(a)}
function gb(a,b,c,d){Xa||(Xa=P(96));N({target:a,Cb:!0,vb:"wheel",xb:d,yb:function(f){f=f||event;var k=Xa;ab(k,f,a);H[k+64>>3]=f.deltaX;H[k+72>>3]=f.deltaY;H[k+80>>3]=f.deltaZ;F[k+88>>2]=f.deltaMode;I.get(d)(9,k,b)&&f.preventDefault()},wb:c})}
function hb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.cc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function nb(a){a.fc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ob(a){a.ic=a.getExtension("WEBGL_multi_draw")}var pb=1,qb=[],R=[],rb=[],sb=[],tb=[],S=[],T=[],ub=[],vb=[],U={},wb={},xb={};function V(a){yb||(yb=a)}function W(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a){a||(a=X);if(!a.Xb){a.Xb=!0;var b=a.Db;hb(b);kb(b);lb(b);mb(b);nb(b);b.dc=b.getExtension("EXT_disjoint_timer_query");ob(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var yb,X,Ab=["default","low-power","high-performance"];function Bb(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),g=k&&W(d);k?(k.name=g,d[g]=k):V(1282);F[b+4*f>>2]=g}}
function Cb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else V(1281)}
function Db(a){var b=sa(a)+1,c=P(b);C(a,D,c,b);return c}for(var Z=[],Y,Eb=new Float32Array(288),Fb=0;288>Fb;++Fb)Z[Fb]=Eb.subarray(0,Fb+1);
var Kb={S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=O(a);if(!a)return-4;a=Za(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Va:function(a,b,c){D.copyWithin(a,b,b+c)},Ia:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);wa();var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},R:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){$a(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){$a(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){$a(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},fa:function(a,
b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Rb||document.body.Tb||document.body.Sb))return-1;a=O(a);if(!a)return-4;bb(a,b,c,d,"pointerlockchange");bb(a,b,c,d,"mozpointerlockchange");bb(a,b,c,d,"webkitpointerlockchange");bb(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Rb||
document.body.Tb||document.body.Sb))return-1;a=O(a);if(!a)return-4;cb(a,b,c,d,"pointerlockerror");cb(a,b,c,d,"mozpointerlockerror");cb(a,b,c,d,"webkitpointerlockerror");cb(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){db(a,b,c,d);return 0},X:function(a,b,c,d){eb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){eb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){eb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){eb(a,b,c,d,22,"touchstart");return 0},U:function(a,b,c,
d){fb(a,b,c,d,31,"webglcontextlost");return 0},T:function(a,b,c,d){fb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(gb(a,b,c,d),0):-1},E:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Ab[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],Jb:F[b+8],hc:F[b+9],Ib:F[b+10],Vb:F[b+11],jc:F[b+12],kc:F[b+13]};a=O(a);if(!a||b.Vb)b=0;
else if(a=1<b.Jb?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=W(vb),d={ec:c,attributes:b,version:b.Jb,Db:a};a.canvas&&(a.canvas.$b=d);vb[c]=d;("undefined"===typeof b.Ib||b.Ib)&&zb(d);b=c}else b=0;return b},ra:function(a,b){a=vb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&hb(Y);"OES_vertex_array_object"==b&&kb(Y);"WEBGL_draw_buffers"==b&&lb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&mb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&nb(Y);"WEBGL_multi_draw"==b&&ob(Y);return!!a.Db.getExtension(b)},Ea:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},ya:function(a){X=vb[a];e.bc=Y=X&&X.Db;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},D:function(a,b){Y.attachShader(R[a],T[b])},c:function(a,b){35051==a?Y.Gb=b:35052==a&&(Y.Hb=b);Y.bindBuffer(a,qb[b])},g:function(a,b){Y.bindFramebuffer(a,rb[b])},a:function(a,b){Y.bindTexture(a,tb[b])},O:function(a){Y.bindVertexArray(ub[a])},K:function(a,
b,c,d){Y.blendColor(a,b,c,d)},L:function(a,b){Y.blendEquationSeparate(a,b)},M:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,k,g,m,n,q){Y.blitFramebuffer(a,b,c,d,f,k,g,m,n,q)},F:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},k:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},qa:function(a){Y.clear(a)},z:function(a,b,c,d){Y.clearColor(a,b,c,d)},y:function(a){Y.clearDepth(a)},
sa:function(a){Y.clearStencil(a)},i:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},xa:function(a){Y.compileShader(T[a])},Da:function(){var a=W(R),b=Y.createProgram();b.name=a;R[a]=b;return a},Aa:function(a){var b=W(T);T[b]=Y.createShader(a);return b},H:function(a){Y.cullFace(a)},La:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=qb[d];f&&(Y.deleteBuffer(f),f.name=0,qb[d]=null,d==Y.Gb&&(Y.Gb=0),d==Y.Hb&&(Y.Hb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],f=rb[d];f&&(Y.deleteFramebuffer(f),
f.name=0,rb[d]=null)}},P:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,U[a]=null):V(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=sb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,sb[d]=null)}},r:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),T[a]=null):V(1281)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=tb[d];f&&(Y.deleteTexture(f),f.name=0,tb[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Y.deleteVertexArray(ub[d]);ub[d]=
null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},N:function(a){Y.disableVertexAttribArray(a)},Ya:function(a,b,c){Y.drawArrays(a,b,c)},Xa:function(a,b,c,d){Y.drawArraysInstanced(a,b,c,d)},_a:function(a,b,c,d){Y.drawElements(a,b,c,d)},Za:function(a,b,c,d,f){Y.drawElementsInstanced(a,b,c,d,f)},f:function(a){Y.enable(a)},na:function(a){Y.enableVertexAttribArray(a)},I:function(a){Y.frontFace(a)},G:function(a,b){Bb(a,b,"createBuffer",qb)},Ha:function(a,b){Bb(a,
b,"createVertexArray",ub)},va:function(a,b){return Y.getAttribLocation(R[a],E(b))},e:function(a,b){Cb(a,b)},Ba:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},C:function(a,b,c){if(c)if(a>=pb)V(1281);else{var d=U[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Fb;else if(35722==b){if(-1==d.zb){a=R[a];var f=Y.getProgramParameter(a,35721);for(b=d.zb=0;b<f;++b)d.zb=
Math.max(d.zb,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.zb}else if(35381==b){if(-1==d.Ab)for(a=R[a],f=Y.getProgramParameter(a,35382),b=d.Ab=0;b<f;++b)d.Ab=Math.max(d.Ab,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Ab}else F[c>>2]=Y.getProgramParameter(R[a],b);else V(1282)}else V(1281)},wa:function(a,b,c,d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),
F[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Na:function(a){if(wb[a])return wb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Db(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Db(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Db(b);break;case 35724:b=
Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Db(b);break;default:return V(1280),0}return wb[a]=b},Ma:function(a,b){if(2>X.version)return V(1282),0;var c=xb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Db(d)}),c=xb[a]=c,0>b||b>=c.length?(V(1281),
0):c[b];default:return V(1280),0}},j:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=U[a]&&U[a].Qb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ca:function(a){Y.linkProgram(R[a]);var b=R[a];a=U[a]={Qb:{},Fb:0,zb:-1,Ab:-1};for(var c=a.Qb,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var k=Y.getActiveUniform(b,f),g=k.name;a.Fb=Math.max(a.Fb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,
g);if(m){var n=W(S);c[g]=[k.size,n];S[n]=m;for(var q=1;q<k.size;++q)m=Y.getUniformLocation(b,g+"["+q+"]"),n=W(S),S[n]=m}}},J:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},ta:function(a,b,c,d){Y.scissor(a,b,c,d)},za:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?F[d+4*k>>2]:-1;f+=E(F[c+4*k>>2],0>g?void 0:g)}Y.shaderSource(T[a],f)},Ga:function(a,b,c){Y.stencilFunc(a,b,c)},x:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},Fa:function(a,b,c){Y.stencilOp(a,
b,c)},w:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},ma:function(a,b,c){if(2<=X.version)Y.uniform1fv(S[a],G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=G[c+4*f>>2];else d=G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(S[a],d)}},B:function(a,b){Y.uniform1i(S[a],b)},la:function(a,b,c){if(2<=X.version)Y.uniform2fv(S[a],G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Y.uniform2fv(S[a],d)}},ka:function(a,b,c){if(2<=
X.version)Y.uniform3fv(S[a],G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2],d[f+2]=G[c+(4*f+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Y.uniform3fv(S[a],d)}},ja:function(a,b,c){if(2<=X.version)Y.uniform4fv(S[a],G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=G;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=f[g];d[k+1]=f[g+1];d[k+2]=f[g+2];d[k+3]=f[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(S[a],d)}},$a:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(S[a],
!!c,G,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],k=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=k[m];f[g+1]=k[m+1];f[g+2]=k[m+2];f[g+3]=k[m+3];f[g+4]=k[m+4];f[g+5]=k[m+5];f[g+6]=k[m+6];f[g+7]=k[m+7];f[g+8]=k[m+8];f[g+9]=k[m+9];f[g+10]=k[m+10];f[g+11]=k[m+11];f[g+12]=k[m+12];f[g+13]=k[m+13];f[g+14]=k[m+14];f[g+15]=k[m+15]}}else f=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(S[a],!!c,f)}},l:function(a){Y.useProgram(R[a])},oa:function(a,b){Y.vertexAttribDivisor(a,b)},pa:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,
b,c,!!d,f,k)},ua:function(a,b,c,d){Y.viewport(a,b,c,d)},Ta:function(){e.Kb=function(a){0!=Gb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Kb)},Sa:function(){e.Pb=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Pb)},Ra:function(a){e.lc=[];a=E(a);a=document.getElementById(a);e.Lb=function(b){b.stopPropagation();b.preventDefault()};e.Mb=function(b){b.stopPropagation();b.preventDefault()};e.Nb=
function(b){b.stopPropagation();b.preventDefault()};e.Ob=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.mc=c;Hb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ib(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Lb,!1);a.addEventListener("dragleave",e.Mb,!1);a.addEventListener("dragover",e.Nb,!1);a.addEventListener("drop",e.Ob,!1)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Jb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},ab:function(a){a=E(a);e.Bb=document.getElementById(a);e.Bb||console.log("sokol_app.h: invalid target:"+a);e.Bb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",e.Kb)},Pa:function(){window.removeEventListener("paste",e.Pb)},Oa:function(a){a=
E(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.Lb);a.removeEventListener("dragleave",e.Mb);a.removeEventListener("dragover",e.Nb);a.removeEventListener("drop",e.Ob)},v:function(){e.Bb&&e.Bb.requestPointerLock&&e.Bb.requestPointerLock()},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;ka=e.asm.bb;wa();I=e.asm.ub;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ea&&(clearInterval(Ea),Ea=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return Ja().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){y("failed to asynchronously prepare wasm: "+k);x(k)})}var d={a:Kb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||Fa("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ca=e.___wasm_call_ctors=function(){return(Ca=e.___wasm_call_ctors=e.asm.cb).apply(null,arguments)},Jb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Jb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.db).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.eb).apply(null,arguments)};
var Gb=e.__sapp_html5_get_ask_leave_site=function(){return(Gb=e.__sapp_html5_get_ask_leave_site=e.asm.fb).apply(null,arguments)},Hb=e.__sapp_emsc_begin_drop=function(){return(Hb=e.__sapp_emsc_begin_drop=e.asm.gb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.hb).apply(null,arguments)};var Ib=e.__sapp_emsc_end_drop=function(){return(Ib=e.__sapp_emsc_end_drop=e.asm.ib).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.jb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.kb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.lb).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.mb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.nb).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.ob).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.pb).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.qb).apply(null,arguments)},pa=e.stackSave=function(){return(pa=e.stackSave=e.asm.rb).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.sb).apply(null,arguments)},A=e.stackAlloc=function(){return(A=e.stackAlloc=e.asm.tb).apply(null,arguments)},Lb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Mb(){Lb||Nb();Lb||(K=Mb)};
function Nb(a){function b(){if(!Lb&&(Lb=!0,e.calledRun=!0,!la)){Ka(ya);Ka(za);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ob){var c=a,d=e._main;c=c||[];var f=c.length+1,k=A(4*(f+1));F[k>>2]=ta(aa);for(var g=1;g<f;g++)F[(k>>2)+g]=ta(c[g-1]);F[(k>>2)+f]=0;try{var m=d(f,k);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(e.onExit)e.onExit(m);la=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ba.unshift(c);Ka(Ba)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();Ka(xa);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Nb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Ob=!0;e.noInitialRun&&(Ob=!1);Nb();
