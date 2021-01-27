/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nmodule.exports = function (url, options) {\r\n    if (!options) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        options = {};\r\n    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\r\n    url = url && url.__esModule ? url.default : url;\r\n    if (typeof url !== 'string') {\r\n        return url;\r\n    } // If url is already wrapped in quotes, remove them\r\n    if (/^['\"].*['\"]$/.test(url)) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        url = url.slice(1, -1);\r\n    }\r\n    if (options.hash) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        url += options.hash;\r\n    } // Should url be wrapped?\r\n    // See https://drafts.csswg.org/css-values-3/#urls\r\n    if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\r\n        return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\r\n    }\r\n    return url;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar LogPage_1 = __webpack_require__(/*! ./shared/LogPage */ \"./src/shared/LogPage/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar TodayPage_1 = __webpack_require__(/*! ./shared/TodayPage */ \"./src/shared/TodayPage/index.ts\");\r\nvar AnimalsPage_1 = __webpack_require__(/*! ./shared/AnimalsPage */ \"./src/shared/AnimalsPage/index.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nfunction AppComponent() {\r\n    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];\r\n    var _b = react_1.useState(false), login = _b[0], setLogin = _b[1];\r\n    react_1.useEffect(function () {\r\n        setMounted(true);\r\n        if (localStorage.getItem(\"tokenAcits\"))\r\n            setLogin(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        login ? react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/today\" }) : react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/login\" }),\r\n        react_1.default.createElement(react_router_dom_1.Switch, null,\r\n            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/login\" },\r\n                react_1.default.createElement(LogPage_1.LogPage, null)),\r\n            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/today\" },\r\n                react_1.default.createElement(TodayPage_1.TodayPage, null)),\r\n            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/animals\" },\r\n                react_1.default.createElement(AnimalsPage_1.AnimalsPage, null)))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/fonts/roboto-v20-cyrillic-500.woff":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v20-cyrillic-500.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./static/src/fonts/roboto-v20-cyrillic-500.woff\");\n\n//# sourceURL=webpack:///./src/fonts/roboto-v20-cyrillic-500.woff?");

/***/ }),

/***/ "./src/fonts/roboto-v20-cyrillic-500.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/roboto-v20-cyrillic-500.woff2 ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./static/src/fonts/roboto-v20-cyrillic-500.woff2\");\n\n//# sourceURL=webpack:///./src/fonts/roboto-v20-cyrillic-500.woff2?");

/***/ }),

/***/ "./src/fonts/roboto-v20-cyrillic-regular.woff":
/*!****************************************************!*\
  !*** ./src/fonts/roboto-v20-cyrillic-regular.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./static/src/fonts/roboto-v20-cyrillic-regular.woff\");\n\n//# sourceURL=webpack:///./src/fonts/roboto-v20-cyrillic-regular.woff?");

/***/ }),

/***/ "./src/fonts/roboto-v20-cyrillic-regular.woff2":
/*!*****************************************************!*\
  !*** ./src/fonts/roboto-v20-cyrillic-regular.woff2 ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./static/src/fonts/roboto-v20-cyrillic-regular.woff2\");\n\n//# sourceURL=webpack:///./src/fonts/roboto-v20-cyrillic-regular.woff2?");

/***/ }),

