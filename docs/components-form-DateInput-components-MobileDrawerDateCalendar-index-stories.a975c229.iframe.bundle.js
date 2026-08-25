"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[7167],{"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_assertThisInitialized});function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_classCallCheck});function _classCallCheck(a,n){if(!(a instanceof n))throw TypeError("Cannot call a class as a function")}},"./node_modules/@babel/runtime/helpers/esm/createClass.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_createClass});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}},"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_getPrototypeOf});function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}},"./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_isNativeReflectConstruct});function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf});function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}},"./src/components/form/DateInput/components/MobileDrawerDateCalendar/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default});var _Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/DateInput/components/MobileDrawerDateCalendar/index.tsx");__webpack_require__("./node_modules/react-calendar/dist/Calendar.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"form/DateInput/components/MobileDrawerDateCalendar",component:___WEBPACK_IMPORTED_MODULE_4__.I,tags:["autodocs"]},Default={args:{hasError:!1,label:"Label",minDate:new Date().setHours(10,10,0,0),maxDate:new Date().setDate(new Date().getDate()+5)},render:function Component(props){var minDate=props.minDate,maxDate=props.maxDate,_useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),_useState2=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.A)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState4=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.A)(_useState3,2),value=_useState4[0],setValue=_useState4[1],handleChange=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(date){setValue(date),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("change")(date)},[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button",onClick:function handleOpen(){return setIsOpen(!0)},children:"Open"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.I,(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)((0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({},props),{},{maxDate:maxDate?new Date(maxDate):void 0,minDate:minDate?new Date(minDate):void 0,value:value,onChange:handleChange,onClose:function handleClose(){return setIsOpen(!1)},isOpen:isOpen})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button",onClick:function onClick(){return setValue(null)},children:"Reset"})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: COMMON_ARGS,
  render: Component
}`,...Default.parameters?.docs?.source}}},__webpack_require__.d(__webpack_exports__,["__namedExportsOrder",0,["Default"],"default",0,meta])},"./src/breakpoints/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Arrow/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K:()=>generateArrowPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateArrowPalette=function generateArrowPalette(abstractPalette){return{open:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.5),close:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.5)}}},"./src/components/common/BgCard/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:()=>generateBgCardPalette});var generateBgCardPalette=function generateBgCardPalette(abstractPalette){return{bg:abstractPalette.base}}},"./src/components/common/Calendar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>Calendar});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),esm=__webpack_require__("./node_modules/react-calendar/dist/esm/index.js"),breakpoints=__webpack_require__("./src/breakpoints/index.ts"),largeMobileStyles=(0,styled_components_browser_esm.AH)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    @media `,` {
        width: 328px;
    }

    .react-calendar__navigation {
        @media `,` {
            margin-bottom: 18px;
        }
    }

    .react-calendar__navigation__label {
        @media `,` {
            font-size: 20px;
            font-weight: 500;
            line-height: 25px;
        }
    }

    .react-calendar__month-view__weekdays {
        @media `,` {
            margin-bottom: 6px;
        }
    }

    .react-calendar__tile {
        @media `,` {
            height: 48px;
            font-size: 15px;
            font-weight: 400;
            line-height: 20px;
            border-radius: 50%;
        }
    }
`])),breakpoints.f.sm,breakpoints.f.sm,breakpoints.f.sm,breakpoints.f.sm,breakpoints.f.sm),LibCalendar=(0,styled_components_browser_esm.Ay)(esm.A)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    border: none;
    width: 210px;
    min-width: 210px;
    background: transparent;

    /* navigation block */

    .react-calendar__navigation {
        margin-bottom: 16px;
        height: 28px;
    }

    /* navigation arrow */

    .react-calendar__navigation__arrow {
        font-size: 24px;
        background-color: transparent !important;
        color: `,`;
        width: 28px;
        height: 28px;
        min-width: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-calendar__navigation__arrow:disabled {
        opacity: 0.4;
        cursor: default;
    }

    .react-calendar__navigation__arrow:hover:not([disabled]) {
        opacity: 0.6;
    }

    /* navigation label */

    .react-calendar__navigation__label {
        font-size: 14px;
        background-color: transparent !important;
        cursor: default;
        color: `,`;
    }

    /* weekdays */

    .react-calendar__month-view__weekdays__weekday {
        color: `,`;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        width: 30px;
        height: 22px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-calendar__month-view__weekdays__weekday abbr {
        text-decoration: none;
    }

    /* day */

    .react-calendar__tile {
        font-size: 12px;
        color: `,`;
        background-color: transparent !important;
        padding: 0;
        border-radius: 5px;
        margin-bottom: 4px;
        height: 22px;
    }

    .react-calendar__tile:disabled {
        opacity: 0.4;
        cursor: default;
    }

    .react-calendar__tile:hover:not([disabled]) {
        opacity: 0.6;
    }

    .react-calendar__tile--active {
        background-color: `,` !important;
        color: `,`;
    }

    .react-calendar__tile--active:hover {
        opacity: 1 !important;
    }

    `,`

    `,`
`])),function(_ref){return _ref.$arrow},function(_ref2){return _ref2.$month},function(_ref3){return _ref3.$weekDay},function(_ref4){return _ref4.$tile},function(_ref5){return _ref5.$tileBgActive},function(_ref6){return _ref6.$tileActive},function(_ref7){var selectRange=_ref7.selectRange,$tileBgActive=_ref7.$tileBgActive,$tileBgRangeBetween=_ref7.$tileBgRangeBetween;return selectRange&&`
            .react-calendar__tile--range {
                border-radius: 0;
            }

            .react-calendar__tile--rangeBothEnds {
                border-radius: 5px;
            }
            
            .react-calendar__tile--active {
                background-color: `.concat($tileBgRangeBetween,` !important;
            }

            .react-calendar__tile--rangeStart {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                background-color: `).concat($tileBgActive,` !important;
            }

            .react-calendar__tile--rangeEnd {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                background-color: `).concat($tileBgActive,` !important;
            }
    `)},function(_ref8){return _ref8.$isLargeMobileSize&&largeMobileStyles}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Calendar=function Calendar(_ref){var onChange=_ref.onChange,value=_ref.value,minDate=_ref.minDate,maxDate=_ref.maxDate,selectRange=_ref.selectRange,onActiveStartDateChange=_ref.onActiveStartDateChange,_ref$isLargeMobileSiz=_ref.isLargeMobileSize,palette=(0,useComponentPalette.I)("calendar"),handleChange=(0,react.useCallback)(function(newValue){onChange(newValue)},[onChange,selectRange]);return(0,jsx_runtime.jsx)(LibCalendar,{locale:"ru",minDate:minDate,maxDate:maxDate,showNeighboringMonth:!1,minDetail:"month",next2Label:null,prev2Label:null,onChange:handleChange,value:value,selectRange:selectRange,onActiveStartDateChange:onActiveStartDateChange,$arrow:palette.arrow,$weekDay:palette.weekday,$tile:palette.tile,$tileActive:palette.tileActive,$tileBgActive:palette.tileBgActive,$tileBgRangeBetween:palette.tileBgRangeBetween,$month:palette.month,$isLargeMobileSize:void 0!==_ref$isLargeMobileSiz&&_ref$isLargeMobileSiz})};try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}},onActiveStartDateChange:{defaultValue:null,description:"",name:"onActiveStartDateChange",required:!1,type:{name:"(() => void)"}},isLargeMobileSize:{defaultValue:{value:"false"},description:"",name:"isLargeMobileSize",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: Date) => void) | ((value: [Date, Date]) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | [Date, Date] | null"}},selectRange:{defaultValue:null,description:"",name:"selectRange",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Calendar/index.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/components/common/Calendar/index.tsx#Calendar"})}catch{}},"./src/components/common/Calendar/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:()=>generateCalendarPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateCalendarPalette=function generateCalendarPalette(abstractPalette){return{arrow:abstractPalette.primary,weekday:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.4),tile:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.7),tileActive:abstractPalette.primary,tileBgActive:abstractPalette.secondary,tileBgRangeBetween:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.05),month:abstractPalette.primary}}},"./src/components/common/Divider/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:()=>generateDividerPalette});var generateDividerPalette=function generateDividerPalette(abstractPalette){return{divider:abstractPalette.neutralUsual}}},"./src/components/common/Drawer/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:()=>Drawer});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject0,_templateObject1,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),Root=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
`])),function(_ref7){return _ref7.$isPadding&&"padding: 32px 16px 36px"},function(_ref8){return _ref8.$bgColor}),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),SCROLL_LOCK_STATE_KEY="__invoiceboxBodyScrollLockState";function getState(){var global=globalThis;return global[SCROLL_LOCK_STATE_KEY]||(global[SCROLL_LOCK_STATE_KEY]={locks:new Set,originalBodyOverflow:""}),global[SCROLL_LOCK_STATE_KEY]}function lockBodyScroll(lockId){var state=getState();0===state.locks.size&&(state.originalBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"),state.locks.add(lockId)}function unlockBodyScroll(lockId){var state=getState();state.locks.delete(lockId)&&0===state.locks.size&&(state.originalBodyOverflow?document.body.style.overflow=state.originalBodyOverflow:document.body.style.removeProperty("overflow"))}var useLockBodyScroll=function useLockBodyScroll(locked){var lockId=(0,react.useId)();(0,react.useLayoutEffect)(function(){if(locked)return lockBodyScroll(lockId),function(){unlockBodyScroll(lockId)}},[locked,lockId])},ErrorBoundary=__webpack_require__("./src/components/common/ErrorBoundary/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Drawer=function Drawer(_ref){var isOpen=_ref.isOpen,children=_ref.children,title=_ref.title,isErrorBorder=_ref.isErrorBorder,onClose=_ref.onClose,_ref$isPadding=_ref.isPadding,borderColor=_ref.borderColor,overflow=_ref.overflow,onOpenEnd=_ref.onOpenEnd,palette=(0,useComponentPalette.I)("drawer"),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),shouldRender=_useState2[0],setShouldRender=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.A)(_useState3,2),isEntered=_useState4[0],setIsEntered=_useState4[1],_useState5=(0,react.useState)(0),_useState6=(0,slicedToArray.A)(_useState5,2),dragOffset=_useState6[0],setDragOffset=_useState6[1],dragStartYRef=(0,react.useRef)(null),sheetRef=(0,react.useRef)(null);(0,react.useEffect)(function(){if(isOpen)setShouldRender(!0);else{setIsEntered(!1);var timer=setTimeout(function(){return setShouldRender(!1)},300);return function(){return clearTimeout(timer)}}},[isOpen]),(0,react.useEffect)(function(){if(shouldRender&&isOpen){var raf=requestAnimationFrame(function(){return setIsEntered(!0)});return function(){return cancelAnimationFrame(raf)}}},[shouldRender,isOpen]),useLockBodyScroll(shouldRender);var handleTransitionEnd=(0,react.useCallback)(function(event){event.target===sheetRef.current&&"transform"===event.propertyName&&isOpen&&isEntered&&onOpenEnd&&onOpenEnd()},[isOpen,isEntered,onOpenEnd]),handlePointerDown=(0,react.useCallback)(function(event){var _event$currentTarget$,_event$currentTarget;dragStartYRef.current=event.clientY,null==(_event$currentTarget$=(_event$currentTarget=event.currentTarget).setPointerCapture)||_event$currentTarget$.call(_event$currentTarget,event.pointerId)},[]),handlePointerMove=(0,react.useCallback)(function(event){if(null!==dragStartYRef.current){var delta=event.clientY-dragStartYRef.current;setDragOffset(delta>0?delta:0)}},[]),handlePointerUp=(0,react.useCallback)(function(){null!==dragStartYRef.current&&(dragStartYRef.current=null,setDragOffset(0),dragOffset>80&&onClose())},[dragOffset,onClose]);if(!shouldRender)return null;var isDragging=dragOffset>0,translateY=isEntered?"".concat(dragOffset,"px"):"100%";return(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Root,{role:"dialog","aria-modal":"true",children:[(0,jsx_runtime.jsx)(Backdrop,{$bgColor:palette.backdropBg,$isVisible:isEntered,onClick:onClose}),(0,jsx_runtime.jsxs)(Sheet,{ref:sheetRef,style:{transform:"translateY(".concat(translateY,")")},$isDragging:isDragging,$isErrorBorder:isErrorBorder,$errorColor:palette.error,$borderColor:borderColor,$overflow:overflow,onTransitionEnd:handleTransitionEnd,children:[(0,jsx_runtime.jsx)(DragHandle,{onPointerDown:handlePointerDown,onPointerMove:handlePointerMove,onPointerUp:handlePointerUp,onPointerCancel:handlePointerUp,children:(0,jsx_runtime.jsx)(DragIndicator,{})}),title&&(0,jsx_runtime.jsx)(Title,{$bg:palette.titleBg,children:(0,jsx_runtime.jsx)(Typography.o,{variant:"headline4",children:title})}),(0,jsx_runtime.jsx)(ChildrenWrapper,{$bgColor:palette.bg,$isPadding:void 0===_ref$isPadding||_ref$isPadding,children:(0,jsx_runtime.jsx)(ErrorBoundary.t,{children:children})})]})]}),document.body)};try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isErrorBorder:{defaultValue:null,description:"",name:"isErrorBorder",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isPadding:{defaultValue:{value:"true"},description:"",name:"isPadding",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"string"}},onOpenEnd:{defaultValue:null,description:"",name:"onOpenEnd",required:!1,type:{name:"(() => void)"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Drawer/index.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"src/components/common/Drawer/index.tsx#Drawer"})}catch{}},"./src/components/common/Drawer/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:()=>generateDrawerPalette});var parseHex=function parseHex(color){var normalized=color.startsWith("#")?color.slice(1):color;if(/^[0-9a-fA-F]{3}$/.test(normalized))return{red:parseInt(normalized[0]+normalized[0],16),green:parseInt(normalized[1]+normalized[1],16),blue:parseInt(normalized[2]+normalized[2],16)};if(/^[0-9a-fA-F]{6}$/.test(normalized))return{red:parseInt(normalized.slice(0,2),16),green:parseInt(normalized.slice(2,4),16),blue:parseInt(normalized.slice(4,6),16)};throw Error('transformColorByHsl: unsupported color "'.concat(color,'", expected #rgb or #rrggbb'))},rgbToHsl=function rgbToHsl(_ref){var red=_ref.red,green=_ref.green,blue=_ref.blue,r=red/255,g=green/255,b=blue/255,max=Math.max(r,g,b),min=Math.min(r,g,b),lightness=(max+min)/2;if(max===min)return{hue:0,saturation:0,lightness:lightness};var delta=max-min;return{hue:60*(max===r?(g-b)/delta+6*(g<b):max===g?(b-r)/delta+2:(r-g)/delta+4),saturation:lightness>.5?delta/(2-max-min):delta/(max+min),lightness:lightness}},hslToRgb=function hslToRgb(_ref2){var hue=_ref2.hue,saturation=_ref2.saturation,lightness=_ref2.lightness;if(0===saturation){var value=Math.round(255*lightness);return{red:value,green:value,blue:value}}var chroma=(1-Math.abs(2*lightness-1))*saturation,huePrime=(hue%360+360)%360/60,secondComponent=chroma*(1-Math.abs(huePrime%2-1)),red=0,green=0,blue=0;huePrime>=0&&huePrime<1?(red=chroma,green=secondComponent):huePrime>=1&&huePrime<2?(red=secondComponent,green=chroma):huePrime>=2&&huePrime<3?(green=chroma,blue=secondComponent):huePrime>=3&&huePrime<4?(green=secondComponent,blue=chroma):huePrime>=4&&huePrime<5?(red=secondComponent,blue=chroma):(red=chroma,blue=secondComponent);var lightnessModification=lightness-chroma/2;return{red:Math.round((red+lightnessModification)*255),green:Math.round((green+lightnessModification)*255),blue:Math.round((blue+lightnessModification)*255)}},numberToHex=function numberToHex(value){var hex=value.toString(16);return 1===hex.length?"0".concat(hex):hex},rgbToHexString=function rgbToHexString(_ref3){var red=_ref3.red,green=_ref3.green,blue=_ref3.blue,value="#".concat(numberToHex(red)).concat(numberToHex(green)).concat(numberToHex(blue));return value[1]===value[2]&&value[3]===value[4]&&value[5]===value[6]?"#".concat(value[1]).concat(value[3]).concat(value[5]):value},transformColorByHsl=function transformColorByHsl(base,diff){var hslBase=rgbToHsl(parseHex(base));return rgbToHexString(hslToRgb({hue:Math.min(Math.max(hslBase.hue-diff.hue,0),360),saturation:Math.min(Math.max(hslBase.saturation-diff.saturation,0),1),lightness:Math.min(Math.max(hslBase.lightness-diff.lightness,0),1)}))},hexToRgba=__webpack_require__("./src/utils/hexToRgba.ts"),generateDrawerPalette=function generateDrawerPalette(abstractPalette){return{error:abstractPalette.error,bg:abstractPalette.base,backdropBg:(0,hexToRgba.A)(transformColorByHsl(abstractPalette.primary,{hue:-3.3333333333333144,saturation:-.07435090479937062,lightness:.08235294117647063}),.5),titleBg:abstractPalette.neutralUsual}}},"./src/components/common/Dropdown/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>generateDropdownPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateDropdownPalette=function generateDropdownPalette(abstractPalette){return{bg:abstractPalette.base,shadow:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.15)}}},"./src/components/common/EntityAutocompleteOptionsDrawer/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H:()=>generateEntityAutocompleteOptionsDrawerPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateEntityAutocompleteOptionsDrawerPalette=function generateEntityAutocompleteOptionsDrawerPalette(abstractPalette){return{prompt:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.5)}}},"./src/components/common/ErrorBoundary/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:()=>ErrorBoundary});var classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),isNativeReflectConstruct=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js"),esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),assertThisInitialized=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");function _possibleConstructorReturn(t,e){if(e&&("object"==(0,esm_typeof.A)(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return(0,assertThisInitialized.A)(t)}function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),_possibleConstructorReturn(t,(0,isNativeReflectConstruct.A)()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}var setPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inherits(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,setPrototypeOf.A)(t,e)}var ErrorBoundary=function(_Component){function ErrorBoundary(){var _this;(0,classCallCheck.A)(this,ErrorBoundary);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_callSuper(this,ErrorBoundary,[].concat(args))).state={hasError:!1},_this}return _inherits(ErrorBoundary,_Component),(0,createClass.A)(ErrorBoundary,[{key:"componentDidCatch",value:function componentDidCatch(error,errorInfo){console.error("[@invoicebox/ui] render error:",error,errorInfo.componentStack)}},{key:"render",value:function render(){var _this$props$fallback;return this.state.hasError?null!=(_this$props$fallback=this.props.fallback)?_this$props$fallback:null:this.props.children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(){return{hasError:!0}}}])}(__webpack_require__("./node_modules/react/index.js").Component);try{ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/ErrorBoundary/index.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/components/common/ErrorBoundary/index.tsx#ErrorBoundary"})}catch{}},"./src/components/common/InvoiceboxSpinner/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:()=>generateInvoiceboxSpinnerPalette});var generateInvoiceboxSpinnerPalette=function generateInvoiceboxSpinnerPalette(abstractPalette){return{leftEye:abstractPalette.primary,rightEye:abstractPalette.secondary}}},"./src/components/common/PointsLoader/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:()=>generatePointsLoaderPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generatePointsLoaderPalette=function generatePointsLoaderPalette(abstractPalette){return{active:abstractPalette.primary,default:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.2)}}},"./src/components/common/ReadOnlyLabelValueField/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:()=>generateReadOnlyLabelValueFieldPalette});var generateReadOnlyLabelValueFieldPalette=function generateReadOnlyLabelValueFieldPalette(abstractPalette){return{value:abstractPalette.primary}}},"./src/components/common/Scrollbar/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>generateScrollbarPalette});var generateScrollbarPalette=function generateScrollbarPalette(abstractPalette){return{thumb:abstractPalette.neutralUsual}}},"./src/components/common/SecondaryButton/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:()=>generateSecondaryButtonPalette});var generateSecondaryButtonPalette=function generateSecondaryButtonPalette(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.neutralUsual,bgHover:abstractPalette.neutralHeavy,bgActive:abstractPalette.neutralMassive}}},"./src/components/common/Skeleton/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:()=>generateSkeletonPalette});var generateSkeletonPalette=function generateSkeletonPalette(abstractPalette){return{bg:abstractPalette.neutralUsual,flicker:abstractPalette.neutralLight}}},"./src/components/common/Toast/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:()=>generateToastPalette});var generateToastPalette=function generateToastPalette(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.primary,shadow:abstractPalette.primary}}},"./src/components/common/Tooltip/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:()=>generateTooltipPalette});var generateTooltipPalette=function generateTooltipPalette(abstractPalette){return{bg:abstractPalette.base,color:abstractPalette.primary,shadow:"0px 8px 21px rgba(53, 63, 71, 0.16)"}}},"./src/components/common/Typography/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>InputWithTypography,o:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    font-family: Roboto, sans-serif;

    `,`
