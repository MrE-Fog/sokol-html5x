
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,r,t;
if(ea){var fs=require("fs"),ha=require("path");p=l?ha.dirname(p)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};t=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};r=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof u))throw a;});process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof u||w("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(t=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),r=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var w=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var ja,ka=!1,la="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function z(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&la)a=la.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ma(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var na,A,oa,pa,C,qa,D,E;function ra(){var a=ja.buffer;f.HEAP8=na=new Int8Array(a);f.HEAP16=oa=new Int16Array(a);f.HEAP32=C=new Int32Array(a);f.HEAPU8=A=new Uint8Array(a);f.HEAPU16=pa=new Uint16Array(a);f.HEAPU32=qa=new Uint32Array(a);f.HEAPF32=D=new Float32Array(a);f.HEAPF64=E=new Float64Array(a)}var sa,ta=[],ua=[],va=[],wa=[],xa=[];
function ya(){var a=f.preRun.shift();ta.unshift(a)}var F=0,za=null,G=null;function ia(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";w(a);ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Aa(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="mipmap-sapp.wasm";if(!Aa()){var Ba=H;H=f.locateFile?f.locateFile(Ba,p):p+Ba}
function Ca(){var a=H;try{if(a==H&&y)return new Uint8Array(y);if(t)return t(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Da(){if(!y&&(da||l)){if("function"==typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Ca()});if(r)return new Promise(function(a,b){r(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ca()})}function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ea(a){for(;0<a.length;)a.shift()(f)}function Fa(a){var b=Ga();a();Ha(b)}var Ia=0;function Ja(){for(var a=I.length-1;0<=a;--a)Ka(a);I=[];La=[]}var La=[];function Ma(){if(Ia&&Na.Xb)for(var a=0;a<La.length;++a){var b=La[a];La.splice(a,1);--a;b.Jc.apply(null,b.yc)}}var I=[];function Ka(a){var b=I[a];b.target.removeEventListener(b.Pb,b.uc,b.Qb);I.splice(a,1)}
function J(a){function b(d){++Ia;Na=a;Ma();a.Sb(d);Ma();--Ia}if(a.Rb)a.uc=b,a.target.addEventListener(a.Pb,b,a.Qb),I.push(a),Oa||(wa.push(Ja),Oa=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].Pb==a.Pb&&Ka(c--)}function Pa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Oa,Na,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function K(a){a=2<a?z(a):a;return Xa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Za=[];function L(a){var b=Za[a];b||(a>=Za.length&&(Za.length=a+1),Za[a]=b=sa.get(a));return b}function $a(a,b,c,d,e,k){Qa||(Qa=M(256));a={target:K(a),Pb:k,Rb:d,Sb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Qa;B(Pa(g.target),A,n+0,128);B(m,A,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Qb:c};J(a)}
function ab(a,b,c,d,e,k){Ra||(Ra=M(176));a={target:K(a),Xb:!0,Pb:k,Rb:d,Sb:function(g){var m=Ra;E[m>>3]=g.timeStamp;var n=m>>2;C[n+2]=g.location;C[n+3]=g.ctrlKey;C[n+4]=g.shiftKey;C[n+5]=g.altKey;C[n+6]=g.metaKey;C[n+7]=g.repeat;C[n+8]=g.charCode;C[n+9]=g.keyCode;C[n+10]=g.which;B(g.key||"",A,m+44,32);B(g.code||"",A,m+76,32);B(g.char||"",A,m+108,32);B(g.locale||"",A,m+140,32);L(d)(e,m,b)&&g.preventDefault()},Qb:c};J(a)}
function bb(a,b,c){E[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;oa[2*a+20]=b.button;oa[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=Ya(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,k){Sa||(Sa=M(72));a=K(a);J({target:a,Xb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Pb:k,Rb:d,Sb:function(g){g=g||event;bb(Sa,g,a);L(d)(e,Sa,b)&&g.preventDefault()},Qb:c})}function cb(a,b,c,d,e){Ta||(Ta=M(260));J({target:a,Pb:e,Rb:d,Sb:function(k){k=k||event;var g=Ta,m=document.pointerLockElement||document.Ub||document.dc||document.cc;C[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Pa(m),A,g+4,128);B(n,A,g+132,128);L(d)(20,g,b)&&k.preventDefault()},Qb:c})}
function db(a,b,c,d,e){J({target:a,Pb:e,Rb:d,Sb:function(k){k=k||event;L(d)(38,0,b)&&k.preventDefault()},Qb:c})}
function eb(a,b,c,d){Ua||(Ua=M(36));a=K(a);J({target:a,Pb:"resize",Rb:d,Sb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Ua;C[g>>2]=e.detail;C[g+4>>2]=k.clientWidth;C[g+8>>2]=k.clientHeight;C[g+12>>2]=innerWidth;C[g+16>>2]=innerHeight;C[g+20>>2]=outerWidth;C[g+24>>2]=outerHeight;C[g+28>>2]=pageXOffset;C[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Qb:c})}
function fb(a,b,c,d,e,k){Va||(Va=M(1696));a=K(a);J({target:a,Xb:"touchstart"==k||"touchend"==k,Pb:k,Rb:d,Sb:function(g){for(var m,n={},q=g.touches,x=0;x<q.length;++x)m=q[x],m.ic=m.kc=0,n[m.identifier]=m;for(x=0;x<g.changedTouches.length;++x)m=g.changedTouches[x],m.ic=1,n[m.identifier]=m;for(x=0;x<g.targetTouches.length;++x)n[g.targetTouches[x].identifier].kc=1;q=Va;E[q>>3]=g.timeStamp;var v=q>>2;C[v+3]=g.ctrlKey;C[v+4]=g.shiftKey;C[v+5]=g.altKey;C[v+6]=g.metaKey;v+=7;var N=Ya(a),T=0;for(x in n)if(m=
n[x],C[v]=m.identifier,C[v+1]=m.screenX,C[v+2]=m.screenY,C[v+3]=m.clientX,C[v+4]=m.clientY,C[v+5]=m.pageX,C[v+6]=m.pageY,C[v+7]=m.ic,C[v+8]=m.kc,C[v+9]=m.clientX-N.left,C[v+10]=m.clientY-N.top,v+=13,31<++T)break;C[q+8>>2]=T;L(d)(e,q,b)&&g.preventDefault()},Qb:c})}function gb(a,b,c,d,e,k){a={target:K(a),Pb:k,Rb:d,Sb:function(g){g=g||event;L(d)(e,0,b)&&g.preventDefault()},Qb:c};J(a)}
function hb(a,b,c,d){Wa||(Wa=M(104));J({target:a,Xb:!0,Pb:"wheel",Rb:d,Sb:function(e){e=e||event;var k=Wa;bb(k,e,a);E[k+72>>3]=e.deltaX;E[k+80>>3]=e.deltaY;E[k+88>>3]=e.deltaZ;C[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},Qb:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function lb(a){a.Ac=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function mb(a){a.Cc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function nb(a){a.Ec=a.getExtension("WEBGL_multi_draw")}var ob=1,pb=[],P=[],qb=[],rb=[],sb=[],Q=[],tb=[],ub=[],vb={},wb={},xb=4;function R(a){yb||(yb=a)}function zb(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}
function Ab(a,b){a.Ub||(a.Ub=a.getContext,a.getContext=function(d,e){e=a.Ub(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.jc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Bb(c,b):0}function Bb(a,b){var c=zb(ub),d={Bc:c,attributes:b,version:b.jc,ac:a};a.canvas&&(a.canvas.xc=d);ub[c]=d;("undefined"==typeof b.hc||b.hc)&&Cb(d);return c}
function Cb(a){a||(a=S);if(!a.wc){a.wc=!0;var b=a.ac;ib(b);jb(b);kb(b);lb(b);mb(b);2<=a.version&&(b.fc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.fc)b.fc=b.getExtension("EXT_disjoint_timer_query");nb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var yb,S,Db=["default","low-power","high-performance"];
function Eb(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&zb(d);k?(k.name=g,d[g]=k):R(1282);C[b+4*e>>2]=g}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);w("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);w("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else R(1281)}
function V(a){var b=ma(a)+1,c=M(b);B(a,A,c,b);return c}function Gb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Hb(a){a-=5120;return 0==a?na:1==a?A:2==a?oa:4==a?C:6==a?D:5==a||28922==a||28520==a||30779==a||30782==a?qa:pa}function W(a){var b=U.tc;if(b){var c=b.Wb[a];"number"==typeof c&&(b.Wb[a]=c=U.getUniformLocation(b,b.rc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];function Ib(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ka=!0}h(a,new u(a))}
function Jb(a){var b=ma(a)+1,c=Kb(b);B(a,na,c,b);return c}for(var U,Lb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Lb.subarray(0,Z+1);var Mb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Mb.subarray(0,Z+1);
var Tb={S:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=K(a);if(!a)return-4;a=Ya(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},Za:function(a,b,c){A.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;
a:{var g=ja.buffer;try{ja.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);ra();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},T:function(a,b,c,d){$a(a,b,c,d,12,"blur");return 0},P:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){$a(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){O(a,
b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){O(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){O(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){O(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){O(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ub||document.body.dc||document.body.cc))return-1;a=K(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");cb(a,b,
c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Ub||document.body.dc||document.body.cc))return-1;a=K(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){eb(a,b,c,d);return 0},X:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){fb(a,
b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=K(a);return"undefined"!=typeof a.onwheel?(hb(a,b,c,d),0):-1},G:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+
5],powerPreference:Db[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],jc:C[b+8],Dc:C[b+9],hc:C[b+10],vc:C[b+11],Fc:C[b+12],Gc:C[b+13]};a=K(a);return!a||b.vc?0:Ab(a,b)},ra:function(a,b){a=ub[a];b=z(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(U);"OES_vertex_array_object"==b&&jb(U);"WEBGL_draw_buffers"==b&&kb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&lb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&mb(U);"WEBGL_multi_draw"==b&&nb(U);return!!a.ac.getExtension(b)},
Ga:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},ya:function(a){S=ub[a];f.zc=U=S&&S.ac;return!a||U?0:-5},b:function(a){U.activeTexture(a)},z:function(a,b){U.attachShader(P[a],Q[b])},e:function(a,b){35051==a?U.ec=b:35052==a&&(U.Tb=b);U.bindBuffer(a,pb[b])},h:function(a,b){U.bindFramebuffer(a,qb[b])},C:function(a,b){U.bindRenderbuffer(a,rb[b])},a:function(a,b){U.bindTexture(a,sb[b])},M:function(a){U.bindVertexArray(tb[a])},I:function(a,b,c,d){U.blendColor(a,
b,c,d)},J:function(a,b){U.blendEquationSeparate(a,b)},K:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,k,g,m,n,q){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,q)},Ca:function(a,b,c,d){2<=S.version?c&&b?U.bufferData(a,A,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?A.subarray(c,c+b):b,d)},Ba:function(a,b,c,d){2<=S.version?c&&U.bufferSubData(a,b,A,d,c):U.bufferSubData(a,b,A.subarray(d,d+c))},ob:function(a){U.clear(a)},rb:function(a,b,c,d){U.clearColor(a,b,c,d)},qb:function(a){U.clearDepth(a)},
pb:function(a){U.clearStencil(a)},k:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},na:function(a){U.compileShader(Q[a])},xa:function(a,b,c,d,e,k,g,m){2<=S.version?U.Tb||!g?U.compressedTexImage2D(a,b,c,d,e,k,g,m):U.compressedTexImage2D(a,b,c,d,e,k,A,m,g):U.compressedTexImage2D(a,b,c,d,e,k,m?A.subarray(m,m+g):null)},va:function(a,b,c,d,e,k,g,m,n){U.Tb?U.compressedTexImage3D(a,b,c,d,e,k,g,m,n):U.compressedTexImage3D(a,b,c,d,e,k,g,A,n,m)},ta:function(){var a=zb(P),b=U.createProgram();b.name=a;b.$b=b.Yb=
b.Zb=0;b.bc=1;P[a]=b;return a},pa:function(a){var b=zb(Q);Q[b]=U.createShader(a);return b},E:function(a){U.cullFace(a)},Ma:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=pb[d];e&&(U.deleteBuffer(e),e.name=0,pb[d]=null,d==U.ec&&(U.ec=0),d==U.Tb&&(U.Tb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=qb[d];e&&(U.deleteFramebuffer(e),e.name=0,qb[d]=null)}},N:function(a){if(a){var b=P[a];b?(U.deleteProgram(b),b.name=0,P[a]=null):R(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=
C[b+4*c>>2],e=rb[d];e&&(U.deleteRenderbuffer(e),e.name=0,rb[d]=null)}},r:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):R(1281)}},La:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=sb[d];e&&(U.deleteTexture(e),e.name=0,sb[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];U.deleteVertexArray(tb[d]);tb[d]=null}},u:function(a){U.depthFunc(a)},t:function(a){U.depthMask(!!a)},d:function(a){U.disable(a)},L:function(a){U.disableVertexAttribArray(a)},_a:function(a,b,
c){U.drawArrays(a,b,c)},$a:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},ab:function(a,b,c,d){U.drawElements(a,b,c,d)},bb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},lb:function(a){U.enableVertexAttribArray(a)},F:function(a){U.frontFace(a)},Da:function(a,b){Eb(a,b,"createBuffer",pb)},D:function(a,b){Eb(a,b,"createRenderbuffer",rb)},za:function(a,b){Eb(a,b,"createTexture",sb)},Ia:function(a,b){Eb(a,b,"createVertexArray",tb)},la:function(a,b){return U.getAttribLocation(P[a],
z(b))},c:function(a,b){Fb(a,b)},qa:function(a,b,c,d){a=U.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},y:function(a,b,c){if(c)if(a>=ob)R(1281);else if(a=P[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.$b)for(b=0;b<U.getProgramParameter(a,35718);++b)a.$b=Math.max(a.$b,U.getActiveUniform(a,b).name.length+1);C[c>>2]=a.$b}else if(35722==b){if(!a.Yb)for(b=0;b<U.getProgramParameter(a,35721);++b)a.Yb=
Math.max(a.Yb,U.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.Yb}else if(35381==b){if(!a.Zb)for(b=0;b<U.getProgramParameter(a,35382);++b)a.Zb=Math.max(a.Zb,U.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.Zb}else C[c>>2]=U.getProgramParameter(a,b);else R(1281)},ma:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},w:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==
b?(a=U.getShaderSource(Q[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=U.getShaderParameter(Q[a],b):R(1281)},Oa:function(a){var b=vb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||R(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:R(1280)}vb[a]=b}return b},Na:function(a,b){if(2>S.version)return R(1282),0;var c=wb[a];if(c)return 0>b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=wb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},j:function(a,b){b=z(b);if(a=P[a]){var c=a,d=c.Wb,e=c.sc,k;
if(!d)for(c.Wb=d={},c.rc={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Gb(m);n=0<n?m.slice(0,n):m;var q=c.bc;c.bc+=g;e[n]=[g,q];for(m=0;m<g;++m)d[q]=m,c.rc[q++]=n}c=a.Wb;d=0;e=b;k=Gb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.sc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else R(1281);return-1},sa:function(a){a=P[a];U.linkProgram(a);a.Wb=0;a.sc={}},Ha:function(a,b){3317==a&&(xb=b);U.pixelStorei(a,
b)},H:function(a,b){U.polygonOffset(a,b)},q:function(a){U.readBuffer(a)},Aa:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},B:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},sb:function(a,b,c,d){U.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?C[d+4*k>>2]:-1;e+=z(C[c+4*k>>2],0>g?void 0:g)}U.shaderSource(Q[a],e)},Fa:function(a,b,c){U.stencilFunc(a,b,c)},ia:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},s:function(a){U.stencilMask(a)},Ea:function(a,b,
c){U.stencilOp(a,b,c)},ha:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},wa:function(a,b,c,d,e,k,g,m,n){if(2<=S.version)if(U.Tb)U.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var q=Hb(m);U.texImage2D(a,b,c,d,e,k,g,m,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,k,g,m,null);else{q=U;var x=q.texImage2D;if(n){var v=Hb(m),N=31-Math.clz32(v.BYTES_PER_ELEMENT),T=xb;n=v.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+T-1&-T)>>N)}else n=
null;x.call(q,a,b,c,d,e,k,g,m,n)}},ua:function(a,b,c,d,e,k,g,m,n,q){if(U.Tb)U.texImage3D(a,b,c,d,e,k,g,m,n,q);else if(q){var x=Hb(n);U.texImage3D(a,b,c,d,e,k,g,m,n,x,q>>31-Math.clz32(x.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,g,m,n,null)},A:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},kb:function(a,b,c){if(2<=S.version)b&&U.uniform1fv(W(a),D,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),
d)}},x:function(a,b){U.uniform1i(W(a),b)},gb:function(a,b,c){if(2<=S.version)b&&U.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},jb:function(a,b,c){if(2<=S.version)b&&U.uniform2fv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},fb:function(a,b,c){if(2<=S.version)b&&U.uniform2iv(W(a),C,c>>2,
2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},ib:function(a,b,c){if(2<=S.version)b&&U.uniform3fv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},eb:function(a,b,c){if(2<=S.version)b&&U.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=
C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},hb:function(a,b,c){if(2<=S.version)b&&U.uniform4fv(W(a),D,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=D;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=D.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},db:function(a,b,c){if(2<=S.version)b&&U.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+
1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},cb:function(a,b,c,d){if(2<=S.version)b&&U.uniformMatrix4fv(W(a),!!c,D,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=D;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+
15]=k[m+15]}}else e=D.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},l:function(a){a=P[a];U.useProgram(a);U.tc=a},mb:function(a,b){U.vertexAttribDivisor(a,b)},nb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},tb:function(a,b,c,d){U.viewport(a,b,c,d)},Wa:function(){f.lc=a=>{0!=Nb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.lc)},Va:function(){f.qc=a=>{const b=a.clipboardData.getData("text");Fa(()=>{const c=Jb(b);Ob(c)})};window.addEventListener("paste",
f.qc)},Ua:function(a){f.Hc=[];a=z(a);a=document.getElementById(a);f.mc=b=>{b.stopPropagation();b.preventDefault()};f.nc=b=>{b.stopPropagation();b.preventDefault()};f.oc=b=>{b.stopPropagation();b.preventDefault()};f.pc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Ic=c;Pb(c.length);for(let d=0;d<c.length;d++)Fa(()=>{const e=Jb(c[d].name);Qb(d,e)});Rb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.mc,!1);a.addEventListener("dragleave",f.nc,!1);a.addEventListener("dragover",
f.oc,!1);a.addEventListener("drop",f.pc,!1)},Qa:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},ub:function(a){a=z(a);f.Vb=document.getElementById(a);f.Vb||console.log("sokol_app.h: invalid target:"+
a);f.Vb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",f.lc)},Sa:function(){window.removeEventListener("paste",f.qc)},Ra:function(a){a=z(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.mc);a.removeEventListener("dragleave",f.nc);a.removeEventListener("dragover",f.oc);a.removeEventListener("drop",f.pc)},v:function(){f.Vb&&f.Vb.requestPointerLock&&f.Vb.requestPointerLock()},Pa:function(a,
b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(A.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;ja=f.asm.vb;ra();sa=f.asm.Lb;ua.unshift(f.asm.wb);F--;f.monitorRunDependencies&&f.monitorRunDependencies(F);0==F&&(null!==za&&(clearInterval(za),za=null),G&&(e=G,G=null,e()))}function b(e){a(e.instance)}function c(e){return Da().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){w("failed to asynchronously prepare wasm: "+k);ia(k)})}var d={a:Tb};F++;f.monitorRunDependencies&&f.monitorRunDependencies(F);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return w("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Aa()||H.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){w("wasm streaming compile failed: "+k);w("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.wb).apply(null,arguments)};
var Sb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Sb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.xb).apply(null,arguments)},Ob=f.__sapp_emsc_onpaste=function(){return(Ob=f.__sapp_emsc_onpaste=f.asm.yb).apply(null,arguments)},Nb=f.__sapp_html5_get_ask_leave_site=function(){return(Nb=f.__sapp_html5_get_ask_leave_site=f.asm.zb).apply(null,arguments)},Pb=f.__sapp_emsc_begin_drop=function(){return(Pb=f.__sapp_emsc_begin_drop=f.asm.Ab).apply(null,arguments)},Qb=f.__sapp_emsc_drop=function(){return(Qb=
f.__sapp_emsc_drop=f.asm.Bb).apply(null,arguments)},Rb=f.__sapp_emsc_end_drop=function(){return(Rb=f.__sapp_emsc_end_drop=f.asm.Cb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Db).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Eb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Fb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Gb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Hb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Ib).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Jb).apply(null,arguments)};
var M=f._malloc=function(){return(M=f._malloc=f.asm.Kb).apply(null,arguments)},Ga=f.stackSave=function(){return(Ga=f.stackSave=f.asm.Mb).apply(null,arguments)},Ha=f.stackRestore=function(){return(Ha=f.stackRestore=f.asm.Nb).apply(null,arguments)},Kb=f.stackAlloc=function(){return(Kb=f.stackAlloc=f.asm.Ob).apply(null,arguments)};f.___start_em_js=7848;f.___stop_em_js=17133;var Ub;G=function Vb(){Ub||Wb();Ub||(G=Vb)};
function Xb(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Kb(4*(c+1)),e=d>>2;a.forEach(g=>{C[e++]=Jb(g)});C[e]=0;try{var k=b(c,d);Ib(k)}catch(g){g instanceof u||"unwind"==g||h(1,g)}}
function Wb(){function a(){if(!Ub&&(Ub=!0,f.calledRun=!0,!ka)){Ea(ua);Ea(va);if(f.onRuntimeInitialized)f.onRuntimeInitialized();Yb&&Xb(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();xa.unshift(c)}Ea(xa)}}var b=b||ba;if(!(0<F)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)ya();Ea(ta);0<F||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Yb=!0;f.noInitialRun&&(Yb=!1);Wb();
