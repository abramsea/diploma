!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=133)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(70))},function(t,n,r){"use strict";r.d(n,"h",(function(){return e})),r.d(n,"p",(function(){return o})),r.d(n,"j",(function(){return u})),r.d(n,"m",(function(){return i})),r.d(n,"l",(function(){return c})),r.d(n,"g",(function(){return a})),r.d(n,"f",(function(){return f})),r.d(n,"c",(function(){return s})),r.d(n,"u",(function(){return l})),r.d(n,"q",(function(){return p})),r.d(n,"e",(function(){return v})),r.d(n,"n",(function(){return d})),r.d(n,"b",(function(){return g})),r.d(n,"k",(function(){return h})),r.d(n,"t",(function(){return y})),r.d(n,"o",(function(){return x})),r.d(n,"w",(function(){return m})),r.d(n,"r",(function(){return S})),r.d(n,"s",(function(){return b})),r.d(n,"a",(function(){return w})),r.d(n,"x",(function(){return j})),r.d(n,"v",(function(){return O})),r.d(n,"y",(function(){return E})),r.d(n,"i",(function(){return L})),r.d(n,"d",(function(){return T}));r(55);var e=!1,o=100,u="506809f93d0443f99a89364270056a79",i="http://praktikum.tk/news",c="https://praktikum.tk/news",a="http://api.github.com",f="https://api.github.com",s=document.querySelector(".swiper-wrapper"),l=document.querySelector(".slider"),p=document.querySelector(".preloader"),v=document.querySelector("#error"),d=document.querySelector("#notFound"),g=document.querySelector(".found"),h=document.querySelector(".found__cards"),y=document.querySelector("#showMore"),x=(document.querySelector(".main"),new Date),m=[x.getFullYear(),x.getMonth()+1,x.getDate()].join("-"),S=document.querySelector(".search-form"),b=document.querySelector(".search-form__input"),w=document.querySelector("#asked"),j=document.querySelector("#week"),O=document.querySelector("#titles"),E=document.querySelectorAll(".table__whisker"),L=document.querySelector("#month"),T=document.querySelectorAll(".day")},function(t,n,r){var e=r(0),o=r(17),u=r(38),i=r(62),c=e.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=i&&c[t]||(i?c:u)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(0),o=r(25).f,u=r(7),i=r(12),c=r(27),a=r(58),f=r(51);t.exports=function(t,n){var r,s,l,p,v,d=t.target,g=t.global,h=t.stat;if(r=g?e:h?e[d]||c(d,{}):(e[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(g?s:d+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&u(p,"sham",!0),i(r,s,p,t)}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(10),o=r(11),u=r(18);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(10),o=r(41),u=r(6),i=r(20),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(u(t),n=i(n,!0),u(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(17),u=r(7),i=r(8),c=r(27),a=r(42),f=r(31),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,r,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||u(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=r:u(t,n,r)):f?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,n,r){var e=r(26),o=r(16);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(22),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(59),o=r(0),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(21),o=r(71);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){"use strict";var e,o,u=r(56),i=RegExp.prototype.exec,c=String.prototype.replace,a=i,f=(e=/a/,o=/b*/g,i.call(e,"a"),i.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var n,r,e,o,a=this;return s&&(r=new RegExp("^"+a.source+"$(?!\\s)",u.call(a))),f&&(n=a.lastIndex),e=i.call(a,t),f&&e&&(a.lastIndex=a.global?e.index+e[0].length:n),s&&e&&e.length>1&&c.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=a},function(t,n,r){var e=r(5);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=!1},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(16);t.exports=function(t){return Object(e(t))}},,function(t,n,r){var e=r(10),o=r(57),u=r(18),i=r(13),c=r(20),a=r(8),f=r(41),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=i(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(3),o=r(9),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(0),o=r(7);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n){t.exports={}},function(t,n,r){var e=r(9);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e,o,u,i=r(72),c=r(0),a=r(5),f=r(7),s=r(8),l=r(37),p=r(28),v=c.WeakMap;if(i){var d=new v,g=d.get,h=d.has,y=d.set;e=function(t,n){return y.call(d,t,n),n},o=function(t){return g.call(d,t)||{}},u=function(t){return h.call(d,t)}}else{var x=l("state");p[x]=!0,e=function(t,n){return f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},u=function(t){return s(t,x)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(33),o=r(26),u=r(23),i=r(14),c=r(43),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,g,h){for(var y,x,m=u(v),S=o(m),b=e(d,g,3),w=i(S.length),j=0,O=h||c,E=n?O(v,w):r?O(v,0):void 0;w>j;j++)if((p||j in S)&&(x=b(y=S[j],j,m),t))if(n)E[j]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return j;case 2:a.call(E,y)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(30);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(3),o=r(2),u=r(35),i=o("species");t.exports=function(t){return u>=51||!e((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e,o,u=r(0),i=r(52),c=u.process,a=c&&c.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:i&&(!(e=i.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(0),o=r(5),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n,r){var e=r(17),o=r(38),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){var r=[][t];return!r||!e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e=r(10),o=r(3),u=r(36);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(17);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e=r(5),o=r(29),u=r(2)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[u])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){"use strict";var e=r(20),o=r(11),u=r(18);t.exports=function(t,n,r){var i=e(n);i in t?o.f(t,i,u(0,r)):t[i]=r}},function(t,n,r){var e=r(12),o=r(77),u=Object.prototype;o!==u.toString&&e(u,"toString",o,{unsafe:!0})},,function(t,n,r){"use strict";var e=r(32).forEach,o=r(40);t.exports=o("forEach")?function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,r){var e=r(49),o=r(39).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(8),o=r(13),u=r(60).indexOf,i=r(28);t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(i,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~u(f,r)||f.push(r));return f}},function(t,n,r){var e=r(22),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},function(t,n,r){var e=r(3),o=/#|\.prototype\./,u=function(t,n){var r=c[i(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},a=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},function(t,n,r){var e=r(15);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(9),o=r(2)("toStringTag"),u="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:u?e(n):"Object"==(i=e(n))&&"function"==typeof n.callee?"Arguments":i}},,function(t,n,r){"use strict";var e=r(4),o=r(26),u=r(13),i=r(40),c=[].join,a=o!=Object,f=i("join",",");e({target:"Array",proto:!0,forced:a||f},{join:function(t){return c.call(u(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(6);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(8),o=r(73),u=r(25),i=r(11);t.exports=function(t,n){for(var r=o(n),c=i.f,a=u.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||c(t,s,a(n,s))}}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(13),o=r(14),u=r(50),i=function(t){return function(n,r,i){var c,a=e(n),f=o(a.length),s=u(i,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(15);t.exports=e("document","documentElement")},,function(t,n,r){"use strict";var e=r(4),o=r(3),u=r(29),i=r(5),c=r(23),a=r(14),f=r(44),s=r(43),l=r(34),p=r(2),v=r(35),d=p("isConcatSpreadable"),g=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),h=l("concat"),y=function(t){if(!i(t))return!1;var n=t[d];return void 0!==n?!!n:u(t)};e({target:"Array",proto:!0,forced:!g||!h},{concat:function(t){var n,r,e,o,u,i=c(this),l=s(i,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(y(u=-1===n?i:arguments[n])){if(p+(o=a(u.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in u&&f(l,p,u[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,u)}return l.length=p,l}})},function(t,n,r){"use strict";var e=r(4),o=r(47);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){var e=r(0),o=r(68),u=r(47),i=r(7);for(var c in o){var a=e[c],f=a&&a.prototype;if(f&&f.forEach!==u)try{i(f,"forEach",u)}catch(t){f.forEach=u}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){var e=r(22),o=r(16),u=function(t){return function(n,r){var u,i,c=String(o(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(u=c.charCodeAt(a))<55296||u>56319||a+1===f||(i=c.charCodeAt(a+1))<56320||i>57343?t?c.charAt(a):u:t?c.slice(a,a+2):i-56320+(u-55296<<10)+65536}};t.exports={codeAt:u(!1),charAt:u(!0)}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(27),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,n,r){var e=r(0),o=r(42),u=e.WeakMap;t.exports="function"==typeof u&&/native code/.test(o.call(u))},function(t,n,r){var e=r(15),o=r(48),u=r(61),i=r(6);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=u.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(6),o=r(95),u=r(39),i=r(28),c=r(63),a=r(36),f=r(37)("IE_PROTO"),s=function(){},l=function(){var t,n=a("iframe"),r=u.length;for(n.style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[u[r]];return l()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[f]=t):r=l(),void 0===n?r:o(r,n)},i[f]=!0},,,function(t,n,r){"use strict";var e=r(53),o={};o[r(2)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+e(this)+"]"}:o.toString},,,,,,,function(t,n,r){},function(t,n,r){"use strict";var e=r(4),o=r(19);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,r){"use strict";var e=r(7),o=r(12),u=r(3),i=r(2),c=r(19),a=i("species"),f=!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=!u((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,l){var p=i(t),v=!u((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),d=v&&!u((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[a]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return n=!0,null},r[p](""),!n}));if(!v||!d||"replace"===t&&!f||"split"===t&&!s){var g=/./[p],h=r(p,""[t],(function(t,n,r,e,o){return n.exec===c?v&&!o?{done:!0,value:g.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),y=h[0],x=h[1];o(String.prototype,t,y),o(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)}),l&&e(RegExp.prototype[p],"sham",!0)}}},function(t,n,r){var e=r(5),o=r(9),u=r(2)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[u])?!!n:"RegExp"==o(t))}},function(t,n,r){"use strict";var e=r(69).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(9),o=r(19);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var u=r.call(t,n);if("object"!=typeof u)throw TypeError("RegExp exec method returned something other than an Object or null");return u}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){var e=r(49),o=r(39);t.exports=Object.keys||function(t){return e(t,o)}},,,,,function(t,n,r){var e=r(10),o=r(11),u=r(6),i=r(90);t.exports=e?Object.defineProperties:function(t,n){u(t);for(var r,e=i(n),c=e.length,a=0;c>a;)o.f(t,r=e[a++],n[r]);return t}},,,,,,,,,,,,,,function(t,n,r){var e=r(2),o=r(74),u=r(7),i=e("unscopables"),c=Array.prototype;null==c[i]&&u(c,i,o(null)),t.exports=function(t){c[i][t]=!0}},function(t,n,r){"use strict";var e=r(12),o=r(6),u=r(3),i=r(56),c=RegExp.prototype,a=c.toString,f=u((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in c)?i.call(t):r)}),{unsafe:!0})},,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);r(65),r(134),r(66),r(135),r(45),r(85),r(110),r(136),r(139),r(67),r(140),r(84);var e,o,u,i,c,a,f=r(1);e=[5,2,12,55,66,33,100],f.y.forEach((function(t,n){t.setAttribute("style","width: ".concat(e[n],"%")),t.textContent=e[n]})),f.a.textContent="Вы спросили «".concat(localStorage.query,"»"),o=JSON.parse(localStorage.news),u=localStorage.query.toLowerCase(),i=o.filter((function(t){return t.title.toLowerCase().includes(u)})),c=o.length.toString(),f.x.textContent=c.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 "),f.v.textContent=i.length,a=(a=new Date).toLocaleString("ru",{month:"long"}),f.i.textContent="дата (".concat(a,")"),f.d.forEach((function(t,n){var r;t.textContent=(r=new Date(f.o.getFullYear(),f.o.getMonth(),f.o.getDate()+(n-7)),"".concat(r.toLocaleString("ru",{day:"numeric"}),", ").concat(r.toLocaleString("ru",{weekday:"short"})))}))},function(t,n,r){"use strict";var e=r(4),o=r(32).filter;e({target:"Array",proto:!0,forced:!r(34)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(4),o=r(60).includes,u=r(109);e({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},function(t,n,r){"use strict";var e=r(4),o=r(137),u=r(16);e({target:"String",proto:!0,forced:!r(138)("includes")},{includes:function(t){return!!~String(u(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(87);t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,r){var e=r(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,r){"use strict";var e=r(86),o=r(6),u=r(23),i=r(14),c=r(22),a=r(16),f=r(88),s=r(89),l=Math.max,p=Math.min,v=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;e("replace",2,(function(t,n,r){return[function(r,e){var o=a(this),u=null==r?void 0:r[t];return void 0!==u?u.call(r,o,e):n.call(String(o),r,e)},function(t,u){var a=r(n,t,this,u);if(a.done)return a.value;var v=o(t),d=String(this),g="function"==typeof u;g||(u=String(u));var h=v.global;if(h){var y=v.unicode;v.lastIndex=0}for(var x=[];;){var m=s(v,d);if(null===m)break;if(x.push(m),!h)break;""===String(m[0])&&(v.lastIndex=f(d,i(v.lastIndex),y))}for(var S,b="",w=0,j=0;j<x.length;j++){m=x[j];for(var O=String(m[0]),E=l(p(c(m.index),d.length),0),L=[],T=1;T<m.length;T++)L.push(void 0===(S=m[T])?S:String(S));var A=m.groups;if(g){var M=[O].concat(L,E,d);void 0!==A&&M.push(A);var P=String(u.apply(void 0,M))}else P=e(O,d,E,L,A,u);E>=w&&(b+=d.slice(w,E)+P,w=E+O.length)}return b+d.slice(w)}];function e(t,r,e,o,i,c){var a=e+t.length,f=o.length,s=g;return void 0!==i&&(i=u(i),s=d),n.call(c,s,(function(n,u){var c;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(a);case"<":c=i[u.slice(1,-1)];break;default:var s=+u;if(0===s)return n;if(s>f){var l=v(s/10);return 0===l?n:l<=f?void 0===o[l-1]?u.charAt(1):o[l-1]+u.charAt(1):n}c=o[s-1]}return void 0===c?"":c}))}}))},function(t,n,r){}]);