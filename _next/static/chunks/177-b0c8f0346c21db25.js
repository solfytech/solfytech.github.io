(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9361:function(t,e){"use strict";e.Z=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}},6929:function(t,e,n){var r=n(6724).W,i=Math.PI/180,o=2048;function a(t){return t.text}function s(){return"serif"}function c(){return"normal"}function u(t){return Math.sqrt(t.value)}function l(){return 30*(~~(6*Math.random())-3)}function f(){return 1}function h(t,e,n,r){if(!e.sprite){var a=t.context,s=t.ratio;a.clearRect(0,0,2048/s,o/s);var c=0,u=0,l=0,f=n.length;for(--r;++r<f;){e=n[r],a.save(),a.font=e.style+" "+e.weight+" "+~~((e.size+1)/s)+"px "+e.font;var h=a.measureText(e.text+"m").width*s,d=e.size<<1;if(e.rotate){var p=Math.sin(e.rotate*i),y=Math.cos(e.rotate*i),g=h*y,m=h*p,v=d*y,b=d*p;h=Math.max(Math.abs(g+b),Math.abs(g-b))+31>>5<<5,d=~~Math.max(Math.abs(m+v),Math.abs(m-v))}else h=h+31>>5<<5;if(d>l&&(l=d),c+h>=2048&&(c=0,u+=l,l=0),u+d>=o)break;a.translate((c+(h>>1))/s,(u+(d>>1))/s),e.rotate&&a.rotate(e.rotate*i),a.fillText(e.text,0,0),e.padding&&(a.lineWidth=2*e.padding,a.strokeText(e.text,0,0)),a.restore(),e.width=h,e.height=d,e.xoff=c,e.yoff=u,e.x1=h>>1,e.y1=d>>1,e.x0=-e.x1,e.y0=-e.y1,e.hasText=!0,c+=h}for(var w=a.getImageData(0,0,2048/s,o/s).data,_=[];--r>=0;)if((e=n[r]).hasText){for(var O=(h=e.width)>>5,x=(d=e.y1-e.y0,0);x<d*O;x++)_[x]=0;if(null==(c=e.xoff))return;u=e.yoff;for(var z=0,S=-1,E=0;E<d;E++){for(x=0;x<h;x++){var R=O*E+(x>>5),A=w[2048*(u+E)+(c+x)<<2]?1<<31-x%32:0;_[R]|=A,z|=A}z?S=E:(e.y0++,d--,E--,u++)}e.y1=e.y0+S,e.sprite=_.slice(0,(e.y1-e.y0)*O)}}}function d(t,e,n){n>>=5;for(var r,i=t.sprite,o=t.width>>5,a=t.x-(o<<4),s=127&a,c=32-s,u=t.y1-t.y0,l=(t.y+t.y0)*n+(a>>5),f=0;f<u;f++){r=0;for(var h=0;h<=o;h++)if((r<<c|(h<o?(r=i[f*o+h])>>>s:0))&e[l+h])return!0;l+=n}return!1}function p(t,e){var n=t[0],r=t[1];e.x+e.x0<n.x&&(n.x=e.x+e.x0),e.y+e.y0<n.y&&(n.y=e.y+e.y0),e.x+e.x1>r.x&&(r.x=e.x+e.x1),e.y+e.y1>r.y&&(r.y=e.y+e.y1)}function y(t){var e=t[0]/t[1];return function(t){return[e*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function g(){return document.createElement("canvas")}function m(t){return"function"===typeof t?t:function(){return t}}t.exports=function(){var t=[256,256],e=a,n=s,i=u,b=c,w=c,_=l,O=f,x=y,z=[],S=1/0,E=r("word","end"),R=null,A=Math.random,M={},j=g;function T(e,n,r){t[0],t[1];for(var i,o,a,s,c,u=n.x,l=n.y,f=Math.sqrt(t[0]*t[0]+t[1]*t[1]),h=x(t),p=A()<.5?1:-1,y=-p;(i=h(y+=p))&&(o=~~i[0],a=~~i[1],!(Math.min(Math.abs(o),Math.abs(a))>=f));)if(n.x=u+o,n.y=l+a,!(n.x+n.x0<0||n.y+n.y0<0||n.x+n.x1>t[0]||n.y+n.y1>t[1])&&(!r||!d(n,e,t[0]))&&(!r||(c=r,(s=n).x+s.x1>c[0].x&&s.x+s.x0<c[1].x&&s.y+s.y1>c[0].y&&s.y+s.y0<c[1].y))){for(var g,m=n.sprite,v=n.width>>5,b=t[0]>>5,w=n.x-(v<<4),_=127&w,O=32-_,z=n.y1-n.y0,S=(n.y+n.y0)*b+(w>>5),E=0;E<z;E++){g=0;for(var R=0;R<=v;R++)e[S+R]|=g<<O|(R<v?(g=m[E*v+R])>>>_:0);S+=b}return delete n.sprite,!0}return!1}return M.canvas=function(t){return arguments.length?(j=m(t),M):j},M.start=function(){var r=function(t){t.width=t.height=1;var e=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=2048/e,t.height=o/e;var n=t.getContext("2d");return n.fillStyle=n.strokeStyle="red",n.textAlign="center",{context:n,ratio:e}}(j()),a=function(t){var e=[],n=-1;for(;++n<t;)e[n]=0;return e}((t[0]>>5)*t[1]),s=null,c=z.length,u=-1,l=[],f=z.map((function(t,r){return t.text=e.call(this,t,r),t.font=n.call(this,t,r),t.style=b.call(this,t,r),t.weight=w.call(this,t,r),t.rotate=_.call(this,t,r),t.size=~~i.call(this,t,r),t.padding=O.call(this,t,r),t})).sort((function(t,e){return e.size-t.size}));return R&&clearInterval(R),R=setInterval(d,0),d(),M;function d(){for(var e=Date.now();Date.now()-e<S&&++u<c&&R;){var n=f[u];n.x=t[0]*(A()+.5)>>1,n.y=t[1]*(A()+.5)>>1,h(r,n,f,u),n.hasText&&T(a,n,s)&&(l.push(n),E.call("word",M,n),s?p(s,n):s=[{x:n.x+n.x0,y:n.y+n.y0},{x:n.x+n.x1,y:n.y+n.y1}],n.x-=t[0]>>1,n.y-=t[1]>>1)}u>=c&&(M.stop(),E.call("end",M,l,s))}},M.stop=function(){return R&&(clearInterval(R),R=null),M},M.timeInterval=function(t){return arguments.length?(S=null==t?1/0:t,M):S},M.words=function(t){return arguments.length?(z=t,M):z},M.size=function(e){return arguments.length?(t=[+e[0],+e[1]],M):t},M.font=function(t){return arguments.length?(n=m(t),M):n},M.fontStyle=function(t){return arguments.length?(b=m(t),M):b},M.fontWeight=function(t){return arguments.length?(w=m(t),M):w},M.rotate=function(t){return arguments.length?(_=m(t),M):_},M.text=function(t){return arguments.length?(e=m(t),M):e},M.spiral=function(t){return arguments.length?(x=v[t]||t,M):x},M.fontSize=function(t){return arguments.length?(i=m(t),M):i},M.padding=function(t){return arguments.length?(O=m(t),M):O},M.random=function(t){return arguments.length?(A=t,M):A},M.on=function(){var t=E.on.apply(E,arguments);return t===E?M:t},M};var v={archimedean:y,rectangular:function(t){var e=4*t[0]/t[1],n=0,r=0;return function(t){var i=t<0?-1:1;switch(Math.sqrt(1+4*i*t)-i&3){case 0:n+=e;break;case 1:r+=4;break;case 2:n-=e;break;default:r-=4}return[n,r]}}}},6724:function(t,e,n){"use strict";n.d(e,{W:function(){return u}});var r={value:function(){}};function i(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new o(r)}function o(t){this._=t}function a(t,e){return t.trim().split(/^|\s+/).map((function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}}))}function s(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}function c(t,e,n){for(var i=0,o=t.length;i<o;++i)if(t[i].name===e){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=n&&t.push({name:e,value:n}),t}o.prototype=i.prototype={constructor:o,on:function(t,e){var n,r=this._,i=a(t+"",r),o=-1,u=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!==typeof e)throw new Error("invalid callback: "+e);for(;++o<u;)if(n=(t=i[o]).type)r[n]=c(r[n],t.name,e);else if(null==e)for(n in r)r[n]=c(r[n],t.name,null);return this}for(;++o<u;)if((n=(t=i[o]).type)&&(n=s(r[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new o(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,n=(r=this._[t]).length;o<n;++o)r[o].value.apply(e,i)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(e,n)}};var u=i},8045:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.src,n=t.sizes,s=t.unoptimized,c=void 0!==s&&s,y=t.priority,g=void 0!==y&&y,_=t.loading,E=t.lazyRoot,A=void 0===E?null:E,M=t.lazyBoundary,j=t.className,T=t.quality,k=t.width,P=t.height,I=t.style,W=t.objectFit,D=t.objectPosition,C=t.onLoadingComplete,L=t.placeholder,q=void 0===L?"empty":L,F=t.blurDataURL,V=u(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),N=l.useContext(p.ImageConfigContext),B=l.useMemo((function(){var t=v||N||h.imageConfigDefault,e=o(t.deviceSizes).concat(o(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return a({},t,{allSizes:e,deviceSizes:n})}),[N]),U=V,H=n?"responsive":"intrinsic";"layout"in U&&(U.layout&&(H=U.layout),delete U.layout);var G=S;if("loader"in U){if(U.loader){var Z=U.loader;G=function(t){t.config;var e=u(t,["config"]);return Z(e)}}delete U.loader}var $="";if(function(t){return"object"===typeof t&&(O(t)||function(t){return void 0!==t.src}(t))}(e)){var J=O(e)?e.default:e;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(F=F||J.blurDataURL,$=J.src,(!H||"fill"!==H)&&(P=P||J.height,k=k||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!g&&("lazy"===_||"undefined"===typeof _);((e="string"===typeof e?e:$).startsWith("data:")||e.startsWith("blob:"))&&(c=!0,Q=!1);b.has(e)&&(Q=!1);m&&(c=!0);var Y,K=i(l.useState(!1),2),X=K[0],tt=K[1],et=i(d.useIntersection({rootRef:A,rootMargin:M||"200px",disabled:!Q}),3),nt=et[0],rt=et[1],it=et[2],ot=!Q||rt,at={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},st={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ct=!1,ut={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:W,objectPosition:D},lt=z(k),ft=z(P),ht=z(T);0;var dt=Object.assign({},I,ut),pt="blur"!==q||X?{}:{backgroundSize:W||"cover",backgroundPosition:D||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(F,'")')};if("fill"===H)at.display="block",at.position="absolute",at.top=0,at.left=0,at.bottom=0,at.right=0;else if("undefined"!==typeof lt&&"undefined"!==typeof ft){var yt=ft/lt,gt=isNaN(yt)?"100%":"".concat(100*yt,"%");"responsive"===H?(at.display="block",at.position="relative",ct=!0,st.paddingTop=gt):"intrinsic"===H?(at.display="inline-block",at.position="relative",at.maxWidth="100%",ct=!0,st.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(lt,"%27%20height=%27").concat(ft,"%27/%3e")):"fixed"===H&&(at.display="inline-block",at.position="relative",at.width=lt,at.height=ft)}else 0;var mt={src:w,srcSet:void 0,sizes:void 0};ot&&(mt=x({config:B,src:e,unoptimized:c,layout:H,width:lt,quality:ht,sizes:n,loader:G}));var vt=e;0;var bt,wt="imagesrcset",_t="imagesizes";wt="imageSrcSet",_t="imageSizes";var Ot=(r(bt={},wt,mt.srcSet),r(bt,_t,mt.sizes),bt),xt=l.default.useLayoutEffect,zt=l.useRef(C),St=l.useRef(e);l.useEffect((function(){zt.current=C}),[C]),xt((function(){St.current!==e&&(it(),St.current=e)}),[it,e]);var Et=a({isLazy:Q,imgAttributes:mt,heightInt:ft,widthInt:lt,qualityInt:ht,layout:H,className:j,imgStyle:dt,blurStyle:pt,loading:_,config:B,unoptimized:c,placeholder:q,loader:G,srcString:vt,onLoadingCompleteRef:zt,setBlurComplete:tt,setIntersection:nt,isVisible:ot,noscriptSizes:n},U);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:at},ct?l.default.createElement("span",{style:st},Y?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,l.default.createElement(R,Object.assign({},Et))),g?l.default.createElement(f.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+mt.src+mt.srcSet+mt.sizes,rel:"preload",as:"image",href:mt.srcSet?void 0:mt.src},Ot))):null)};var a=n(6495).Z,s=n(2648).Z,c=n(1598).Z,u=n(7273).Z,l=c(n(7294)),f=s(n(5443)),h=n(9309),d=n(7190),p=n(9977),y=(n(3794),n(2392));var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0}||{},m=g.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var _=new Map([["default",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(y.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e.path).concat(A(n))),a=o.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(A(n))}],["akamai",function(t){var e=t.config,n=t.src,r=t.width;return"".concat(e.path).concat(A(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function O(t){return void 0!==t.default}function x(t){var e=t.config,n=t.src,r=t.unoptimized,i=t.layout,a=t.width,s=t.quality,c=t.sizes,u=t.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var l=function(t,e,n,r){var i=t.deviceSizes,a=t.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,u=[];s=c.exec(r);s)u.push(parseInt(s[2]));if(u.length){var l,f=.01*(l=Math).min.apply(l,o(u));return{widths:a.filter((function(t){return t>=i[0]*f})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([e,2*e].map((function(t){return a.find((function(e){return e>=t}))||a[a.length-1]})))),kind:"x"}}(e,a,i,c),f=l.widths,h=l.kind,d=f.length-1;return{sizes:c||"w"!==h?c:"100vw",srcSet:f.map((function(t,r){return"".concat(u({config:e,src:n,quality:s,width:t})," ").concat("w"===h?t:r+1).concat(h)})).join(", "),src:u({config:e,src:n,quality:s,width:f[d]})}}function z(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function S(t){var e,n=(null==(e=t.config)?void 0:e.loader)||"default",r=_.get(n);if(r)return r(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(n))}function E(t,e,n,r,i,o){t&&t.src!==w&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.parentNode&&(b.add(e),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=t.naturalWidth,a=t.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var R=function(t){var e=t.imgAttributes,n=(t.heightInt,t.widthInt),r=t.qualityInt,i=t.layout,o=t.className,s=t.imgStyle,c=t.blurStyle,f=t.isLazy,h=t.placeholder,d=t.loading,p=t.srcString,y=t.config,g=t.unoptimized,m=t.loader,v=t.onLoadingCompleteRef,b=t.setBlurComplete,w=t.setIntersection,_=t.onLoad,O=t.onError,z=(t.isVisible,t.noscriptSizes),S=u(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=f?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,e,{decoding:"async","data-nimg":i,className:o,style:a({},s,c),ref:l.useCallback((function(t){w(t),(null==t?void 0:t.complete)&&E(t,p,0,h,v,b)}),[w,p,i,h,v,b]),onLoad:function(t){E(t.currentTarget,p,0,h,v,b),_&&_(t)},onError:function(t){"blur"===h&&b(!0),O&&O(t)}})),(f||"blur"===h)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},S,x({config:y,src:p,unoptimized:g,layout:i,width:n,quality:r,sizes:z,loader:m}),{decoding:"async","data-nimg":i,style:s,className:o,loading:d}))))};function A(t){return"/"===t[0]?t.slice(1):t}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},5675:function(t,e,n){t.exports=n(8045)},2703:function(t,e,n){"use strict";var r=n(414);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(t,e,n){t.exports=n(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6377:function(t,e,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}n.r(e),n.d(e,{default:function(){return D},withContentRect:function(){return I}});var o=n(7294),a=n(5697),s=n.n(a),c=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),u="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,l="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),f="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(l):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var h=["top","right","bottom","left","width","height","size","weight"],d="undefined"!==typeof MutationObserver,p=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&s()}function a(){f(o)}function s(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,e);i=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){u&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),d?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){u&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;h.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),y=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},g=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||l},m=x(0,0,0,0);function v(t){return parseFloat(t)||0}function b(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+v(t["border-"+n+"-width"])}),0)}function w(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return m;var r=g(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=v(o)}return e}(r),o=i.left+i.right,a=i.top+i.bottom,s=v(r.width),c=v(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==e&&(s-=b(r,"left","right")+o),Math.round(c+a)!==n&&(c-=b(r,"top","bottom")+a)),!function(t){return t===g(t).document.documentElement}(t)){var u=Math.round(s+o)-e,l=Math.round(c+a)-n;1!==Math.abs(u)&&(s-=u),1!==Math.abs(l)&&(c-=l)}return x(i.left,i.top,s,c)}var _="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof g(t).SVGGraphicsElement}:function(t){return t instanceof g(t).SVGElement&&"function"===typeof t.getBBox};function O(t){return u?_(t)?function(t){var e=t.getBBox();return x(0,0,e.width,e.height)}(t):w(t):m}function x(t,e,n,r){return{x:t,y:e,width:n,height:r}}var z=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=x(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=O(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),S=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(o.prototype);return y(a,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),a}(e);y(this,{target:t,contentRect:n})},E=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new c,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new z(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new S(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),R="undefined"!==typeof WeakMap?new WeakMap:new c,A=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=p.getInstance(),r=new E(e,n,this);R.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){A.prototype[t]=function(){var e;return(e=R.get(this))[t].apply(e,arguments)}}));var M="undefined"!==typeof l.ResizeObserver?l.ResizeObserver:A,j=["client","offset","scroll","bounds","margin"];function T(t){var e=[];return j.forEach((function(n){t[n]&&e.push(n)})),e}function k(t,e){var n={};if(e.indexOf("client")>-1&&(n.client={top:t.clientTop,left:t.clientLeft,width:t.clientWidth,height:t.clientHeight}),e.indexOf("offset")>-1&&(n.offset={top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}),e.indexOf("scroll")>-1&&(n.scroll={top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}),e.indexOf("bounds")>-1){var r=t.getBoundingClientRect();n.bounds={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height}}if(e.indexOf("margin")>-1){var i=getComputedStyle(t);n.margin={top:i?parseInt(i.marginTop):0,right:i?parseInt(i.marginRight):0,bottom:i?parseInt(i.marginBottom):0,left:i?parseInt(i.marginLeft):0}}return n}function P(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||window}function I(t){return function(e){var n,a;return a=n=function(n){var a,s;function c(){for(var e,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))||this).state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},e._animationFrameID=null,e._resizeObserver=null,e._node=null,e._window=null,e.measure=function(n){var r=k(e._node,t||T(e.props));n&&(r.entry=n[0].contentRect),e._animationFrameID=e._window.requestAnimationFrame((function(){null!==e._resizeObserver&&(e.setState({contentRect:r}),"function"===typeof e.props.onResize&&e.props.onResize(r))}))},e._handleRef=function(t){null!==e._resizeObserver&&null!==e._node&&e._resizeObserver.unobserve(e._node),e._node=t,e._window=P(e._node);var n=e.props.innerRef;n&&("function"===typeof n?n(e._node):n.current=e._node),null!==e._resizeObserver&&null!==e._node&&e._resizeObserver.observe(e._node)},e}s=n,(a=c).prototype=Object.create(s.prototype),a.prototype.constructor=a,i(a,s);var u=c.prototype;return u.componentDidMount=function(){this._resizeObserver=null!==this._window&&this._window.ResizeObserver?new this._window.ResizeObserver(this.measure):new M(this.measure),null!==this._node&&(this._resizeObserver.observe(this._node),"function"===typeof this.props.onResize&&this.props.onResize(k(this._node,t||T(this.props))))},u.componentWillUnmount=function(){null!==this._window&&this._window.cancelAnimationFrame(this._animationFrameID),null!==this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},u.render=function(){var t=this.props,n=(t.innerRef,t.onResize,function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["innerRef","onResize"]));return(0,o.createElement)(e,r({},n,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))},c}(o.Component),n.propTypes={client:s().bool,offset:s().bool,scroll:s().bool,bounds:s().bool,margin:s().bool,innerRef:s().oneOfType([s().object,s().func]),onResize:s().func},a}}var W=I()((function(t){var e=t.measure,n=t.measureRef,r=t.contentRect;return(0,t.children)({measure:e,measureRef:n,contentRect:r})}));W.displayName="Measure",W.propTypes.children=s().func;var D=W},7115:function(t,e,n){"use strict";var r=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const a=i(n(6929)),s=o(n(5697)),c=o(n(7294)),u=i(n(6377));class l extends c.Component{constructor(){super(...arguments),this.state={children:void 0,height:0,width:0,wrappedChildren:[]},this.mounted=!1,this.resizeTimer=void 0,this.fontFamily=this.getStyleValue.bind(this,"fontFamily"),this.fontSize=this.getStyleValue.bind(this,"fontSize"),this.fontWeight=this.getStyleValue.bind(this,"fontWeight"),this.fontStyle=this.getStyleValue.bind(this,"fontStyle"),this.padding=this.getStyleValue.bind(this,"padding"),this.rotate=t=>{const e=t.child.props.rotate||this.props.rotate||l.defaultProps.rotate;return"function"===typeof e?e(t.child.props):e},this.text=t=>{let e=t.child.props.text;if(!e){const n=t.child.props.children;e=Array.isArray(n)?n[0]:n}return e},this.onResize=t=>{const{width:e,height:n}=t.bounds;if(this.state.width!==e||this.state.height!==n){if(!this.state.width&&!this.state.height)return void this.setState({height:n,width:e});this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout((()=>{this.resizeTimer=void 0,this.mounted&&this.setState({children:void 0,height:n,width:e})}),100)}}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}calculateLayout(t,e){const{children:n,spiral:r,random:i,style:o}=t,{width:s,height:u}=e,l=r;return new Promise((t=>{const e=c.Children.map(n,(t=>({child:t})));let r=a.default().size([s,u]).words(e).text(this.text).font(this.fontFamily).fontStyle(this.fontStyle).fontWeight(this.fontWeight).fontSize(this.fontSize).rotate(this.rotate).padding(this.padding);l&&(r=r.spiral(l)),i&&(r=r.random(i)),r.on("end",(e=>{const n=e.map(((t,e)=>{let n=t.x;n+=t.x0,n+=s/2;let r=t.y;r+=t.y0,r+=u/2;const i=`translate(${n}px,${r}px) rotate(${t.rotate}deg)`,a=Object.assign({position:"absolute"},t.child.props.style,{MozTransform:i,MsTransform:i,OTransform:i,WebkitTransform:i,fontFamily:t.font,fontSize:t.size,fontStyle:t.style,fontWeight:t.weight,textAlign:"center",transform:i,transformOrigin:"center bottom",whiteSpace:"nowrap",width:t.width});return!a.color&&o.color&&"function"===typeof o.color&&(a.color=o.color(t.child,e)),c.cloneElement(t.child,Object.assign({},t.child.props,{key:t.text,style:a}),t.child.props.children)}));t(n)})).start()}))}getStyleValue(t,e){let n=(e.child.props.style?e.child.props.style[t]:void 0)||this.props.style[t]||l.defaultProps.style[t];return"function"===typeof n&&(n=n(e.child.props)),"fontSize"===t&&(n+=2),n}render(){const t=this.props,{style:e,children:n,rotate:i,spiral:o,random:a}=t,s=r(t,["style","children","rotate","spiral","random"]),{fontFamily:l,fontSize:f,fontWeight:h,fontStyle:d,color:p,padding:y}=e,g=r(e,["fontFamily","fontSize","fontWeight","fontStyle","color","padding"]),{wrappedChildren:m}=this.state;return c.createElement(u.default,{bounds:!0,onResize:this.onResize},(({measureRef:t})=>c.createElement("div",Object.assign({ref:t},s,{style:g}),m)))}componentDidUpdate(){const{width:t,height:e}=this.state,{children:n}=this.props;t&&e&&n!==this.state.children&&this.calculateLayout(this.props,this.state).then((t=>{this.mounted&&this.setState({children:n,wrappedChildren:t})}))}}l.propTypes={children:s.any,random:s.func,rotate:s.oneOfType([s.func,s.number]),spiral:s.oneOfType([s.oneOf(["archimedean","rectangular"]),s.func]),style:s.shape({color:s.oneOfType([s.func,s.string]),fontFamily:s.oneOfType([s.func,s.string]),fontSize:s.oneOfType([s.func,s.number]),fontStyle:s.oneOfType([s.func,s.string]),fontWeight:s.oneOfType([s.func,s.number,s.string]),padding:s.oneOfType([s.func,s.number])})},l.defaultProps={random:Math.random,rotate:0,spiral:"archimedean",style:{fontFamily:"serif",fontSize:20,fontStyle:"normal",fontWeight:"normal",padding:1}},e.default=l},5423:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=r(n(7115));e.default=i.default},9396:function(t,e,n){"use strict";function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}n.d(e,{Z:function(){return r}})}}]);