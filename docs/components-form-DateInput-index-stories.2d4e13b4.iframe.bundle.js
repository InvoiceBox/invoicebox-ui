"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[4150],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./src/components/form/DateInput/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),breakpoints=__webpack_require__("./src/breakpoints/index.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    position: relative;
`]))),InputWrapper=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    position: relative;
`]))),Icon=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    right: 12px;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    color: `,`;
`])),function(_ref){return _ref.$palette.icon}),CalendarWrapper=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
    padding: 16px;

    @media `,` {
        padding: 15px;
    }
`])),breakpoints.f.sm),logic=__webpack_require__("./src/components/form/DateInput/logic.ts"),useOutsideClick=__webpack_require__("./src/hooks/useOutsideClick/index.ts"),useInputFocus=__webpack_require__("./src/hooks/useInputFocus/index.ts"),InputLabel=__webpack_require__("./src/components/form/InputLabel/index.tsx"),PureInput=__webpack_require__("./src/components/form/PureInput/index.tsx"),Dropdown=__webpack_require__("./src/components/common/Dropdown/index.tsx"),Calendar=__webpack_require__("./src/components/common/Calendar/index.tsx"),CalendarIcon=__webpack_require__("./src/components/form/DateInput/components/CalendarIcon/index.tsx"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),useMedia=__webpack_require__("./src/hooks/useMedia/index.ts"),MobileDrawerDateCalendar=__webpack_require__("./src/components/form/DateInput/components/MobileDrawerDateCalendar/index.tsx"),useInputStyles=__webpack_require__("./src/components/form/_hooks/useInputStyles.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DateInput=function DateInput(_ref){var onChange=_ref.onChange,value=_ref.value,hasError=_ref.hasError,name=_ref.name,onBlur=_ref.onBlur,onFocus=_ref.onFocus,label=_ref.label,minDate=_ref.minDate,maxDate=_ref.maxDate,size=_ref.size,dropdownProps=_ref.dropdownProps,placeholder=_ref.placeholder,_ref$useModernStyles=_ref.useModernStyles,useModernStyles=void 0!==_ref$useModernStyles&&_ref$useModernStyles,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required,id=_ref.id,palette=(0,useComponentPalette.I)("dateInput"),inputRef=(0,react.useRef)(null),fallbackId=(0,react.useId)(),inputId=null!=id?id:fallbackId,isMobile=(0,useMedia.Iu)(),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),isOpen=_useState2[0],setOpenFlag=_useState2[1],handleTrigger=(0,react.useCallback)(function(){return setOpenFlag(function(flag){return!flag})},[]),handleClose=(0,react.useCallback)(function(){return setOpenFlag(!1)},[]),dropdownRef=(0,react.useRef)(null),elRef=(0,useOutsideClick.jz)(handleClose,[dropdownRef]),_useInputFocus=(0,useInputFocus.m)({onFocus:onFocus,onBlur:onBlur}),inFocus=_useInputFocus.inFocus,focusHandler=_useInputFocus.handleFocus,blurHandler=_useInputFocus.handleBlur,handleFocus=(0,react.useCallback)(function(event){handleClose(),focusHandler(event)},[focusHandler,handleClose]),_useState3=(0,react.useState)(logic.p.valueToString(value)),_useState4=(0,slicedToArray.A)(_useState3,2),stringValue=_useState4[0],setStringValue=_useState4[1],_useInputStyles=(0,useInputStyles.s)({isHaveValue:!!stringValue,useModernStyles:useModernStyles,size:size,label:label,inFocus:inFocus,placeholder:placeholder,conditionHideModernPlaceholder:isOpen,required:required,paddingRight:44}),inputLabel=_useInputStyles.inputLabel,paddingAndVariantOptions=_useInputStyles.paddingAndVariantOptions,modernPlaceholder=_useInputStyles.modernPlaceholder,fieldSize=_useInputStyles.fieldSize;(0,react.useEffect)(function(){stringValue&&null===value&&setStringValue("")},[value]);var handleStringValueChange=(0,react.useCallback)(function(event){setStringValue(event.target.value)},[]),handleBlur=(0,react.useCallback)(function(event){blurHandler(event);var newValue=logic.p.stringToDate(stringValue);logic.p.isValid(newValue)&&logic.p.isBetweenMinAndMax(newValue,minDate,maxDate)?(setStringValue(logic.p.valueToString(newValue)),onChange(newValue)):setStringValue(logic.p.valueToString(value))},[blurHandler,stringValue,minDate,maxDate,onChange,value]),handleCalendarChange=(0,react.useCallback)(function(newValue){handleClose(),setStringValue(logic.p.valueToString(newValue,!1)),onChange(newValue)},[handleClose,onChange]);return(0,jsx_runtime.jsxs)(Wrapper,{ref:isMobile?void 0:elRef,children:[(0,jsx_runtime.jsx)(InputLabel.l,{inFocus:inFocus,label:inputLabel,useModernStyles:useModernStyles,size:fieldSize,required:required,htmlFor:inputId,children:(0,jsx_runtime.jsxs)(InputWrapper,{children:[modernPlaceholder,(0,jsx_runtime.jsx)(PureInput.d,(0,objectSpread2.A)({id:inputId,"aria-label":label&&!inputLabel?label:void 0,onClick:handleTrigger,ref:inputRef,hasError:hasError,inFocus:inFocus,name:name,placeholder:useModernStyles?void 0:placeholder||logic.p.getPlaceholder(),onFocus:handleFocus,onBlur:handleBlur,value:stringValue,onChange:handleStringValueChange,paddingRight:44,useModernStyles:useModernStyles},paddingAndVariantOptions)),(0,jsx_runtime.jsx)(Icon,{onClick:handleTrigger,$palette:palette,children:(0,jsx_runtime.jsx)(CalendarIcon.C,{})})]})}),isMobile?(0,jsx_runtime.jsx)(MobileDrawerDateCalendar.I,{isOpen:isOpen,onClose:handleClose,value:value,onChange:handleCalendarChange,minDate:minDate,maxDate:maxDate}):(0,jsx_runtime.jsx)(Dropdown.m,(0,objectSpread2.A)((0,objectSpread2.A)({ref:dropdownRef,isOpen:isOpen,isAutoPosition:!0,role:"dialog"},dropdownProps),{},{children:(0,jsx_runtime.jsx)(CalendarWrapper,{children:(0,jsx_runtime.jsx)(Calendar.V,{value:value,onChange:handleCalendarChange,minDate:minDate,maxDate:maxDate})})}))]})};try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Date) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},dropdownProps:{defaultValue:null,description:"",name:"dropdownProps",required:!1,type:{name:'Pick<TProps, "isAutoPosition" | "positionLeft" | "positionRight" | "positionVertical">'}},useModernStyles:{defaultValue:{value:"false"},description:"",name:"useModernStyles",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'},{value:'"XS"'}]}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateInput/index.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"src/components/form/DateInput/index.tsx#DateInput"})}catch{}__webpack_require__("./node_modules/react-calendar/dist/Calendar.css");let index_stories={title:"form/DateInput",component:DateInput,tags:["autodocs"]};var Default={args:{hasError:!1,label:"Label"},render:function Component(props){var minDate=props.minDate,maxDate=props.maxDate,_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.A)(_useState,2),value=_useState2[0],setValue=_useState2[1],handleChange=(0,react.useCallback)(function(date){setValue(date),(0,dist.XI)("change")(date)},[]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(DateInput,(0,objectSpread2.A)((0,objectSpread2.A)({},props),{},{maxDate:maxDate?new Date(maxDate):void 0,minDate:minDate?new Date(minDate):void 0,value:value,onChange:handleChange})),(0,jsx_runtime.jsx)("button",{type:"button",onClick:function onClick(){return setValue(null)},children:"Reset"})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: COMMON_ARGS,
  render: Component
}`,...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/common/Calendar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>Calendar});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),esm=__webpack_require__("./node_modules/react-calendar/dist/esm/index.js"),breakpoints=__webpack_require__("./src/breakpoints/index.ts"),largeMobileStyles=(0,styled_components_browser_esm.AH)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
    `)},function(_ref8){return _ref8.$isLargeMobileSize&&largeMobileStyles}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Calendar=function Calendar(_ref){var onChange=_ref.onChange,value=_ref.value,minDate=_ref.minDate,maxDate=_ref.maxDate,selectRange=_ref.selectRange,onActiveStartDateChange=_ref.onActiveStartDateChange,_ref$isLargeMobileSiz=_ref.isLargeMobileSize,palette=(0,useComponentPalette.I)("calendar"),handleChange=(0,react.useCallback)(function(newValue){onChange(newValue)},[onChange,selectRange]);return(0,jsx_runtime.jsx)(LibCalendar,{locale:"ru",minDate:minDate,maxDate:maxDate,showNeighboringMonth:!1,minDetail:"month",next2Label:null,prev2Label:null,onChange:handleChange,value:value,selectRange:selectRange,onActiveStartDateChange:onActiveStartDateChange,$arrow:palette.arrow,$weekDay:palette.weekday,$tile:palette.tile,$tileActive:palette.tileActive,$tileBgActive:palette.tileBgActive,$tileBgRangeBetween:palette.tileBgRangeBetween,$month:palette.month,$isLargeMobileSize:void 0!==_ref$isLargeMobileSiz&&_ref$isLargeMobileSiz})};try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}},onActiveStartDateChange:{defaultValue:null,description:"",name:"onActiveStartDateChange",required:!1,type:{name:"(() => void)"}},isLargeMobileSize:{defaultValue:{value:"false"},description:"",name:"isLargeMobileSize",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: Date) => void) | ((value: [Date, Date]) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | [Date, Date] | null"}},selectRange:{defaultValue:null,description:"",name:"selectRange",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Calendar/index.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/components/common/Calendar/index.tsx#Calendar"})}catch{}},"./src/components/common/Dropdown/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),Anchor=styled_components_browser_esm.Ay.span(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    display: none;
