(self.webpackChunk_invoicebox_ui=self.webpackChunk_invoicebox_ui||[]).push([[1590],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");let pipeline=x=>x(),importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;let pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;let pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];async function importFn(path){for(let i=0;i<importers.length;i++){let moduleExports=await pipeline(()=>importers[i](path));if(moduleExports)return moduleExports}}let channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);let preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:importFn,getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})}]}},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e})}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/common/Arrow/components/StyledSvg/index.stories":["./src/components/common/Arrow/components/StyledSvg/index.stories.tsx",2752,7108],"./components/common/Arrow/components/StyledSvg/index.stories.tsx":["./src/components/common/Arrow/components/StyledSvg/index.stories.tsx",2752,7108],"./components/common/Arrow/components/Svg/index.stories":["./src/components/common/Arrow/components/Svg/index.stories.tsx",4327],"./components/common/Arrow/components/Svg/index.stories.tsx":["./src/components/common/Arrow/components/Svg/index.stories.tsx",4327],"./components/common/Arrow/index.stories":["./src/components/common/Arrow/index.stories.tsx",2752,3596],"./components/common/Arrow/index.stories.tsx":["./src/components/common/Arrow/index.stories.tsx",2752,3596],"./components/common/Calendar/docs.stories":["./src/components/common/Calendar/docs.stories.tsx",2752,1992],"./components/common/Calendar/docs.stories.tsx":["./src/components/common/Calendar/docs.stories.tsx",2752,1992],"./components/common/Calendar/index.stories":["./src/components/common/Calendar/index.stories.tsx",4720,580],"./components/common/Calendar/index.stories.tsx":["./src/components/common/Calendar/index.stories.tsx",4720,580],"./components/common/Divider/index.stories":["./src/components/common/Divider/index.stories.tsx",2752,984],"./components/common/Divider/index.stories.tsx":["./src/components/common/Divider/index.stories.tsx",2752,984],"./components/common/Dropdown/index.stories":["./src/components/common/Dropdown/index.stories.tsx",2752,1663],"./components/common/Dropdown/index.stories.tsx":["./src/components/common/Dropdown/index.stories.tsx",2752,1663],"./components/common/Flag/components/ArmFlag/index.stories":["./src/components/common/Flag/components/ArmFlag/index.stories.tsx",6824],"./components/common/Flag/components/ArmFlag/index.stories.tsx":["./src/components/common/Flag/components/ArmFlag/index.stories.tsx",6824],"./components/common/Flag/components/AzeFlag/index.stories":["./src/components/common/Flag/components/AzeFlag/index.stories.tsx",7112],"./components/common/Flag/components/AzeFlag/index.stories.tsx":["./src/components/common/Flag/components/AzeFlag/index.stories.tsx",7112],"./components/common/Flag/components/BlrFlag/index.stories":["./src/components/common/Flag/components/BlrFlag/index.stories.tsx",6548],"./components/common/Flag/components/BlrFlag/index.stories.tsx":["./src/components/common/Flag/components/BlrFlag/index.stories.tsx",6548],"./components/common/Flag/components/ChnFlag/index.stories":["./src/components/common/Flag/components/ChnFlag/index.stories.tsx",9428],"./components/common/Flag/components/ChnFlag/index.stories.tsx":["./src/components/common/Flag/components/ChnFlag/index.stories.tsx",9428],"./components/common/Flag/components/EngFlag/index.stories":["./src/components/common/Flag/components/EngFlag/index.stories.tsx",2740],"./components/common/Flag/components/EngFlag/index.stories.tsx":["./src/components/common/Flag/components/EngFlag/index.stories.tsx",2740],"./components/common/Flag/components/EspFlag/index.stories":["./src/components/common/Flag/components/EspFlag/index.stories.tsx",8920],"./components/common/Flag/components/EspFlag/index.stories.tsx":["./src/components/common/Flag/components/EspFlag/index.stories.tsx",8920],"./components/common/Flag/components/KazFlag/index.stories":["./src/components/common/Flag/components/KazFlag/index.stories.tsx",8740],"./components/common/Flag/components/KazFlag/index.stories.tsx":["./src/components/common/Flag/components/KazFlag/index.stories.tsx",8740],"./components/common/Flag/components/KgzFlag/index.stories":["./src/components/common/Flag/components/KgzFlag/index.stories.tsx",100],"./components/common/Flag/components/KgzFlag/index.stories.tsx":["./src/components/common/Flag/components/KgzFlag/index.stories.tsx",100],"./components/common/Flag/components/MdaFlag/index.stories":["./src/components/common/Flag/components/MdaFlag/index.stories.tsx",204],"./components/common/Flag/components/MdaFlag/index.stories.tsx":["./src/components/common/Flag/components/MdaFlag/index.stories.tsx",204],"./components/common/Flag/components/RusFlag/index.stories":["./src/components/common/Flag/components/RusFlag/index.stories.tsx",9468],"./components/common/Flag/components/RusFlag/index.stories.tsx":["./src/components/common/Flag/components/RusFlag/index.stories.tsx",9468],"./components/common/Flag/components/TjkFlag/index.stories":["./src/components/common/Flag/components/TjkFlag/index.stories.tsx",5156],"./components/common/Flag/components/TjkFlag/index.stories.tsx":["./src/components/common/Flag/components/TjkFlag/index.stories.tsx",5156],"./components/common/Flag/components/UzbFlag/index.stories":["./src/components/common/Flag/components/UzbFlag/index.stories.tsx",4664],"./components/common/Flag/components/UzbFlag/index.stories.tsx":["./src/components/common/Flag/components/UzbFlag/index.stories.tsx",4664],"./components/common/Flag/index.stories":["./src/components/common/Flag/index.stories.ts",2752,3868,7716],"./components/common/Flag/index.stories.ts":["./src/components/common/Flag/index.stories.ts",2752,3868,7716],"./components/common/InvoiceboxLoader/index.stories":["./src/components/common/InvoiceboxLoader/index.stories.tsx",3764,5392],"./components/common/InvoiceboxLoader/index.stories.tsx":["./src/components/common/InvoiceboxLoader/index.stories.tsx",3764,5392],"./components/common/InvoiceboxSpinner/index.stories":["./src/components/common/InvoiceboxSpinner/index.stories.tsx",2752,8948],"./components/common/InvoiceboxSpinner/index.stories.tsx":["./src/components/common/InvoiceboxSpinner/index.stories.tsx",2752,8948],"./components/common/Scrollbar/index.stories":["./src/components/common/Scrollbar/index.stories.tsx",7580,8932],"./components/common/Scrollbar/index.stories.tsx":["./src/components/common/Scrollbar/index.stories.tsx",7580,8932],"./components/common/SecondaryButton/index.stories":["./src/components/common/SecondaryButton/index.stories.tsx",2752,2436],"./components/common/SecondaryButton/index.stories.tsx":["./src/components/common/SecondaryButton/index.stories.tsx",2752,2436],"./components/common/Skeleton/index.stories":["./src/components/common/Skeleton/index.stories.tsx",2752,672],"./components/common/Skeleton/index.stories.tsx":["./src/components/common/Skeleton/index.stories.tsx",2752,672],"./components/common/Typography/index.stories":["./src/components/common/Typography/index.stories.tsx",2752,3420],"./components/common/Typography/index.stories.tsx":["./src/components/common/Typography/index.stories.tsx",2752,3420],"./components/common/WarningIcon/index.stories":["./src/components/common/WarningIcon/index.stories.tsx",2752,459],"./components/common/WarningIcon/index.stories.tsx":["./src/components/common/WarningIcon/index.stories.tsx",2752,459],"./components/form/CountrySelect/components/CountryItem/index.stories":["./src/components/form/CountrySelect/components/CountryItem/index.stories.tsx",2752,3868,5228],"./components/form/CountrySelect/components/CountryItem/index.stories.tsx":["./src/components/form/CountrySelect/components/CountryItem/index.stories.tsx",2752,3868,5228],"./components/form/CountrySelect/index.stories":["./src/components/form/CountrySelect/index.stories.tsx",2752,7580,2064,3868,8004],"./components/form/CountrySelect/index.stories.tsx":["./src/components/form/CountrySelect/index.stories.tsx",2752,7580,2064,3868,8004],"./components/form/DateInput/components/Icon/index.stories":["./src/components/form/DateInput/components/Icon/index.stories.tsx",3416],"./components/form/DateInput/components/Icon/index.stories.tsx":["./src/components/form/DateInput/components/Icon/index.stories.tsx",3416],"./components/form/DateInput/docs.stories":["./src/components/form/DateInput/docs.stories.tsx",2752,6516],"./components/form/DateInput/docs.stories.tsx":["./src/components/form/DateInput/docs.stories.tsx",2752,6516],"./components/form/DateInput/index.stories":["./src/components/form/DateInput/index.stories.tsx",2752,4720,2064,6880],"./components/form/DateInput/index.stories.tsx":["./src/components/form/DateInput/index.stories.tsx",2752,4720,2064,6880],"./components/form/InputLabel/index.stories":["./src/components/form/InputLabel/index.stories.tsx",2752,3348],"./components/form/InputLabel/index.stories.tsx":["./src/components/form/InputLabel/index.stories.tsx",2752,3348],"./components/form/PositiveIntegerInput/index.stories":["./src/components/form/PositiveIntegerInput/index.stories.tsx",2752,2064,4148],"./components/form/PositiveIntegerInput/index.stories.tsx":["./src/components/form/PositiveIntegerInput/index.stories.tsx",2752,2064,4148],"./components/form/PureInput/index.stories":["./src/components/form/PureInput/index.stories.tsx",2752,2064,6236],"./components/form/PureInput/index.stories.tsx":["./src/components/form/PureInput/index.stories.tsx",2752,2064,6236],"./components/form/SearchInput/components/CrossIcon/index.stories":["./src/components/form/SearchInput/components/CrossIcon/index.stories.tsx",4684],"./components/form/SearchInput/components/CrossIcon/index.stories.tsx":["./src/components/form/SearchInput/components/CrossIcon/index.stories.tsx",4684],"./components/form/SearchInput/components/SearchIcon/index.stories":["./src/components/form/SearchInput/components/SearchIcon/index.stories.tsx",8840],"./components/form/SearchInput/components/SearchIcon/index.stories.tsx":["./src/components/form/SearchInput/components/SearchIcon/index.stories.tsx",8840],"./components/form/SearchInput/index.stories":["./src/components/form/SearchInput/index.stories.tsx",2752,2064,4444],"./components/form/SearchInput/index.stories.tsx":["./src/components/form/SearchInput/index.stories.tsx",2752,2064,4444],"./components/form/Select/components/Input/index.stories":["./src/components/form/Select/components/Input/index.stories.tsx",2752,2064,8600],"./components/form/Select/components/Input/index.stories.tsx":["./src/components/form/Select/components/Input/index.stories.tsx",2752,2064,8600],"./components/form/Select/index.stories":["./src/components/form/Select/index.stories.tsx",2752,7580,2064,3168],"./components/form/Select/index.stories.tsx":["./src/components/form/Select/index.stories.tsx",2752,7580,2064,3168],"./hooks/useCss/index.stories":["./src/hooks/useCss/index.stories.tsx",7264],"./hooks/useCss/index.stories.tsx":["./src/hooks/useCss/index.stories.tsx",7264],"./hooks/useInputFocus/index.stories":["./src/hooks/useInputFocus/index.stories.tsx",5356],"./hooks/useInputFocus/index.stories.tsx":["./src/hooks/useInputFocus/index.stories.tsx",5356],"./hooks/useOutsideClick/index.stories":["./src/hooks/useOutsideClick/index.stories.tsx",5144],"./hooks/useOutsideClick/index.stories.tsx":["./src/hooks/useOutsideClick/index.stories.tsx",5144],"./palette/colors.stories":["./src/palette/colors.stories.tsx",2752,3436],"./palette/colors.stories.tsx":["./src/palette/colors.stories.tsx",2752,3436],"./palette/index.stories":["./src/palette/index.stories.tsx",2752,4344],"./palette/index.stories.tsx":["./src/palette/index.stories.tsx",2752,4344]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(()=>__webpack_require__(id))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[7440],()=>__webpack_exec__("./storybook-config-entry.js")),__webpack_require__.O()}]);