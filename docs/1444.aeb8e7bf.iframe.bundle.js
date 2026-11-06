"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[1444],{"./src/breakpoints/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Typography/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>InputWithTypography,o:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
    `])))}},"./src/components/form/InputLabel/constants.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:()=>LABEL_PADDING});var LABEL_PADDING=10},"./src/components/form/InputLabel/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:()=>InputLabel}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),constants=__webpack_require__("./src/components/form/InputLabel/constants.ts"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),labelFadeIn=(0,styled_components_browser_esm.i7)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    from {
        opacity: 0;
        transform: translateY(4px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`]))),Label=(0,styled_components_browser_esm.Ay)(Typography.o)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    border-radius: 10px;
    position: absolute;
    top: `,`;
    left: `,`;
    background-color: `,`;
    padding: 0 `,`px;
    z-index: 2;
    transition: color 0.2s ease-in-out 0s;
    animation: `,` 0.15s ease;
    color: `,`;
    `,`

    `,`
`])),function(_ref){var $top=_ref.$top;return $top?"".concat($top,"px"):0},function(_ref2){var $left=_ref2.$left;return"number"==typeof $left?"".concat($left,"px"):"10px"},function(_ref3){var $palette=_ref3.$palette;return _ref3.$useModernStyles?"none":$palette.bg},constants.h,labelFadeIn,function(_ref4){var $inFocus=_ref4.$inFocus,$palette=_ref4.$palette;return $inFocus?$palette.textHighlight:$palette.text},reducedMotion.V,function(_ref5){var $required=_ref5.$required,$palette=_ref5.$palette;return $required&&(0,styled_components_browser_esm.AH)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
      &::after {
        content: " *";
        color: `,`;
    `])),function(){return $palette.error})}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
    position: relative;
    width: 100%;
    opacity: `,`;
    margin-top: `,`px;
    padding-top: `,`px;

    &:hover `,` {
        `,`;
    }
