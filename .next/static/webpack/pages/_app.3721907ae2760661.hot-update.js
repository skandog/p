"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layouts/main.js":
/*!************************************!*\
  !*** ./components/layouts/main.js ***!
  \************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar Main = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_head__WEBPACK_IMPORTED_MODULE_2__, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\layouts\\\\main.js\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Skandfolio - Homepage\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\layouts\\\\main.js\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 9,\n                columnNumber: 1\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                maxW: \"container.md\",\n                pt: 14,\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\layouts\\\\main.js\",\n                lineNumber: 13,\n                columnNumber: 1\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwQjtBQUNFO0FBQ3NCO0FBRWxELElBQU1JLElBQUksR0FBRyxnQkFBZ0I7UUFBZEMsUUFBUSxTQUFSQSxRQUFRO0lBQ25CLHFCQUNJOzswQkFFUiw4REFBQ0osc0NBQUk7O2tDQUNELDhEQUFDSyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7NkJBQUU7a0NBQ3JFLDhEQUFDQyxPQUFLO2tDQUFDLHVCQUFxQjs7Ozs7NkJBQVE7Ozs7OztxQkFDakM7MEJBQ1AsOERBQUNOLHVEQUFTO2dCQUFDTyxJQUFJLEVBQUMsY0FBYztnQkFBQ0MsRUFBRSxFQUFFLEVBQUU7MEJBQ2hDTixRQUFROzs7OztxQkFDRDs7b0JBQ0QsQ0FDSjtDQUNOO0FBYktELEtBQUFBLElBQUk7QUFtQlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvbWFpbi5qcz9lNWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0ICB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmNvbnN0IE1haW4gPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPD5cclxuXHJcbjxIZWFkPlxyXG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxyXG4gICAgPHRpdGxlPlNrYW5kZm9saW8gLSBIb21lcGFnZTwvdGl0bGU+XHJcbjwvSGVhZD5cclxuPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLm1kXCIgcHQ9ezE0fT5cclxuICAgIHtjaGlsZHJlbn1cclxuPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgKTtcclxufVxyXG5cclxuXHJcbiBcclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiQm94IiwiQ29udGFpbmVyIiwiTWFpbiIsImNoaWxkcmVuIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiLCJtYXhXIiwicHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/main.js\n"));

/***/ })

});