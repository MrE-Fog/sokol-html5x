var e;e||(e=Module);var ba="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function f(a,b){if(a){var c=m,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ba)a=ba.decode(c.subarray(a,b));else{for(d="";a<b;){var g=c[a++];if(g&128){var h=c[a++]&63;if(192==(g&224))d+=String.fromCharCode((g&31)<<6|h);else{var k=c[a++]&63;g=224==(g&240)?(g&15)<<12|h<<6|k:(g&7)<<18|h<<12|k<<6|c[a++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}a=d}}else a="";return a}
function p(a,b,c){var d=m;if(!(0<c))return 0;var g=b;c=b+c-1;for(var h=0;h<a.length;++h){var k=a.charCodeAt(h);if(55296<=k&&57343>=k){var w=a.charCodeAt(++h);k=65536+((k&1023)<<10)|w&1023}if(127>=k){if(b>=c)break;d[b++]=k}else{if(2047>=k){if(b+1>=c)break;d[b++]=192|k>>6}else{if(65535>=k){if(b+2>=c)break;d[b++]=224|k>>12}else{if(b+3>=c)break;d[b++]=240|k>>18;d[b++]=128|k>>12&63}d[b++]=128|k>>6&63}d[b++]=128|k&63}}d[b]=0;return b-g}var ca=new WebAssembly.Memory({initial:512,maximum:512}),q=ca.buffer;
new Int8Array(q);var da=new Int16Array(q),t=new Int32Array(q),m=new Uint8Array(q);new Uint16Array(q);new Uint32Array(q);new Float32Array(q);var u=new Float64Array(q);t[2504]=5253152;var v=0,x=0,y=0,z=0,A=0,ea=null,fa=null;function B(a){try{if(!a)return window;"number"===typeof a&&(a=f(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?window.screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}var C=[];
function ha(){if(D&&ia.La)for(var a=0;a<C.length;++a){var b=C[a];C.splice(a,1);--a;b.qb.apply(this,b.kb)}}var D=0,ia=null,E=[];function ja(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function ka(a){var b=E[a];b.target.removeEventListener(b.Ka,b.eb,b.Ma);E.splice(a,1)}
function F(a){function b(b){++D;ia=a;ha();a.Oa(b);ha();--D}if(a.Na)a.eb=b,a.target.addEventListener(a.Ka,b,a.Ma),E.push(a);else for(var c=0;c<E.length;++c)E[c].target==a.target&&E[c].Ka==a.Ka&&ka(c--)}
function G(a,b,c,d,g,h){v||(v=H(164));a={target:B(a),La:ja()?!1:!0,Ka:h,Na:d,Oa:function(a){a=a||window.event;var c=v;p(a.key?a.key:"",c+0,32);p(a.code?a.code:"",c+32,32);t[c+64>>2]=a.location;t[c+68>>2]=a.ctrlKey;t[c+72>>2]=a.shiftKey;t[c+76>>2]=a.altKey;t[c+80>>2]=a.metaKey;t[c+84>>2]=a.repeat;p(a.locale?a.locale:"",c+88,32);p(a.char?a.char:"",c+120,32);t[c+152>>2]=a.charCode;t[c+156>>2]=a.keyCode;t[c+160>>2]=a.which;J(d,g,c,b)&&a.preventDefault()},Ma:c};F(a)}
function K(a,b,c){u[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();t[a+8>>2]=b.screenX;t[a+12>>2]=b.screenY;t[a+16>>2]=b.clientX;t[a+20>>2]=b.clientY;t[a+24>>2]=b.ctrlKey;t[a+28>>2]=b.shiftKey;t[a+32>>2]=b.altKey;t[a+36>>2]=b.metaKey;da[a+40>>1]=b.button;da[a+42>>1]=b.buttons;t[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-ea;t[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-fa;if(e.canvas){var d=e.canvas.getBoundingClientRect();
t[a+60>>2]=b.clientX-d.left;t[a+64>>2]=b.clientY-d.top}else t[a+60>>2]=0,t[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},t[a+52>>2]=b.clientX-d.left,t[a+56>>2]=b.clientY-d.top):(t[a+52>>2]=0,t[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(ea=b.screenX,fa=b.screenY)}
function L(a,b,c,d,g,h){x||(x=H(72));a=B(a);c={target:a,La:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ka:h,Na:d,Oa:function(c){c=c||window.event;K(x,c,a);J(d,g,x,b)&&c.preventDefault()},Ma:c};ja()&&"mousedown"==h&&(c.La=!1);F(c)}
function la(a,b,c,d){z||(z=H(36));a=B(a);F({target:a,La:!1,Ka:"resize",Na:d,Oa:function(c){c=c||window.event;if(c.target==a){var g=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],k=z;t[k>>2]=c.detail;t[k+4>>2]=document.body.clientWidth;
t[k+8>>2]=document.body.clientHeight;t[k+12>>2]=window.innerWidth;t[k+16>>2]=window.innerHeight;t[k+20>>2]=window.outerWidth;t[k+24>>2]=window.outerHeight;t[k+28>>2]=g[0];t[k+32>>2]=g[1];J(d,10,k,b)&&c.preventDefault()}},Ma:c})}
function M(a,b,c,d,g,h){A||(A=H(1684));a=B(a);F({target:a,La:"touchstart"==h||"touchend"==h,Ka:h,Na:d,Oa:function(c){c=c||window.event;for(var k={},h=0;h<c.touches.length;++h){var n=c.touches[h];k[n.identifier]=n}for(h=0;h<c.changedTouches.length;++h)n=c.changedTouches[h],k[n.identifier]=n,n.cb=!0;for(h=0;h<c.targetTouches.length;++h)n=c.targetTouches[h],k[n.identifier].ib=!0;var l=n=A;t[l+4>>2]=c.ctrlKey;t[l+8>>2]=c.shiftKey;t[l+12>>2]=c.altKey;t[l+16>>2]=c.metaKey;l+=20;var aa=e.canvas?e.canvas.getBoundingClientRect():
void 0,oa=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},pa=0;for(h in k){var r=k[h];t[l>>2]=r.identifier;t[l+4>>2]=r.screenX;t[l+8>>2]=r.screenY;t[l+12>>2]=r.clientX;t[l+16>>2]=r.clientY;t[l+20>>2]=r.pageX;t[l+24>>2]=r.pageY;t[l+28>>2]=r.cb;t[l+32>>2]=r.ib;aa?(t[l+44>>2]=r.clientX-aa.left,t[l+48>>2]=r.clientY-aa.top):(t[l+44>>2]=0,t[l+48>>2]=0);t[l+36>>2]=r.clientX-oa.left;t[l+40>>2]=r.clientY-oa.top;l+=52;if(32<=++pa)break}t[n>>2]=pa;J(d,g,n,b)&&c.preventDefault()},Ma:c})}
function ma(a,b,c,d,g,h){a||(a=e.canvas);a={target:B(a),La:!1,Ka:h,Na:d,Oa:function(a){a=a||window.event;J(d,g,0,b)&&a.preventDefault()},Ma:c};F(a)}
function na(a,b,c,d,g){function h(c){c=c||window.event;K(y,c,a);u[y+72>>3]=c.wheelDeltaX||0;u[y+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);u[y+88>>3]=0;t[y+96>>2]=0;J(d,9,y,b)&&c.preventDefault()}function k(c){c=c||window.event;var g=y;K(g,c,a);u[g+72>>3]=c.deltaX;u[g+80>>3]=c.deltaY;u[g+88>>3]=c.deltaZ;t[g+96>>2]=c.deltaMode;J(d,9,g,b)&&c.preventDefault()}y||(y=H(104));a=B(a);F({target:a,La:!0,Ka:g,Na:d,Oa:"wheel"==g?k:h,Ma:c})}
var qa=1,ra=0,N=[],O=[],sa=[],ta=[],ua=[],P=[],Q=[],R=[],va={},S=null,T={},U={},wa={};function V(a){ra||(ra=a)}function W(a){for(var b=qa++,c=a.length;c<b;c++)a[c]=null;return b}function xa(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=H(8),g={handle:d,attributes:b,version:b.$a,Sa:a};g.ab=2<=g.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.jb=g);va[d]=g;("undefined"===typeof b.Xa||b.Xa)&&ya(g);return d}
function ya(a){a||(a=S);if(!a.gb){a.gb=!0;var b=a.Sa;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,g){c.drawArraysInstancedANGLE(a,b,d,g)},b.drawElementsInstanced=function(a,b,d,g,h){c.drawElementsInstancedANGLE(a,b,d,g,h)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var g=b.getExtension("WEBGL_draw_buffers");g&&(b.drawBuffers=function(a,b){g.drawBuffersWEBGL(a,b)})}b.mb=b.getExtension("EXT_disjoint_timer_query");var h="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=h.indexOf(a)&&b.getExtension(a)})}}var za={},Aa,Ba,Ca=["default","low-power","high-performance"],Da=[];function Ea(a,b,c,d){for(var g=0;g<a;g++){var h=X[c](),k=h&&W(d);h?(h.name=k,d[k]=h):V(1282);t[b+4*g>>2]=k}}
function Fa(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){V(1282);return}c=2*X.getSupportedExtensions().length;break;case 33307:case 33308:if(2>S.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)t[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){V(1280);console.error("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:V(1280);return}t[b>>2]=c}else V(1281)}
function Y(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}b+=1;c=H(b);p(a,c,b);return c}for(var X,Ga=0;256>Ga;Ga++);for(var Ha=0;32>Ha;Ha++)Da.push(Array(Ha));
var Z={i:function(a){throw a;},Q:function(){return window.devicePixelRatio},P:function(a,b,c){a=a?B(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),u[b>>3]=a.right-a.left,u[c>>3]=a.bottom-a.top):(u[b>>3]=a.clientWidth,u[c>>3]=a.clientHeight);return 0},ua:function(){return 33554432},ra:function(a,b,c){m.set(m.subarray(b,b+c),a)},ka:function(a,b){function c(d){Ia(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},B:function(a,b,c){"number"===typeof a&&
(a=f(a));a=a&&"#canvas"!==a?"undefined"!==typeof za&&T[a]?T[a]:B(a):"undefined"!==typeof za&&T.canvas?T.canvas:e.canvas;if(!a)return-4;a.width=b;a.height=c;return 0},ca:function(a,b,c,d){G(a,b,c,d,2,"keydown");return 0},X:function(a,b,c,d){G(a,b,c,d,1,"keypress");return 0},R:function(a,b,c,d){G(a,b,c,d,3,"keyup");return 0},Ja:function(a,b,c,d){L(a,b,c,d,5,"mousedown");return 0},Ia:function(a,b,c,d){L(a,b,c,d,33,"mouseenter");return 0},Ha:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},Ga:function(a,
b,c,d){L(a,b,c,d,8,"mousemove");return 0},Fa:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},Ea:function(a,b,c,d){la(a,b,c,d);return 0},Da:function(a,b,c,d){M(a,b,c,d,25,"touchcancel");return 0},Ca:function(a,b,c,d){M(a,b,c,d,23,"touchend");return 0},Ba:function(a,b,c,d){M(a,b,c,d,24,"touchmove");return 0},Aa:function(a,b,c,d){M(a,b,c,d,22,"touchstart");return 0},za:function(a,b,c,d){ma(a,b,c,d,31,"webglcontextlost");return 0},ya:function(a,b,c,d){ma(a,b,c,d,32,"webglcontextrestored");return 0},
xa:function(a,b,c,d){a=B(a);return"undefined"!==typeof a.onwheel?(na(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(na(a,b,c,d,"mousewheel"),0):-1},O:function(a,b){var c={};b>>=2;c.alpha=!!t[b];c.depth=!!t[b+1];c.stencil=!!t[b+2];c.antialias=!!t[b+3];c.premultipliedAlpha=!!t[b+4];c.preserveDrawingBuffer=!!t[b+5];c.powerPreference=Ca[t[b+6]];c.failIfMajorPerformanceCaveat=!!t[b+7];c.$a=t[b+8];c.nb=t[b+9];c.Xa=t[b+10];c.fb=t[b+11];c.ob=t[b+12];c.pb=t[b+13];a=(a=f(a))&&"#canvas"!==a||!e.canvas?
T[a]?T[a].hb:B(a):e.canvas.id&&T[e.canvas.id]?T[e.canvas.id].hb||B(e.canvas.id):e.canvas;!a||c.fb?c=0:c=(a=1<c.$a?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))&&xa(a,c);return c},wa:function(a){a>>=2;for(var b=0;14>b;++b)t[a+b]=0;t[a]=t[a+1]=t[a+3]=t[a+4]=t[a+8]=t[a+10]=1},va:function(a){S=va[a];e.lb=X=S&&S.Sa;return!a||X?0:-5},N:function(a){X.activeTexture(a)},M:function(a,b){X.attachShader(O[a],Q[b])},h:function(a,b){35051==a?X.Va=b:35052==a&&(X.Wa=b);X.bindBuffer(a,
N[b])},e:function(a,b){X.bindFramebuffer(a,sa[b])},L:function(a,b){X.bindTexture(a,ua[b])},K:function(a){X.bindVertexArray(R[a])},J:function(a,b,c,d){X.blendColor(a,b,c,d)},I:function(a,b){X.blendEquationSeparate(a,b)},H:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},l:function(a,b,c,d,g,h,k,w,I,n){X.blitFramebuffer(a,b,c,d,g,h,k,w,I,n)},G:function(a,b,c,d){S.ab?c?X.bufferData(a,m,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?m.subarray(c,c+b):b,d)},F:function(a,b,c,d){S.ab?X.bufferSubData(a,b,m,d,
c):X.bufferSubData(a,b,m.subarray(d,d+c))},ta:function(a){X.clear(a)},sa:function(a,b,c,d){X.clearColor(a,b,c,d)},qa:function(a){X.clearDepth(a)},pa:function(a){X.clearStencil(a)},q:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},oa:function(a){X.compileShader(Q[a])},na:function(){var a=W(O),b=X.createProgram();b.name=a;O[a]=b;return a},ma:function(a){var b=W(Q);Q[b]=X.createShader(a);return b},E:function(a){X.cullFace(a)},la:function(a,b){for(var c=0;c<a;c++){var d=t[b+4*c>>2],g=N[d];g&&(X.deleteBuffer(g),
g.name=0,N[d]=null,d==Aa&&(Aa=0),d==Ba&&(Ba=0),d==X.Va&&(X.Va=0),d==X.Wa&&(X.Wa=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=t[b+4*c>>2],g=sa[d];g&&(X.deleteFramebuffer(g),g.name=0,sa[d]=null)}},D:function(a){if(a){var b=O[a];b?(X.deleteProgram(b),b.name=0,O[a]=null,U[a]=null):V(1281)}},C:function(a,b){for(var c=0;c<a;c++){var d=t[b+4*c>>2],g=ta[d];g&&(X.deleteRenderbuffer(g),g.name=0,ta[d]=null)}},p:function(a){if(a){var b=Q[a];b?(X.deleteShader(b),Q[a]=null):V(1281)}},ja:function(a,b){for(var c=
0;c<a;c++){var d=t[b+4*c>>2],g=ua[d];g&&(X.deleteTexture(g),g.name=0,ua[d]=null)}},ia:function(a,b){for(var c=0;c<a;c++){var d=t[b+4*c>>2];X.deleteVertexArray(R[d]);R[d]=null}},o:function(a){X.depthFunc(a)},n:function(a){X.depthMask(!!a)},c:function(a){X.disable(a)},b:function(a){X.disableVertexAttribArray(a)},ha:function(a,b,c){X.drawArrays(a,b,c)},k:function(a,b){for(var c=Da[a],d=0;d<a;d++)c[d]=t[b+4*d>>2];X.drawBuffers(c)},ga:function(a,b,c,d){X.drawElements(a,b,c,d)},d:function(a){X.enable(a)},
fa:function(a){X.enableVertexAttribArray(a)},A:function(a){X.frontFace(a)},z:function(a,b){Ea(a,b,"createBuffer",N)},ea:function(a,b){Ea(a,b,"createVertexArray",R)},y:function(a,b){return X.getAttribLocation(O[a],f(b))},x:function(a,b){Fa(a,b)},da:function(a,b,c,d){a=X.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");0<b&&d?(b=p(a,d,b),c&&(t[c>>2]=b)):c&&(t[c>>2]=0)},w:function(a,b,c){if(c)if(a>=qa)V(1281);else{var d=U[a];if(d)if(35716==b)a=X.getProgramInfoLog(O[a]),null===a&&(a="(unknown error)"),
t[c>>2]=a.length+1;else if(35719==b)t[c>>2]=d.Ra;else if(35722==b){if(-1==d.Pa){a=O[a];var g=X.getProgramParameter(a,35721);for(b=d.Pa=0;b<g;++b)d.Pa=Math.max(d.Pa,X.getActiveAttrib(a,b).name.length+1)}t[c>>2]=d.Pa}else if(35381==b){if(-1==d.Qa)for(a=O[a],g=X.getProgramParameter(a,35382),b=d.Qa=0;b<g;++b)d.Qa=Math.max(d.Qa,X.getActiveUniformBlockName(a,b).length+1);t[c>>2]=d.Qa}else t[c>>2]=X.getProgramParameter(O[a],b);else V(1282)}else V(1281)},ba:function(a,b,c,d){a=X.getShaderInfoLog(Q[a]);null===
a&&(a="(unknown error)");0<b&&d?(b=p(a,d,b),c&&(t[c>>2]=b)):c&&(t[c>>2]=0)},v:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),t[c>>2]=a.length+1):35720==b?(a=X.getShaderSource(Q[a]),t[c>>2]=null===a||0==a.length?0:a.length+1):t[c>>2]=X.getShaderParameter(Q[a],b):V(1281)},aa:function(a){if(wa[a])return wa[a];switch(a){case 7939:var b=X.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Y(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
X.getParameter(a))||V(1280);b=Y(b);break;case 7938:b=X.getParameter(X.VERSION);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Y(b);break;case 35724:b=X.getParameter(X.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Y(b);break;default:return V(1280),0}return wa[a]=b},f:function(a,b){b=f(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+
1)):0;b=b.slice(0,d)}return(a=U[a]&&U[a].bb[b])&&0<=c&&c<a[0]?a[1]+c:-1},$:function(a){X.linkProgram(O[a]);var b=O[a];a=U[a]={bb:{},Ra:0,Pa:-1,Qa:-1};for(var c=a.bb,d=X.getProgramParameter(b,35718),g=0;g<d;++g){var h=X.getActiveUniform(b,g),k=h.name;a.Ra=Math.max(a.Ra,k.length+1);var w=k.lastIndexOf("[");0<w&&(k=k.slice(0,w));if(w=X.getUniformLocation(b,k)){var I=W(P);c[k]=[h.size,I];P[I]=w;for(var n=1;n<h.size;++n)w=X.getUniformLocation(b,k+"["+n+"]"),I=W(P),P[I]=w}}},u:function(a,b){X.polygonOffset(a,
b)},j:function(a){X.readBuffer(a)},_:function(a,b,c,d){X.scissor(a,b,c,d)},Z:function(a,b,c,d){for(var g="",h=0;h<b;++h){var k=d?t[d+4*h>>2]:-1;g+=f(t[c+4*h>>2],0>k?void 0:k)}X.shaderSource(Q[a],g)},Y:function(a,b,c){X.stencilFunc(a,b,c)},t:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},m:function(a){X.stencilMask(a)},W:function(a,b,c){X.stencilOp(a,b,c)},s:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},r:function(a,b){X.uniform1i(P[a],b)},V:function(a){X.useProgram(O[a])},U:function(a,b){X.vertexAttribDivisor(a,
b)},T:function(a,b,c,d,g,h){X.vertexAttribPointer(a,b,c,!!d,g,h)},S:function(a,b,c,d){X.viewport(a,b,c,d)},a:10016};Z.memory=ca;Z.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});Z.__memory_base=1024;Z.__table_base=0;var Ja,H,Ia,J;WebAssembly.instantiate(e.wasm,{env:Z,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}}}).then(function(a){a=a.instance.exports;Ja=a.Ta;H=a.Ua;Ia=a.Ya;J=a.Za;Ja()});
