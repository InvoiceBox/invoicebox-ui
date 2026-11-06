"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[1187],{"./src/breakpoints/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/AdaptiveModalDrawer/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:()=>AdaptiveModalDrawer});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useMedia/index.ts"),_Drawer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Drawer/index.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Modal/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AdaptiveModalDrawer=function AdaptiveModalDrawer(_ref){var children=_ref.children,isOpen=_ref.isOpen,onClose=_ref.onClose,drawerProps=_ref.drawerProps,modalProps=_ref.modalProps;return(0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__.Iu)()?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Drawer__WEBPACK_IMPORTED_MODULE_3__._,(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)((0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({onClose:onClose,isOpen:isOpen},drawerProps),{},{children:children})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_4__.a,(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)((0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({onClose:onClose,isOpen:isOpen},modalProps),{},{children:children}))};try{AdaptiveModalDrawer.displayName="AdaptiveModalDrawer",AdaptiveModalDrawer.__docgenInfo={description:"Модалка на десктопе и шторка (Drawer) на мобильных. Скролл фона блокируют сами Modal и Drawer.",displayName:"AdaptiveModalDrawer",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},drawerProps:{defaultValue:null,description:"",name:"drawerProps",required:!1,type:{name:'Omit<TProps, "children" | "isOpen" | "onClose">'}},modalProps:{defaultValue:null,description:"",name:"modalProps",required:!1,type:{name:'Omit<TProps, "children" | "isOpen" | "onClose">'}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/AdaptiveModalDrawer/index.tsx#AdaptiveModalDrawer"]={docgenInfo:AdaptiveModalDrawer.__docgenInfo,name:"AdaptiveModalDrawer",path:"src/components/common/AdaptiveModalDrawer/index.tsx#AdaptiveModalDrawer"})}catch{}},"./src/components/common/Drawer/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:()=>Drawer});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject0,_templateObject1,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),Root=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`]))),Backdrop=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    inset: 0;
    background-color: `,`;
    opacity: `,`;
    transition: opacity 300ms ease;
    `,`