`])),function(_ref6){return _ref6.$disabled?.5:1},function(_ref7){return _ref7.$marginTop||0},function(_ref8){return _ref8.$paddingTop},Label,function(_ref9){var $disabled=_ref9.$disabled,$palette=_ref9.$palette;return!$disabled&&(0,styled_components_browser_esm.AH)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)([`
                color: `,`;
            `])),$palette.textHighlight)}),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),form_constants=__webpack_require__("./src/components/form/constants.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputLabel=function InputLabel(_ref){var _ref$disabled=_ref.disabled,label=_ref.label,_ref$inFocus=_ref.inFocus,children=_ref.children,_ref$required=_ref.required,_ref$useModernStyles=_ref.useModernStyles,useModernStyles=void 0!==_ref$useModernStyles&&_ref$useModernStyles,_ref$size=_ref.size,size=void 0===_ref$size?"M":_ref$size,left=_ref.left,htmlFor=_ref.htmlFor,palette=(0,useComponentPalette.I)("inputLabel");return(0,jsx_runtime.jsxs)(Wrapper,{$palette:palette,$disabled:void 0!==_ref$disabled&&_ref$disabled,$isLabel:!!label,$useModernStyles:useModernStyles,$marginTop:useModernStyles&&form_constants.Q[size].$labelPaddingTop<0&&label?-form_constants.Q[size].$labelPaddingTop:void 0,$paddingTop:10*!useModernStyles,children:[label&&(0,jsx_runtime.jsx)(Label,{element:"label",htmlFor:htmlFor,$palette:palette,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,variant:size&&useModernStyles?form_constants.Q[size].$labelVariant:"captionRegular",$required:void 0!==_ref$required&&_ref$required,$useModernStyles:useModernStyles,$top:useModernStyles?form_constants.Q[size].$labelPaddingTop:0,$left:left,children:label}),children]})};try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}},useModernStyles:{defaultValue:{value:"false"},description:"",name:"useModernStyles",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'},{value:'"XS"'}]}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"number"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputLabel/index.tsx#InputLabel"]={docgenInfo:InputLabel.__docgenInfo,name:"InputLabel",path:"src/components/form/InputLabel/index.tsx#InputLabel"})}catch{}},"./src/components/form/ModernPlaceholder/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:()=>ModernPlaceholder}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),Wrapper=(0,styled_components_browser_esm.Ay)(Typography.o)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    `,`
    padding-left: `,`px;
    padding-right: `,`px;
    padding-top: `,`px;
    pointer-events: none;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    opacity: `,`;
    transform: translateY(`,`);
    transition:
        opacity 0.15s ease,
        transform 0.15s ease;
    color: `,`;
    `,`
`])),function(_ref){return _ref.$multiline?"bottom: 0;":""},function(_ref2){return _ref2.$paddingLeft},function(_ref3){return _ref3.$paddingRight},function(_ref4){return _ref4.$paddingTop},function(_ref5){return+!!_ref5.$visible},function(_ref6){return _ref6.$visible?"0px":"-6px"},function(_ref7){return _ref7.$color},reducedMotion.V),TextContent=styled_components_browser_esm.Ay.span(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    min-width: 0;
    overflow: hidden;
    `,`
`])),function(_ref8){return _ref8.$multiline?`
        white-space: pre-wrap;
        overflow-wrap: anywhere;
    `:`
        text-overflow: ellipsis;
        white-space: nowrap;
    `}),Star=styled_components_browser_esm.Ay.span(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    color: `,`;
    margin-left: 4px;
    flex-shrink: 0;
`])),function(_ref9){return _ref9.$color}),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),constants=__webpack_require__("./src/components/form/constants.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModernPlaceholder=function ModernPlaceholder(_ref){var visible=_ref.visible,_ref$paddingLeft=_ref.paddingLeft,_ref$paddingRight=_ref.paddingRight,paddingTop=_ref.paddingTop,size=_ref.size,_ref$required=_ref.required,_ref$multiline=_ref.multiline,multiline=void 0!==_ref$multiline&&_ref$multiline,children=_ref.children,pureInputPalette=(0,useComponentPalette.I)("pureInput"),inputLabelPalette=(0,useComponentPalette.I)("inputLabel");return(0,jsx_runtime.jsxs)(Wrapper,{variant:constants.Q[size].variant,$visible:visible,$paddingLeft:void 0===_ref$paddingLeft?20:_ref$paddingLeft,$paddingRight:void 0===_ref$paddingRight?12:_ref$paddingRight,$paddingTop:paddingTop,$color:pureInputPalette.placeholder,$multiline:multiline,children:[(0,jsx_runtime.jsx)(TextContent,{$multiline:multiline,children:children}),void 0!==_ref$required&&_ref$required&&(0,jsx_runtime.jsx)(Star,{$color:inputLabelPalette.error,children:"*"})]})};try{ModernPlaceholder.displayName="ModernPlaceholder",ModernPlaceholder.__docgenInfo={description:"",displayName:"ModernPlaceholder",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},paddingLeft:{defaultValue:{value:"20"},description:"",name:"paddingLeft",required:!1,type:{name:"number"}},paddingRight:{defaultValue:{value:"12"},description:"",name:"paddingRight",required:!1,type:{name:"number"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'},{value:'"XS"'}]}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},multiline:{defaultValue:{value:"false"},description:"",name:"multiline",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/ModernPlaceholder/index.tsx#ModernPlaceholder"]={docgenInfo:ModernPlaceholder.__docgenInfo,name:"ModernPlaceholder",path:"src/components/form/ModernPlaceholder/index.tsx#ModernPlaceholder"})}catch{}},"./src/components/form/PureInput/styles.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:()=>Wrapper,q:()=>getPureInputStyled});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_reducedMotion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/reducedMotion.ts"),_common_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Typography/index.tsx"),_common_Typography_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Typography/typography.ts"),getPureInputStyled=function getPureInputStyled(component){return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(component)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
`])),function(_ref){var $variant=_ref.$variant;return $variant&&_common_Typography_typography__WEBPACK_IMPORTED_MODULE_4__.I[$variant]},function(_ref2){return _ref2.$palette.text},function(_ref3){return _ref3.$borderRadius},function(_ref4){var $palette=_ref4.$palette;return _ref4.$useModernStyles?$palette.bgOpened:$palette.bg},function(_ref5){return _ref5.$paddingRight},function(_ref6){return _ref6.$paddingLeft},function(_ref7){return _ref7.$paddingTop},function(_ref8){return _ref8.$paddingBottom},function(_ref9){var $hasError=_ref9.$hasError,$inFocus=_ref9.$inFocus,$hasBorder=_ref9.$hasBorder,$palette=_ref9.$palette;return $hasBorder?$hasError?$palette.error:$inFocus?$palette.borderFocus:$palette.border:"transparent"},function(_ref0){return _ref0.$palette.placeholder},_utils_reducedMotion__WEBPACK_IMPORTED_MODULE_2__.V)},Wrapper=getPureInputStyled(_common_Typography__WEBPACK_IMPORTED_MODULE_3__.a)},"./src/components/form/_hooks/useInputStyles.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:()=>useInputStyles});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/constants.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_ModernPlaceholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/ModernPlaceholder/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useInputStyles=function useInputStyles(_ref){var inFocus=_ref.inFocus,useModernStyles=_ref.useModernStyles,label=_ref.label,size=_ref.size,placeholder=_ref.placeholder,isHaveValue=_ref.isHaveValue,required=_ref.required,_ref$conditionHideMod=_ref.conditionHideModernPlaceholder,paddingRight=_ref.paddingRight,_ref$multiline=_ref.multiline,isHideModernPlaceholder=isHaveValue||inFocus||void 0!==_ref$conditionHideMod&&_ref$conditionHideMod,fieldSize=useModernStyles&&!size?"L":size||"M",inputLabel=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function(){return useModernStyles?isHideModernPlaceholder?label:void 0:label},[useModernStyles,isHideModernPlaceholder,label]),paddingAndVariantOptions=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function(){return useModernStyles?isHideModernPlaceholder&&label?_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize]:(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)((0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({},_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize]),{},{paddingTop:_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize].$placeholderPaddingTop,paddingBottom:_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize].$placeholderPaddingTop}):_constants__WEBPACK_IMPORTED_MODULE_1__.U[fieldSize]},[useModernStyles,isHideModernPlaceholder,fieldSize,label]),modernInputPlaceholder=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function(){return placeholder||label},[label,placeholder]),modernPlaceholder=useModernStyles&&modernInputPlaceholder&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ModernPlaceholder__WEBPACK_IMPORTED_MODULE_3__.X,{visible:!isHideModernPlaceholder,paddingTop:_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize].$placeholderPaddingTop,paddingRight:paddingRight,size:fieldSize,required:required,multiline:void 0!==_ref$multiline&&_ref$multiline,children:modernInputPlaceholder});return{inputLabel:inputLabel,paddingAndVariantOptions:paddingAndVariantOptions,modernInputPlaceholder:modernInputPlaceholder,isHideModernPlaceholder:isHideModernPlaceholder,modernPlaceholder:modernPlaceholder,fieldSize:fieldSize}};try{useInputStyles.displayName="useInputStyles",useInputStyles.__docgenInfo={description:"",displayName:"useInputStyles",props:{inFocus:{defaultValue:null,description:"",name:"inFocus",required:!0,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'},{value:'"XS"'}]}},isHaveValue:{defaultValue:null,description:"",name:"isHaveValue",required:!0,type:{name:"boolean"}},useModernStyles:{defaultValue:null,description:"",name:"useModernStyles",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},conditionHideModernPlaceholder:{defaultValue:{value:"false"},description:"",name:"conditionHideModernPlaceholder",required:!1,type:{name:"boolean"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"number"}},multiline:{defaultValue:{value:"false"},description:"",name:"multiline",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/_hooks/useInputStyles.tsx#useInputStyles"]={docgenInfo:useInputStyles.__docgenInfo,name:"useInputStyles",path:"src/components/form/_hooks/useInputStyles.tsx#useInputStyles"})}catch{}},"./src/components/form/constants.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:()=>MODERN_STYLE_SIZE_PARAMS_MAP,U:()=>SIZE_PARAMS_MAP});var SIZE_PARAMS_MAP={L:{paddingTop:16,paddingBottom:16,variant:"bodyMRegular"},M:{paddingTop:13,paddingBottom:13,variant:"bodyMRegular"},XS:{paddingTop:10,paddingBottom:10,variant:"labelsHintsRegular"}},MODERN_STYLE_SIZE_PARAMS_MAP={L:{paddingTop:24,paddingBottom:8,variant:"headline5Desktop",$labelVariant:"labelsHintsRegular",$labelPaddingTop:8,$placeholderPaddingTop:16},M:{paddingTop:20,paddingBottom:4,variant:"bodyL",$labelVariant:"labelsHintsRegular",$labelPaddingTop:4,$placeholderPaddingTop:12},XS:{paddingTop:6,paddingBottom:6,variant:"headline5Desktop",$labelVariant:"labelsHintsRegular",$labelPaddingTop:-18,$placeholderPaddingTop:6}}},"./src/utils/reducedMotion.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>reducedMotion});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),reducedMotion=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
//# sourceMappingURL=1444.aeb8e7bf.iframe.bundle.js.map