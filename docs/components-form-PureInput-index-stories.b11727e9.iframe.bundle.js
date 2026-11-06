"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[8768],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function toPrimitive(t,r){if("object"!=(0,esm_typeof.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.A)(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==(0,esm_typeof.A)(i)?i:i+""}},"./node_modules/@babel/runtime/helpers/esm/typeof.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_typeof});function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}},"./src/components/form/PureInput/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default});var meta={title:"form/PureInput",component:__webpack_require__("./src/components/form/PureInput/index.tsx").d,tags:["autodocs"]},Default={args:{paddingLeft:18,paddingRight:18,hasError:!1,inFocus:!1,hasBorder:!0,placeholder:"Введите текст",autoFocus:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: {
    paddingLeft: 18,
    paddingRight: 18,
    hasError: false,
    inFocus: false,
    hasBorder: true,
    placeholder: 'Введите текст',
    autoFocus: false
  }
}`,...Default.parameters?.docs?.source}}},__webpack_require__.d(__webpack_exports__,["__namedExportsOrder",0,["Default"],"default",0,meta])},"./src/breakpoints/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Typography/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>InputWithTypography,o:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    font-family: Roboto, sans-serif;

    `,`
`])),function(_ref){var $variant=_ref.$variant;return typography.I[$variant]}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","element"],_excluded2=["variant","element"],Typography=function Typography(_ref){var variant=_ref.variant,_ref$element=_ref.element,rest=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.A)({as:void 0===_ref$element?"div":_ref$element,$variant:variant},rest))},InputWithTypography=(0,react.forwardRef)(function(_ref2,ref){var variant=_ref2.variant,_ref2$element=_ref2.element,rest=(0,objectWithoutProperties.A)(_ref2,_excluded2);return(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.A)({ref:ref,as:void 0===_ref2$element?"input":_ref2$element,$variant:variant},rest))});Typography.displayName="Typography",InputWithTypography.displayName="InputWithTypography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5Desktop"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"labelsHintsRegular"'},{value:'"labelsHintsBold"'},{value:'"captionSRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},element:{defaultValue:{value:"input"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"button"'},{value:'"input"'},{value:'"textarea"'},{value:'"div"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"span"'}]}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Typography/index.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/common/Typography/index.tsx#Typography"})}catch{}},"./src/components/common/Typography/typography.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:()=>typography});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject0,_templateObject1,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/breakpoints/index.ts"),typography={headline1:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 34px;
        font-weight: 400;
        line-height: 42px;

        @media `,` {
            font-size: 30px;
            font-weight: 400;
            line-height: 48px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline2:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject2||(_templateObject2=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;

        @media `,` {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline3:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject3||(_templateObject3=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;

        @media `,` {
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline4:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject4||(_templateObject4=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;

        @media `,` {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline5Desktop:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject5||(_templateObject5=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    `]))),headline5:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject6||(_templateObject6=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

        @media `,` {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline6:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject7||(_templateObject7=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
    `]))),headerText:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject8||(_templateObject8=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;

        @media `,` {
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),buttonL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject9||(_templateObject9=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    `]))),bodyL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject0||(_templateObject0=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

        @media `,` {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),bodyLUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject1||(_templateObject1=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-decoration: underline;

        @media `,` {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            text-decoration: underline;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),buttonM:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject10||(_templateObject10=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    `]))),bodyMRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject11||(_templateObject11=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    `]))),bodyMBold:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject12||(_templateObject12=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
    `]))),bodyMUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject13||(_templateObject13=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-decoration: underline;
    `]))),captionRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject14||(_templateObject14=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
    `]))),labelsHintsRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject15||(_templateObject15=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    `]))),labelsHintsBold:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject16||(_templateObject16=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
    `]))),captionSRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject17||(_templateObject17=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
    `]))),captionUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject18||(_templateObject18=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        text-decoration: underline;
    `]))),smallMedium:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject19||(_templateObject19=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
    `]))),labelsAndHints:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject20||(_templateObject20=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    `])))}},"./src/components/form/PureInput/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:()=>PureInput});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/PureInput/styles.ts"),_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/palette/useComponentPalette.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["paddingLeft","paddingRight","paddingTop","paddingBottom","borderRadius","hasError","inFocus","hasBorder","isOnlyNumbers","className","onChange","element","variant","renderedValue","useModernStyles","id"],PureInput=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function(_ref,ref){var _ref$paddingLeft=_ref.paddingLeft,_ref$paddingRight=_ref.paddingRight,_ref$paddingTop=_ref.paddingTop,_ref$paddingBottom=_ref.paddingBottom,_ref$borderRadius=_ref.borderRadius,_ref$hasError=_ref.hasError,hasError=void 0!==_ref$hasError&&_ref$hasError,_ref$inFocus=_ref.inFocus,_ref$hasBorder=_ref.hasBorder,_ref$isOnlyNumbers=_ref.isOnlyNumbers,isOnlyNumbers=void 0!==_ref$isOnlyNumbers&&_ref$isOnlyNumbers,onChange=(_ref.className,_ref.onChange),_ref$element=_ref.element,_ref$variant=_ref.variant,renderedValue=_ref.renderedValue,_ref$useModernStyles=_ref.useModernStyles,useModernStyles=void 0!==_ref$useModernStyles&&_ref$useModernStyles,id=_ref.id,rest=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded),palette=(0,_palette__WEBPACK_IMPORTED_MODULE_4__.I)("pureInput"),fallbackId=(0,react__WEBPACK_IMPORTED_MODULE_2__.useId)(),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(event){var inputValue=event.target.value;event.target.value=isOnlyNumbers?inputValue.replace(/[^0-9]/g,""):inputValue,onChange&&onChange(event)},[isOnlyNumbers,onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.m,(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)((0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({ref:ref,variant:void 0===_ref$variant?"bodyMRegular":_ref$variant,element:renderedValue?"div":void 0===_ref$element?"input":_ref$element,$paddingLeft:void 0===_ref$paddingLeft?20:_ref$paddingLeft,$paddingRight:void 0===_ref$paddingRight?12:_ref$paddingRight,$paddingTop:void 0===_ref$paddingTop?13:_ref$paddingTop,$paddingBottom:void 0===_ref$paddingBottom?13:_ref$paddingBottom,$hasError:hasError,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,$hasBorder:(void 0===_ref$hasBorder||_ref$hasBorder)&&(!useModernStyles||hasError),$palette:palette,$borderRadius:void 0===_ref$borderRadius?10:_ref$borderRadius,onChange:handleChange,$useModernStyles:useModernStyles,id:null!=id?id:fallbackId},rest),{},{children:renderedValue}))});PureInput.displayName="PureInput";try{PureInput.displayName="PureInput",PureInput.__docgenInfo={description:"",displayName:"PureInput",props:{variant:{defaultValue:{value:"bodyMRegular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5Desktop"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"labelsHintsRegular"'},{value:'"labelsHintsBold"'},{value:'"captionSRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},paddingLeft:{defaultValue:{value:"20"},description:"",name:"paddingLeft",required:!1,type:{name:"number"}},paddingRight:{defaultValue:{value:"12"},description:"",name:"paddingRight",required:!1,type:{name:"number"}},paddingTop:{defaultValue:{value:"13"},description:"",name:"paddingTop",required:!1,type:{name:"number"}},paddingBottom:{defaultValue:{value:"13"},description:"",name:"paddingBottom",required:!1,type:{name:"number"}},borderRadius:{defaultValue:{value:"10"},description:"",name:"borderRadius",required:!1,type:{name:"number"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isOnlyNumbers:{defaultValue:{value:"false"},description:"",name:"isOnlyNumbers",required:!1,type:{name:"boolean"}},element:{defaultValue:{value:"input"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"textarea"'}]}},renderedValue:{defaultValue:null,description:"",name:"renderedValue",required:!1,type:{name:"ReactNode"}},useModernStyles:{defaultValue:{value:"false"},description:"",name:"useModernStyles",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/PureInput/index.tsx#PureInput"]={docgenInfo:PureInput.__docgenInfo,name:"PureInput",path:"src/components/form/PureInput/index.tsx#PureInput"})}catch{}},"./src/components/form/PureInput/styles.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:()=>Wrapper,q:()=>getPureInputStyled});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_reducedMotion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/reducedMotion.ts"),_common_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Typography/index.tsx"),_common_Typography_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Typography/typography.ts"),getPureInputStyled=function getPureInputStyled(component){return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(component)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
    `,`

    resize: none;
    color: `,`;
    border-radius: `,`px;
    border: none;
    width: 100%;
    text-overflow: ellipsis;
    background-color: `,`;
    transition: all 0.2s ease-in-out 0s;
    box-sizing: border-box;
    padding-right: `,`px;
    padding-left: `,`px;
    padding-top: `,`px;
    padding-bottom: `,`px;
    outline: 1px solid
        `,`;

    &::placeholder {
        color: `,`;
    }

    /*
        Убирает браузерные стрелочки вверх/вниз
        у инпута с типом number
    */

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type='number'] {
        -moz-appearance: textfield;
    }

    /* 
        Если пользователь заполнил поле при помощи браузерного автокомплита, то меняется цвет фона и шрифта
        Чтобы этого не происходило существует этот хак
    */

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        transition:
            background-color 0s 600000s,
            color 0s 600000s !important;
    }

    `,`
