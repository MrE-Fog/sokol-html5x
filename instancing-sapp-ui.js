
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,u;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof v))throw a;});process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof v||x("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1,ma="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&ma)return ma.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function z(a,b){return a?na(A,a,b):""}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var pa,qa,A,ra,sa,C,D,E,F;function ta(){var a=ka.buffer;pa=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=ra=new Int16Array(a);f.HEAP32=C=new Int32Array(a);f.HEAPU8=A=new Uint8Array(a);f.HEAPU16=sa=new Uint16Array(a);f.HEAPU32=D=new Uint32Array(a);f.HEAPF32=E=new Float32Array(a);f.HEAPF64=F=new Float64Array(a)}var ua,va=[],wa=[],xa=[],ya=[],za=[];
function Aa(){var a=f.preRun.shift();va.unshift(a)}var G=0,Ba=null,H=null;function ja(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ca(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="instancing-sapp-ui.wasm";if(!Ca()){var Da=I;I=f.locateFile?f.locateFile(Da,q):q+Da}
function Ea(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Fa(){if(!y&&(da||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ea()});if(t)return new Promise(function(a,b){t(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea()})}function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ga(a){for(;0<a.length;)a.shift()(f)}function Ha(a){var b=Ia();a();Ja(b)}var Ka=0;function La(){for(var a=J.length-1;0<=a;--a)Ma(a);J=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.fc)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Sc.apply(null,b.Hc)}}var J=[];function Ma(a){var b=J[a];b.target.removeEventListener(b.Yb,b.Dc,b.Zb);J.splice(a,1)}
function K(a){function b(d){++Ka;Pa=a;Oa();a.ac(d);Oa();--Ka}if(a.$b)a.Dc=b,a.target.addEventListener(a.Yb,b,a.Zb),J.push(a),Qa||(ya.push(La),Qa=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].Yb==a.Yb&&Ma(c--)}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function L(a){a=2<a?z(a):a;return Za[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var ab=[];function M(a){var b=ab[a];b||(a>=ab.length&&(ab.length=a+1),ab[a]=b=ua.get(a));return b}function bb(a,b,c,d,e,k){Sa||(Sa=O(256));a={target:L(a),Yb:k,$b:d,ac:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Sa;B(Ra(g.target),A,n+0,128);B(m,A,n+128,128);M(d)(e,n,b)&&g.preventDefault()},Zb:c};K(a)}
function cb(a,b,c,d,e,k){Ta||(Ta=O(176));a={target:L(a),fc:!0,Yb:k,$b:d,ac:function(g){var m=Ta;F[m>>3]=g.timeStamp;var n=m>>2;C[n+2]=g.location;C[n+3]=g.ctrlKey;C[n+4]=g.shiftKey;C[n+5]=g.altKey;C[n+6]=g.metaKey;C[n+7]=g.repeat;C[n+8]=g.charCode;C[n+9]=g.keyCode;C[n+10]=g.which;B(g.key||"",A,m+44,32);B(g.code||"",A,m+76,32);B(g.char||"",A,m+108,32);B(g.locale||"",A,m+140,32);M(d)(e,m,b)&&g.preventDefault()},Zb:c};K(a)}
function db(a,b,c){F[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=$a(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Ua||(Ua=O(72));a=L(a);K({target:a,fc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Yb:k,$b:d,ac:function(g){g=g||event;db(Ua,g,a);M(d)(e,Ua,b)&&g.preventDefault()},Zb:c})}function eb(a,b,c,d,e){Va||(Va=O(260));K({target:a,Yb:e,$b:d,ac:function(k){k=k||event;var g=Va,m=document.pointerLockElement||document.dc||document.mc||document.nc;C[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Ra(m),A,g+4,128);B(n,A,g+132,128);M(d)(20,g,b)&&k.preventDefault()},Zb:c})}
function fb(a,b,c,d,e){K({target:a,Yb:e,$b:d,ac:function(k){k=k||event;M(d)(38,0,b)&&k.preventDefault()},Zb:c})}
function gb(a,b,c,d){Wa||(Wa=O(36));a=L(a);K({target:a,Yb:"resize",$b:d,ac:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Wa;C[g>>2]=e.detail;C[g+4>>2]=k.clientWidth;C[g+8>>2]=k.clientHeight;C[g+12>>2]=innerWidth;C[g+16>>2]=innerHeight;C[g+20>>2]=outerWidth;C[g+24>>2]=outerHeight;C[g+28>>2]=pageXOffset;C[g+32>>2]=pageYOffset;M(d)(10,g,b)&&e.preventDefault()}}},Zb:c})}
function hb(a,b,c,d,e,k){Xa||(Xa=O(1696));a=L(a);K({target:a,fc:"touchstart"==k||"touchend"==k,Yb:k,$b:d,ac:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.rc=m.tc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.rc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].tc=1;p=Xa;F[p>>3]=g.timeStamp;var w=p>>2;C[w+3]=g.ctrlKey;C[w+4]=g.shiftKey;C[w+5]=g.altKey;C[w+6]=g.metaKey;w+=7;var N=$a(a),nb=0;for(r in n)if(m=
n[r],C[w]=m.identifier,C[w+1]=m.screenX,C[w+2]=m.screenY,C[w+3]=m.clientX,C[w+4]=m.clientY,C[w+5]=m.pageX,C[w+6]=m.pageY,C[w+7]=m.rc,C[w+8]=m.tc,C[w+9]=m.clientX-N.left,C[w+10]=m.clientY-N.top,w+=13,31<++nb)break;C[p+8>>2]=nb;M(d)(e,p,b)&&g.preventDefault()},Zb:c})}function ib(a,b,c,d,e,k){a={target:L(a),Yb:k,$b:d,ac:function(g){g=g||event;M(d)(e,0,b)&&g.preventDefault()},Zb:c};K(a)}
function jb(a,b,c,d){Ya||(Ya=O(104));K({target:a,fc:!0,Yb:"wheel",$b:d,ac:function(e){e=e||event;var k=Ya;db(k,e,a);F[k+72>>3]=e.deltaX;F[k+80>>3]=e.deltaY;F[k+88>>3]=e.deltaZ;C[k+96>>2]=e.deltaMode;M(d)(9,k,b)&&e.preventDefault()},Zb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Jc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Lc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Nc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],Q=[],tb=[],ub=[],vb=[],R=[],wb=[],xb=[],yb={},zb={};function S(a){Ab||(Ab=a)}function Bb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.dc||(a.dc=a.getContext,a.getContext=function(d,e){e=a.dc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.sc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={Kc:c,attributes:b,version:b.sc,kc:a};a.canvas&&(a.canvas.Gc=d);xb[c]=d;("undefined"==typeof b.qc||b.qc)&&Eb(d);return c}
function Eb(a){a||(a=T);if(!a.Fc){a.Fc=!0;var b=a.kc;kb(b);lb(b);mb(b);ob(b);pb(b);2<=a.version&&(b.pc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.pc)b.pc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,T,Fb=["default","low-power","high-performance"],Gb=[null,[],[]];
function Hb(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&Bb(d);k?(k.name=g,d[g]=k):S(1282);C[b+4*e>>2]=g}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else S(1281)}
function V(a){var b=oa(a)+1,c=O(b);B(a,A,c,b);return c}function Jb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Kb(a){a-=5120;return 0==a?qa:1==a?A:2==a?ra:4==a?C:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?D:sa}function W(a){var b=U.Cc;if(b){var c=b.ec[a];"number"==typeof c&&(b.ec[a]=c=U.getUniformLocation(b,b.Ac[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];function Lb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);la=!0}h(a,new v(a))}
function Mb(a){var b=oa(a)+1,c=Nb(b);B(a,qa,c,b);return c}for(var U,Ob=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Ob.subarray(0,Z+1);var Pb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Pb.subarray(0,Z+1);
var Wb={ga:function(){return 0},ib:function(){return 0},jb:function(){},T:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},pa:function(a,b,c){a=L(a);if(!a)return-4;a=$a(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},fb:function(a,b,c){A.copyWithin(a,b,b+c)},Pa:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{ka.grow(e-pa.byteLength+65535>>>16);ta();var k=1;break a}catch(g){}k=void 0}if(k)return!0}return!1},U:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},Q:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},V:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},ca:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){cb(a,b,c,
d,3,"keyup");return 0},oa:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ha:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ja:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.dc||document.body.mc||document.body.nc))return-1;a=L(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");
eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.dc||document.body.mc||document.body.nc))return-1;a=L(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},cb:function(a,b,c,d){gb(a,b,c,d);return 0},Y:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");
return 0},Z:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=L(a);return"undefined"!=typeof a.onwheel?(jb(a,b,c,d),0):-1},J:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+
4],preserveDrawingBuffer:!!C[b+5],powerPreference:Fb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],sc:C[b+8],Mc:C[b+9],qc:C[b+10],Ec:C[b+11],Oc:C[b+12],Pc:C[b+13]};a=L(a);return!a||b.Ec?0:Cb(a,b)},va:function(a,b){a=xb[a];b=z(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(U);"OES_vertex_array_object"==b&&lb(U);"WEBGL_draw_buffers"==b&&mb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(U);"WEBGL_multi_draw"==
b&&qb(U);return!!a.kc.getExtension(b)},Ma:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Da:function(a){T=xb[a];f.Ic=U=T&&T.kc;return!a||U?0:-5},fa:function(){return 52},hb:function(){return 52},db:function(){return 70},gb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=D[b>>2],m=D[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=A[g+n],r=Gb[a];0===p||10===p?((1===a?ia:x)(na(r,0)),r.length=0):r.push(p)}e+=m}D[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},
E:function(a,b){U.attachShader(Q[a],R[b])},c:function(a,b){35051==a?U.oc=b:35052==a&&(U.cc=b);U.bindBuffer(a,sb[b])},h:function(a,b){U.bindFramebuffer(a,tb[b])},Ga:function(a,b){U.bindRenderbuffer(a,ub[b])},a:function(a,b){U.bindTexture(a,vb[b])},O:function(a){U.bindVertexArray(wb[a])},K:function(a,b,c,d){U.blendColor(a,b,c,d)},L:function(a,b){U.blendEquationSeparate(a,b)},M:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,k,g,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Ia:function(a,
b,c,d){2<=T.version?c&&b?U.bufferData(a,A,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?A.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,A,d,c):U.bufferSubData(a,b,A.subarray(d,d+c))},Ab:function(a){U.clear(a)},na:function(a,b,c,d){U.clearColor(a,b,c,d)},A:function(a){U.clearDepth(a)},Bb:function(a){U.clearStencil(a)},j:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},ra:function(a){U.compileShader(R[a])},Ba:function(a,b,c,d,e,k,g,m){2<=T.version?U.cc||!g?U.compressedTexImage2D(a,
b,c,d,e,k,g,m):U.compressedTexImage2D(a,b,c,d,e,k,A,m,g):U.compressedTexImage2D(a,b,c,d,e,k,m?A.subarray(m,m+g):null)},za:function(a,b,c,d,e,k,g,m,n){U.cc?U.compressedTexImage3D(a,b,c,d,e,k,g,m,n):U.compressedTexImage3D(a,b,c,d,e,k,g,A,n,m)},xa:function(){var a=Bb(Q),b=U.createProgram();b.name=a;b.jc=b.hc=b.ic=0;b.lc=1;Q[a]=b;return a},ta:function(a){var b=Bb(R);R[b]=U.createShader(a);return b},G:function(a){U.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=sb[d];e&&(U.deleteBuffer(e),
e.name=0,sb[d]=null,d==U.oc&&(U.oc=0),d==U.cc&&(U.cc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=tb[d];e&&(U.deleteFramebuffer(e),e.name=0,tb[d]=null)}},y:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},P:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=ub[d];e&&(U.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},u:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=vb[d];
e&&(U.deleteTexture(e),e.name=0,vb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];U.deleteVertexArray(wb[d]);wb[d]=null}},x:function(a){U.depthFunc(a)},w:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},N:function(a){U.disableVertexAttribArray(a)},kb:function(a,b,c){U.drawArrays(a,b,c)},lb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},mb:function(a,b,c,d){U.drawElements(a,b,c,d)},nb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},
xb:function(a){U.enableVertexAttribArray(a)},H:function(a){U.frontFace(a)},Ja:function(a,b){Hb(a,b,"createBuffer",sb)},Ha:function(a,b){Hb(a,b,"createRenderbuffer",ub)},Ca:function(a,b){Hb(a,b,"createTexture",vb)},Na:function(a,b){Hb(a,b,"createVertexArray",wb)},Cb:function(a,b){return U.getAttribLocation(Q[a],z(b))},d:function(a,b){Ib(a,b)},ua:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},D:function(a,b,c){if(c)if(a>=rb)S(1281);
else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.jc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.jc=Math.max(a.jc,U.getActiveUniform(a,b).name.length+1);C[c>>2]=a.jc}else if(35722==b){if(!a.hc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.hc=Math.max(a.hc,U.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.hc}else if(35381==b){if(!a.ic)for(b=0;b<U.getProgramParameter(a,35382);++b)a.ic=Math.max(a.ic,U.getActiveUniformBlockName(a,
b).length+1);C[c>>2]=a.ic}else C[c>>2]=U.getProgramParameter(a,b);else S(1281)},qa:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Ta:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}yb[a]=b}return b},Sa:function(a,
b){if(2>T.version)return S(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=zb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},l:function(a,b){b=z(b);if(a=Q[a]){var c=a,d=c.ec,e=c.Bc,k;if(!d)for(c.ec=d={},c.Ac={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Jb(m);n=0<n?
m.slice(0,n):m;var p=c.lc;c.lc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Ac[p++]=n}c=a.ec;d=0;e=b;k=Jb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Bc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},wa:function(a){a=Q[a];U.linkProgram(a);a.ec=0;a.Bc={}},I:function(a,b){U.polygonOffset(a,b)},r:function(a){U.readBuffer(a)},Ea:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},Fa:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},
s:function(a,b,c,d){U.scissor(a,b,c,d)},sa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?C[d+4*k>>2]:-1;e+=z(C[c+4*k>>2],0>g?void 0:g)}U.shaderSource(R[a],e)},La:function(a,b,c){U.stencilFunc(a,b,c)},ma:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},v:function(a){U.stencilMask(a)},Ka:function(a,b,c){U.stencilOp(a,b,c)},la:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Aa:function(a,b,c,d,e,k,g,m,n){if(2<=T.version)if(U.cc)U.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Kb(m);U.texImage2D(a,
b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,k,g,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Kb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,g,m,n)}},ya:function(a,b,c,d,e,k,g,m,n,p){if(U.cc)U.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=Kb(n);U.texImage3D(a,b,c,d,e,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,
b,c,d,e,k,g,m,n,null)},F:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},wb:function(a,b,c){if(2<=T.version)b&&U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},C:function(a,b){U.uniform1i(W(a),b)},sb:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),
d)}},vb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},rb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},ub:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=
b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},qb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},tb:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var k=
0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},pb:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},ob:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*
b-1],k=E;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=Q[a];U.useProgram(a);U.Cc=a},yb:function(a,b){U.vertexAttribDivisor(a,b)},zb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},
t:function(a,b,c,d){U.viewport(a,b,c,d)},bb:function(){f.uc=a=>{0!=Qb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.uc)},ab:function(){f.zc=a=>{const b=a.clipboardData.getData("text");Ha(()=>{const c=Mb(b);Rb(c)})};window.addEventListener("paste",f.zc)},$a:function(a){f.Qc=[];a=z(a);a=document.getElementById(a);f.vc=b=>{b.stopPropagation();b.preventDefault()};f.wc=b=>{b.stopPropagation();b.preventDefault()};f.xc=b=>{b.stopPropagation();b.preventDefault()};f.yc=
b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Rc=c;Sb(c.length);for(let d=0;d<c.length;d++)Ha(()=>{const e=Mb(c[d].name);Tb(d,e)});Ub(b.clientX,b.clientY)};a.addEventListener("dragenter",f.vc,!1);a.addEventListener("dragleave",f.wc,!1);a.addEventListener("dragover",f.xc,!1);a.addEventListener("drop",f.yc,!1)},Va:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type="text";
a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Vb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Db:function(a){a=z(a);f.bc=document.getElementById(a);f.bc||console.log("sokol_app.h: invalid target:"+a);f.bc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},_a:function(){window.removeEventListener("beforeunload",f.uc)},Za:function(){window.removeEventListener("paste",
f.zc)},Ya:function(a){a=z(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.vc);a.removeEventListener("dragleave",f.wc);a.removeEventListener("dragover",f.xc);a.removeEventListener("drop",f.yc)},z:function(){f.bc&&f.bc.requestPointerLock&&f.bc.requestPointerLock()},Xa:function(a,b){if(f.bc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";
break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}f.bc.style.cursor=a}},Ua:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(A.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},
Wa:function(a){a=z(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ia:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.Eb;ta();ua=f.asm.Ub;wa.unshift(f.asm.Fb);G--;f.monitorRunDependencies&&f.monitorRunDependencies(G);0==G&&(null!==Ba&&(clearInterval(Ba),Ba=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Fa().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){x("failed to asynchronously prepare wasm: "+k);ja(k)})}var d={a:Wb};G++;f.monitorRunDependencies&&f.monitorRunDependencies(G);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Ca()||I.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Fb).apply(null,arguments)};
var Vb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Vb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Gb).apply(null,arguments)},Rb=f.__sapp_emsc_onpaste=function(){return(Rb=f.__sapp_emsc_onpaste=f.asm.Hb).apply(null,arguments)},Qb=f.__sapp_html5_get_ask_leave_site=function(){return(Qb=f.__sapp_html5_get_ask_leave_site=f.asm.Ib).apply(null,arguments)},Sb=f.__sapp_emsc_begin_drop=function(){return(Sb=f.__sapp_emsc_begin_drop=f.asm.Jb).apply(null,arguments)},Tb=f.__sapp_emsc_drop=function(){return(Tb=
f.__sapp_emsc_drop=f.asm.Kb).apply(null,arguments)},Ub=f.__sapp_emsc_end_drop=function(){return(Ub=f.__sapp_emsc_end_drop=f.asm.Lb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Mb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Nb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Ob).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Pb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Qb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Rb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Sb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.Tb).apply(null,arguments)},Ia=f.stackSave=function(){return(Ia=f.stackSave=f.asm.Vb).apply(null,arguments)},Ja=f.stackRestore=function(){return(Ja=f.stackRestore=f.asm.Wb).apply(null,arguments)},Nb=f.stackAlloc=function(){return(Nb=f.stackAlloc=f.asm.Xb).apply(null,arguments)};f.___start_em_js=40024;f.___stop_em_js=49405;var Xb;H=function Yb(){Xb||Zb();Xb||(H=Yb)};
function $b(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Nb(4*(c+1)),e=d>>2;a.forEach(g=>{C[e++]=Mb(g)});C[e]=0;try{var k=b(c,d);Lb(k)}catch(g){g instanceof v||"unwind"==g||h(1,g)}}
function Zb(){function a(){if(!Xb&&(Xb=!0,f.calledRun=!0,!la)){Ga(wa);Ga(xa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();ac&&$b(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();za.unshift(c)}Ga(za)}}var b=b||ba;if(!(0<G)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Aa();Ga(va);0<G||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var ac=!0;f.noInitialRun&&(ac=!1);Zb();
