"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[6679],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey})},"./src/components/common/Toast/docs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Installation:()=>Installation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/markdown-to-jsx/dist/index.modern.js"),_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Typography/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"common/Toast"};var Installation={render:function render(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_1__.o,{variant:"bodyL",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__.Ay,{children:"\n### Установка\n\nИспользуется библиотека [react-toastify](https://github.com/fkhadra/react-toastify).\nДля корректной работы необходимо подключить стили, и добавить компонент ToastContainer в дерево компонентов.\n\n```ts\nimport { ToastContainer, toast } from '@invoicebox/ui';\nimport 'react-toastify/dist/ReactToastify.css';\n\nconst App = () => {\n    return (\n        <div>\n            <ToastContainer />\n            <button\n                onClick={() => {\n                    toast.success('Success');\n                }}\n            >\n                Success\n            </button>\n            <button\n                onClick={() => {\n                    toast.error('Success');\n                }}\n            >\n                Error\n            </button>\n        </div>\n    );\n}\n```\n"})})}};Installation.parameters={...Installation.parameters,docs:{...Installation.parameters?.docs,source:{originalSource:"{\n  render: () => <Typography variant=\"bodyL\">\n            <Markdown>\n                {`\n### Установка\n\nИспользуется библиотека [react-toastify](https://github.com/fkhadra/react-toastify).\nДля корректной работы необходимо подключить стили, и добавить компонент ToastContainer в дерево компонентов.\n\n\\`\\`\\`ts\nimport { ToastContainer, toast } from '@invoicebox/ui';\nimport 'react-toastify/dist/ReactToastify.css';\n\nconst App = () => {\n    return (\n        <div>\n            <ToastContainer />\n            <button\n                onClick={() => {\n                    toast.success('Success');\n                }}\n            >\n                Success\n            </button>\n            <button\n                onClick={() => {\n                    toast.error('Success');\n                }}\n            >\n                Error\n            </button>\n        </div>\n    );\n}\n\\`\\`\\`\n`}\n            </Markdown>\n        </Typography>\n}",...Installation.parameters?.docs?.source}}};let __namedExportsOrder=["Installation"]},"./node_modules/markdown-to-jsx/dist/index.modern.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var i,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function t(){return(t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let n=["children","options"],r={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};!function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(i||(i={}));let l=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),a={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},o=["style","script"],c=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,d=/\n{2,}$/,u=/^(\s*>[\s\S]*?)(?=\n{2,})/,p=/^ *> ?/gm,f=/^ {2,}\n/,h=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,m=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,g=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,x=/\r\n?/g,b=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,v=/^\[\^([^\]]+)]/,S=/\f/g,E=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,$=/^\s*?\[(x|\s)\]/,w=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,C=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,z=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,L=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,A=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,T=/^<!--[\s\S]*?(?:-->)/,O=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,B=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,M=/^\{.*\}$/,R=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,D=/-([a-z])?/gi,j=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,N=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,H=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,F=/^\[([^\]]*)\] ?\[([^\]]*)\]/,P=/(\[|\])/g,_=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,W=/\t/g,G=/(^ *\||\| *$)/g,Z=/^ *:-+: *$/,q=/^ *:-+ *$/,Q=/^ *-+: *$/,V="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",X=RegExp(`^([*_])\\1${V}\\1\\1(?!\\1)`),J=RegExp(`^([*_])${V}\\1(?!\\1|\\w)`),K=RegExp(`^==${V}==`),Y=RegExp(`^~~${V}~~`),ee=/^\\([^0-9A-Za-z\s])/,te=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ne=/^\n+/,re=/^([ \t]*)/,ie=/\\([^\\])/g,le=/ *\n+$/,ae=/(?:^|\n)( *)$/,oe="(?:\\d+\\.)",ce="(?:[*+-])";function se(e){return"( *)("+(1===e?oe:ce)+") +"}let de=se(1),ue=se(2);function pe(e){return RegExp("^"+(1===e?de:ue))}let fe=pe(1),he=pe(2);function me(e){return RegExp("^"+(1===e?de:ue)+"[^\\n]*(?:\\n(?!\\1"+(1===e?oe:ce)+" )[^\\n]*)*(\\n|$)","gm")}let ge=me(1),ye=me(2);function ke(e){let t=1===e?oe:ce;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}let xe=ke(1),be=ke(2);function ve(e,t){let n=1===t,i=n?xe:be,l=n?ge:ye,a=n?fe:he;return{match(e,t,n){let r=ae.exec(n);return r&&(t.list||!t.inline&&!t.simple)?i.exec(e=r[1]+e):null},order:1,parse(e,t,r){let i=n?+e[2]:void 0,o=e[0].replace(d,"\n").match(l),c=!1;return{items:o.map(function(e,n){let h;let l=RegExp("^ {1,"+a.exec(e)[0].length+"}","gm"),s=e.replace(l,"").replace(a,""),d=n===o.length-1,u=-1!==s.indexOf("\n\n")||d&&c;c=u;let p=r.inline,f=r.list;r.list=!0,u?(r.inline=!1,h=s.replace(le,"\n\n")):(r.inline=!0,h=s.replace(le,""));let m=t(h,r);return r.inline=p,r.list=f,m}),ordered:n,start:i}},render:(t,n,i)=>e(t.ordered?"ol":"ul",{key:i.key,start:t.type===r.orderedList?t.start:void 0},t.items.map(function(t,r){return e("li",{key:r},n(t,i))}))}}let Se=RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Ee=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,$e=[u,m,g,w,z,C,T,j,ge,xe,ye,be],we=[...$e,/^[^\n]+(?:  \n|\n{2,})/,L,B];function Ce(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ze(e){return Q.test(e)?"right":Z.test(e)?"center":q.test(e)?"left":null}function Le(e,t,n,i){let l=n.inTable;n.inTable=!0;let a=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((e,l)=>("|"===l.trim()?e.push(i?{type:r.tableSeparator}:{type:r.text,text:l}):""!==l&&e.push.apply(e,t(l,n)),e),[]);n.inTable=l;let o=[[]];return a.forEach(function(e,t){e.type===r.tableSeparator?0!==t&&t!==a.length-1&&o.push([]):(e.type!==r.text||null!=a[t+1]&&a[t+1].type!==r.tableSeparator||(e.text=e.text.trimEnd()),o[o.length-1].push(e))}),o}function Ae(e,t,n){n.inline=!0;let i=e[2]?e[2].replace(G,"").split("|").map(ze):[],l=e[3]?e[3].trim().split("\n").map(function(e){return Le(e,t,n,!0)}):[],a=Le(e[1],t,n,!!l.length);return n.inline=!1,l.length?{align:i,cells:l,header:a,type:r.table}:{children:a,type:r.paragraph}}function Te(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Oe(e){return function(t,n){return n.inline?e.exec(t):null}}function Be(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Me(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Re(e){return function(t){return e.exec(t)}}function Ie(e,t,n){if(t.inline||t.simple||n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every(e=>!$e.some(t=>t.test(e))&&(r+=e+"\n",e.trim()));let i=r.trimEnd();return""==i?null:[r,i]}function Ue(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function De(e){return e.replace(ie,"$1")}function je(e,t,n){let r=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;let l=e(t,n);return n.inline=r,n.simple=i,l}function Ne(e,t,n){let r=n.inline||!1,i=n.simple||!1;n.inline=!1,n.simple=!0;let l=e(t,n);return n.inline=r,n.simple=i,l}function He(e,t,n){let r=n.inline||!1;n.inline=!1;let i=e(t,n);return n.inline=r,i}let Fe=(e,t,n)=>({children:je(t,e[1],n)});function Pe(){return{}}function _e(){return null}function We(...e){return e.filter(Boolean).join(" ")}function Ge(e,t,n){let r=e,i=t.split(".");for(;i.length&&void 0!==(r=r[i[0]]);)i.shift();return r||n}function Ze(n="",i={}){var ae,t1;function d(e,n,...r){let l=Ge(i.overrides,`${e}.props`,{});return i.createElement(function(e,t){let n=Ge(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Ge(t,`${e}.component`,e):e}(e,i.overrides),t({},n,l,{className:We(null==n?void 0:n.className,l.className)||void 0}),...r)}function G(t){let a;t=t.replace(E,"");let n=!1;i.forceInline?n=!0:i.forceBlock||(n=!1===_.test(t));let r=le(ie(n?t:`${t.trimEnd().replace(ne,"")}

