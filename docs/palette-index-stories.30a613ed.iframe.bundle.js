"use strict";(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[2939],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if(({}).hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&({}).propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function toPrimitive(t,r){if("object"!=(0,esm_typeof.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.A)(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==(0,esm_typeof.A)(i)?i:i+""}},"./node_modules/@babel/runtime/helpers/esm/typeof.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>_typeof});function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}},"./src/palette/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:()=>Docs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),Skeleton=__webpack_require__("./src/components/common/Skeleton/index.tsx"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),palette=__webpack_require__("./src/components/common/Skeleton/palette.ts"),constants=__webpack_require__("./src/palette/constants.ts"),context=__webpack_require__("./src/palette/context.tsx"),InvoiceboxSpinner_palette=__webpack_require__("./src/components/common/InvoiceboxSpinner/palette.ts"),SecondaryButton_palette=__webpack_require__("./src/components/common/SecondaryButton/palette.ts"),Arrow_palette=__webpack_require__("./src/components/common/Arrow/palette.ts"),InputLabel_palette=__webpack_require__("./src/components/form/InputLabel/palette.ts"),PureInput_palette=__webpack_require__("./src/components/form/PureInput/palette.ts"),Dropdown_palette=__webpack_require__("./src/components/common/Dropdown/palette.ts"),Scrollbar_palette=__webpack_require__("./src/components/common/Scrollbar/palette.ts"),Select_palette=__webpack_require__("./src/components/form/Select/palette.ts"),DateInput_palette=__webpack_require__("./src/components/form/DateInput/palette.ts"),WarningIcon_palette=__webpack_require__("./src/components/common/WarningIcon/palette.ts"),Divider_palette=__webpack_require__("./src/components/common/Divider/palette.ts"),Calendar_palette=__webpack_require__("./src/components/common/Calendar/palette.ts"),SearchInput_palette=__webpack_require__("./src/components/form/SearchInput/palette.ts"),CountrySelect_palette=__webpack_require__("./src/components/form/CountrySelect/palette.ts"),BgCard_palette=__webpack_require__("./src/components/common/BgCard/palette.ts"),Toast_palette=__webpack_require__("./src/components/common/Toast/palette.ts"),AutocompleteDefaultOption_palette=__webpack_require__("./src/components/form/Autocomplete/components/AutocompleteDefaultOption/palette.ts"),OrganizationAutocompleteItem_palette=__webpack_require__("./src/components/form/Autocomplete/components/OrganizationAutocompleteItem/palette.ts"),Drawer_palette=__webpack_require__("./src/components/common/Drawer/palette.ts"),EntityAutocompleteOptionsDrawer_palette=__webpack_require__("./src/components/common/EntityAutocompleteOptionsDrawer/palette.ts"),CodeInput_palette=__webpack_require__("./src/components/form/CodeInput/palette.ts"),ResetButton_palette=__webpack_require__("./src/components/form/ResetButton/palette.ts"),Toggle_palette=__webpack_require__("./src/components/form/Toggle/palette.ts"),ReadOnlyLabelValueField_palette=__webpack_require__("./src/components/common/ReadOnlyLabelValueField/palette.ts"),PointsLoader_palette=__webpack_require__("./src/components/common/PointsLoader/palette.ts"),TagsInput_palette=__webpack_require__("./src/components/form/TagsInput/palette.ts"),TimePicker_palette=__webpack_require__("./src/components/form/DateTimeInput/components/TimePicker/palette.ts"),MobileWheelPicker_palette=__webpack_require__("./src/components/form/DateTimeInput/components/MobileWheelPicker/palette.ts"),DateTimeInput_palette=__webpack_require__("./src/components/form/DateTimeInput/palette.ts"),DrawerHeader_palette=__webpack_require__("./src/components/form/common/DrawerHeader/palette.ts"),Checkbox_palette=__webpack_require__("./src/components/form/Checkbox/palette.ts"),Tooltip_palette=__webpack_require__("./src/components/common/Tooltip/palette.ts"),Modal_palette=__webpack_require__("./src/components/common/Modal/palette.ts"),WentWrongModal_palette=__webpack_require__("./src/components/common/WentWrongModal/palette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PaletteProvider=function PaletteProvider(_ref){var children=_ref.children,_abstract=_ref.abstract,skeleton=_ref.skeleton,mergedAbstractPalette=(0,react.useMemo)(function(){return(0,objectSpread2.A)((0,objectSpread2.A)({},constants.V),_abstract)},[_abstract]),mergedSkeletonPalette=(0,react.useMemo)(function(){return(0,objectSpread2.A)((0,objectSpread2.A)({},(0,palette.o)(mergedAbstractPalette)),skeleton)},[mergedAbstractPalette,skeleton]),value=(0,react.useMemo)(function(){return{skeleton:mergedSkeletonPalette,invoiceboxSpinner:(0,InvoiceboxSpinner_palette.O)(mergedAbstractPalette),secondaryButton:(0,SecondaryButton_palette.v)(mergedAbstractPalette),arrow:(0,Arrow_palette.K)(mergedAbstractPalette),inputLabel:(0,InputLabel_palette.v)(mergedAbstractPalette),pureInput:(0,PureInput_palette.L)(mergedAbstractPalette),searchInput:(0,SearchInput_palette.N)(mergedAbstractPalette),dropdown:(0,Dropdown_palette.a)(mergedAbstractPalette),scrollbar:(0,Scrollbar_palette.V)(mergedAbstractPalette),select:(0,Select_palette.Z)(mergedAbstractPalette),countrySelect:(0,CountrySelect_palette.T)(mergedAbstractPalette),dateInput:(0,DateInput_palette.r)(mergedAbstractPalette),warningIcon:(0,WarningIcon_palette.w)(mergedAbstractPalette),divider:(0,Divider_palette.M)(mergedAbstractPalette),calendar:(0,Calendar_palette.L)(mergedAbstractPalette),bgCard:(0,BgCard_palette.M)(mergedAbstractPalette),toast:(0,Toast_palette.M)(mergedAbstractPalette),autocompleteDefaultOption:(0,AutocompleteDefaultOption_palette.V)(mergedAbstractPalette),organizationAutocompleteItem:(0,OrganizationAutocompleteItem_palette.F)(mergedAbstractPalette),drawer:(0,Drawer_palette.y)(mergedAbstractPalette),entityAutocompleteOptionsDrawer:(0,EntityAutocompleteOptionsDrawer_palette.H)(mergedAbstractPalette),codeInput:(0,CodeInput_palette.A)(mergedAbstractPalette),resetButton:(0,ResetButton_palette.O)(mergedAbstractPalette),toggle:(0,Toggle_palette.z)(mergedAbstractPalette),readOnlyLabelValueField:(0,ReadOnlyLabelValueField_palette.q)(mergedAbstractPalette),pointsLoader:(0,PointsLoader_palette.L)(mergedAbstractPalette),tagsInput:(0,TagsInput_palette.i)(mergedAbstractPalette),timePicker:(0,TimePicker_palette.U)(mergedAbstractPalette),mobileWheelPicker:(0,MobileWheelPicker_palette.g)(mergedAbstractPalette),dateTimeInput:(0,DateTimeInput_palette.U)(mergedAbstractPalette),drawerHeader:(0,DrawerHeader_palette.p)(mergedAbstractPalette),checkbox:(0,Checkbox_palette.S)(mergedAbstractPalette),tooltip:(0,Tooltip_palette.O)(mergedAbstractPalette),modal:(0,Modal_palette.c)(mergedAbstractPalette),wentWrongModal:(0,WentWrongModal_palette.F)(mergedAbstractPalette)}},[mergedSkeletonPalette,mergedAbstractPalette]);return(0,jsx_runtime.jsx)(context.r.Provider,{value:value,children:children})};try{PaletteProvider.displayName="PaletteProvider",PaletteProvider.__docgenInfo={description:"",displayName:"PaletteProvider",props:{abstract:{defaultValue:null,description:"",name:"abstract",required:!1,type:{name:"Partial<TAbstractPalette>"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/palette/provider.tsx#PaletteProvider"]={docgenInfo:PaletteProvider.__docgenInfo,name:"PaletteProvider",path:"src/palette/provider.tsx#PaletteProvider"})}catch{}var Typography=__webpack_require__("./src/components/common/Typography/index.tsx"),Example=function Example(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{style:{width:100,height:40},children:children})};let index_stories={title:"palette/Palette"};var Docs={render:function render(){return(0,jsx_runtime.jsxs)(Typography.o,{variant:"bodyL",children:[(0,jsx_runtime.jsx)("h1",{children:"Система цветов"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Поведение по умолчанию"}),(0,jsx_runtime.jsx)("p",{children:"Можно использовать компоненты без определения цветов, тогда будут использованы цвета по умолчанию."}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsx)("code",{children:"<Skeleton />"})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(Skeleton.E,{})})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Переопределение цветов на уровне вызова компонента"}),(0,jsx_runtime.jsxs)("p",{children:["Можно переопределить цвета на уровне вызова компонента, для этого используйте свойство"," ",(0,jsx_runtime.jsx)("code",{children:"palette"}),"."]}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsx)("code",{children:"<Skeleton palette={{ bg: '#c9c', flicker: '#5a5' }} />"})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(Skeleton.E,{palette:{bg:"#c9c",flicker:"#5a5"}})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)("i",{children:["Если у компонента нет свойства ",(0,jsx_runtime.jsx)("code",{children:"palette"}),", а вам оно требуется, создайте"," ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/InvoiceBox/invoicebox-ui/issues",children:"issue"}),". Или добавьте самостоятельно и откройте pull request, используя в качестве примера, компонент"," ",(0,jsx_runtime.jsx)("code",{children:"Skeleton"}),"."]})})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Переопределение цветов конкретного компонента"}),(0,jsx_runtime.jsxs)("p",{children:["Можно переопределить поведение по умолчанию конкретного компонента. Для этого используйте"," ",(0,jsx_runtime.jsx)("code",{children:"PaletteProvider"})," и его свойство соответствующее компоненту."]}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsxs)("code",{children:[`<PaletteProvider skeleton={{ bg: '#39c', flicker: '#5cc' }}>
`,`    <Skeleton />
`,"</PaletteProvider>"]})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(PaletteProvider,{skeleton:{bg:"#39c",flicker:"#5cc"},children:(0,jsx_runtime.jsx)(Skeleton.E,{})})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)("i",{children:["Если у ",(0,jsx_runtime.jsx)("code",{children:"PaletteProvider"})," нет свойства соответствующего компоненту, а вам оно требуется, создайте"," ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/InvoiceBox/invoicebox-ui/issues",children:"issue"}),". Или добавьте самостоятельно и откройте pull request, используя в качестве примера, компонент"," ",(0,jsx_runtime.jsx)("code",{children:"Skeleton"}),"."]})})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Переопределение абстрактных цветов"}),(0,jsx_runtime.jsxs)("p",{children:["Все цвета компонентов создаются из абстрактных цветов. Переопределяя абстрактные цвета, можно изменить цветовую палитру всех компонентов разом. Это может быть полезно для темирования. Для переопределения абстрактных цветов используйте"," ",(0,jsx_runtime.jsx)("code",{children:"PaletteProvider"})," и его свойство ",(0,jsx_runtime.jsx)("code",{children:"abstract"}),"."]}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsxs)("code",{children:[`<PaletteProvider abstract={{ neutralUsual: '#c93', neutralLight: '#cc5' }}>
`,`    <Skeleton />
`,"</PaletteProvider>"]})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(PaletteProvider,{abstract:{neutralUsual:"#c93",neutralLight:"#cc5"},children:(0,jsx_runtime.jsx)(Skeleton.E,{})})})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Приоритет цветов"}),(0,jsx_runtime.jsxs)("p",{children:["Самый высокий приоритет имеют цвета на уровне вызова компонента. Затем цвета по умолчанию, назначенные при помощи ",(0,jsx_runtime.jsx)("code",{children:"PaletteProvider"})," и соответствующего свойства. Затем абстрактные цвета, назначенные при помощи ",(0,jsx_runtime.jsx)("code",{children:"PaletteProvider"})," и свойства"," ",(0,jsx_runtime.jsx)("code",{children:"abstract"}),"."]}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsxs)("code",{children:[`<PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>
`,`    <Skeleton palette={{ bg: 'blue' }}/>
`,"</PaletteProvider>"]})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(PaletteProvider,{abstract:{neutralUsual:"red"},skeleton:{bg:"green"},children:(0,jsx_runtime.jsx)(Skeleton.E,{palette:{bg:"blue"}})})}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsxs)("code",{children:[`<PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>
`,`    <Skeleton />
`,"</PaletteProvider>"]})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(PaletteProvider,{abstract:{neutralUsual:"red"},skeleton:{bg:"green"},children:(0,jsx_runtime.jsx)(Skeleton.E,{})})}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsxs)("code",{children:[`<PaletteProvider abstract={{ neutralUsual: 'red' }}>
`,`    <Skeleton />
`,"</PaletteProvider>"]})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(PaletteProvider,{abstract:{neutralUsual:"red"},children:(0,jsx_runtime.jsx)(Skeleton.E,{})})})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Частичное и полное переопределение цветов"}),(0,jsx_runtime.jsx)("p",{children:"На любом уровне можно переопределить любое количество цветов."}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsx)("code",{children:"<Skeleton palette={{ bg: 'pink' }}/>"})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(Skeleton.E,{palette:{bg:"pink"}})}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsx)("code",{children:"<Skeleton palette={{ flicker: 'brown' }}/>"})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(Skeleton.E,{palette:{flicker:"brown"}})}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsx)("code",{children:"<Skeleton palette={{ bg: 'pink', flicker: 'brown' }}/>"})}),(0,jsx_runtime.jsx)(Example,{children:(0,jsx_runtime.jsx)(Skeleton.E,{palette:{bg:"pink",flicker:"brown"}})})]})]})}};Docs.parameters={...Docs.parameters,docs:{...Docs.parameters?.docs,source:{originalSource:`{
  render: () => <Typography variant="bodyL">
            <h1>Система цветов</h1>
            <div>
                <h3>Поведение по умолчанию</h3>
                <p>
                    Можно использовать компоненты без определения цветов, тогда будут использованы цвета по
                    умолчанию.
                </p>
                <pre>
                    <code>{'<Skeleton />'}</code>
                </pre>
                <Example>
                    <Skeleton />
                </Example>
            </div>
            <div>
                <h3>Переопределение цветов на уровне вызова компонента</h3>
                <p>
                    Можно переопределить цвета на уровне вызова компонента, для этого используйте свойство{' '}
                    <code>palette</code>.
                </p>
                <pre>
                    <code>{"<Skeleton palette={{ bg: '#c9c', flicker: '#5a5' }} />"}</code>
                </pre>
                <Example>
                    <Skeleton palette={{
          bg: '#c9c',
          flicker: '#5a5'
        }} />
                </Example>
                <p>
                    <i>
                        Если у компонента нет свойства <code>palette</code>, а вам оно требуется, создайте{' '}
                        <a href="https://github.com/InvoiceBox/invoicebox-ui/issues">issue</a>. Или добавьте
                        самостоятельно и откройте pull request, используя в качестве примера, компонент{' '}
                        <code>Skeleton</code>.
                    </i>
                </p>
            </div>
            <div>
                <h3>Переопределение цветов конкретного компонента</h3>
                <p>
                    Можно переопределить поведение по умолчанию конкретного компонента. Для этого используйте{' '}
                    <code>PaletteProvider</code> и его свойство соответствующее компоненту.
                </p>
                <pre>
                    <code>
                        {\`<PaletteProvider skeleton={{ bg: '#39c', flicker: '#5cc' }}>\\n\`}
                        {\`    <Skeleton />\\n\`}
                        {\`</PaletteProvider>\`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider skeleton={{
          bg: '#39c',
          flicker: '#5cc'
        }}>
                        <Skeleton />
                    </PaletteProvider>
                </Example>
                <p>
                    <i>
                        Если у <code>PaletteProvider</code> нет свойства соответствующего компоненту, а вам
                        оно требуется, создайте{' '}
                        <a href="https://github.com/InvoiceBox/invoicebox-ui/issues">issue</a>. Или добавьте
                        самостоятельно и откройте pull request, используя в качестве примера, компонент{' '}
                        <code>Skeleton</code>.
                    </i>
                </p>
            </div>
            <div>
                <h3>Переопределение абстрактных цветов</h3>
                <p>
                    Все цвета компонентов создаются из абстрактных цветов. Переопределяя абстрактные цвета,
                    можно изменить цветовую палитру всех компонентов разом. Это может быть полезно для
                    темирования. Для переопределения абстрактных цветов используйте{' '}
                    <code>PaletteProvider</code> и его свойство <code>abstract</code>.
                </p>
                <pre>
                    <code>
                        {\`<PaletteProvider abstract={{ neutralUsual: '#c93', neutralLight: '#cc5' }}>\\n\`}
                        {\`    <Skeleton />\\n\`}
                        {\`</PaletteProvider>\`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider abstract={{
          neutralUsual: '#c93',
          neutralLight: '#cc5'
        }}>
                        <Skeleton />
                    </PaletteProvider>
                </Example>
            </div>
            <div>
                <h3>Приоритет цветов</h3>
                <p>
                    Самый высокий приоритет имеют цвета на уровне вызова компонента. Затем цвета по умолчанию,
                    назначенные при помощи <code>PaletteProvider</code> и соответствующего свойства. Затем
                    абстрактные цвета, назначенные при помощи <code>PaletteProvider</code> и свойства{' '}
                    <code>abstract</code>.
                </p>
                <pre>
                    <code>
                        {\`<PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>\\n\`}
                        {\`    <Skeleton palette={{ bg: 'blue' }}/>\\n\`}
                        {\`</PaletteProvider>\`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider abstract={{
          neutralUsual: 'red'
        }} skeleton={{
          bg: 'green'
        }}>
                        <Skeleton palette={{
            bg: 'blue'
          }} />
                    </PaletteProvider>
                </Example>
                <pre>
                    <code>
                        {\`<PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>\\n\`}
                        {\`    <Skeleton />\\n\`}
                        {\`</PaletteProvider>\`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider abstract={{
          neutralUsual: 'red'
        }} skeleton={{
          bg: 'green'
        }}>
                        <Skeleton />
                    </PaletteProvider>
                </Example>
                <pre>
                    <code>
                        {\`<PaletteProvider abstract={{ neutralUsual: 'red' }}>\\n\`}
                        {\`    <Skeleton />\\n\`}
                        {\`</PaletteProvider>\`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider abstract={{
          neutralUsual: 'red'
        }}>
                        <Skeleton />
                    </PaletteProvider>
                </Example>
            </div>
            <div>
                <h3>Частичное и полное переопределение цветов</h3>
                <p>На любом уровне можно переопределить любое количество цветов.</p>
                <pre>
                    <code>{\`<Skeleton palette={{ bg: 'pink' }}/>\`}</code>
                </pre>
                <Example>
                    <Skeleton palette={{
          bg: 'pink'
        }} />
                </Example>
                <pre>
                    <code>{\`<Skeleton palette={{ flicker: 'brown' }}/>\`}</code>
                </pre>
                <Example>
                    <Skeleton palette={{
          flicker: 'brown'
        }} />
                </Example>
                <pre>
                    <code>{\`<Skeleton palette={{ bg: 'pink', flicker: 'brown' }}/>\`}</code>
                </pre>
                <Example>
                    <Skeleton palette={{
          bg: 'pink',
          flicker: 'brown'
        }} />
                </Example>
            </div>
        </Typography>
}`,...Docs.parameters?.docs?.source}}};let __namedExportsOrder=["Docs"]},"./src/breakpoints/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:()=>breakpoints});var breakpoints={sm:"(max-width: 576px)",md:"(max-width: 767px)",ld:"(max-width: 992px)",xl:"(max-width: 1200px)",xxl:"(max-width: 1400px)"}},"./src/components/common/Skeleton/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),reducedMotion=__webpack_require__("./src/utils/reducedMotion.ts"),shine=(0,styled_components_browser_esm.i7)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
В личном кабинете 180: на быстром ответе плашек не видно вовсе`,name:"showDelay",required:!1,type:{name:"number"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"Partial<TSkeletonPalette>"}}}},"u">typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Skeleton/index.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/common/Skeleton/index.tsx#Skeleton"})}catch{}},"./src/components/common/Typography/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>InputWithTypography,o:()=>Typography});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/common/Typography/typography.ts"),Wrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)([`
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
    `])))}},"./src/utils/reducedMotion.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:()=>reducedMotion});var _templateObject,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),reducedMotion=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").AH)(_templateObject||(_templateObject=(0,_Users_dmitrii_Documents_projects_invoicebox_invoicebox_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__.A)([`
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
//# sourceMappingURL=palette-index-stories.30a613ed.iframe.bundle.js.map