`])),function(_ref){var $variant=_ref.$variant;return typography.I[$variant]}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","element"],_excluded2=["variant","element"],Typography=function Typography(_ref){var variant=_ref.variant,_ref$element=_ref.element,rest=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.A)({as:void 0===_ref$element?"div":_ref$element,$variant:variant},rest))},InputWithTypography=(0,react.forwardRef)(function(_ref2,ref){var variant=_ref2.variant,_ref2$element=_ref2.element,rest=(0,objectWithoutProperties.A)(_ref2,_excluded2);return(0,jsx_runtime.jsx)(Wrapper,(0,objectSpread2.A)({ref:ref,as:void 0===_ref2$element?"input":_ref2$element,$variant:variant},rest))});Typography.displayName="Typography",InputWithTypography.displayName="InputWithTypography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5Desktop"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"labelsHintsRegular"'},{value:'"labelsHintsBold"'},{value:'"captionSRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},element:{defaultValue:{value:"input"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"button"'},{value:'"input"'},{value:'"textarea"'},{value:'"div"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"span"'}]}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Typography/index.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/common/Typography/index.tsx#Typography"})}catch{}},"./src/components/common/Typography/typography.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:()=>typography});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,_templateObject21,_templateObject22,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/breakpoints/index.ts"),typography={headline1:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
    `])))}},"./src/components/common/WarningIcon/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w:()=>generateWarningIconPalette});var generateWarningIconPalette=function generateWarningIconPalette(abstractPalette){return{icon:abstractPalette.error}}},"./src/components/form/Autocomplete/components/AutocompleteDefaultOption/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>generateAutocompleteDefaultOptionPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateAutocompleteDefaultOptionPalette=function generateAutocompleteDefaultOptionPalette(abstractPalette){return{hoverBg:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.neutralUsual,.5)}}},"./src/components/form/Autocomplete/components/OrganizationAutocompleteItem/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:()=>generateOrganizationAutocompleteItemPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateOrganizationAutocompleteItemPalette=function generateOrganizationAutocompleteItemPalette(abstractPalette){return{title:abstractPalette.primary,description:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.5),label:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.3),hoverBg:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.neutralUsual,.5)}}},"./src/components/form/Checkbox/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:()=>generateCheckboxPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateCheckboxPalette=function generateCheckboxPalette(abstractPalette){return{labelColor:abstractPalette.primary,mark:abstractPalette.base,borderDefault:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.3),borderHover:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.5),checkedBg:abstractPalette.secondary,checkedHoverBg:"#EDC743",disabledBg:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.neutralBrutal,.3),disabledBorder:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.neutralBrutal,.3)}}},"./src/components/form/CodeInput/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>generateCodeInputPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateCodeInputPalette=function generateCodeInputPalette(abstractPalette){return{errorBorder:abstractPalette.error,defaultBorder:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.3)}}},"./src/components/form/CountrySelect/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:()=>generateCountrySelectPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateCountrySelectPalette=function generateCountrySelectPalette(abstractPalette){return{title:abstractPalette.primary,border:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.2),countryBg:abstractPalette.base,countryHoverBg:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.neutralUsual,.5),countryDescription:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.3)}}},"./src/components/form/DateInput/components/MobileDrawerDateCalendar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:()=>MobileDrawerDateCalendar}),__webpack_require__("./node_modules/react/index.js");var _templateObject,Calendar=__webpack_require__("./src/components/common/Calendar/index.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),MobileCalendarWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    padding: 18px 16px 30px;
    display: flex;
    justify-content: center;
