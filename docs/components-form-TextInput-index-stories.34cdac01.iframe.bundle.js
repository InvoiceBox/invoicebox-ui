"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[3861],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray});function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayWithHoles(r){if(Array.isArray(r))return r}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableRest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||(0,unsupportedIterableToArray.A)(r,e)||_nonIterableRest()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t=({}).toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!("object"==typeof e&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&"function"==typeof e.persist),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>"playing"===render.phase||"rendering"===render.phase);if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),actionDisplayToEmit={id,count:0,data:{name,args:args.length>1?serializedArgs:serializedArgs[0]},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/form/TextInput/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/TextInput/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"form/TextInput",component:___WEBPACK_IMPORTED_MODULE_2__.k,tags:["autodocs"]};var Default={args:{hasError:!1,label:"Label",name:"name",onBlur:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("blur"),onFocus:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("focus"),maxLength:30,placeholder:"Placeholder",disabled:!1,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:"Children"})},render:function Component(props){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState2=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(_useState,2),value=_useState2[0],setValue=_useState2[1];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.k,(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({},props),{},{value:value,onChange:setValue}))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    hasError: false,\n    label: 'Label',\n    name: 'name',\n    onBlur: action('blur'),\n    onFocus: action('focus'),\n    maxLength: 30,\n    placeholder: 'Placeholder',\n    disabled: false,\n    children: <div>Children</div>\n  },\n  render: Component\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/hex-to-rgba/build/index.js":module=>{var parseHex=function parseHex(nakedHex){var isShort=3===nakedHex.length||4===nakedHex.length;return{r:isShort?"".concat(nakedHex.slice(0,1)).concat(nakedHex.slice(0,1)):nakedHex.slice(0,2),g:isShort?"".concat(nakedHex.slice(1,2)).concat(nakedHex.slice(1,2)):nakedHex.slice(2,4),b:isShort?"".concat(nakedHex.slice(2,3)).concat(nakedHex.slice(2,3)):nakedHex.slice(4,6),a:(isShort?"".concat(nakedHex.slice(3,4)).concat(nakedHex.slice(3,4)):nakedHex.slice(6,8))||"ff"}},hexToDecimal=function hexToDecimal(hex){return parseInt(hex,16)},hexesToDecimals=function hexesToDecimals(_ref){var r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a;return{r:hexToDecimal(r),g:hexToDecimal(g),b:hexToDecimal(b),a:+(hexToDecimal(a)/255).toFixed(2)}},formatRgb=function formatRgb(decimalObject,parameterA){var r=decimalObject.r,g=decimalObject.g,b=decimalObject.b,parsedA=decimalObject.a,a=!isNaN(parseFloat(parameterA))&&isFinite(parameterA)?parameterA:parsedA;return"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")")};module.exports=function hexToRgba(hex,a){return formatRgb(hexesToDecimals(parseHex("#"===hex.charAt(0)?hex.slice(1):hex)),a)}},"./src/components/form/InputLabel/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>InputLabel}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Label=(0,styled_components_browser_esm.Ay)(Typography.o)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    border-radius: 10px;\n    position: absolute;\n    top: 0;\n    left: 8px;\n    background-color: ",";\n    padding: 0 10px;\n    z-index: 2;\n    transition: color 0.2s ease-in-out 0s;\n    color: ","};\n"])),function(_ref){return _ref.$palette.bg},function(_ref2){var $inFocus=_ref2.$inFocus,$palette=_ref2.$palette;return $inFocus?$palette.textHighlight:$palette.text}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n    position: relative;\n    padding-top: ","px;\n    width: 100%;\n    opacity: ",";\n\n    &:hover "," {\n        ",";\n    }\n"])),function(_ref3){return _ref3.$isLabel?10:0},function(_ref4){return _ref4.$disabled?.5:1},Label,function(_ref5){var $disabled=_ref5.$disabled,$palette=_ref5.$palette;return!$disabled&&(0,styled_components_browser_esm.AH)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n                color: ",";\n            "])),$palette.textHighlight)}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputLabel=function InputLabel(_ref){var _ref$disabled=_ref.disabled,label=_ref.label,_ref$inFocus=_ref.inFocus,children=_ref.children,palette=(0,src_palette.Ik)("inputLabel");return/*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper,{$palette:palette,$disabled:void 0!==_ref$disabled&&_ref$disabled,$isLabel:!!label,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label,{$palette:palette,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,variant:"captionRegular",children:label}),children]})};try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputLabel/index.tsx#InputLabel"]={docgenInfo:InputLabel.__docgenInfo,name:"InputLabel",path:"src/components/form/InputLabel/index.tsx#InputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/TextInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TextInput});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ChildrenWrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),InputLabelContent=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n    position: relative;\n"]))),InputLabel=__webpack_require__("./src/components/form/InputLabel/index.tsx"),PureInput=__webpack_require__("./src/components/form/PureInput/index.tsx"),useInputFocus=__webpack_require__("./src/hooks/useInputFocus/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextInput=function TextInput(_ref){var _ref$hasError=_ref.hasError,onFocus=_ref.onFocus,onBlur=_ref.onBlur,value=_ref.value,onChange=_ref.onChange,label=_ref.label,name=_ref.name,maxLength=_ref.maxLength,disabled=_ref.disabled,placeholder=_ref.placeholder,paddingRight=_ref.paddingRight,children=_ref.children,_useInputFocus=(0,useInputFocus.m)({onFocus:onFocus,onBlur:onBlur}),inFocus=_useInputFocus.inFocus,handleFocus=_useInputFocus.handleFocus,handleBlur=_useInputFocus.handleBlur,handleChange=(0,react.useCallback)(function(event){onChange(event.target.value.slice(0,null!=maxLength?maxLength:1/0))},[onChange,maxLength]);return/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel.l,{inFocus:inFocus,label:label,disabled:disabled,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(InputLabelContent,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(PureInput.d,{name:name,disabled:disabled,hasError:void 0!==_ref$hasError&&_ref$hasError,inFocus:inFocus,onFocus:handleFocus,onBlur:handleBlur,value:value,onChange:handleChange,placeholder:placeholder,paddingRight:paddingRight}),children&&/*#__PURE__*/(0,jsx_runtime.jsx)(ChildrenWrapper,{children:children})]})})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TextInput/index.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/form/TextInput/index.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useInputFocus/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>useInputFocus});var _Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInputFocus=function useInputFocus(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialFocusFlag=_ref.initialFocusFlag,onFocus=_ref.onFocus,onBlur=_ref.onBlur,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0!==_ref$initialFocusFlag&&_ref$initialFocusFlag),_useState2=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.A)(_useState,2),inFocus=_useState2[0],setInFocus=_useState2[1];return{inFocus:inFocus,handleFocus:function handleFocus(event){setInFocus(!0),onFocus&&onFocus(event)},handleBlur:function handleBlur(event){setInFocus(!1),onBlur&&onBlur(event)}}}}}]);