/***/ "./src/hooks/useCloseElement.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCloseElement.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCloseElement = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useCloseElement(ref, state, onClose) {\r\n    var _a = react_1.useState(state), isClose = _a[0], setIsClose = _a[1];\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node &&\r\n                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                setIsClose(true);\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, [isClose, onClose, ref]);\r\n    return isClose;\r\n}\r\nexports.useCloseElement = useCloseElement;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCloseElement.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../src/fonts/roboto-v20-cyrillic-regular.woff2 */ \"./src/fonts/roboto-v20-cyrillic-regular.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../src/fonts/roboto-v20-cyrillic-regular.woff */ \"./src/fonts/roboto-v20-cyrillic-regular.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../src/fonts/roboto-v20-cyrillic-500.woff2 */ \"./src/fonts/roboto-v20-cyrillic-500.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../src/fonts/roboto-v20-cyrillic-500.woff */ \"./src/fonts/roboto-v20-cyrillic-500.woff\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n  font-family: 'Roboto';\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  src: local('Roboto'), local('Roboto-Regular'),\\r\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'), \\r\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'); /* Modern Browsers */\\r\\n}\\r\\n/* roboto-500 - cyrillic */\\r\\n@font-face {\\r\\n  font-family: 'Roboto';\\r\\n  font-style: normal;\\r\\n  font-weight: 500;\\r\\n  src: local('Roboto'),\\r\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff2'), \\r\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff');/* Modern Browsers */\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  overflow: hidden;\\r\\n  position: relative;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  font-size: 14px;\\r\\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: greyscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nexports.indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n   <meta charset=\\\"UTF-8\\\">\\n   <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n   <title>Reddit</title>\\n   <script src = \\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n<body>\\n   <div id = \\\"react_root\\\">\" + content + \"</div>\\n   <div id = \\\"modal_root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get(\"/\", function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/AnimalModal/AnimalModal.tsx":
/*!************************************************!*\
  !*** ./src/shared/AnimalModal/AnimalModal.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnimalModal = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar useCloseElement_1 = __webpack_require__(/*! ../../hooks/useCloseElement */ \"./src/hooks/useCloseElement.ts\");\r\nvar img_1 = __webpack_require__(/*! ../img */ \"./src/shared/img/index.ts\");\r\nvar animalmodal_scss_1 = __importDefault(__webpack_require__(/*! ./animalmodal.scss */ \"./src/shared/AnimalModal/animalmodal.scss\"));\r\nfunction AnimalModal(_a) {\r\n    var onClose = _a.onClose, id = _a.id;\r\n    var paramsAnimal = {\r\n        height: \"рост\",\r\n        weight: \"вес\",\r\n        sex: \"пол\",\r\n        color: \"цвет\",\r\n        special_signs: \"особые приметы\",\r\n    };\r\n    var token = localStorage[\"tokenAcits\"];\r\n    var ref = react_1.useRef(null);\r\n    var _b = react_1.useState(false), error = _b[0], setError = _b[1];\r\n    var isClose = useCloseElement_1.useCloseElement(ref, false, onClose);\r\n    var node = document.querySelector(\"#modal_root\");\r\n    var _c = react_1.useState(), result = _c[0], setResult = _c[1];\r\n    react_1.useEffect(function () {\r\n        fetch(\"https://acits-api.herokuapp.com/api/v1/animals/\" + id + \"/\", {\r\n            headers: { Authorization: \"Bearer \" + token, \"current-shelter\": \"1\" },\r\n        })\r\n            .then(function (res) { return res.json(); })\r\n            .then(function (data) { return data; })\r\n            .then(function (data) {\r\n            if (data.code) {\r\n                setError(true);\r\n                localStorage.setItem(\"tokenAcits\", \"\");\r\n            }\r\n            else\r\n                setResult(data);\r\n        })\r\n            .catch(console.log);\r\n    }, [id, token]);\r\n    if (!node || isClose || result == undefined)\r\n        return react_1.default.createElement(\"div\", null);\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(react_1.default.Fragment, null, !error ? (react_1.default.createElement(\"div\", { className: animalmodal_scss_1.default.modalWrap },\r\n        react_1.default.createElement(\"div\", { className: animalmodal_scss_1.default.modal, ref: ref },\r\n            react_1.default.createElement(\"button\", { className: animalmodal_scss_1.default.cross, onClick: onClose },\r\n                react_1.default.createElement(img_1.Crossicon, null)),\r\n            react_1.default.createElement(\"h1\", null, result.name),\r\n            react_1.default.createElement(\"ul\", null, result.animal_attributes.map(function (element, index) {\r\n                var prop = element.name;\r\n                return (react_1.default.createElement(\"li\", { key: index },\r\n                    paramsAnimal[prop],\r\n                    \" - \",\r\n                    element.value));\r\n            }))))) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/login\" }))), node);\r\n}\r\nexports.AnimalModal = AnimalModal;\r\n\n\n//# sourceURL=webpack:///./src/shared/AnimalModal/AnimalModal.tsx?");

/***/ }),

/***/ "./src/shared/AnimalModal/animalmodal.scss":
/*!*************************************************!*\
  !*** ./src/shared/AnimalModal/animalmodal.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modalWrap\": \"animalmodal__modalWrap--1x-35\",\n\t\"modal\": \"animalmodal__modal--28CPb\",\n\t\"cross\": \"animalmodal__cross--2q4Ht\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/AnimalModal/animalmodal.scss?");

/***/ }),

