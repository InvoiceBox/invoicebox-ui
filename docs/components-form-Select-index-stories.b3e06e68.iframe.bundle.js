"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[3168],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_arrayLikeToArray});function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}__webpack_require__.d(__webpack_exports__,{c:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableRest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||(0,unsupportedIterableToArray.c)(arr,i)||_nonIterableRest()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.c)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.c)(o,minLen)}}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qZ:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!("object"==typeof e&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&"function"==typeof e.persist),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.c)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>"playing"===render.phase||"rendering"===render.phase);if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.Id({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),actionDisplayToEmit={id,count:0,data:{name,args:args.length>1?serializedArgs:serializedArgs[0]},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/form/Select/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Wrapper=styled_components_browser_esm.cp.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    position: relative;\n    width: 100%;\n"]))),InputWrapper=styled_components_browser_esm.cp.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n    cursor: pointer;\n\n    input {\n        cursor: pointer;\n    }\n"]))),Options=styled_components_browser_esm.cp.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.c)(["\n    display: flex;\n    flex-direction: column;\n"]))),Option=(0,styled_components_browser_esm.cp)(Typography.O)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.c)(["\n    overflow: hidden;\n    display: flex;\n    width: 100%;\n    text-align: left;\n    flex-direction: column;\n    padding: 12px 20px;\n    transition: all 0.2s ease-in-out 0s;\n    box-sizing: border-box;\n    cursor: pointer;\n\n    &:hover {\n        background-color: ",";\n    }\n\n    ","\n"])),function(_ref){return _ref.$palette.bgHover},function(_ref2){return _ref2.$isGrouped&&(0,styled_components_browser_esm.gV)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.c)(["\n            padding-left: 30px;\n        "])))}),Group=(0,styled_components_browser_esm.cp)(Typography.O)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.c)(["\n    padding: 12px 20px;\n"]))),Input=__webpack_require__("./src/components/form/Select/components/Input/index.tsx"),useInputFocus=__webpack_require__("./src/hooks/useInputFocus/index.ts"),Dropdown=__webpack_require__("./src/components/common/Dropdown/index.tsx"),Scrollbar=__webpack_require__("./src/components/common/Scrollbar/index.tsx"),useOutsideClick=__webpack_require__("./src/hooks/useOutsideClick/index.ts"),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OPTION_IDENTIFIER="option-identifier",Select=function(_ref){var groups,label=_ref.label,hasError=_ref.hasError,placeholder=_ref.placeholder,onFocus=_ref.onFocus,onBlur=_ref.onBlur,name=_ref.name,value=_ref.value,onChange=_ref.onChange,options=_ref.options,_ref$groups=_ref.groups,palette=(0,src_palette.s)("select"),_useInputFocus=(0,useInputFocus.S)({onFocus:onFocus,onBlur:onBlur}),inFocus=_useInputFocus.inFocus,focusHandler=_useInputFocus.handleFocus,blurHandler=_useInputFocus.handleBlur,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.c)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],delayBlur=(0,react.useRef)(null),selectedOption=(0,react.useMemo)(function(){return options.find(function(option){return option.value===value})},[options,value]),optionGroups=(groups=void 0===_ref$groups?[]:_ref$groups,(0,react.useMemo)(function(){var optionsByGroupId=new Map;options.forEach(function(option){var item=optionsByGroupId.get(option.groupId);item?item.push(option):optionsByGroupId.set(option.groupId,[option])});var optionGroups=groups.map(function(group){return{group:group,options:optionsByGroupId.get(group.id)||[]}});return optionGroups.push({group:null,options:optionsByGroupId.get(void 0)||[]}),optionGroups.filter(function(item){return item.options.length>0})},[groups,options])),handleShow=(0,react.useCallback)(function(){return setIsOpen(!0)},[]),handleHide=(0,react.useCallback)(function(){return setIsOpen(!1)},[]),wrapperRef=(0,useOutsideClick.c)(handleHide),handleFocus=(0,react.useCallback)(function(event){handleShow(),focusHandler(event)},[focusHandler,handleShow]),handleBlur=(0,react.useCallback)(function(event){var relatedTarget=event.relatedTarget;if((null==relatedTarget?void 0:relatedTarget.dataset.optionIdentifier)!==OPTION_IDENTIFIER){blurHandler(event);return}delayBlur.current=function(){return blurHandler(event)}},[blurHandler]),handleSelect=(0,react.useCallback)(function(event){onChange(JSON.parse(event.currentTarget.dataset.value)),handleHide(),delayBlur.current&&(delayBlur.current(),delayBlur.current=null)},[handleHide,onChange]);return(0,jsx_runtime.jsxs)(Wrapper,{ref:wrapperRef,children:[(0,jsx_runtime.jsx)(InputWrapper,{children:(0,jsx_runtime.jsx)(Input.E,{label:label,hasError:hasError,inFocus:inFocus,placeholder:placeholder,onFocus:handleFocus,onBlur:handleBlur,value:(null==selectedOption?void 0:selectedOption.label)||"",name:name,isOpen:isOpen})}),(0,jsx_runtime.jsx)(Dropdown.c,{isOpen:isOpen,isAutoPosition:!0,width:"100%",children:(0,jsx_runtime.jsx)(Options,{children:(0,jsx_runtime.jsx)(Scrollbar.a,{maxHeight:294,children:optionGroups.map(function(_ref2){var group=_ref2.group,groupOptions=_ref2.options;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[group?(0,jsx_runtime.jsx)(Group,{variant:"headerText",children:group.label}):null,groupOptions.map(function(option){return(0,jsx_runtime.jsx)(Option,{$palette:palette,variant:"bodyMRegular",onClick:handleSelect,"data-value":JSON.stringify(option.value),"data-option-identifier":OPTION_IDENTIFIER,$isGrouped:!!group,children:option.label},option.value)})]},(null==group?void 0:group.id)||null)})})})})]})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: TValue) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TOption<TValue>[]"}},groups:{defaultValue:{value:"[]"},description:"",name:"groups",required:!1,type:{name:"TGroup[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/Select/index.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/form/Select/index.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}let index_stories={title:"form/Select",component:Select,tags:["autodocs"]};var selectOptions=[{label:"Option 1",value:"option-1",groupId:"1"},{label:"Option 2",value:"option-2",groupId:"1"},{label:"Option 3",value:"option-3",groupId:"2"},{label:"Option 4",value:"option-4",groupId:"2"},{label:"Option 5",value:"option-5"},{label:"Option 6",value:"option-6"},{label:"Option 7",value:"option-7"},{label:"Option 8",value:"option-8"},{label:"Option 9",value:"option-9"},{label:"Option 10",value:"option-10"},{label:"Option 11",value:"option-11"},{label:"Option 12",value:"option-12"}],Default={args:{hasError:!1,label:"Label",name:"name",placeholder:"Placeholder",groups:[{label:"Group 1",id:"1"},{label:"Group 2",id:"2"}]},render:function Component(props){var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray.c)(_useState,2),value=_useState2[0],setValue=_useState2[1],handleChange=(0,react.useCallback)(function(newValue){setValue(newValue),(0,dist.qZ)("onChange")(newValue)},[]);return(0,jsx_runtime.jsx)(Select,(0,objectSpread2.c)((0,objectSpread2.c)({},props),{},{value:value,onChange:handleChange,options:selectOptions}))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    hasError: false,\n    label: 'Label',\n    name: 'name',\n    placeholder: 'Placeholder',\n    groups: [{\n      label: 'Group 1',\n      id: '1'\n    }, {\n      label: 'Group 2',\n      id: '2'\n    }]\n  },\n  render: function Component(props) {\n    const [value, setValue] = useState<string | null>(null);\n    const handleChange = useCallback((newValue: string | null) => {\n      setValue(newValue);\n      action('onChange')(newValue);\n    }, []);\n    return <Select {...props} value={value} onChange={handleChange} options={selectOptions} />;\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/common/Arrow/components/StyledSvg/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>StyledSvg});var _templateObject,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Arrow/components/Svg/index.tsx"),StyledSvg=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.cp)(_Svg__WEBPACK_IMPORTED_MODULE_0__.A)(_templateObject||(_templateObject=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.c)(["\n    transform: rotateZ(","deg);\n    transition: all 0.2s ease-in-out 0s;\n    box-sizing: content-box;\n\n    padding: ","px;\n\n    path {\n        stroke: ",";\n"])),function(_ref){var $isOpen=_ref.$isOpen,$defaultRotate=_ref.$defaultRotate;return $isOpen?$defaultRotate+180:$defaultRotate},function(_ref2){return _ref2.$padding},function(_ref3){var $isOpen=_ref3.$isOpen,$openColor=_ref3.$openColor,$closeColor=_ref3.$closeColor;return $isOpen?$openColor:$closeColor})},"./src/components/common/Arrow/components/Svg/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Svg}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Svg=function(_ref){var className=_ref.className,size=_ref.size;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:className,width:size,height:size,viewBox:"7 7 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M16.0846 9.95825L12.0013 14.0416L7.91797 9.95825",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})};try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Arrow/components/Svg/index.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/common/Arrow/components/Svg/index.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Arrow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Arrow}),__webpack_require__("./node_modules/react/index.js");var _components_StyledSvg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Arrow/components/StyledSvg/index.ts"),_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Arrow=function(_ref){var isOpen=_ref.isOpen,_ref$innerSize=_ref.innerSize,innerSize=void 0===_ref$innerSize?10:_ref$innerSize,_ref$outterSize=_ref.outterSize,_ref$defaultRotate=_ref.defaultRotate,palette=_ref.palette,mergedPalette=(0,_palette__WEBPACK_IMPORTED_MODULE_2__.s)("arrow",palette);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_StyledSvg__WEBPACK_IMPORTED_MODULE_1__.C,{$isOpen:isOpen,$openColor:mergedPalette.open,$closeColor:mergedPalette.close,size:innerSize,$padding:((void 0===_ref$outterSize?24:_ref$outterSize)-innerSize)/2,$defaultRotate:void 0===_ref$defaultRotate?0:_ref$defaultRotate})};try{Arrow.displayName="Arrow",Arrow.__docgenInfo={description:"",displayName:"Arrow",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},innerSize:{defaultValue:{value:"10"},description:"",name:"innerSize",required:!1,type:{name:"number"}},outterSize:{defaultValue:{value:"24"},description:"",name:"outterSize",required:!1,type:{name:"number"}},defaultRotate:{defaultValue:{value:"0"},description:"",name:"defaultRotate",required:!1,type:{name:"number"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"Partial<TArrowPalette>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Arrow/index.tsx#Arrow"]={docgenInfo:Arrow.__docgenInfo,name:"Arrow",path:"src/components/common/Arrow/index.tsx#Arrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Dropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Dropdown});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles_hidden=(0,styled_components_browser_esm.gV)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    visibility: hidden;\n    opacity: 0;\n    transition:\n        visibility 0ms 200ms,\n        opacity 200ms 0ms ease;\n"]))),visible=(0,styled_components_browser_esm.gV)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n    visibility: visible;\n    opacity: 1;\n    transition:\n        visibility 0ms 0ms,\n        opacity 200ms 0ms ease;\n"]))),Wrapper=styled_components_browser_esm.cp.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.c)(["\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 0px 10px 17px ",";\n    background: ",";\n\n    min-width: ",";\n    width: ",";\n\n    position: absolute;\n\n    left: ",";\n    right: ",";\n\n    z-index: ",";\n\n    ",";\n\n    ",";\n\n    ",";\n"])),function(_ref){return _ref.$palette.shadow},function(_ref2){return _ref2.$palette.bg},function(_ref3){return _ref3.$minWidth},function(_ref4){return _ref4.$width},function(_ref5){return _ref5.$positionLeft},function(_ref6){return _ref6.$positionRight},function(_ref7){var $zIndex=_ref7.$zIndex;return null!=$zIndex?$zIndex:5},function(_ref8){return _ref8.$isVisible?visible:styles_hidden},function(_ref9){var $isAbove=_ref9.$isAbove,$positionVertical=_ref9.$positionVertical;return $isAbove?(0,styled_components_browser_esm.gV)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.c)(["\n                  bottom: calc(100% + ","px);\n              "])),$positionVertical):(0,styled_components_browser_esm.gV)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.c)(["\n                  top: calc(100% + ","px);\n              "])),$positionVertical)},function(_ref10){var $translateY=_ref10.$translateY;return(0,styled_components_browser_esm.gV)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.c)(["\n        transform: translateY(",");\n    "])),$translateY)}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Dropdown=function(_ref){var children=_ref.children,isOpen=_ref.isOpen,_ref$isAutoPosition=_ref.isAutoPosition,_ref$positionVertical=_ref.positionVertical,positionVertical=void 0===_ref$positionVertical?5:_ref$positionVertical,_ref$positionLeft=_ref.positionLeft,_ref$positionRight=_ref.positionRight,_ref$minWidth=_ref.minWidth,_ref$width=_ref.width,zIndex=_ref.zIndex,onCloseTransitionEnd=_ref.onCloseTransitionEnd,palette=(0,src_palette.s)("dropdown"),position=(0,react.useRef)({isAbove:!0,translateY:"0px"}),_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.c)(_useState,2),elRef=_useState2[0],setElRef=_useState2[1],handleCloseTransitionEnd=(0,react.useCallback)(function(event){"opacity"===event.propertyName&&!isOpen&&onCloseTransitionEnd&&onCloseTransitionEnd()},[isOpen,onCloseTransitionEnd]),getPosition=(0,react.useCallback)(function(_ref2){var dropdownHeight=_ref2.dropdownHeight,belowHeight=_ref2.belowHeight,aboveHeight=_ref2.aboveHeight,dropdownIndent=_ref2.dropdownIndent;return belowHeight>=dropdownHeight+dropdownIndent?{isAbove:!1,translateY:"0px"}:aboveHeight>=dropdownHeight+dropdownIndent?{isAbove:!0,translateY:"0px"}:belowHeight>=aboveHeight?{isAbove:!1,translateY:"-".concat(dropdownHeight+dropdownIndent-belowHeight,"px")}:{isAbove:!0,translateY:"".concat(dropdownHeight+dropdownIndent-aboveHeight,"px")}},[]),openFlagCache=(0,react.useRef)(null);if(elRef){var isTriggeredByFlag=openFlagCache.current!==isOpen;if(openFlagCache.current=isOpen,isTriggeredByFlag&&isOpen){var viewportHeight=window.innerHeight,_parent$getBoundingCl=elRef.parentElement.getBoundingClientRect(),bottom=_parent$getBoundingCl.bottom,aboveHeight=_parent$getBoundingCl.top,dropdownHeight=elRef.scrollHeight;position.current=void 0!==_ref$isAutoPosition&&_ref$isAutoPosition?getPosition({dropdownHeight:dropdownHeight,aboveHeight:aboveHeight,belowHeight:viewportHeight-bottom,dropdownIndent:positionVertical}):{isAbove:!1,translateY:"0px"}}}return(0,jsx_runtime.jsx)(Wrapper,{ref:setElRef,$isVisible:isOpen,$isAbove:position.current.isAbove,$translateY:position.current.translateY,$positionVertical:positionVertical,$positionLeft:void 0===_ref$positionLeft?"0px":_ref$positionLeft,$positionRight:void 0===_ref$positionRight?"auto":_ref$positionRight,$minWidth:void 0===_ref$minWidth?"auto":_ref$minWidth,$width:void 0===_ref$width?"auto":_ref$width,$zIndex:zIndex,onTransitionEnd:handleCloseTransitionEnd,$palette:palette,children:children})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isAutoPosition:{defaultValue:{value:"false"},description:"",name:"isAutoPosition",required:!1,type:{name:"boolean"}},positionVertical:{defaultValue:{value:"5"},description:"",name:"positionVertical",required:!1,type:{name:"number"}},positionLeft:{defaultValue:{value:"0px"},description:"",name:"positionLeft",required:!1,type:{name:"string"}},positionRight:{defaultValue:{value:"auto"},description:"",name:"positionRight",required:!1,type:{name:"string"}},minWidth:{defaultValue:{value:"auto"},description:"",name:"minWidth",required:!1,type:{name:"string"}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},onCloseTransitionEnd:{defaultValue:null,description:"",name:"onCloseTransitionEnd",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/common/Dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Scrollbar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Scrollbar});var _home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-scrollbars-custom/dist/rsc.esm.js"),_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/palette/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Scrollbar=function(_ref){var children=_ref.children,maxHeight=_ref.maxHeight,palette=(0,_palette__WEBPACK_IMPORTED_MODULE_2__.s)("scrollbar"),props=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{style:{maxHeight:maxHeight,minWidth:"100%",maxWidth:"100%"},wrapperProps:{style:{right:"0px",bottom:"0px"}},contentProps:{style:{display:"block"}},thumbYProps:{style:{backgroundColor:palette.thumb}},trackYProps:{style:{backgroundColor:"transparent",width:"6px",height:"calc(100% - 4px)",top:"2px",right:"2px"}},thumbXProps:{style:{backgroundColor:palette.thumb}},trackXProps:{style:{backgroundColor:"transparent",height:"6px",width:"calc(100% - 12px)",left:"2px",bottom:"2px"}}}},[maxHeight,palette]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1__.a1,(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.c)((0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.c)({translateContentSizesToHolder:!0},props),{},{children:children}))};try{Scrollbar.displayName="Scrollbar",Scrollbar.__docgenInfo={description:"",displayName:"Scrollbar",props:{maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Scrollbar/index.tsx#Scrollbar"]={docgenInfo:Scrollbar.__docgenInfo,name:"Scrollbar",path:"src/components/common/Scrollbar/index.tsx#Scrollbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/InputLabel/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>InputLabel}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Label=(0,styled_components_browser_esm.cp)(Typography.O)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    border-radius: 10px;\n    position: absolute;\n    top: 0;\n    left: 8px;\n    background-color: ",";\n    padding: 0 10px;\n    z-index: 2;\n    transition: color 0.2s ease-in-out 0s;\n    color: ","};\n"])),function(_ref){return _ref.$palette.bg},function(_ref2){var $inFocus=_ref2.$inFocus,$palette=_ref2.$palette;return $inFocus?$palette.textHighlight:$palette.text}),Wrapper=styled_components_browser_esm.cp.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n    position: relative;\n    padding-top: ","px;\n    width: 100%;\n    opacity: ",";\n\n    &:hover "," {\n        ",";\n    }\n"])),function(_ref3){return _ref3.$isLabel?10:0},function(_ref4){return _ref4.$disabled?.5:1},Label,function(_ref5){var $disabled=_ref5.$disabled,$palette=_ref5.$palette;return!$disabled&&(0,styled_components_browser_esm.gV)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.c)(["\n                color: ",";\n            "])),$palette.textHighlight)}),src_palette=__webpack_require__("./src/palette/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputLabel=function(_ref){var _ref$disabled=_ref.disabled,label=_ref.label,_ref$inFocus=_ref.inFocus,children=_ref.children,palette=(0,src_palette.s)("inputLabel");return(0,jsx_runtime.jsxs)(Wrapper,{$palette:palette,$disabled:void 0!==_ref$disabled&&_ref$disabled,$isLabel:!!label,children:[label&&(0,jsx_runtime.jsx)(Label,{$palette:palette,$inFocus:void 0!==_ref$inFocus&&_ref$inFocus,variant:"captionRegular",children:label}),children]})};try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},inFocus:{defaultValue:{value:"false"},description:"",name:"inFocus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputLabel/index.tsx#InputLabel"]={docgenInfo:InputLabel.__docgenInfo,name:"InputLabel",path:"src/components/form/InputLabel/index.tsx#InputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/Select/components/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Input}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),IconWrapper=styled_components_browser_esm.cp.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.c)(["\n    position: absolute;\n    right: 14px;\n    height: 100%;\n    top: 0;\n    display: flex;\n    align-items: center;\n"]))),ControlWrapper=styled_components_browser_esm.cp.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.c)(["\n    position: relative;\n"]))),InputLabel=__webpack_require__("./src/components/form/InputLabel/index.tsx"),PureInput=__webpack_require__("./src/components/form/PureInput/index.tsx"),Arrow=__webpack_require__("./src/components/common/Arrow/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Input=function(_ref){var hasError=_ref.hasError,inFocus=_ref.inFocus,placeholder=_ref.placeholder,onFocus=_ref.onFocus,onBlur=_ref.onBlur,value=_ref.value,name=_ref.name,label=_ref.label,isOpen=_ref.isOpen;return(0,jsx_runtime.jsx)(InputLabel.m,{inFocus:inFocus,label:label,children:(0,jsx_runtime.jsxs)(ControlWrapper,{children:[(0,jsx_runtime.jsx)(PureInput.u,{hasError:hasError,inFocus:inFocus,name:name,placeholder:placeholder,onFocus:onFocus,onBlur:onBlur,value:value,readOnly:!0,paddingRight:52}),(0,jsx_runtime.jsx)(IconWrapper,{children:(0,jsx_runtime.jsx)(Arrow.u,{isOpen:isOpen})})]})})};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{inFocus:{defaultValue:null,description:"",name:"inFocus",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/Select/components/Input/index.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/form/Select/components/Input/index.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useInputFocus/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useInputFocus});var _home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInputFocus=function(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialFocusFlag=_ref.initialFocusFlag,onFocus=_ref.onFocus,onBlur=_ref.onBlur,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0!==_ref$initialFocusFlag&&_ref$initialFocusFlag),_useState2=(0,_home_ev_web_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.c)(_useState,2),inFocus=_useState2[0],setInFocus=_useState2[1];return{inFocus:inFocus,handleFocus:function(event){setInFocus(!0),onFocus&&onFocus(event)},handleBlur:function(event){setInFocus(!1),onBlur&&onBlur(event)}}}},"./src/hooks/useOutsideClick/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useOutsideClick=function(onClick){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleOutsideClick=function(event){ref.current&&!ref.current.contains(event.target)&&onClick()};return document.addEventListener("mousedown",handleOutsideClick),function(){document.removeEventListener("mousedown",handleOutsideClick)}},[ref,onClick]),ref}}}]);