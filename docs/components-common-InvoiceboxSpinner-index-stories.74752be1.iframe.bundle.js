"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[8136],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey})},"./src/components/common/InvoiceboxSpinner/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"common/InvoiceboxSpinner",component:__webpack_require__("./src/components/common/InvoiceboxSpinner/index.tsx").k,tags:["autodocs"]};var Default={args:{width:"32px"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    width: '32px'\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/hex-to-rgba/build/index.js":module=>{var parseHex=function parseHex(nakedHex){var isShort=3===nakedHex.length||4===nakedHex.length;return{r:isShort?"".concat(nakedHex.slice(0,1)).concat(nakedHex.slice(0,1)):nakedHex.slice(0,2),g:isShort?"".concat(nakedHex.slice(1,2)).concat(nakedHex.slice(1,2)):nakedHex.slice(2,4),b:isShort?"".concat(nakedHex.slice(2,3)).concat(nakedHex.slice(2,3)):nakedHex.slice(4,6),a:(isShort?"".concat(nakedHex.slice(3,4)).concat(nakedHex.slice(3,4)):nakedHex.slice(6,8))||"ff"}},hexToDecimal=function hexToDecimal(hex){return parseInt(hex,16)},hexesToDecimals=function hexesToDecimals(_ref){var r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a;return{r:hexToDecimal(r),g:hexToDecimal(g),b:hexToDecimal(b),a:+(hexToDecimal(a)/255).toFixed(2)}},formatRgb=function formatRgb(decimalObject,parameterA){var r=decimalObject.r,g=decimalObject.g,b=decimalObject.b,parsedA=decimalObject.a,a=!isNaN(parseFloat(parameterA))&&isFinite(parameterA)?parameterA:parsedA;return"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")")};module.exports=function hexToRgba(hex,a){return formatRgb(hexesToDecimals(parseHex("#"===hex.charAt(0)?hex.slice(1):hex)),a)}},"./src/components/common/Arrow/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateArrowPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateArrowPalette=function generateArrowPalette(abstractPalette){return{open:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5),close:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5)}}},"./src/components/common/BgCard/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>generateBgCardPalette});var generateBgCardPalette=function generateBgCardPalette(abstractPalette){return{bg:abstractPalette.base}}},"./src/components/common/Calendar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>generateCalendarPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCalendarPalette=function generateCalendarPalette(abstractPalette){return{arrow:abstractPalette.primary,weekday:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.4),tile:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.7),tileActive:abstractPalette.primary,tileBgActive:abstractPalette.secondary}}},"./src/components/common/Divider/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>generateDividerPalette});var generateDividerPalette=function generateDividerPalette(abstractPalette){return{divider:abstractPalette.neutralUsual}}},"./src/components/common/Dropdown/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateDropdownPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateDropdownPalette=function generateDropdownPalette(abstractPalette){return{bg:abstractPalette.base,shadow:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.09)}}},"./src/components/common/InvoiceboxSpinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>InvoiceboxSpinner}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,src_palette=__webpack_require__("./src/palette/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),leftEyeKeyframe=(0,styled_components_browser_esm.i7)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.42);\n  }\n"]))),rightEyeKeyframe=(0,styled_components_browser_esm.i7)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(0.78);\n  }\n"]))),Wrapper=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n    width: ",";\n\n    & #left-eye {\n        animation: 0.5s ease-in-out infinite alternate ",";\n        transform-origin: 17px 28px;\n    }\n\n    & #right-eye {\n        animation: 0.5s ease-in-out infinite alternate ",";\n        transform-origin: 76px 18px;\n    }\n"])),function(_ref){return _ref.$width},leftEyeKeyframe,rightEyeKeyframe),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InvoiceboxSpinner=function InvoiceboxSpinner(_ref){var palette=_ref.palette,_ref$width=_ref.width,mergedPalette=(0,src_palette.Ik)("invoiceboxSpinner",palette);return/*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper,{$width:void 0===_ref$width?"100%":_ref$width,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{width:"100%",viewBox:"0 0 99 51",fill:"none",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M57.7133 46.2284C53.4996 49.6836 47.955 51.3595 42.7575 50.9354C37.5451 50.5665 32.6961 48.0942 29.5896 44.4627C28.6805 43.4002 28.8405 41.8302 29.9467 40.9575C30.9185 40.1909 32.3196 40.2339 33.2567 40.971C38.8952 45.3988 47.1298 43.815 50.4422 39.1834C52.0805 36.8927 55.3418 36.3112 57.7268 37.8848C60.1117 39.4584 60.7172 42.5909 59.0788 44.8817C58.818 45.2465 58.5158 45.5678 58.1832 45.8437L57.7133 46.2284Z",fill:mergedPalette.rightEye}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M94 22.5C94 32.062 86.0453 40 76 40C65.9547 40 58 32.062 58 22.5C58 12.938 65.9547 5 76 5C86.0453 5 94 12.938 94 22.5Z",stroke:mergedPalette.rightEye,strokeWidth:"10",id:"right-eye"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M26 27.5C26 32.0754 22.0922 36 17 36C11.9078 36 8 32.0754 8 27.5C8 22.9246 11.9078 19 17 19C22.0922 19 26 22.9246 26 27.5Z",stroke:mergedPalette.leftEye,strokeWidth:"6",id:"left-eye"})]})})};try{InvoiceboxSpinner.displayName="InvoiceboxSpinner",InvoiceboxSpinner.__docgenInfo={description:"",displayName:"InvoiceboxSpinner",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"Partial<TInvoiceboxSpinnerPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/InvoiceboxSpinner/index.tsx#InvoiceboxSpinner"]={docgenInfo:InvoiceboxSpinner.__docgenInfo,name:"InvoiceboxSpinner",path:"src/components/common/InvoiceboxSpinner/index.tsx#InvoiceboxSpinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/InvoiceboxSpinner/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>generateInvoiceboxSpinnerPalette});var generateInvoiceboxSpinnerPalette=function generateInvoiceboxSpinnerPalette(abstractPalette){return{leftEye:abstractPalette.primary,rightEye:abstractPalette.secondary}}},"./src/components/common/Scrollbar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>generateScrollbarPalette});var generateScrollbarPalette=function generateScrollbarPalette(abstractPalette){return{thumb:abstractPalette.neutralFoggy}}},"./src/components/common/SecondaryButton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>generateSecondaryButtonPalette});var generateSecondaryButtonPalette=function generateSecondaryButtonPalette(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.neutralUsual,bgHover:abstractPalette.neutralHeavy,bgActive:abstractPalette.neutralMassive}}},"./src/components/common/Skeleton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>generateSkeletonPalette});var generateSkeletonPalette=function generateSkeletonPalette(abstractPalette){return{bg:abstractPalette.neutralUsual,flicker:abstractPalette.neutralLight}}},"./src/components/common/Toast/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>generateToastPalette});var generateToastPalette=function generateToastPalette(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.primary,shadow:abstractPalette.primary}}},"./src/components/common/WarningIcon/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>generateWarningIconPalette});var generateWarningIconPalette=function generateWarningIconPalette(abstractPalette){return{icon:abstractPalette.error}}},"./src/components/form/Autocomplete/components/AutocompleteDefaultOption/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>generateAutocompleteDefaultOptionPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateAutocompleteDefaultOptionPalette=function generateAutocompleteDefaultOptionPalette(abstractPalette){return{hoverBg:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5)}}},"./src/components/form/Autocomplete/components/OrganizationAutocompleteItem/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>generateOrganizationAutocompleteItemPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateOrganizationAutocompleteItemPalette=function generateOrganizationAutocompleteItemPalette(abstractPalette){return{title:abstractPalette.primary,description:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5),label:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/CountrySelect/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>generateCountrySelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCountrySelectPalette=function generateCountrySelectPalette(abstractPalette){return{title:abstractPalette.primary,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.2),countryBg:abstractPalette.base,countryHoverBg:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5),countryDescription:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/DateInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>generateDateInputPalette});var generateDateInputPalette=function generateDateInputPalette(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/InputLabel/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>generateInputLabelPalette});var generateInputLabelPalette=function generateInputLabelPalette(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.neutralBrutal,textHighlight:abstractPalette.primary}}},"./src/components/form/PureInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>generatePureInputPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generatePureInputPalette=function generatePureInputPalette(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.base,error:abstractPalette.error,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralBrutal,.3),borderFocus:abstractPalette.primary,placeholder:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/SearchInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>generateSearchInputPalette});var generateSearchInputPalette=function generateSearchInputPalette(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/Select/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>generateSelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateSelectPalette=function generateSelectPalette(abstractPalette){return{bgHover:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5)}}},"./src/components/payment/PaymentCard/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>generatePaymentCardPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generatePaymentCardPalette=function generatePaymentCardPalette(abstractPalette){return{bgActive:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.secondary,.1),borderActive:abstractPalette.secondary,borderInactive:abstractPalette.neutralFoggy,title:abstractPalette.primary,iconBg:abstractPalette.neutralLight,comment:abstractPalette.neutralBrutal,radioBgActive:abstractPalette.base,radioBorderActive:abstractPalette.secondary,radioBorderInactive:abstractPalette.primary,commentBg:abstractPalette.base}}},"./src/palette/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>defaultAbstractPalette});var defaultAbstractPalette={primary:"#353F47",secondary:"#FAD247",base:"#FFFFFF",error:"#EB5757",neutralLight:"#f9f9f9",neutralUsual:"#f1f2f6",neutralHeavy:"#ececf0",neutralMassive:"#dee0e7",neutralFoggy:"#ccc",neutralBrutal:"#999"}},"./src/palette/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>PaletteContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/components/common/BgCard/palette.ts"),_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./src/components/common/Toast/palette.ts"),_components_payment_PaymentCard_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/payment/PaymentCard/palette.ts"),_components_form_Autocomplete_components_AutocompleteDefaultOption_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/form/Autocomplete/components/AutocompleteDefaultOption/palette.ts"),_components_form_Autocomplete_components_OrganizationAutocompleteItem_palette__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/form/Autocomplete/components/OrganizationAutocompleteItem/palette.ts"),PaletteContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({skeleton:(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_11__.o)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_12__.O)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_13__.v)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_14__.v)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__.L)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__.N)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_16__.V)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__.Z)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__.T)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_17__.r)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_18__.w)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_19__.M)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__.L)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),bgCard:(0,_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_20__.M)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),toast:(0,_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_21__.M)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),paymentCard:(0,_components_payment_PaymentCard_palette__WEBPACK_IMPORTED_MODULE_8__.z)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),autocompleteDefaultOption:(0,_components_form_Autocomplete_components_AutocompleteDefaultOption_palette__WEBPACK_IMPORTED_MODULE_9__.V)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),organizationAutocompleteItem:(0,_components_form_Autocomplete_components_OrganizationAutocompleteItem_palette__WEBPACK_IMPORTED_MODULE_10__.F)(_constants__WEBPACK_IMPORTED_MODULE_1__.V)})},"./src/palette/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ik:()=>useComponentPalette}),__webpack_require__("./src/palette/provider.tsx");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/palette/context.tsx"),useComponentPalette=function useComponentPalette(componentName,componentPropsPalette){var componentPalette=(0,react.useContext)(context.r)[componentName];return(0,react.useMemo)(function(){return(0,objectSpread2.A)((0,objectSpread2.A)({},componentPalette),componentPropsPalette)},[componentPalette,componentPropsPalette])};__webpack_require__("./src/palette/constants.ts")},"./src/palette/provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>PaletteProvider});var _Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/context.tsx"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./src/components/common/BgCard/palette.ts"),_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./src/components/common/Toast/palette.ts"),_components_payment_PaymentCard_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/payment/PaymentCard/palette.ts"),_components_form_Autocomplete_components_AutocompleteDefaultOption_palette__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/form/Autocomplete/components/AutocompleteDefaultOption/palette.ts"),_components_form_Autocomplete_components_OrganizationAutocompleteItem_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/form/Autocomplete/components/OrganizationAutocompleteItem/palette.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js"),PaletteProvider=function PaletteProvider(_ref){var children=_ref.children,_abstract=_ref.abstract,skeleton=_ref.skeleton,mergedAbstractPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__.A)((0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__.A)({},_constants__WEBPACK_IMPORTED_MODULE_1__.V),_abstract)},[_abstract]),mergedSkeletonPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__.A)((0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__.A)({},(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_14__.o)(mergedAbstractPalette)),skeleton)},[mergedAbstractPalette,skeleton]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{skeleton:mergedSkeletonPalette,invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_15__.O)(mergedAbstractPalette),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_16__.v)(mergedAbstractPalette),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__.K)(mergedAbstractPalette),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_17__.v)(mergedAbstractPalette),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__.L)(mergedAbstractPalette),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_18__.N)(mergedAbstractPalette),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__.a)(mergedAbstractPalette),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_19__.V)(mergedAbstractPalette),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__.Z)(mergedAbstractPalette),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__.T)(mergedAbstractPalette),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_20__.r)(mergedAbstractPalette),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_21__.w)(mergedAbstractPalette),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_22__.M)(mergedAbstractPalette),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__.L)(mergedAbstractPalette),bgCard:(0,_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_23__.M)(mergedAbstractPalette),toast:(0,_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_24__.M)(mergedAbstractPalette),paymentCard:(0,_components_payment_PaymentCard_palette__WEBPACK_IMPORTED_MODULE_9__.z)(mergedAbstractPalette),autocompleteDefaultOption:(0,_components_form_Autocomplete_components_AutocompleteDefaultOption_palette__WEBPACK_IMPORTED_MODULE_10__.V)(mergedAbstractPalette),organizationAutocompleteItem:(0,_components_form_Autocomplete_components_OrganizationAutocompleteItem_palette__WEBPACK_IMPORTED_MODULE_11__.F)(mergedAbstractPalette)}},[mergedSkeletonPalette,mergedAbstractPalette]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__.r.Provider,{value:value,children:children})};try{PaletteProvider.displayName="PaletteProvider",PaletteProvider.__docgenInfo={description:"",displayName:"PaletteProvider",props:{abstract:{defaultValue:null,description:"",name:"abstract",required:!1,type:{name:"Partial<TAbstractPalette>"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/palette/provider.tsx#PaletteProvider"]={docgenInfo:PaletteProvider.__docgenInfo,name:"PaletteProvider",path:"src/palette/provider.tsx#PaletteProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);