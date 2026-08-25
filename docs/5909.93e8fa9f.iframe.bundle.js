"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[5909],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./src/components/common/Scrollbar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:()=>Scrollbar}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    overflow-y: auto;
    overflow-x: hidden;

    `,`

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: `,` transparent;

    /* WebKit/Blink */
    &::-webkit-scrollbar {
        width: `,`px;
        height: `,`px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: `,`;
        border-radius: 4px;
    }
`])),function(_ref){var $autoHeight=_ref.$autoHeight,$maxHeight=_ref.$maxHeight;return $autoHeight?(0,styled_components_browser_esm.AH)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
                  max-height: `,`;
              `])),"number"==typeof $maxHeight?"".concat($maxHeight,"px"):$maxHeight):(0,styled_components_browser_esm.AH)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
                  height: 100%;
              `])))},function(_ref2){return _ref2.$thumb},function(_ref3){return _ref3.$trackWidth},function(_ref4){return _ref4.$trackWidth},function(_ref5){return _ref5.$thumb}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Scrollbar=function Scrollbar(_ref){var children=_ref.children,_ref$maxHeight=_ref.maxHeight,_ref$trackWidth=_ref.trackWidth,_ref$autoHeight=_ref.autoHeight,palette=(0,useComponentPalette.I)("scrollbar");return(0,jsx_runtime.jsx)(Wrapper,{$maxHeight:void 0===_ref$maxHeight?"100%":_ref$maxHeight,$trackWidth:void 0===_ref$trackWidth?4:_ref$trackWidth,$thumb:palette.thumb,$autoHeight:void 0===_ref$autoHeight||_ref$autoHeight,children:children})};try{Scrollbar.displayName="Scrollbar",Scrollbar.__docgenInfo={description:"",displayName:"Scrollbar",props:{maxHeight:{defaultValue:{value:"100%"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},trackWidth:{defaultValue:{value:"4"},description:"",name:"trackWidth",required:!1,type:{name:"number"}},autoHeight:{defaultValue:{value:"true"},description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Scrollbar/index.tsx#Scrollbar"]={docgenInfo:Scrollbar.__docgenInfo,name:"Scrollbar",path:"src/components/common/Scrollbar/index.tsx#Scrollbar"})}catch{}},"./src/components/form/DateTimeInput/components/MobileWheelPicker/components/WheelColumn/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:()=>WheelColumn1});var _templateObject,_templateObject2,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),constants=__webpack_require__("./src/components/form/DateTimeInput/components/MobileWheelPicker/constants.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: `,`px 0;
    overflow-y: scroll;
    overscroll-behavior: contain;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    text-align: `,`;

    /* Жест забираем себе (см. WheelColumn): нативный fling живёт только у тач-скролла,
       а барабан должен докручиваться после толчка и мышью тоже. */
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }

    /* Скрываем скроллбар: барабан управляется жестом, полоса ломает нативный вид. */
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`])),constants.Wr,function(_ref){return _ref.$align}),Item=styled_components_browser_esm.Ay.button(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    display: block;
    width: 100%;
    height: `,`px;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    scroll-snap-align: center;
    font: inherit;
    text-align: inherit;
    line-height: `,`px;

    color: `,`;
    opacity: `,`;
    transform: rotateX(`,"deg) scale(",`);
    backface-visibility: hidden;
    transition:
        opacity 0.12s ease,
        transform 0.12s ease,
        color 0.12s ease;

    `,`
`])),constants.aY,constants.aY,function(_ref2){var $isActive=_ref2.$isActive,$color=_ref2.$color,$colorActive=_ref2.$colorActive;return $isActive?$colorActive:$color},function(_ref3){return _ref3.$opacity},function(_ref4){return _ref4.$incline},function(_ref5){return _ref5.$scale},reducedMotion.V),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OPACITY_STEPS=[1,.75,.45,.28,.18],INCLINE_STEPS=[0,22,42,58,68],SCALE_STEPS=[1,.94,.87,.82,.78],getIndexByScrollTop=function getIndexByScrollTop(scrollTop,count){return Math.min(Math.max(Math.round(scrollTop/constants.aY),0),Math.max(count-1,0))},WheelColumn1=function WheelColumn1(_ref){var _options$activeIndex,options=_ref.options,value=_ref.value,onChange=_ref.onChange,label=_ref.label,_ref$align=_ref.align,width=_ref.width,palette=(0,useComponentPalette.I)("mobileWheelPicker"),containerRef=(0,react.useRef)(null),rafRef=(0,react.useRef)(null),settleRef=(0,react.useRef)(null),isUserScrollingRef=(0,react.useRef)(!1),isMountedRef=(0,react.useRef)(!1),dragRef=(0,react.useRef)(null),inertiaRef=(0,react.useRef)(null),isClickSuppressedRef=(0,react.useRef)(!1),valueIndex=(0,react.useMemo)(function(){var index=options.findIndex(function(option){return option.value===value});return -1===index?0:index},[options,value]),_useState=(0,react.useState)(valueIndex),_useState2=(0,slicedToArray.A)(_useState,2),activeIndex=_useState2[0],setActiveIndex=_useState2[1],optionsRef=(0,react.useRef)(options),valueRef=(0,react.useRef)(value),onChangeRef=(0,react.useRef)(onChange);(0,react.useEffect)(function(){optionsRef.current=options,valueRef.current=value,onChangeRef.current=onChange}),(0,react.useEffect)(function(){return setActiveIndex(valueIndex)},[valueIndex]),(0,react.useEffect)(function(){var container=containerRef.current;if(container&&!isUserScrollingRef.current){var top=valueIndex*constants.aY;1>Math.abs(container.scrollTop-top)||container.scrollTo({top:top,behavior:isMountedRef.current?"smooth":"auto"})}},[valueIndex,options.length]),(0,react.useEffect)(function(){isMountedRef.current=!0},[]),(0,react.useEffect)(function(){var container=containerRef.current;if(container){var handleScroll=function handleScroll(){isUserScrollingRef.current=!0,rafRef.current&&cancelAnimationFrame(rafRef.current),rafRef.current=requestAnimationFrame(function(){setActiveIndex(getIndexByScrollTop(container.scrollTop,optionsRef.current.length))}),settleRef.current&&clearTimeout(settleRef.current),settleRef.current=setTimeout(function(){isUserScrollingRef.current=!1;var index=getIndexByScrollTop(container.scrollTop,optionsRef.current.length);setActiveIndex(index);var option=optionsRef.current[index];option&&option.value!==valueRef.current&&onChangeRef.current(option.value)},constants.lR)};return container.addEventListener("scroll",handleScroll,{passive:!0}),function(){container.removeEventListener("scroll",handleScroll),rafRef.current&&cancelAnimationFrame(rafRef.current),settleRef.current&&clearTimeout(settleRef.current)}}},[]);var stopInertia=(0,react.useCallback)(function(){inertiaRef.current&&(cancelAnimationFrame(inertiaRef.current),inertiaRef.current=null)},[]);(0,react.useEffect)(function(){return stopInertia},[stopInertia]);var setSnapEnabled=(0,react.useCallback)(function(isEnabled){var container=containerRef.current;container&&(container.style.scrollSnapType=isEnabled?"":"none")},[]),finishDrag=(0,react.useCallback)(function(){var container=containerRef.current;if(container){setSnapEnabled(!0);var index=getIndexByScrollTop(container.scrollTop,optionsRef.current.length);container.scrollTo({top:index*constants.aY,behavior:"smooth"})}},[setSnapEnabled]),startInertia=(0,react.useCallback)(function(initialVelocity){var container=containerRef.current;if(container){var velocity=initialVelocity,previousTime=performance.now(),_step=function step(now){var elapsed=Math.min(now-previousTime,50);previousTime=now;var shift=velocity*elapsed,scrollTopBefore=container.scrollTop;container.scrollTop=scrollTopBefore-shift,velocity*=Math.pow(constants.$9,elapsed/constants.VN);var isStuck=Math.abs(shift)>=1&&container.scrollTop===scrollTopBefore;if(Math.abs(velocity)<constants.Hq||isStuck){inertiaRef.current=null,finishDrag();return}inertiaRef.current=requestAnimationFrame(_step)};inertiaRef.current=requestAnimationFrame(_step)}},[finishDrag]),handlePointerDown=(0,react.useCallback)(function(event){var _event$currentTarget$,_event$currentTarget;stopInertia(),setSnapEnabled(!1),isClickSuppressedRef.current=!1,isUserScrollingRef.current=!0,dragRef.current={pointerId:event.pointerId,startY:event.clientY,lastY:event.clientY,lastTime:event.timeStamp,velocity:0,isMoved:!1},null==(_event$currentTarget$=(_event$currentTarget=event.currentTarget).setPointerCapture)||_event$currentTarget$.call(_event$currentTarget,event.pointerId)},[setSnapEnabled,stopInertia]),handlePointerMove=(0,react.useCallback)(function(event){var drag=dragRef.current,container=containerRef.current;if(drag&&container&&drag.pointerId===event.pointerId){var shift=event.clientY-drag.lastY,elapsed=event.timeStamp-drag.lastTime;container.scrollTop-=shift,elapsed>0&&(drag.velocity=.7*drag.velocity+shift/elapsed*.3),Math.abs(event.clientY-drag.startY)>constants.J7&&(drag.isMoved=!0),drag.lastY=event.clientY,drag.lastTime=event.timeStamp}},[]),handlePointerUp=(0,react.useCallback)(function(event){var drag=dragRef.current;if(drag&&drag.pointerId===event.pointerId){dragRef.current=null,isClickSuppressedRef.current=drag.isMoved;var velocity=event.timeStamp-drag.lastTime>constants.QY?0:Math.min(Math.max(drag.velocity,-constants.lW),constants.lW);if(Math.abs(velocity)<constants.Hq)return void finishDrag();startInertia(velocity)}},[finishDrag,startInertia]),handleItemClick=(0,react.useCallback)(function(index){var _containerRef$current;isClickSuppressedRef.current||null==(_containerRef$current=containerRef.current)||_containerRef$current.scrollTo({top:index*constants.aY,behavior:"smooth"})},[]),activeValue=null==(_options$activeIndex=options[activeIndex])?void 0:_options$activeIndex.value;return(0,jsx_runtime.jsx)(Wrapper,{ref:containerRef,$align:void 0===_ref$align?"center":_ref$align,style:width?{width:width}:void 0,role:"listbox","aria-label":label,tabIndex:-1,onPointerDown:handlePointerDown,onPointerMove:handlePointerMove,onPointerUp:handlePointerUp,onPointerCancel:handlePointerUp,children:options.map(function(option,index){var step=Math.min(Math.abs(index-activeIndex),OPACITY_STEPS.length-1);return(0,jsx_runtime.jsx)(Item,{type:"button",role:"option","aria-selected":option.value===activeValue,onClick:function onClick(){return handleItemClick(index)},$color:palette.value,$colorActive:palette.valueActive,$isActive:index===activeIndex,$opacity:OPACITY_STEPS[step],$incline:INCLINE_STEPS[step],$scale:SCALE_STEPS[step],children:option.label},option.value)})})};try{WheelColumn1.displayName="WheelColumn",WheelColumn1.__docgenInfo={description:"",displayName:"WheelColumn",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TWheelOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateTimeInput/components/MobileWheelPicker/components/WheelColumn/index.tsx#WheelColumn"]={docgenInfo:WheelColumn1.__docgenInfo,name:"WheelColumn",path:"src/components/form/DateTimeInput/components/MobileWheelPicker/components/WheelColumn/index.tsx#WheelColumn"})}catch{}},"./src/components/form/DateTimeInput/components/MobileWheelPicker/constants.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$9:()=>FRICTION_PER_FRAME,Hq:()=>MIN_VELOCITY,J7:()=>DRAG_THRESHOLD,QY:()=>STALE_DRAG_MS,VN:()=>FRAME_MS,Wr:()=>EDGE_PADDING,aY:()=>ITEM_HEIGHT,gU:()=>WHEEL_HEIGHT,lR:()=>SETTLE_MS,lW:()=>MAX_VELOCITY});var ITEM_HEIGHT=34,WHEEL_HEIGHT=170,EDGE_PADDING=68,SETTLE_MS=140,FRICTION_PER_FRAME=.94,FRAME_MS=1e3/60,MIN_VELOCITY=.02,MAX_VELOCITY=4,DRAG_THRESHOLD=4,STALE_DRAG_MS=80},"./src/components/form/DateTimeInput/components/MobileWheelPicker/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:()=>MobileWheelPicker}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./src/components/form/DateTimeInput/components/MobileWheelPicker/constants.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    position: relative;
    height: `,`px;
    display: flex;
    justify-content: center;
    gap: 8px;
    box-sizing: border-box;

    font-size: 23px;
    font-weight: 400;
    line-height: `,`px;

    /* Системный шрифт: барабан должен выглядеть частью ОС, а не формы. */
    font-family: `,`;
`])),constants.gU,constants.aY,function(_ref){return _ref.$isIphone?"-apple-system, BlinkMacSystemFont":"'Roboto', sans-serif"}),SelectedBand=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: `,`px;
    transform: translateY(-50%);
    border-radius: 8px;
    background-color: `,`;
    pointer-events: none;
