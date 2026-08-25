"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[7501],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function toPrimitive(t,r){if("object"!=(0,esm_typeof.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.A)(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==(0,esm_typeof.A)(i)?i:i+""}},"./node_modules/@babel/runtime/helpers/esm/typeof.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_typeof});function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}},"./src/components/common/Chip/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default});var meta={title:"common/Chip",component:__webpack_require__("./src/components/common/Chip/index.tsx").v,tags:["autodocs"]},Default={args:{label:"Название",color:"blue",bgColor:"red"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Название',
    color: 'blue',
    bgColor: 'red'
  }
}`,...Default.parameters?.docs?.source}}},__webpack_require__.d(__webpack_exports__,["__namedExportsOrder",0,["Default"],"default",0,meta])},"./src/breakpoints/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Chip/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:()=>Chip}),__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),CHIP_PADDING_MAP={xxs:"0 4px",xs:"4px 6px"},Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: `,`;
    color: `,`;
    background-color: `,`;
    border-radius: 6px;
    white-space: nowrap;
`])),function(_ref){return CHIP_PADDING_MAP[_ref.$size]},function(_ref2){return _ref2.$color},function(_ref3){return _ref3.$backgroundColor}),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Chip=function Chip(_ref){var label=_ref.label,bgColor=_ref.bgColor,color=_ref.color,_ref$size=_ref.size;return(0,jsx_runtime.jsx)(Wrapper,{$color:color,$backgroundColor:bgColor,$size:void 0===_ref$size?"xs":_ref$size,children:"string"==typeof label?(0,jsx_runtime.jsx)(Typography.o,{variant:"smallMedium",children:label}):label})};try{Chip.displayName="Chip",Chip.__docgenInfo={description:"",displayName:"Chip",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'}]}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Chip/index.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/components/common/Chip/index.tsx#Chip"})}catch{}},"./src/components/common/Typography/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>InputWithTypography,o:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    font-family: Roboto, sans-serif;

    `,`
`])),function(_ref){var $variant=_ref.$variant;return typography.I[$variant]}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","element"],_excluded2=["variant","element"],Typography=function Typography(_ref){var variant=_ref.variant,_ref$element=_ref.element,rest=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.A)({as:void 0===_ref$element?"div":_ref$element,$variant:variant},rest))},InputWithTypography=(0,react.forwardRef)(function(_ref2,ref){var variant=_ref2.variant,_ref2$element=_ref2.element,rest=(0,objectWithoutProperties.A)(_ref2,_excluded2);return(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.A)({ref:ref,as:void 0===_ref2$element?"input":_ref2$element,$variant:variant},rest))});Typography.displayName="Typography",InputWithTypography.displayName="InputWithTypography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5Desktop"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"labelsHintsRegular"'},{value:'"labelsHintsBold"'},{value:'"captionSRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},element:{defaultValue:{value:"input"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"button"'},{value:'"input"'},{value:'"textarea"'},{value:'"div"'},{value:'"p"'},{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Typography/index.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/common/Typography/index.tsx#Typography"})}catch{}},"./src/components/common/Typography/typography.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:()=>typography});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,_templateObject21,_templateObject22,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/breakpoints/index.ts"),typography={headline1:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 34px;
        font-weight: 400;
        line-height: 42px;

        @media `,` {
            font-size: 30px;
            font-weight: 400;
            line-height: 48px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline2:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject2||(_templateObject2=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;

        @media `,` {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline3:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject3||(_templateObject3=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;

        @media `,` {
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline4:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject4||(_templateObject4=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;

        @media `,` {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline5Desktop:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject5||(_templateObject5=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    `]))),headline5:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject6||(_templateObject6=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

        @media `,` {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),headline6:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject7||(_templateObject7=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
    `]))),headerText:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject8||(_templateObject8=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;

        @media `,` {
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),buttonL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject9||(_templateObject9=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    `]))),bodyL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject10||(_templateObject10=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

        @media `,` {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),bodyLUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject11||(_templateObject11=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
    `])),_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm),buttonM:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject12||(_templateObject12=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    `]))),bodyMRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject13||(_templateObject13=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    `]))),bodyMBold:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject14||(_templateObject14=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
    `]))),bodyMUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject15||(_templateObject15=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-decoration: underline;
    `]))),captionRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject16||(_templateObject16=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
    `]))),labelsHintsRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject17||(_templateObject17=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    `]))),labelsHintsBold:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject18||(_templateObject18=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
    `]))),captionSRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject19||(_templateObject19=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
    `]))),captionUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject20||(_templateObject20=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        text-decoration: underline;
    `]))),smallMedium:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject21||(_templateObject21=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
    `]))),labelsAndHints:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject22||(_templateObject22=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    `])))}}}]);
//# sourceMappingURL=components-common-Chip-index-stories.e4a01a42.iframe.bundle.js.map