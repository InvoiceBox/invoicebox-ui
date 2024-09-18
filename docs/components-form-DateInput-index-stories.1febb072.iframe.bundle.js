"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[6880],{"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_classCallCheck});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}},"./node_modules/@babel/runtime/helpers/esm/createClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_createClass});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.c)(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}},"./src/components/form/DateInput/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),breakpoints=__webpack_require__("./src/breakpoints/index.ts"),Wrapper=styled_components_browser_esm.cp.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    position: relative;\n"]))),InputWrapper=styled_components_browser_esm.cp.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n    position: relative;\n"]))),Icon=styled_components_browser_esm.cp.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.c)(["\n    position: absolute;\n    right: 12px;\n    top: 0;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    cursor: pointer;\n    color: ",";\n"])),function(_ref){return _ref.$palette.icon}),Calendar=styled_components_browser_esm.cp.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.c)(["\n    padding: 30px;\n\n    @media "," {\n        padding: 15px;\n    }\n"])),breakpoints._.sm),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),logic=new(function(){function Logic(){(0,classCallCheck.c)(this,Logic),this.today=new Date}return(0,createClass.c)(Logic,[{key:"getPlaceholder",value:function getPlaceholder(){return this.valueToString(this.today)}},{key:"isValid",value:function isValid(date){return!Number.isNaN(date.valueOf())}},{key:"isBetweenMinAndMax",value:function isBetweenMinAndMax(date,minDate,maxDate){return(!minDate||date>=minDate)&&(!maxDate||date<=maxDate)}},{key:"valueToString",value:function valueToString(value){if(!value)return"";var toTwoDigits=function(item){return"0".concat(item).slice(-2)};return[toTwoDigits(value.getDate()),toTwoDigits(value.getMonth()+1),value.getFullYear()].join(".")}},{key:"stringToDate",value:function stringToDate(str){var _str$split=str.split("."),_str$split2=(0,slicedToArray.c)(_str$split,3),dd=_str$split2[0];return new Date([_str$split2[1],dd,_str$split2[2]].filter(function(i){return i}).join("/"))}}]),Logic}()),useOutsideClick=__webpack_require__("./src/hooks/useOutsideClick/index.ts"),useInputFocus=__webpack_require__("./src/hooks/useInputFocus/index.ts"),InputLabel=__webpack_require__("./src/components/form/InputLabel/index.tsx"),PureInput=__webpack_require__("./src/components/form/PureInput/index.tsx"),Dropdown=__webpack_require__("./src/components/common/Dropdown/index.tsx"),common_Calendar=__webpack_require__("./src/components/common/Calendar/index.tsx"),components_Icon=__webpack_require__("./src/components/form/DateInput/components/Icon/index.tsx"),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DateInput=function(_ref){var onChange=_ref.onChange,value=_ref.value,hasError=_ref.hasError,name=_ref.name,onBlur=_ref.onBlur,onFocus=_ref.onFocus,label=_ref.label,minDate=_ref.minDate,maxDate=_ref.maxDate,palette=(0,src_palette.s$)("dateInput"),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.c)(_useState,2),isOpen=_useState2[0],setOpenFlag=_useState2[1],handleTrigger=(0,react.useCallback)(function(){return setOpenFlag(function(flag){return!flag})},[]),handleClose=(0,react.useCallback)(function(){return setOpenFlag(!1)},[]),elRef=(0,useOutsideClick.c)(handleClose),_useInputFocus=(0,useInputFocus.S)({onFocus:onFocus,onBlur:onBlur}),inFocus=_useInputFocus.inFocus,focusHandler=_useInputFocus.handleFocus,blurHandler=_useInputFocus.handleBlur,handleFocus=(0,react.useCallback)(function(event){handleClose(),focusHandler(event)},[focusHandler,handleClose]),_useState3=(0,react.useState)(logic.valueToString(value)),_useState4=(0,slicedToArray.c)(_useState3,2),stringValue=_useState4[0],setStringValue=_useState4[1],handleStringValueChange=(0,react.useCallback)(function(event){setStringValue(event.target.value)},[]),handleBlur=(0,react.useCallback)(function(event){blurHandler(event);var newValue=logic.stringToDate(stringValue);if(!logic.isValid(newValue)||!logic.isBetweenMinAndMax(newValue,minDate,maxDate)){setStringValue(logic.valueToString(value));return}setStringValue(logic.valueToString(newValue)),onChange(newValue)},[blurHandler,value,stringValue,onChange,maxDate,minDate]),handleCalendarChange=(0,react.useCallback)(function(newValue){handleClose(),setStringValue(logic.valueToString(newValue)),onChange(newValue)},[onChange,handleClose]);return(0,jsx_runtime.jsxs)(Wrapper,{ref:elRef,children:[(0,jsx_runtime.jsx)(InputLabel.m,{inFocus:inFocus,label:label,children:(0,jsx_runtime.jsxs)(InputWrapper,{children:[(0,jsx_runtime.jsx)(PureInput.u,{hasError:hasError,inFocus:inFocus,name:name,placeholder:logic.getPlaceholder(),onFocus:handleFocus,onBlur:handleBlur,value:stringValue,onChange:handleStringValueChange,paddingRight:44}),(0,jsx_runtime.jsx)(Icon,{onClick:handleTrigger,$palette:palette,children:(0,jsx_runtime.jsx)(components_Icon.G,{})})]})}),(0,jsx_runtime.jsx)(Dropdown.c,{isOpen:isOpen,isAutoPosition:!0,children:(0,jsx_runtime.jsx)(Calendar,{children:(0,jsx_runtime.jsx)(common_Calendar.Y,{value:value,onChange:handleCalendarChange,minDate:minDate,maxDate:maxDate})})})]})};try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Date) => void"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateInput/index.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"src/components/form/DateInput/index.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/react-calendar/dist/Calendar.css"),__webpack_require__("./src/components/common/Calendar/index.css");let index_stories={title:"form/DateInput",component:DateInput,tags:["autodocs"]};var Default={args:{hasError:!1,label:"Label"},render:function(props){var minDate=props.minDate,maxDate=props.maxDate,_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.c)(_useState,2),value=_useState2[0],setValue=_useState2[1],handleChange=(0,react.useCallback)(function(date){setValue(date),(0,dist.qZ)("change")(date)},[]);return(0,jsx_runtime.jsx)(DateInput,(0,objectSpread2.c)((0,objectSpread2.c)({},props),{},{maxDate:maxDate?new Date(maxDate):void 0,minDate:minDate?new Date(minDate):void 0,value:value,onChange:handleChange}))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    hasError: false,\n    label: 'Label'\n  },\n  render: Component\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/common/Calendar/index.css":()=>{},"./src/components/common/Calendar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Calendar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_calendar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-calendar/dist/esm/index.js"),_palette__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/palette/index.ts"),_hooks_useCss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useCss/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Calendar=function(_ref){var onChange=_ref.onChange,value=_ref.value,minDate=_ref.minDate,maxDate=_ref.maxDate,palette=(0,_palette__WEBPACK_IMPORTED_MODULE_1__.s$)("calendar");(0,_hooks_useCss__WEBPACK_IMPORTED_MODULE_2__.s)({id:"INVOICEBOX_UI_CALENDAR",css:":root {\n            --invoicebox-ui-calendar-arrow: ".concat(palette.arrow,";\n            --invoicebox-ui-calendar-weekday: ").concat(palette.weekday,";\n            --invoicebox-ui-calendar-tile: ").concat(palette.tile,";\n            --invoicebox-ui-calendar-tile-active: ").concat(palette.tileActive,";\n            --invoicebox-ui-calendar-tile-bg-active: ").concat(palette.tileBgActive,";\n        }")});var handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(newValue){onChange(newValue)},[onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_calendar__WEBPACK_IMPORTED_MODULE_4__.cp,{locale:"ru",minDate:minDate,maxDate:maxDate,showNeighboringMonth:!1,minDetail:"month",next2Label:null,prev2Label:null,onChange:handleChange,value:value})};try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Date) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date | null"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Calendar/index.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/components/common/Calendar/index.tsx#Calendar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Dropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Dropdown});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles_hidden=(0,styled_components_browser_esm.gV)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    visibility: hidden;\n    opacity: 0;\n    transition:\n        visibility 0ms 200ms,\n        opacity 200ms 0ms ease;\n"]))),visible=(0,styled_components_browser_esm.gV)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n    visibility: visible;\n    opacity: 1;\n    transition:\n        visibility 0ms 0ms,\n        opacity 200ms 0ms ease;\n"]))),Wrapper=styled_components_browser_esm.cp.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.c)(["\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 0px 10px 17px ",";\n    background: ",";\n\n    min-width: ",";\n    width: ",";\n\n    position: absolute;\n\n    left: ",";\n    right: ",";\n\n    z-index: ",";\n\n    ",";\n\n    ",";\n\n    ",";\n"])),function(_ref){return _ref.$palette.shadow},function(_ref2){return _ref2.$palette.bg},function(_ref3){return _ref3.$minWidth},function(_ref4){return _ref4.$width},function(_ref5){return _ref5.$positionLeft},function(_ref6){return _ref6.$positionRight},function(_ref7){var $zIndex=_ref7.$zIndex;return null!=$zIndex?$zIndex:5},function(_ref8){return _ref8.$isVisible?visible:styles_hidden},function(_ref9){var $isAbove=_ref9.$isAbove,$positionVertical=_ref9.$positionVertical;return $isAbove?(0,styled_components_browser_esm.gV)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.c)(["\n                  bottom: calc(100% + ","px);\n              "])),$positionVertical):(0,styled_components_browser_esm.gV)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.c)(["\n                  top: calc(100% + ","px);\n              "])),$positionVertical)},function(_ref10){var $translateY=_ref10.$translateY;return(0,styled_components_browser_esm.gV)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.c)(["\n        transform: translateY(",");\n    "])),$translateY)}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Dropdown=function(_ref){var children=_ref.children,isOpen=_ref.isOpen,_ref$isAutoPosition=_ref.isAutoPosition,_ref$positionVertical=_ref.positionVertical,positionVertical=void 0===_ref$positionVertical?5:_ref$positionVertical,_ref$positionLeft=_ref.positionLeft,_ref$positionRight=_ref.positionRight,_ref$minWidth=_ref.minWidth,_ref$width=_ref.width,zIndex=_ref.zIndex,onCloseTransitionEnd=_ref.onCloseTransitionEnd,palette=(0,src_palette.s$)("dropdown"),position=(0,react.useRef)({isAbove:!0,translateY:"0px"}),_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.c)(_useState,2),elRef=_useState2[0],setElRef=_useState2[1],handleCloseTransitionEnd=(0,react.useCallback)(function(event){"opacity"===event.propertyName&&!isOpen&&onCloseTransitionEnd&&onCloseTransitionEnd()},[isOpen,onCloseTransitionEnd]),getPosition=(0,react.useCallback)(function(_ref2){var dropdownHeight=_ref2.dropdownHeight,belowHeight=_ref2.belowHeight,aboveHeight=_ref2.aboveHeight,dropdownIndent=_ref2.dropdownIndent;return belowHeight>=dropdownHeight+dropdownIndent?{isAbove:!1,translateY:"0px"}:aboveHeight>=dropdownHeight+dropdownIndent?{isAbove:!0,translateY:"0px"}:belowHeight>=aboveHeight?{isAbove:!1,translateY:"-".concat(dropdownHeight+dropdownIndent-belowHeight,"px")}:{isAbove:!0,translateY:"".concat(dropdownHeight+dropdownIndent-aboveHeight,"px")}},[]),openFlagCache=(0,react.useRef)(null);if(elRef){var isTriggeredByFlag=openFlagCache.current!==isOpen;if(openFlagCache.current=isOpen,isTriggeredByFlag&&isOpen){var viewportHeight=window.innerHeight,_parent$getBoundingCl=elRef.parentElement.getBoundingClientRect(),bottom=_parent$getBoundingCl.bottom,aboveHeight=_parent$getBoundingCl.top,dropdownHeight=elRef.scrollHeight;position.current=void 0!==_ref$isAutoPosition&&_ref$isAutoPosition?getPosition({dropdownHeight:dropdownHeight,aboveHeight:aboveHeight,belowHeight:viewportHeight-bottom,dropdownIndent:positionVertical}):{isAbove:!1,translateY:"0px"}}}return(0,jsx_runtime.jsx)(Wrapper,{ref:setElRef,$isVisible:isOpen,$isAbove:position.current.isAbove,$translateY:position.current.translateY,$positionVertical:positionVertical,$positionLeft:void 0===_ref$positionLeft?"0px":_ref$positionLeft,$positionRight:void 0===_ref$positionRight?"auto":_ref$positionRight,$minWidth:void 0===_ref$minWidth?"auto":_ref$minWidth,$width:void 0===_ref$width?"auto":_ref$width,$zIndex:zIndex,onTransitionEnd:handleCloseTransitionEnd,$palette:palette,children:children})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isAutoPosition:{defaultValue:{value:"false"},description:"",name:"isAutoPosition",required:!1,type:{name:"boolean"}},positionVertical:{defaultValue:{value:"5"},description:"",name:"positionVertical",required:!1,type:{name:"number"}},positionLeft:{defaultValue:{value:"0px"},description:"",name:"positionLeft",required:!1,type:{name:"string"}},positionRight:{defaultValue:{value:"auto"},description:"",name:"positionRight",required:!1,type:{name:"string"}},minWidth:{defaultValue:{value:"auto"},description:"",name:"minWidth",required:!1,type:{name:"string"}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},onCloseTransitionEnd:{defaultValue:null,description:"",name:"onCloseTransitionEnd",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/common/Dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/DateInput/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Icon}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Icon=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.5,strokeWidth:1.5,d:"M15.703 16.33h.008M12.004 16.33h.008M8.297 16.33h.008M15.703 13.092h.008M12.004 13.092h.008M8.297 13.092h.008M4.578 9.837h14.853M15.371 3.667v2.742M8.637 3.667v2.742"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.5,strokeWidth:1.5,d:"M15.532 4.982H8.476c-2.447 0-3.976 1.364-3.976 3.87v7.541c0 2.545 1.529 3.94 3.976 3.94h7.048c2.455 0 3.976-1.371 3.976-3.877V8.852c.008-2.506-1.513-3.87-3.968-3.87Z",clipRule:"evenodd"})]})}},"./src/components/form/InputLabel/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>InputLabel}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Label=(0,styled_components_browser_esm.cp)(Typography.O)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    border-radius: 10px;\n    position: absolute;\n    top: 0;\n    left: 8px;\n    background-color: ",";\n    padding: 0 10px;\n    z-index: 2;\n    transition: color 0.2s ease-in-out 0s;\n    color: ","};\n"])),function(_ref){return _ref.$palette.bg},function(_ref2){var $inFocus=_ref2.$inFocus,$palette=_ref2.$palette;return $inFocus?$palette.textHighlight:$palette.text}),Wrapper=styled_components_browser_esm.cp.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n    position: relative;\n    padding-top: ","px;\n    width: 100%;\n    opacity: ",";\n\n    &:hover "," {\n        ",";\n    }\n"])),function(_ref3){return _ref3.$isLabel?10:0},function(_ref4){return _ref4.$disabled?.5:1},Label,function(_ref5){var $disabled=_ref5.$disabled,$palette=_ref5.$palette;return!$disabled&&(0,styled_components_browser_esm.gV)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.c)(["\n                color: ",";\n            "])),$palette.textHighlight)}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputLabel=function(_ref){var _ref$disabled=_ref.disabled,label=_ref.label,_ref$inFocus=_ref.inFocus,children=_ref.children,palette=(0,src_palette.s$)("inputLabel");return(0,jsx_runtime.jsxs)(Wrapper,{$palette:palette,$disabled:void 0!==_ref$disabled&&_ref$disabled,$isLabel:!!label,children:[label&&(0,jsx_runtime.jsx)(Label,{$palette:palette,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,variant:"captionRegular",children:label}),children]})};try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputLabel/index.tsx#InputLabel"]={docgenInfo:InputLabel.__docgenInfo,name:"InputLabel",path:"src/components/form/InputLabel/index.tsx#InputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useInputFocus/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useInputFocus});var _Users_ev_web_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInputFocus=function(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialFocusFlag=_ref.initialFocusFlag,onFocus=_ref.onFocus,onBlur=_ref.onBlur,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0!==_ref$initialFocusFlag&&_ref$initialFocusFlag),_useState2=(0,_Users_ev_web_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.c)(_useState,2),inFocus=_useState2[0],setInFocus=_useState2[1];return{inFocus:inFocus,handleFocus:function(event){setInFocus(!0),onFocus&&onFocus(event)},handleBlur:function(event){setInFocus(!1),onBlur&&onBlur(event)}}}},"./src/hooks/useOutsideClick/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useOutsideClick=function(onClick){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleOutsideClick=function(event){ref.current&&!ref.current.contains(event.target)&&onClick()};return document.addEventListener("mousedown",handleOutsideClick),function(){document.removeEventListener("mousedown",handleOutsideClick)}},[ref,onClick]),ref}}}]);