`,{inline:n}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===i.wrapper)return r;let l=i.wrapper||(n?"span":"div");if(r.length>1||i.forceWrapper)a=r;else{if(1===r.length)return"string"==typeof(a=r[0])?d("span",{key:"outer"},a):a;a=null}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(l,{key:"outer"},a)}function Z(t,n){let r=n.match(c);return r?r.reduce(function(n,r,a){let o=r.indexOf("=");if(-1!==o){var e,n1,r1;let c=(-1!==(e=r.slice(0,o)).indexOf("-")&&null===e.match(O)&&(e=e.replace(D,function(e,t){return t.toUpperCase()})),e).trim(),s=function(e){let t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(r.slice(o+1).trim()),d=l[c]||c,u=n[d]=(n1=s,r1=i.sanitizer,"style"===c?n1.split(/;\s?/).reduce(function(e,t){let n=t.slice(0,t.indexOf(":"));return e[n.trim().replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=t.slice(n.length+1).trim(),e},{}):"href"===c||"src"===c?r1(n1,t,c):(n1.match(M)&&(n1=n1.slice(1,n1.length-1)),"true"===n1||"false"!==n1&&n1));"string"==typeof u&&(L.test(u)||B.test(u))&&(n[d]=react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(G(u.trim()),{key:a}))}else"style"!==r&&(n[l[r]||r]=!0);return n},{}):null}i.overrides=i.overrides||{},i.sanitizer=i.sanitizer||Ue,i.slugify=i.slugify||Ce,i.namedCodesToUnicode=i.namedCodesToUnicode?t({},a,i.namedCodesToUnicode):a,i.createElement=i.createElement||react__WEBPACK_IMPORTED_MODULE_0__.createElement;let q=[],Q={},V={[r.blockQuote]:{match:Me(u),order:1,parse:(e,t,n)=>({children:t(e[0].replace(p,""),n)}),render:(e,t,n)=>d("blockquote",{key:n.key},t(e.children,n))},[r.breakLine]:{match:Re(f),order:1,parse:Pe,render:(e,t,n)=>d("br",{key:n.key})},[r.breakThematic]:{match:Me(h),order:1,parse:Pe,render:(e,t,n)=>d("hr",{key:n.key})},[r.codeBlock]:{match:Me(g),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,r)=>d("pre",{key:r.key},d("code",t({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[r.codeFenced]:{match:Me(m),order:0,parse:e=>({attrs:Z("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:r.codeBlock})},[r.codeInline]:{match:Be(y),order:3,parse:e=>({text:e[2]}),render:(e,t,n)=>d("code",{key:n.key},e.text)},[r.footnote]:{match:Me(b),order:0,parse:e=>(q.push({footnote:e[2],identifier:e[1]}),{}),render:_e},[r.footnoteReference]:{match:Oe(v),order:1,parse:e=>({target:`#${i.slugify(e[1],Ce)}`,text:e[1]}),render:(e,t,n)=>d("a",{key:n.key,href:i.sanitizer(e.target,"a","href")},d("sup",{key:n.key},e.text))},[r.gfmTask]:{match:Oe($),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,n)=>d("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})},[r.heading]:{match:Me(i.enforceAtxHeadings?C:w),order:1,parse:(e,t,n)=>({children:je(t,e[2],n),id:i.slugify(e[2],Ce),level:e[1].length}),render:(e,t,n)=>d(`h${e.level}`,{id:e.id,key:n.key},t(e.children,n))},[r.headingSetext]:{match:Me(z),order:0,parse:(e,t,n)=>({children:je(t,e[1],n),level:"="===e[2]?1:2,type:r.heading})},[r.htmlBlock]:{match:Re(L),order:1,parse(e,t,n){let[,r]=e[3].match(re),i=RegExp(`^${r}`,"gm"),l=e[3].replace(i,""),a=we.some(e=>e.test(l))?He:je,s=e[1].toLowerCase(),d=-1!==o.indexOf(s),u=(d?s:e[1]).trim(),p={attrs:Z(u,e[2]),noInnerParse:d,tag:u};return n.inAnchor=n.inAnchor||"a"===s,d?p.text=e[3]:p.children=a(t,l,n),n.inAnchor=!1,p},render:(e,n,r)=>d(e.tag,t({key:r.key},e.attrs),e.text||n(e.children,r))},[r.htmlSelfClosing]:{match:Re(B),order:1,parse(e){let t=e[1].trim();return{attrs:Z(t,e[2]||""),tag:t}},render:(e,n,r)=>d(e.tag,t({},e.attrs,{key:r.key}))},[r.htmlComment]:{match:Re(T),order:1,parse:()=>({}),render:_e},[r.image]:{match:Be(Ee),order:1,parse:e=>({alt:e[1],target:De(e[2]),title:e[3]}),render:(e,t,n)=>d("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:i.sanitizer(e.target,"img","src")})},[r.link]:{match:Oe(Se),order:3,parse:(e,t,n)=>({children:Ne(t,e[1],n),target:De(e[2]),title:e[3]}),render:(e,t,n)=>d("a",{key:n.key,href:i.sanitizer(e.target,"a","href"),title:e.title},t(e.children,n))},[r.linkAngleBraceStyleDetector]:{match:Oe(U),order:0,parse:e=>({children:[{text:e[1],type:r.text}],target:e[1],type:r.link})},[r.linkBareUrlDetector]:{match:(e,t)=>t.inAnchor?null:Oe(R)(e,t),order:0,parse:e=>({children:[{text:e[1],type:r.text}],target:e[1],title:void 0,type:r.link})},[r.linkMailtoDetector]:{match:Oe(I),order:0,parse(e){let t=e[1],n=e[1];return s.test(n)||(n="mailto:"+n),{children:[{text:t.replace("mailto:",""),type:r.text}],target:n,type:r.link}}},[r.orderedList]:ve(d,1),[r.unorderedList]:ve(d,2),[r.newlineCoalescer]:{match:Me(k),order:3,parse:Pe,render:()=>"\n"},[r.paragraph]:{match:Ie,order:3,parse:Fe,render:(e,t,n)=>d("p",{key:n.key},t(e.children,n))},[r.ref]:{match:Oe(N),order:0,parse:e=>(Q[e[1]]={target:e[2],title:e[4]},{}),render:_e},[r.refImage]:{match:Be(H),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,t,n)=>Q[e.ref]?d("img",{key:n.key,alt:e.alt,src:i.sanitizer(Q[e.ref].target,"img","src"),title:Q[e.ref].title}):null},[r.refLink]:{match:Oe(F),order:0,parse:(e,t,n)=>({children:t(e[1],n),fallbackChildren:t(e[0].replace(P,"\\$1"),n),ref:e[2]}),render:(e,t,n)=>Q[e.ref]?d("a",{key:n.key,href:i.sanitizer(Q[e.ref].target,"a","href"),title:Q[e.ref].title},t(e.children,n)):d("span",{key:n.key},t(e.fallbackChildren,n))},[r.table]:{match:Me(j),order:1,parse:Ae,render:(e,t,n)=>d("table",{key:n.key},d("thead",null,d("tr",null,e.header.map(function(e1,i){return d("th",{key:i,style:Te(e,i)},t(e1,n))}))),d("tbody",null,e.cells.map(function(e1,i){return d("tr",{key:i},e1.map(function(e1,i){return d("td",{key:i,style:Te(e,i)},t(e1,n))}))})))},[r.text]:{match:Re(te),order:4,parse:e=>({text:e[0].replace(A,(e,t)=>i.namedCodesToUnicode[t]?i.namedCodesToUnicode[t]:e)}),render:e=>e.text},[r.textBolded]:{match:Be(X),order:2,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,n)=>d("strong",{key:n.key},t(e.children,n))},[r.textEmphasized]:{match:Be(J),order:3,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,n)=>d("em",{key:n.key},t(e.children,n))},[r.textEscaped]:{match:Be(ee),order:1,parse:e=>({text:e[1],type:r.text})},[r.textMarked]:{match:Be(K),order:3,parse:Fe,render:(e,t,n)=>d("mark",{key:n.key},t(e.children,n))},[r.textStrikethroughed]:{match:Be(Y),order:3,parse:Fe,render:(e,t,n)=>d("del",{key:n.key},t(e.children,n))}};!0===i.disableParsingRawHTML&&(delete V[r.htmlBlock],delete V[r.htmlSelfClosing]);let ie=function(e){let t=Object.keys(e);function n(r,i){let l=[],a="";for(;r;){let o=0;for(;o<t.length;){let c=t[o],s=e[c],d=s.match(r,i,a);if(d){let e=d[0];r=r.substring(e.length);let t=s.parse(d,n,i);null==t.type&&(t.type=c),l.push(t),a=e;break}o++}}return l}return t.sort(function(t,n){let r=e[t].order,i=e[n].order;return r!==i?r-i:t<n?-1:1}),function(e,t){return n(e.replace(x,"\n").replace(S,"").replace(W,"    "),t)}}(V),le=(t1=i.renderRule,ae=function(n,r,i){let l=V[n.type].render;return t1?t1(()=>l(n,r,i),n,r,i):l(n,r,i)},function e(t,n={}){if(Array.isArray(t)){let r=n.key,i=[],l=!1;for(let r=0;r<t.length;r++){n.key=r;let a=e(t[r],n),o="string"==typeof a;o&&l?i[i.length-1]+=a:null!==a&&i.push(a),l=o}return n.key=r,i}return ae(t,e,n)}),oe=G(n);return q.length?d("div",null,oe,d("footer",{key:"footer"},q.map(function(e){return d("div",{id:i.slugify(e.identifier,Ce),key:e.identifier},e.identifier,le(ie(e.footnote,{inline:!0})))}))):oe}let __WEBPACK_DEFAULT_EXPORT__=t=>{let{children:r="",options:i}=t,l=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(i[n]=e[n]);return i}(t,n);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(Ze(r,i),l)}},"./src/breakpoints/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Typography/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    font-family: Roboto, sans-serif;\n\n    ","\n"])),function(_ref){var $variant=_ref.$variant;return typography.I[$variant]}),useCss=__webpack_require__("./src/hooks/useCss/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","element"],Typography=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var variant=_ref.variant,_ref$element=_ref.element,rest=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,useCss.R)({id:"INVOICEBOX_UI_TYPOGRAPHY",css:"@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.A)({ref:ref,as:void 0===_ref$element?"div":_ref$element,$variant:variant},rest))});Typography.displayName="Typography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"captionSRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},element:{defaultValue:{value:"div"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"div"'},{value:'"p"'},{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"input"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Typography/index.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/common/Typography/index.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Typography/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>typography});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/breakpoints/index.ts"),typography={headline1:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject||(_templateObject=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 34px;\n        font-weight: 400;\n        line-height: 42px;\n\n        @media "," {\n            font-size: 30px;\n            font-weight: 400;\n            line-height: 48px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline2:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject2||(_templateObject2=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 24px;\n        font-weight: 400;\n        line-height: 32px;\n\n        @media "," {\n            font-size: 20px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline3:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject3||(_templateObject3=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px;\n\n        @media "," {\n            font-size: 18px;\n            font-weight: 400;\n            line-height: 22px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline4:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject4||(_templateObject4=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 18px;\n        font-weight: 400;\n        line-height: 22px;\n\n        @media "," {\n            font-size: 16px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline5:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject5||(_templateObject5=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 20px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline6:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject6||(_templateObject6=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 20px;\n    "]))),headerText:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject7||(_templateObject7=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 15px;\n        font-weight: 500;\n        line-height: 20px;\n\n        @media "," {\n            font-size: 18px;\n            font-weight: 500;\n            line-height: 26px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),buttonL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject8||(_templateObject8=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 24px;\n    "]))),bodyL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject9||(_templateObject9=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),bodyLUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject10||(_templateObject10=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n        text-decoration: underline;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 20px;\n            text-decoration: underline;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),buttonM:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject11||(_templateObject11=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n    "]))),bodyMRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject12||(_templateObject12=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n    "]))),bodyMBold:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject13||(_templateObject13=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n    "]))),bodyMUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject14||(_templateObject14=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n        text-decoration: underline;\n    "]))),captionRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject15||(_templateObject15=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 18px;\n    "]))),captionSRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject16||(_templateObject16=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 10px;\n        font-weight: 400;\n        line-height: 16px;\n    "]))),captionUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject17||(_templateObject17=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 18px;\n        text-decoration: underline;\n    "]))),smallMedium:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject18||(_templateObject18=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 12px;\n        font-weight: 500;\n        line-height: 16px;\n    "]))),labelsAndHints:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject19||(_templateObject19=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 16px;\n    "])))}},"./src/hooks/useCss/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useCss});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),stylesInDOM=new Map,useCss=function useCss(_ref){var id=_ref.id,css=_ref.css,append=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){if(!stylesInDOM.has(id)){var style=document.createElement("style");style.type="text/css",style.innerHTML=css,document.head.appendChild(style),stylesInDOM.set(id,style)}},[id,css]),clear=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){var style=stylesInDOM.get(id);style&&(document.head.removeChild(style),stylesInDOM.delete(id))},[id]);append(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return append(),clear},[append,clear])};try{useCss.displayName="useCss",useCss.__docgenInfo={description:"",displayName:"useCss",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useCss/index.tsx#useCss"]={docgenInfo:useCss.__docgenInfo,name:"useCss",path:"src/hooks/useCss/index.tsx#useCss"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-common-Toast-docs-stories.bbc19ef9.iframe.bundle.js.map