
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,ha,ia;
if(ea){var fs=require("fs"),ja=require("path");q=l?ja.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ia=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};ha=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);
process.on("uncaughtException",function(a){if(!(a instanceof ka))throw a;});process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ka||t("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var la=f.print||console.log.bind(console),t=f.printErr||console.warn.bind(console);
Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var u;f.wasmBinary&&(u=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ma("no native wasm support detected");var na,oa=!1,pa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&pa)return pa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function v(a,b){return a?qa(x,a,b):""}
function y(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var sa,ta,x,ua,va,z,A,B,C;function wa(){var a=na.buffer;sa=a;f.HEAP8=ta=new Int8Array(a);f.HEAP16=ua=new Int16Array(a);f.HEAP32=z=new Int32Array(a);f.HEAPU8=x=new Uint8Array(a);f.HEAPU16=va=new Uint16Array(a);f.HEAPU32=A=new Uint32Array(a);f.HEAPF32=B=new Float32Array(a);f.HEAPF64=C=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=f.preRun.shift();ya.unshift(a)}var D=0,Ea=null,E=null;function ma(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";t(a);oa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return F.startsWith("data:application/octet-stream;base64,")}var F;F="mrt-pixelformats-sapp-ui.wasm";if(!Fa()){var Ga=F;F=f.locateFile?f.locateFile(Ga,q):q+Ga}
function Ha(){var a=F;try{if(a==F&&u)return new Uint8Array(u);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){ma(b)}}
function Ia(){if(!u&&(da||l)){if("function"==typeof fetch&&!F.startsWith("file://"))return fetch(F,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+F+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(ha)return new Promise(function(a,b){ha(F,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function Ja(a){for(;0<a.length;)a.shift()(f)}function Ka(a){var b=La();a();Ma(b)}var Na=0;function Oa(){for(var a=G.length-1;0<=a;--a)Pa(a);G=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.oc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.$c.apply(null,b.Pc)}}var G=[];function Pa(a){var b=G[a];b.target.removeEventListener(b.fc,b.Lc,b.hc);G.splice(a,1)}
function H(a){function b(d){++Na;Sa=a;Ra();a.jc(d);Ra();--Na}if(a.ic)a.Lc=b,a.target.addEventListener(a.fc,b,a.hc),G.push(a),Ta||(Ba.push(Oa),Ta=!0);else for(var c=0;c<G.length;++c)G[c].target==a.target&&G[c].fc==a.fc&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function I(a){a=2<a?v(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var db=[];function J(a){var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=xa.get(a));return b}function eb(a,b,c,d,e,k){Va||(Va=K(256));a={target:I(a),fc:k,ic:d,jc:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Va;y(Ua(g.target),x,n+0,128);y(m,x,n+128,128);J(d)(e,n,b)&&g.preventDefault()},hc:c};H(a)}
function fb(a,b,c,d,e,k){Wa||(Wa=K(176));a={target:I(a),oc:!0,fc:k,ic:d,jc:function(g){var m=Wa;C[m>>3]=g.timeStamp;var n=m>>2;z[n+2]=g.location;z[n+3]=g.ctrlKey;z[n+4]=g.shiftKey;z[n+5]=g.altKey;z[n+6]=g.metaKey;z[n+7]=g.repeat;z[n+8]=g.charCode;z[n+9]=g.keyCode;z[n+10]=g.which;y(g.key||"",x,m+44,32);y(g.code||"",x,m+76,32);y(g.char||"",x,m+108,32);y(g.locale||"",x,m+140,32);J(d)(e,m,b)&&g.preventDefault()},hc:c};H(a)}
function gb(a,b,c){C[a>>3]=b.timeStamp;a>>=2;z[a+2]=b.screenX;z[a+3]=b.screenY;z[a+4]=b.clientX;z[a+5]=b.clientY;z[a+6]=b.ctrlKey;z[a+7]=b.shiftKey;z[a+8]=b.altKey;z[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;z[a+11]=b.movementX;z[a+12]=b.movementY;c=cb(c);z[a+13]=b.clientX-c.left;z[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,k){Xa||(Xa=K(72));a=I(a);H({target:a,oc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,fc:k,ic:d,jc:function(g){g=g||event;gb(Xa,g,a);J(d)(e,Xa,b)&&g.preventDefault()},hc:c})}function hb(a,b,c,d,e){Ya||(Ya=K(260));H({target:a,fc:e,ic:d,jc:function(k){k=k||event;var g=Ya,m=document.pointerLockElement||document.mc||document.yc||document.xc;z[g>>2]=!!m;var n=m&&m.id?m.id:"";y(Ua(m),x,g+4,128);y(n,x,g+132,128);J(d)(20,g,b)&&k.preventDefault()},hc:c})}
function ib(a,b,c,d,e){H({target:a,fc:e,ic:d,jc:function(k){k=k||event;J(d)(38,0,b)&&k.preventDefault()},hc:c})}
function jb(a,b,c,d){Za||(Za=K(36));a=I(a);H({target:a,fc:"resize",ic:d,jc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Za;z[g>>2]=e.detail;z[g+4>>2]=k.clientWidth;z[g+8>>2]=k.clientHeight;z[g+12>>2]=innerWidth;z[g+16>>2]=innerHeight;z[g+20>>2]=outerWidth;z[g+24>>2]=outerHeight;z[g+28>>2]=pageXOffset;z[g+32>>2]=pageYOffset;J(d)(10,g,b)&&e.preventDefault()}}},hc:c})}
function kb(a,b,c,d,e,k){$a||($a=K(1696));a=I(a);H({target:a,oc:"touchstart"==k||"touchend"==k,fc:k,ic:d,jc:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.zc=m.Bc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.zc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].Bc=1;p=$a;C[p>>3]=g.timeStamp;var w=p>>2;z[w+3]=g.ctrlKey;z[w+4]=g.shiftKey;z[w+5]=g.altKey;z[w+6]=g.metaKey;w+=7;var N=cb(a),nb=0;for(r in n)if(m=
n[r],z[w]=m.identifier,z[w+1]=m.screenX,z[w+2]=m.screenY,z[w+3]=m.clientX,z[w+4]=m.clientY,z[w+5]=m.pageX,z[w+6]=m.pageY,z[w+7]=m.zc,z[w+8]=m.Bc,z[w+9]=m.clientX-N.left,z[w+10]=m.clientY-N.top,w+=13,31<++nb)break;z[p+8>>2]=nb;J(d)(e,p,b)&&g.preventDefault()},hc:c})}function lb(a,b,c,d,e,k){a={target:I(a),fc:k,ic:d,jc:function(g){g=g||event;J(d)(e,0,b)&&g.preventDefault()},hc:c};H(a)}
function mb(a,b,c,d){ab||(ab=K(104));H({target:a,oc:!0,fc:"wheel",ic:d,jc:function(e){e=e||event;var k=ab;gb(k,e,a);C[k+72>>3]=e.deltaX;C[k+80>>3]=e.deltaY;C[k+88>>3]=e.deltaZ;z[k+96>>2]=e.deltaMode;J(d)(9,k,b)&&e.preventDefault()},hc:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function rb(a){a.Rc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function sb(a){a.Tc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function tb(a){a.Vc=a.getExtension("WEBGL_multi_draw")}var ub=1,vb=[],M=[],wb=[],O=[],P=[],Q=[],xb=[],yb=[],zb={},Ab={};function R(a){Bb||(Bb=a)}function Cb(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.mc||(a.mc=a.getContext,a.getContext=function(d,e){e=a.mc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ac?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(yb),d={Sc:c,attributes:b,version:b.Ac,sc:a};a.canvas&&(a.canvas.Oc=d);yb[c]=d;("undefined"==typeof b.wc||b.wc)&&Fb(d);return c}
function Fb(a){a||(a=S);if(!a.Nc){a.Nc=!0;var b=a.sc;ob(b);pb(b);qb(b);rb(b);sb(b);2<=a.version&&(b.vc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.vc)b.vc=b.getExtension("EXT_disjoint_timer_query");tb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,S,Gb=["default","low-power","high-performance"],Hb=[null,[],[]],Ib=[];
function T(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&Cb(d);k?(k.name=g,d[g]=k):R(1282);z[b+4*e>>2]=g}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)z[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);t("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);t("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}z[b>>2]=c}else R(1281)}
function V(a){var b=ra(a)+1,c=K(b);y(a,x,c,b);return c}function Kb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Lb(a){a-=5120;return 0==a?ta:1==a?x:2==a?ua:4==a?z:6==a?B:5==a||28922==a||28520==a||30779==a||30782==a?A:va}function W(a){var b=U.Kc;if(b){var c=b.nc[a];"number"==typeof c&&(b.nc[a]=c=U.getUniformLocation(b,b.Ic[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];function Mb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);oa=!0}h(a,new ka(a))}
function Nb(a){var b=ra(a)+1,c=Ob(b);y(a,ta,c,b);return c}for(var U,Z=0;32>Z;++Z)Ib.push(Array(Z));var Pb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var Xb={oa:function(){return 0},nb:function(){return 0},ob:function(){},$:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},xa:function(a,b,c){a=I(a);if(!a)return-4;a=cb(a);C[b>>3]=a.width;C[c>>3]=a.height;return 0},kb:function(a,b,c){x.copyWithin(a,b,b+c)},Ua:function(a,b){function c(d){J(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},jb:function(a){var b=x.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{na.grow(e-sa.byteLength+65535>>>16);wa();var k=1;break a}catch(g){}k=void 0}if(k)return!0}return!1},aa:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},Y:function(a,b,c){a=I(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},ka:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ia:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ja:function(a,b,c,d){fb(a,b,
c,d,3,"keyup");return 0},wa:function(a,b,c,d){L(a,b,c,d,5,"mousedown");return 0},qa:function(a,b,c,d){L(a,b,c,d,33,"mouseenter");return 0},na:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},ra:function(a,b,c,d){L(a,b,c,d,8,"mousemove");return 0},va:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},da:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.mc||document.body.yc||document.body.xc))return-1;a=I(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");
hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},ca:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.mc||document.body.yc||document.body.xc))return-1;a=I(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},hb:function(a,b,c,d){jb(a,b,c,d);return 0},ea:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");
return 0},fa:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},ga:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},ha:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},_:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},Z:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},la:function(a,b,c,d){a=I(a);return"undefined"!=typeof a.onwheel?(mb(a,b,c,d),0):-1},R:function(a,b){b>>=2;b={alpha:!!z[b],depth:!!z[b+1],stencil:!!z[b+2],antialias:!!z[b+3],premultipliedAlpha:!!z[b+
4],preserveDrawingBuffer:!!z[b+5],powerPreference:Gb[z[b+6]],failIfMajorPerformanceCaveat:!!z[b+7],Ac:z[b+8],Uc:z[b+9],wc:z[b+10],Mc:z[b+11],Wc:z[b+12],Xc:z[b+13]};a=I(a);return!a||b.Mc?0:Db(a,b)},Da:function(a,b){a=yb[a];b=v(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(U);"OES_vertex_array_object"==b&&pb(U);"WEBGL_draw_buffers"==b&&qb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&rb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&sb(U);"WEBGL_multi_draw"==
b&&tb(U);return!!a.sc.getExtension(b)},Ra:function(a){a>>=2;for(var b=0;14>b;++b)z[a+b]=0;z[a]=z[a+1]=z[a+3]=z[a+4]=z[a+8]=z[a+10]=1},La:function(a){S=yb[a];f.Qc=U=S&&S.sc;return!a||U?0:-5},ma:function(){return 52},mb:function(){return 52},ib:function(){return 70},lb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=A[b>>2],m=A[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=x[g+n],r=Hb[a];0===p||10===p?((1===a?la:t)(qa(r,0)),r.length=0):r.push(p)}e+=m}A[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},
J:function(a,b){U.attachShader(M[a],Q[b])},d:function(a,b){35051==a?U.uc=b:35052==a&&(U.lc=b);U.bindBuffer(a,vb[b])},f:function(a,b){U.bindFramebuffer(a,wb[b])},M:function(a,b){U.bindRenderbuffer(a,O[b])},a:function(a,b){U.bindTexture(a,P[b])},W:function(a){U.bindVertexArray(xb[a])},S:function(a,b,c,d){U.blendColor(a,b,c,d)},T:function(a,b){U.blendEquationSeparate(a,b)},U:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},x:function(a,b,c,d,e,k,g,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Na:function(a,
b,c,d){2<=S.version?c&&b?U.bufferData(a,x,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?x.subarray(c,c+b):b,d)},t:function(a,b,c,d){2<=S.version?c&&U.bufferSubData(a,b,x,d,c):U.bufferSubData(a,b,x.subarray(d,d+c))},q:function(a){return U.checkFramebufferStatus(a)},Hb:function(a){U.clear(a)},Gb:function(a,b,c,d){U.clearBufferfi(a,b,c,d)},ua:function(a,b,c){U.clearBufferfv(a,b,B,c>>2)},Fb:function(a,b,c){U.clearBufferiv(a,b,z,c>>2)},Kb:function(a,b,c,d){U.clearColor(a,b,c,d)},Jb:function(a){U.clearDepth(a)},
Ib:function(a){U.clearStencil(a)},n:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},za:function(a){U.compileShader(Q[a])},Ja:function(a,b,c,d,e,k,g,m){2<=S.version?U.lc||!g?U.compressedTexImage2D(a,b,c,d,e,k,g,m):U.compressedTexImage2D(a,b,c,d,e,k,x,m,g):U.compressedTexImage2D(a,b,c,d,e,k,m?x.subarray(m,m+g):null)},Ha:function(a,b,c,d,e,k,g,m,n){U.lc?U.compressedTexImage3D(a,b,c,d,e,k,g,m,n):U.compressedTexImage3D(a,b,c,d,e,k,g,x,n,m)},Fa:function(){var a=Cb(M),b=U.createProgram();b.name=a;b.rc=b.pc=
b.qc=0;b.tc=1;M[a]=b;return a},Ba:function(a){var b=Cb(Q);Q[b]=U.createShader(a);return b},O:function(a){U.cullFace(a)},Wa:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=vb[d];e&&(U.deleteBuffer(e),e.name=0,vb[d]=null,d==U.uc&&(U.uc=0),d==U.lc&&(U.lc=0))}},l:function(a,b){for(var c=0;c<a;++c){var d=z[b+4*c>>2],e=wb[d];e&&(U.deleteFramebuffer(e),e.name=0,wb[d]=null)}},E:function(a){if(a){var b=M[a];b?(U.deleteProgram(b),b.name=0,M[a]=null):R(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=
z[b+4*c>>2],e=O[d];e&&(U.deleteRenderbuffer(e),e.name=0,O[d]=null)}},A:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):R(1281)}},Va:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=P[d];e&&(U.deleteTexture(e),e.name=0,P[d]=null)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2];U.deleteVertexArray(xb[d]);xb[d]=null}},D:function(a){U.depthFunc(a)},C:function(a){U.depthMask(!!a)},g:function(a){U.disable(a)},V:function(a){U.disableVertexAttribArray(a)},pb:function(a,b,c){U.drawArrays(a,
b,c)},qb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},p:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=z[b+4*d>>2];U.drawBuffers(c)},rb:function(a,b,c,d){U.drawElements(a,b,c,d)},sb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},i:function(a){U.enable(a)},Cb:function(a){U.enableVertexAttribArray(a)},m:function(a,b,c,d){U.framebufferRenderbuffer(a,b,c,O[d])},c:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,P[d],e)},k:function(a,b,c,d,e){U.framebufferTextureLayer(a,b,P[c],d,e)},P:function(a){U.frontFace(a)},
Oa:function(a,b){T(a,b,"createBuffer",vb)},r:function(a,b){T(a,b,"createFramebuffer",wb)},N:function(a,b){T(a,b,"createRenderbuffer",O)},Ka:function(a,b){T(a,b,"createTexture",P)},Sa:function(a,b){T(a,b,"createVertexArray",xb)},Lb:function(a,b){return U.getAttribLocation(M[a],v(b))},e:function(a,b){Jb(a,b)},Ca:function(a,b,c,d){a=U.getProgramInfoLog(M[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,x,d,b):0;c&&(z[c>>2]=b)},I:function(a,b,c){if(c)if(a>=ub)R(1281);else if(a=M[a],35716==b)a=U.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),z[c>>2]=a.length+1;else if(35719==b){if(!a.rc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.rc=Math.max(a.rc,U.getActiveUniform(a,b).name.length+1);z[c>>2]=a.rc}else if(35722==b){if(!a.pc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.pc=Math.max(a.pc,U.getActiveAttrib(a,b).name.length+1);z[c>>2]=a.pc}else if(35381==b){if(!a.qc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.qc=Math.max(a.qc,U.getActiveUniformBlockName(a,b).length+1);z[c>>2]=a.qc}else z[c>>2]=U.getProgramParameter(a,
b);else R(1281)},ya:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,x,d,b):0;c&&(z[c>>2]=b)},G:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),z[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(Q[a]),z[c>>2]=a?a.length+1:0):z[c>>2]=U.getShaderParameter(Q[a],b):R(1281)},Ya:function(a){var b=zb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||R(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:R(1280)}zb[a]=b}return b},Xa:function(a,b){if(2>S.version)return R(1282),0;var c=Ab[a];if(c)return 0>
b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Ab[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},s:function(a,b){b=v(b);if(a=M[a]){var c=a,d=c.nc,e=c.Jc,k;if(!d)for(c.nc=d={},c.Ic={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Kb(m);n=0<n?m.slice(0,n):m;var p=c.tc;c.tc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=
m,c.Ic[p++]=n}c=a.nc;d=0;e=b;k=Kb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Jc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else R(1281);return-1},Ea:function(a){a=M[a];U.linkProgram(a);a.nc=0;a.Jc={}},Q:function(a,b){U.polygonOffset(a,b)},y:function(a){U.readBuffer(a)},Ma:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},z:function(a,b,c,d){U.scissor(a,b,c,d)},Aa:function(a,b,c,d){for(var e=
"",k=0;k<b;++k){var g=d?z[d+4*k>>2]:-1;e+=v(z[c+4*k>>2],0>g?void 0:g)}U.shaderSource(Q[a],e)},Qa:function(a,b,c){U.stencilFunc(a,b,c)},ta:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},B:function(a){U.stencilMask(a)},Pa:function(a,b,c){U.stencilOp(a,b,c)},sa:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ia:function(a,b,c,d,e,k,g,m,n){if(2<=S.version)if(U.lc)U.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Lb(m);U.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,
b,c,d,e,k,g,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Lb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,g,m,n)}},Ga:function(a,b,c,d,e,k,g,m,n,p){if(U.lc)U.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=Lb(n);U.texImage3D(a,b,c,d,e,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,g,m,n,null)},K:function(a,b,c){U.texParameterf(a,
b,c)},h:function(a,b,c){U.texParameteri(a,b,c)},Bb:function(a,b,c){if(2<=S.version)b&&U.uniform1fv(W(a),B,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},H:function(a,b){U.uniform1i(W(a),b)},xb:function(a,b,c){if(2<=S.version)b&&U.uniform1iv(W(a),z,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},Ab:function(a,b,c){if(2<=S.version)b&&U.uniform2fv(W(a),
B,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},wb:function(a,b,c){if(2<=S.version)b&&U.uniform2iv(W(a),z,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},zb:function(a,b,c){if(2<=S.version)b&&U.uniform3fv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],
d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},vb:function(a,b,c){if(2<=S.version)b&&U.uniform3iv(W(a),z,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},yb:function(a,b,c){if(2<=S.version)b&&U.uniform4fv(W(a),B,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=B;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+
1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=B.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},ub:function(a,b,c){if(2<=S.version)b&&U.uniform4iv(W(a),z,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2],d[e+3]=z[c+(4*e+12)>>2];else d=z.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},tb:function(a,b,c,d){if(2<=S.version)b&&U.uniformMatrix4fv(W(a),!!c,B,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=B;d>>=2;for(var g=0;g<16*b;g+=16){var m=
d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=B.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},o:function(a){a=M[a];U.useProgram(a);U.Kc=a},Db:function(a,b){U.vertexAttribDivisor(a,b)},Eb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},j:function(a,b,c,d){U.viewport(a,b,c,d)},gb:function(){f.Cc=
a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Cc)},fb:function(){f.Hc=a=>{const b=a.clipboardData.getData("text");Ka(()=>{const c=Nb(b);Sb(c)})};window.addEventListener("paste",f.Hc)},eb:function(a){f.Yc=[];a=v(a);a=document.getElementById(a);f.Dc=b=>{b.stopPropagation();b.preventDefault()};f.Ec=b=>{b.stopPropagation();b.preventDefault()};f.Fc=b=>{b.stopPropagation();b.preventDefault()};f.Gc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;
f.Zc=c;Tb(c.length);for(let d=0;d<c.length;d++)Ka(()=>{const e=Nb(c[d].name);Ub(d,e)});Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Dc,!1);a.addEventListener("dragleave",f.Ec,!1);a.addEventListener("dragover",f.Fc,!1);a.addEventListener("drop",f.Gc,!1)},_a:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},w:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",
function(){Wb()});document.body.append(a)},v:function(){document.getElementById("_sokol_app_input_element").focus()},Mb:function(a){a=v(a);f.kc=document.getElementById(a);f.kc||console.log("sokol_app.h: invalid target:"+a);f.kc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},db:function(){window.removeEventListener("beforeunload",f.Cc)},cb:function(){window.removeEventListener("paste",f.Hc)},bb:function(a){a=v(a);a=document.getElementById(a);a.removeEventListener("dragenter",
f.Dc);a.removeEventListener("dragleave",f.Ec);a.removeEventListener("dragover",f.Fc);a.removeEventListener("drop",f.Gc)},F:function(){f.kc&&f.kc.requestPointerLock&&f.kc.requestPointerLock()},ab:function(a,b){if(f.kc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";
break;case 10:a="not-allowed";break;default:a="auto"}f.kc.style.cursor=a}},Za:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(x.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},u:function(){document.getElementById("_sokol_app_input_element").blur()},$a:function(a){a=v(a);const b=document.createElement("textarea");
b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},pa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;na=f.asm.Nb;wa();xa=f.asm.bc;za.unshift(f.asm.Ob);D--;f.monitorRunDependencies&&f.monitorRunDependencies(D);0==D&&(null!==Ea&&(clearInterval(Ea),Ea=null),E&&(e=E,E=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){t("failed to asynchronously prepare wasm: "+k);ma(k)})}var d={a:Xb};D++;f.monitorRunDependencies&&f.monitorRunDependencies(D);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return t("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return u||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||F.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(F,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){t("wasm streaming compile failed: "+k);t("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Ob).apply(null,arguments)};
var Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Pb).apply(null,arguments)},Sb=f.__sapp_emsc_onpaste=function(){return(Sb=f.__sapp_emsc_onpaste=f.asm.Qb).apply(null,arguments)},Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Rb).apply(null,arguments)},Tb=f.__sapp_emsc_begin_drop=function(){return(Tb=f.__sapp_emsc_begin_drop=f.asm.Sb).apply(null,arguments)},Ub=f.__sapp_emsc_drop=function(){return(Ub=
f.__sapp_emsc_drop=f.asm.Tb).apply(null,arguments)},Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.Ub).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Vb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Wb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Xb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Yb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Zb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm._b).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.$b).apply(null,arguments)};
var K=f._malloc=function(){return(K=f._malloc=f.asm.ac).apply(null,arguments)},La=f.stackSave=function(){return(La=f.stackSave=f.asm.cc).apply(null,arguments)},Ma=f.stackRestore=function(){return(Ma=f.stackRestore=f.asm.dc).apply(null,arguments)},Ob=f.stackAlloc=function(){return(Ob=f.stackAlloc=f.asm.ec).apply(null,arguments)};f.___start_em_js=42360;f.___stop_em_js=51741;var Yb;E=function Zb(){Yb||$b();Yb||(E=Zb)};
function ac(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(g=>{z[e++]=Nb(g)});z[e]=0;try{var k=b(c,d);Mb(k)}catch(g){g instanceof ka||"unwind"==g||h(1,g)}}
function $b(){function a(){if(!Yb&&(Yb=!0,f.calledRun=!0,!oa)){Ja(za);Ja(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();bc&&ac(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();Ca.unshift(c)}Ja(Ca)}}var b=b||ba;if(!(0<D)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();Ja(ya);0<D||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var bc=!0;f.noInitialRun&&(bc=!1);$b();
