
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,h="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");l=h?ka.dirname(l)+"/":__dirname+"/";ha=(a,b)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);
process.on("uncaughtException",function(a){if(!(a instanceof la))throw a;});process.on("unhandledRejection",function(a){throw a;});da=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof la||q("exiting due to exception: "+b);process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(ea||h)h?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),l=0!==l.indexOf("blob:")?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},h&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ma=g.print||console.log.bind(console),q=g.printErr||console.warn.bind(console);
Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(da=g.quit);var t;g.wasmBinary&&(t=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1,qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function u(a,b){return a?ra(v,a,b):""}
function x(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var ta,v,ua,va,y,z,A,B;function wa(){var a=oa.buffer;g.HEAP8=ta=new Int8Array(a);g.HEAP16=ua=new Int16Array(a);g.HEAP32=y=new Int32Array(a);g.HEAPU8=v=new Uint8Array(a);g.HEAPU16=va=new Uint16Array(a);g.HEAPU32=z=new Uint32Array(a);g.HEAPF32=A=new Float32Array(a);g.HEAPF64=B=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=g.preRun.shift();ya.unshift(a)}var C=0,Ea=null,D=null;function na(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";q(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return E.startsWith("data:application/octet-stream;base64,")}var E;E="spine-contexts-sapp-ui.wasm";if(!Fa()){var Ga=E;E=g.locateFile?g.locateFile(Ga,l):l+Ga}
function Ha(){var a=E;try{if(a==E&&t)return new Uint8Array(t);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){na(b)}}
function Ia(){if(!t&&(ea||h)){if("function"==typeof fetch&&!E.startsWith("file://"))return fetch(E,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+E+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(ia)return new Promise(function(a,b){ia(E,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function Ja(a){for(;0<a.length;)a.shift()(g)}function Ka(a){var b=La();a();Ma(b)}var Na=0;function Oa(){for(var a=F.length-1;0<=a;--a)Pa(a);F=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.qc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.bd.apply(null,b.Rc)}}var F=[];function Pa(a){var b=F[a];b.target.removeEventListener(b.ic,b.Nc,b.jc);F.splice(a,1)}
function G(a){function b(d){++Na;Sa=a;Ra();a.lc(d);Ra();--Na}if(a.kc)a.Nc=b,a.target.addEventListener(a.ic,b,a.jc),F.push(a),Ta||(Ba.push(Oa),Ta=!0);else for(var c=0;c<F.length;++c)F[c].target==a.target&&F[c].ic==a.ic&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function H(a){a=2<a?u(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var db=[];function I(a){var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=xa.get(a));return b}function eb(a,b,c,d,e,k){Va||(Va=J(256));a={target:H(a),ic:k,kc:d,lc:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Va;x(Ua(f.target),v,n+0,128);x(m,v,n+128,128);I(d)(e,n,b)&&f.preventDefault()},jc:c};G(a)}
function fb(a,b,c,d,e,k){Wa||(Wa=J(176));a={target:H(a),qc:!0,ic:k,kc:d,lc:function(f){var m=Wa;B[m>>3]=f.timeStamp;var n=m>>2;y[n+2]=f.location;y[n+3]=f.ctrlKey;y[n+4]=f.shiftKey;y[n+5]=f.altKey;y[n+6]=f.metaKey;y[n+7]=f.repeat;y[n+8]=f.charCode;y[n+9]=f.keyCode;y[n+10]=f.which;x(f.key||"",v,m+44,32);x(f.code||"",v,m+76,32);x(f.char||"",v,m+108,32);x(f.locale||"",v,m+140,32);I(d)(e,m,b)&&f.preventDefault()},jc:c};G(a)}
function gb(a,b,c){B[a>>3]=b.timeStamp;a>>=2;y[a+2]=b.screenX;y[a+3]=b.screenY;y[a+4]=b.clientX;y[a+5]=b.clientY;y[a+6]=b.ctrlKey;y[a+7]=b.shiftKey;y[a+8]=b.altKey;y[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;y[a+11]=b.movementX;y[a+12]=b.movementY;c=cb(c);y[a+13]=b.clientX-c.left;y[a+14]=b.clientY-c.top}
function K(a,b,c,d,e,k){Xa||(Xa=J(72));a=H(a);G({target:a,qc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ic:k,kc:d,lc:function(f){f=f||event;gb(Xa,f,a);I(d)(e,Xa,b)&&f.preventDefault()},jc:c})}function hb(a,b,c,d,e){Ya||(Ya=J(260));G({target:a,ic:e,kc:d,lc:function(k){k=k||event;var f=Ya,m=document.pointerLockElement||document.oc||document.Bc||document.Ac;y[f>>2]=!!m;var n=m&&m.id?m.id:"";x(Ua(m),v,f+4,128);x(n,v,f+132,128);I(d)(20,f,b)&&k.preventDefault()},jc:c})}
function ib(a,b,c,d,e){G({target:a,ic:e,kc:d,lc:function(k){k=k||event;I(d)(38,0,b)&&k.preventDefault()},jc:c})}
function jb(a,b,c,d){Za||(Za=J(36));a=H(a);G({target:a,ic:"resize",kc:d,lc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var f=Za;y[f>>2]=e.detail;y[f+4>>2]=k.clientWidth;y[f+8>>2]=k.clientHeight;y[f+12>>2]=innerWidth;y[f+16>>2]=innerHeight;y[f+20>>2]=outerWidth;y[f+24>>2]=outerHeight;y[f+28>>2]=pageXOffset;y[f+32>>2]=pageYOffset;I(d)(10,f,b)&&e.preventDefault()}}},jc:c})}
function kb(a,b,c,d,e,k){$a||($a=J(1696));a=H(a);G({target:a,qc:"touchstart"==k||"touchend"==k,ic:k,kc:d,lc:function(f){for(var m,n={},p=f.touches,r=0;r<p.length;++r)m=p[r],m.zc=m.Dc=0,n[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.zc=1,n[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].Dc=1;p=$a;B[p>>3]=f.timeStamp;var w=p>>2;y[w+3]=f.ctrlKey;y[w+4]=f.shiftKey;y[w+5]=f.altKey;y[w+6]=f.metaKey;w+=7;var N=cb(a),V=0;for(r in n)if(m=
n[r],y[w]=m.identifier,y[w+1]=m.screenX,y[w+2]=m.screenY,y[w+3]=m.clientX,y[w+4]=m.clientY,y[w+5]=m.pageX,y[w+6]=m.pageY,y[w+7]=m.zc,y[w+8]=m.Dc,y[w+9]=m.clientX-N.left,y[w+10]=m.clientY-N.top,w+=13,31<++V)break;y[p+8>>2]=V;I(d)(e,p,b)&&f.preventDefault()},jc:c})}function lb(a,b,c,d,e,k){a={target:H(a),ic:k,kc:d,lc:function(f){f=f||event;I(d)(e,0,b)&&f.preventDefault()},jc:c};G(a)}
function mb(a,b,c,d){ab||(ab=J(104));G({target:a,qc:!0,ic:"wheel",kc:d,lc:function(e){e=e||event;var k=ab;gb(k,e,a);B[k+72>>3]=e.deltaX;B[k+80>>3]=e.deltaY;B[k+88>>3]=e.deltaZ;y[k+96>>2]=e.deltaMode;I(d)(9,k,b)&&e.preventDefault()},jc:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.Tc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.Vc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.Xc=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],L=[],vb=[],M=[],O=[],P=[],wb=[],xb=[],yb={},zb={},Ab=4;function Q(a){Bb||(Bb=a)}function Cb(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.oc||(a.oc=a.getContext,a.getContext=function(d,e){e=a.oc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Cc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(xb),d={Uc:c,attributes:b,version:b.Cc,uc:a};a.canvas&&(a.canvas.Qc=d);xb[c]=d;("undefined"==typeof b.yc||b.yc)&&Fb(d);return c}
function Fb(a){a||(a=R);if(!a.Pc){a.Pc=!0;var b=a.uc;nb(b);ob(b);pb(b);qb(b);rb(b);2<=a.version&&(b.xc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.xc)b.xc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,R,Gb=["default","low-power","high-performance"],Hb=[null,[],[]],Ib=[];
function S(a,b,c,d){for(var e=0;e<a;e++){var k=T[c](),f=k&&Cb(d);k?(k.name=f,d[f]=k):Q(1282);y[b+4*e>>2]=f}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(T.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)y[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);q("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);q("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}y[b>>2]=c}else Q(1281)}
function U(a){var b=sa(a)+1,c=J(b);x(a,v,c,b);return c}function Kb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Lb(a){a-=5120;return 0==a?ta:1==a?v:2==a?ua:4==a?y:6==a?A:5==a||28922==a||28520==a||30779==a||30782==a?z:va}function W(a){var b=T.Mc;if(b){var c=b.pc[a];"number"==typeof c&&(b.pc[a]=c=T.getUniformLocation(b,b.Kc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}var X=[],Y=[];function Mb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);pa=!0}da(a,new la(a))}
function Nb(a){var b=sa(a)+1,c=Ob(b);x(a,ta,c,b);return c}for(var T,Z=0;32>Z;++Z)Ib.push(Array(Z));var Pb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var ac={pa:function(){return 0},ob:function(){return 0},pb:function(){},Z:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=H(a);if(!a)return-4;a=cb(a);B[b>>3]=a.width;B[c>>3]=a.height;return 0},lb:function(a,b,c){v.copyWithin(a,b,b+c)},Sa:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},kb:function(a){var b=v.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var f=oa.buffer;try{oa.grow(k.call(e,2147483648,d)-f.byteLength+65535>>>16);wa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},aa:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},Y:function(a,b,c){a=H(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},la:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ja:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ka:function(a,
b,c,d){fb(a,b,c,d,3,"keyup");return 0},ya:function(a,b,c,d){K(a,b,c,d,5,"mousedown");return 0},ra:function(a,b,c,d){K(a,b,c,d,33,"mouseenter");return 0},na:function(a,b,c,d){K(a,b,c,d,34,"mouseleave");return 0},ta:function(a,b,c,d){K(a,b,c,d,8,"mousemove");return 0},va:function(a,b,c,d){K(a,b,c,d,6,"mouseup");return 0},da:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.oc||document.body.Bc||document.body.Ac))return-1;a=H(a);if(!a)return-4;hb(a,b,c,
d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},ca:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.oc||document.body.Bc||document.body.Ac))return-1;a=H(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},gb:function(a,b,c,d){jb(a,b,c,d);return 0},ea:function(a,b,c,
d){kb(a,b,c,d,25,"touchcancel");return 0},fa:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},ga:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},ha:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},$:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},_:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ma:function(a,b,c,d){a=H(a);return"undefined"!=typeof a.onwheel?(mb(a,b,c,d),0):-1},M:function(a,b){b>>=2;b={alpha:!!y[b],depth:!!y[b+1],stencil:!!y[b+2],
antialias:!!y[b+3],premultipliedAlpha:!!y[b+4],preserveDrawingBuffer:!!y[b+5],powerPreference:Gb[y[b+6]],failIfMajorPerformanceCaveat:!!y[b+7],Cc:y[b+8],Wc:y[b+9],yc:y[b+10],Oc:y[b+11],Yc:y[b+12],Zc:y[b+13]};a=H(a);return!a||b.Oc?0:Db(a,b)},Ob:function(a,b){a=xb[a];b=u(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(T);"OES_vertex_array_object"==b&&ob(T);"WEBGL_draw_buffers"==b&&pb(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&rb(T);"WEBGL_multi_draw"==b&&sb(T);return!!a.uc.getExtension(b)},Pa:function(a){a>>=2;for(var b=0;14>b;++b)y[a+b]=0;y[a]=y[a+1]=y[a+3]=y[a+4]=y[a+8]=y[a+10]=1},Fa:function(a){R=xb[a];g.Sc=T=R&&R.uc;return!a||T?0:-5},oa:function(){return 52},nb:function(){return 52},jb:function(){return 70},mb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var f=z[b>>2],m=z[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=v[f+n],r=Hb[a];0===p||10===p?((1===a?ma:q)(ra(r,0)),r.length=0):r.push(p)}e+=m}z[d>>2]=e;return 0},b:function(a){T.activeTexture(a)},
J:function(a,b){T.attachShader(L[a],P[b])},d:function(a,b){35051==a?T.wc=b:35052==a&&(T.nc=b);T.bindBuffer(a,ub[b])},f:function(a,b){T.bindFramebuffer(a,vb[b])},N:function(a,b){T.bindRenderbuffer(a,M[b])},a:function(a,b){T.bindTexture(a,O[b])},W:function(a){T.bindVertexArray(wb[a])},S:function(a,b,c,d){T.blendColor(a,b,c,d)},T:function(a,b){T.blendEquationSeparate(a,b)},U:function(a,b,c,d){T.blendFuncSeparate(a,b,c,d)},y:function(a,b,c,d,e,k,f,m,n,p){T.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Na:function(a,
b,c,d){2<=R.version?c&&b?T.bufferData(a,v,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?v.subarray(c,c+b):b,d)},u:function(a,b,c,d){2<=R.version?c&&T.bufferSubData(a,b,v,d,c):T.bufferSubData(a,b,v.subarray(d,d+c))},r:function(a){return T.checkFramebufferStatus(a)},Ib:function(a){T.clear(a)},Hb:function(a,b,c,d){T.clearBufferfi(a,b,c,d)},xa:function(a,b,c){T.clearBufferfv(a,b,A,c>>2)},Gb:function(a,b,c){T.clearBufferiv(a,b,y,c>>2)},Lb:function(a,b,c,d){T.clearColor(a,b,c,d)},Kb:function(a){T.clearDepth(a)},
Jb:function(a){T.clearStencil(a)},m:function(a,b,c,d){T.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){T.compileShader(P[a])},Ka:function(a,b,c,d,e,k,f,m){2<=R.version?T.nc||!f?T.compressedTexImage2D(a,b,c,d,e,k,f,m):T.compressedTexImage2D(a,b,c,d,e,k,v,m,f):T.compressedTexImage2D(a,b,c,d,e,k,m?v.subarray(m,m+f):null)},Ia:function(a,b,c,d,e,k,f,m,n){T.nc?T.compressedTexImage3D(a,b,c,d,e,k,f,m,n):T.compressedTexImage3D(a,b,c,d,e,k,f,v,n,m)},Ga:function(){var a=Cb(L),b=T.createProgram();b.name=a;b.tc=b.rc=
b.sc=0;b.vc=1;L[a]=b;return a},Ca:function(a){var b=Cb(P);P[b]=T.createShader(a);return b},P:function(a){T.cullFace(a)},Xa:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=ub[d];e&&(T.deleteBuffer(e),e.name=0,ub[d]=null,d==T.wc&&(T.wc=0),d==T.nc&&(T.nc=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=y[b+4*c>>2],e=vb[d];e&&(T.deleteFramebuffer(e),e.name=0,vb[d]=null)}},E:function(a){if(a){var b=L[a];b?(T.deleteProgram(b),b.name=0,L[a]=null):Q(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=
y[b+4*c>>2],e=M[d];e&&(T.deleteRenderbuffer(e),e.name=0,M[d]=null)}},A:function(a){if(a){var b=P[a];b?(T.deleteShader(b),P[a]=null):Q(1281)}},Wa:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=O[d];e&&(T.deleteTexture(e),e.name=0,O[d]=null)}},Va:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2];T.deleteVertexArray(wb[d]);wb[d]=null}},D:function(a){T.depthFunc(a)},C:function(a){T.depthMask(!!a)},g:function(a){T.disable(a)},V:function(a){T.disableVertexAttribArray(a)},qb:function(a,b,c){T.drawArrays(a,
b,c)},rb:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},q:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=y[b+4*d>>2];T.drawBuffers(c)},sb:function(a,b,c,d){T.drawElements(a,b,c,d)},tb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},i:function(a){T.enable(a)},Db:function(a){T.enableVertexAttribArray(a)},l:function(a,b,c,d){T.framebufferRenderbuffer(a,b,c,M[d])},c:function(a,b,c,d,e){T.framebufferTexture2D(a,b,c,O[d],e)},j:function(a,b,c,d,e){T.framebufferTextureLayer(a,b,O[c],d,e)},Q:function(a){T.frontFace(a)},
Oa:function(a,b){S(a,b,"createBuffer",ub)},s:function(a,b){S(a,b,"createFramebuffer",vb)},O:function(a,b){S(a,b,"createRenderbuffer",M)},La:function(a,b){S(a,b,"createTexture",O)},Ua:function(a,b){S(a,b,"createVertexArray",wb)},Mb:function(a,b){return T.getAttribLocation(L[a],u(b))},e:function(a,b){Jb(a,b)},Da:function(a,b,c,d){a=T.getProgramInfoLog(L[a]);null===a&&(a="(unknown error)");b=0<b&&d?x(a,v,d,b):0;c&&(y[c>>2]=b)},I:function(a,b,c){if(c)if(a>=tb)Q(1281);else if(a=L[a],35716==b)a=T.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),y[c>>2]=a.length+1;else if(35719==b){if(!a.tc)for(b=0;b<T.getProgramParameter(a,35718);++b)a.tc=Math.max(a.tc,T.getActiveUniform(a,b).name.length+1);y[c>>2]=a.tc}else if(35722==b){if(!a.rc)for(b=0;b<T.getProgramParameter(a,35721);++b)a.rc=Math.max(a.rc,T.getActiveAttrib(a,b).name.length+1);y[c>>2]=a.rc}else if(35381==b){if(!a.sc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.sc=Math.max(a.sc,T.getActiveUniformBlockName(a,b).length+1);y[c>>2]=a.sc}else y[c>>2]=T.getProgramParameter(a,
b);else Q(1281)},Nb:function(a,b,c,d){a=T.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?x(a,v,d,b):0;c&&(y[c>>2]=b)},za:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),y[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(P[a]),y[c>>2]=a?a.length+1:0):y[c>>2]=T.getShaderParameter(P[a],b):Q(1281)},Za:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=T.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=U(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=T.getParameter(a))||Q(1280);b=b&&U(b);break;case 7938:b=T.getParameter(7938);b=2<=R.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=U(b);break;case 35724:b=T.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=U(b);break;default:Q(1280)}yb[a]=b}return b},Ya:function(a,b){if(2>R.version)return Q(1282),0;var c=zb[a];if(c)return 0>
b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=T.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return U(d)}),c=zb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},t:function(a,b){b=u(b);if(a=L[a]){var c=a,d=c.pc,e=c.Lc,k;if(!d)for(c.pc=d={},c.Kc={},k=0;k<T.getProgramParameter(c,35718);++k){var f=T.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Kb(m);n=0<n?m.slice(0,n):m;var p=c.vc;c.vc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=
m,c.Kc[p++]=n}c=a.pc;d=0;e=b;k=Kb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Lc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else Q(1281);return-1},Ea:function(a){a=L[a];T.linkProgram(a);a.pc=0;a.Lc={}},Ta:function(a,b){3317==a&&(Ab=b);T.pixelStorei(a,b)},R:function(a,b){T.polygonOffset(a,b)},z:function(a){T.readBuffer(a)},Ma:function(a,b,c,d){T.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,e){T.renderbufferStorageMultisample(a,b,c,d,e)},o:function(a,
b,c,d){T.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?y[d+4*k>>2]:-1;e+=u(y[c+4*k>>2],0>f?void 0:f)}T.shaderSource(P[a],e)},Ra:function(a,b,c){T.stencilFunc(a,b,c)},wa:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},B:function(a){T.stencilMask(a)},Qa:function(a,b,c){T.stencilOp(a,b,c)},ua:function(a,b,c,d){T.stencilOpSeparate(a,b,c,d)},Ja:function(a,b,c,d,e,k,f,m,n){if(2<=R.version)if(T.nc)T.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=Lb(m);T.texImage2D(a,b,c,d,e,
k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else T.texImage2D(a,b,c,d,e,k,f,m,null);else{p=T;var r=p.texImage2D;if(n){var w=Lb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT),V=Ab;n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+V-1&-V)>>N)}else n=null;r.call(p,a,b,c,d,e,k,f,m,n)}},Ha:function(a,b,c,d,e,k,f,m,n,p){if(T.nc)T.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var r=Lb(n);T.texImage3D(a,b,c,d,e,k,f,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else T.texImage3D(a,
b,c,d,e,k,f,m,n,null)},K:function(a,b,c){T.texParameterf(a,b,c)},h:function(a,b,c){T.texParameteri(a,b,c)},Cb:function(a,b,c){if(2<=R.version)b&&T.uniform1fv(W(a),A,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),d)}},H:function(a,b){T.uniform1i(W(a),b)},yb:function(a,b,c){if(2<=R.version)b&&T.uniform1iv(W(a),y,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);T.uniform1iv(W(a),
d)}},Bb:function(a,b,c){if(2<=R.version)b&&T.uniform2fv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},xb:function(a,b,c){if(2<=R.version)b&&T.uniform2iv(W(a),y,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),d)}},Ab:function(a,b,c){if(2<=R.version)b&&T.uniform3fv(W(a),A,c>>2,3*b);else{if(96>=
b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);T.uniform3fv(W(a),d)}},wb:function(a,b,c){if(2<=R.version)b&&T.uniform3iv(W(a),y,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},zb:function(a,b,c){if(2<=R.version)b&&T.uniform4fv(W(a),A,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=A;c>>=2;for(var k=
0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=A.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),d)}},vb:function(a,b,c){if(2<=R.version)b&&T.uniform4iv(W(a),y,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2],d[e+3]=y[c+(4*e+12)>>2];else d=y.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},ub:function(a,b,c,d){if(2<=R.version)b&&T.uniformMatrix4fv(W(a),!!c,A,d>>2,16*b);else{if(18>=b){var e=X[16*
b-1],k=A;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=A.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},n:function(a){a=L[a];T.useProgram(a);T.Mc=a},Eb:function(a,b){T.vertexAttribDivisor(a,b)},Fb:function(a,b,c,d,e,k){T.vertexAttribPointer(a,b,c,!!d,e,k)},
p:function(a,b,c,d){T.viewport(a,b,c,d)},ib:function(){g.Ec=a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.Ec)},hb:function(){g.Jc=a=>{const b=a.clipboardData.getData("text");Ka(()=>{const c=Nb(b);Sb(c)})};window.addEventListener("paste",g.Jc)},fb:function(a){g.$c=[];a=u(a);a=document.getElementById(a);g.Fc=b=>{b.stopPropagation();b.preventDefault()};g.Gc=b=>{b.stopPropagation();b.preventDefault()};g.Hc=b=>{b.stopPropagation();b.preventDefault()};g.Ic=
b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.ad=c;Tb(c.length);for(let d=0;d<c.length;d++)Ka(()=>{const e=Nb(c[d].name);Ub(d,e)});Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.Fc,!1);a.addEventListener("dragleave",g.Gc,!1);a.addEventListener("dragover",g.Hc,!1);a.addEventListener("drop",g.Ic,!1)},$a:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},x:function(){const a=document.createElement("input");a.type="text";
a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},w:function(){document.getElementById("_sokol_app_input_element").focus()},Pb:function(a){a=u(a);g.mc=document.getElementById(a);g.mc||console.log("sokol_app.h: invalid target:"+a);g.mc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},eb:function(){window.removeEventListener("beforeunload",g.Ec)},db:function(){window.removeEventListener("paste",
g.Jc)},cb:function(a){a=u(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.Fc);a.removeEventListener("dragleave",g.Gc);a.removeEventListener("dragover",g.Hc);a.removeEventListener("drop",g.Ic)},F:function(){g.mc&&g.mc.requestPointerLock&&g.mc.requestPointerLock()},bb:function(a,b){if(g.mc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";
break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.mc.style.cursor=a}},_a:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(v.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},v:function(){document.getElementById("_sokol_app_input_element").blur()},
ab:function(a){a=u(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},G:function(a,b,c,d,e,k){b=u(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";
const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(v.set(n,e),Xb(a,d,p)):Yb(a)}else Zb(a,f.status)};f.send()},sa:function(a,b){b=u(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");$b(a,d)}else Zb(a,
c.status)};c.send()},qa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){g.asm=e.exports;oa=g.asm.Qb;wa();xa=g.asm.ec;za.unshift(g.asm.Rb);C--;g.monitorRunDependencies&&g.monitorRunDependencies(C);0==C&&(null!==Ea&&(clearInterval(Ea),Ea=null),D&&(e=D,D=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){q("failed to asynchronously prepare wasm: "+k);na(k)})}var d={a:ac};C++;g.monitorRunDependencies&&g.monitorRunDependencies(C);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return q("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return t||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||E.startsWith("file://")||fa||"function"!=typeof fetch?c(b):fetch(E,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){q("wasm streaming compile failed: "+k);q("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Rb).apply(null,arguments)};
var J=g._malloc=function(){return(J=g._malloc=g.asm.Sb).apply(null,arguments)},Wb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Tb).apply(null,arguments)},Sb=g.__sapp_emsc_onpaste=function(){return(Sb=g.__sapp_emsc_onpaste=g.asm.Ub).apply(null,arguments)},Rb=g.__sapp_html5_get_ask_leave_site=function(){return(Rb=g.__sapp_html5_get_ask_leave_site=g.asm.Vb).apply(null,arguments)},Tb=g.__sapp_emsc_begin_drop=function(){return(Tb=g.__sapp_emsc_begin_drop=
g.asm.Wb).apply(null,arguments)},Ub=g.__sapp_emsc_drop=function(){return(Ub=g.__sapp_emsc_drop=g.asm.Xb).apply(null,arguments)},Vb=g.__sapp_emsc_end_drop=function(){return(Vb=g.__sapp_emsc_end_drop=g.asm.Yb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Zb).apply(null,arguments)};g._main=function(){return(g._main=g.asm._b).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.$b).apply(null,arguments)};
var $b=g.__sfetch_emsc_head_response=function(){return($b=g.__sfetch_emsc_head_response=g.asm.ac).apply(null,arguments)},Xb=g.__sfetch_emsc_get_response=function(){return(Xb=g.__sfetch_emsc_get_response=g.asm.bc).apply(null,arguments)},Zb=g.__sfetch_emsc_failed_http_status=function(){return(Zb=g.__sfetch_emsc_failed_http_status=g.asm.cc).apply(null,arguments)},Yb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Yb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.dc).apply(null,arguments)},La=
g.stackSave=function(){return(La=g.stackSave=g.asm.fc).apply(null,arguments)},Ma=g.stackRestore=function(){return(Ma=g.stackRestore=g.asm.gc).apply(null,arguments)},Ob=g.stackAlloc=function(){return(Ob=g.stackAlloc=g.asm.hc).apply(null,arguments)};g.___start_em_js=50816;g.___stop_em_js=60195;var bc;D=function cc(){bc||dc();bc||(D=cc)};
function ec(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(f=>{y[e++]=Nb(f)});y[e]=0;try{var k=b(c,d);Mb(k)}catch(f){f instanceof la||"unwind"==f||da(1,f)}}
function dc(){function a(){if(!bc&&(bc=!0,g.calledRun=!0,!pa)){Ja(za);Ja(Aa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();fc&&ec(b);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();Ca.unshift(c)}Ja(Ca)}}var b=b||ba;if(!(0<C)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Da();Ja(ya);0<C||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);
a()},1)):a())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var fc=!0;g.noInitialRun&&(fc=!1);dc();