/***/ "./src/shared/AnimalModal/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/AnimalModal/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AnimalModal */ \"./src/shared/AnimalModal/AnimalModal.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/AnimalModal/index.ts?");

/***/ }),

/***/ "./src/shared/AnimalsPage/AnimalsPage.tsx":
/*!************************************************!*\
  !*** ./src/shared/AnimalsPage/AnimalsPage.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnimalsPage = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nvar Header_1 = __webpack_require__(/*! ../Header */ \"./src/shared/Header/index.ts\");\r\nvar Preloader_1 = __webpack_require__(/*! ../Preloader */ \"./src/shared/Preloader/index.ts\");\r\nvar animalspage_scss_1 = __importDefault(__webpack_require__(/*! ./animalspage.scss */ \"./src/shared/AnimalsPage/animalspage.scss\"));\r\nvar CardAnimallsPage_1 = __webpack_require__(/*! ./CardAnimallsPage */ \"./src/shared/AnimalsPage/CardAnimallsPage/index.ts\");\r\nfunction AnimalsPage() {\r\n    var token = localStorage[\"tokenAcits\"];\r\n    var _a = react_1.useState(false), error = _a[0], setError = _a[1];\r\n    var _b = react_1.useState(false), load = _b[0], setLoad = _b[1];\r\n    var results = react_redux_1.useSelector(function (state) { return state.animals; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (results.length > 1)\r\n            return;\r\n        if (token) {\r\n            setLoad(true);\r\n            fetch(\"https://acits-api.herokuapp.com/api/v1/animals\", {\r\n                headers: { Authorization: \"Bearer \" + token, \"current-shelter\": \"1\" },\r\n            })\r\n                .then(function (res) { return res.json(); })\r\n                .then(function (data) {\r\n                {\r\n                    if (data.code) {\r\n                        setError(true);\r\n                        localStorage.setItem(\"tokenAcits\", \"\");\r\n                    }\r\n                    dispatch(actions_1.updateAnimals(data.results));\r\n                    setLoad(false);\r\n                }\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, [token]);\r\n    return (react_1.default.createElement(\"div\", { className: animalspage_scss_1.default.animalspageContainer },\r\n        react_1.default.createElement(\"div\", null, load && react_1.default.createElement(Preloader_1.PreLoader, null)),\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(\"h1\", null, \"\\u0416\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0435 \\u041F\\u0440\\u0438\\u044E\\u0442\\u0430 \\u21161\"),\r\n        react_1.default.createElement(\"ul\", { className: animalspage_scss_1.default.animalspage }, !error && results && results !== undefined ? (results.map(function (result, index) {\r\n            return (react_1.default.createElement(\"li\", { key: index },\r\n                react_1.default.createElement(CardAnimallsPage_1.CardAnimalsPage, { id: result.id, name: result.name, specname: result.spec_name, specnameparent: result.spec_parent_name })));\r\n        })) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/login\" })))));\r\n}\r\nexports.AnimalsPage = AnimalsPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/AnimalsPage/AnimalsPage.tsx?");

/***/ }),

/***/ "./src/shared/AnimalsPage/CardAnimallsPage/CardAnimalsPage.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/AnimalsPage/CardAnimallsPage/CardAnimalsPage.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardAnimalsPage = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar AnimalModal_1 = __webpack_require__(/*! ../../AnimalModal */ \"./src/shared/AnimalModal/index.ts\");\r\nvar cardanimalspage_scss_1 = __importDefault(__webpack_require__(/*! ./cardanimalspage.scss */ \"./src/shared/AnimalsPage/CardAnimallsPage/cardanimalspage.scss\"));\r\nfunction CardAnimalsPage(_a) {\r\n    var id = _a.id, name = _a.name, specname = _a.specname, specnameparent = _a.specnameparent;\r\n    var _b = react_1.useState(false), isModalOpened = _b[0], SetIsModalOpened = _b[1];\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: cardanimalspage_scss_1.default.animalcard },\r\n            react_1.default.createElement(\"h2\", { className: cardanimalspage_scss_1.default.animalname, onClick: function () {\r\n                    SetIsModalOpened(true);\r\n                } }, name),\r\n            react_1.default.createElement(\"p\", null,\r\n                specnameparent,\r\n                \"- \",\r\n                specname)),\r\n        isModalOpened && (react_1.default.createElement(AnimalModal_1.AnimalModal, { id: id, onClose: function () { return SetIsModalOpened(false); } }))));\r\n}\r\nexports.CardAnimalsPage = CardAnimalsPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/AnimalsPage/CardAnimallsPage/CardAnimalsPage.tsx?");

