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

/***/ "./components/grid-item.js":
/*!*********************************!*\
  !*** ./components/grid-item.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WorkGridItem\": function() { return /* binding */ WorkGridItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n// export const GridItem = ({ children, href, title, thumbnail }) => {\n//   return (\n//     <Box w=\"100%\" align=\"center\">\n//       <LinkBox cursor=\"pointer\">\n//         <Image\n//           src={thumbnail}\n//           alt={title}\n//           className=\"grid-item-thumbnail\"\n//           placeholder=\"blur\"\n//           loading=\"lazy\"\n//         />\n//         <LinkOverlay href={href} target=\"_blank\">\n//           <Text mt={2}>{title}</Text>\n//         </LinkOverlay>\n//         <Text fontSize={14}>{children}</Text>\n//       </LinkBox>\n//     </Box>\n//   )\n// }\nvar WorkGridItem = function(param) {\n    var children = param.children, id = param.id, title = param.title, thumbnail = param.thumbnail;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        w: \"100%\",\n        align: \"center\",\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DG\\\\Documents\\\\Training\\\\portfolio\\\\porty\\\\components\\\\grid-item.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n} // export const GridItemStyle = () => {\n //   return (\n //     <Global\n //       styles={`\n //     .grid-item-thumbnail {\n //         border-radius: 12px;\n //     }\n //     `}\n //     />\n //   )\n // }\n;\n_c = WorkGridItem;\nvar _c;\n$RefreshReg$(_c, \"WorkGridItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQtaXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFnQztBQUNFO0FBQ2dDO0FBQzNCO0FBRXZDLHNFQUFzRTtBQUN0RSxhQUFhO0FBQ2Isb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQyxpQkFBaUI7QUFDakIsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4Qiw0Q0FBNEM7QUFDNUMsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2Isb0RBQW9EO0FBQ3BELHdDQUF3QztBQUN4Qyx5QkFBeUI7QUFDekIsZ0RBQWdEO0FBQ2hELG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsTUFBTTtBQUNOLElBQUk7QUFFRyxJQUFNTyxZQUFZLEdBQUcsZ0JBQXdDO1FBQXJDQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7SUFDM0QscUJBQ0UsOERBQUNULGlEQUFHO1FBQUNVLENBQUMsRUFBQyxNQUFNO1FBQUNDLEtBQUssRUFBQyxRQUFRO2tCQUFDLE9BQzNCOzs7OzthQWdCSSxDQUNQO0NBQ0YsQ0FFRCx1Q0FBdUM7Q0FDdkMsYUFBYTtDQUNiLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsNkJBQTZCO0NBQzdCLCtCQUErQjtDQUMvQixRQUFRO0NBQ1IsU0FBUztDQUNULFNBQVM7Q0FDVCxNQUFNO0NBQ04sSUFBSTtBQVpIO0FBckJZTixLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ3JpZC1pdGVtLmpzPzhmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIExpbmtCb3gsIExpbmtPdmVybGF5IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcblxyXG4vLyBleHBvcnQgY29uc3QgR3JpZEl0ZW0gPSAoeyBjaGlsZHJlbiwgaHJlZiwgdGl0bGUsIHRodW1ibmFpbCB9KSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxCb3ggdz1cIjEwMCVcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4vLyAgICAgICA8TGlua0JveCBjdXJzb3I9XCJwb2ludGVyXCI+XHJcbi8vICAgICAgICAgPEltYWdlXHJcbi8vICAgICAgICAgICBzcmM9e3RodW1ibmFpbH1cclxuLy8gICAgICAgICAgIGFsdD17dGl0bGV9XHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGh1bWJuYWlsXCJcclxuLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYmx1clwiXHJcbi8vICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbi8vICAgICAgICAgLz5cclxuLy8gICAgICAgICA8TGlua092ZXJsYXkgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbi8vICAgICAgICAgICA8VGV4dCBtdD17Mn0+e3RpdGxlfTwvVGV4dD5cclxuLy8gICAgICAgICA8L0xpbmtPdmVybGF5PlxyXG4vLyAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsxNH0+e2NoaWxkcmVufTwvVGV4dD5cclxuLy8gICAgICAgPC9MaW5rQm94PlxyXG4vLyAgICAgPC9Cb3g+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgV29ya0dyaWRJdGVtID0gKHsgY2hpbGRyZW4sIGlkLCB0aXRsZSwgdGh1bWJuYWlsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB3PVwiMTAwJVwiIGFsaWduPVwiY2VudGVyXCI+aGVsbG9cclxuICAgICAgey8qIDxOZXh0TGluayBocmVmPXtgL3Byb2plY3RzYH0gcGFzc0hyZWYgc2Nyb2xsPXtmYWxzZX0+XHJcbiAgICAgICAgPExpbmtCb3ggY3Vyc29yPVwicG9pbnRlclwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17dGh1bWJuYWlsfVxyXG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJibHVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlua092ZXJsYXkgaHJlZj17YC9wcm9qZWN0cy8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8VGV4dCBtdD17Mn0gZm9udFNpemU9ezIwfT5cclxuICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvTGlua092ZXJsYXk+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT17MTR9PntjaGlsZHJlbn08L1RleHQ+XHJcbiAgICAgICAgPC9MaW5rQm94PlxyXG4gICAgICA8L05leHRMaW5rPiAqL31cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEdyaWRJdGVtU3R5bGUgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxHbG9iYWxcclxuLy8gICAgICAgc3R5bGVzPXtgXHJcbi8vICAgICAuZ3JpZC1pdGVtLXRodW1ibmFpbCB7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuLy8gICAgIH1cclxuLy8gICAgIGB9XHJcbi8vICAgICAvPlxyXG4vLyAgIClcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsiTmV4dExpbmsiLCJJbWFnZSIsIkJveCIsIlRleHQiLCJMaW5rQm94IiwiTGlua092ZXJsYXkiLCJHbG9iYWwiLCJXb3JrR3JpZEl0ZW0iLCJjaGlsZHJlbiIsImlkIiwidGl0bGUiLCJ0aHVtYm5haWwiLCJ3IiwiYWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/grid-item.js\n"));

/***/ })

});