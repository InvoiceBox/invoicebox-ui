"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[6603],{"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_assertThisInitialized});function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_classCallCheck});function _classCallCheck(a,n){if(!(a instanceof n))throw TypeError("Cannot call a class as a function")}},"./node_modules/@babel/runtime/helpers/esm/createClass.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_createClass});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}},"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_getPrototypeOf});function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}},"./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_isNativeReflectConstruct});function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf});function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}},"./src/components/common/Calendar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>Calendar});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),esm=__webpack_require__("./node_modules/react-calendar/dist/esm/index.js"),breakpoints=__webpack_require__("./src/breakpoints/index.ts"),largeMobileStyles=(0,styled_components_browser_esm.AH)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
    `)},function(_ref8){return _ref8.$isLargeMobileSize&&largeMobileStyles}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Calendar=function Calendar(_ref){var onChange=_ref.onChange,value=_ref.value,minDate=_ref.minDate,maxDate=_ref.maxDate,selectRange=_ref.selectRange,onActiveStartDateChange=_ref.onActiveStartDateChange,_ref$isLargeMobileSiz=_ref.isLargeMobileSize,palette=(0,useComponentPalette.I)("calendar"),handleChange=(0,react.useCallback)(function(newValue){onChange(newValue)},[onChange,selectRange]);return(0,jsx_runtime.jsx)(LibCalendar,{locale:"ru",minDate:minDate,maxDate:maxDate,showNeighboringMonth:!1,minDetail:"month",next2Label:null,prev2Label:null,onChange:handleChange,value:value,selectRange:selectRange,onActiveStartDateChange:onActiveStartDateChange,$arrow:palette.arrow,$weekDay:palette.weekday,$tile:palette.tile,$tileActive:palette.tileActive,$tileBgActive:palette.tileBgActive,$tileBgRangeBetween:palette.tileBgRangeBetween,$month:palette.month,$isLargeMobileSize:void 0!==_ref$isLargeMobileSiz&&_ref$isLargeMobileSiz})};try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}},onActiveStartDateChange:{defaultValue:null,description:"",name:"onActiveStartDateChange",required:!1,type:{name:"(() => void)"}},isLargeMobileSize:{defaultValue:{value:"false"},description:"",name:"isLargeMobileSize",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: Date) => void) | ((value: [Date, Date]) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | [Date, Date] | null"}},selectRange:{defaultValue:null,description:"",name:"selectRange",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Calendar/index.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/components/common/Calendar/index.tsx#Calendar"})}catch{}},"./src/components/common/Drawer/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:()=>Drawer});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject0,_templateObject1,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),Root=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
`])),function(_ref7){return _ref7.$isPadding&&"padding: 32px 16px 36px"},function(_ref8){return _ref8.$bgColor}),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),SCROLL_LOCK_STATE_KEY="__invoiceboxBodyScrollLockState";function getState(){var global=globalThis;return global[SCROLL_LOCK_STATE_KEY]||(global[SCROLL_LOCK_STATE_KEY]={locks:new Set,originalBodyOverflow:""}),global[SCROLL_LOCK_STATE_KEY]}function lockBodyScroll(lockId){var state=getState();0===state.locks.size&&(state.originalBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"),state.locks.add(lockId)}function unlockBodyScroll(lockId){var state=getState();state.locks.delete(lockId)&&0===state.locks.size&&(state.originalBodyOverflow?document.body.style.overflow=state.originalBodyOverflow:document.body.style.removeProperty("overflow"))}var useLockBodyScroll=function useLockBodyScroll(locked){var lockId=(0,react.useId)();(0,react.useLayoutEffect)(function(){if(locked)return lockBodyScroll(lockId),function(){unlockBodyScroll(lockId)}},[locked,lockId])},ErrorBoundary=__webpack_require__("./src/components/common/ErrorBoundary/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Drawer=function Drawer(_ref){var isOpen=_ref.isOpen,children=_ref.children,title=_ref.title,isErrorBorder=_ref.isErrorBorder,onClose=_ref.onClose,_ref$isPadding=_ref.isPadding,borderColor=_ref.borderColor,overflow=_ref.overflow,onOpenEnd=_ref.onOpenEnd,palette=(0,useComponentPalette.I)("drawer"),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),shouldRender=_useState2[0],setShouldRender=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.A)(_useState3,2),isEntered=_useState4[0],setIsEntered=_useState4[1],_useState5=(0,react.useState)(0),_useState6=(0,slicedToArray.A)(_useState5,2),dragOffset=_useState6[0],setDragOffset=_useState6[1],dragStartYRef=(0,react.useRef)(null),sheetRef=(0,react.useRef)(null);(0,react.useEffect)(function(){if(isOpen)setShouldRender(!0);else{setIsEntered(!1);var timer=setTimeout(function(){return setShouldRender(!1)},300);return function(){return clearTimeout(timer)}}},[isOpen]),(0,react.useEffect)(function(){if(shouldRender&&isOpen){var raf=requestAnimationFrame(function(){return setIsEntered(!0)});return function(){return cancelAnimationFrame(raf)}}},[shouldRender,isOpen]),useLockBodyScroll(shouldRender);var handleTransitionEnd=(0,react.useCallback)(function(event){event.target===sheetRef.current&&"transform"===event.propertyName&&isOpen&&isEntered&&onOpenEnd&&onOpenEnd()},[isOpen,isEntered,onOpenEnd]),handlePointerDown=(0,react.useCallback)(function(event){var _event$currentTarget$,_event$currentTarget;dragStartYRef.current=event.clientY,null==(_event$currentTarget$=(_event$currentTarget=event.currentTarget).setPointerCapture)||_event$currentTarget$.call(_event$currentTarget,event.pointerId)},[]),handlePointerMove=(0,react.useCallback)(function(event){if(null!==dragStartYRef.current){var delta=event.clientY-dragStartYRef.current;setDragOffset(delta>0?delta:0)}},[]),handlePointerUp=(0,react.useCallback)(function(){null!==dragStartYRef.current&&(dragStartYRef.current=null,setDragOffset(0),dragOffset>80&&onClose())},[dragOffset,onClose]);if(!shouldRender)return null;var isDragging=dragOffset>0,translateY=isEntered?"".concat(dragOffset,"px"):"100%";return(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Root,{role:"dialog","aria-modal":"true",children:[(0,jsx_runtime.jsx)(Backdrop,{$bgColor:palette.backdropBg,$isVisible:isEntered,onClick:onClose}),(0,jsx_runtime.jsxs)(Sheet,{ref:sheetRef,style:{transform:"translateY(".concat(translateY,")")},$isDragging:isDragging,$isErrorBorder:isErrorBorder,$errorColor:palette.error,$borderColor:borderColor,$overflow:overflow,onTransitionEnd:handleTransitionEnd,children:[(0,jsx_runtime.jsx)(DragHandle,{onPointerDown:handlePointerDown,onPointerMove:handlePointerMove,onPointerUp:handlePointerUp,onPointerCancel:handlePointerUp,children:(0,jsx_runtime.jsx)(DragIndicator,{})}),title&&(0,jsx_runtime.jsx)(Title,{$bg:palette.titleBg,children:(0,jsx_runtime.jsx)(Typography.o,{variant:"headline4",children:title})}),(0,jsx_runtime.jsx)(ChildrenWrapper,{$bgColor:palette.bg,$isPadding:void 0===_ref$isPadding||_ref$isPadding,children:(0,jsx_runtime.jsx)(ErrorBoundary.t,{children:children})})]})]}),document.body)};try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isErrorBorder:{defaultValue:null,description:"",name:"isErrorBorder",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isPadding:{defaultValue:{value:"true"},description:"",name:"isPadding",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"string"}},onOpenEnd:{defaultValue:null,description:"",name:"onOpenEnd",required:!1,type:{name:"(() => void)"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Drawer/index.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"src/components/common/Drawer/index.tsx#Drawer"})}catch{}},"./src/components/common/ErrorBoundary/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:()=>ErrorBoundary});var classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),isNativeReflectConstruct=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js"),esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),assertThisInitialized=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");function _possibleConstructorReturn(t,e){if(e&&("object"==(0,esm_typeof.A)(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return(0,assertThisInitialized.A)(t)}function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),_possibleConstructorReturn(t,(0,isNativeReflectConstruct.A)()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}var setPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inherits(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,setPrototypeOf.A)(t,e)}var ErrorBoundary=function(_Component){function ErrorBoundary(){var _this;(0,classCallCheck.A)(this,ErrorBoundary);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_callSuper(this,ErrorBoundary,[].concat(args))).state={hasError:!1},_this}return _inherits(ErrorBoundary,_Component),(0,createClass.A)(ErrorBoundary,[{key:"componentDidCatch",value:function componentDidCatch(error,errorInfo){console.error("[@invoicebox/ui] render error:",error,errorInfo.componentStack)}},{key:"render",value:function render(){var _this$props$fallback;return this.state.hasError?null!=(_this$props$fallback=this.props.fallback)?_this$props$fallback:null:this.props.children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(){return{hasError:!0}}}])}(__webpack_require__("./node_modules/react/index.js").Component);try{ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/ErrorBoundary/index.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/components/common/ErrorBoundary/index.tsx#ErrorBoundary"})}catch{}},"./src/components/form/DateInput/logic.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:()=>logic});var _Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),logic=new(function(){function Logic(){(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,Logic),this.today=new Date}return(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.A)(Logic,[{key:"getPlaceholder",value:function getPlaceholder(withTime){return this.valueToString(this.today,withTime)}},{key:"isValid",value:function isValid(date){return!Number.isNaN(date.valueOf())}},{key:"isBetweenMinAndMax",value:function isBetweenMinAndMax(date,minDate,maxDate){return(!minDate||date>=minDate)&&(!maxDate||date<=maxDate)}},{key:"valueToString",value:function valueToString(value,withTime){if(!value)return"";var toTwoDigits=function toTwoDigits(item){return"0".concat(item).slice(-2)},date=[toTwoDigits(value.getDate()),toTwoDigits(value.getMonth()+1),value.getFullYear()].join("."),time=[toTwoDigits(value.getHours()),toTwoDigits(value.getMinutes())].join(":");return withTime?date+" "+time:date}},{key:"stringToDate",value:function stringToDate(str,withTime){var _str$split=str.split(" "),_str$split2=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_str$split,2),dateStr=_str$split2[0],timeStr=_str$split2[1],_dateStr$split=dateStr.split("."),_dateStr$split2=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_dateStr$split,3),dd=_dateStr$split2[0],mm=_dateStr$split2[1],yyyy=_dateStr$split2[2],_ref=timeStr?timeStr.split(":"):["00","00"],_ref2=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_ref,2),hours=_ref2[0],minutes=_ref2[1],formattedDateStr=[mm,dd,yyyy].filter(function(i){return i}).join("/"),formattedTimeStr=[hours,minutes,"00"].filter(function(i){return i}).join(":");return new Date(withTime?formattedDateStr+" "+formattedTimeStr:formattedDateStr)}},{key:"addHoursAndMinutesToDate",value:function addHoursAndMinutesToDate(date,hours,minutes){var newDate=new Date(date);return newDate.setHours(hours,minutes,0,0),newDate}},{key:"getHoursAndMinutesFromDate",value:function getHoursAndMinutesFromDate(date){return[date.getHours(),date.getMinutes()]}}])}())},"./src/components/form/common/DrawerHeader/components/Cross24Icon/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:()=>Cross24Icon}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Cross24Icon=function Cross24Icon(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M17 7L7 17M17 17L7 7",stroke:"#353F47",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}},"./src/components/form/common/DrawerHeader/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:()=>DrawerHeader}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
`]))),HeadLabel=(0,styled_components_browser_esm.Ay)(Typography.o)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    flex: 1;
    color: `,`;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`])),function(_ref2){return _ref2.$color}),ApplyButton=styled_components_browser_esm.Ay.button(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: `,`;

    &:disabled {
        opacity: 0.4;
    }
`])),function(_ref3){return _ref3.$color}),Cross24Icon=__webpack_require__("./src/components/form/common/DrawerHeader/components/Cross24Icon/index.tsx"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DrawerHeader=function DrawerHeader(_ref){var onClose=_ref.onClose,label=_ref.label,onSubmit=_ref.onSubmit,isSubmitDisabled=_ref.isSubmitDisabled,palette=(0,useComponentPalette.I)("drawerHeader");return(0,jsx_runtime.jsxs)(Wrapper,{$borderColor:palette.border,children:[(0,jsx_runtime.jsx)(CloseButton,{type:"button",onClick:onClose,children:(0,jsx_runtime.jsx)(Cross24Icon.e,{})}),(0,jsx_runtime.jsx)(HeadLabel,{$color:palette.headLabel,variant:"headline3",children:label}),onSubmit&&(0,jsx_runtime.jsx)(ApplyButton,{disabled:isSubmitDisabled,onClick:onSubmit,type:"button",$color:palette.applyButton,children:(0,jsx_runtime.jsx)(Typography.o,{variant:"headline6",children:"Готово"})})]})};try{DrawerHeader.displayName="DrawerHeader",DrawerHeader.__docgenInfo={description:"",displayName:"DrawerHeader",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isSubmitDisabled:{defaultValue:null,description:"",name:"isSubmitDisabled",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/common/DrawerHeader/index.tsx#DrawerHeader"]={docgenInfo:DrawerHeader.__docgenInfo,name:"DrawerHeader",path:"src/components/form/common/DrawerHeader/index.tsx#DrawerHeader"})}catch{}},"./src/hooks/useMedia/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Iu:()=>useMobile,Xu:()=>useLargeTablet,b6:()=>useMiniLaptop,mW:()=>useTablet});var _Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/breakpoints/index.ts"),useMediaQuery=function useMediaQuery(query){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function(){return"u">typeof window&&"function"==typeof window.matchMedia&&window.matchMedia(query).matches}),_useState2=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_useState,2),matches=_useState2[0],setMatches=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if("u">typeof window&&"function"==typeof window.matchMedia){var mediaQueryList=window.matchMedia(query),handleChange=function handleChange(event){return setMatches(event.matches)};return setMatches(mediaQueryList.matches),mediaQueryList.addEventListener("change",handleChange),function(){return mediaQueryList.removeEventListener("change",handleChange)}}},[query]),matches},useMobile=function useMobile(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm)},useTablet=function useTablet(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.md)},useLargeTablet=function useLargeTablet(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.ld)},useMiniLaptop=function useMiniLaptop(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.xl)}}}]);
//# sourceMappingURL=6603.4613b2d3.iframe.bundle.js.map