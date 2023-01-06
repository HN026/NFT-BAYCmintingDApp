"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/check-allowlist";
exports.ids = ["pages/api/check-allowlist"];
exports.modules = {

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ "(api)/./pages/api/check-allowlist.js":
/*!**************************************!*\
  !*** ./pages/api/check-allowlist.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/airtable */ \"(api)/./utils/airtable.js\");\n\nasync function handler(req, res) {\n    const { address  } = JSON.parse(req.body);\n    const records = await _utils_airtable__WEBPACK_IMPORTED_MODULE_0__.table.select({\n        fields: [\n            \"Address\",\n            \"Minted\"\n        ],\n        filterByFormula: `{Address} = '${address}'`\n    }).all();\n    const inAllowlist = records.length > 0;\n    res.status(200).json({\n        inAllowlist\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2stYWxsb3dsaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBRTdCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxFQUFFQyxPQUFPLEdBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO0lBRXhDLE1BQU1DLE9BQU8sR0FBRyxNQUFNUix5REFDWCxDQUFDO1FBQ0pVLE1BQU0sRUFBRTtZQUFDLFNBQVM7WUFBRSxRQUFRO1NBQUM7UUFDN0JDLGVBQWUsRUFBRSxDQUFDLGFBQWEsRUFBRVAsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUM5QyxDQUFDLENBQ0RRLEdBQUcsRUFBRTtJQUVWLE1BQU1DLFdBQVcsR0FBR0wsT0FBTyxDQUFDTSxNQUFNLEdBQUcsQ0FBQztJQUV0Q1gsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFSCxXQUFXO0tBQUUsQ0FBQztDQUN4QyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1kcm9wLXR1dG9yaWFsLy4vcGFnZXMvYXBpL2NoZWNrLWFsbG93bGlzdC5qcz84NjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhYmxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWlydGFibGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IEpTT04ucGFyc2UocmVxLmJvZHkpXHJcblxyXG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHRhYmxlXHJcbiAgICAgICAgLnNlbGVjdCh7XHJcbiAgICAgICAgICAgIGZpZWxkczogWydBZGRyZXNzJywgJ01pbnRlZCddLFxyXG4gICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGB7QWRkcmVzc30gPSAnJHthZGRyZXNzfSdgLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFsbCgpXHJcblxyXG4gICAgY29uc3QgaW5BbGxvd2xpc3QgPSByZWNvcmRzLmxlbmd0aCA+IDBcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGluQWxsb3dsaXN0IH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbInRhYmxlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFkZHJlc3MiLCJKU09OIiwicGFyc2UiLCJib2R5IiwicmVjb3JkcyIsInNlbGVjdCIsImZpZWxkcyIsImZpbHRlckJ5Rm9ybXVsYSIsImFsbCIsImluQWxsb3dsaXN0IiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/check-allowlist.js\n");

/***/ }),

/***/ "(api)/./utils/airtable.js":
/*!***************************!*\
  !*** ./utils/airtable.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\n/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable */ \"airtable\");\n/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable__WEBPACK_IMPORTED_MODULE_0__);\n\nairtable__WEBPACK_IMPORTED_MODULE_0___default().configure({\n    apiKey: process.env.AIRTABLE_API_KEY\n});\nconst base = airtable__WEBPACK_IMPORTED_MODULE_0___default().base(process.env.AIRTABLE_BASE_ID);\nconst table = base(process.env.AIRTABLE_TABLE_NAME);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9haXJ0YWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0JBLHlEQUFrQixDQUFDO0lBQ2ZFLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtDQUN2QyxDQUFDO0FBRUYsTUFBTUMsSUFBSSxHQUFHTixvREFBYSxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csZ0JBQWdCLENBQUM7QUFDeEQsTUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxtQkFBbUIsQ0FBQztBQUVuQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1kcm9wLXR1dG9yaWFsLy4vdXRpbHMvYWlydGFibGUuanM/OGJmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWlydGFibGUgZnJvbSAnYWlydGFibGUnXHJcblxyXG5BaXJ0YWJsZS5jb25maWd1cmUoe1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZLFxyXG59KVxyXG5cclxuY29uc3QgYmFzZSA9IEFpcnRhYmxlLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9JRClcclxuY29uc3QgdGFibGUgPSBiYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX1RBQkxFX05BTUUpXHJcblxyXG5leHBvcnQgeyB0YWJsZSB9XHJcbiJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsImNvbmZpZ3VyZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBSVJUQUJMRV9BUElfS0VZIiwiYmFzZSIsIkFJUlRBQkxFX0JBU0VfSUQiLCJ0YWJsZSIsIkFJUlRBQkxFX1RBQkxFX05BTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/airtable.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/check-allowlist.js"));
module.exports = __webpack_exports__;

})();