/***/ }),

/***/ "./src/shared/AnimalsPage/CardAnimallsPage/cardanimalspage.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/AnimalsPage/CardAnimallsPage/cardanimalspage.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"animalcard\": \"cardanimalspage__animalcard--_xGn0\",\n\t\"animalname\": \"cardanimalspage__animalname--5BDBf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/AnimalsPage/CardAnimallsPage/cardanimalspage.scss?");

/***/ }),

/***/ "./src/shared/AnimalsPage/CardAnimallsPage/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/AnimalsPage/CardAnimallsPage/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardAnimalsPage */ \"./src/shared/AnimalsPage/CardAnimallsPage/CardAnimalsPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/AnimalsPage/CardAnimallsPage/index.ts?");

/***/ }),

/***/ "./src/shared/AnimalsPage/animalspage.scss":
/*!*************************************************!*\
  !*** ./src/shared/AnimalsPage/animalspage.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"animalspageContainer\": \"animalspage__animalspageContainer--1zbIp\",\n\t\"animalspage\": \"animalspage__animalspage--RtHty\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/AnimalsPage/animalspage.scss?");

/***/ }),

/***/ "./src/shared/AnimalsPage/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/AnimalsPage/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AnimalsPage */ \"./src/shared/AnimalsPage/AnimalsPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/AnimalsPage/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar header_scss_1 = __importDefault(__webpack_require__(/*! ./header.scss */ \"./src/shared/Header/header.scss\"));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", null,\r\n        react_1.default.createElement(\"ul\", { className: header_scss_1.default.header },\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(react_router_dom_1.Link, { to: \"/today\", className: header_scss_1.default.link }, \"\\u0421\\u0435\\u0433\\u043E\\u0434\\u043D\\u044F\")),\r\n            react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(react_router_dom_1.Link, { to: \"/animals\", className: header_scss_1.default.link }, \"\\u0416\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0435\")))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.scss":
/*!***************************************!*\
  !*** ./src/shared/Header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--4oGEs\",\n\t\"link\": \"header__link--3hhAe\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.scss?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/LogPage/LogPage.tsx":
/*!****************************************!*\
  !*** ./src/shared/LogPage/LogPage.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LogPage = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Preloader_1 = __webpack_require__(/*! ../Preloader */ \"./src/shared/Preloader/index.ts\");\r\nvar logpage_scss_1 = __importDefault(__webpack_require__(/*! ./logpage.scss */ \"./src/shared/LogPage/logpage.scss\"));\r\nfunction LogPage() {\r\n    var _a = react_1.useState(false), formTouch = _a[0], setFormTouch = _a[1];\r\n    var _b = react_1.useState(false), isLogin = _b[0], setIsLogin = _b[1];\r\n    var _c = react_1.useState(\"\"), login = _c[0], setLogin = _c[1];\r\n    var _d = react_1.useState(\"\"), password = _d[0], setPassword = _d[1];\r\n    var _e = react_1.useState(true), empty = _e[0], setEmpty = _e[1];\r\n    var _f = react_1.useState(false), load = _f[0], setLoad = _f[1];\r\n    react_1.useEffect(function () {\r\n        if (!empty) {\r\n            var payload = {\r\n                username: login,\r\n                password: password,\r\n            };\r\n            fetch(\"https://acits-api.herokuapp.com/api/token/\", {\r\n                method: \"POST\",\r\n                headers: { \"Content-Type\": \"application/json\" },\r\n                body: JSON.stringify(payload),\r\n            })\r\n                .then(function (res) { return res.json(); })\r\n                .then(function (data) {\r\n                if (data.access !== undefined) {\r\n                    localStorage.setItem(\"tokenAcits\", data.access);\r\n                    setIsLogin(true);\r\n                }\r\n                else {\r\n                    setEmpty(true);\r\n                }\r\n                setLoad(false);\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, [empty]);\r\n    function onSubmit(event) {\r\n        event.preventDefault();\r\n        if (!login || !password) {\r\n            setEmpty(true);\r\n            setFormTouch(true);\r\n        }\r\n        else {\r\n            setLoad(true);\r\n            setEmpty(false);\r\n            setFormTouch(true);\r\n        }\r\n    }\r\n    function handleChangeLogin(event) {\r\n        event.preventDefault();\r\n        setLogin(event.target.value);\r\n    }\r\n    function handleChangePassword(event) {\r\n        setPassword(event.target.value);\r\n        event.preventDefault();\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: logpage_scss_1.default.logpage },\r\n        isLogin ? (react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/today\" })) : (react_1.default.createElement(\"form\", { className: logpage_scss_1.default.form, onSubmit: onSubmit },\r\n            react_1.default.createElement(\"fieldset\", { className: logpage_scss_1.default.fieldset },\r\n                react_1.default.createElement(\"legend\", null, \"ACITS \\u0420\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0430\\u0446\\u0438\\u044F\"),\r\n                react_1.default.createElement(\"label\", { htmlFor: \"log\" }, \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\"),\r\n                react_1.default.createElement(\"br\", null),\r\n                react_1.default.createElement(\"input\", { className: logpage_scss_1.default.inputText, type: \"text\", name: \"log\", placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0438\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F (\\u043B\\u043E\\u0433\\u0438\\u043D)\", value: login, onChange: handleChangeLogin }),\r\n                react_1.default.createElement(\"br\", null),\r\n                react_1.default.createElement(\"label\", { htmlFor: \"password\" }, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\"),\r\n                react_1.default.createElement(\"br\", null),\r\n                react_1.default.createElement(\"input\", { className: logpage_scss_1.default.inputText, type: \"password\", name: \"password\", placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\", value: password, onChange: handleChangePassword }),\r\n                react_1.default.createElement(\"div\", { className: logpage_scss_1.default.empty }, formTouch && empty && (react_1.default.createElement(\"span\", null, \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F \\u0438\\u043B\\u0438 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C \\u0432\\u0432\\u0435\\u0434\\u0435\\u043D\\u044B \\u043D\\u0435\\u0432\\u0435\\u0440\\u043D\\u043E\"))),\r\n                react_1.default.createElement(\"button\", { className: logpage_scss_1.default.btn, type: \"submit\" }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\")))),\r\n        react_1.default.createElement(\"div\", null, load && react_1.default.createElement(Preloader_1.PreLoader, null))));\r\n}\r\nexports.LogPage = LogPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/LogPage/LogPage.tsx?");