`])),function(_ref){return _ref.$bgColor},function(_ref2){return+!!_ref2.$isVisible},reducedMotion.V),Sheet=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    position: relative;
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border-radius: 10px 10px 0 0;
    will-change: transform;
    transition: transform 300ms cubic-bezier(0.32, 0.72, 0, 1);

    `,`

    `,`

    `,`

    `,`
`])),function(_ref3){return _ref3.$isDragging&&(0,styled_components_browser_esm.AH)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
            transition: none;
        `])))},function(_ref4){var $isErrorBorder=_ref4.$isErrorBorder,$errorColor=_ref4.$errorColor,$borderColor=_ref4.$borderColor;return($isErrorBorder||$borderColor)&&(0,styled_components_browser_esm.AH)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)([`
            border-top: 2px solid `,`;
        `])),$borderColor||$errorColor)},function(_ref5){return"visible"===_ref5.$overflow?(0,styled_components_browser_esm.AH)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.A)([`
                  overflow: visible;
              `]))):(0,styled_components_browser_esm.AH)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.A)([`
                  overflow-y: auto;
              `])))},reducedMotion.V),DragHandle=styled_components_browser_esm.Ay.div(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 28px;
    z-index: 1;
    touch-action: none;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`]))),DragIndicator=styled_components_browser_esm.Ay.div(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    border-radius: 99px;
    background-color: rgba(53, 63, 71, 0.2);
`]))),Title=styled_components_browser_esm.Ay.div(_templateObject0||(_templateObject0=(0,taggedTemplateLiteral.A)([`
    background-color: `,`;
    padding: 30px;
    position: relative;
    text-align: center;
`])),function(_ref6){return _ref6.$bg}),ChildrenWrapper=styled_components_browser_esm.Ay.div(_templateObject1||(_templateObject1=(0,taggedTemplateLiteral.A)([`
    `,`;
    background-color: `,`;
`])),function(_ref7){return _ref7.$isPadding&&"padding: 32px 16px 36px"},function(_ref8){return _ref8.$bgColor}),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),useLockBodyScroll=__webpack_require__("./src/hooks/useLockBodyScroll/index.ts"),ErrorBoundary=__webpack_require__("./src/components/common/ErrorBoundary/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Drawer=function Drawer(_ref){var isOpen=_ref.isOpen,children=_ref.children,title=_ref.title,isErrorBorder=_ref.isErrorBorder,onClose=_ref.onClose,_ref$isPadding=_ref.isPadding,borderColor=_ref.borderColor,overflow=_ref.overflow,onOpenEnd=_ref.onOpenEnd,palette=(0,useComponentPalette.I)("drawer"),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),shouldRender=_useState2[0],setShouldRender=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.A)(_useState3,2),isEntered=_useState4[0],setIsEntered=_useState4[1],_useState5=(0,react.useState)(0),_useState6=(0,slicedToArray.A)(_useState5,2),dragOffset=_useState6[0],setDragOffset=_useState6[1],dragStartYRef=(0,react.useRef)(null),sheetRef=(0,react.useRef)(null);(0,react.useEffect)(function(){if(isOpen)setShouldRender(!0);else{setIsEntered(!1);var timer=setTimeout(function(){return setShouldRender(!1)},300);return function(){return clearTimeout(timer)}}},[isOpen]),(0,react.useEffect)(function(){if(shouldRender&&isOpen){var raf=requestAnimationFrame(function(){return setIsEntered(!0)});return function(){return cancelAnimationFrame(raf)}}},[shouldRender,isOpen]),(0,useLockBodyScroll._)(shouldRender);var handleTransitionEnd=(0,react.useCallback)(function(event){event.target===sheetRef.current&&"transform"===event.propertyName&&isOpen&&isEntered&&onOpenEnd&&onOpenEnd()},[isOpen,isEntered,onOpenEnd]),handlePointerDown=(0,react.useCallback)(function(event){var _event$currentTarget$,_event$currentTarget;dragStartYRef.current=event.clientY,null==(_event$currentTarget$=(_event$currentTarget=event.currentTarget).setPointerCapture)||_event$currentTarget$.call(_event$currentTarget,event.pointerId)},[]),handlePointerMove=(0,react.useCallback)(function(event){if(null!==dragStartYRef.current){var delta=event.clientY-dragStartYRef.current;setDragOffset(delta>0?delta:0)}},[]),handlePointerUp=(0,react.useCallback)(function(){null!==dragStartYRef.current&&(dragStartYRef.current=null,setDragOffset(0),dragOffset>80&&onClose())},[dragOffset,onClose]);if(!shouldRender)return null;var isDragging=dragOffset>0,translateY=isEntered?"".concat(dragOffset,"px"):"100%";return(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Root,{role:"dialog","aria-modal":"true",children:[(0,jsx_runtime.jsx)(Backdrop,{$bgColor:palette.backdropBg,$isVisible:isEntered,onClick:onClose}),(0,jsx_runtime.jsxs)(Sheet,{ref:sheetRef,style:{transform:"translateY(".concat(translateY,")")},$isDragging:isDragging,$isErrorBorder:isErrorBorder,$errorColor:palette.error,$borderColor:borderColor,$overflow:overflow,onTransitionEnd:handleTransitionEnd,children:[(0,jsx_runtime.jsx)(DragHandle,{onPointerDown:handlePointerDown,onPointerMove:handlePointerMove,onPointerUp:handlePointerUp,onPointerCancel:handlePointerUp,children:(0,jsx_runtime.jsx)(DragIndicator,{})}),title&&(0,jsx_runtime.jsx)(Title,{$bg:palette.titleBg,children:(0,jsx_runtime.jsx)(Typography.o,{variant:"headline4",children:title})}),(0,jsx_runtime.jsx)(ChildrenWrapper,{$bgColor:palette.bg,$isPadding:void 0===_ref$isPadding||_ref$isPadding,children:(0,jsx_runtime.jsx)(ErrorBoundary.t,{children:children})})]})]}),document.body)};try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isErrorBorder:{defaultValue:null,description:"",name:"isErrorBorder",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isPadding:{defaultValue:{value:"true"},description:"",name:"isPadding",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"string"}},onOpenEnd:{defaultValue:null,description:"",name:"onOpenEnd",required:!1,type:{name:"(() => void)"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Drawer/index.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"src/components/common/Drawer/index.tsx#Drawer"})}catch{}},"./src/components/common/ErrorBoundary/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:()=>ErrorBoundary});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/callSuper.js"),_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),ErrorBoundary=function(_Component){function ErrorBoundary(){var _this;(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__.A)(this,ErrorBoundary);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_2__.A)(this,ErrorBoundary,[].concat(args))).state={hasError:!1},_this}return(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__.A)(ErrorBoundary,_Component),(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__.A)(ErrorBoundary,[{key:"componentDidCatch",value:function componentDidCatch(error,errorInfo){console.error("[@invoicebox/ui] render error:",error,errorInfo.componentStack)}},{key:"render",value:function render(){var _this$props$fallback;return this.state.hasError?null!=(_this$props$fallback=this.props.fallback)?_this$props$fallback:null:this.props.children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(){return{hasError:!0}}}])}(__webpack_require__("./node_modules/react/index.js").Component);try{ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/ErrorBoundary/index.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/components/common/ErrorBoundary/index.tsx#ErrorBoundary"})}catch{}},"./src/components/common/Modal/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),useOutsideClick=__webpack_require__("./src/hooks/useOutsideClick/index.ts"),useLockBodyScroll=__webpack_require__("./src/hooks/useLockBodyScroll/index.ts"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),ErrorBoundary=__webpack_require__("./src/components/common/ErrorBoundary/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ExpandIcon=function ExpandIcon(){return(0,jsx_runtime.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[(0,jsx_runtime.jsx)("path",{d:"M15 3H21V9",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M9 21H3V15",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M21 3L14 10",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M3 21L10 14",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},CollapseIcon=function CollapseIcon(){return(0,jsx_runtime.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[(0,jsx_runtime.jsx)("path",{d:"M20 10H14V4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M4 14H10V20",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M14 10L21 3",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M10 14L3 21",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},ModalExpansionContext=(0,react.createContext)({isExpandable:!1,isExpanded:!1}),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),breakpoints=__webpack_require__("./src/breakpoints/index.ts");(0,styled_components_browser_esm.AH)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    flex: 1 1 auto;
    min-height: 0;
`])));var Container=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
`]))),ContainerInner=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden auto;
    align-items: flex-start;
    padding: `,`;

    @media `,` {
        padding: `,`;
    }
`])),function(_ref){return _ref.$isExpanded?"20px":"55px 0"},breakpoints.f.sm,function(_ref2){return _ref2.$isExpanded?"20px":"15px 0"}),Backdrop=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: `,`;
`])),function(_ref3){return _ref3.$palette.backdropBg}),Content=styled_components_browser_esm.Ay.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)([`
    margin: auto;
    max-width: calc(100vw - 10px);
    `,`
    overflow: `,`;
    position: relative;
    background-color: `,`;
    border-radius: 20px;
    box-shadow: `,`;
    outline: none;

    /* expandable-модалка не растёт выше экрана — контент скроллится внутри */
    `,`

    `,`

    @media `,` {
        width: 100%;
    }
