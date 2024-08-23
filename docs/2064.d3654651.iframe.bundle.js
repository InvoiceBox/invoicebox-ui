"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[2064],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=_objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{c:()=>_objectWithoutProperties})},"./src/breakpoints/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Arrow/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>generateArrowPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateArrowPalette=function(abstractPalette){return{open:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5),close:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.5)}}},"./src/components/common/BgCard/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>generateBgCardPalette});var generateBgCardPalette=function(abstractPalette){return{bg:abstractPalette.base}}},"./src/components/common/Calendar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>generateCalendarPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCalendarPalette=function(abstractPalette){return{arrow:abstractPalette.primary,weekday:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.4),tile:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.7),tileActive:abstractPalette.primary,tileBgActive:abstractPalette.secondary}}},"./src/components/common/Divider/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generateDividerPalette});var generateDividerPalette=function(abstractPalette){return{divider:abstractPalette.neutralUsual}}},"./src/components/common/Dropdown/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateDropdownPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateDropdownPalette=function(abstractPalette){return{bg:abstractPalette.base,shadow:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.09)}}},"./src/components/common/InvoiceboxSpinner/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>generateInvoiceboxSpinnerPalette});var generateInvoiceboxSpinnerPalette=function(abstractPalette){return{leftEye:abstractPalette.primary,rightEye:abstractPalette.secondary}}},"./src/components/common/Scrollbar/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateScrollbarPalette});var generateScrollbarPalette=function(abstractPalette){return{thumb:abstractPalette.neutralFoggy}}},"./src/components/common/SecondaryButton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>generateSecondaryButtonPalette});var generateSecondaryButtonPalette=function(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.neutralUsual,bgHover:abstractPalette.neutralHeavy,bgActive:abstractPalette.neutralMassive}}},"./src/components/common/Skeleton/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>generateSkeletonPalette});var generateSkeletonPalette=function(abstractPalette){return{bg:abstractPalette.neutralUsual,flicker:abstractPalette.neutralLight}}},"./src/components/common/Toast/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>generateToastPalette});var generateToastPalette=function(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.primary,shadow:abstractPalette.primary}}},"./src/components/common/Typography/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.cp.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    font-family: Roboto, sans-serif;\n\n    ","\n"])),function(_ref){var $variant=_ref.$variant;return typography.e[$variant]}),useCss=__webpack_require__("./src/hooks/useCss/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","element"],Typography=(0,react.forwardRef)(function(_ref,ref){var variant=_ref.variant,_ref$element=_ref.element,rest=(0,objectWithoutProperties.c)(_ref,_excluded);return(0,useCss.s)({id:"INVOICEBOX_UI_TYPOGRAPHY",css:"@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')"}),(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.c)({ref:ref,as:void 0===_ref$element?"div":_ref$element,$variant:variant},rest))});Typography.displayName="Typography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},element:{defaultValue:{value:"div"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"div"'},{value:'"p"'},{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"input"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Typography/index.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/common/Typography/index.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Typography/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>typography});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/breakpoints/index.ts"),typography={headline1:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject||(_templateObject=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 34px;\n        font-weight: 400;\n        line-height: 42px;\n\n        @media "," {\n            font-size: 30px;\n            font-weight: 400;\n            line-height: 48px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__._.sm),headline2:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject2||(_templateObject2=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 24px;\n        font-weight: 400;\n        line-height: 32px;\n\n        @media "," {\n            font-size: 20px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__._.sm),headline3:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject3||(_templateObject3=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px;\n\n        @media "," {\n            font-size: 18px;\n            font-weight: 400;\n            line-height: 22px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__._.sm),headline4:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject4||(_templateObject4=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 18px;\n        font-weight: 400;\n        line-height: 22px;\n\n        @media "," {\n            font-size: 16px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__._.sm),headline5:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject5||(_templateObject5=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 20px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__._.sm),headline6:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject6||(_templateObject6=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 20px;\n    "]))),headerText:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject7||(_templateObject7=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 15px;\n        font-weight: 500;\n        line-height: 20px;\n\n        @media "," {\n            font-size: 18px;\n            font-weight: 500;\n            line-height: 26px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__._.sm),buttonL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject8||(_templateObject8=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 24px;\n    "]))),bodyL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject9||(_templateObject9=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__._.sm),bodyLUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject10||(_templateObject10=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n        text-decoration: underline;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 20px;\n            text-decoration: underline;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__._.sm),buttonM:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject11||(_templateObject11=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n    "]))),bodyMRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject12||(_templateObject12=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n    "]))),bodyMBold:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject13||(_templateObject13=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n    "]))),bodyMUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject14||(_templateObject14=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n        text-decoration: underline;\n    "]))),captionRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject15||(_templateObject15=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 18px;\n    "]))),captionUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject16||(_templateObject16=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 18px;\n        text-decoration: underline;\n    "]))),smallMedium:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject17||(_templateObject17=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 12px;\n        font-weight: 500;\n        line-height: 16px;\n    "]))),labelsAndHints:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.gV)(_templateObject18||(_templateObject18=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 16px;\n    "])))}},"./src/components/common/WarningIcon/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>generateWarningIconPalette});var generateWarningIconPalette=function(abstractPalette){return{icon:abstractPalette.error}}},"./src/components/form/CountrySelect/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>generateCountrySelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateCountrySelectPalette=function(abstractPalette){return{title:abstractPalette.primary,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.2),countryBg:abstractPalette.base,countryHoverBg:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5),countryDescription:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/DateInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>generateDateInputPalette});var generateDateInputPalette=function(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/InputLabel/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>generateInputLabelPalette});var generateInputLabelPalette=function(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.neutralBrutal,textHighlight:abstractPalette.primary}}},"./src/components/form/PureInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>PureInput});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Wrapper=(0,styled_components_browser_esm.cp)(Typography.O)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    color: ",";\n    border-radius: 10px;\n    outline: none;\n    padding: 12px 18px;\n    width: 100%;\n    background-color: ",";\n    transition: all 0.2s ease-in-out 0s;\n    box-sizing: border-box;\n    padding-right: ","px;\n    padding-left: ","px;\n    border: 1px solid\n        ",";\n\n    &::placeholder {\n        color: ",";\n    }\n\n    /*\n        Убирает браузерные стрелочки вверх/вниз\n        у инпута с типом number\n    */\n\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n\n    &[type='number'] {\n        -moz-appearance: textfield;\n    }\n\n    /* \n        Если пользователь заполнил поле при помощи браузерного автокомплита, то меняется цвет фона и шрифта\n        Чтобы этого не происходило существует этот хак\n    */\n\n    &:-webkit-autofill,\n    &:-webkit-autofill:hover,\n    &:-webkit-autofill:focus {\n        transition:\n            background-color 0s 600000s,\n            color 0s 600000s !important;\n    }\n"])),function(_ref){return _ref.$palette.text},function(_ref2){return _ref2.$palette.bg},function(_ref3){return _ref3.$paddingRight},function(_ref4){return _ref4.$paddingLeft},function(_ref5){var $hasError=_ref5.$hasError,$inFocus=_ref5.$inFocus,$hasBorder=_ref5.$hasBorder,$palette=_ref5.$palette;return $hasBorder?$hasError?$palette.error:$inFocus?$palette.borderFocus:$palette.border:"transparent"},function(_ref6){return _ref6.$palette.placeholder}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["paddingLeft","paddingRight","hasError","inFocus","hasBorder","className"],PureInput=react.forwardRef(function(_ref,ref){var _ref$paddingLeft=_ref.paddingLeft,_ref$paddingRight=_ref.paddingRight,_ref$hasError=_ref.hasError,_ref$inFocus=_ref.inFocus,_ref$hasBorder=_ref.hasBorder,rest=(_ref.className,(0,objectWithoutProperties.c)(_ref,_excluded)),palette=(0,src_palette.s$)("pureInput");return(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.c)({ref:ref,variant:"bodyMRegular",element:"input",$paddingLeft:void 0===_ref$paddingLeft?18:_ref$paddingLeft,$paddingRight:void 0===_ref$paddingRight?18:_ref$paddingRight,$hasError:void 0!==_ref$hasError&&_ref$hasError,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,$hasBorder:void 0===_ref$hasBorder||_ref$hasBorder,$palette:palette},rest))});PureInput.displayName="PureInput";try{PureInput.displayName="PureInput",PureInput.__docgenInfo={description:"",displayName:"PureInput",props:{paddingLeft:{defaultValue:{value:"18"},description:"",name:"paddingLeft",required:!1,type:{name:"number"}},paddingRight:{defaultValue:{value:"18"},description:"",name:"paddingRight",required:!1,type:{name:"number"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/PureInput/index.tsx#PureInput"]={docgenInfo:PureInput.__docgenInfo,name:"PureInput",path:"src/components/form/PureInput/index.tsx#PureInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/PureInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>generatePureInputPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generatePureInputPalette=function(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.base,error:abstractPalette.error,border:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralBrutal,.3),borderFocus:abstractPalette.primary,placeholder:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.primary,.3)}}},"./src/components/form/SearchInput/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generateSearchInputPalette});var generateSearchInputPalette=function(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/Select/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>generateSelectPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generateSelectPalette=function(abstractPalette){return{bgHover:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.neutralUsual,.5)}}},"./src/components/payment/PaymentCard/palette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>generatePaymentCardPalette});var hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_0__),generatePaymentCardPalette=function(abstractPalette){return{bgActive:hex_to_rgba__WEBPACK_IMPORTED_MODULE_0___default()(abstractPalette.secondary,.1),borderActive:abstractPalette.secondary,borderInactive:abstractPalette.neutralFoggy,title:abstractPalette.primary,iconBg:abstractPalette.neutralLight,comment:abstractPalette.neutralBrutal,radioBgActive:abstractPalette.base,radioBorderActive:abstractPalette.secondary,radioBorderInactive:abstractPalette.primary}}},"./src/hooks/useCss/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useCss});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),stylesInDOM=new Map,useCss=function(_ref){var id=_ref.id,css=_ref.css,append=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){if(!stylesInDOM.has(id)){var style=document.createElement("style");style.type="text/css",style.innerHTML=css,document.head.appendChild(style),stylesInDOM.set(id,style)}},[id,css]),clear=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){var style=stylesInDOM.get(id);style&&(document.head.removeChild(style),stylesInDOM.delete(id))},[id]);append(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return append(),clear},[append,clear])};try{useCss.displayName="useCss",useCss.__docgenInfo={description:"",displayName:"useCss",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useCss/index.tsx#useCss"]={docgenInfo:useCss.__docgenInfo,name:"useCss",path:"src/hooks/useCss/index.tsx#useCss"})}catch(__react_docgen_typescript_loader_error){}},"./src/palette/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>defaultAbstractPalette});var defaultAbstractPalette={primary:"#353F47",secondary:"#FAD247",base:"#FFFFFF",error:"#EB5757",neutralLight:"#f9f9f9",neutralUsual:"#f1f2f6",neutralHeavy:"#ececf0",neutralMassive:"#dee0e7",neutralFoggy:"#ccc",neutralBrutal:"#999"}},"./src/palette/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>PaletteContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/components/common/BgCard/palette.ts"),_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/components/common/Toast/palette.ts"),_components_payment_PaymentCard_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/payment/PaymentCard/palette.ts"),PaletteContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({skeleton:(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_9__.k)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_10__.G)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_11__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_2__.U)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_12__.A)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_3__.S)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_13__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_4__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_14__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_5__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_7__.o)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_15__.Q)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_16__.V)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_17__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_6__.s)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),bgCard:(0,_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_18__.O)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),toast:(0,_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_19__.G)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),paymentCard:(0,_components_payment_PaymentCard_palette__WEBPACK_IMPORTED_MODULE_8__.W)(_constants__WEBPACK_IMPORTED_MODULE_1__.V)})},"./src/palette/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s$:()=>useComponentPalette}),__webpack_require__("./src/palette/provider.tsx");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/palette/context.tsx"),useComponentPalette=function(componentName,componentPropsPalette){var componentPalette=(0,react.useContext)(context.G)[componentName];return(0,react.useMemo)(function(){return(0,objectSpread2.c)((0,objectSpread2.c)({},componentPalette),componentPropsPalette)},[componentPalette,componentPropsPalette])};__webpack_require__("./src/palette/constants.ts")},"./src/palette/provider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PaletteProvider});var _home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/context.tsx"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./src/components/common/BgCard/palette.ts"),_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./src/components/common/Toast/palette.ts"),_components_payment_PaymentCard_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/payment/PaymentCard/palette.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js"),PaletteProvider=function(_ref){var children=_ref.children,_abstract=_ref.abstract,skeleton=_ref.skeleton,mergedAbstractPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__.c)({},_constants__WEBPACK_IMPORTED_MODULE_1__.V),_abstract)},[_abstract]),mergedSkeletonPalette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__.c)({},(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_12__.k)(mergedAbstractPalette)),skeleton)},[mergedAbstractPalette,skeleton]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{skeleton:mergedSkeletonPalette,invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_13__.G)(mergedAbstractPalette),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_14__.a)(mergedAbstractPalette),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_3__.U)(mergedAbstractPalette),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_15__.A)(mergedAbstractPalette),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_4__.S)(mergedAbstractPalette),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_16__.W)(mergedAbstractPalette),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_5__.K)(mergedAbstractPalette),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_17__.a)(mergedAbstractPalette),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_6__.K)(mergedAbstractPalette),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_8__.o)(mergedAbstractPalette),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_18__.Q)(mergedAbstractPalette),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_19__.V)(mergedAbstractPalette),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_20__.W)(mergedAbstractPalette),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_7__.s)(mergedAbstractPalette),bgCard:(0,_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_21__.O)(mergedAbstractPalette),toast:(0,_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_22__.G)(mergedAbstractPalette),paymentCard:(0,_components_payment_PaymentCard_palette__WEBPACK_IMPORTED_MODULE_9__.W)(mergedAbstractPalette)}},[mergedSkeletonPalette,mergedAbstractPalette]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__.G.Provider,{value:value,children:children})};try{PaletteProvider.displayName="PaletteProvider",PaletteProvider.__docgenInfo={description:"",displayName:"PaletteProvider",props:{abstract:{defaultValue:null,description:"",name:"abstract",required:!1,type:{name:"Partial<TAbstractPalette>"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/palette/provider.tsx#PaletteProvider"]={docgenInfo:PaletteProvider.__docgenInfo,name:"PaletteProvider",path:"src/palette/provider.tsx#PaletteProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);