`])),function(_ref){var $variant=_ref.$variant;return $variant&&_common_Typography_typography__WEBPACK_IMPORTED_MODULE_4__.I[$variant]},function(_ref2){return _ref2.$palette.text},function(_ref3){return _ref3.$borderRadius},function(_ref4){var $palette=_ref4.$palette;return _ref4.$useModernStyles?$palette.bgOpened:$palette.bg},function(_ref5){return _ref5.$paddingRight},function(_ref6){return _ref6.$paddingLeft},function(_ref7){return _ref7.$paddingTop},function(_ref8){return _ref8.$paddingBottom},function(_ref9){var $hasError=_ref9.$hasError,$inFocus=_ref9.$inFocus,$hasBorder=_ref9.$hasBorder,$palette=_ref9.$palette;return $hasBorder?$hasError?$palette.error:$inFocus?$palette.borderFocus:$palette.border:"transparent"},function(_ref0){return _ref0.$palette.placeholder},_utils_reducedMotion__WEBPACK_IMPORTED_MODULE_2__.V)},Wrapper=getPureInputStyled(_common_Typography__WEBPACK_IMPORTED_MODULE_3__.a)},"./src/utils/reducedMotion.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>reducedMotion});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),reducedMotion=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
    @media (prefers-reduced-motion: reduce) {
        &,
        &::before,
        &::after,
        &::placeholder {
            transition: none;
            animation: none;
        }
    }
`])))}}]);
//# sourceMappingURL=components-form-PureInput-index-stories.b11727e9.iframe.bundle.js.map