`]))),DrawerHeader=__webpack_require__("./src/components/form/common/DrawerHeader/index.tsx"),Drawer=__webpack_require__("./src/components/common/Drawer/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MobileDrawerDateCalendar=function MobileDrawerDateCalendar(_ref){var isOpen=_ref.isOpen,onClose=_ref.onClose,maxDate=_ref.maxDate,minDate=_ref.minDate,value=_ref.value,onChange=_ref.onChange;return(0,jsx_runtime.jsxs)(Drawer._,{onClose:onClose,isOpen:isOpen,isPadding:!1,children:[(0,jsx_runtime.jsx)(DrawerHeader.B,{onClose:onClose,label:"Выберите дату"}),(0,jsx_runtime.jsx)(MobileCalendarWrapper,{children:(0,jsx_runtime.jsx)(Calendar.V,{value:value,onChange:onChange,minDate:minDate,maxDate:maxDate,isLargeMobileSize:!0})})]})};try{MobileDrawerDateCalendar.displayName="MobileDrawerDateCalendar",MobileDrawerDateCalendar.__docgenInfo={description:"",displayName:"MobileDrawerDateCalendar",props:{maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: Date) => void"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateInput/components/MobileDrawerDateCalendar/index.tsx#MobileDrawerDateCalendar"]={docgenInfo:MobileDrawerDateCalendar.__docgenInfo,name:"MobileDrawerDateCalendar",path:"src/components/form/DateInput/components/MobileDrawerDateCalendar/index.tsx#MobileDrawerDateCalendar"})}catch{}},"./src/components/form/DateInput/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:()=>generateDateInputPalette});var generateDateInputPalette=function generateDateInputPalette(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/DateTimeInput/components/MobileWheelPicker/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:()=>generateMobileWheelPickerPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateMobileWheelPickerPalette=function generateMobileWheelPickerPalette(abstractPalette){return{value:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.6),valueActive:abstractPalette.primary,selectedBg:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.08),fadeBg:abstractPalette.base,fadeBgTransparent:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.base,0)}}},"./src/components/form/DateTimeInput/components/TimePicker/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:()=>generateTimePickerPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateTimePickerPalette=function generateTimePickerPalette(abstractPalette){return{label:abstractPalette.primary,tile:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.7),divider:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.1),tileActive:abstractPalette.primary,tileBgActive:abstractPalette.secondary,tileDisabled:abstractPalette.neutralFoggy}}},"./src/components/form/DateTimeInput/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:()=>generateDateTimeInputPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateDateTimeInputPalette=function generateDateTimeInputPalette(abstractPalette){return{icon:abstractPalette.primary,buttonLabel:abstractPalette.primary,divider:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.1),cancelButton:abstractPalette.neutralUsual,applyButton:abstractPalette.secondary,disabledButton:abstractPalette.neutralFoggy}}},"./src/components/form/InputLabel/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:()=>generateInputLabelPalette});var generateInputLabelPalette=function generateInputLabelPalette(abstractPalette){return{bg:abstractPalette.base,text:abstractPalette.neutralBrutal,textHighlight:abstractPalette.primary,error:abstractPalette.error,bgModern:abstractPalette.neutralLight}}},"./src/components/form/PureInput/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:()=>generatePureInputPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generatePureInputPalette=function generatePureInputPalette(abstractPalette){return{text:abstractPalette.primary,bg:abstractPalette.base,bgOpened:abstractPalette.neutralLight,error:abstractPalette.error,border:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.neutralBrutal,.3),borderFocus:abstractPalette.primary,placeholder:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.5)}}},"./src/components/form/ResetButton/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:()=>generateResetButtonPalette});var generateResetButtonPalette=function generateResetButtonPalette(abstractPalette){return{color:abstractPalette.primary}}},"./src/components/form/SearchInput/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:()=>generateSearchInputPalette});var generateSearchInputPalette=function generateSearchInputPalette(abstractPalette){return{icon:abstractPalette.primary}}},"./src/components/form/Select/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:()=>generateSelectPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateSelectPalette=function generateSelectPalette(abstractPalette){return{bgHover:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.neutralUsual,.5),empty:abstractPalette.neutralFoggy,tagColor:"#6590FD",tagBg:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)("#6590FD",.16)}}},"./src/components/form/TagsInput/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:()=>generateTagsInputPalette});var generateTagsInputPalette=function generateTagsInputPalette(abstractPalette){return{chipColor:abstractPalette.base,chipBg:abstractPalette.primary}}},"./src/components/form/Toggle/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:()=>generateTogglePalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateTogglePalette=function generateTogglePalette(abstractPalette){return{circle:abstractPalette.base,defaultBg:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.3),activeBg:abstractPalette.secondary,label:abstractPalette.primary,disabledLabel:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.5),disabledBorder:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.1)}}},"./src/components/form/common/DrawerHeader/components/Cross24Icon/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:()=>Cross24Icon}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Cross24Icon=function Cross24Icon(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M17 7L7 17M17 17L7 7",stroke:"#353F47",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}},"./src/components/form/common/DrawerHeader/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:()=>DrawerHeader}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    display: flex;
    gap: 8px;
    align-items: center;
    border-bottom: 1px solid `,`;
    padding: 28px 16px 8px;
`])),function(_ref){return _ref.$borderColor}),CloseButton=styled_components_browser_esm.Ay.button(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: inherit;
`]))),CancelButton=styled_components_browser_esm.Ay.button(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    white-space: nowrap;
    color: `,`;
`])),function(_ref2){return _ref2.$color}),HeadLabel=(0,styled_components_browser_esm.Ay)(Typography.o)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
    flex: 1;
    `,`
    color: `,`;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`])),function(_ref3){return _ref3.$isCentered&&"text-align: center;"},function(_ref4){return _ref4.$color}),ApplyButton=styled_components_browser_esm.Ay.button(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)([`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: `,`;

    &:disabled {
        opacity: 0.4;
    }
