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

/***/ "./src/assets/shared/components/layout/MainLayout/index.tsx":
/*!******************************************************************!*\
  !*** ./src/assets/shared/components/layout/MainLayout/index.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ \"./src/assets/shared/components/layout/Header/index.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ \"./src/assets/shared/components/layout/Footer/index.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ \"./src/assets/shared/components/layout/MainLayout/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/hooks */ \"./src/assets/shared/components/store/hooks.ts\");\n/* harmony import */ var _store_slice_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/slice/authSlice */ \"./src/assets/shared/components/store/slice/authSlice/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* eslint-disable react-hooks/exhaustive-deps */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MainLayout = (props)=>{\n    _s();\n    const { children } = props;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const userData = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slice_authSlice__WEBPACK_IMPORTED_MODULE_5__.selectUser);\n    const userDataFull = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slice_authSlice__WEBPACK_IMPORTED_MODULE_5__.selectUserFull);\n    console.log(userDataFull);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const token = localStorage.getItem(\"userToken\");\n        if (token !== null) {\n            dispatch((0,_store_slice_authSlice__WEBPACK_IMPORTED_MODULE_5__.getMe)());\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const token = localStorage.getItem(\"userToken\");\n        if (Object.keys(userData).length !== 0 && token !== null) {\n            dispatch((0,_store_slice_authSlice__WEBPACK_IMPORTED_MODULE_5__.getMeFull)(String(userData === null || userData === void 0 ? void 0 : userData.id_profile)));\n        }\n    }, [\n        userData\n    ]);\n    // useEffect(() => {\n    // if (userData) {\n    //     router.push(`/referrer=${window.location.pathname}`);\n    // }\n    // if (userData.id && window.location.pathname == \"/\") {\n    //     router.push(\"/meeting\");\n    // }\n    // }, [userData]);\n    // console.log(userData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\layout\\\\MainLayout\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().body),\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\layout\\\\MainLayout\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            router.pathname === \"/login\" || router.pathname === \"/register\" ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\layout\\\\MainLayout\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 87\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\layout\\\\MainLayout\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MainLayout, \"yhFb6sYIRyb6/5z+bj/jQTG7/tE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = MainLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9NYWluTGF5b3V0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsOENBQThDOztBQUNmO0FBQ0E7QUFDVTtBQUNEO0FBQ3FCO0FBQzhCO0FBQ3pEO0FBR2xDLE1BQU1XLGFBQWEsQ0FBQ0M7O0lBQ2hCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBQ3JCLE1BQU1FLFNBQVNYLHNEQUFTQTtJQUN4QixNQUFNWSxXQUFXWCx5REFBV0E7SUFDNUIsTUFBTVksV0FBV1gseURBQVdBLENBQUNHLDhEQUFVQTtJQUN2QyxNQUFNUyxlQUFlWix5REFBV0EsQ0FBQ0ksa0VBQWNBO0lBQy9DUyxRQUFRQyxHQUFHLENBQUNGO0lBRVpQLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVUsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUlGLFVBQVUsTUFBTTtZQUNoQkwsU0FBU1QsNkRBQUtBO1FBQ2xCO0lBQ0osR0FBRyxFQUFFO0lBRUxJLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVUsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUlDLE9BQU9DLElBQUksQ0FBQ1IsVUFBVVMsTUFBTSxLQUFLLEtBQUtMLFVBQVUsTUFBTTtZQUN0REwsU0FBU1IsaUVBQVNBLENBQUNtQixPQUFPVixxQkFBQUEsK0JBQUFBLFNBQVVXLFVBQVU7UUFDbEQ7SUFDSixHQUFHO1FBQUNYO0tBQVM7SUFFYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDREQUE0RDtJQUM1RCxJQUFJO0lBQ0osd0RBQXdEO0lBQ3hELCtCQUErQjtJQUMvQixJQUFJO0lBQ0osa0JBQWtCO0lBRWxCLHlCQUF5QjtJQUV6QixxQkFDSSw4REFBQ1k7UUFBSUMsV0FBVzNCLHFFQUFtQjs7MEJBQy9CLDhEQUFDRiwrQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDOEI7Z0JBQUtELFdBQVczQixnRUFBYzswQkFBR1c7Ozs7OztZQUNqQ0MsT0FBT2lCLFFBQVEsS0FBSyxZQUFZakIsT0FBT2lCLFFBQVEsS0FBSyxjQUFjLHFCQUFPLDhEQUFDOUIsK0NBQU1BOzs7Ozs7Ozs7OztBQUc3RjtHQXhDTVU7O1FBRWFSLGtEQUFTQTtRQUNQQyxxREFBV0E7UUFDWEMscURBQVdBO1FBQ1BBLHFEQUFXQTs7O0tBTDlCTTtBQXlDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9NYWluTGF5b3V0L2luZGV4LnRzeD9jNjRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2hvb2tzXCI7XG5pbXBvcnQgeyBnZXRNZSwgZ2V0TWVGdWxsLCBzZWxlY3RVc2VyLCBzZWxlY3RVc2VyRnVsbCB9IGZyb20gXCIuLi8uLi9zdG9yZS9zbGljZS9hdXRoU2xpY2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2VsZWN0RnVsbFVzZXIsIHVzZXJEYXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3NsaWNlL3VzZXJTbGljZVwiO1xuXG5jb25zdCBNYWluTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcik7XG4gICAgY29uc3QgdXNlckRhdGFGdWxsID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlckZ1bGwpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhRnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclRva2VuXCIpO1xuICAgICAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldE1lKCkpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJUb2tlblwiKTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVzZXJEYXRhKS5sZW5ndGggIT09IDAgJiYgdG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldE1lRnVsbChTdHJpbmcodXNlckRhdGE/LmlkX3Byb2ZpbGUpKSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlckRhdGFdKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKHVzZXJEYXRhKSB7XG4gICAgLy8gICAgIHJvdXRlci5wdXNoKGAvcmVmZXJyZXI9JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YCk7XG4gICAgLy8gfVxuICAgIC8vIGlmICh1c2VyRGF0YS5pZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvXCIpIHtcbiAgICAvLyAgICAgcm91dGVyLnB1c2goXCIvbWVldGluZ1wiKTtcbiAgICAvLyB9XG4gICAgLy8gfSwgW3VzZXJEYXRhXSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzW1wiYm9keVwiXX0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIgfHwgcm91dGVyLnBhdGhuYW1lID09PSBcIi9yZWdpc3RlclwiID8gbnVsbCA6IDxGb290ZXIgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dDtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGb290ZXIiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZ2V0TWUiLCJnZXRNZUZ1bGwiLCJzZWxlY3RVc2VyIiwic2VsZWN0VXNlckZ1bGwiLCJ1c2VFZmZlY3QiLCJNYWluTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsInJvdXRlciIsImRpc3BhdGNoIiwidXNlckRhdGEiLCJ1c2VyRGF0YUZ1bGwiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlN0cmluZyIsImlkX3Byb2ZpbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/shared/components/layout/MainLayout/index.tsx\n"));

/***/ })

});