/***/ }),

/***/ "./src/shared/LogPage/index.ts":
/*!*************************************!*\
  !*** ./src/shared/LogPage/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./LogPage */ \"./src/shared/LogPage/LogPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/LogPage/index.ts?");

/***/ }),

/***/ "./src/shared/LogPage/logpage.scss":
/*!*****************************************!*\
  !*** ./src/shared/LogPage/logpage.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"logpage\": \"logpage__logpage--2Sqci\",\n\t\"form\": \"logpage__form--1QF14\",\n\t\"fieldset\": \"logpage__fieldset--w-QtU\",\n\t\"inputText\": \"logpage__inputText--1_bt5\",\n\t\"btn\": \"logpage__btn--wFE6r\",\n\t\"empty\": \"logpage__empty--3UUJy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LogPage/logpage.scss?");

/***/ }),

/***/ "./src/shared/Preloader/Preloader.tsx":
/*!********************************************!*\
  !*** ./src/shared/Preloader/Preloader.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PreLoader = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preloader_scss_1 = __importDefault(__webpack_require__(/*! ./preloader.scss */ \"./src/shared/Preloader/preloader.scss\"));\r\nfunction PreLoader() {\r\n    return (react_1.default.createElement(\"div\", { className: preloader_scss_1.default.transitionLoader },\r\n        react_1.default.createElement(\"div\", { className: preloader_scss_1.default.transitionLoaderInner },\r\n            react_1.default.createElement(\"label\", null),\r\n            react_1.default.createElement(\"label\", null),\r\n            react_1.default.createElement(\"label\", null),\r\n            react_1.default.createElement(\"label\", null),\r\n            react_1.default.createElement(\"label\", null),\r\n            react_1.default.createElement(\"label\", null))));\r\n}\r\nexports.PreLoader = PreLoader;\r\n\n\n//# sourceURL=webpack:///./src/shared/Preloader/Preloader.tsx?");

