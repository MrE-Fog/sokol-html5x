
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,h="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");l=h?ka.dirname(l)+"/":__dirname+"/";ha=(a,b)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);
process.on("uncaughtException",function(a){if(!(a instanceof la))throw a;});process.on("unhandledRejection",function(a){throw a;});da=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof la||q("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(ea||h)h?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),l=0!==l.indexOf("blob:")?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},h&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ma=f.print||console.log.bind(console),q=f.printErr||console.warn.bind(console);
Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(da=f.quit);var t;f.wasmBinary&&(t=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1,qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function u(a,b){return a?ra(v,a,b):""}
function x(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var ta,v,ua,va,y,z,A,B;function wa(){var a=oa.buffer;f.HEAP8=ta=new Int8Array(a);f.HEAP16=ua=new Int16Array(a);f.HEAP32=y=new Int32Array(a);f.HEAPU8=v=new Uint8Array(a);f.HEAPU16=va=new Uint16Array(a);f.HEAPU32=z=new Uint32Array(a);f.HEAPF32=A=new Float32Array(a);f.HEAPF64=B=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=f.preRun.shift();ya.unshift(a)}var C=0,Ea=null,D=null;function na(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";q(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return E.startsWith("data:application/octet-stream;base64,")}var E;E="pixelformats-gles2-sapp.wasm";if(!Fa()){var Ga=E;E=f.locateFile?f.locateFile(Ga,l):l+Ga}
function Ha(){var a=E;try{if(a==E&&t)return new Uint8Array(t);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){na(b)}}
function Ia(){if(!t&&(ea||h)){if("function"==typeof fetch&&!E.startsWith("file://"))return fetch(E,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+E+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(ia)return new Promise(function(a,b){ia(E,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function Ja(a){for(;0<a.length;)a.shift()(f)}function Ka(a){var b=La();a();Ma(b)}var Na=0;function Oa(){for(var a=F.length-1;0<=a;--a)Pa(a);F=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.pc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.ad.apply(null,b.Qc)}}var F=[];function Pa(a){var b=F[a];b.target.removeEventListener(b.hc,b.Mc,b.ic);F.splice(a,1)}
function G(a){function b(d){++Na;Sa=a;Ra();a.kc(d);Ra();--Na}if(a.jc)a.Mc=b,a.target.addEventListener(a.hc,b,a.ic),F.push(a),Ta||(Ba.push(Oa),Ta=!0);else for(var c=0;c<F.length;++c)F[c].target==a.target&&F[c].hc==a.hc&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function H(a){a=2<a?u(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var db=[];function I(a){var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=xa.get(a));return b}function eb(a,b,c,d,e,k){Va||(Va=J(256));a={target:H(a),hc:k,jc:d,kc:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Va;x(Ua(g.target),v,n+0,128);x(m,v,n+128,128);I(d)(e,n,b)&&g.preventDefault()},ic:c};G(a)}
function fb(a,b,c,d,e,k){Wa||(Wa=J(176));a={target:H(a),pc:!0,hc:k,jc:d,kc:function(g){var m=Wa;B[m>>3]=g.timeStamp;var n=m>>2;y[n+2]=g.location;y[n+3]=g.ctrlKey;y[n+4]=g.shiftKey;y[n+5]=g.altKey;y[n+6]=g.metaKey;y[n+7]=g.repeat;y[n+8]=g.charCode;y[n+9]=g.keyCode;y[n+10]=g.which;x(g.key||"",v,m+44,32);x(g.code||"",v,m+76,32);x(g.char||"",v,m+108,32);x(g.locale||"",v,m+140,32);I(d)(e,m,b)&&g.preventDefault()},ic:c};G(a)}
function gb(a,b,c){B[a>>3]=b.timeStamp;a>>=2;y[a+2]=b.screenX;y[a+3]=b.screenY;y[a+4]=b.clientX;y[a+5]=b.clientY;y[a+6]=b.ctrlKey;y[a+7]=b.shiftKey;y[a+8]=b.altKey;y[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;y[a+11]=b.movementX;y[a+12]=b.movementY;c=cb(c);y[a+13]=b.clientX-c.left;y[a+14]=b.clientY-c.top}
function K(a,b,c,d,e,k){Xa||(Xa=J(72));a=H(a);G({target:a,pc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,hc:k,jc:d,kc:function(g){g=g||event;gb(Xa,g,a);I(d)(e,Xa,b)&&g.preventDefault()},ic:c})}function hb(a,b,c,d,e){Ya||(Ya=J(260));G({target:a,hc:e,jc:d,kc:function(k){k=k||event;var g=Ya,m=document.pointerLockElement||document.nc||document.Ac||document.yc;y[g>>2]=!!m;var n=m&&m.id?m.id:"";x(Ua(m),v,g+4,128);x(n,v,g+132,128);I(d)(20,g,b)&&k.preventDefault()},ic:c})}
function ib(a,b,c,d,e){G({target:a,hc:e,jc:d,kc:function(k){k=k||event;I(d)(38,0,b)&&k.preventDefault()},ic:c})}
function jb(a,b,c,d){Za||(Za=J(36));a=H(a);G({target:a,hc:"resize",jc:d,kc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Za;y[g>>2]=e.detail;y[g+4>>2]=k.clientWidth;y[g+8>>2]=k.clientHeight;y[g+12>>2]=innerWidth;y[g+16>>2]=innerHeight;y[g+20>>2]=outerWidth;y[g+24>>2]=outerHeight;y[g+28>>2]=pageXOffset;y[g+32>>2]=pageYOffset;I(d)(10,g,b)&&e.preventDefault()}}},ic:c})}
function kb(a,b,c,d,e,k){$a||($a=J(1696));a=H(a);G({target:a,pc:"touchstart"==k||"touchend"==k,hc:k,jc:d,kc:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.zc=m.Cc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.zc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].Cc=1;p=$a;B[p>>3]=g.timeStamp;var w=p>>2;y[w+3]=g.ctrlKey;y[w+4]=g.shiftKey;y[w+5]=g.altKey;y[w+6]=g.metaKey;w+=7;var N=cb(a),V=0;for(r in n)if(m=
n[r],y[w]=m.identifier,y[w+1]=m.screenX,y[w+2]=m.screenY,y[w+3]=m.clientX,y[w+4]=m.clientY,y[w+5]=m.pageX,y[w+6]=m.pageY,y[w+7]=m.zc,y[w+8]=m.Cc,y[w+9]=m.clientX-N.left,y[w+10]=m.clientY-N.top,w+=13,31<++V)break;y[p+8>>2]=V;I(d)(e,p,b)&&g.preventDefault()},ic:c})}function lb(a,b,c,d,e,k){a={target:H(a),hc:k,jc:d,kc:function(g){g=g||event;I(d)(e,0,b)&&g.preventDefault()},ic:c};G(a)}
function mb(a,b,c,d){ab||(ab=J(104));G({target:a,pc:!0,hc:"wheel",jc:d,kc:function(e){e=e||event;var k=ab;gb(k,e,a);B[k+72>>3]=e.deltaX;B[k+80>>3]=e.deltaY;B[k+88>>3]=e.deltaZ;y[k+96>>2]=e.deltaMode;I(d)(9,k,b)&&e.preventDefault()},ic:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.Sc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.Uc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.Wc=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],L=[],vb=[],M=[],O=[],P=[],wb=[],xb=[],yb={},zb={},Ab=4;function Q(a){Bb||(Bb=a)}function Cb(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.nc||(a.nc=a.getContext,a.getContext=function(d,e){e=a.nc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Bc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(xb),d={Tc:c,attributes:b,version:b.Bc,tc:a};a.canvas&&(a.canvas.Pc=d);xb[c]=d;("undefined"==typeof b.xc||b.xc)&&Fb(d);return c}
function Fb(a){a||(a=R);if(!a.Oc){a.Oc=!0;var b=a.tc;nb(b);ob(b);pb(b);qb(b);rb(b);2<=a.version&&(b.wc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.wc)b.wc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,R,Gb=["default","low-power","high-performance"],Hb=[null,[],[]],Ib=[];
function S(a,b,c,d){for(var e=0;e<a;e++){var k=T[c](),g=k&&Cb(d);k?(k.name=g,d[g]=k):Q(1282);y[b+4*e>>2]=g}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(T.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)y[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);q("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);q("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}y[b>>2]=c}else Q(1281)}
function U(a){var b=sa(a)+1,c=J(b);x(a,v,c,b);return c}function Kb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Lb(a){a-=5120;return 0==a?ta:1==a?v:2==a?ua:4==a?y:6==a?A:5==a||28922==a||28520==a||30779==a||30782==a?z:va}function W(a){var b=T.Lc;if(b){var c=b.oc[a];"number"==typeof c&&(b.oc[a]=c=T.getUniformLocation(b,b.Jc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}var X=[],Y=[];function Mb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);pa=!0}da(a,new la(a))}
function Nb(a){var b=sa(a)+1,c=Ob(b);x(a,ta,c,b);return c}for(var T,Z=0;32>Z;++Z)Ib.push(Array(Z));var Pb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var Xb={oa:function(){return 0},mb:function(){return 0},nb:function(){},Y:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=H(a);if(!a)return-4;a=cb(a);B[b>>3]=a.width;B[c>>3]=a.height;return 0},jb:function(a,b,c){v.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ib:function(a){var b=v.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var g=oa.buffer;try{oa.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);wa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},$:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},X:function(a,b,c){a=H(a);if(!a)return-4;a.width=b;a.height=c;return 0},aa:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},ka:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ia:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ja:function(a,
b,c,d){fb(a,b,c,d,3,"keyup");return 0},va:function(a,b,c,d){K(a,b,c,d,5,"mousedown");return 0},pa:function(a,b,c,d){K(a,b,c,d,33,"mouseenter");return 0},ma:function(a,b,c,d){K(a,b,c,d,34,"mouseleave");return 0},qa:function(a,b,c,d){K(a,b,c,d,8,"mousemove");return 0},sa:function(a,b,c,d){K(a,b,c,d,6,"mouseup");return 0},ca:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.nc||document.body.Ac||document.body.yc))return-1;a=H(a);if(!a)return-4;hb(a,b,c,
d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},ba:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.nc||document.body.Ac||document.body.yc))return-1;a=H(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},eb:function(a,b,c,d){jb(a,b,c,d);return 0},da:function(a,b,c,
d){kb(a,b,c,d,25,"touchcancel");return 0},ea:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},fa:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},ga:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},_:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},Z:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},la:function(a,b,c,d){a=H(a);return"undefined"!=typeof a.onwheel?(mb(a,b,c,d),0):-1},L:function(a,b){b>>=2;b={alpha:!!y[b],depth:!!y[b+1],stencil:!!y[b+2],
antialias:!!y[b+3],premultipliedAlpha:!!y[b+4],preserveDrawingBuffer:!!y[b+5],powerPreference:Gb[y[b+6]],failIfMajorPerformanceCaveat:!!y[b+7],Bc:y[b+8],Vc:y[b+9],xc:y[b+10],Nc:y[b+11],Xc:y[b+12],Yc:y[b+13]};a=H(a);return!a||b.Nc?0:Db(a,b)},Mb:function(a,b){a=xb[a];b=u(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(T);"OES_vertex_array_object"==b&&ob(T);"WEBGL_draw_buffers"==b&&pb(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&rb(T);"WEBGL_multi_draw"==b&&sb(T);return!!a.tc.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)y[a+b]=0;y[a]=y[a+1]=y[a+3]=y[a+4]=y[a+8]=y[a+10]=1},Da:function(a){R=xb[a];f.Rc=T=R&&R.tc;return!a||T?0:-5},na:function(){return 52},lb:function(){return 52},hb:function(){return 70},kb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=z[b>>2],m=z[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=v[g+n],r=Hb[a];0===p||10===p?((1===a?ma:q)(ra(r,0)),r.length=0):r.push(p)}e+=m}z[d>>2]=e;return 0},b:function(a){T.activeTexture(a)},
I:function(a,b){T.attachShader(L[a],P[b])},d:function(a,b){35051==a?T.vc=b:35052==a&&(T.mc=b);T.bindBuffer(a,ub[b])},f:function(a,b){T.bindFramebuffer(a,vb[b])},M:function(a,b){T.bindRenderbuffer(a,M[b])},a:function(a,b){T.bindTexture(a,O[b])},V:function(a){T.bindVertexArray(wb[a])},R:function(a,b,c,d){T.blendColor(a,b,c,d)},S:function(a,b){T.blendEquationSeparate(a,b)},T:function(a,b,c,d){T.blendFuncSeparate(a,b,c,d)},w:function(a,b,c,d,e,k,g,m,n,p){T.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},La:function(a,
b,c,d){2<=R.version?c&&b?T.bufferData(a,v,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?v.subarray(c,c+b):b,d)},s:function(a,b,c,d){2<=R.version?c&&T.bufferSubData(a,b,v,d,c):T.bufferSubData(a,b,v.subarray(d,d+c))},p:function(a){return T.checkFramebufferStatus(a)},Gb:function(a){T.clear(a)},Fb:function(a,b,c,d){T.clearBufferfi(a,b,c,d)},ua:function(a,b,c){T.clearBufferfv(a,b,A,c>>2)},Eb:function(a,b,c){T.clearBufferiv(a,b,y,c>>2)},Jb:function(a,b,c,d){T.clearColor(a,b,c,d)},Ib:function(a){T.clearDepth(a)},
Hb:function(a){T.clearStencil(a)},m:function(a,b,c,d){T.colorMask(!!a,!!b,!!c,!!d)},ya:function(a){T.compileShader(P[a])},Ia:function(a,b,c,d,e,k,g,m){2<=R.version?T.mc||!g?T.compressedTexImage2D(a,b,c,d,e,k,g,m):T.compressedTexImage2D(a,b,c,d,e,k,v,m,g):T.compressedTexImage2D(a,b,c,d,e,k,m?v.subarray(m,m+g):null)},Ga:function(a,b,c,d,e,k,g,m,n){T.mc?T.compressedTexImage3D(a,b,c,d,e,k,g,m,n):T.compressedTexImage3D(a,b,c,d,e,k,g,v,n,m)},Ea:function(){var a=Cb(L),b=T.createProgram();b.name=a;b.sc=b.qc=
b.rc=0;b.uc=1;L[a]=b;return a},Aa:function(a){var b=Cb(P);P[b]=T.createShader(a);return b},O:function(a){T.cullFace(a)},Va:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=ub[d];e&&(T.deleteBuffer(e),e.name=0,ub[d]=null,d==T.vc&&(T.vc=0),d==T.mc&&(T.mc=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=y[b+4*c>>2],e=vb[d];e&&(T.deleteFramebuffer(e),e.name=0,vb[d]=null)}},E:function(a){if(a){var b=L[a];b?(T.deleteProgram(b),b.name=0,L[a]=null):Q(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=
y[b+4*c>>2],e=M[d];e&&(T.deleteRenderbuffer(e),e.name=0,M[d]=null)}},A:function(a){if(a){var b=P[a];b?(T.deleteShader(b),P[a]=null):Q(1281)}},Ua:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=O[d];e&&(T.deleteTexture(e),e.name=0,O[d]=null)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2];T.deleteVertexArray(wb[d]);wb[d]=null}},D:function(a){T.depthFunc(a)},C:function(a){T.depthMask(!!a)},g:function(a){T.disable(a)},U:function(a){T.disableVertexAttribArray(a)},ob:function(a,b,c){T.drawArrays(a,
b,c)},pb:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},o:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=y[b+4*d>>2];T.drawBuffers(c)},qb:function(a,b,c,d){T.drawElements(a,b,c,d)},rb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},i:function(a){T.enable(a)},Bb:function(a){T.enableVertexAttribArray(a)},l:function(a,b,c,d){T.framebufferRenderbuffer(a,b,c,M[d])},c:function(a,b,c,d,e){T.framebufferTexture2D(a,b,c,O[d],e)},j:function(a,b,c,d,e){T.framebufferTextureLayer(a,b,O[c],d,e)},P:function(a){T.frontFace(a)},
Ma:function(a,b){S(a,b,"createBuffer",ub)},q:function(a,b){S(a,b,"createFramebuffer",vb)},N:function(a,b){S(a,b,"createRenderbuffer",M)},Ja:function(a,b){S(a,b,"createTexture",O)},Sa:function(a,b){S(a,b,"createVertexArray",wb)},Kb:function(a,b){return T.getAttribLocation(L[a],u(b))},e:function(a,b){Jb(a,b)},Ba:function(a,b,c,d){a=T.getProgramInfoLog(L[a]);null===a&&(a="(unknown error)");b=0<b&&d?x(a,v,d,b):0;c&&(y[c>>2]=b)},H:function(a,b,c){if(c)if(a>=tb)Q(1281);else if(a=L[a],35716==b)a=T.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),y[c>>2]=a.length+1;else if(35719==b){if(!a.sc)for(b=0;b<T.getProgramParameter(a,35718);++b)a.sc=Math.max(a.sc,T.getActiveUniform(a,b).name.length+1);y[c>>2]=a.sc}else if(35722==b){if(!a.qc)for(b=0;b<T.getProgramParameter(a,35721);++b)a.qc=Math.max(a.qc,T.getActiveAttrib(a,b).name.length+1);y[c>>2]=a.qc}else if(35381==b){if(!a.rc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.rc=Math.max(a.rc,T.getActiveUniformBlockName(a,b).length+1);y[c>>2]=a.rc}else y[c>>2]=T.getProgramParameter(a,
b);else Q(1281)},Lb:function(a,b,c,d){a=T.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?x(a,v,d,b):0;c&&(y[c>>2]=b)},wa:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),y[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(P[a]),y[c>>2]=a?a.length+1:0):y[c>>2]=T.getShaderParameter(P[a],b):Q(1281)},Xa:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=T.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=U(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=T.getParameter(a))||Q(1280);b=b&&U(b);break;case 7938:b=T.getParameter(7938);b=2<=R.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=U(b);break;case 35724:b=T.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=U(b);break;default:Q(1280)}yb[a]=b}return b},Wa:function(a,b){if(2>R.version)return Q(1282),0;var c=zb[a];if(c)return 0>
b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=T.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return U(d)}),c=zb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},r:function(a,b){b=u(b);if(a=L[a]){var c=a,d=c.oc,e=c.Kc,k;if(!d)for(c.oc=d={},c.Jc={},k=0;k<T.getProgramParameter(c,35718);++k){var g=T.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Kb(m);n=0<n?m.slice(0,n):m;var p=c.uc;c.uc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=
m,c.Jc[p++]=n}c=a.oc;d=0;e=b;k=Kb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Kc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else Q(1281);return-1},Ca:function(a){a=L[a];T.linkProgram(a);a.oc=0;a.Kc={}},Ra:function(a,b){3317==a&&(Ab=b);T.pixelStorei(a,b)},Q:function(a,b){T.polygonOffset(a,b)},x:function(a){T.readBuffer(a)},Ka:function(a,b,c,d){T.renderbufferStorage(a,b,c,d)},K:function(a,b,c,d,e){T.renderbufferStorageMultisample(a,b,c,d,e)},y:function(a,
b,c,d){T.scissor(a,b,c,d)},za:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?y[d+4*k>>2]:-1;e+=u(y[c+4*k>>2],0>g?void 0:g)}T.shaderSource(P[a],e)},Pa:function(a,b,c){T.stencilFunc(a,b,c)},ta:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},B:function(a){T.stencilMask(a)},Oa:function(a,b,c){T.stencilOp(a,b,c)},ra:function(a,b,c,d){T.stencilOpSeparate(a,b,c,d)},Ha:function(a,b,c,d,e,k,g,m,n){if(2<=R.version)if(T.mc)T.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Lb(m);T.texImage2D(a,b,c,d,e,
k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else T.texImage2D(a,b,c,d,e,k,g,m,null);else{p=T;var r=p.texImage2D;if(n){var w=Lb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT),V=Ab;n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+V-1&-V)>>N)}else n=null;r.call(p,a,b,c,d,e,k,g,m,n)}},Fa:function(a,b,c,d,e,k,g,m,n,p){if(T.mc)T.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=Lb(n);T.texImage3D(a,b,c,d,e,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else T.texImage3D(a,
b,c,d,e,k,g,m,n,null)},J:function(a,b,c){T.texParameterf(a,b,c)},h:function(a,b,c){T.texParameteri(a,b,c)},Ab:function(a,b,c){if(2<=R.version)b&&T.uniform1fv(W(a),A,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),d)}},G:function(a,b){T.uniform1i(W(a),b)},wb:function(a,b,c){if(2<=R.version)b&&T.uniform1iv(W(a),y,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);T.uniform1iv(W(a),
d)}},zb:function(a,b,c){if(2<=R.version)b&&T.uniform2fv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},vb:function(a,b,c){if(2<=R.version)b&&T.uniform2iv(W(a),y,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),d)}},yb:function(a,b,c){if(2<=R.version)b&&T.uniform3fv(W(a),A,c>>2,3*b);else{if(96>=
b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);T.uniform3fv(W(a),d)}},ub:function(a,b,c){if(2<=R.version)b&&T.uniform3iv(W(a),y,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},xb:function(a,b,c){if(2<=R.version)b&&T.uniform4fv(W(a),A,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=A;c>>=2;for(var k=
0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=A.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),d)}},tb:function(a,b,c){if(2<=R.version)b&&T.uniform4iv(W(a),y,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2],d[e+3]=y[c+(4*e+12)>>2];else d=y.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},sb:function(a,b,c,d){if(2<=R.version)b&&T.uniformMatrix4fv(W(a),!!c,A,d>>2,16*b);else{if(18>=b){var e=X[16*
b-1],k=A;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=A.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},n:function(a){a=L[a];T.useProgram(a);T.Lc=a},Cb:function(a,b){T.vertexAttribDivisor(a,b)},Db:function(a,b,c,d,e,k){T.vertexAttribPointer(a,b,c,!!d,e,k)},
z:function(a,b,c,d){T.viewport(a,b,c,d)},gb:function(){f.Dc=a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Dc)},fb:function(){f.Ic=a=>{const b=a.clipboardData.getData("text");Ka(()=>{const c=Nb(b);Sb(c)})};window.addEventListener("paste",f.Ic)},db:function(a){f.Zc=[];a=u(a);a=document.getElementById(a);f.Ec=b=>{b.stopPropagation();b.preventDefault()};f.Fc=b=>{b.stopPropagation();b.preventDefault()};f.Gc=b=>{b.stopPropagation();b.preventDefault()};f.Hc=
b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.$c=c;Tb(c.length);for(let d=0;d<c.length;d++)Ka(()=>{const e=Nb(c[d].name);Ub(d,e)});Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Ec,!1);a.addEventListener("dragleave",f.Fc,!1);a.addEventListener("dragover",f.Gc,!1);a.addEventListener("drop",f.Hc,!1)},Za:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},v:function(){const a=document.createElement("input");a.type="text";
a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},u:function(){document.getElementById("_sokol_app_input_element").focus()},Nb:function(a){a=u(a);f.lc=document.getElementById(a);f.lc||console.log("sokol_app.h: invalid target:"+a);f.lc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},cb:function(){window.removeEventListener("beforeunload",f.Dc)},bb:function(){window.removeEventListener("paste",
f.Ic)},ab:function(a){a=u(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Ec);a.removeEventListener("dragleave",f.Fc);a.removeEventListener("dragover",f.Gc);a.removeEventListener("drop",f.Hc)},F:function(){f.lc&&f.lc.requestPointerLock&&f.lc.requestPointerLock()},$a:function(a,b){if(f.lc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";
break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}f.lc.style.cursor=a}},Ya:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(v.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},t:function(){document.getElementById("_sokol_app_input_element").blur()},
_a:function(a){a=u(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},xa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;oa=f.asm.Ob;wa();xa=f.asm.cc;za.unshift(f.asm.Pb);C--;f.monitorRunDependencies&&f.monitorRunDependencies(C);0==C&&(null!==Ea&&(clearInterval(Ea),Ea=null),D&&(e=D,D=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){q("failed to asynchronously prepare wasm: "+k);na(k)})}var d={a:Xb};C++;f.monitorRunDependencies&&f.monitorRunDependencies(C);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return q("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return t||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||E.startsWith("file://")||fa||"function"!=typeof fetch?c(b):fetch(E,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){q("wasm streaming compile failed: "+k);q("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Pb).apply(null,arguments)};
var J=f._malloc=function(){return(J=f._malloc=f.asm.Qb).apply(null,arguments)},Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Rb).apply(null,arguments)},Sb=f.__sapp_emsc_onpaste=function(){return(Sb=f.__sapp_emsc_onpaste=f.asm.Sb).apply(null,arguments)},Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Tb).apply(null,arguments)},Tb=f.__sapp_emsc_begin_drop=function(){return(Tb=f.__sapp_emsc_begin_drop=
f.asm.Ub).apply(null,arguments)},Ub=f.__sapp_emsc_drop=function(){return(Ub=f.__sapp_emsc_drop=f.asm.Vb).apply(null,arguments)},Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.Wb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Xb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Yb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Zb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm._b).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.$b).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.ac).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.bc).apply(null,arguments)};
var La=f.stackSave=function(){return(La=f.stackSave=f.asm.dc).apply(null,arguments)},Ma=f.stackRestore=function(){return(Ma=f.stackRestore=f.asm.ec).apply(null,arguments)},Ob=f.stackAlloc=function(){return(Ob=f.stackAlloc=f.asm.fc).apply(null,arguments)};f.___start_em_js=33948;f.___stop_em_js=43327;var Yb;D=function Zb(){Yb||$b();Yb||(D=Zb)};
function ac(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(g=>{y[e++]=Nb(g)});y[e]=0;try{var k=b(c,d);Mb(k)}catch(g){g instanceof la||"unwind"==g||da(1,g)}}
function $b(){function a(){if(!Yb&&(Yb=!0,f.calledRun=!0,!pa)){Ja(za);Ja(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();bc&&ac(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();Ca.unshift(c)}Ja(Ca)}}var b=b||ba;if(!(0<C)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();Ja(ya);0<C||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var bc=!0;f.noInitialRun&&(bc=!1);$b();