`])),function(_ref5){return _ref5.$color}),Cross24Icon=__webpack_require__("./src/components/form/common/DrawerHeader/components/Cross24Icon/index.tsx"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DrawerHeader=function DrawerHeader(_ref){var onClose=_ref.onClose,label=_ref.label,onSubmit=_ref.onSubmit,isSubmitDisabled=_ref.isSubmitDisabled,closeLabel=_ref.closeLabel,submitLabel=_ref.submitLabel,palette=(0,useComponentPalette.I)("drawerHeader");return(0,jsx_runtime.jsxs)(Wrapper,{$borderColor:palette.border,children:[closeLabel?(0,jsx_runtime.jsx)(CancelButton,{type:"button",onClick:onClose,$color:palette.applyButton,children:(0,jsx_runtime.jsx)(Typography.o,{variant:"headline6",children:closeLabel})}):(0,jsx_runtime.jsx)(CloseButton,{type:"button",onClick:onClose,children:(0,jsx_runtime.jsx)(Cross24Icon.e,{})}),(0,jsx_runtime.jsx)(HeadLabel,{$color:palette.headLabel,variant:"headline3",$isCentered:!!closeLabel,children:label}),onSubmit&&(0,jsx_runtime.jsx)(ApplyButton,{disabled:isSubmitDisabled,onClick:onSubmit,type:"button",$color:palette.applyButton,children:(0,jsx_runtime.jsx)(Typography.o,{variant:"headline6",children:submitLabel||"Готово"})})]})};try{DrawerHeader.displayName="DrawerHeader",DrawerHeader.__docgenInfo={description:"",displayName:"DrawerHeader",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isSubmitDisabled:{defaultValue:null,description:"",name:"isSubmitDisabled",required:!1,type:{name:"boolean"}},closeLabel:{defaultValue:null,description:"",name:"closeLabel",required:!1,type:{name:"string"}},submitLabel:{defaultValue:null,description:"",name:"submitLabel",required:!1,type:{name:"string"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/common/DrawerHeader/index.tsx#DrawerHeader"]={docgenInfo:DrawerHeader.__docgenInfo,name:"DrawerHeader",path:"src/components/form/common/DrawerHeader/index.tsx#DrawerHeader"})}catch{}},"./src/components/form/common/DrawerHeader/palette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:()=>generateDrawerHeaderPalette});var _utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hexToRgba.ts"),generateDrawerHeaderPalette=function generateDrawerHeaderPalette(abstractPalette){return{headLabel:abstractPalette.primary,applyButton:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.5),border:(0,_utils_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(abstractPalette.primary,.1)}}},"./src/palette/constants.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>defaultAbstractPalette});var defaultAbstractPalette={primary:"#353F47",secondary:"#FAD247",base:"#FFFFFF",error:"#EB5757",neutralLight:"#F9F9F9",neutralUsual:"#f1f2f6",neutralHeavy:"#ececf0",neutralMassive:"#dee0e7",neutralFoggy:"#ccc",neutralBrutal:"#999"}},"./src/palette/context.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:()=>PaletteContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/constants.ts"),_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Skeleton/palette.ts"),_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/Arrow/palette.ts"),_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/form/InputLabel/palette.ts"),_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/form/PureInput/palette.ts"),_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/Dropdown/palette.ts"),_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/form/Select/palette.ts"),_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/form/DateInput/palette.ts"),_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/Divider/palette.ts"),_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/common/Calendar/palette.ts"),_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/form/SearchInput/palette.ts"),_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/components/common/BgCard/palette.ts"),_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/components/common/Toast/palette.ts"),_components_form_Autocomplete_components_AutocompleteDefaultOption_palette__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/components/form/Autocomplete/components/AutocompleteDefaultOption/palette.ts"),_components_form_Autocomplete_components_OrganizationAutocompleteItem_palette__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/components/form/Autocomplete/components/OrganizationAutocompleteItem/palette.ts"),_components_common_Drawer_palette__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./src/components/common/Drawer/palette.ts"),_components_common_EntityAutocompleteOptionsDrawer_palette__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./src/components/common/EntityAutocompleteOptionsDrawer/palette.ts"),_components_form_CodeInput_palette__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./src/components/form/CodeInput/palette.ts"),_components_form_ResetButton_palette__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./src/components/form/ResetButton/palette.ts"),_components_form_Toggle_palette__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./src/components/form/Toggle/palette.ts"),_components_common_ReadOnlyLabelValueField_palette__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./src/components/common/ReadOnlyLabelValueField/palette.ts"),_components_common_PointsLoader_palette__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./src/components/common/PointsLoader/palette.ts"),_components_form_TagsInput_palette__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./src/components/form/TagsInput/palette.ts"),_components_form_DateTimeInput_components_TimePicker_palette__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./src/components/form/DateTimeInput/components/TimePicker/palette.ts"),_components_form_DateTimeInput_components_MobileWheelPicker_palette__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./src/components/form/DateTimeInput/components/MobileWheelPicker/palette.ts"),_components_form_DateTimeInput_palette__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./src/components/form/DateTimeInput/palette.ts"),_components_form_common_DrawerHeader_palette__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./src/components/form/common/DrawerHeader/palette.ts"),_components_form_Checkbox_palette__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./src/components/form/Checkbox/palette.ts"),_components_common_Tooltip_palette__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./src/components/common/Tooltip/palette.ts"),PaletteContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({skeleton:(0,_components_common_Skeleton_palette__WEBPACK_IMPORTED_MODULE_2__.o)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),invoiceboxSpinner:(0,_components_common_InvoiceboxSpinner_palette__WEBPACK_IMPORTED_MODULE_3__.O)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),secondaryButton:(0,_components_common_SecondaryButton_palette__WEBPACK_IMPORTED_MODULE_4__.v)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),arrow:(0,_components_common_Arrow_palette__WEBPACK_IMPORTED_MODULE_5__.K)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),inputLabel:(0,_components_form_InputLabel_palette__WEBPACK_IMPORTED_MODULE_6__.v)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),pureInput:(0,_components_form_PureInput_palette__WEBPACK_IMPORTED_MODULE_7__.L)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),searchInput:(0,_components_form_SearchInput_palette__WEBPACK_IMPORTED_MODULE_15__.N)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dropdown:(0,_components_common_Dropdown_palette__WEBPACK_IMPORTED_MODULE_8__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),scrollbar:(0,_components_common_Scrollbar_palette__WEBPACK_IMPORTED_MODULE_9__.V)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),select:(0,_components_form_Select_palette__WEBPACK_IMPORTED_MODULE_10__.Z)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),countrySelect:(0,_components_form_CountrySelect_palette__WEBPACK_IMPORTED_MODULE_16__.T)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dateInput:(0,_components_form_DateInput_palette__WEBPACK_IMPORTED_MODULE_11__.r)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),warningIcon:(0,_components_common_WarningIcon_palette__WEBPACK_IMPORTED_MODULE_12__.w)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),divider:(0,_components_common_Divider_palette__WEBPACK_IMPORTED_MODULE_13__.M)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),calendar:(0,_components_common_Calendar_palette__WEBPACK_IMPORTED_MODULE_14__.L)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),bgCard:(0,_components_common_BgCard_palette__WEBPACK_IMPORTED_MODULE_17__.M)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),toast:(0,_components_common_Toast_palette__WEBPACK_IMPORTED_MODULE_18__.M)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),autocompleteDefaultOption:(0,_components_form_Autocomplete_components_AutocompleteDefaultOption_palette__WEBPACK_IMPORTED_MODULE_19__.V)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),organizationAutocompleteItem:(0,_components_form_Autocomplete_components_OrganizationAutocompleteItem_palette__WEBPACK_IMPORTED_MODULE_20__.F)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),drawer:(0,_components_common_Drawer_palette__WEBPACK_IMPORTED_MODULE_21__.y)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),entityAutocompleteOptionsDrawer:(0,_components_common_EntityAutocompleteOptionsDrawer_palette__WEBPACK_IMPORTED_MODULE_22__.H)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),codeInput:(0,_components_form_CodeInput_palette__WEBPACK_IMPORTED_MODULE_23__.A)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),resetButton:(0,_components_form_ResetButton_palette__WEBPACK_IMPORTED_MODULE_24__.O)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),toggle:(0,_components_form_Toggle_palette__WEBPACK_IMPORTED_MODULE_25__.z)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),readOnlyLabelValueField:(0,_components_common_ReadOnlyLabelValueField_palette__WEBPACK_IMPORTED_MODULE_26__.q)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),pointsLoader:(0,_components_common_PointsLoader_palette__WEBPACK_IMPORTED_MODULE_27__.L)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),tagsInput:(0,_components_form_TagsInput_palette__WEBPACK_IMPORTED_MODULE_28__.i)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),timePicker:(0,_components_form_DateTimeInput_components_TimePicker_palette__WEBPACK_IMPORTED_MODULE_29__.U)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),mobileWheelPicker:(0,_components_form_DateTimeInput_components_MobileWheelPicker_palette__WEBPACK_IMPORTED_MODULE_30__.g)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),dateTimeInput:(0,_components_form_DateTimeInput_palette__WEBPACK_IMPORTED_MODULE_31__.U)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),drawerHeader:(0,_components_form_common_DrawerHeader_palette__WEBPACK_IMPORTED_MODULE_32__.p)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),checkbox:(0,_components_form_Checkbox_palette__WEBPACK_IMPORTED_MODULE_33__.S)(_constants__WEBPACK_IMPORTED_MODULE_1__.V),tooltip:(0,_components_common_Tooltip_palette__WEBPACK_IMPORTED_MODULE_34__.O)(_constants__WEBPACK_IMPORTED_MODULE_1__.V)})},"./src/palette/useComponentPalette.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:()=>useComponentPalette});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/palette/context.tsx"),useComponentPalette=function useComponentPalette(componentName,componentPropsPalette){var componentPalette=(0,react.useContext)(context.r)[componentName];return(0,react.useMemo)(function(){return(0,objectSpread2.A)((0,objectSpread2.A)({},componentPalette),componentPropsPalette)},[componentPalette,componentPropsPalette])}},"./src/utils/hexToRgba.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>hexToRgba});function hexToRgba(hex){var alpha=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,normalized=hex.replace("#","");3===normalized.length&&(normalized=normalized.split("").map(function(_char){return _char+_char}).join(""));var r=parseInt(normalized.slice(0,2),16),g=parseInt(normalized.slice(2,4),16),b=parseInt(normalized.slice(4,6),16);return"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(alpha,")")}},"./src/utils/reducedMotion.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>reducedMotion});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),reducedMotion=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
//# sourceMappingURL=components-form-DateInput-components-MobileDrawerDateCalendar-index-stories.a975c229.iframe.bundle.js.map