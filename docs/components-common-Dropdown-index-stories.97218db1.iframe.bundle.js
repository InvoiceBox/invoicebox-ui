"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[1663],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_arrayLikeToArray});function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_objectSpread2});var toPropertyKey=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,toPropertyKey.c)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}__webpack_require__.d(__webpack_exports__,{c:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableRest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||(0,unsupportedIterableToArray.c)(arr,i)||_nonIterableRest()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==_typeof(i)?i:String(i)}__webpack_require__.d(__webpack_exports__,{c:()=>toPropertyKey})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.c)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.c)(o,minLen)}}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qZ:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!("object"==typeof e&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&"function"==typeof e.persist),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.c)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>"playing"===render.phase||"rendering"===render.phase);if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.Id({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),actionDisplayToEmit={id,count:0,data:{name,args:args.length>1?serializedArgs:serializedArgs[0]},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/common/Dropdown/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoPosition:()=>AutoPosition,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Dropdown/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"common/Dropdown",component:___WEBPACK_IMPORTED_MODULE_2__.c,tags:["autodocs"]};var args={isOpen:!1,positionVertical:5,positionLeft:"0px",positionRight:"auto",minWidth:"auto",width:"auto",zIndex:5,onCloseTransitionEnd:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.qZ)("closeTransitionEnd"),children:Array(100).fill("children ").join("")},Default={args:(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.c)({},args),{},{isAutoPosition:!1}),render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{position:"relative"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"parent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.c,(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.c)({},props))]})}},AutoPosition={args:(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.c)({},args),{},{isAutoPosition:!0}),render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:["Дропдаун ниже ↓",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{position:"relative",marginTop:"800px",marginBottom:"800px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"parent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.c,(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.c)({},props))]})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...args,\n    isAutoPosition: false\n  },\n  render: props => <div style={{\n    position: 'relative'\n  }}>\n            <div>parent</div>\n            <Dropdown {...props} />\n        </div>\n}",...Default.parameters?.docs?.source}}},AutoPosition.parameters={...AutoPosition.parameters,docs:{...AutoPosition.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...args,\n    isAutoPosition: true\n  },\n  render: props => <div>\n            Дропдаун ниже ↓\n            <div style={{\n      position: 'relative',\n      marginTop: '800px',\n      marginBottom: '800px'\n    }}>\n                <div>parent</div>\n                <Dropdown {...props} />\n            </div>\n        </div>\n}",...AutoPosition.parameters?.docs?.source}}};let __namedExportsOrder=["Default","AutoPosition"]},"./node_modules/hex-to-rgba/build/index.js":module=>{var parseHex=function(nakedHex){var isShort=3===nakedHex.length||4===nakedHex.length;return{r:isShort?"".concat(nakedHex.slice(0,1)).concat(nakedHex.slice(0,1)):nakedHex.slice(0,2),g:isShort?"".concat(nakedHex.slice(1,2)).concat(nakedHex.slice(1,2)):nakedHex.slice(2,4),b:isShort?"".concat(nakedHex.slice(2,3)).concat(nakedHex.slice(2,3)):nakedHex.slice(4,6),a:(isShort?"".concat(nakedHex.slice(3,4)).concat(nakedHex.slice(3,4)):nakedHex.slice(6,8))||"ff"}},hexToDecimal=function(hex){return parseInt(hex,16)},hexesToDecimals=function(_ref){var r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a;return{r:hexToDecimal(r),g:hexToDecimal(g),b:hexToDecimal(b),a:+(hexToDecimal(a)/255).toFixed(2)}},formatRgb=function(decimalObject,parameterA){var r=decimalObject.r,g=decimalObject.g,b=decimalObject.b,parsedA=decimalObject.a,a=!isNaN(parseFloat(parameterA))&&isFinite(parameterA)?parameterA:parsedA;return"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")")};module.exports=function(hex,a){return formatRgb(hexesToDecimals(parseHex("#"===hex.charAt(0)?hex.slice(1):hex)),a)}},"./src/components/common/Arrow/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>generateArrowPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateArrowPalette=function(abstractPalette){return{open:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5),close:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5)}}},"./src/components/common/Calendar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>generateCalendarPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCalendarPalette=function(abstractPalette){return{arrow:abstractPalette.primary,weekday:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.4),tile:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.7),tileActive:abstractPalette.primary,tileBgActive:abstractPalette.secondary}}},"./src/components/common/Divider/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generateDividerPalette});var generateDividerPalette=function(abstractPalette){return{divider:abstractPalette.neutralUsual}}},"./src/components/common/Dropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Dropdown});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles_hidden=(0,styled_components_browser_esm.gV)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    visibility: hidden;\n    opacity: 0;\n    transition:\n        visibility 0ms 200ms,\n        opacity 200ms 0ms ease;\n"]))),visible=(0,styled_components_browser_esm.gV)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n    visibility: visible;\n    opacity: 1;\n    transition:\n        visibility 0ms 0ms,\n        opacity 200ms 0ms ease;\n"]))),Wrapper=styled_components_browser_esm.cp.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.c)(["\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 0px 10px 17px ",";\n    background: ",";\n\n    min-width: ",";\n    width: ",";\n\n    position: absolute;\n\n    left: ",";\n    right: ",";\n\n    z-index: ",";\n\n    ",";\n\n    ",";\n\n    ",";\n"])),function(_ref){return _ref.$palette.shadow},function(_ref2){return _ref2.$palette.bg},function(_ref3){return _ref3.$minWidth},function(_ref4){return _ref4.$width},function(_ref5){return _ref5.$positionLeft},function(_ref6){return _ref6.$positionRight},function(_ref7){var $zIndex=_ref7.$zIndex;return null!=$zIndex?$zIndex:5},function(_ref8){return _ref8.$isVisible?visible:styles_hidden},function(_ref9){var $isAbove=_ref9.$isAbove,$positionVertical=_ref9.$positionVertical;return $isAbove?(0,styled_components_browser_esm.gV)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.c)(["\n                  bottom: calc(100% + ","px);\n              "])),$positionVertical):(0,styled_components_browser_esm.gV)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.c)(["\n                  top: calc(100% + ","px);\n              "])),$positionVertical)},function(_ref10){var $translateY=_ref10.$translateY;return(0,styled_components_browser_esm.gV)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.c)(["\n        transform: translateY(",");\n    "])),$translateY)}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Dropdown=function(_ref){var children=_ref.children,isOpen=_ref.isOpen,_ref$isAutoPosition=_ref.isAutoPosition,_ref$positionVertical=_ref.positionVertical,positionVertical=void 0===_ref$positionVertical?5:_ref$positionVertical,_ref$positionLeft=_ref.positionLeft,_ref$positionRight=_ref.positionRight,_ref$minWidth=_ref.minWidth,_ref$width=_ref.width,zIndex=_ref.zIndex,onCloseTransitionEnd=_ref.onCloseTransitionEnd,palette=(0,src_palette.s$)("dropdown"),position=(0,react.useRef)({isAbove:!0,translateY:"0px"}),_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.c)(_useState,2),elRef=_useState2[0],setElRef=_useState2[1],handleCloseTransitionEnd=(0,react.useCallback)(function(event){"opacity"===event.propertyName&&!isOpen&&onCloseTransitionEnd&&onCloseTransitionEnd()},[isOpen,onCloseTransitionEnd]),getPosition=(0,react.useCallback)(function(_ref2){var dropdownHeight=_ref2.dropdownHeight,belowHeight=_ref2.belowHeight,aboveHeight=_ref2.aboveHeight,dropdownIndent=_ref2.dropdownIndent;return belowHeight>=dropdownHeight+dropdownIndent?{isAbove:!1,translateY:"0px"}:aboveHeight>=dropdownHeight+dropdownIndent?{isAbove:!0,translateY:"0px"}:belowHeight>=aboveHeight?{isAbove:!1,translateY:"-".concat(dropdownHeight+dropdownIndent-belowHeight,"px")}:{isAbove:!0,translateY:"".concat(dropdownHeight+dropdownIndent-aboveHeight,"px")}},[]),openFlagCache=(0,react.useRef)(null);if(elRef){var isTriggeredByFlag=openFlagCache.current!==isOpen;if(openFlagCache.current=isOpen,isTriggeredByFlag&&isOpen){var viewportHeight=window.innerHeight,_parent$getBoundingCl=elRef.parentElement.getBoundingClientRect(),bottom=_parent$getBoundingCl.bottom,aboveHeight=_parent$getBoundingCl.top,dropdownHeight=elRef.scrollHeight;position.current=void 0!==_ref$isAutoPosition&&_ref$isAutoPosition?getPosition({dropdownHeight:dropdownHeight,aboveHeight:aboveHeight,belowHeight:viewportHeight-bottom,dropdownIndent:positionVertical}):{isAbove:!1,translateY:"0px"}}}return(0,jsx_runtime.jsx)(Wrapper,{ref:setElRef,$isVisible:isOpen,$isAbove:position.current.isAbove,$translateY:position.current.translateY,$positionVertical:positionVertical,$positionLeft:void 0===_ref$positionLeft?"0px":_ref$positionLeft,$positionRight:void 0===_ref$positionRight?"auto":_ref$positionRight,$minWidth:void 0===_ref$minWidth?"auto":_ref$minWidth,$width:void 0===_ref$width?"auto":_ref$width,$zIndex:zIndex,onTransitionEnd:handleCloseTransitionEnd,$palette:palette,children:children})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isAutoPosition:{defaultValue:{value:"false"},description:"",name:"isAutoPosition",required:!1,type:{name:"boolean"}},positionVertical:{defaultValue:{value:"5"},description:"",name:"positionVertical",required:!1,type:{name:"number"}},positionLeft:{defaultValue:{value:"0px"},description:"",name:"positionLeft",required:!1,type:{name:"string"}},positionRight:{defaultValue:{value:"auto"},description:"",name:"positionRight",required:!1,type:{name:"string"}},minWidth:{defaultValue:{value:"auto"},description:"",name:"minWidth",required:!1,type:{name:"string"}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},onCloseTransitionEnd:{defaultValue:null,description:"",name:"onCloseTransitionEnd",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/common/Dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Dropdown/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateDropdownPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateDropdownPalette=function(abstractPalette){return{bg:abstractPalette.base,shadow:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.09)}}},"./src/components/common/InvoiceboxSpinner/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>generateInvoiceboxSpinnerPalette});var generateInvoiceboxSpinnerPalette=function(abstractPalette){return{leftEye:abstractPalette.primary,rightEye:abstractPalette.secondary}}},"./src/components/common/Scrollbar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateScrollbarPalette});var generateScrollbarPalette=function(abstractPalette){return{thumb:abstractPalette.neutralFoggy}}},"./src/components/common/SecondaryButton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateSecondaryButtonPalette});var generateSecondaryButtonPalette=function(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.neutralUsual,bgHover:abstractPalette.neutralHeavy,bgActive:abstractPalette.neutralMassive}}},"./src/components/common/Skeleton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>generateSkeletonPalette});var generateSkeletonPalette=function(abstractPalette){return{bg:abstractPalette.neutralUsual,flicker:abstractPalette.neutralLight}}},"./src/components/common/WarningIcon/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>generateWarningIconPalette});var generateWarningIconPalette=function(abstractPalette){return{icon:abstractPalette.error}}},"./src/components/form/CountrySelect/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>generateCountrySelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCountrySelectPalette=function(abstractPalette){return{title:abstractPalette.primary,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.2),countryBg:abstractPalette.base,countryHoverBg:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5),countryDescription:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/DateInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>generateDateInputPalette});var generateDateInputPalette=function(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/InputLabel/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>generateInputLabelPalette});var generateInputLabelPalette=function(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.neutralBrutal,textHighlight:abstractPalette.primary}}},"./src/components/form/PureInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>generatePureInputPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generatePureInputPalette=function(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.base,error:abstractPalette.error,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralBrutal,.3),borderFocus:abstractPalette.primary,placeholder:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/SearchInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generateSearchInputPalette});var generateSearchInputPalette=function(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/Select/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateSelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateSelectPalette=function(abstractPalette){return{bgHover:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5)}}},"./src/palette/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>defaultAbstractPalette});var defaultAbstractPalette={primary:"#353F47",secondary:"#FAD247",base:"#FFFFFF",error:"#EB5757",neutralLight:"#f9f9f9",neutralUsual:"#f1f2f6",neutralHeavy:"#ececf0",neutralMassive:"#dee0e7",neutralFoggy:"#ccc",neutralBrutal:"#999"}},"./src/palette/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>PaletteContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),PaletteContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({skeleton:(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_8__.k)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_9__.G)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_10__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__.U)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_11__.A)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__.S)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_12__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_13__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__.o)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_14__.Q)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_15__.V)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_16__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__.s)(_constants__WEBPACK_IMPORTED_MODULE_1__.V)})},"./src/palette/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s$:()=>useComponentPalette}),__webpack_require__("./src/palette/provider.tsx");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/palette/context.tsx"),useComponentPalette=function(componentName,componentPropsPalette){var componentPalette=(0,react.useContext)(context.G)[componentName];return(0,react.useMemo)(function(){return(0,objectSpread2.c)((0,objectSpread2.c)({},componentPalette),componentPropsPalette)},[componentPalette,componentPropsPalette])};__webpack_require__("./src/palette/constants.ts")},"./src/palette/provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PaletteProvider});var _home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/context.tsx"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js"),PaletteProvider=function(_ref){var children=_ref.children,_abstract=_ref.abstract,skeleton=_ref.skeleton,mergedAbstractPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)({},_constants__WEBPACK_IMPORTED_MODULE_1__.V),_abstract)},[_abstract]),mergedSkeletonPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)({},(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_11__.k)(mergedAbstractPalette)),skeleton)},[mergedAbstractPalette,skeleton]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{skeleton:mergedSkeletonPalette,invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_12__.G)(mergedAbstractPalette),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_13__.a)(mergedAbstractPalette),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__.U)(mergedAbstractPalette),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_14__.A)(mergedAbstractPalette),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__.S)(mergedAbstractPalette),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__.W)(mergedAbstractPalette),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__.K)(mergedAbstractPalette),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_16__.a)(mergedAbstractPalette),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__.K)(mergedAbstractPalette),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__.o)(mergedAbstractPalette),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_17__.Q)(mergedAbstractPalette),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_18__.V)(mergedAbstractPalette),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_19__.W)(mergedAbstractPalette),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__.s)(mergedAbstractPalette)}},[mergedSkeletonPalette,mergedAbstractPalette]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__.G.Provider,{value:value,children:children})};try{PaletteProvider.displayName="PaletteProvider",PaletteProvider.__docgenInfo={description:"",displayName:"PaletteProvider",props:{abstract:{defaultValue:null,description:"",name:"abstract",required:!1,type:{name:"Partial<TAbstractPalette>"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/palette/provider.tsx#PaletteProvider"]={docgenInfo:PaletteProvider.__docgenInfo,name:"PaletteProvider",path:"src/palette/provider.tsx#PaletteProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);