`])),function(_ref4){var $width=_ref4.$width;return $width&&"width: ".concat($width,"px;")},function(_ref5){return _ref5.$overflow},function(_ref6){return _ref6.$palette.bg},function(_ref7){return _ref7.$palette.shadow},function(_ref8){return _ref8.$isExpandable&&(0,styled_components_browser_esm.AH)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.A)([`
            display: flex;
            flex-direction: column;
            align-items: center;
            max-height: 100%;
            overflow: auto;

            @media `,` {
                display: block;
                max-height: none;
            }
        `])),breakpoints.f.md)},function(_ref9){return _ref9.$isExpanded&&(0,styled_components_browser_esm.AH)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.A)([`
            width: 100%;
            max-width: 100%;
            height: 100%;
        `])))},breakpoints.f.md),ExpandButton=styled_components_browser_esm.Ay.button(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    color: `,`;

    &:hover {
        background-color: `,`;
    }

    @media `,` {
        display: none;
    }
`])),function(_ref0){return _ref0.$palette.expandButton},function(_ref1){return _ref1.$palette.expandButtonHoverBg},breakpoints.f.md),Modal=function Modal(_ref){var onClose=_ref.onClose,isOpen=_ref.isOpen,children=_ref.children,_ref$overflow=_ref.overflow,width=_ref.width,isDisabledOutsideClick=_ref.isDisabledOutsideClick,isExpandable=_ref.isExpandable,palette=(0,useComponentPalette.I)("modal"),contentRef=(0,react.useRef)(null),previousFocusRef=(0,react.useRef)(null),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),isExpanded=_useState2[0],setIsExpanded=_useState2[1],expansionContextValue=(0,react.useMemo)(function(){return{isExpandable:!!isExpandable,isExpanded:isExpanded}},[isExpandable,isExpanded]);return((0,useLockBodyScroll._)(isOpen),(0,react.useEffect)(function(){isOpen||setIsExpanded(!1)},[isOpen]),(0,react.useEffect)(function(){var _contentRef$current;if(isOpen)return previousFocusRef.current=document.activeElement,null==(_contentRef$current=contentRef.current)||_contentRef$current.focus(),function(){var _previousFocusRef$cur;null==(_previousFocusRef$cur=previousFocusRef.current)||_previousFocusRef$cur.focus()}},[isOpen]),(0,react.useEffect)(function(){if(isOpen&&!isDisabledOutsideClick){var handleMouseDown=function handleMouseDown(event){var content=contentRef.current,target=event.target;if(!(!content||!(target instanceof Element)||content.contains(target)||(0,useOutsideClick.OZ)(target))){var dialog=target.closest('[role="dialog"]');dialog&&dialog!==content||onClose()}};return document.addEventListener("mousedown",handleMouseDown),function(){document.removeEventListener("mousedown",handleMouseDown)}}},[isOpen,isDisabledOutsideClick,onClose]),(0,react.useEffect)(function(){if(isOpen){var handleKeyDown=function handleKeyDown(e){var _document$activeEleme,activeDialog=null==(_document$activeEleme=document.activeElement)?void 0:_document$activeEleme.closest('[role="dialog"]');if(!activeDialog||activeDialog===contentRef.current){if("Escape"===e.key)return void onClose();if("Tab"===e.key){var content=contentRef.current;if(content){var focusable=Array.from(content.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'));if(!focusable.length)return void e.preventDefault();var first=focusable[0],last=focusable[focusable.length-1],active=document.activeElement;e.shiftKey&&active===first?(e.preventDefault(),last.focus()):e.shiftKey||active!==last&&content.contains(active)||(e.preventDefault(),first.focus())}}}};return document.addEventListener("keydown",handleKeyDown),function(){document.removeEventListener("keydown",handleKeyDown)}}},[isOpen,onClose]),isOpen)?(0,react_dom.createPortal)((0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsxs)(ContainerInner,{$isExpanded:isExpanded,children:[(0,jsx_runtime.jsx)(Backdrop,{$palette:palette}),(0,jsx_runtime.jsxs)(Content,{$palette:palette,$overflow:void 0===_ref$overflow?"auto":_ref$overflow,$width:width,$isExpandable:isExpandable,$isExpanded:isExpanded,ref:contentRef,role:"dialog","aria-modal":"true",tabIndex:-1,children:[isExpandable&&(0,jsx_runtime.jsx)(ExpandButton,{type:"button",$palette:palette,onClick:function onClick(){return setIsExpanded(function(prev){return!prev})},"aria-label":isExpanded?"Свернуть окно":"Развернуть окно на весь экран",title:isExpanded?"Свернуть":"Развернуть на весь экран",children:isExpanded?(0,jsx_runtime.jsx)(CollapseIcon,{}):(0,jsx_runtime.jsx)(ExpandIcon,{})}),(0,jsx_runtime.jsx)(ModalExpansionContext.Provider,{value:expansionContextValue,children:(0,jsx_runtime.jsx)(ErrorBoundary.t,{children:children})})]})]})}),document.body):null};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},overflow:{defaultValue:{value:"auto"},description:"",name:"overflow",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},isDisabledOutsideClick:{defaultValue:null,description:"",name:"isDisabledOutsideClick",required:!1,type:{name:"boolean"}},isExpandable:{defaultValue:null,description:"кнопка разворота окна на весь экран (только в десктопной версии)",name:"isExpandable",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/common/Modal/index.tsx#Modal"})}catch{}},"./src/components/common/Typography/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>InputWithTypography,o:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
    `])))}},"./src/hooks/useLockBodyScroll/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:()=>useLockBodyScroll});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),SCROLL_LOCK_STATE_KEY="__invoiceboxBodyScrollLockState";function getState(){var global=globalThis;return global[SCROLL_LOCK_STATE_KEY]||(global[SCROLL_LOCK_STATE_KEY]={locks:new Set,originalBodyOverflow:""}),global[SCROLL_LOCK_STATE_KEY]}function lockBodyScroll(lockId){var state=getState();0===state.locks.size&&(state.originalBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"),state.locks.add(lockId)}function unlockBodyScroll(lockId){var state=getState();state.locks.delete(lockId)&&0===state.locks.size&&(state.originalBodyOverflow?document.body.style.overflow=state.originalBodyOverflow:document.body.style.removeProperty("overflow"))}var useLockBodyScroll=function useLockBodyScroll(locked){var lockId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function(){if(locked)return lockBodyScroll(lockId),function(){unlockBodyScroll(lockId)}},[locked,lockId])}},"./src/hooks/useMedia/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Iu:()=>useMobile,Xu:()=>useLargeTablet,b6:()=>useMiniLaptop,mW:()=>useTablet});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/breakpoints/index.ts"),useMediaQuery=function useMediaQuery(query){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function(){return"u">typeof window&&"function"==typeof window.matchMedia&&window.matchMedia(query).matches}),_useState2=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_useState,2),matches=_useState2[0],setMatches=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if("u">typeof window&&"function"==typeof window.matchMedia){var mediaQueryList=window.matchMedia(query),handleChange=function handleChange(event){return setMatches(event.matches)};return setMatches(mediaQueryList.matches),mediaQueryList.addEventListener("change",handleChange),function(){return mediaQueryList.removeEventListener("change",handleChange)}}},[query]),matches},useMobile=function useMobile(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm)},useTablet=function useTablet(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.md)},useLargeTablet=function useLargeTablet(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.ld)},useMiniLaptop=function useMiniLaptop(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.xl)}},"./src/hooks/useModal/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:()=>useModal});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),useModal=function useModal(){var initialState=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState),_useState2=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1];return[isOpen,(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(){return setIsOpen(!0)},[]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(){return setIsOpen(!1)},[]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(){return setIsOpen(function(v){return!v})},[])]}},"./src/hooks/useOutsideClick/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{OZ:()=>isDropdownPortalClick,f8:()=>DROPDOWN_PORTAL_ATTR,jz:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),DROPDOWN_PORTAL_ATTR="data-invoicebox-dropdown",isDropdownPortalClick=function isDropdownPortalClick(target){return target instanceof Element&&null!==target.closest("[".concat(DROPDOWN_PORTAL_ATTR,"]"))},useOutsideClick=function useOutsideClick(onClick){var extraRefs=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),extraRefsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(extraRefs);return extraRefsRef.current=extraRefs,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleOutsideClick=function handleOutsideClick(event){var target=event.target;!ref.current||ref.current.contains(target)||isDropdownPortalClick(target)||extraRefsRef.current.some(function(extra){return extra.current&&extra.current.contains(target)})||onClick()};return document.addEventListener("mousedown",handleOutsideClick),function(){document.removeEventListener("mousedown",handleOutsideClick)}},[onClick]),ref}},"./src/utils/reducedMotion.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>reducedMotion});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),reducedMotion=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
//# sourceMappingURL=1187.6cebbdb0.iframe.bundle.js.map