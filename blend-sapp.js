
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,q,r;
if(ea){var fs=require("fs"),ha=require("path");p=l?ha.dirname(p)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};r=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};q=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof t))throw a;});process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof t||u("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(r=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),q=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var u=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var z,ja=!1,ka="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function A(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&ka)a=ka.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var ma,B,na,D,E,F;function oa(){var a=z.buffer;f.HEAP8=ma=new Int8Array(a);f.HEAP16=na=new Int16Array(a);f.HEAP32=D=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAPU32=new Uint32Array(a);f.HEAPF32=E=new Float32Array(a);f.HEAPF64=F=new Float64Array(a)}var pa,qa=[],ra=[],sa=[],ta=[],ua=[];
function va(){var a=f.preRun.shift();qa.unshift(a)}var G=0,wa=null,H=null;function ia(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";u(a);ja=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function xa(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="blend-sapp.wasm";if(!xa()){var ya=I;I=f.locateFile?f.locateFile(ya,p):p+ya}
function za(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(r)return r(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Aa(){if(!y&&(da||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return za()});if(q)return new Promise(function(a,b){q(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return za()})}function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function J(a){for(;0<a.length;)a.shift()(f)}function Ba(a){var b=Ca();a();Da(b)}var Ea=0;function Fa(){for(var a=K.length-1;0<=a;--a)Ga(a);K=[];Ha=[]}var Ha=[];function Ia(){if(Ea&&Ja.Lb)for(var a=0;a<Ha.length;++a){var b=Ha[a];Ha.splice(a,1);--a;b.yc.apply(null,b.nc)}}var K=[];function Ga(a){var b=K[a];b.target.removeEventListener(b.Eb,b.jc,b.Fb);K.splice(a,1)}
function L(a){function b(d){++Ea;Ja=a;Ia();a.Hb(d);Ia();--Ea}if(a.Gb)a.jc=b,a.target.addEventListener(a.Eb,b,a.Fb),K.push(a),Ka||(ta.push(Fa),Ka=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].Eb==a.Eb&&Ga(c--)}function La(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ka,Ja,Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function M(a){a=2<a?A(a):a;return Ta[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ua(a){return 0>Ta.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Va=[];function N(a){var b=Va[a];b||(a>=Va.length&&(Va.length=a+1),Va[a]=b=pa.get(a));return b}function Wa(a,b,c,d,e,k){Ma||(Ma=O(256));a={target:M(a),Eb:k,Gb:d,Hb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ma;C(La(g.target),B,n+0,128);C(m,B,n+128,128);N(d)(e,n,b)&&g.preventDefault()},Fb:c};L(a)}
function Xa(a,b,c,d,e,k){Na||(Na=O(176));a={target:M(a),Lb:!0,Eb:k,Gb:d,Hb:function(g){var m=Na;F[m>>3]=g.timeStamp;var n=m>>2;D[n+2]=g.location;D[n+3]=g.ctrlKey;D[n+4]=g.shiftKey;D[n+5]=g.altKey;D[n+6]=g.metaKey;D[n+7]=g.repeat;D[n+8]=g.charCode;D[n+9]=g.keyCode;D[n+10]=g.which;C(g.key||"",B,m+44,32);C(g.code||"",B,m+76,32);C(g.char||"",B,m+108,32);C(g.locale||"",B,m+140,32);N(d)(e,m,b)&&g.preventDefault()},Fb:c};L(a)}
function Ya(a,b,c){F[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;na[2*a+20]=b.button;na[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=Ua(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Oa||(Oa=O(72));a=M(a);L({target:a,Lb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Eb:k,Gb:d,Hb:function(g){g=g||event;Ya(Oa,g,a);N(d)(e,Oa,b)&&g.preventDefault()},Fb:c})}function Za(a,b,c,d,e){Pa||(Pa=O(260));L({target:a,Eb:e,Gb:d,Hb:function(k){k=k||event;var g=Pa,m=document.pointerLockElement||document.Ib||document.Sb||document.Rb;D[g>>2]=!!m;var n=m&&m.id?m.id:"";C(La(m),B,g+4,128);C(n,B,g+132,128);N(d)(20,g,b)&&k.preventDefault()},Fb:c})}
function $a(a,b,c,d,e){L({target:a,Eb:e,Gb:d,Hb:function(k){k=k||event;N(d)(38,0,b)&&k.preventDefault()},Fb:c})}
function ab(a,b,c,d){Qa||(Qa=O(36));a=M(a);L({target:a,Eb:"resize",Gb:d,Hb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Qa;D[g>>2]=e.detail;D[g+4>>2]=k.clientWidth;D[g+8>>2]=k.clientHeight;D[g+12>>2]=innerWidth;D[g+16>>2]=innerHeight;D[g+20>>2]=outerWidth;D[g+24>>2]=outerHeight;D[g+28>>2]=pageXOffset;D[g+32>>2]=pageYOffset;N(d)(10,g,b)&&e.preventDefault()}}},Fb:c})}
function bb(a,b,c,d,e,k){Ra||(Ra=O(1696));a=M(a);L({target:a,Lb:"touchstart"==k||"touchend"==k,Eb:k,Gb:d,Hb:function(g){for(var m,n={},w=g.touches,x=0;x<w.length;++x)m=w[x],m.Xb=m.Zb=0,n[m.identifier]=m;for(x=0;x<g.changedTouches.length;++x)m=g.changedTouches[x],m.Xb=1,n[m.identifier]=m;for(x=0;x<g.targetTouches.length;++x)n[g.targetTouches[x].identifier].Zb=1;w=Ra;F[w>>3]=g.timeStamp;var v=w>>2;D[v+3]=g.ctrlKey;D[v+4]=g.shiftKey;D[v+5]=g.altKey;D[v+6]=g.metaKey;v+=7;var fb=Ua(a),gb=0;for(x in n)if(m=
n[x],D[v]=m.identifier,D[v+1]=m.screenX,D[v+2]=m.screenY,D[v+3]=m.clientX,D[v+4]=m.clientY,D[v+5]=m.pageX,D[v+6]=m.pageY,D[v+7]=m.Xb,D[v+8]=m.Zb,D[v+9]=m.clientX-fb.left,D[v+10]=m.clientY-fb.top,v+=13,31<++gb)break;D[w+8>>2]=gb;N(d)(e,w,b)&&g.preventDefault()},Fb:c})}function cb(a,b,c,d,e,k){a={target:M(a),Eb:k,Gb:d,Hb:function(g){g=g||event;N(d)(e,0,b)&&g.preventDefault()},Fb:c};L(a)}
function db(a,b,c,d){Sa||(Sa=O(104));L({target:a,Lb:!0,Eb:"wheel",Gb:d,Hb:function(e){e=e||event;var k=Sa;Ya(k,e,a);F[k+72>>3]=e.deltaX;F[k+80>>3]=e.deltaY;F[k+88>>3]=e.deltaZ;D[k+96>>2]=e.deltaMode;N(d)(9,k,b)&&e.preventDefault()},Fb:c})}
function eb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function jb(a){a.pc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function kb(a){a.rc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function lb(a){a.tc=a.getExtension("WEBGL_multi_draw")}var mb=1,nb=[],Q=[],ob=[],pb=[],qb=[],R=[],rb=[],sb=[],tb={},ub={};function S(a){vb||(vb=a)}function wb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}
function xb(a,b){a.Ib||(a.Ib=a.getContext,a.getContext=function(d,e){e=a.Ib(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Yb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?yb(c,b):0}function yb(a,b){var c=wb(sb),d={qc:c,attributes:b,version:b.Yb,Pb:a};a.canvas&&(a.canvas.mc=d);sb[c]=d;("undefined"==typeof b.Wb||b.Wb)&&zb(d);return c}
function zb(a){a||(a=T);if(!a.lc){a.lc=!0;var b=a.Pb;eb(b);hb(b);ib(b);jb(b);kb(b);2<=a.version&&(b.Vb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Vb)b.Vb=b.getExtension("EXT_disjoint_timer_query");lb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var vb,T,Ab=["default","low-power","high-performance"];
function Bb(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&wb(d);k?(k.name=g,d[g]=k):S(1282);D[b+4*e>>2]=g}}
function Cb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);u("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);u("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else S(1281)}
function V(a){var b=la(a)+1,c=O(b);C(a,B,c,b);return c}function Db(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){var b=U.ic;if(b){var c=b.Kb[a];"number"==typeof c&&(b.Kb[a]=c=U.getUniformLocation(b,b.fc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];function Eb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ja=!0}h(a,new t(a))}function Fb(a){var b=la(a)+1,c=Gb(b);C(a,ma,c,b);return c}for(var U,Hb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Hb.subarray(0,Z+1);var Ib=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Ib.subarray(0,Z+1);
var Pb={R:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=M(a);if(!a)return-4;a=Ua(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},Wa:function(a,b,c){B.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){N(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Va:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;
a:{var g=z.buffer;try{z.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);oa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},S:function(a,b,c,d){Wa(a,b,c,d,12,"blur");return 0},O:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){Wa(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){Xa(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){Xa(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){Xa(a,b,c,d,3,"keyup");return 0},ga:function(a,b,c,d){P(a,
b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ib||document.body.Sb||document.body.Rb))return-1;a=M(a);if(!a)return-4;Za(a,b,c,d,"pointerlockchange");Za(a,b,c,d,"mozpointerlockchange");Za(a,b,
c,d,"webkitpointerlockchange");Za(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Ib||document.body.Sb||document.body.Rb))return-1;a=M(a);if(!a)return-4;$a(a,b,c,d,"pointerlockerror");$a(a,b,c,d,"mozpointerlockerror");$a(a,b,c,d,"webkitpointerlockerror");$a(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){ab(a,b,c,d);return 0},W:function(a,b,c,d){bb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){bb(a,
b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=M(a);return"undefined"!=typeof a.onwheel?(db(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+
5],powerPreference:Ab[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],Yb:D[b+8],sc:D[b+9],Wb:D[b+10],kc:D[b+11],uc:D[b+12],vc:D[b+13]};a=M(a);return!a||b.kc?0:xb(a,b)},oa:function(a,b){a=sb[a];b=A(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&eb(U);"OES_vertex_array_object"==b&&hb(U);"WEBGL_draw_buffers"==b&&ib(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&jb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&kb(U);"WEBGL_multi_draw"==b&&lb(U);return!!a.Pb.getExtension(b)},
Da:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},va:function(a){T=sb[a];f.oc=U=T&&T.Pb;return!a||U?0:-5},b:function(a){U.activeTexture(a)},C:function(a,b){U.attachShader(Q[a],R[b])},e:function(a,b){35051==a?U.Tb=b:35052==a&&(U.Ub=b);U.bindBuffer(a,nb[b])},g:function(a,b){U.bindFramebuffer(a,ob[b])},a:function(a,b){U.bindTexture(a,qb[b])},L:function(a){U.bindVertexArray(rb[a])},H:function(a,b,c,d){U.blendColor(a,b,c,d)},I:function(a,b){U.blendEquationSeparate(a,
b)},J:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},o:function(a,b,c,d,e,k,g,m,n,w){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,w)},za:function(a,b,c,d){2<=T.version?c&&b?U.bufferData(a,B,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?B.subarray(c,c+b):b,d)},ya:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,B,d,c):U.bufferSubData(a,b,B.subarray(d,d+c))},ka:function(a){U.clear(a)},y:function(a,b,c,d){U.clearColor(a,b,c,d)},q:function(a){U.clearDepth(a)},la:function(a){U.clearStencil(a)},i:function(a,
b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},ra:function(a){U.compileShader(R[a])},xa:function(){var a=wb(Q),b=U.createProgram();b.name=a;b.Ob=b.Mb=b.Nb=0;b.Qb=1;Q[a]=b;return a},ta:function(a){var b=wb(R);R[b]=U.createShader(a);return b},D:function(a){U.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=nb[d];e&&(U.deleteBuffer(e),e.name=0,nb[d]=null,d==U.Tb&&(U.Tb=0),d==U.Ub&&(U.Ub=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=ob[d];e&&(U.deleteFramebuffer(e),e.name=
0,ob[d]=null)}},M:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=pb[d];e&&(U.deleteRenderbuffer(e),e.name=0,pb[d]=null)}},r:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=qb[d];e&&(U.deleteTexture(e),e.name=0,qb[d]=null)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];U.deleteVertexArray(rb[d]);rb[d]=null}},u:function(a){U.depthFunc(a)},
t:function(a){U.depthMask(!!a)},d:function(a){U.disable(a)},K:function(a){U.disableVertexAttribArray(a)},Xa:function(a,b,c){U.drawArrays(a,b,c)},Ya:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},Za:function(a,b,c,d){U.drawElements(a,b,c,d)},_a:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},f:function(a){U.enable(a)},ib:function(a){U.enableVertexAttribArray(a)},E:function(a){U.frontFace(a)},Aa:function(a,b){Bb(a,b,"createBuffer",nb)},Fa:function(a,b){Bb(a,b,"createVertexArray",rb)},pa:function(a,
b){return U.getAttribLocation(Q[a],A(b))},c:function(a,b){Cb(a,b)},ua:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,B,d,b):0;c&&(D[c>>2]=b)},B:function(a,b,c){if(c)if(a>=mb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.Ob)for(b=0;b<U.getProgramParameter(a,35718);++b)a.Ob=Math.max(a.Ob,U.getActiveUniform(a,b).name.length+1);D[c>>2]=a.Ob}else if(35722==b){if(!a.Mb)for(b=
0;b<U.getProgramParameter(a,35721);++b)a.Mb=Math.max(a.Mb,U.getActiveAttrib(a,b).name.length+1);D[c>>2]=a.Mb}else if(35381==b){if(!a.Nb)for(b=0;b<U.getProgramParameter(a,35382);++b)a.Nb=Math.max(a.Nb,U.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.Nb}else D[c>>2]=U.getProgramParameter(a,b);else S(1281)},qa:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,B,d,b):0;c&&(D[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),
D[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=U.getShaderParameter(R[a],b):S(1281)},La:function(a){var b=tb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);
var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}tb[a]=b}return b},Ka:function(a,b){if(2>T.version)return S(1282),0;var c=ub[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=ub[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),
0}},j:function(a,b){b=A(b);if(a=Q[a]){var c=a,d=c.Kb,e=c.hc,k;if(!d)for(c.Kb=d={},c.fc={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Db(m);n=0<n?m.slice(0,n):m;var w=c.Qb;c.Qb+=g;e[n]=[g,w];for(m=0;m<g;++m)d[w]=m,c.fc[w++]=n}c=a.Kb;d=0;e=b;k=Db(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.hc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},wa:function(a){a=Q[a];U.linkProgram(a);a.Kb=
0;a.hc={}},Ea:function(a,b){U.pixelStorei(a,b)},G:function(a,b){U.polygonOffset(a,b)},p:function(a){U.readBuffer(a)},ma:function(a,b,c,d){U.scissor(a,b,c,d)},sa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?D[d+4*k>>2]:-1;e+=A(D[c+4*k>>2],0>g?void 0:g)}U.shaderSource(R[a],e)},Ca:function(a,b,c){U.stencilFunc(a,b,c)},x:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},s:function(a){U.stencilMask(a)},Ba:function(a,b,c){U.stencilOp(a,b,c)},w:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},hb:function(a,
b,c){if(2<=T.version)b&&U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},A:function(a,b){U.uniform1i(W(a),b)},db:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),D,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},gb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=
2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},cb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},fb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>
2,c+12*b>>2);U.uniform3fv(W(a),d)}},bb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},eb:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=E.subarray(c>>2,c+16*b>>2);
U.uniform4fv(W(a),d)}},ab:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),D,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},$a:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=E;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+
4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=Q[a];U.useProgram(a);U.ic=a},ia:function(a,b){U.vertexAttribDivisor(a,b)},ja:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},na:function(a,b,c,d){U.viewport(a,b,c,d)},Ta:function(){f.$b=a=>{0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};
window.addEventListener("beforeunload",f.$b)},Sa:function(){f.ec=a=>{const b=a.clipboardData.getData("text");Ba(()=>{const c=Fb(b);Kb(c)})};window.addEventListener("paste",f.ec)},Ra:function(a){f.wc=[];a=A(a);a=document.getElementById(a);f.ac=b=>{b.stopPropagation();b.preventDefault()};f.bc=b=>{b.stopPropagation();b.preventDefault()};f.cc=b=>{b.stopPropagation();b.preventDefault()};f.dc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.xc=c;Lb(c.length);for(let d=0;d<c.length;d++)Ba(()=>
{const e=Fb(c[d].name);Mb(d,e)});Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.ac,!1);a.addEventListener("dragleave",f.bc,!1);a.addEventListener("dragover",f.cc,!1);a.addEventListener("drop",f.dc,!1)},Na:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},n:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},
m:function(){document.getElementById("_sokol_app_input_element").focus()},jb:function(a){a=A(a);f.Jb=document.getElementById(a);f.Jb||console.log("sokol_app.h: invalid target:"+a);f.Jb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",f.$b)},Pa:function(){window.removeEventListener("paste",f.ec)},Oa:function(a){a=A(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.ac);a.removeEventListener("dragleave",
f.bc);a.removeEventListener("dragover",f.cc);a.removeEventListener("drop",f.dc)},v:function(){f.Jb&&f.Jb.requestPointerLock&&f.Jb.requestPointerLock()},Ma:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(B.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},l:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;z=f.asm.kb;oa();pa=f.asm.Ab;ra.unshift(f.asm.lb);G--;f.monitorRunDependencies&&f.monitorRunDependencies(G);0==G&&(null!==wa&&(clearInterval(wa),wa=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Aa().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){u("failed to asynchronously prepare wasm: "+k);ia(k)})}var d={a:Pb};G++;f.monitorRunDependencies&&f.monitorRunDependencies(G);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return u("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||xa()||I.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){u("wasm streaming compile failed: "+k);u("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.lb).apply(null,arguments)};
var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.mb).apply(null,arguments)},Kb=f.__sapp_emsc_onpaste=function(){return(Kb=f.__sapp_emsc_onpaste=f.asm.nb).apply(null,arguments)},Jb=f.__sapp_html5_get_ask_leave_site=function(){return(Jb=f.__sapp_html5_get_ask_leave_site=f.asm.ob).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.pb).apply(null,arguments)},Mb=f.__sapp_emsc_drop=function(){return(Mb=
f.__sapp_emsc_drop=f.asm.qb).apply(null,arguments)},Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.rb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.sb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.tb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.ub).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.vb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.wb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.xb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.yb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.zb).apply(null,arguments)},Ca=f.stackSave=function(){return(Ca=f.stackSave=f.asm.Bb).apply(null,arguments)},Da=f.stackRestore=function(){return(Da=f.stackRestore=f.asm.Cb).apply(null,arguments)},Gb=f.stackAlloc=function(){return(Gb=f.stackAlloc=f.asm.Db).apply(null,arguments)};f.___start_em_js=8392;f.___stop_em_js=17677;var Qb;H=function Rb(){Qb||Sb();Qb||(H=Rb)};
function Tb(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Gb(4*(c+1)),e=d>>2;a.forEach(g=>{D[e++]=Fb(g)});D[e]=0;try{var k=b(c,d);Eb(k)}catch(g){g instanceof t||"unwind"==g||h(1,g)}}
function Sb(){function a(){if(!Qb&&(Qb=!0,f.calledRun=!0,!ja)){J(ra);J(sa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();Ub&&Tb(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ua.unshift(c)}J(ua)}}var b=b||ba;if(!(0<G)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)va();J(qa);0<G||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},
1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);Sb();
