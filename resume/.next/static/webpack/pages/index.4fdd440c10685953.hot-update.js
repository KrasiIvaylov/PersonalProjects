"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Layout.js":
/*!*******************************!*\
  !*** ./src/layouts/Layout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./src/layouts/Footer.js\");\n/* harmony import */ var _HeroHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroHeader */ \"./src/layouts/HeroHeader.js\");\n/* harmony import */ var _ModalBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalBox */ \"./src/layouts/ModalBox.js\");\n/* harmony import */ var _ModalCV__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalCV */ \"./src/layouts/ModalCV.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Nav */ \"./src/layouts/Nav.js\");\n/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Overlay */ \"./src/layouts/Overlay.js\");\n/* harmony import */ var _RightBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RightBar */ \"./src/layouts/RightBar.js\");\nvar _this = undefined;\n\n\n\n// import PanelContent from \"../components/PanelContent\";\n\n//import Cursor from \"./Cursor\";\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,_utilits__WEBPACK_IMPORTED_MODULE_3__.dataImage)();\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isResume = ref[0], setResume = ref[1];\n    var resumeTrueFalse = function() {\n        document.querySelector(\"body\").classList.toggle(\"resume-opened\");\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isToggled = ref1[0], setToggled = ref1[1];\n    var toggleTrueFalse = function() {\n        document.querySelector(\"body\").classList.toggle(\"rightbar-opened\");\n        if (document.querySelector(\"body\").classList.contains('rightbar-opened')) {\n            var rightBar = document.getElementsByClassName('right_bar_overlay')[0];\n            rightBar.addEventListener('mouseover', function(ev) {\n                rightBar.setAttribute('style', \"cursor: default;\");\n            });\n            rightBar.addEventListener('click', function(ev) {\n                document.querySelector(\"body\").classList.remove('rightbar-opened');\n            });\n        }\n    };\n    var skillsVisible = document.getElementsByClassName(\"section_skills\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Krasimir Krasimirov Personal Resume\"\n                }, void 0, false, {\n                    fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"krasiIvaylov_fn_main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalCV__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        resumeTrueFalse: resumeTrueFalse\n                    }, void 0, false, {\n                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RightBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        toggleTrueFalse: toggleTrueFalse\n                    }, void 0, false, {\n                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"krasiIvaylov_fn_wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"krasiIvaylov_page\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        toggleTrueFalse: toggleTrueFalse\n                                    }, void 0, false, {\n                                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        resumeTrueFalse: resumeTrueFalse\n                                    }, void 0, false, {\n                                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"main\",\n                                        children: children\n                                    }, void 0, false, {\n                                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"krasiIvaylov_fn_totop\"\n                            }, void 0, false, {\n                                fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/krasi/Documents/PersonalProjects/resume/src/layouts/Layout.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"lOqNYqJEmWWUETHDX7AciEx76zA=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0dBeERLdEIsTUFBTTtLQUFOQSxNQUFNO0FBMERaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvTGF5b3V0LmpzP2JmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBQYW5lbENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFuZWxDb250ZW50XCI7XHJcbmltcG9ydCB7IGRhdGFJbWFnZSB9IGZyb20gXCIuLi91dGlsaXRzXCI7XHJcbi8vaW1wb3J0IEN1cnNvciBmcm9tIFwiLi9DdXJzb3JcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlcm9IZWFkZXIgZnJvbSBcIi4vSGVyb0hlYWRlclwiO1xyXG5pbXBvcnQgTW9kYWxCb3ggZnJvbSBcIi4vTW9kYWxCb3hcIjtcclxuaW1wb3J0IE1vZGFsQ1YgZnJvbSBcIi4vTW9kYWxDVlwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XHJcbmltcG9ydCBSaWdodEJhciBmcm9tIFwiLi9SaWdodEJhclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkYXRhSW1hZ2UoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2lzUmVzdW1lLCBzZXRSZXN1bWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlc3VtZVRydWVGYWxzZSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJyZXN1bWUtb3BlbmVkXCIpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbaXNUb2dnbGVkLCBzZXRUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGVUcnVlRmFsc2UgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwicmlnaHRiYXItb3BlbmVkXCIpO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5jb250YWlucygncmlnaHRiYXItb3BlbmVkJykpIHtcclxuICAgICAgY29uc3QgcmlnaHRCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyaWdodF9iYXJfb3ZlcmxheScpWzBdO1xyXG4gICAgICByaWdodEJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZXYpID0+IHtcclxuICAgICAgICByaWdodEJhci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGN1cnNvcjogZGVmYXVsdDtgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByaWdodEJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0YmFyLW9wZW5lZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNraWxsc1Zpc2libGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VjdGlvbl9za2lsbHNcIik7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPktyYXNpbWlyIEtyYXNpbWlyb3YgUGVyc29uYWwgUmVzdW1lPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtyYXNpSXZheWxvdl9mbl9tYWluXCI+XHJcbiAgICAgICAgPE92ZXJsYXkgLz5cclxuICAgICAgICA8TW9kYWxCb3ggLz5cclxuICAgICAgICA8TW9kYWxDViByZXN1bWVUcnVlRmFsc2U9e3Jlc3VtZVRydWVGYWxzZX0gLz5cclxuICAgICAgICA8UmlnaHRCYXIgdG9nZ2xlVHJ1ZUZhbHNlPXt0b2dnbGVUcnVlRmFsc2V9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcmFzaUl2YXlsb3ZfZm5fd3JhcHBlclwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3Jhc2lJdmF5bG92X3BhZ2VcIj5cclxuICAgICAgICAgICAgPE5hdiB0b2dnbGVUcnVlRmFsc2U9e3RvZ2dsZVRydWVGYWxzZX0gLz5cclxuICAgICAgICAgICAgPEhlcm9IZWFkZXIgcmVzdW1lVHJ1ZUZhbHNlPXtyZXN1bWVUcnVlRmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBUb3RvcCBCdXR0b24gKi99XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImtyYXNpSXZheWxvdl9mbl90b3RvcFwiPjwvYT5cclxuICAgICAgICAgIHsvKiAvVG90b3AgQnV0dG9uICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhSW1hZ2UiLCJGb290ZXIiLCJIZXJvSGVhZGVyIiwiTW9kYWxCb3giLCJNb2RhbENWIiwiTmF2IiwiT3ZlcmxheSIsIlJpZ2h0QmFyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJpc1Jlc3VtZSIsInNldFJlc3VtZSIsInJlc3VtZVRydWVGYWxzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImlzVG9nZ2xlZCIsInNldFRvZ2dsZWQiLCJ0b2dnbGVUcnVlRmFsc2UiLCJjb250YWlucyIsInJpZ2h0QmFyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsInNraWxsc1Zpc2libGUiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/Layout.js\n");

/***/ })

});