`])),constants.aY,function(_ref2){return _ref2.$bgColor}),Fade=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    position: absolute;
    left: 0;
    right: 0;
    height: `,`px;
    pointer-events: none;
    `,`
    background: linear-gradient(
        `,`,
        `,`,
        `,`
    );
`])),constants.Wr,function(_ref3){return _ref3.$isTop?"top: 0;":"bottom: 0;"},function(_ref4){return _ref4.$isTop?"to bottom":"to top"},function(_ref5){return _ref5.$from},function(_ref6){return _ref6.$to}),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MobileWheelPicker=function MobileWheelPicker(_ref){var children=_ref.children,label=_ref.label,palette=(0,useComponentPalette.I)("mobileWheelPicker");return(0,jsx_runtime.jsxs)(Wrapper,{$isIphone:"u">typeof navigator&&/iPhone/.test(navigator.userAgent),role:"group","aria-label":label,children:[(0,jsx_runtime.jsx)(SelectedBand,{$bgColor:palette.selectedBg}),children,(0,jsx_runtime.jsx)(Fade,{$isTop:!0,$from:palette.fadeBg,$to:palette.fadeBgTransparent}),(0,jsx_runtime.jsx)(Fade,{$isTop:!1,$from:palette.fadeBg,$to:palette.fadeBgTransparent})]})};try{MobileWheelPicker.displayName="MobileWheelPicker",MobileWheelPicker.__docgenInfo={description:`Общая \xabобвязка\xbb барабанного пикера: подсветка выбранной строки по центру и
затухание к краям. Внутрь кладутся WheelColumn — по одной на каждую часть значения.`,displayName:"MobileWheelPicker",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateTimeInput/components/MobileWheelPicker/index.tsx#MobileWheelPicker"]={docgenInfo:MobileWheelPicker.__docgenInfo,name:"MobileWheelPicker",path:"src/components/form/DateTimeInput/components/MobileWheelPicker/index.tsx#MobileWheelPicker"})}catch{}try{WheelColumn.displayName="WheelColumn",WheelColumn.__docgenInfo={description:"",displayName:"WheelColumn",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TWheelOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateTimeInput/components/MobileWheelPicker/index.tsx#WheelColumn"]={docgenInfo:WheelColumn.__docgenInfo,name:"WheelColumn",path:"src/components/form/DateTimeInput/components/MobileWheelPicker/index.tsx#WheelColumn"})}catch{}},"./src/components/form/DateTimeInput/components/TimePicker/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>TimePicker});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");__webpack_require__("./node_modules/react/index.js");var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
    display: flex;
    width: 93px;
    box-sizing: border-box;
    height: `,`px;
`])),function(_ref){return _ref.$height}),ColumnWrapper=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)([`
    display: flex;
    flex-direction: column;
    width: 46px;

    &:last-child {
        border-left: 1px solid `,`;
    }
`])),function(_ref2){return _ref2.$borderColor}),Label=(0,styled_components_browser_esm.Ay)(Typography.o)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)([`
    padding: 8px 0;
    color: `,`;
    text-align: center;
`])),function(_ref3){return _ref3.$color}),ValuesWrapper=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)([`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 30px;
    padding: 8px 0;
    box-sizing: border-box;
    margin: 0 auto;
`]))),ValueWrapper=styled_components_browser_esm.Ay.button(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)([`
    padding: 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: `,`;
    background: `,`;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;

    &:disabled {
        cursor: not-allowed;
        color: `,`;
    }
`])),function(_ref4){var $isActive=_ref4.$isActive,$color=_ref4.$color,$colorActive=_ref4.$colorActive;return $isActive?$colorActive:$color},function(_ref5){var $isActive=_ref5.$isActive,$bgActive=_ref5.$bgActive;return $isActive?$bgActive:"inherit"},function(_ref6){return _ref6.$colorDisabled}),useComponentPalette=__webpack_require__("./src/palette/useComponentPalette.ts"),Scrollbar=__webpack_require__("./src/components/common/Scrollbar/index.tsx"),MobileWheelPicker=__webpack_require__("./src/components/form/DateTimeInput/components/MobileWheelPicker/index.tsx"),WheelColumn1=__webpack_require__("./src/components/form/DateTimeInput/components/MobileWheelPicker/components/WheelColumn/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),toTwoDigits=function toTwoDigits(item){return"0".concat(item).slice(-2)},HOURS=Array(24).fill(0).map(function(item,index){return index}),MINUTES=Array(60).fill(0).map(function(item,index){return index}),getIsDisabled=function getIsDisabled(current,maxNumber,minNumber){return current>maxNumber||current<minNumber},TimePicker=function TimePicker(_ref){var value=_ref.value,onChange=_ref.onChange,_ref$height=_ref.height,maxTime=_ref.maxTime,minTime=_ref.minTime,_ref$isMobile=_ref.isMobile,palette=(0,useComponentPalette.I)("timePicker"),_value=(0,slicedToArray.A)(value,2),hour=_value[0],minute=_value[1],maxTimeHour=null==maxTime?void 0:maxTime[0],maxTimeMinute=null==maxTime?void 0:maxTime[1],minTimeHour=null==minTime?void 0:minTime[0],minTimeMinute=null==minTime?void 0:minTime[1],handleHourChange=function handleHourChange(newHour){return newHour===maxTimeHour&&maxTimeMinute&&minute>maxTimeMinute?onChange([newHour,maxTimeMinute]):newHour===minTimeHour&&minTimeMinute&&minute<minTimeMinute?onChange([newHour,minTimeMinute]):onChange([newHour,minute])},handleMinuteChange=function handleMinuteChange(newMinute){return onChange([hour,newMinute])},getIsDisabledMinute=function getIsDisabledMinute(current){return hour===maxTimeHour&&maxTimeMinute&&hour===minTimeHour&&minTimeMinute?getIsDisabled(current,maxTimeMinute,minTimeMinute):hour===maxTimeHour&&maxTimeMinute?getIsDisabled(current,maxTimeMinute,0):hour===minTimeHour&&!!minTimeMinute&&getIsDisabled(current,59,minTimeMinute)},mobileHours=HOURS.filter(function(hourItem){return!getIsDisabled(hourItem,maxTimeHour||23,minTimeHour||0)}),mobileMinutes=MINUTES.filter(function(minuteItem){return!getIsDisabledMinute(minuteItem)});return void 0!==_ref$isMobile&&_ref$isMobile?(0,jsx_runtime.jsxs)(MobileWheelPicker.M,{label:"Время",children:[(0,jsx_runtime.jsx)(WheelColumn1.m,{label:"Часы",options:mobileHours.map(function(hourItem){return{value:hourItem,label:toTwoDigits(hourItem)}}),value:hour,onChange:handleHourChange,width:70}),(0,jsx_runtime.jsx)(WheelColumn1.m,{label:"Минуты",options:mobileMinutes.map(function(minuteItem){return{value:minuteItem,label:toTwoDigits(minuteItem)}}),value:minute,onChange:handleMinuteChange,width:70})]}):(0,jsx_runtime.jsxs)(Wrapper,{$height:void 0===_ref$height?230:_ref$height,children:[(0,jsx_runtime.jsxs)(ColumnWrapper,{$borderColor:palette.divider,children:[(0,jsx_runtime.jsx)(Label,{$color:palette.label,variant:"captionRegular",children:"час"}),(0,jsx_runtime.jsx)(Scrollbar.Z,{trackWidth:3,children:(0,jsx_runtime.jsx)(ValuesWrapper,{children:HOURS.map(function(hourItem){return(0,jsx_runtime.jsx)(ValueWrapper,{$color:palette.tile,$colorActive:palette.tileActive,$isActive:hour===hourItem,$bgActive:palette.tileBgActive,$colorDisabled:palette.tileDisabled,type:"button",onClick:function onClick(){return handleHourChange(hourItem)},disabled:getIsDisabled(hourItem,maxTimeHour||23,minTimeHour||0),children:(0,jsx_runtime.jsx)(Typography.o,{variant:"captionRegular",children:toTwoDigits(hourItem)})},hourItem)})})})]}),(0,jsx_runtime.jsxs)(ColumnWrapper,{$borderColor:palette.divider,children:[(0,jsx_runtime.jsx)(Label,{$color:palette.label,variant:"captionRegular",children:"мин"}),(0,jsx_runtime.jsx)(Scrollbar.Z,{trackWidth:3,children:(0,jsx_runtime.jsx)(ValuesWrapper,{children:MINUTES.map(function(minuteItem){return(0,jsx_runtime.jsx)(ValueWrapper,{$color:palette.tile,$colorActive:palette.tileActive,$isActive:minute===minuteItem,$bgActive:palette.tileBgActive,$colorDisabled:palette.tileDisabled,type:"button",onClick:function onClick(){return handleMinuteChange(minuteItem)},disabled:getIsDisabledMinute(minuteItem),children:(0,jsx_runtime.jsx)(Typography.o,{variant:"captionRegular",children:toTwoDigits(minuteItem)})},minuteItem)})})})]})]})};try{TimePicker.displayName="TimePicker",TimePicker.__docgenInfo={description:"",displayName:"TimePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"[number, number]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: [number, number]) => void"}},height:{defaultValue:{value:"230"},description:"",name:"height",required:!1,type:{name:"number"}},minTime:{defaultValue:null,description:"",name:"minTime",required:!1,type:{name:"[number, number]"}},maxTime:{defaultValue:null,description:"",name:"maxTime",required:!1,type:{name:"[number, number]"}},isMobile:{defaultValue:{value:"false"},description:"",name:"isMobile",required:!1,type:{name:"boolean"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateTimeInput/components/TimePicker/index.tsx#TimePicker"]={docgenInfo:TimePicker.__docgenInfo,name:"TimePicker",path:"src/components/form/DateTimeInput/components/TimePicker/index.tsx#TimePicker"})}catch{}}}]);
//# sourceMappingURL=5909.93e8fa9f.iframe.bundle.js.map