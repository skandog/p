"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-item.js */ \"./components/grid-item.js\");\nvar _this = undefined;\n\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    var s = \"\".concat(title, \" - Skandfolio\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: s\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\layouts\\\\article.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\layouts\\\\article.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_item_js__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\layouts\\\\article.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\layouts\\\\article.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXNDO0FBQ1Y7QUFDbUI7QUFFL0MsSUFBTUcsUUFBUSxHQUFHO0lBQ2ZDLE1BQU0sRUFBRTtRQUFFQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsRUFBRTtLQUFFO0lBQ25DQyxLQUFLLEVBQUU7UUFBRUgsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUNqQ0UsSUFBSSxFQUFFO1FBQUVKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxFQUFFO0tBQUU7Q0FDbEM7QUFFRCxJQUFNRyxNQUFNLEdBQUcsZ0JBQXlCO1FBQXRCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO0lBQy9CLElBQU1DLENBQUMsR0FBRyxFQUFDLENBQVEsTUFBYSxDQUFuQkQsS0FBSyxFQUFDLGVBQWEsQ0FBQztJQUVqQyxxQkFDRSw4REFBQ1oseURBQWM7UUFDYmUsT0FBTyxFQUFDLFFBQVE7UUFDaEJDLE9BQU8sRUFBQyxPQUFPO1FBQ2ZQLElBQUksRUFBQyxNQUFNO1FBQ1hOLFFBQVEsRUFBRUEsUUFBUTtRQUNsQmMsVUFBVSxFQUFFO1lBQUVDLFFBQVEsRUFBRSxHQUFHO1lBQUVDLElBQUksRUFBRSxXQUFXO1NBQUU7UUFDaERDLEtBQUssRUFBRTtZQUFFQyxRQUFRLEVBQUUsVUFBVTtTQUFFO2tCQUUvQjs7Z0JBQ0dULEtBQUssa0JBQ0osOERBQUNYLGtEQUFJOzhCQUNILDRFQUFDVyxPQUFLO2tDQUFFQyxDQUFDOzs7Ozs2QkFBUzs7Ozs7eUJBR2I7Z0JBRVJGLFFBQVE7OEJBRVQsOERBQUNULHdEQUFhOzs7O3lCQUFHOzt3QkFDaEI7Ozs7O2FBQ1ksQ0FDbEI7Q0FDRjtBQTFCS1EsS0FBQUEsTUFBTTtBQTRCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcz9lZjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgR3JpZEl0ZW1TdHlsZSB9IGZyb20gJy4uL2dyaWQtaXRlbS5qcydcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAyMCB9LFxyXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcclxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDAsIHk6IDIwIH1cclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcclxuICBjb25zdCBzID0gYCR7dGl0bGV9IC0gU2thbmRmb2xpb2BcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uYXJ0aWNsZVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgYW5pbWF0ZT1cImVudGVyXCJcclxuICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgdHlwZTogJ2Vhc2VJbk91dCcgfX1cclxuICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICB7dGl0bGUgJiYgKFxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57c308L3RpdGxlPlxyXG4gICAgICAgICAgICB7LyogPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtzfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3N9IC8+ICovfVxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICA8R3JpZEl0ZW1TdHlsZSAvPlxyXG4gICAgICA8Lz5cclxuICAgIDwvbW90aW9uLmFydGljbGU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJHcmlkSXRlbVN0eWxlIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsInkiLCJlbnRlciIsImV4aXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwicyIsImFydGljbGUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJzdHlsZSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n"));

/***/ })

});