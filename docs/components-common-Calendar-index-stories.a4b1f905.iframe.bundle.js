"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[580],{"./src/components/common/Calendar/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Calendar/index.tsx");__webpack_require__("./node_modules/react-calendar/dist/Calendar.css"),__webpack_require__("./src/components/common/Calendar/index.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"common/Calendar",component:___WEBPACK_IMPORTED_MODULE_2__.Y,tags:["autodocs"]};var maxDate=new Date;maxDate.setMonth(maxDate.getMonth()+1);var minDate=new Date;minDate.setMonth(minDate.getMonth()-1);var Default={render:function(_ref){var maxDate=_ref.maxDate,minDate=_ref.minDate,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState2=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.c)(_useState,2),value=_useState2[0],setValue=_useState2[1],handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(date){setValue(date),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.qZ)("change")(date)},[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Y,{value:value,onChange:handleChange,maxDate:maxDate?new Date(maxDate):void 0,minDate:minDate?new Date(minDate):void 0})},args:{maxDate:maxDate,minDate:minDate}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Component,\n  args: {\n    maxDate,\n    minDate\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/common/Calendar/index.css":()=>{},"./src/components/common/Arrow/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>generateArrowPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateArrowPalette=function(abstractPalette){return{open:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5),close:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5)}}},"./src/components/common/Calendar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Calendar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_calendar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-calendar/dist/esm/index.js"),_palette__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/index.ts"),_hooks_useCss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useCss/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Calendar=function(_ref){var onChange=_ref.onChange,value=_ref.value,minDate=_ref.minDate,maxDate=_ref.maxDate,palette=(0,_palette__WEBPACK_IMPORTED_MODULE_1__.s)("calendar");(0,_hooks_useCss__WEBPACK_IMPORTED_MODULE_2__.s)({id:"INVOICEBOX_UI_CALENDAR",css:":root {\n            --invoicebox-ui-calendar-arrow: ".concat(palette.arrow,";\n            --invoicebox-ui-calendar-weekday: ").concat(palette.weekday,";\n            --invoicebox-ui-calendar-tile: ").concat(palette.tile,";\n            --invoicebox-ui-calendar-tile-active: ").concat(palette.tileActive,";\n            --invoicebox-ui-calendar-tile-bg-active: ").concat(palette.tileBgActive,";\n        }")});var handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(newValue){onChange(newValue)},[onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_calendar__WEBPACK_IMPORTED_MODULE_4__.cp,{locale:"ru",minDate:minDate,maxDate:maxDate,showNeighboringMonth:!1,minDetail:"month",next2Label:null,prev2Label:null,onChange:handleChange,value:value})};try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Date) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | null"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Calendar/index.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/components/common/Calendar/index.tsx#Calendar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Calendar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>generateCalendarPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCalendarPalette=function(abstractPalette){return{arrow:abstractPalette.primary,weekday:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.4),tile:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.7),tileActive:abstractPalette.primary,tileBgActive:abstractPalette.secondary}}},"./src/components/common/Divider/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generateDividerPalette});var generateDividerPalette=function(abstractPalette){return{divider:abstractPalette.neutralUsual}}},"./src/components/common/Dropdown/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateDropdownPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateDropdownPalette=function(abstractPalette){return{bg:abstractPalette.base,shadow:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.09)}}},"./src/components/common/InvoiceboxSpinner/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>generateInvoiceboxSpinnerPalette});var generateInvoiceboxSpinnerPalette=function(abstractPalette){return{leftEye:abstractPalette.primary,rightEye:abstractPalette.secondary}}},"./src/components/common/Scrollbar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateScrollbarPalette});var generateScrollbarPalette=function(abstractPalette){return{thumb:abstractPalette.neutralFoggy}}},"./src/components/common/SecondaryButton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateSecondaryButtonPalette});var generateSecondaryButtonPalette=function(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.neutralUsual,bgHover:abstractPalette.neutralHeavy,bgActive:abstractPalette.neutralMassive}}},"./src/components/common/Skeleton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>generateSkeletonPalette});var generateSkeletonPalette=function(abstractPalette){return{bg:abstractPalette.neutralUsual,flicker:abstractPalette.neutralLight}}},"./src/components/common/WarningIcon/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>generateWarningIconPalette});var generateWarningIconPalette=function(abstractPalette){return{icon:abstractPalette.error}}},"./src/components/form/CountrySelect/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>generateCountrySelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCountrySelectPalette=function(abstractPalette){return{title:abstractPalette.primary,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.2),countryBg:abstractPalette.base,countryHoverBg:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5),countryDescription:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/DateInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>generateDateInputPalette});var generateDateInputPalette=function(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/InputLabel/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>generateInputLabelPalette});var generateInputLabelPalette=function(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.neutralBrutal,textHighlight:abstractPalette.primary}}},"./src/components/form/PureInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>generatePureInputPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generatePureInputPalette=function(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.base,error:abstractPalette.error,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralBrutal,.3),borderFocus:abstractPalette.primary,placeholder:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/SearchInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generateSearchInputPalette});var generateSearchInputPalette=function(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/Select/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateSelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateSelectPalette=function(abstractPalette){return{bgHover:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5)}}},"./src/hooks/useCss/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useCss});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),stylesInDOM=new Map,useCss=function(_ref){var id=_ref.id,css=_ref.css,append=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){if(!stylesInDOM.has(id)){var style=document.createElement("style");style.type="text/css",style.innerHTML=css,document.head.appendChild(style),stylesInDOM.set(id,style)}},[id,css]),clear=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){var style=stylesInDOM.get(id);style&&(document.head.removeChild(style),stylesInDOM.delete(id))},[id]);append(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return append(),clear},[append,clear])};try{useCss.displayName="useCss",useCss.__docgenInfo={description:"",displayName:"useCss",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useCss/index.tsx#useCss"]={docgenInfo:useCss.__docgenInfo,name:"useCss",path:"src/hooks/useCss/index.tsx#useCss"})}catch(__react_docgen_typescript_loader_error){}},"./src/palette/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>defaultAbstractPalette});var defaultAbstractPalette={primary:"#353F47",secondary:"#FAD247",base:"#FFFFFF",error:"#EB5757",neutralLight:"#f9f9f9",neutralUsual:"#f1f2f6",neutralHeavy:"#ececf0",neutralMassive:"#dee0e7",neutralFoggy:"#ccc",neutralBrutal:"#999"}},"./src/palette/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>PaletteContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),PaletteContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({skeleton:(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_8__.k)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_9__.G)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_10__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__.U)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_11__.A)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__.S)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_12__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_13__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__.o)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_14__.Q)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_15__.V)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_16__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__.s)(_constants__WEBPACK_IMPORTED_MODULE_1__.V)})},"./src/palette/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComponentPalette}),__webpack_require__("./src/palette/provider.tsx");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/palette/context.tsx"),useComponentPalette=function(componentName,componentPropsPalette){var componentPalette=(0,react.useContext)(context.G)[componentName];return(0,react.useMemo)(function(){return(0,objectSpread2.c)((0,objectSpread2.c)({},componentPalette),componentPropsPalette)},[componentPalette,componentPropsPalette])}},"./src/palette/provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PaletteProvider});var _home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/context.tsx"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js"),PaletteProvider=function(_ref){var children=_ref.children,_abstract=_ref.abstract,skeleton=_ref.skeleton,mergedAbstractPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)({},_constants__WEBPACK_IMPORTED_MODULE_1__.V),_abstract)},[_abstract]),mergedSkeletonPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.c)({},(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_11__.k)(mergedAbstractPalette)),skeleton)},[mergedAbstractPalette,skeleton]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{skeleton:mergedSkeletonPalette,invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_12__.G)(mergedAbstractPalette),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_13__.a)(mergedAbstractPalette),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__.U)(mergedAbstractPalette),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_14__.A)(mergedAbstractPalette),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__.S)(mergedAbstractPalette),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__.W)(mergedAbstractPalette),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__.K)(mergedAbstractPalette),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_16__.a)(mergedAbstractPalette),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__.K)(mergedAbstractPalette),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__.o)(mergedAbstractPalette),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_17__.Q)(mergedAbstractPalette),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_18__.V)(mergedAbstractPalette),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_19__.W)(mergedAbstractPalette),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__.s)(mergedAbstractPalette)}},[mergedSkeletonPalette,mergedAbstractPalette]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__.G.Provider,{value:value,children:children})};try{PaletteProvider.displayName="PaletteProvider",PaletteProvider.__docgenInfo={description:"",displayName:"PaletteProvider",props:{abstract:{defaultValue:null,description:"",name:"abstract",required:!1,type:{name:"Partial<TAbstractPalette>"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/palette/provider.tsx#PaletteProvider"]={docgenInfo:PaletteProvider.__docgenInfo,name:"PaletteProvider",path:"src/palette/provider.tsx#PaletteProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);