/***/ }),

/***/ "./src/shared/Preloader/index.ts":
/*!***************************************!*\
  !*** ./src/shared/Preloader/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preloader */ \"./src/shared/Preloader/Preloader.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Preloader/index.ts?");

/***/ }),

/***/ "./src/shared/Preloader/preloader.scss":
/*!*********************************************!*\
  !*** ./src/shared/Preloader/preloader.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"transitionLoader\": \"preloader__transitionLoader--2_w_R\",\n\t\"transitionLoaderInner\": \"preloader__transitionLoaderInner--2Z1Pn\",\n\t\"loader\": \"preloader__loader--2AAQ6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Preloader/preloader.scss?");

/***/ }),

/***/ "./src/shared/TodayPage/CardTodayPage/CardTodayPage.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/TodayPage/CardTodayPage/CardTodayPage.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardTodayPage = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar AnimalModal_1 = __webpack_require__(/*! ../../AnimalModal */ \"./src/shared/AnimalModal/index.ts\");\r\nvar cardtodaypage_scss_1 = __importDefault(__webpack_require__(/*! ./cardtodaypage.scss */ \"./src/shared/TodayPage/CardTodayPage/cardtodaypage.scss\"));\r\nfunction CardTodayPage(_a) {\r\n    var id = _a.id, name = _a.name, mytype = _a.mytype;\r\n    var _b = react_1.useState(false), isModalOpened = _b[0], SetIsModalOpened = _b[1];\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: cardtodaypage_scss_1.default.animalcard },\r\n            react_1.default.createElement(\"h2\", { className: cardtodaypage_scss_1.default.animalname, onClick: function () {\r\n                    SetIsModalOpened(true);\r\n                } }, name),\r\n            react_1.default.createElement(\"h2\", null, mytype)),\r\n        isModalOpened && (react_1.default.createElement(AnimalModal_1.AnimalModal, { id: id, onClose: function () { return SetIsModalOpened(false); } }))));\r\n}\r\nexports.CardTodayPage = CardTodayPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/TodayPage/CardTodayPage/CardTodayPage.tsx?");

/***/ }),

/***/ "./src/shared/TodayPage/CardTodayPage/cardtodaypage.scss":
/*!***************************************************************!*\
  !*** ./src/shared/TodayPage/CardTodayPage/cardtodaypage.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"animalcard\": \"cardtodaypage__animalcard--1XKmk\",\n\t\"animalname\": \"cardtodaypage__animalname--veERH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TodayPage/CardTodayPage/cardtodaypage.scss?");

/***/ }),

/***/ "./src/shared/TodayPage/CardTodayPage/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/TodayPage/CardTodayPage/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardTodayPage */ \"./src/shared/TodayPage/CardTodayPage/CardTodayPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TodayPage/CardTodayPage/index.ts?");

/***/ }),

