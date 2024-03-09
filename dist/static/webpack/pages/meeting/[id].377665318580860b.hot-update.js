"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/meeting/[id]",{

/***/ "./src/assets/shared/components/pages/Meeting/MeetingView/index.tsx":
/*!**************************************************************************!*\
  !*** ./src/assets/shared/components/pages/Meeting/MeetingView/index.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.module.scss */ \"./src/assets/shared/components/pages/Meeting/MeetingView/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_img_room_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/room.jpg */ \"./public/img/room.jpg\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/hooks */ \"./src/assets/shared/components/store/hooks.ts\");\n/* harmony import */ var _store_slice_eventSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/slice/eventSlice */ \"./src/assets/shared/components/store/slice/eventSlice/index.ts\");\n/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../buttons/Button */ \"./src/assets/shared/components/buttons/Button/index.tsx\");\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Tag */ \"./src/assets/shared/components/Tag/index.tsx\");\n/* harmony import */ var _store_slice_authSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/slice/authSlice */ \"./src/assets/shared/components/store/slice/authSlice/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst MeetingView = (props)=>{\n    var _event_tags;\n    _s();\n    const [id, setID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const event = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slice_eventSlice__WEBPACK_IMPORTED_MODULE_6__.selectEventProps);\n    const userData = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slice_authSlice__WEBPACK_IMPORTED_MODULE_9__.selectUser);\n    const userDataFull = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slice_authSlice__WEBPACK_IMPORTED_MODULE_9__.selectUserFull);\n    console.log(event);\n    console.log(userDataFull);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = location.pathname.split(\"/\").filter((el)=>el)[1];\n        dispatch((0,_store_slice_eventSlice__WEBPACK_IMPORTED_MODULE_6__.getEvent)(String(id)));\n    }, []);\n    const join = ()=>{\n        const id = location.pathname.split(\"/\").filter((el)=>el)[1];\n        const token = localStorage.getItem(\"userToken\");\n        if (token !== null) {\n            dispatch((0,_store_slice_eventSlice__WEBPACK_IMPORTED_MODULE_6__.joinEvent)(String(id)));\n        } else {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().img),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().img__img),\n                                src: _public_img_room_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"class\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__title),\n                                    children: event.title\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__name),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__name__time),\n                                            children: \"Время проведения\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__name__place),\n                                            children: \"Место проведения\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__name__date),\n                                            children: \"Дата проведения\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__name__date),\n                                            children: \"Колличество мест\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__info),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__info__time),\n                                            children: [\n                                                event === null || event === void 0 ? void 0 : event.timetable.start_time,\n                                                \" – \",\n                                                event === null || event === void 0 ? void 0 : event.timetable.end_time\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__info__place),\n                                            children: event === null || event === void 0 ? void 0 : event.timetable.place.office\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__info__date),\n                                            children: event === null || event === void 0 ? void 0 : event.timetable.event_date\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header__main__info__date),\n                                            children: event === null || event === void 0 ? void 0 : event.timetable.place.max_participant\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main__tag),\n                            children: event === null || event === void 0 ? void 0 : (_event_tags = event.tags) === null || _event_tags === void 0 ? void 0 : _event_tags.map((value, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tag__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    value: value,\n                                    myKey: key\n                                }, key, false, {\n                                    fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 92\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main__btn),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                label: \"Записаться\",\n                                onClick: ()=>join()\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().info__title),\n                            children: \"Информация о мероприятии\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().info__text),\n                            children: event === null || event === void 0 ? void 0 : event.body\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Диплом\\\\career-guidance-work\\\\src\\\\assets\\\\shared\\\\components\\\\pages\\\\Meeting\\\\MeetingView\\\\index.tsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(MeetingView, \"NlelsyLwGUPnt4f1aiCRarh9Ezk=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = MeetingView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetingView);\nvar _c;\n$RefreshReg$(_c, \"MeetingView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NoYXJlZC9jb21wb25lbnRzL3BhZ2VzL01lZXRpbmcvTWVldGluZ1ZpZXcvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDVjtBQUVWO0FBQ1M7QUFDQTtBQUN3QjtBQUN3QjtBQUMzQztBQUNkO0FBQ3dEO0FBRXZGLE1BQU1nQixjQUFjLENBQUNDO1FBbURxQ0M7O0lBbER0RCxNQUFNLENBQUNDLElBQUlDLE1BQU0sR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ21CLE9BQU9DLFNBQVMsR0FBR3BCLCtDQUFRQSxDQUFVO0lBQzVDLE1BQU1xQixXQUFXaEIseURBQVdBO0lBQzVCLE1BQU1pQixRQUFRbEIsc0RBQVNBO0lBQ3ZCLE1BQU1ZLFFBQVFWLHlEQUFXQSxDQUFDRyxxRUFBZ0JBO0lBQzFDLE1BQU1jLFdBQVdqQix5REFBV0EsQ0FBQ00sOERBQVVBO0lBQ3ZDLE1BQU1ZLGVBQWVsQix5REFBV0EsQ0FBQ08sa0VBQWNBO0lBQy9DWSxRQUFRQyxHQUFHLENBQUNWO0lBQ1pTLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWnpCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWtCLEtBQUtVLFNBQVNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLE1BQU0sQ0FBQyxDQUFDQyxLQUFPQSxHQUFHLENBQUMsRUFBRTtRQUM3RFYsU0FBU2QsaUVBQVFBLENBQUN5QixPQUFPZjtJQUM3QixHQUFHLEVBQUU7SUFFTCxNQUFNZ0IsT0FBTztRQUNULE1BQU1oQixLQUFLVSxTQUFTQyxRQUFRLENBQUNDLEtBQUssQ0FBQyxLQUFLQyxNQUFNLENBQUMsQ0FBQ0MsS0FBT0EsR0FBRyxDQUFDLEVBQUU7UUFDN0QsTUFBTUcsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUlGLFVBQVUsTUFBTTtZQUNoQmIsU0FBU2Isa0VBQVNBLENBQUN3QixPQUFPZjtRQUM5QixPQUFPLENBQ1A7SUFDSjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDb0I7WUFBSUMsV0FBV3JDLG9FQUFpQjs7OEJBQzdCLDhEQUFDb0M7b0JBQUlDLFdBQVdyQyxtRUFBZ0I7O3NDQUM1Qiw4REFBQ29DOzRCQUFJQyxXQUFXckMsZ0VBQWE7c0NBQ3pCLDRFQUFDQyxtREFBS0E7Z0NBQUNvQyxXQUFXckMscUVBQWtCO2dDQUFFc0MsS0FBS3BDLDREQUFJQTtnQ0FBRXFDLEtBQUk7Ozs7Ozs7Ozs7O3NDQUV6RCw4REFBQ0g7NEJBQUlDLFdBQVdyQyx5RUFBc0I7OzhDQUNsQyw4REFBQ29DO29DQUFJQyxXQUFXckMsZ0ZBQTZCOzhDQUFHZSxNQUFNeUIsS0FBSzs7Ozs7OzhDQUMzRCw4REFBQ0o7b0NBQUlDLFdBQVdyQywrRUFBNEI7O3NEQUN4Qyw4REFBQ29DOzRDQUFJQyxXQUFXckMscUZBQWtDO3NEQUFFOzs7Ozs7c0RBQ3BELDhEQUFDb0M7NENBQUlDLFdBQVdyQyxzRkFBbUM7c0RBQUU7Ozs7OztzREFDckQsOERBQUNvQzs0Q0FBSUMsV0FBV3JDLHFGQUFrQztzREFBRTs7Ozs7O3NEQUNwRCw4REFBQ29DOzRDQUFJQyxXQUFXckMscUZBQWtDO3NEQUFFOzs7Ozs7Ozs7Ozs7OENBRXhELDhEQUFDb0M7b0NBQUlDLFdBQVdyQywrRUFBNEI7O3NEQUN4Qyw4REFBQ29DOzRDQUFJQyxXQUFXckMscUZBQWtDOztnREFDN0NlLGtCQUFBQSw0QkFBQUEsTUFBTzBCLFNBQVMsQ0FBQ0MsVUFBVTtnREFBQztnREFBSTNCLGtCQUFBQSw0QkFBQUEsTUFBTzBCLFNBQVMsQ0FBQ0UsUUFBUTs7Ozs7OztzREFFOUQsOERBQUNQOzRDQUFJQyxXQUFXckMsc0ZBQW1DO3NEQUFHZSxrQkFBQUEsNEJBQUFBLE1BQU8wQixTQUFTLENBQUNHLEtBQUssQ0FBQ0MsTUFBTTs7Ozs7O3NEQUNuRiw4REFBQ1Q7NENBQUlDLFdBQVdyQyxxRkFBa0M7c0RBQUdlLGtCQUFBQSw0QkFBQUEsTUFBTzBCLFNBQVMsQ0FBQ0ssVUFBVTs7Ozs7O3NEQUNoRiw4REFBQ1Y7NENBQUlDLFdBQVdyQyxxRkFBa0M7c0RBQUdlLGtCQUFBQSw0QkFBQUEsTUFBTzBCLFNBQVMsQ0FBQ0csS0FBSyxDQUFDRyxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXZHLDhEQUFDWDtvQkFBSUMsV0FBV3JDLGlFQUFjOztzQ0FDMUIsOERBQUNvQzs0QkFBSUMsV0FBV3JDLHNFQUFtQjtzQ0FBR2Usa0JBQUFBLDZCQUFBQSxjQUFBQSxNQUFPaUMsSUFBSSxjQUFYakMsa0NBQUFBLFlBQWFrQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msb0JBQVEsOERBQUN6Qyw0Q0FBR0E7b0NBQVd3QyxPQUFPQTtvQ0FBT0UsT0FBT0Q7bUNBQTFCQTs7Ozs7Ozs7OztzQ0FDakYsOERBQUNmOzRCQUFJQyxXQUFXckMsc0VBQW1CO3NDQUMvQiw0RUFBQ1MsdURBQU1BO2dDQUFDNEMsT0FBTztnQ0FBY0MsU0FBUyxJQUFNdEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdwRCw4REFBQ0k7b0JBQUlDLFdBQVdyQyxpRUFBYzs7c0NBQzFCLDhEQUFDb0M7NEJBQUlDLFdBQVdyQyx3RUFBcUI7c0NBQUU7Ozs7OztzQ0FDdkMsOERBQUNvQzs0QkFBSUMsV0FBV3JDLHVFQUFvQjtzQ0FBR2Usa0JBQUFBLDRCQUFBQSxNQUFPd0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RTtHQS9ETTFDOztRQUdlVCxxREFBV0E7UUFDZEQsa0RBQVNBO1FBQ1RFLHFEQUFXQTtRQUNSQSxxREFBV0E7UUFDUEEscURBQVdBOzs7S0FQOUJRO0FBZ0VOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvc2hhcmVkL2NvbXBvbmVudHMvcGFnZXMvTWVldGluZy9NZWV0aW5nVmlldy9pbmRleC50c3g/MzU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSb29tIGZyb20gXCIvcHVibGljL2ltZy9yb29tLmpwZ1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvaG9va3NcIjtcbmltcG9ydCB7IGdldEV2ZW50LCBqb2luRXZlbnQsIHNlbGVjdEV2ZW50UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc2xpY2UvZXZlbnRTbGljZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYnV0dG9ucy9CdXR0b25cIjtcbmltcG9ydCBUYWcgZnJvbSBcIi4uLy4uLy4uL1RhZ1wiO1xuaW1wb3J0IHsgZ2V0TWVGdWxsLCBzZWxlY3RVc2VyLCBzZWxlY3RVc2VyRnVsbCB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zbGljZS9hdXRoU2xpY2VcIjtcblxuY29uc3QgTWVldGluZ1ZpZXcgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbaWQsIHNldElEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGV2ZW50ID0gdXNlU2VsZWN0b3Ioc2VsZWN0RXZlbnRQcm9wcyk7XG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcbiAgICBjb25zdCB1c2VyRGF0YUZ1bGwgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyRnVsbCk7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhRnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIoKGVsKSA9PiBlbClbMV07XG4gICAgICAgIGRpc3BhdGNoKGdldEV2ZW50KFN0cmluZyhpZCkpKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBqb2luID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIoKGVsKSA9PiBlbClbMV07XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyVG9rZW5cIik7XG4gICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goam9pbkV2ZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIndyYXBwZXJcIl19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJcIl19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaW1nXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlc1tcImltZ19faW1nXCJdfSBzcmM9e1Jvb219IGFsdD1cImNsYXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX21haW5cIl19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhlYWRlcl9fbWFpbl9fdGl0bGVcIl19PntldmVudC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX21haW5fX25hbWVcIl19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX21haW5fX25hbWVfX3RpbWVcIl19PtCS0YDQtdC80Y8g0L/RgNC+0LLQtdC00LXQvdC40Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGVyX19tYWluX19uYW1lX19wbGFjZVwiXX0+0JzQtdGB0YLQviDQv9GA0L7QstC10LTQtdC90LjRjzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX21haW5fX25hbWVfX2RhdGVcIl19PtCU0LDRgtCwINC/0YDQvtCy0LXQtNC10L3QuNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhlYWRlcl9fbWFpbl9fbmFtZV9fZGF0ZVwiXX0+0JrQvtC70LvQuNGH0LXRgdGC0LLQviDQvNC10YHRgjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGVyX19tYWluX19pbmZvXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGVyX19tYWluX19pbmZvX190aW1lXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50Py50aW1ldGFibGUuc3RhcnRfdGltZX0g4oCTIHtldmVudD8udGltZXRhYmxlLmVuZF90aW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX21haW5fX2luZm9fX3BsYWNlXCJdfT57ZXZlbnQ/LnRpbWV0YWJsZS5wbGFjZS5vZmZpY2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhlYWRlcl9fbWFpbl9faW5mb19fZGF0ZVwiXX0+e2V2ZW50Py50aW1ldGFibGUuZXZlbnRfZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGVyX19tYWluX19pbmZvX19kYXRlXCJdfT57ZXZlbnQ/LnRpbWV0YWJsZS5wbGFjZS5tYXhfcGFydGljaXBhbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW5cIl19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbl9fdGFnXCJdfT57ZXZlbnQ/LnRhZ3M/Lm1hcCgodmFsdWUsIGtleSkgPT4gPFRhZyBrZXk9e2tleX0gdmFsdWU9e3ZhbHVlfSBteUtleT17a2V5fSAvPil9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluX19idG5cIl19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD17XCLQl9Cw0L/QuNGB0LDRgtGM0YHRj1wifSBvbkNsaWNrPXsoKSA9PiBqb2luKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbmZvXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImluZm9fX3RpdGxlXCJdfT7QmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQvNC10YDQvtC/0YDQuNGP0YLQuNC4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbmZvX190ZXh0XCJdfT57ZXZlbnQ/LmJvZHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNZWV0aW5nVmlldztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSW1hZ2UiLCJSb29tIiwidXNlUm91dGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldEV2ZW50Iiwiam9pbkV2ZW50Iiwic2VsZWN0RXZlbnRQcm9wcyIsIkJ1dHRvbiIsIlRhZyIsInNlbGVjdFVzZXIiLCJzZWxlY3RVc2VyRnVsbCIsIk1lZXRpbmdWaWV3IiwicHJvcHMiLCJldmVudCIsImlkIiwic2V0SUQiLCJtb2RhbCIsInNldE1vZGFsIiwiZGlzcGF0Y2giLCJyb3V0ZSIsInVzZXJEYXRhIiwidXNlckRhdGFGdWxsIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImZpbHRlciIsImVsIiwiU3RyaW5nIiwiam9pbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInRpdGxlIiwidGltZXRhYmxlIiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwicGxhY2UiLCJvZmZpY2UiLCJldmVudF9kYXRlIiwibWF4X3BhcnRpY2lwYW50IiwidGFncyIsIm1hcCIsInZhbHVlIiwia2V5IiwibXlLZXkiLCJsYWJlbCIsIm9uQ2xpY2siLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/shared/components/pages/Meeting/MeetingView/index.tsx\n"));

/***/ })

});