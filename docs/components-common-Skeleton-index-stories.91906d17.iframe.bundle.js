"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[6926],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function toPrimitive(t,r){if("object"!=(0,esm_typeof.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.A)(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==(0,esm_typeof.A)(i)?i:i+""}},"./node_modules/@babel/runtime/helpers/esm/typeof.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_typeof});function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}},"./src/components/common/Skeleton/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ByContainer:()=>ByContainer,ByOwnSize:()=>ByOwnSize,Shapes:()=>Shapes,WithShowDelay:()=>WithShowDelay});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Skeleton/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"common/Skeleton",component:___WEBPACK_IMPORTED_MODULE_2__.E,tags:["autodocs"]},ByContainer={render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:200,height:100},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.E,(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({},props))})}},ByOwnSize={args:{width:"200px",height:"100px"}},Shapes={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{width:320,display:"flex",flexDirection:"column",gap:12},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.E,{circle:!0,height:36}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.E,{height:14,borderRadius:4})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.E,{height:56}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.E,{height:36,width:132,borderRadius:20})]})}},WithShowDelay={args:{width:200,height:56,showDelay:180}};ByContainer.parameters={...ByContainer.parameters,docs:{...ByContainer.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    width: 200,
    height: 100
  }}>
            <Skeleton {...props} />
        </div>
}`,...ByContainer.parameters?.docs?.source}}},ByOwnSize.parameters={...ByOwnSize.parameters,docs:{...ByOwnSize.parameters?.docs,source:{originalSource:`{
  args: {
    width: '200px',
    height: '100px'
  }
}`,...ByOwnSize.parameters?.docs?.source}}},Shapes.parameters={...Shapes.parameters,docs:{...Shapes.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
            <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
                <Skeleton circle height={36} />
                <Skeleton height={14} borderRadius={4} />
            </div>
            <Skeleton height={56} />
            <Skeleton height={36} width={132} borderRadius={20} />
        </div>
}`,...Shapes.parameters?.docs?.source},description:{story:"Строки текста, поле и кнопка: скругление по месту, как в личном кабинете",...Shapes.parameters?.docs?.description}}},WithShowDelay.parameters={...WithShowDelay.parameters,docs:{...WithShowDelay.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 56,
    showDelay: 180
  }
}`,...WithShowDelay.parameters?.docs?.source},description:{story:"Плашка появляется через 180 мс: на быстром ответе её не видно",...WithShowDelay.parameters?.docs?.description}}};try{Shapes.displayName="Shapes",Shapes.__docgenInfo={description:"Строки текста, поле и кнопка: скругление по месту, как в личном кабинете",displayName:"Shapes",props:{}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Skeleton/index.stories.tsx#Shapes"]={docgenInfo:Shapes.__docgenInfo,name:"Shapes",path:"src/components/common/Skeleton/index.stories.tsx#Shapes"})}catch{}try{WithShowDelay.displayName="WithShowDelay",WithShowDelay.__docgenInfo={description:"Плашка появляется через 180 мс: на быстром ответе её не видно",displayName:"WithShowDelay",props:{}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Skeleton/index.stories.tsx#WithShowDelay"]={docgenInfo:WithShowDelay.__docgenInfo,name:"WithShowDelay",path:"src/components/common/Skeleton/index.stories.tsx#WithShowDelay"})}catch{}__webpack_require__.d(__webpack_exports__,["__namedExportsOrder",0,["ByContainer","ByOwnSize","Shapes","WithShowDelay"],"default",0,meta])},"./src/components/common/Skeleton/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),shine=(0,styled_components_browser_esm.i7)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    from {
        background-position: -200px 0;
    }
    to {
        background-position: calc(200px + 100%) 0;
    }
`]))),appear=(0,styled_components_browser_esm.i7)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    to {
        visibility: visible;
    }
`]))),Wrapper=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    width: `,`;
    height: `,`;
    border-radius: `,`;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background: `,`;

    /* Задержка показа — не движение: при \xabУменьшении движения\xbb она остаётся, иначе плашка не появится */
    `,`
`])),function(_ref){return _ref.$width},function(_ref2){return _ref2.$height},function(_ref3){return _ref3.$borderRadius},function(_ref4){return _ref4.$palette.bg},function(_ref5){var $showDelay=_ref5.$showDelay;return $showDelay>0&&(0,styled_components_browser_esm.AH)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
            visibility: hidden;
            animation: `," 0s linear ",`ms forwards;
        `])),appear,$showDelay)}),Inner=styled_components_browser_esm.Ay.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        90deg,
        `,`,
        `,`,
        `,`
    );
    background-size: 200px 100%;
    background-repeat: no-repeat;
    animation: `,` 1.2s ease-in-out infinite;
    `,`
`])),function(_ref6){return _ref6.$palette.bg},function(_ref7){return _ref7.$palette.flicker},function(_ref8){return _ref8.$palette.bg},shine,reducedMotion.V),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),toCssSize=function toCssSize(value){return"number"==typeof value?"".concat(value,"px"):value},Skeleton=function Skeleton(_ref){var _ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?"100%":_ref$height,_ref$borderRadius=_ref.borderRadius,_ref$circle=_ref.circle,circle=void 0!==_ref$circle&&_ref$circle,_ref$showDelay=_ref.showDelay,palette=_ref.palette,mergedPalette=(0,useComponentPalette.I)("skeleton",palette);return(0,jsx_runtime.jsx)(Wrapper,{"aria-hidden":!0,$width:toCssSize(circle&&"100%"===width?height:width),$height:toCssSize(height),$borderRadius:circle?"50%":"".concat(void 0===_ref$borderRadius?10:_ref$borderRadius,"px"),$showDelay:void 0===_ref$showDelay?0:_ref$showDelay,$palette:mergedPalette,children:(0,jsx_runtime.jsx)(Inner,{$palette:mergedPalette})})};try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"Плашка скелетона. Сама по себе декорация (`aria-hidden`): факт загрузки объявляет\nодин статус рядом с группой плашек",displayName:"Skeleton",props:{width:{defaultValue:{value:"100%"},description:"число — пиксели, строка — как есть: `'100%'`, `'72px'`",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"100%"},description:"",name:"height",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"10"},description:"скругление в пикселях: 4 у строк текста, 10 у полей, 20 у кнопок и карточек",name:"borderRadius",required:!1,type:{name:"number"}},circle:{defaultValue:{value:"false"},description:"круг: аватар, значок строки; ширина берётся из высоты",name:"circle",required:!1,type:{name:"boolean"}},showDelay:{defaultValue:{value:"0"},description:`Через сколько миллисекунд плашка становится видимой. Место под ней занято сразу.
В личном кабинете 180: на быстром ответе плашек не видно вовсе`,name:"showDelay",required:!1,type:{name:"number"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Skeleton/index.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/common/Skeleton/index.tsx#Skeleton"})}catch{}},"./src/utils/reducedMotion.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>reducedMotion});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),reducedMotion=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
//# sourceMappingURL=components-common-Skeleton-index-stories.91906d17.iframe.bundle.js.map