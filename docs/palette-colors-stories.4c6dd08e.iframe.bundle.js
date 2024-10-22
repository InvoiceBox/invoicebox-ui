"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[1145],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey})},"./src/palette/colors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:()=>Docs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_components_common_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Typography/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"palette/Colors"};var Docs={render:function render(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:30},children:Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__.V).map(function(key){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:20},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{backgroundColor:_constants__WEBPACK_IMPORTED_MODULE_1__.V[key],width:40,height:40,borderRadius:"50%"}}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_common_Typography__WEBPACK_IMPORTED_MODULE_2__.o,{variant:"bodyL",children:[key," ",_constants__WEBPACK_IMPORTED_MODULE_1__.V[key]]})]},key)})})}};Docs.parameters={...Docs.parameters,docs:{...Docs.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: 30\n  }}>\n            {Object.keys(defaultAbstractPalette).map(key => <div key={key} style={{\n      display: 'flex',\n      alignItems: 'center',\n      gap: 20\n    }}>\n                    <div style={{\n        backgroundColor: defaultAbstractPalette[key as keyof typeof defaultAbstractPalette],\n        width: 40,\n        height: 40,\n        borderRadius: '50%'\n      }} />\n                    <Typography variant=\"bodyL\">\n                        {key} {defaultAbstractPalette[key as keyof typeof defaultAbstractPalette]}\n                    </Typography>\n                </div>)}\n        </div>\n}",...Docs.parameters?.docs?.source}}};let __namedExportsOrder=["Docs"]},"./src/breakpoints/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Typography/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    font-family: Roboto, sans-serif;\n\n    ","\n"])),function(_ref){var $variant=_ref.$variant;return typography.I[$variant]}),useCss=__webpack_require__("./src/hooks/useCss/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","element"],Typography=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var variant=_ref.variant,_ref$element=_ref.element,rest=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,useCss.R)({id:"INVOICEBOX_UI_TYPOGRAPHY",css:"@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.A)({ref:ref,as:void 0===_ref$element?"div":_ref$element,$variant:variant},rest))});Typography.displayName="Typography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"captionSRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},element:{defaultValue:{value:"div"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"div"'},{value:'"p"'},{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"input"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Typography/index.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/common/Typography/index.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Typography/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>typography});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/breakpoints/index.ts"),typography={headline1:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject||(_templateObject=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 34px;\n        font-weight: 400;\n        line-height: 42px;\n\n        @media "," {\n            font-size: 30px;\n            font-weight: 400;\n            line-height: 48px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline2:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject2||(_templateObject2=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 24px;\n        font-weight: 400;\n        line-height: 32px;\n\n        @media "," {\n            font-size: 20px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline3:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject3||(_templateObject3=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px;\n\n        @media "," {\n            font-size: 18px;\n            font-weight: 400;\n            line-height: 22px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline4:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject4||(_templateObject4=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 18px;\n        font-weight: 400;\n        line-height: 22px;\n\n        @media "," {\n            font-size: 16px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline5:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject5||(_templateObject5=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 20px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),headline6:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject6||(_templateObject6=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 20px;\n    "]))),headerText:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject7||(_templateObject7=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 15px;\n        font-weight: 500;\n        line-height: 20px;\n\n        @media "," {\n            font-size: 18px;\n            font-weight: 500;\n            line-height: 26px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),buttonL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject8||(_templateObject8=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 24px;\n    "]))),bodyL:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject9||(_templateObject9=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 24px;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),bodyLUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject10||(_templateObject10=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n        text-decoration: underline;\n\n        @media "," {\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 20px;\n            text-decoration: underline;\n        }\n    "])),_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm),buttonM:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject11||(_templateObject11=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n    "]))),bodyMRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject12||(_templateObject12=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n    "]))),bodyMBold:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject13||(_templateObject13=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n    "]))),bodyMUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject14||(_templateObject14=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n        text-decoration: underline;\n    "]))),captionRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject15||(_templateObject15=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 18px;\n    "]))),captionSRegular:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject16||(_templateObject16=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 10px;\n        font-weight: 400;\n        line-height: 16px;\n    "]))),captionUnderlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject17||(_templateObject17=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 18px;\n        text-decoration: underline;\n    "]))),smallMedium:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject18||(_templateObject18=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 12px;\n        font-weight: 500;\n        line-height: 16px;\n    "]))),labelsAndHints:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject19||(_templateObject19=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 16px;\n    "])))}},"./src/hooks/useCss/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useCss});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),stylesInDOM=new Map,useCss=function useCss(_ref){var id=_ref.id,css=_ref.css,append=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){if(!stylesInDOM.has(id)){var style=document.createElement("style");style.type="text/css",style.innerHTML=css,document.head.appendChild(style),stylesInDOM.set(id,style)}},[id,css]),clear=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){var style=stylesInDOM.get(id);style&&(document.head.removeChild(style),stylesInDOM.delete(id))},[id]);append(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return append(),clear},[append,clear])};try{useCss.displayName="useCss",useCss.__docgenInfo={description:"",displayName:"useCss",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useCss/index.tsx#useCss"]={docgenInfo:useCss.__docgenInfo,name:"useCss",path:"src/hooks/useCss/index.tsx#useCss"})}catch(__react_docgen_typescript_loader_error){}},"./src/palette/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>defaultAbstractPalette});var defaultAbstractPalette={primary:"#353F47",secondary:"#FAD247",base:"#FFFFFF",error:"#EB5757",neutralLight:"#f9f9f9",neutralUsual:"#f1f2f6",neutralHeavy:"#ececf0",neutralMassive:"#dee0e7",neutralFoggy:"#ccc",neutralBrutal:"#999"}}}]);