`]))),PositionLayer=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    position: fixed;
    z-index: 1000;
    pointer-events: none;
`]))),styles_hidden=(0,styled_components_browser_esm.AH)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    visibility: hidden;
    opacity: 0;
    transition:
        visibility 0ms 200ms,
        opacity 200ms 0ms ease;
`]))),visible=(0,styled_components_browser_esm.AH)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
    visibility: visible;
    opacity: 1;
    transition:
        visibility 0ms 0ms,
        opacity 200ms 0ms ease;
`]))),Wrapper=styled_components_browser_esm.Ay.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)([`
    pointer-events: auto;
    padding: `,`;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 4px 50px 0 `,`;
    background: `,`;
    outline: 1px solid `,`;

    min-width: `,`;
    width: `,`;

    position: absolute;

    left: `,`;
    right: `,`;

    z-index: `,`;

    `,`;

    `,`;

    `,`;

    `,`
`])),function(_ref){return _ref.$usePadding?"8px 0;":"none"},function(_ref2){return _ref2.$palette.shadow},function(_ref3){return _ref3.$palette.bg},function(_ref4){return _ref4.$palette.bg},function(_ref5){return _ref5.$minWidth},function(_ref6){return _ref6.$width},function(_ref7){return _ref7.$positionLeft},function(_ref8){return _ref8.$positionRight},function(_ref9){var $zIndex=_ref9.$zIndex;return null!=$zIndex?$zIndex:5},function(_ref0){return _ref0.$isVisible?visible:styles_hidden},function(_ref1){var $isAbove=_ref1.$isAbove,$positionVertical=_ref1.$positionVertical;return $isAbove?(0,styled_components_browser_esm.AH)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.A)([`
                  bottom: calc(100% + `,`px);
              `])),$positionVertical):(0,styled_components_browser_esm.AH)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.A)([`
                  top: calc(100% + `,`px);
              `])),$positionVertical)},function(_ref10){var $translateY=_ref10.$translateY;return(0,styled_components_browser_esm.AH)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.A)([`
        transform: translateY(`,`);
    `])),$translateY)},reducedMotion.V),useOutsideClick=__webpack_require__("./src/hooks/useOutsideClick/index.ts"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Dropdown=(0,react.forwardRef)(function(_ref,forwardedRef){var children=_ref.children,isOpen=_ref.isOpen,_ref$isAutoPosition=_ref.isAutoPosition,_ref$positionVertical=_ref.positionVertical,positionVertical=void 0===_ref$positionVertical?5:_ref$positionVertical,_ref$positionLeft=_ref.positionLeft,_ref$positionRight=_ref.positionRight,_ref$minWidth=_ref.minWidth,_ref$width=_ref.width,zIndex=_ref.zIndex,onCloseTransitionEnd=_ref.onCloseTransitionEnd,_ref$isTopPosition=_ref.isTopPosition,_ref$usePadding=_ref.usePadding,role=_ref.role,palette=(0,useComponentPalette.I)("dropdown"),position=(0,react.useRef)({isAbove:!0,translateY:"0px"}),_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.A)(_useState,2),elRef=_useState2[0],setElRef=_useState2[1],anchorRef=(0,react.useRef)(null),_useState3=(0,react.useState)(null),_useState4=(0,slicedToArray.A)(_useState3,2),layerRect=_useState4[0],setLayerRect=_useState4[1];(0,react.useLayoutEffect)(function(){var updateRect=function updateRect(){var _anchorRef$current,field=null==(_anchorRef$current=anchorRef.current)?void 0:_anchorRef$current.parentElement;if(field){var rect=field.getBoundingClientRect();setLayerRect({top:rect.top,left:rect.left,width:rect.width,height:rect.height})}};if(updateRect(),isOpen)return window.addEventListener("scroll",updateRect,!0),window.addEventListener("resize",updateRect),function(){window.removeEventListener("scroll",updateRect,!0),window.removeEventListener("resize",updateRect)}},[isOpen]);var handleCloseTransitionEnd=(0,react.useCallback)(function(event){"opacity"!==event.propertyName||!isOpen&&onCloseTransitionEnd&&onCloseTransitionEnd()},[isOpen,onCloseTransitionEnd]),getPosition=(0,react.useCallback)(function(_ref2){var dropdownHeight=_ref2.dropdownHeight,belowHeight=_ref2.belowHeight,aboveHeight=_ref2.aboveHeight,dropdownIndent=_ref2.dropdownIndent;return belowHeight>=dropdownHeight+dropdownIndent?{isAbove:!1,translateY:"0px"}:aboveHeight>=dropdownHeight+dropdownIndent?{isAbove:!0,translateY:"0px"}:belowHeight>=aboveHeight?{isAbove:!1,translateY:"-".concat(dropdownHeight+dropdownIndent-belowHeight,"px")}:{isAbove:!0,translateY:"".concat(dropdownHeight+dropdownIndent-aboveHeight,"px")}},[]),openFlagCache=(0,react.useRef)(null);if(elRef){var isTriggeredByFlag=openFlagCache.current!==isOpen;if(openFlagCache.current=isOpen,isTriggeredByFlag&&isOpen){var viewportHeight=window.innerHeight,_parent$getBoundingCl=elRef.parentElement.getBoundingClientRect(),bottom=_parent$getBoundingCl.bottom,aboveHeight=_parent$getBoundingCl.top,dropdownHeight=elRef.scrollHeight;position.current=void 0!==_ref$isAutoPosition&&_ref$isAutoPosition?getPosition({dropdownHeight:dropdownHeight,aboveHeight:aboveHeight,belowHeight:viewportHeight-bottom,dropdownIndent:positionVertical}):{isAbove:void 0!==_ref$isTopPosition&&_ref$isTopPosition,translateY:"0px"}}}var setWrapperRef=(0,react.useCallback)(function(node){setElRef(node),"function"==typeof forwardedRef?forwardedRef(node):forwardedRef&&(forwardedRef.current=node)},[forwardedRef]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Anchor,{ref:anchorRef}),layerRect&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)(PositionLayer,(0,objectSpread2.A)((0,objectSpread2.A)({},(0,defineProperty.A)({},useOutsideClick.f8,"")),{},{style:{top:layerRect.top,left:layerRect.left,width:layerRect.width,height:layerRect.height},children:(0,jsx_runtime.jsx)(Wrapper,{ref:setWrapperRef,role:role,$isVisible:isOpen,$isAbove:position.current.isAbove,$translateY:position.current.translateY,$positionVertical:positionVertical,$positionLeft:void 0===_ref$positionLeft?"0px":_ref$positionLeft,$positionRight:void 0===_ref$positionRight?"auto":_ref$positionRight,$minWidth:void 0===_ref$minWidth?"auto":_ref$minWidth,$width:void 0===_ref$width?"auto":_ref$width,$zIndex:zIndex,onTransitionEnd:handleCloseTransitionEnd,$palette:palette,$usePadding:void 0!==_ref$usePadding&&_ref$usePadding,children:children})})),document.body)]})});Dropdown.displayName="Dropdown";try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isAutoPosition:{defaultValue:{value:"false"},description:"",name:"isAutoPosition",required:!1,type:{name:"boolean"}},positionVertical:{defaultValue:{value:"5"},description:"",name:"positionVertical",required:!1,type:{name:"number"}},positionLeft:{defaultValue:{value:"0px"},description:"",name:"positionLeft",required:!1,type:{name:"string"}},positionRight:{defaultValue:{value:"auto"},description:"",name:"positionRight",required:!1,type:{name:"string"}},minWidth:{defaultValue:{value:"auto"},description:"",name:"minWidth",required:!1,type:{name:"string"}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},onCloseTransitionEnd:{defaultValue:null,description:"",name:"onCloseTransitionEnd",required:!1,type:{name:"(() => void)"}},isTopPosition:{defaultValue:{value:"false"},description:"",name:"isTopPosition",required:!1,type:{name:"boolean"}},usePadding:{defaultValue:{value:"false"},description:"",name:"usePadding",required:!1,type:{name:"boolean"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/common/Dropdown/index.tsx#Dropdown"})}catch{}},"./src/components/form/DateInput/components/CalendarIcon/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:()=>CalendarIcon}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CalendarIcon=function CalendarIcon(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.5,strokeWidth:1.5,d:"M15.703 16.33h.008M12.004 16.33h.008M8.297 16.33h.008M15.703 13.092h.008M12.004 13.092h.008M8.297 13.092h.008M4.578 9.837h14.853M15.371 3.667v2.742M8.637 3.667v2.742"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.5,strokeWidth:1.5,d:"M15.532 4.982H8.476c-2.447 0-3.976 1.364-3.976 3.87v7.541c0 2.545 1.529 3.94 3.976 3.94h7.048c2.455 0 3.976-1.371 3.976-3.877V8.852c.008-2.506-1.513-3.87-3.968-3.87Z",clipRule:"evenodd"})]})}},"./src/components/form/DateInput/components/MobileDrawerDateCalendar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:()=>MobileDrawerDateCalendar}),__webpack_require__("./node_modules/react/index.js");var _templateObject,Calendar=__webpack_require__("./src/components/common/Calendar/index.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),MobileCalendarWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    padding: 18px 16px 30px;
    display: flex;
    justify-content: center;
`]))),DrawerHeader=__webpack_require__("./src/components/form/common/DrawerHeader/index.tsx"),Drawer=__webpack_require__("./src/components/common/Drawer/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MobileDrawerDateCalendar=function MobileDrawerDateCalendar(_ref){var isOpen=_ref.isOpen,onClose=_ref.onClose,maxDate=_ref.maxDate,minDate=_ref.minDate,value=_ref.value,onChange=_ref.onChange;return(0,jsx_runtime.jsxs)(Drawer._,{onClose:onClose,isOpen:isOpen,isPadding:!1,children:[(0,jsx_runtime.jsx)(DrawerHeader.B,{onClose:onClose,label:"Выберите дату"}),(0,jsx_runtime.jsx)(MobileCalendarWrapper,{children:(0,jsx_runtime.jsx)(Calendar.V,{value:value,onChange:onChange,minDate:minDate,maxDate:maxDate,isLargeMobileSize:!0})})]})};try{MobileDrawerDateCalendar.displayName="MobileDrawerDateCalendar",MobileDrawerDateCalendar.__docgenInfo={description:"",displayName:"MobileDrawerDateCalendar",props:{maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: Date) => void"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateInput/components/MobileDrawerDateCalendar/index.tsx#MobileDrawerDateCalendar"]={docgenInfo:MobileDrawerDateCalendar.__docgenInfo,name:"MobileDrawerDateCalendar",path:"src/components/form/DateInput/components/MobileDrawerDateCalendar/index.tsx#MobileDrawerDateCalendar"})}catch{}},"./src/components/form/ModernPlaceholder/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:()=>ModernPlaceholder}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),Wrapper=(0,styled_components_browser_esm.Ay)(Typography.o)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
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
`])),function(_ref){return _ref.$paddingLeft},function(_ref2){return _ref2.$paddingRight},function(_ref3){return _ref3.$paddingTop},function(_ref4){return+!!_ref4.$visible},function(_ref5){return _ref5.$visible?"0px":"-6px"},function(_ref6){return _ref6.$color},reducedMotion.V),TextContent=styled_components_browser_esm.Ay.span(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`]))),Star=styled_components_browser_esm.Ay.span(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    color: `,`;
    margin-left: 4px;
    flex-shrink: 0;
`])),function(_ref7){return _ref7.$color}),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),constants=__webpack_require__("./src/components/form/constants.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModernPlaceholder=function ModernPlaceholder(_ref){var visible=_ref.visible,_ref$paddingLeft=_ref.paddingLeft,_ref$paddingRight=_ref.paddingRight,paddingTop=_ref.paddingTop,size=_ref.size,_ref$required=_ref.required,children=_ref.children,pureInputPalette=(0,useComponentPalette.I)("pureInput"),inputLabelPalette=(0,useComponentPalette.I)("inputLabel");return(0,jsx_runtime.jsxs)(Wrapper,{variant:constants.Q[size].variant,$visible:visible,$paddingLeft:void 0===_ref$paddingLeft?20:_ref$paddingLeft,$paddingRight:void 0===_ref$paddingRight?12:_ref$paddingRight,$paddingTop:paddingTop,$color:pureInputPalette.placeholder,children:[(0,jsx_runtime.jsx)(TextContent,{children:children}),void 0!==_ref$required&&_ref$required&&(0,jsx_runtime.jsx)(Star,{$color:inputLabelPalette.error,children:"*"})]})};try{ModernPlaceholder.displayName="ModernPlaceholder",ModernPlaceholder.__docgenInfo={description:"",displayName:"ModernPlaceholder",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},paddingLeft:{defaultValue:{value:"20"},description:"",name:"paddingLeft",required:!1,type:{name:"number"}},paddingRight:{defaultValue:{value:"12"},description:"",name:"paddingRight",required:!1,type:{name:"number"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'},{value:'"XS"'}]}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/ModernPlaceholder/index.tsx#ModernPlaceholder"]={docgenInfo:ModernPlaceholder.__docgenInfo,name:"ModernPlaceholder",path:"src/components/form/ModernPlaceholder/index.tsx#ModernPlaceholder"})}catch{}},"./src/components/form/PureInput/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:()=>PureInput});var _Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/PureInput/styles.ts"),_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/palette/useComponentPalette.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["paddingLeft","paddingRight","paddingTop","paddingBottom","borderRadius","hasError","inFocus","hasBorder","isOnlyNumbers","className","onChange","element","variant","renderedValue","useModernStyles","id"],PureInput=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function(_ref,ref){var _ref$paddingLeft=_ref.paddingLeft,_ref$paddingRight=_ref.paddingRight,_ref$paddingTop=_ref.paddingTop,_ref$paddingBottom=_ref.paddingBottom,_ref$borderRadius=_ref.borderRadius,_ref$hasError=_ref.hasError,hasError=void 0!==_ref$hasError&&_ref$hasError,_ref$inFocus=_ref.inFocus,_ref$hasBorder=_ref.hasBorder,_ref$isOnlyNumbers=_ref.isOnlyNumbers,isOnlyNumbers=void 0!==_ref$isOnlyNumbers&&_ref$isOnlyNumbers,onChange=(_ref.className,_ref.onChange),_ref$element=_ref.element,_ref$variant=_ref.variant,renderedValue=_ref.renderedValue,_ref$useModernStyles=_ref.useModernStyles,useModernStyles=void 0!==_ref$useModernStyles&&_ref$useModernStyles,id=_ref.id,rest=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded),palette=(0,_palette__WEBPACK_IMPORTED_MODULE_4__.I)("pureInput"),fallbackId=(0,react__WEBPACK_IMPORTED_MODULE_2__.useId)(),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(event){var inputValue=event.target.value;event.target.value=isOnlyNumbers?inputValue.replace(/[^0-9]/g,""):inputValue,onChange&&onChange(event)},[isOnlyNumbers,onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.m,(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)((0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({ref:ref,variant:void 0===_ref$variant?"bodyMRegular":_ref$variant,element:renderedValue?"div":void 0===_ref$element?"input":_ref$element,$paddingLeft:void 0===_ref$paddingLeft?20:_ref$paddingLeft,$paddingRight:void 0===_ref$paddingRight?12:_ref$paddingRight,$paddingTop:void 0===_ref$paddingTop?13:_ref$paddingTop,$paddingBottom:void 0===_ref$paddingBottom?13:_ref$paddingBottom,$hasError:hasError,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,$hasBorder:(void 0===_ref$hasBorder||_ref$hasBorder)&&(!useModernStyles||hasError),$palette:palette,$borderRadius:void 0===_ref$borderRadius?10:_ref$borderRadius,onChange:handleChange,$useModernStyles:useModernStyles,id:null!=id?id:fallbackId},rest),{},{children:renderedValue}))});PureInput.displayName="PureInput";try{PureInput.displayName="PureInput",PureInput.__docgenInfo={description:"",displayName:"PureInput",props:{variant:{defaultValue:{value:"bodyMRegular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5Desktop"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"labelsHintsRegular"'},{value:'"labelsHintsBold"'},{value:'"captionSRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},paddingLeft:{defaultValue:{value:"20"},description:"",name:"paddingLeft",required:!1,type:{name:"number"}},paddingRight:{defaultValue:{value:"12"},description:"",name:"paddingRight",required:!1,type:{name:"number"}},paddingTop:{defaultValue:{value:"13"},description:"",name:"paddingTop",required:!1,type:{name:"number"}},paddingBottom:{defaultValue:{value:"13"},description:"",name:"paddingBottom",required:!1,type:{name:"number"}},borderRadius:{defaultValue:{value:"10"},description:"",name:"borderRadius",required:!1,type:{name:"number"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isOnlyNumbers:{defaultValue:{value:"false"},description:"",name:"isOnlyNumbers",required:!1,type:{name:"boolean"}},element:{defaultValue:{value:"input"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"textarea"'}]}},renderedValue:{defaultValue:null,description:"",name:"renderedValue",required:!1,type:{name:"ReactNode"}},useModernStyles:{defaultValue:{value:"false"},description:"",name:"useModernStyles",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/PureInput/index.tsx#PureInput"]={docgenInfo:PureInput.__docgenInfo,name:"PureInput",path:"src/components/form/PureInput/index.tsx#PureInput"})}catch{}},"./src/components/form/PureInput/styles.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:()=>Wrapper,q:()=>getPureInputStyled});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_reducedMotion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/reducedMotion.ts"),_common_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Typography/index.tsx"),_common_Typography_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Typography/typography.ts"),getPureInputStyled=function getPureInputStyled(component){return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(component)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
`])),function(_ref){var $variant=_ref.$variant;return $variant&&_common_Typography_typography__WEBPACK_IMPORTED_MODULE_4__.I[$variant]},function(_ref2){return _ref2.$palette.text},function(_ref3){return _ref3.$borderRadius},function(_ref4){var $palette=_ref4.$palette;return _ref4.$useModernStyles?$palette.bgOpened:$palette.bg},function(_ref5){return _ref5.$paddingRight},function(_ref6){return _ref6.$paddingLeft},function(_ref7){return _ref7.$paddingTop},function(_ref8){return _ref8.$paddingBottom},function(_ref9){var $hasError=_ref9.$hasError,$inFocus=_ref9.$inFocus,$hasBorder=_ref9.$hasBorder,$palette=_ref9.$palette;return $hasBorder?$hasError?$palette.error:$inFocus?$palette.borderFocus:$palette.border:"transparent"},function(_ref0){return _ref0.$palette.placeholder},_utils_reducedMotion__WEBPACK_IMPORTED_MODULE_2__.V)},Wrapper=getPureInputStyled(_common_Typography__WEBPACK_IMPORTED_MODULE_3__.a)},"./src/components/form/_hooks/useInputStyles.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:()=>useInputStyles});var _Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/constants.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_ModernPlaceholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/ModernPlaceholder/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useInputStyles=function useInputStyles(_ref){var inFocus=_ref.inFocus,useModernStyles=_ref.useModernStyles,label=_ref.label,size=_ref.size,placeholder=_ref.placeholder,isHaveValue=_ref.isHaveValue,required=_ref.required,_ref$conditionHideMod=_ref.conditionHideModernPlaceholder,paddingRight=_ref.paddingRight,isHideModernPlaceholder=isHaveValue||inFocus||void 0!==_ref$conditionHideMod&&_ref$conditionHideMod,fieldSize=useModernStyles&&!size?"L":size||"M",inputLabel=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function(){return useModernStyles?isHideModernPlaceholder?label:void 0:label},[useModernStyles,isHideModernPlaceholder,label]),paddingAndVariantOptions=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function(){return useModernStyles?isHideModernPlaceholder?_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize]:(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)((0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({},_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize]),{},{paddingTop:_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize].$placeholderPaddingTop,paddingBottom:_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize].$placeholderPaddingTop}):_constants__WEBPACK_IMPORTED_MODULE_1__.U[fieldSize]},[useModernStyles,isHideModernPlaceholder,fieldSize]),modernInputPlaceholder=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function(){return placeholder||label},[label,placeholder]),modernPlaceholder=useModernStyles&&modernInputPlaceholder&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ModernPlaceholder__WEBPACK_IMPORTED_MODULE_3__.X,{visible:!isHideModernPlaceholder,paddingTop:_constants__WEBPACK_IMPORTED_MODULE_1__.Q[fieldSize].$placeholderPaddingTop,paddingRight:paddingRight,size:fieldSize,required:required,children:modernInputPlaceholder});return{inputLabel:inputLabel,paddingAndVariantOptions:paddingAndVariantOptions,modernInputPlaceholder:modernInputPlaceholder,isHideModernPlaceholder:isHideModernPlaceholder,modernPlaceholder:modernPlaceholder,fieldSize:fieldSize}};try{useInputStyles.displayName="useInputStyles",useInputStyles.__docgenInfo={description:"",displayName:"useInputStyles",props:{inFocus:{defaultValue:null,description:"",name:"inFocus",required:!0,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'},{value:'"XS"'}]}},isHaveValue:{defaultValue:null,description:"",name:"isHaveValue",required:!0,type:{name:"boolean"}},useModernStyles:{defaultValue:null,description:"",name:"useModernStyles",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},conditionHideModernPlaceholder:{defaultValue:{value:"false"},description:"",name:"conditionHideModernPlaceholder",required:!1,type:{name:"boolean"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"number"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/_hooks/useInputStyles.tsx#useInputStyles"]={docgenInfo:useInputStyles.__docgenInfo,name:"useInputStyles",path:"src/components/form/_hooks/useInputStyles.tsx#useInputStyles"})}catch{}},"./src/hooks/useInputFocus/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:()=>useInputFocus});var _Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),useInputFocus=function useInputFocus(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialFocusFlag=_ref.initialFocusFlag,onFocus=_ref.onFocus,onBlur=_ref.onBlur,_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0!==_ref$initialFocusFlag&&_ref$initialFocusFlag),_useState2=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_useState,2),inFocus=_useState2[0],setInFocus=_useState2[1];return{inFocus:inFocus,handleFocus:function handleFocus(event){setInFocus(!0),onFocus&&onFocus(event)},handleBlur:function handleBlur(event){setInFocus(!1),onBlur&&onBlur(event)}}}},"./src/hooks/useMedia/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Iu:()=>useMobile,Xu:()=>useLargeTablet,b6:()=>useMiniLaptop,mW:()=>useTablet});var _Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/breakpoints/index.ts"),useMediaQuery=function useMediaQuery(query){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function(){return"u">typeof window&&"function"==typeof window.matchMedia&&window.matchMedia(query).matches}),_useState2=(0,_Users_dmitrii_Documents_projects_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_useState,2),matches=_useState2[0],setMatches=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if("u">typeof window&&"function"==typeof window.matchMedia){var mediaQueryList=window.matchMedia(query),handleChange=function handleChange(event){return setMatches(event.matches)};return setMatches(mediaQueryList.matches),mediaQueryList.addEventListener("change",handleChange),function(){return mediaQueryList.removeEventListener("change",handleChange)}}},[query]),matches},useMobile=function useMobile(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.sm)},useTablet=function useTablet(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.md)},useLargeTablet=function useLargeTablet(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.ld)},useMiniLaptop=function useMiniLaptop(){return useMediaQuery(_breakpoints__WEBPACK_IMPORTED_MODULE_2__.f.xl)}},"./src/hooks/useOutsideClick/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f8:()=>DROPDOWN_PORTAL_ATTR,jz:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),DROPDOWN_PORTAL_ATTR="data-invoicebox-dropdown",useOutsideClick=function useOutsideClick(onClick){var extraRefs=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),extraRefsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(extraRefs);return extraRefsRef.current=extraRefs,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleOutsideClick=function handleOutsideClick(event){var target=event.target;!ref.current||ref.current.contains(target)||target instanceof Element&&null!==target.closest("[".concat(DROPDOWN_PORTAL_ATTR,"]"))||extraRefsRef.current.some(function(extra){return extra.current&&extra.current.contains(target)})||onClick()};return document.addEventListener("mousedown",handleOutsideClick),function(){document.removeEventListener("mousedown",handleOutsideClick)}},[onClick]),ref}}}]);
//# sourceMappingURL=components-form-DateInput-index-stories.2d4e13b4.iframe.bundle.js.map