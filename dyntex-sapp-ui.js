
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,u;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);process.on("uncaughtException",
function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ia||v("exiting due to exception: "+b);process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ja=g.print||console.log.bind(console),v=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);
g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var x;g.wasmBinary&&(x=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1,na="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&na)return na.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function y(a,b){return a?oa(z,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var qa,z,ra,sa,B,C,D,E;function ta(){var a=la.buffer;g.HEAP8=qa=new Int8Array(a);g.HEAP16=ra=new Int16Array(a);g.HEAP32=B=new Int32Array(a);g.HEAPU8=z=new Uint8Array(a);g.HEAPU16=sa=new Uint16Array(a);g.HEAPU32=C=new Uint32Array(a);g.HEAPF32=D=new Float32Array(a);g.HEAPF64=E=new Float64Array(a)}var ua,va=[],wa=[],xa=[],ya=[],za=[];
function Aa(){var a=g.preRun.shift();va.unshift(a)}var F=0,Ba=null,G=null;function ka(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";v(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ca(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="dyntex-sapp-ui.wasm";if(!Ca()){var Da=H;H=g.locateFile?g.locateFile(Da,q):q+Da}
function Ea(){var a=H;try{if(a==H&&x)return new Uint8Array(x);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function Fa(){if(!x&&(da||l)){if("function"==typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Ea()});if(t)return new Promise(function(a,b){t(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea()})}function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ga(a){for(;0<a.length;)a.shift()(g)}function Ha(a){var b=Ia();a();Ja(b)}var Ka=0;function La(){for(var a=I.length-1;0<=a;--a)Ma(a);I=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.ic)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Uc.apply(null,b.Jc)}}var I=[];function Ma(a){var b=I[a];b.target.removeEventListener(b.$b,b.Fc,b.ac);I.splice(a,1)}
function J(a){function b(d){++Ka;Pa=a;Oa();a.cc(d);Oa();--Ka}if(a.bc)a.Fc=b,a.target.addEventListener(a.$b,b,a.ac),I.push(a),Qa||(ya.push(La),Qa=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].$b==a.$b&&Ma(c--)}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function K(a){a=2<a?y(a):a;return Za[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var ab=[];function L(a){var b=ab[a];b||(a>=ab.length&&(ab.length=a+1),ab[a]=b=ua.get(a));return b}function bb(a,b,c,d,e,k){Sa||(Sa=M(256));a={target:K(a),$b:k,bc:d,cc:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Sa;A(Ra(f.target),z,n+0,128);A(m,z,n+128,128);L(d)(e,n,b)&&f.preventDefault()},ac:c};J(a)}
function cb(a,b,c,d,e,k){Ta||(Ta=M(176));a={target:K(a),ic:!0,$b:k,bc:d,cc:function(f){var m=Ta;E[m>>3]=f.timeStamp;var n=m>>2;B[n+2]=f.location;B[n+3]=f.ctrlKey;B[n+4]=f.shiftKey;B[n+5]=f.altKey;B[n+6]=f.metaKey;B[n+7]=f.repeat;B[n+8]=f.charCode;B[n+9]=f.keyCode;B[n+10]=f.which;A(f.key||"",z,m+44,32);A(f.code||"",z,m+76,32);A(f.char||"",z,m+108,32);A(f.locale||"",z,m+140,32);L(d)(e,m,b)&&f.preventDefault()},ac:c};J(a)}
function db(a,b,c){E[a>>3]=b.timeStamp;a>>=2;B[a+2]=b.screenX;B[a+3]=b.screenY;B[a+4]=b.clientX;B[a+5]=b.clientY;B[a+6]=b.ctrlKey;B[a+7]=b.shiftKey;B[a+8]=b.altKey;B[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;B[a+11]=b.movementX;B[a+12]=b.movementY;c=$a(c);B[a+13]=b.clientX-c.left;B[a+14]=b.clientY-c.top}
function N(a,b,c,d,e,k){Ua||(Ua=M(72));a=K(a);J({target:a,ic:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,$b:k,bc:d,cc:function(f){f=f||event;db(Ua,f,a);L(d)(e,Ua,b)&&f.preventDefault()},ac:c})}function eb(a,b,c,d,e){Va||(Va=M(260));J({target:a,$b:e,bc:d,cc:function(k){k=k||event;var f=Va,m=document.pointerLockElement||document.fc||document.pc||document.oc;B[f>>2]=!!m;var n=m&&m.id?m.id:"";A(Ra(m),z,f+4,128);A(n,z,f+132,128);L(d)(20,f,b)&&k.preventDefault()},ac:c})}
function fb(a,b,c,d,e){J({target:a,$b:e,bc:d,cc:function(k){k=k||event;L(d)(38,0,b)&&k.preventDefault()},ac:c})}
function gb(a,b,c,d){Wa||(Wa=M(36));a=K(a);J({target:a,$b:"resize",bc:d,cc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var f=Wa;B[f>>2]=e.detail;B[f+4>>2]=k.clientWidth;B[f+8>>2]=k.clientHeight;B[f+12>>2]=innerWidth;B[f+16>>2]=innerHeight;B[f+20>>2]=outerWidth;B[f+24>>2]=outerHeight;B[f+28>>2]=pageXOffset;B[f+32>>2]=pageYOffset;L(d)(10,f,b)&&e.preventDefault()}}},ac:c})}
function hb(a,b,c,d,e,k){Xa||(Xa=M(1696));a=K(a);J({target:a,ic:"touchstart"==k||"touchend"==k,$b:k,bc:d,cc:function(f){for(var m,n={},p=f.touches,r=0;r<p.length;++r)m=p[r],m.tc=m.vc=0,n[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.tc=1,n[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].vc=1;p=Xa;E[p>>3]=f.timeStamp;var w=p>>2;B[w+3]=f.ctrlKey;B[w+4]=f.shiftKey;B[w+5]=f.altKey;B[w+6]=f.metaKey;w+=7;var mb=$a(a),nb=0;for(r in n)if(m=
n[r],B[w]=m.identifier,B[w+1]=m.screenX,B[w+2]=m.screenY,B[w+3]=m.clientX,B[w+4]=m.clientY,B[w+5]=m.pageX,B[w+6]=m.pageY,B[w+7]=m.tc,B[w+8]=m.vc,B[w+9]=m.clientX-mb.left,B[w+10]=m.clientY-mb.top,w+=13,31<++nb)break;B[p+8>>2]=nb;L(d)(e,p,b)&&f.preventDefault()},ac:c})}function ib(a,b,c,d,e,k){a={target:K(a),$b:k,bc:d,cc:function(f){f=f||event;L(d)(e,0,b)&&f.preventDefault()},ac:c};J(a)}
function jb(a,b,c,d){Ya||(Ya=M(104));J({target:a,ic:!0,$b:"wheel",bc:d,cc:function(e){e=e||event;var k=Ya;db(k,e,a);E[k+72>>3]=e.deltaX;E[k+80>>3]=e.deltaY;E[k+88>>3]=e.deltaZ;B[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},ac:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.Lc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function qb(a){a.Nc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function rb(a){a.Pc=a.getExtension("WEBGL_multi_draw")}var sb=1,tb=[],O=[],ub=[],vb=[],wb=[],P=[],xb=[],yb=[],zb={},Ab={},Bb=4;function Q(a){Cb||(Cb=a)}function Db(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a,b){a.fc||(a.fc=a.getContext,a.getContext=function(d,e){e=a.fc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.uc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Fb(c,b):0}function Fb(a,b){var c=Db(yb),d={Mc:c,attributes:b,version:b.uc,mc:a};a.canvas&&(a.canvas.Ic=d);yb[c]=d;("undefined"==typeof b.sc||b.sc)&&Gb(d);return c}
function Gb(a){a||(a=R);if(!a.Hc){a.Hc=!0;var b=a.mc;kb(b);lb(b);ob(b);pb(b);qb(b);2<=a.version&&(b.rc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.rc)b.rc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Cb,R,Hb=["default","low-power","high-performance"],Ib=[null,[],[]];
function Jb(a,b,c,d){for(var e=0;e<a;e++){var k=S[c](),f=k&&Db(d);k?(k.name=f,d[f]=k):Q(1282);B[b+4*e>>2]=f}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);v("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);v("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}B[b>>2]=c}else Q(1281)}
function T(a){var b=pa(a)+1,c=M(b);A(a,z,c,b);return c}function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function U(a){a-=5120;return 0==a?qa:1==a?z:2==a?ra:4==a?B:6==a?D:5==a||28922==a||28520==a||30779==a||30782==a?C:sa}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Mb(a,b,c,d,e){a=U(a);var k=V(a),f=Bb;return a.subarray(e>>k,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+f-1&-f)>>k)}
function W(a){var b=S.Ec;if(b){var c=b.hc[a];"number"==typeof c&&(b.hc[a]=c=S.getUniformLocation(b,b.Cc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}var X=[],Y=[];function Nb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);ma=!0}h(a,new ia(a))}function Ob(a){var b=pa(a)+1,c=Pb(b);A(a,qa,c,b);return c}for(var S,Qb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Qb.subarray(0,Z+1);var Rb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Rb.subarray(0,Z+1);
var Yb={ja:function(){return 0},ib:function(){return 0},jb:function(){},W:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},sa:function(a,b,c){a=K(a);if(!a)return-4;a=$a(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},fb:function(a,b,c){z.copyWithin(a,b,b+c)},Pa:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var f=la.buffer;try{la.grow(k.call(e,2147483648,d)-f.byteLength+65535>>>16);ta();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},X:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},T:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},Y:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},fa:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},da:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},ea:function(a,
b,c,d){cb(a,b,c,d,3,"keyup");return 0},ra:function(a,b,c,d){N(a,b,c,d,5,"mousedown");return 0},la:function(a,b,c,d){N(a,b,c,d,33,"mouseenter");return 0},ha:function(a,b,c,d){N(a,b,c,d,34,"mouseleave");return 0},ma:function(a,b,c,d){N(a,b,c,d,8,"mousemove");return 0},oa:function(a,b,c,d){N(a,b,c,d,6,"mouseup");return 0},_:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.fc||document.body.pc||document.body.oc))return-1;a=K(a);if(!a)return-4;eb(a,b,c,
d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return 0},Z:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.fc||document.body.pc||document.body.oc))return-1;a=K(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},cb:function(a,b,c,d){gb(a,b,c,d);return 0},$:function(a,b,c,d){hb(a,
b,c,d,25,"touchcancel");return 0},aa:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},ba:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},ca:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},V:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},U:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},ga:function(a,b,c,d){a=K(a);return"undefined"!=typeof a.onwheel?(jb(a,b,c,d),0):-1},M:function(a,b){b>>=2;b={alpha:!!B[b],depth:!!B[b+1],stencil:!!B[b+2],antialias:!!B[b+
3],premultipliedAlpha:!!B[b+4],preserveDrawingBuffer:!!B[b+5],powerPreference:Hb[B[b+6]],failIfMajorPerformanceCaveat:!!B[b+7],uc:B[b+8],Oc:B[b+9],sc:B[b+10],Gc:B[b+11],Qc:B[b+12],Rc:B[b+13]};a=K(a);return!a||b.Gc?0:Eb(a,b)},ya:function(a,b){a=yb[a];b=y(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(S);"OES_vertex_array_object"==b&&lb(S);"WEBGL_draw_buffers"==b&&ob(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&pb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&qb(S);"WEBGL_multi_draw"==b&&rb(S);return!!a.mc.getExtension(b)},La:function(a){a>>=2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},Ga:function(a){R=yb[a];g.Kc=S=R&&R.mc;return!a||S?0:-5},ia:function(){return 52},hb:function(){return 52},db:function(){return 70},gb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var f=C[b>>2],m=C[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=z[f+n],r=Ib[a];0===p||10===p?((1===a?ja:v)(oa(r,0)),r.length=0):r.push(p)}e+=m}C[d>>2]=e;return 0},b:function(a){S.activeTexture(a)},
E:function(a,b){S.attachShader(O[a],P[b])},c:function(a,b){35051==a?S.qc=b:35052==a&&(S.dc=b);S.bindBuffer(a,tb[b])},h:function(a,b){S.bindFramebuffer(a,ub[b])},H:function(a,b){S.bindRenderbuffer(a,vb[b])},a:function(a,b){S.bindTexture(a,wb[b])},R:function(a){S.bindVertexArray(xb[a])},N:function(a,b,c,d){S.blendColor(a,b,c,d)},O:function(a,b){S.blendEquationSeparate(a,b)},P:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,k,f,m,n,p){S.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Ha:function(a,
b,c,d){2<=R.version?c&&b?S.bufferData(a,z,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?z.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=R.version?c&&S.bufferSubData(a,b,z,d,c):S.bufferSubData(a,b,z.subarray(d,d+c))},Cb:function(a){S.clear(a)},qa:function(a,b,c,d){S.clearColor(a,b,c,d)},A:function(a){S.clearDepth(a)},Db:function(a){S.clearStencil(a)},j:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},ta:function(a){S.compileShader(P[a])},Da:function(a,b,c,d,e,k,f,m){2<=R.version?S.dc||!f?S.compressedTexImage2D(a,
b,c,d,e,k,f,m):S.compressedTexImage2D(a,b,c,d,e,k,z,m,f):S.compressedTexImage2D(a,b,c,d,e,k,m?z.subarray(m,m+f):null)},Ba:function(a,b,c,d,e,k,f,m,n){S.dc?S.compressedTexImage3D(a,b,c,d,e,k,f,m,n):S.compressedTexImage3D(a,b,c,d,e,k,f,z,n,m)},za:function(){var a=Db(O),b=S.createProgram();b.name=a;b.lc=b.jc=b.kc=0;b.nc=1;O[a]=b;return a},va:function(a){var b=Db(P);P[b]=S.createShader(a);return b},J:function(a){S.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=tb[d];e&&(S.deleteBuffer(e),
e.name=0,tb[d]=null,d==S.qc&&(S.qc=0),d==S.dc&&(S.dc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],e=ub[d];e&&(S.deleteFramebuffer(e),e.name=0,ub[d]=null)}},y:function(a){if(a){var b=O[a];b?(S.deleteProgram(b),b.name=0,O[a]=null):Q(1281)}},S:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=vb[d];e&&(S.deleteRenderbuffer(e),e.name=0,vb[d]=null)}},u:function(a){if(a){var b=P[a];b?(S.deleteShader(b),P[a]=null):Q(1281)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=wb[d];
e&&(S.deleteTexture(e),e.name=0,wb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];S.deleteVertexArray(xb[d]);xb[d]=null}},x:function(a){S.depthFunc(a)},w:function(a){S.depthMask(!!a)},e:function(a){S.disable(a)},Q:function(a){S.disableVertexAttribArray(a)},mb:function(a,b,c){S.drawArrays(a,b,c)},nb:function(a,b,c,d){S.drawArraysInstanced(a,b,c,d)},ob:function(a,b,c,d){S.drawElements(a,b,c,d)},pb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},g:function(a){S.enable(a)},
zb:function(a){S.enableVertexAttribArray(a)},K:function(a){S.frontFace(a)},Ia:function(a,b){Jb(a,b,"createBuffer",tb)},I:function(a,b){Jb(a,b,"createRenderbuffer",vb)},Ea:function(a,b){Jb(a,b,"createTexture",wb)},Na:function(a,b){Jb(a,b,"createVertexArray",xb)},Eb:function(a,b){return S.getAttribLocation(O[a],y(b))},d:function(a,b){Kb(a,b)},wa:function(a,b,c,d){a=S.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(B[c>>2]=b)},D:function(a,b,c){if(c)if(a>=sb)Q(1281);
else if(a=O[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1;else if(35719==b){if(!a.lc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.lc=Math.max(a.lc,S.getActiveUniform(a,b).name.length+1);B[c>>2]=a.lc}else if(35722==b){if(!a.jc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.jc=Math.max(a.jc,S.getActiveAttrib(a,b).name.length+1);B[c>>2]=a.jc}else if(35381==b){if(!a.kc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.kc=Math.max(a.kc,S.getActiveUniformBlockName(a,
b).length+1);B[c>>2]=a.kc}else B[c>>2]=S.getProgramParameter(a,b);else Q(1281)},Fb:function(a,b,c,d){a=S.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(B[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),B[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(P[a]),B[c>>2]=a?a.length+1:0):B[c>>2]=S.getShaderParameter(P[a],b):Q(1281)},Ta:function(a){var b=zb[a];if(!b){switch(a){case 7939:b=S.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=T(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=S.getParameter(a))||Q(1280);b=b&&T(b);break;case 7938:b=S.getParameter(7938);b=2<=R.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=T(b);break;case 35724:b=S.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=T(b);break;default:Q(1280)}zb[a]=b}return b},Sa:function(a,
b){if(2>R.version)return Q(1282),0;var c=Ab[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return T(d)}),c=Ab[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},l:function(a,b){b=y(b);if(a=O[a]){var c=a,d=c.hc,e=c.Dc,k;if(!d)for(c.hc=d={},c.Cc={},k=0;k<S.getProgramParameter(c,35718);++k){var f=S.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Lb(m);n=0<n?
m.slice(0,n):m;var p=c.nc;c.nc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.Cc[p++]=n}c=a.hc;d=0;e=b;k=Lb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Dc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else Q(1281);return-1},xa:function(a){a=O[a];S.linkProgram(a);a.hc=0;a.Dc={}},Ma:function(a,b){3317==a&&(Bb=b);S.pixelStorei(a,b)},L:function(a,b){S.polygonOffset(a,b)},r:function(a){S.readBuffer(a)},Fa:function(a,b,c,d){S.renderbufferStorage(a,b,c,d)},G:function(a,b,
c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},s:function(a,b,c,d){S.scissor(a,b,c,d)},ua:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?B[d+4*k>>2]:-1;e+=y(B[c+4*k>>2],0>f?void 0:f)}S.shaderSource(P[a],e)},Ka:function(a,b,c){S.stencilFunc(a,b,c)},pa:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},v:function(a){S.stencilMask(a)},Ja:function(a,b,c){S.stencilOp(a,b,c)},na:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},Ca:function(a,b,c,d,e,k,f,m,n){if(2<=R.version)if(S.dc)S.texImage2D(a,
b,c,d,e,k,f,m,n);else if(n){var p=U(m);S.texImage2D(a,b,c,d,e,k,f,m,p,n>>V(p))}else S.texImage2D(a,b,c,d,e,k,f,m,null);else S.texImage2D(a,b,c,d,e,k,f,m,n?Mb(m,f,d,e,n):null)},Aa:function(a,b,c,d,e,k,f,m,n,p){if(S.dc)S.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var r=U(n);S.texImage3D(a,b,c,d,e,k,f,m,n,r,p>>V(r))}else S.texImage3D(a,b,c,d,e,k,f,m,n,null)},F:function(a,b,c){S.texParameterf(a,b,c)},f:function(a,b,c){S.texParameteri(a,b,c)},lb:function(a,b,c,d,e,k,f,m,n){if(2<=R.version)if(S.dc)S.texSubImage2D(a,
b,c,d,e,k,f,m,n);else if(n){var p=U(m);S.texSubImage2D(a,b,c,d,e,k,f,m,p,n>>V(p))}else S.texSubImage2D(a,b,c,d,e,k,f,m,null);else p=null,n&&(p=Mb(m,f,e,k,n)),S.texSubImage2D(a,b,c,d,e,k,f,m,p)},kb:function(a,b,c,d,e,k,f,m,n,p,r){if(S.dc)S.texSubImage3D(a,b,c,d,e,k,f,m,n,p,r);else if(r){var w=U(p);S.texSubImage3D(a,b,c,d,e,k,f,m,n,p,w,r>>V(w))}else S.texSubImage3D(a,b,c,d,e,k,f,m,n,p,null)},yb:function(a,b,c){if(2<=R.version)b&&S.uniform1fv(W(a),D,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=
D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);S.uniform1fv(W(a),d)}},C:function(a,b){S.uniform1i(W(a),b)},ub:function(a,b,c){if(2<=R.version)b&&S.uniform1iv(W(a),B,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);S.uniform1iv(W(a),d)}},xb:function(a,b,c){if(2<=R.version)b&&S.uniform2fv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);S.uniform2fv(W(a),d)}},
tb:function(a,b,c){if(2<=R.version)b&&S.uniform2iv(W(a),B,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);S.uniform2iv(W(a),d)}},wb:function(a,b,c){if(2<=R.version)b&&S.uniform3fv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);S.uniform3fv(W(a),d)}},sb:function(a,b,c){if(2<=R.version)b&&S.uniform3iv(W(a),
B,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);S.uniform3iv(W(a),d)}},vb:function(a,b,c){if(2<=R.version)b&&S.uniform4fv(W(a),D,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=D;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=D.subarray(c>>2,c+16*b>>2);S.uniform4fv(W(a),d)}},rb:function(a,b,c){if(2<=R.version)b&&S.uniform4iv(W(a),B,c>>2,4*b);else{if(72>=
b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2],d[e+3]=B[c+(4*e+12)>>2];else d=B.subarray(c>>2,c+16*b>>2);S.uniform4iv(W(a),d)}},qb:function(a,b,c,d){if(2<=R.version)b&&S.uniformMatrix4fv(W(a),!!c,D,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=D;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+
11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=D.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=O[a];S.useProgram(a);S.Ec=a},Ab:function(a,b){S.vertexAttribDivisor(a,b)},Bb:function(a,b,c,d,e,k){S.vertexAttribPointer(a,b,c,!!d,e,k)},t:function(a,b,c,d){S.viewport(a,b,c,d)},bb:function(){g.wc=a=>{0!=Sb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.wc)},ab:function(){g.Bc=a=>{const b=a.clipboardData.getData("text");
Ha(()=>{const c=Ob(b);Tb(c)})};window.addEventListener("paste",g.Bc)},$a:function(a){g.Sc=[];a=y(a);a=document.getElementById(a);g.xc=b=>{b.stopPropagation();b.preventDefault()};g.yc=b=>{b.stopPropagation();b.preventDefault()};g.zc=b=>{b.stopPropagation();b.preventDefault()};g.Ac=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Tc=c;Ub(c.length);for(let d=0;d<c.length;d++)Ha(()=>{const e=Ob(c[d].name);Vb(d,e)});Wb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.xc,
!1);a.addEventListener("dragleave",g.yc,!1);a.addEventListener("dragover",g.zc,!1);a.addEventListener("drop",g.Ac,!1)},Va:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Xb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Gb:function(a){a=
y(a);g.ec=document.getElementById(a);g.ec||console.log("sokol_app.h: invalid target:"+a);g.ec.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},_a:function(){window.removeEventListener("beforeunload",g.wc)},Za:function(){window.removeEventListener("paste",g.Bc)},Ya:function(a){a=y(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.xc);a.removeEventListener("dragleave",g.yc);a.removeEventListener("dragover",g.zc);a.removeEventListener("drop",
g.Ac)},z:function(){g.ec&&g.ec.requestPointerLock&&g.ec.requestPointerLock()},Xa:function(a,b){if(g.ec){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.ec.style.cursor=a}},Ua:function(a,b,c){const d=document.createElement("canvas");
d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(z.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(a){a=y(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize",
"off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ka:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){g.asm=e.exports;la=g.asm.Hb;ta();ua=g.asm.Xb;wa.unshift(g.asm.Ib);F--;g.monitorRunDependencies&&g.monitorRunDependencies(F);0==F&&(null!==Ba&&(clearInterval(Ba),Ba=null),G&&(e=G,G=null,e()))}function b(e){a(e.instance)}function c(e){return Fa().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){v("failed to asynchronously prepare wasm: "+k);ka(k)})}var d={a:Yb};F++;g.monitorRunDependencies&&g.monitorRunDependencies(F);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!=typeof WebAssembly.instantiateStreaming||Ca()||H.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){v("wasm streaming compile failed: "+k);v("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Ib).apply(null,arguments)};
var Xb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Xb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Jb).apply(null,arguments)},Tb=g.__sapp_emsc_onpaste=function(){return(Tb=g.__sapp_emsc_onpaste=g.asm.Kb).apply(null,arguments)},Sb=g.__sapp_html5_get_ask_leave_site=function(){return(Sb=g.__sapp_html5_get_ask_leave_site=g.asm.Lb).apply(null,arguments)},Ub=g.__sapp_emsc_begin_drop=function(){return(Ub=g.__sapp_emsc_begin_drop=g.asm.Mb).apply(null,arguments)},Vb=g.__sapp_emsc_drop=function(){return(Vb=
g.__sapp_emsc_drop=g.asm.Nb).apply(null,arguments)},Wb=g.__sapp_emsc_end_drop=function(){return(Wb=g.__sapp_emsc_end_drop=g.asm.Ob).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Pb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Qb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Rb).apply(null,arguments)};
g.__sfetch_emsc_head_response=function(){return(g.__sfetch_emsc_head_response=g.asm.Sb).apply(null,arguments)};g.__sfetch_emsc_get_response=function(){return(g.__sfetch_emsc_get_response=g.asm.Tb).apply(null,arguments)};g.__sfetch_emsc_failed_http_status=function(){return(g.__sfetch_emsc_failed_http_status=g.asm.Ub).apply(null,arguments)};g.__sfetch_emsc_failed_buffer_too_small=function(){return(g.__sfetch_emsc_failed_buffer_too_small=g.asm.Vb).apply(null,arguments)};
var M=g._malloc=function(){return(M=g._malloc=g.asm.Wb).apply(null,arguments)},Ia=g.stackSave=function(){return(Ia=g.stackSave=g.asm.Yb).apply(null,arguments)},Ja=g.stackRestore=function(){return(Ja=g.stackRestore=g.asm.Zb).apply(null,arguments)},Pb=g.stackAlloc=function(){return(Pb=g.stackAlloc=g.asm._b).apply(null,arguments)};g.___start_em_js=43336;g.___stop_em_js=52715;var Zb;G=function $b(){Zb||ac();Zb||(G=$b)};
function bc(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=Pb(4*(c+1)),e=d>>2;a.forEach(f=>{B[e++]=Ob(f)});B[e]=0;try{var k=b(c,d);Nb(k)}catch(f){f instanceof ia||"unwind"==f||h(1,f)}}
function ac(){function a(){if(!Zb&&(Zb=!0,g.calledRun=!0,!ma)){Ga(wa);Ga(xa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();cc&&bc(b);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();za.unshift(c)}Ga(za)}}var b=b||ba;if(!(0<F)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Aa();Ga(va);0<F||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);
a()},1)):a())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var cc=!0;g.noInitialRun&&(cc=!1);ac();
