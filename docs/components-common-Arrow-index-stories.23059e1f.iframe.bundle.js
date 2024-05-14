"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[3596],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_objectSpread2});var toPropertyKey=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,toPropertyKey.c)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==_typeof(i)?i:String(i)}__webpack_require__.d(__webpack_exports__,{c:()=>toPropertyKey})},"./src/components/common/Arrow/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"common/Arrow",component:__webpack_require__("./src/components/common/Arrow/index.tsx").u,tags:["autodocs"]};var Default={args:{isOpen:!1,innerSize:10,outterSize:24,defaultRotate:0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: false,\n    innerSize: 10,\n    outterSize: 24,\n    defaultRotate: 0\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/hex-to-rgba/build/index.js":module=>{var parseHex=function(nakedHex){var isShort=3===nakedHex.length||4===nakedHex.length;return{r:isShort?"".concat(nakedHex.slice(0,1)).concat(nakedHex.slice(0,1)):nakedHex.slice(0,2),g:isShort?"".concat(nakedHex.slice(1,2)).concat(nakedHex.slice(1,2)):nakedHex.slice(2,4),b:isShort?"".concat(nakedHex.slice(2,3)).concat(nakedHex.slice(2,3)):nakedHex.slice(4,6),a:(isShort?"".concat(nakedHex.slice(3,4)).concat(nakedHex.slice(3,4)):nakedHex.slice(6,8))||"ff"}},hexToDecimal=function(hex){return parseInt(hex,16)},hexesToDecimals=function(_ref){var r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a;return{r:hexToDecimal(r),g:hexToDecimal(g),b:hexToDecimal(b),a:+(hexToDecimal(a)/255).toFixed(2)}},formatRgb=function(decimalObject,parameterA){var r=decimalObject.r,g=decimalObject.g,b=decimalObject.b,parsedA=decimalObject.a,a=!isNaN(parseFloat(parameterA))&&isFinite(parameterA)?parameterA:parsedA;return"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")")};module.exports=function(hex,a){return formatRgb(hexesToDecimals(parseHex("#"===hex.charAt(0)?hex.slice(1):hex)),a)}},"./src/components/common/Arrow/components/StyledSvg/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>StyledSvg});var _templateObject,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Arrow/components/Svg/index.tsx"),StyledSvg=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.cp)(_Svg__WEBPACK_IMPORTED_MODULE_0__.A)(_templateObject||(_templateObject=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n    transform: rotateZ(","deg);\n    transition: all 0.2s ease-in-out 0s;\n    box-sizing: content-box;\n\n    padding: ","px;\n\n    path {\n        stroke: ",";\n"])),function(_ref){var $isOpen=_ref.$isOpen,$defaultRotate=_ref.$defaultRotate;return $isOpen?$defaultRotate+180:$defaultRotate},function(_ref2){return _ref2.$padding},function(_ref3){var $isOpen=_ref3.$isOpen,$openColor=_ref3.$openColor,$closeColor=_ref3.$closeColor;return $isOpen?$openColor:$closeColor})},"./src/components/common/Arrow/components/Svg/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Svg}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Svg=function(_ref){var className=_ref.className,size=_ref.size;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:className,width:size,height:size,viewBox:"7 7 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M16.0846 9.95825L12.0013 14.0416L7.91797 9.95825",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})};try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Arrow/components/Svg/index.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/common/Arrow/components/Svg/index.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Arrow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Arrow}),__webpack_require__("./node_modules/react/index.js");var _components_StyledSvg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Arrow/components/StyledSvg/index.ts"),_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Arrow=function(_ref){var isOpen=_ref.isOpen,_ref$innerSize=_ref.innerSize,innerSize=void 0===_ref$innerSize?10:_ref$innerSize,_ref$outterSize=_ref.outterSize,_ref$defaultRotate=_ref.defaultRotate,palette=_ref.palette,mergedPalette=(0,_palette__WEBPACK_IMPORTED_MODULE_2__.s$)("arrow",palette);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_StyledSvg__WEBPACK_IMPORTED_MODULE_1__.C,{$isOpen:isOpen,$openColor:mergedPalette.open,$closeColor:mergedPalette.close,size:innerSize,$padding:((void 0===_ref$outterSize?24:_ref$outterSize)-innerSize)/2,$defaultRotate:void 0===_ref$defaultRotate?0:_ref$defaultRotate})};try{Arrow.displayName="Arrow",Arrow.__docgenInfo={description:"",displayName:"Arrow",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},innerSize:{defaultValue:{value:"10"},description:"",name:"innerSize",required:!1,type:{name:"number"}},outterSize:{defaultValue:{value:"24"},description:"",name:"outterSize",required:!1,type:{name:"number"}},defaultRotate:{defaultValue:{value:"0"},description:"",name:"defaultRotate",required:!1,type:{name:"number"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"Partial<TArrowPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Arrow/index.tsx#Arrow"]={docgenInfo:Arrow.__docgenInfo,name:"Arrow",path:"src/components/common/Arrow/index.tsx#Arrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Arrow/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>generateArrowPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateArrowPalette=function(abstractPalette){return{open:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5),close:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5)}}},"./src/components/common/Calendar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>generateCalendarPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCalendarPalette=function(abstractPalette){return{arrow:abstractPalette.primary,weekday:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.4),tile:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.7),tileActive:abstractPalette.primary,tileBgActive:abstractPalette.secondary}}},"./src/components/common/Divider/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generateDividerPalette});var generateDividerPalette=function(abstractPalette){return{divider:abstractPalette.neutralUsual}}},"./src/components/common/Dropdown/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateDropdownPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateDropdownPalette=function(abstractPalette){return{bg:abstractPalette.base,shadow:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.09)}}},"./src/components/common/InvoiceboxSpinner/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>generateInvoiceboxSpinnerPalette});var generateInvoiceboxSpinnerPalette=function(abstractPalette){return{leftEye:abstractPalette.primary,rightEye:abstractPalette.secondary}}},"./src/components/common/Scrollbar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateScrollbarPalette});var generateScrollbarPalette=function(abstractPalette){return{thumb:abstractPalette.neutralFoggy}}},"./src/components/common/SecondaryButton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateSecondaryButtonPalette});var generateSecondaryButtonPalette=function(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.neutralUsual,bgHover:abstractPalette.neutralHeavy,bgActive:abstractPalette.neutralMassive}}},"./src/components/common/Skeleton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>generateSkeletonPalette});var generateSkeletonPalette=function(abstractPalette){return{bg:abstractPalette.neutralUsual,flicker:abstractPalette.neutralLight}}},"./src/components/common/WarningIcon/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>generateWarningIconPalette});var generateWarningIconPalette=function(abstractPalette){return{icon:abstractPalette.error}}},"./src/components/form/CountrySelect/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>generateCountrySelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCountrySelectPalette=function(abstractPalette){return{title:abstractPalette.primary,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.2),countryBg:abstractPalette.base,countryHoverBg:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5),countryDescription:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/DateInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>generateDateInputPalette});var generateDateInputPalette=function(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/InputLabel/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>generateInputLabelPalette});var generateInputLabelPalette=function(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.neutralBrutal,textHighlight:abstractPalette.primary}}},"./src/components/form/PureInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>generatePureInputPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generatePureInputPalette=function(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.base,error:abstractPalette.error,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralBrutal,.3),borderFocus:abstractPalette.primary,placeholder:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/SearchInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generateSearchInputPalette});var generateSearchInputPalette=function(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/Select/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateSelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateSelectPalette=function(abstractPalette){return{bgHover:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5)}}},"./src/palette/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>defaultAbstractPalette});var defaultAbstractPalette={primary:"#353F47",secondary:"#FAD247",base:"#FFFFFF",error:"#EB5757",neutralLight:"#f9f9f9",neutralUsual:"#f1f2f6",neutralHeavy:"#ececf0",neutralMassive:"#dee0e7",neutralFoggy:"#ccc",neutralBrutal:"#999"}},"./src/palette/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>PaletteContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),PaletteContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({skeleton:(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_8__.k)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_9__.G)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_10__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__.U)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_11__.A)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__.S)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_12__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_13__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__.o)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_14__.Q)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_15__.V)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_16__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__.s)(_constants__WEBPACK_IMPORTED_MODULE_1__.V)})},"./src/palette/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s$:()=>useComponentPalette}),__webpack_require__("./src/palette/provider.tsx");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/palette/context.tsx"),useComponentPalette=function(componentName,componentPropsPalette){var componentPalette=(0,react.useContext)(context.G)[componentName];return(0,react.useMemo)(function(){return(0,objectSpread2.c)((0,objectSpread2.c)({},componentPalette),componentPropsPalette)},[componentPalette,componentPropsPalette])};__webpack_require__("./src/palette/constants.ts")},"./src/palette/provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PaletteProvider});var _home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/context.tsx"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js"),PaletteProvider=function(_ref){var children=_ref.children,_abstract=_ref.abstract,skeleton=_ref.skeleton,mergedAbstractPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)({},_constants__WEBPACK_IMPORTED_MODULE_1__.V),_abstract)},[_abstract]),mergedSkeletonPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)({},(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_11__.k)(mergedAbstractPalette)),skeleton)},[mergedAbstractPalette,skeleton]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{skeleton:mergedSkeletonPalette,invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_12__.G)(mergedAbstractPalette),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_13__.a)(mergedAbstractPalette),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__.U)(mergedAbstractPalette),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_14__.A)(mergedAbstractPalette),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__.S)(mergedAbstractPalette),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__.W)(mergedAbstractPalette),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__.K)(mergedAbstractPalette),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_16__.a)(mergedAbstractPalette),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__.K)(mergedAbstractPalette),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__.o)(mergedAbstractPalette),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_17__.Q)(mergedAbstractPalette),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_18__.V)(mergedAbstractPalette),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_19__.W)(mergedAbstractPalette),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__.s)(mergedAbstractPalette)}},[mergedSkeletonPalette,mergedAbstractPalette]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__.G.Provider,{value:value,children:children})};try{PaletteProvider.displayName="PaletteProvider",PaletteProvider.__docgenInfo={description:"",displayName:"PaletteProvider",props:{abstract:{defaultValue:null,description:"",name:"abstract",required:!1,type:{name:"Partial<TAbstractPalette>"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/palette/provider.tsx#PaletteProvider"]={docgenInfo:PaletteProvider.__docgenInfo,name:"PaletteProvider",path:"src/palette/provider.tsx#PaletteProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);