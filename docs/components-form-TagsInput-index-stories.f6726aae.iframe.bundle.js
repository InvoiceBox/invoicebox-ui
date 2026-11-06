"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[8807],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray});function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayWithHoles(r){if(Array.isArray(r))return r}function _iterableToArrayLimit(r,l){var t=null==r?null:"u">typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableRest(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||(0,unsupportedIterableToArray.A)(r,e)||_nonIterableRest()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _arrayWithoutHoles(r){if(Array.isArray(r))return(0,arrayLikeToArray.A)(r)}function _iterableToArray(r){if("u">typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableSpread(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||(0,unsupportedIterableToArray.A)(r)||_nonIterableSpread()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function toPrimitive(t,r){if("object"!=(0,esm_typeof.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.A)(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==(0,esm_typeof.A)(i)?i:i+""}},"./node_modules/@babel/runtime/helpers/esm/typeof.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_typeof});function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t=({}).toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./src/components/form/TagsInput/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),InputLabel=__webpack_require__("./src/components/form/InputLabel/index.tsx"),PureInput=__webpack_require__("./src/components/form/PureInput/index.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),styles=__webpack_require__("./src/components/form/PureInput/styles.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"],PureInputStyledWrapper=(0,styles.q)(function Wrapper(_ref){var children=_ref.children,other=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)("div",(0,objectSpread2.A)((0,objectSpread2.A)({},other),{},{style:{overflow:"hidden"},children:children}))}),TagsWrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
`]))),InputWithSaveButtonWrapper=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    width: auto;
    display: flex;
    align-items: center;
    gap: 12px;
`]))),SaveButton=styled_components_browser_esm.Ay.button(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    background: transparent;
    border: none;
    cursor: pointer;
`]))),ChipLabel=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
    display: flex;
    align-items: center;
    gap: 6px;
`]))),ChipRemoveButton=styled_components_browser_esm.Ay.button(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)([`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: inherit;
    padding: 0;
`])));try{PureInputStyledWrapper.displayName="PureInputStyledWrapper",PureInputStyledWrapper.__docgenInfo={description:"",displayName:"PureInputStyledWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TagsInput/styles.tsx#PureInputStyledWrapper"]={docgenInfo:PureInputStyledWrapper.__docgenInfo,name:"PureInputStyledWrapper",path:"src/components/form/TagsInput/styles.tsx#PureInputStyledWrapper"})}catch{}try{TagsWrapper.displayName="TagsWrapper",TagsWrapper.__docgenInfo={description:"",displayName:"TagsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TagsInput/styles.tsx#TagsWrapper"]={docgenInfo:TagsWrapper.__docgenInfo,name:"TagsWrapper",path:"src/components/form/TagsInput/styles.tsx#TagsWrapper"})}catch{}try{InputWithSaveButtonWrapper.displayName="InputWithSaveButtonWrapper",InputWithSaveButtonWrapper.__docgenInfo={description:"",displayName:"InputWithSaveButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TagsInput/styles.tsx#InputWithSaveButtonWrapper"]={docgenInfo:InputWithSaveButtonWrapper.__docgenInfo,name:"InputWithSaveButtonWrapper",path:"src/components/form/TagsInput/styles.tsx#InputWithSaveButtonWrapper"})}catch{}try{SaveButton.displayName="SaveButton",SaveButton.__docgenInfo={description:"",displayName:"SaveButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TagsInput/styles.tsx#SaveButton"]={docgenInfo:SaveButton.__docgenInfo,name:"SaveButton",path:"src/components/form/TagsInput/styles.tsx#SaveButton"})}catch{}try{ChipLabel.displayName="ChipLabel",ChipLabel.__docgenInfo={description:"",displayName:"ChipLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TagsInput/styles.tsx#ChipLabel"]={docgenInfo:ChipLabel.__docgenInfo,name:"ChipLabel",path:"src/components/form/TagsInput/styles.tsx#ChipLabel"})}catch{}try{ChipRemoveButton.displayName="ChipRemoveButton",ChipRemoveButton.__docgenInfo={description:"",displayName:"ChipRemoveButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TagsInput/styles.tsx#ChipRemoveButton"]={docgenInfo:ChipRemoveButton.__docgenInfo,name:"ChipRemoveButton",path:"src/components/form/TagsInput/styles.tsx#ChipRemoveButton"})}catch{}var constants=__webpack_require__("./src/components/form/constants.ts"),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Chip=__webpack_require__("./src/components/common/Chip/index.tsx"),CrossIcon=function CrossIcon(_ref){var color=_ref.color;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M11.3307 4.6665L4.66406 11.3332L11.3307 4.6665Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M11.3307 11.3332L4.66406 4.6665L11.3307 11.3332Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M11.3307 4.6665L4.66406 11.3332M11.3307 11.3332L4.66406 4.6665",stroke:color,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})};try{CrossIcon.displayName="CrossIcon",CrossIcon.__docgenInfo={description:"",displayName:"CrossIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TagsInput/assets/CrossIcon.tsx#CrossIcon"]={docgenInfo:CrossIcon.__docgenInfo,name:"CrossIcon",path:"src/components/form/TagsInput/assets/CrossIcon.tsx#CrossIcon"})}catch{}var useInputFocus=__webpack_require__("./src/hooks/useInputFocus/index.ts"),TagsInput=function TagsInput(_ref){var _ref$hasError=_ref.hasError,_ref$size=_ref.size,label=_ref.label,value=_ref.value,onChange=_ref.onChange,palette=_ref.palette,saveLabel=_ref.saveLabel,newValueAutofillIntervalRef=(0,react.useRef)(null),_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.A)(_useState,2),inputValue=_useState2[0],setInputValue=_useState2[1],_useInputFocus=(0,useInputFocus.m)(),inFocus=_useInputFocus.inFocus,handleFocus=_useInputFocus.handleFocus,handleBlur=_useInputFocus.handleBlur,inputId=(0,react.useId)(),inputRef=(0,react.useRef)(null),pureInputPalette=(0,useComponentPalette.I)("pureInput"),tagsInputPalette=(0,useComponentPalette.I)("tagsInput",palette),_SIZE_PARAMS_MAP$size=constants.U[void 0===_ref$size?"M":_ref$size],paddingBottom=_SIZE_PARAMS_MAP$size.paddingBottom,paddingTop=_SIZE_PARAMS_MAP$size.paddingTop,clearNewValueAutofillInterval=function clearNewValueAutofillInterval(){newValueAutofillIntervalRef.current&&clearInterval(newValueAutofillIntervalRef.current)},acceptNewValue=function acceptNewValue(newValue){onChange(null!=value&&value.includes(newValue)?value:[].concat((0,toConsumableArray.A)(value||[]),[newValue])),setInputValue("")},acceptValueByTimeout=function acceptValueByTimeout(newValue){newValueAutofillIntervalRef.current=setTimeout(function(){acceptNewValue(newValue)},3e3)},handleTagRemove=function handleTagRemove(tagRemoved){var valueWithoutRemovedTag=null==value?void 0:value.filter(function(tagItem){return tagItem!==tagRemoved});onChange(null!=valueWithoutRemovedTag&&valueWithoutRemovedTag.length?valueWithoutRemovedTag:void 0)},handleChipClick=function handleChipClick(chipValue){clearNewValueAutofillInterval(),setInputValue(chipValue),handleTagRemove(chipValue),acceptValueByTimeout(chipValue)};return(0,jsx_runtime.jsx)(InputLabel.l,{label:label,htmlFor:inputId,children:(0,jsx_runtime.jsx)(PureInputStyledWrapper,{$palette:pureInputPalette,$hasBorder:!0,$paddingLeft:18,$paddingRight:18,$borderRadius:10,$paddingTop:paddingTop,$paddingBottom:paddingBottom,$hasError:void 0!==_ref$hasError&&_ref$hasError,$inFocus:inFocus,onBlur:function handlePureInputWrapperBlur(event){var newFocusedElement=event.relatedTarget;!event.currentTarget.contains(newFocusedElement)&&(handleBlur(event),clearNewValueAutofillInterval(),event.target.value&&acceptNewValue(event.target.value))},onFocus:function handlePureInputWrapperFocus(event){var _inputRef$current;handleFocus(event),null==(_inputRef$current=inputRef.current)||_inputRef$current.focus()},tabIndex:-1,children:(0,jsx_runtime.jsxs)(TagsWrapper,{children:[null==value?void 0:value.map(function(tagItem,index){return(0,jsx_runtime.jsx)(Chip.v,{label:(0,jsx_runtime.jsxs)(ChipLabel,{children:[(0,jsx_runtime.jsx)(Typography.o,{variant:"labelsHintsBold",onClick:function onClick(){return handleChipClick(tagItem)},children:tagItem}),(0,jsx_runtime.jsx)(ChipRemoveButton,{type:"button",onClick:function onClick(){return handleTagRemove(tagItem)},children:(0,jsx_runtime.jsx)(CrossIcon,{color:tagsInputPalette.chipColor})})]}),color:tagsInputPalette.chipColor,bgColor:tagsInputPalette.chipBg},tagItem+index)}),(0,jsx_runtime.jsxs)(InputWithSaveButtonWrapper,{children:[(0,jsx_runtime.jsx)(PureInput.d,{id:inputId,ref:inputRef,hasBorder:inFocus,paddingBottom:0,paddingRight:0,paddingTop:0,paddingLeft:4,borderRadius:6,value:inputValue,onChange:function handleChange(event){setInputValue(event.target.value),clearNewValueAutofillInterval(),event.target.value&&acceptValueByTimeout(event.target.value)},onKeyDown:function handleKeyDown(event){if("Backspace"===event.key&&""===inputValue&&null!=value&&value.length){event.preventDefault();var lastTagValue=value[value.length-1];setInputValue(lastTagValue),handleTagRemove(lastTagValue),acceptValueByTimeout(lastTagValue)}}}),!!inputValue.length&&(null==value||!value.length||!value.includes(inputValue))&&(0,jsx_runtime.jsx)(SaveButton,{type:"button",onClick:function handleSaveButtonClick(){var _inputRef$current2;clearNewValueAutofillInterval(),acceptNewValue(inputValue),null==(_inputRef$current2=inputRef.current)||_inputRef$current2.focus()},children:(0,jsx_runtime.jsx)(Typography.o,{variant:"captionRegular",children:saveLabel})})]})]})})})};try{TagsInput.displayName="TagsInput",TagsInput.__docgenInfo={description:"",displayName:"TagsInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},saveLabel:{defaultValue:null,description:"",name:"saveLabel",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value?: string[] | undefined) => void"}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'},{value:'"XS"'}]}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"Partial<TTagsInputPalette>"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TagsInput/index.tsx#TagsInput"]={docgenInfo:TagsInput.__docgenInfo,name:"TagsInput",path:"src/components/form/TagsInput/index.tsx#TagsInput"})}catch{}let index_stories={title:"form/TagsInput",component:TagsInput,tags:["autodocs"]};var Default={args:{size:"M",label:"Label",hasError:!1,saveLabel:"Сохранить"},render:function Component(props){var _useState=(0,react.useState)(),_useState2=(0,slicedToArray.A)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsx)(TagsInput,(0,objectSpread2.A)((0,objectSpread2.A)({},props),{},{value:value,onChange:setValue}))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    label: 'Label',
    hasError: false,
    saveLabel: 'Сохранить'
  },
  render: Component
}`,...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/breakpoints/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Chip/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:()=>Chip}),__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),CHIP_PADDING_MAP={xxs:"0 4px",xs:"4px 6px"},Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
            `])),$palette.textHighlight)}),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),form_constants=__webpack_require__("./src/components/form/constants.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputLabel=function InputLabel(_ref){var _ref$disabled=_ref.disabled,label=_ref.label,_ref$inFocus=_ref.inFocus,children=_ref.children,_ref$required=_ref.required,_ref$useModernStyles=_ref.useModernStyles,useModernStyles=void 0!==_ref$useModernStyles&&_ref$useModernStyles,_ref$size=_ref.size,size=void 0===_ref$size?"M":_ref$size,left=_ref.left,htmlFor=_ref.htmlFor,palette=(0,useComponentPalette.I)("inputLabel");return(0,jsx_runtime.jsxs)(Wrapper,{$palette:palette,$disabled:void 0!==_ref$disabled&&_ref$disabled,$isLabel:!!label,$useModernStyles:useModernStyles,$marginTop:useModernStyles&&form_constants.Q[size].$labelPaddingTop<0&&label?-form_constants.Q[size].$labelPaddingTop:void 0,$paddingTop:10*!useModernStyles,children:[label&&(0,jsx_runtime.jsx)(Label,{element:"label",htmlFor:htmlFor,$palette:palette,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,variant:size&&useModernStyles?form_constants.Q[size].$labelVariant:"captionRegular",$required:void 0!==_ref$required&&_ref$required,$useModernStyles:useModernStyles,$top:useModernStyles?form_constants.Q[size].$labelPaddingTop:0,$left:left,children:label}),children]})};try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}},useModernStyles:{defaultValue:{value:"false"},description:"",name:"useModernStyles",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'},{value:'"XS"'}]}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"number"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputLabel/index.tsx#InputLabel"]={docgenInfo:InputLabel.__docgenInfo,name:"InputLabel",path:"src/components/form/InputLabel/index.tsx#InputLabel"})}catch{}},"./src/components/form/PureInput/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:()=>PureInput});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/PureInput/styles.ts"),_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/palette/useComponentPalette.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["paddingLeft","paddingRight","paddingTop","paddingBottom","borderRadius","hasError","inFocus","hasBorder","isOnlyNumbers","className","onChange","element","variant","renderedValue","useModernStyles","id"],PureInput=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function(_ref,ref){var _ref$paddingLeft=_ref.paddingLeft,_ref$paddingRight=_ref.paddingRight,_ref$paddingTop=_ref.paddingTop,_ref$paddingBottom=_ref.paddingBottom,_ref$borderRadius=_ref.borderRadius,_ref$hasError=_ref.hasError,hasError=void 0!==_ref$hasError&&_ref$hasError,_ref$inFocus=_ref.inFocus,_ref$hasBorder=_ref.hasBorder,_ref$isOnlyNumbers=_ref.isOnlyNumbers,isOnlyNumbers=void 0!==_ref$isOnlyNumbers&&_ref$isOnlyNumbers,onChange=(_ref.className,_ref.onChange),_ref$element=_ref.element,_ref$variant=_ref.variant,renderedValue=_ref.renderedValue,_ref$useModernStyles=_ref.useModernStyles,useModernStyles=void 0!==_ref$useModernStyles&&_ref$useModernStyles,id=_ref.id,rest=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded),palette=(0,_palette__WEBPACK_IMPORTED_MODULE_4__.I)("pureInput"),fallbackId=(0,react__WEBPACK_IMPORTED_MODULE_2__.useId)(),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(event){var inputValue=event.target.value;event.target.value=isOnlyNumbers?inputValue.replace(/[^0-9]/g,""):inputValue,onChange&&onChange(event)},[isOnlyNumbers,onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.m,(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)((0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.A)({ref:ref,variant:void 0===_ref$variant?"bodyMRegular":_ref$variant,element:renderedValue?"div":void 0===_ref$element?"input":_ref$element,$paddingLeft:void 0===_ref$paddingLeft?20:_ref$paddingLeft,$paddingRight:void 0===_ref$paddingRight?12:_ref$paddingRight,$paddingTop:void 0===_ref$paddingTop?13:_ref$paddingTop,$paddingBottom:void 0===_ref$paddingBottom?13:_ref$paddingBottom,$hasError:hasError,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,$hasBorder:(void 0===_ref$hasBorder||_ref$hasBorder)&&(!useModernStyles||hasError),$palette:palette,$borderRadius:void 0===_ref$borderRadius?10:_ref$borderRadius,onChange:handleChange,$useModernStyles:useModernStyles,id:null!=id?id:fallbackId},rest),{},{children:renderedValue}))});PureInput.displayName="PureInput";try{PureInput.displayName="PureInput",PureInput.__docgenInfo={description:"",displayName:"PureInput",props:{variant:{defaultValue:{value:"bodyMRegular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"headline1"'},{value:'"headline2"'},{value:'"headline3"'},{value:'"headline4"'},{value:'"headline5Desktop"'},{value:'"headline5"'},{value:'"headline6"'},{value:'"headerText"'},{value:'"buttonL"'},{value:'"bodyL"'},{value:'"bodyLUnderlined"'},{value:'"buttonM"'},{value:'"bodyMRegular"'},{value:'"bodyMBold"'},{value:'"bodyMUnderlined"'},{value:'"captionRegular"'},{value:'"labelsHintsRegular"'},{value:'"labelsHintsBold"'},{value:'"captionSRegular"'},{value:'"captionUnderlined"'},{value:'"smallMedium"'},{value:'"labelsAndHints"'}]}},paddingLeft:{defaultValue:{value:"20"},description:"",name:"paddingLeft",required:!1,type:{name:"number"}},paddingRight:{defaultValue:{value:"12"},description:"",name:"paddingRight",required:!1,type:{name:"number"}},paddingTop:{defaultValue:{value:"13"},description:"",name:"paddingTop",required:!1,type:{name:"number"}},paddingBottom:{defaultValue:{value:"13"},description:"",name:"paddingBottom",required:!1,type:{name:"number"}},borderRadius:{defaultValue:{value:"10"},description:"",name:"borderRadius",required:!1,type:{name:"number"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isOnlyNumbers:{defaultValue:{value:"false"},description:"",name:"isOnlyNumbers",required:!1,type:{name:"boolean"}},element:{defaultValue:{value:"input"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"textarea"'}]}},renderedValue:{defaultValue:null,description:"",name:"renderedValue",required:!1,type:{name:"ReactNode"}},useModernStyles:{defaultValue:{value:"false"},description:"",name:"useModernStyles",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/PureInput/index.tsx#PureInput"]={docgenInfo:PureInput.__docgenInfo,name:"PureInput",path:"src/components/form/PureInput/index.tsx#PureInput"})}catch{}},"./src/components/form/PureInput/styles.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:()=>Wrapper,q:()=>getPureInputStyled});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_reducedMotion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/reducedMotion.ts"),_common_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Typography/index.tsx"),_common_Typography_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Typography/typography.ts"),getPureInputStyled=function getPureInputStyled(component){return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(component)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
`])),function(_ref){var $variant=_ref.$variant;return $variant&&_common_Typography_typography__WEBPACK_IMPORTED_MODULE_4__.I[$variant]},function(_ref2){return _ref2.$palette.text},function(_ref3){return _ref3.$borderRadius},function(_ref4){var $palette=_ref4.$palette;return _ref4.$useModernStyles?$palette.bgOpened:$palette.bg},function(_ref5){return _ref5.$paddingRight},function(_ref6){return _ref6.$paddingLeft},function(_ref7){return _ref7.$paddingTop},function(_ref8){return _ref8.$paddingBottom},function(_ref9){var $hasError=_ref9.$hasError,$inFocus=_ref9.$inFocus,$hasBorder=_ref9.$hasBorder,$palette=_ref9.$palette;return $hasBorder?$hasError?$palette.error:$inFocus?$palette.borderFocus:$palette.border:"transparent"},function(_ref0){return _ref0.$palette.placeholder},_utils_reducedMotion__WEBPACK_IMPORTED_MODULE_2__.V)},Wrapper=getPureInputStyled(_common_Typography__WEBPACK_IMPORTED_MODULE_3__.a)},"./src/components/form/constants.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:()=>MODERN_STYLE_SIZE_PARAMS_MAP,U:()=>SIZE_PARAMS_MAP});var SIZE_PARAMS_MAP={L:{paddingTop:16,paddingBottom:16,variant:"bodyMRegular"},M:{paddingTop:13,paddingBottom:13,variant:"bodyMRegular"},XS:{paddingTop:10,paddingBottom:10,variant:"labelsHintsRegular"}},MODERN_STYLE_SIZE_PARAMS_MAP={L:{paddingTop:24,paddingBottom:8,variant:"headline5Desktop",$labelVariant:"labelsHintsRegular",$labelPaddingTop:8,$placeholderPaddingTop:16},M:{paddingTop:20,paddingBottom:4,variant:"bodyL",$labelVariant:"labelsHintsRegular",$labelPaddingTop:4,$placeholderPaddingTop:12},XS:{paddingTop:6,paddingBottom:6,variant:"headline5Desktop",$labelVariant:"labelsHintsRegular",$labelPaddingTop:-18,$placeholderPaddingTop:6}}},"./src/hooks/useInputFocus/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:()=>useInputFocus});var _Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),useInputFocus=function useInputFocus(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialFocusFlag=_ref.initialFocusFlag,onFocus=_ref.onFocus,onBlur=_ref.onBlur,_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0!==_ref$initialFocusFlag&&_ref$initialFocusFlag),_useState2=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(_useState,2),inFocus=_useState2[0],setInFocus=_useState2[1];return{inFocus:inFocus,handleFocus:function handleFocus(event){setInFocus(!0),onFocus&&onFocus(event)},handleBlur:function handleBlur(event){setInFocus(!1),onBlur&&onBlur(event)}}}},"./src/utils/reducedMotion.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>reducedMotion});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),reducedMotion=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
//# sourceMappingURL=components-form-TagsInput-index-stories.f6726aae.iframe.bundle.js.map