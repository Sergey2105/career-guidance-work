"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/assets/shared/components/pages/Profile/index.tsx":
/*!**************************************************************!*\
  !*** ./src/assets/shared/components/pages/Profile/index.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ \"./src/assets/shared/components/pages/Profile/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/hooks */ \"./src/assets/shared/components/store/hooks.ts\");\n/* harmony import */ var _store_slice_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/slice/authSlice */ \"./src/assets/shared/components/store/slice/authSlice/index.ts\");\n/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../buttons/Button */ \"./src/assets/shared/components/buttons/Button/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Profile = ()=>{\n    _s();\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const logoutUser = ()=>{\n        dispatch((0,_store_slice_authSlice__WEBPACK_IMPORTED_MODULE_4__.logout)());\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"d\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    onClick: logoutUser,\n                    label: \"Выйти\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Profile\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Profile\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Profile\\\\index.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Profile\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Profile, \"cnCgJZqboYHCQPt1X4vRgM1/GGo=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NoYXJlZC9jb21wb25lbnRzL3BhZ2VzL1Byb2ZpbGUvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1Y7QUFDRDtBQUNRO0FBQ0s7QUFDWDtBQUUxQyxNQUFNTSxVQUFVOztJQUNaLE1BQU1DLFdBQVdKLHlEQUFXQTtJQUM1QixNQUFNSyxTQUFTTixzREFBU0E7SUFFeEIsTUFBTU8sYUFBYTtRQUNmRixTQUFTSCw4REFBTUE7UUFDZkksT0FBT0UsSUFBSSxDQUFDO0lBQ2hCO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdYLHFFQUFtQjtrQkFDL0IsNEVBQUNVO1lBQUlDLFdBQVdYLGdFQUFjO3NCQUMxQiw0RUFBQ1k7MEJBQ0csNEVBQUNSLHVEQUFNQTtvQkFBQ1MsU0FBU0w7b0JBQVlNLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4RDtHQWpCTVQ7O1FBQ2VILHFEQUFXQTtRQUNiRCxrREFBU0E7OztLQUZ0Qkk7QUFrQk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9zaGFyZWQvY29tcG9uZW50cy9wYWdlcy9Qcm9maWxlL2luZGV4LnRzeD84ZTNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2hvb2tzXCI7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCIuLi8uLi9zdG9yZS9zbGljZS9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9ucy9CdXR0b25cIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXRVc2VyID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImJvZHlcIl19PlxyXG4gICAgICAgICAgICAgICAgPGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtsb2dvdXRVc2VyfSBsYWJlbD17XCLQktGL0LnRgtC4XCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlUm91dGVyIiwidXNlRGlzcGF0Y2giLCJsb2dvdXQiLCJCdXR0b24iLCJQcm9maWxlIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJsb2dvdXRVc2VyIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImQiLCJvbkNsaWNrIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/shared/components/pages/Profile/index.tsx\n"));

/***/ })

});