/***/ "./src/shared/TodayPage/TodayPage.tsx":
/*!********************************************!*\
  !*** ./src/shared/TodayPage/TodayPage.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TodayPage = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nvar Header_1 = __webpack_require__(/*! ../Header */ \"./src/shared/Header/index.ts\");\r\nvar Preloader_1 = __webpack_require__(/*! ../Preloader */ \"./src/shared/Preloader/index.ts\");\r\nvar CardTodayPage_1 = __webpack_require__(/*! ./CardTodayPage */ \"./src/shared/TodayPage/CardTodayPage/index.ts\");\r\nvar todaypage_scss_1 = __importDefault(__webpack_require__(/*! ./todaypage.scss */ \"./src/shared/TodayPage/todaypage.scss\"));\r\nfunction TodayPage() {\r\n    var token = localStorage.getItem(\"tokenAcits\");\r\n    var nowDate = new Date().toLocaleDateString();\r\n    var _a = react_1.useState(false), error = _a[0], setError = _a[1];\r\n    var _b = react_1.useState(false), load = _b[0], setLoad = _b[1];\r\n    var dispatch = react_redux_1.useDispatch();\r\n    var results = react_redux_1.useSelector(function (state) { return state.today; });\r\n    react_1.useEffect(function () {\r\n        if (results && results.length > 1)\r\n            return;\r\n        if (token) {\r\n            setLoad(true);\r\n            fetch(\"https://acits-api.herokuapp.com/api/v1/prescriptions/today\", {\r\n                headers: { Authorization: \"Bearer \" + token, \"current-shelter\": \"1\" },\r\n            })\r\n                .then(function (res) { return res.json(); })\r\n                .then(function (data) {\r\n                if (data.code) {\r\n                    setError(true);\r\n                    localStorage.setItem(\"tokenAcits\", \"\");\r\n                }\r\n                dispatch(actions_1.updateToday(data.results));\r\n                setLoad(false);\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, [token]);\r\n    return (react_1.default.createElement(\"div\", { className: todaypage_scss_1.default.todaypageContainer },\r\n        react_1.default.createElement(\"div\", null, load && react_1.default.createElement(Preloader_1.PreLoader, null)),\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(\"h1\", null,\r\n            \"\\u0421\\u0435\\u0433\\u043E\\u0434\\u043D\\u044F \",\r\n            nowDate),\r\n        react_1.default.createElement(\"ul\", { className: todaypage_scss_1.default.todaypage }, !error && results && results !== undefined ? (results.map(function (result, index) {\r\n            return (react_1.default.createElement(\"li\", { key: index },\r\n                react_1.default.createElement(CardTodayPage_1.CardTodayPage, { id: result.animal.id, name: result.animal.name, mytype: result.my_type })));\r\n        })) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/login\" })))));\r\n}\r\nexports.TodayPage = TodayPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/TodayPage/TodayPage.tsx?");

/***/ }),

/***/ "./src/shared/TodayPage/index.ts":
/*!***************************************!*\
  !*** ./src/shared/TodayPage/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TodayPage */ \"./src/shared/TodayPage/TodayPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TodayPage/index.ts?");

/***/ }),

/***/ "./src/shared/TodayPage/todaypage.scss":
/*!*********************************************!*\
  !*** ./src/shared/TodayPage/todaypage.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"todaypageContainer\": \"todaypage__todaypageContainer--ihYEU\",\n\t\"todaypage\": \"todaypage__todaypage--qdrvF\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TodayPage/todaypage.scss?");

/***/ }),

/***/ "./src/shared/img/Crossicon.tsx":
/*!**************************************!*\
  !*** ./src/shared/img/Crossicon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Crossicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Crossicon() {\r\n    return (React.createElement(\"svg\", { width: \"21\", height: \"21\", viewBox: \"0 0 21 21\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z\", fill: \"#ADADAD\" }),\r\n        React.createElement(\"path\", { d: \"M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z\", fill: \"#ADADAD\" })));\r\n}\r\nexports.Crossicon = Crossicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/img/Crossicon.tsx?");

/***/ }),

/***/ "./src/shared/img/index.ts":
/*!*********************************!*\
  !*** ./src/shared/img/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Crossicon */ \"./src/shared/img/Crossicon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/img/index.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.updateToday = exports.updateAnimals = exports.UPDATE_TODAY = exports.UPDATE_ANIMALS = void 0;\r\nexports.UPDATE_ANIMALS = \"UPDATE_ANIMALS\";\r\nexports.UPDATE_TODAY = \"UPDATE_TODAY\";\r\nexports.updateAnimals = function (animals) { return ({\r\n    type: exports.UPDATE_ANIMALS,\r\n    animals: animals,\r\n}); };\r\nexports.updateToday = function (today) { return ({\r\n    type: exports.UPDATE_TODAY,\r\n    today: today,\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/reducers.ts":
/*!*******************************!*\
  !*** ./src/store/reducers.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/actions.ts\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/store.ts\");\r\nexports.rootReducer = function (state, action) {\r\n    if (state === void 0) { state = store_1.initialState; }\r\n    switch (action.type) {\r\n        case actions_1.UPDATE_ANIMALS:\r\n            return __assign(__assign({}, state), { animals: action.animals });\r\n        case actions_1.UPDATE_TODAY:\r\n            return __assign(__assign({}, state), { today: action.today });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/reducers.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.store = exports.initialState = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar reducers_1 = __webpack_require__(/*! ./reducers */ \"./src/store/reducers.ts\");\r\nexports.initialState = {\r\n    animals: [],\r\n    today: [],\r\n};\r\nexports.store = redux_1.createStore(reducers_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });