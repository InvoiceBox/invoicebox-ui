"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[670],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray});function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayWithHoles(r){if(Array.isArray(r))return r}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableRest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||(0,unsupportedIterableToArray.A)(r,e)||_nonIterableRest()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t=({}).toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./src/components/form/Autocomplete/components/Autocomplete/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Autocomplete=__webpack_require__("./src/components/form/Autocomplete/components/Autocomplete/index.tsx"),selectOptions=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Option 4",value:"option-4"},{label:"Option 5",value:"option-5"},{label:"Option 6",value:"option-6"},{label:"Option 7",value:"option-7"},{label:"Option 8",value:"option-8"},{label:"Option 9",value:"option-9"},{label:"Option 10",value:"option-10"},{label:"Option 11",value:"option-11"},{label:"Option 12",value:"option-12"}],jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let index_stories={title:"form/Autocomplete/components/Autocomplete",component:Autocomplete.j,tags:["autodocs"]};var Default={args:{label:"Label",placeholder:"Placeholder",disabled:!1,isCustomOptionRender:!1,children:"children",inputPaddingLeft:60},render:function Component(props){var isCustomOptionRender=props.isCustomOptionRender,_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.A)(_useState,2),value=_useState2[0],setValue=_useState2[1],filtredOptions=(0,react.useMemo)(function(){return selectOptions.filter(function(option){return option.value.includes(value)})},[value]),customRender=(0,react.useCallback)(function(option){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"left",background:"#cfc",padding:5},children:["custom ",option.value]})},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Autocomplete.j,(0,objectSpread2.A)((0,objectSpread2.A)({},props),{},{value:value,onChange:setValue,options:filtredOptions,renderOption:isCustomOptionRender?customRender:void 0}))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    placeholder: 'Placeholder',\n    disabled: false,\n    isCustomOptionRender: false,\n    children: 'children',\n    inputPaddingLeft: 60\n  },\n  render: Component\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/common/Dropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles_hidden=(0,styled_components_browser_esm.AH)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    visibility: hidden;\n    opacity: 0;\n    transition:\n        visibility 0ms 200ms,\n        opacity 200ms 0ms ease;\n"]))),visible=(0,styled_components_browser_esm.AH)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n    visibility: visible;\n    opacity: 1;\n    transition:\n        visibility 0ms 0ms,\n        opacity 200ms 0ms ease;\n"]))),Wrapper=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 0px 10px 17px ",";\n    background: ",";\n\n    min-width: ",";\n    width: ",";\n\n    position: absolute;\n\n    left: ",";\n    right: ",";\n\n    z-index: ",";\n\n    ",";\n\n    ",";\n\n    ",";\n"])),function(_ref){return _ref.$palette.shadow},function(_ref2){return _ref2.$palette.bg},function(_ref3){return _ref3.$minWidth},function(_ref4){return _ref4.$width},function(_ref5){return _ref5.$positionLeft},function(_ref6){return _ref6.$positionRight},function(_ref7){var $zIndex=_ref7.$zIndex;return null!=$zIndex?$zIndex:5},function(_ref8){return _ref8.$isVisible?visible:styles_hidden},function(_ref9){var $isAbove=_ref9.$isAbove,$positionVertical=_ref9.$positionVertical;return $isAbove?(0,styled_components_browser_esm.AH)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)(["\n                  bottom: calc(100% + ","px);\n              "])),$positionVertical):(0,styled_components_browser_esm.AH)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)(["\n                  top: calc(100% + ","px);\n              "])),$positionVertical)},function(_ref10){var $translateY=_ref10.$translateY;return(0,styled_components_browser_esm.AH)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.A)(["\n        transform: translateY(",");\n    "])),$translateY)}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Dropdown=function Dropdown(_ref){var children=_ref.children,isOpen=_ref.isOpen,_ref$isAutoPosition=_ref.isAutoPosition,_ref$positionVertical=_ref.positionVertical,positionVertical=void 0===_ref$positionVertical?5:_ref$positionVertical,_ref$positionLeft=_ref.positionLeft,_ref$positionRight=_ref.positionRight,_ref$minWidth=_ref.minWidth,_ref$width=_ref.width,zIndex=_ref.zIndex,onCloseTransitionEnd=_ref.onCloseTransitionEnd,palette=(0,src_palette.Ik)("dropdown"),position=(0,react.useRef)({isAbove:!0,translateY:"0px"}),_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.A)(_useState,2),elRef=_useState2[0],setElRef=_useState2[1],handleCloseTransitionEnd=(0,react.useCallback)(function(event){"opacity"===event.propertyName&&!isOpen&&onCloseTransitionEnd&&onCloseTransitionEnd()},[isOpen,onCloseTransitionEnd]),getPosition=(0,react.useCallback)(function(_ref2){var dropdownHeight=_ref2.dropdownHeight,belowHeight=_ref2.belowHeight,aboveHeight=_ref2.aboveHeight,dropdownIndent=_ref2.dropdownIndent;return belowHeight>=dropdownHeight+dropdownIndent?{isAbove:!1,translateY:"0px"}:aboveHeight>=dropdownHeight+dropdownIndent?{isAbove:!0,translateY:"0px"}:belowHeight>=aboveHeight?{isAbove:!1,translateY:"-".concat(dropdownHeight+dropdownIndent-belowHeight,"px")}:{isAbove:!0,translateY:"".concat(dropdownHeight+dropdownIndent-aboveHeight,"px")}},[]),openFlagCache=(0,react.useRef)(null);if(elRef){var isTriggeredByFlag=openFlagCache.current!==isOpen;if(openFlagCache.current=isOpen,isTriggeredByFlag&&isOpen){var viewportHeight=window.innerHeight,_parent$getBoundingCl=elRef.parentElement.getBoundingClientRect(),bottom=_parent$getBoundingCl.bottom,aboveHeight=_parent$getBoundingCl.top,dropdownHeight=elRef.scrollHeight;position.current=void 0!==_ref$isAutoPosition&&_ref$isAutoPosition?getPosition({dropdownHeight:dropdownHeight,aboveHeight:aboveHeight,belowHeight:viewportHeight-bottom,dropdownIndent:positionVertical}):{isAbove:!1,translateY:"0px"}}}return/*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper,{ref:setElRef,$isVisible:isOpen,$isAbove:position.current.isAbove,$translateY:position.current.translateY,$positionVertical:positionVertical,$positionLeft:void 0===_ref$positionLeft?"0px":_ref$positionLeft,$positionRight:void 0===_ref$positionRight?"auto":_ref$positionRight,$minWidth:void 0===_ref$minWidth?"auto":_ref$minWidth,$width:void 0===_ref$width?"auto":_ref$width,$zIndex:zIndex,onTransitionEnd:handleCloseTransitionEnd,$palette:palette,children:children})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isAutoPosition:{defaultValue:{value:"false"},description:"",name:"isAutoPosition",required:!1,type:{name:"boolean"}},positionVertical:{defaultValue:{value:"5"},description:"",name:"positionVertical",required:!1,type:{name:"number"}},positionLeft:{defaultValue:{value:"0px"},description:"",name:"positionLeft",required:!1,type:{name:"string"}},positionRight:{defaultValue:{value:"auto"},description:"",name:"positionRight",required:!1,type:{name:"string"}},minWidth:{defaultValue:{value:"auto"},description:"",name:"minWidth",required:!1,type:{name:"string"}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},onCloseTransitionEnd:{defaultValue:null,description:"",name:"onCloseTransitionEnd",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/common/Dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Scrollbar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Scrollbar});var _Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-scrollbars-custom/dist/rsc.esm.js"),_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Scrollbar=function Scrollbar(_ref){var children=_ref.children,_ref$maxHeight=_ref.maxHeight,maxHeight=void 0===_ref$maxHeight?"100%":_ref$maxHeight,palette=(0,_palette__WEBPACK_IMPORTED_MODULE_2__.Ik)("scrollbar"),props=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{style:{maxHeight:maxHeight,minWidth:"100%",maxWidth:"100%"},wrapperProps:{style:{right:"0px",bottom:"0px"}},contentProps:{style:{display:"block"}},thumbYProps:{style:{backgroundColor:palette.thumb}},trackYProps:{style:{backgroundColor:"transparent",width:"6px",height:"calc(100% - 4px)",top:"2px",right:"2px"}},thumbXProps:{style:{backgroundColor:palette.thumb}},trackXProps:{style:{backgroundColor:"transparent",height:"6px",width:"calc(100% - 12px)",left:"2px",bottom:"2px"}}}},[maxHeight,palette]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1__.Ze,(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)({translateContentSizesToHolder:!0},props),{},{children:children}))};try{Scrollbar.displayName="Scrollbar",Scrollbar.__docgenInfo={description:"",displayName:"Scrollbar",props:{maxHeight:{defaultValue:{value:"100%"},description:"",name:"maxHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Scrollbar/index.tsx#Scrollbar"]={docgenInfo:Scrollbar.__docgenInfo,name:"Scrollbar",path:"src/components/common/Scrollbar/index.tsx#Scrollbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Skeleton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),shine=(0,styled_components_browser_esm.i7)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    0% {\n        left: calc(0% - 200px);\n    }\n    100% {\n        left: calc(100% + 200px);\n    }\n"]))),Wrapper=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n    width: ",";\n    height: ",";\n    border-radius: 10px;\n    overflow: hidden;\n    position: relative;\n    background: ",";\n"])),function(_ref){return _ref.$width},function(_ref2){return _ref2.$height},function(_ref3){return _ref3.$palette.bg}),Inner=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100px;\n    background-image: linear-gradient(\n        90deg,\n        "," 0px,\n        "," 50px,\n        "," 100px\n    );\n    animation: "," 3s infinite linear;\n"])),function(_ref4){return _ref4.$palette.bg},function(_ref5){return _ref5.$palette.flicker},function(_ref6){return _ref6.$palette.bg},shine),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Skeleton=function Skeleton(_ref){var _ref$width=_ref.width,_ref$height=_ref.height,palette=_ref.palette,mergedPalette=(0,src_palette.Ik)("skeleton",palette);return/*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper,{$width:void 0===_ref$width?"100%":_ref$width,$height:void 0===_ref$height?"100%":_ref$height,$palette:mergedPalette,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Inner,{$palette:mergedPalette})})};try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"100%"},description:"",name:"height",required:!1,type:{name:"string"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Skeleton/index.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/common/Skeleton/index.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/Autocomplete/components/Autocomplete/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Autocomplete});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    position: relative;\n    box-sizing: border-box;\n"]))),OptionWrapper=styled_components_browser_esm.Ay.button(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n    width: 100%;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    color: inherit;\n    padding: 0;\n"]))),ChildrenWrapper=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n"]))),InputLabelContent=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)(["\n    position: relative;\n"]))),DefaultSkeletonWrapper=styled_components_browser_esm.Ay.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)(["\n    padding: 6px 12px;\n"]))),AutocompleteDefaultOption=__webpack_require__("./src/components/form/Autocomplete/components/AutocompleteDefaultOption/index.tsx"),Skeleton=__webpack_require__("./src/components/common/Skeleton/index.tsx"),useMedia=__webpack_require__("./src/hooks/useMedia/index.ts"),useInputFocus=__webpack_require__("./src/hooks/useInputFocus/index.ts"),useOutsideClick=__webpack_require__("./src/hooks/useOutsideClick/index.ts"),InputLabel=__webpack_require__("./src/components/form/InputLabel/index.tsx"),PureInput=__webpack_require__("./src/components/form/PureInput/index.tsx"),Dropdown=__webpack_require__("./src/components/common/Dropdown/index.tsx"),Scrollbar=__webpack_require__("./src/components/common/Scrollbar/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DefaultSkeletonItem=function DefaultSkeletonItem(){return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultSkeletonWrapper,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton.E,{height:"20px"})})},Autocomplete=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var options=_ref.options,value=_ref.value,onChange=_ref.onChange,name=_ref.name,onBlur=_ref.onBlur,onFocus=_ref.onFocus,label=_ref.label,placeholder=_ref.placeholder,disabled=_ref.disabled,renderOption=_ref.renderOption,children=_ref.children,inputPaddingLeft=_ref.inputPaddingLeft,_ref$listHeight=_ref.listHeight,hasError=_ref.hasError,isLoading=_ref.isLoading,optionsLoader=_ref.optionsLoader,inputMaxLength=_ref.inputMaxLength,isMobile=(0,useMedia.Iu)(),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],_useInputFocus=(0,useInputFocus.m)({onFocus:onFocus,onBlur:onBlur}),inFocus=_useInputFocus.inFocus,handleFocus=_useInputFocus.handleFocus,handleBlur=_useInputFocus.handleBlur,handleOpen=(0,react.useCallback)(function(){return setIsOpen(!0)},[]),handleClose=(0,react.useCallback)(function(){return setIsOpen(!1)},[]),wrapperRef=(0,useOutsideClick.j)(handleClose),handleChange=(0,react.useCallback)(function(event){onChange(event.target.value)},[onChange]),handleSelect=(0,react.useCallback)(function(event){var option=options[JSON.parse(event.currentTarget.dataset.index)];onChange(option.value,option),handleClose()},[handleClose,onChange,options]),handleInputFocus=(0,react.useCallback)(function(event){handleOpen(),handleFocus(event)},[handleOpen,handleFocus]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper,{ref:wrapperRef,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel.l,{inFocus:inFocus,label:label,disabled:disabled,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(InputLabelContent,{children:[children?/*#__PURE__*/(0,jsx_runtime.jsx)(ChildrenWrapper,{children:children}):null,/*#__PURE__*/(0,jsx_runtime.jsx)(PureInput.d,{ref:ref,hasError:hasError,inFocus:inFocus,value:value,onChange:handleChange,onFocus:handleInputFocus,onBlur:handleBlur,name:name,placeholder:placeholder,disabled:disabled,paddingLeft:inputPaddingLeft,maxLength:inputMaxLength})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Dropdown.m,{isOpen:isOpen&&(!!options.length||!!isLoading),isAutoPosition:!0,width:"100%",minWidth:isMobile?"100%":"340px",children:isLoading?optionsLoader||/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultSkeletonItem,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultSkeletonItem,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultSkeletonItem,{})]}):/*#__PURE__*/(0,jsx_runtime.jsx)(Scrollbar.Z,{maxHeight:void 0===_ref$listHeight?294:_ref$listHeight,children:options.map(function(option,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(OptionWrapper,{tabIndex:-1,type:"button",onClick:handleSelect,"data-index":JSON.stringify(index),children:renderOption?renderOption(option):/*#__PURE__*/(0,jsx_runtime.jsx)(AutocompleteDefaultOption.x,{children:option.value})},"".concat(option.value).concat(index))})})})]})});Autocomplete.displayName="Autocomplete";try{Autocomplete.displayName="Autocomplete",Autocomplete.__docgenInfo={description:"",displayName:"Autocomplete",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string, option?: TOption | undefined) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TOption[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((option: TOption) => ReactNode)"}},inputPaddingLeft:{defaultValue:null,description:"",name:"inputPaddingLeft",required:!1,type:{name:"number"}},inputMaxLength:{defaultValue:null,description:"",name:"inputMaxLength",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},listHeight:{defaultValue:{value:"294"},description:"",name:"listHeight",required:!1,type:{name:"number"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},optionsLoader:{defaultValue:null,description:"",name:"optionsLoader",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/Autocomplete/components/Autocomplete/index.tsx#Autocomplete"]={docgenInfo:Autocomplete.__docgenInfo,name:"Autocomplete",path:"src/components/form/Autocomplete/components/Autocomplete/index.tsx#Autocomplete"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/Autocomplete/components/AutocompleteDefaultOption/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>AutocompleteDefaultOption});var _templateObject,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_Typography_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Typography/typography.ts"),_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/index.ts"),_common_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Typography/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AutocompleteDefaultOption=function AutocompleteDefaultOption(_ref){var children=_ref.children,palette=(0,_palette__WEBPACK_IMPORTED_MODULE_2__.Ik)("autocompleteDefaultOption");return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper,{variant:"bodyMRegular",element:"div",$hoverBg:palette.hoverBg,children:children})},Wrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(_common_Typography__WEBPACK_IMPORTED_MODULE_3__.o)(_templateObject||(_templateObject=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(["\n    overflow: hidden;\n    display: flex;\n    width: 100%;\n    text-align: left;\n    flex-direction: column;\n    padding: 12px 20px;\n    transition: all 0.2s ease-in-out;\n    ","\n    box-sizing: border-box;\n\n    &:hover {\n        background-color: ",";\n    }\n"])),_common_Typography_typography__WEBPACK_IMPORTED_MODULE_1__.I.bodyMRegular,function(_ref2){return _ref2.$hoverBg});try{AutocompleteDefaultOption.displayName="AutocompleteDefaultOption",AutocompleteDefaultOption.__docgenInfo={description:"",displayName:"AutocompleteDefaultOption",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/Autocomplete/components/AutocompleteDefaultOption/index.tsx#AutocompleteDefaultOption"]={docgenInfo:AutocompleteDefaultOption.__docgenInfo,name:"AutocompleteDefaultOption",path:"src/components/form/Autocomplete/components/AutocompleteDefaultOption/index.tsx#AutocompleteDefaultOption"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/InputLabel/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>InputLabel}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Label=(0,styled_components_browser_esm.Ay)(Typography.o)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    border-radius: 10px;\n    position: absolute;\n    top: 0;\n    left: 8px;\n    background-color: ",";\n    padding: 0 10px;\n    z-index: 2;\n    transition: color 0.2s ease-in-out 0s;\n    color: ","};\n"])),function(_ref){return _ref.$palette.bg},function(_ref2){var $inFocus=_ref2.$inFocus,$palette=_ref2.$palette;return $inFocus?$palette.textHighlight:$palette.text}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n    position: relative;\n    padding-top: ","px;\n    width: 100%;\n    opacity: ",";\n\n    &:hover "," {\n        ",";\n    }\n"])),function(_ref3){return _ref3.$isLabel?10:0},function(_ref4){return _ref4.$disabled?.5:1},Label,function(_ref5){var $disabled=_ref5.$disabled,$palette=_ref5.$palette;return!$disabled&&(0,styled_components_browser_esm.AH)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n                color: ",";\n            "])),$palette.textHighlight)}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputLabel=function InputLabel(_ref){var _ref$disabled=_ref.disabled,label=_ref.label,_ref$inFocus=_ref.inFocus,children=_ref.children,palette=(0,src_palette.Ik)("inputLabel");return/*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper,{$palette:palette,$disabled:void 0!==_ref$disabled&&_ref$disabled,$isLabel:!!label,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label,{$palette:palette,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,variant:"captionRegular",children:label}),children]})};try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputLabel/index.tsx#InputLabel"]={docgenInfo:InputLabel.__docgenInfo,name:"InputLabel",path:"src/components/form/InputLabel/index.tsx#InputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useInputFocus/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>useInputFocus});var _Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInputFocus=function useInputFocus(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialFocusFlag=_ref.initialFocusFlag,onFocus=_ref.onFocus,onBlur=_ref.onBlur,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0!==_ref$initialFocusFlag&&_ref$initialFocusFlag),_useState2=(0,_Users_irondimk_Desktop_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.A)(_useState,2),inFocus=_useState2[0],setInFocus=_useState2[1];return{inFocus:inFocus,handleFocus:function handleFocus(event){setInFocus(!0),onFocus&&onFocus(event)},handleBlur:function handleBlur(event){setInFocus(!1),onBlur&&onBlur(event)}}}},"./src/hooks/useMedia/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iu:()=>useMobile,Xu:()=>useLargeTablet,b6:()=>useMiniLaptop,mW:()=>useTablet});var react_responsive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-responsive/dist/react-responsive.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/breakpoints/index.ts"),useMobile=function useMobile(){return(0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({query:_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.sm})},useTablet=function useTablet(){return(0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({query:_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.md})},useLargeTablet=function useLargeTablet(){return(0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({query:_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.ld})},useMiniLaptop=function useMiniLaptop(){return(0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({query:_breakpoints__WEBPACK_IMPORTED_MODULE_0__.f.xl})}},"./src/hooks/useOutsideClick/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useOutsideClick=function useOutsideClick(onClick){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleOutsideClick=function handleOutsideClick(event){ref.current&&!ref.current.contains(event.target)&&onClick()};return document.addEventListener("mousedown",handleOutsideClick),function(){document.removeEventListener("mousedown",handleOutsideClick)}},[ref,onClick]),ref}}}]);