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
exports.id = "pages/api/get-nft-drop";
exports.ids = ["pages/api/get-nft-drop"];
exports.modules = {

/***/ "@thirdweb-dev/sdk":
/*!************************************!*\
  !*** external "@thirdweb-dev/sdk" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@thirdweb-dev/sdk");

/***/ }),

/***/ "(api)/./pages/api/get-nft-drop.js":
/*!***********************************!*\
  !*** ./pages/api/get-nft-drop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_nftDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/nftDrop */ \"(api)/./utils/nftDrop.js\");\n\nasync function handler(req, res) {\n    const claimed = await _utils_nftDrop__WEBPACK_IMPORTED_MODULE_0__.nftDrop.getAllClaimed();\n    const total = await _utils_nftDrop__WEBPACK_IMPORTED_MODULE_0__.nftDrop.totalSupply();\n    const claimConditions = await _utils_nftDrop__WEBPACK_IMPORTED_MODULE_0__.nftDrop.claimConditions.getAll();\n    const claimedSupply = claimed.length;\n    const totalSupply = total.toNumber();\n    const nftPrice = claimConditions[0].currencyMetadata.displayValue;\n    const claimPhases = claimConditions.map((condition)=>({\n            startTime: condition.startTime.getTime()\n        })\n    );\n    res.status(200).json({\n        claimedSupply,\n        totalSupply,\n        nftPrice,\n        claimPhases\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LW5mdC1kcm9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZDO0FBRTlCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUMsT0FBTyxHQUFHLE1BQU1KLGlFQUFxQixFQUFFO0lBQzdDLE1BQU1NLEtBQUssR0FBRyxNQUFNTiwrREFBbUIsRUFBRTtJQUN6QyxNQUFNUSxlQUFlLEdBQUcsTUFBTVIsMEVBQThCLEVBQUU7SUFFOUQsTUFBTVUsYUFBYSxHQUFHTixPQUFPLENBQUNPLE1BQU07SUFDcEMsTUFBTUosV0FBVyxHQUFHRCxLQUFLLENBQUNNLFFBQVEsRUFBRTtJQUNwQyxNQUFNQyxRQUFRLEdBQUdMLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sZ0JBQWdCLENBQUNDLFlBQVk7SUFDakUsTUFBTUMsV0FBVyxHQUFHUixlQUFlLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxTQUFTLEdBQUssQ0FBQztZQUNwREMsU0FBUyxFQUFFRCxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsT0FBTyxFQUFFO1NBQzNDLENBQUM7SUFBQSxDQUFDO0lBRUhqQixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNqQlosYUFBYTtRQUNiSCxXQUFXO1FBQ1hNLFFBQVE7UUFDUkcsV0FBVztLQUNkLENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1kcm9wLXR1dG9yaWFsLy4vcGFnZXMvYXBpL2dldC1uZnQtZHJvcC5qcz9iMjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5mdERyb3AgfSBmcm9tICcuLi8uLi91dGlscy9uZnREcm9wJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgY2xhaW1lZCA9IGF3YWl0IG5mdERyb3AuZ2V0QWxsQ2xhaW1lZCgpXHJcbiAgICBjb25zdCB0b3RhbCA9IGF3YWl0IG5mdERyb3AudG90YWxTdXBwbHkoKVxyXG4gICAgY29uc3QgY2xhaW1Db25kaXRpb25zID0gYXdhaXQgbmZ0RHJvcC5jbGFpbUNvbmRpdGlvbnMuZ2V0QWxsKClcclxuXHJcbiAgICBjb25zdCBjbGFpbWVkU3VwcGx5ID0gY2xhaW1lZC5sZW5ndGhcclxuICAgIGNvbnN0IHRvdGFsU3VwcGx5ID0gdG90YWwudG9OdW1iZXIoKVxyXG4gICAgY29uc3QgbmZ0UHJpY2UgPSBjbGFpbUNvbmRpdGlvbnNbMF0uY3VycmVuY3lNZXRhZGF0YS5kaXNwbGF5VmFsdWVcclxuICAgIGNvbnN0IGNsYWltUGhhc2VzID0gY2xhaW1Db25kaXRpb25zLm1hcCgoY29uZGl0aW9uKSA9PiAoe1xyXG4gICAgICAgIHN0YXJ0VGltZTogY29uZGl0aW9uLnN0YXJ0VGltZS5nZXRUaW1lKCksXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgY2xhaW1lZFN1cHBseSxcclxuICAgICAgICB0b3RhbFN1cHBseSxcclxuICAgICAgICBuZnRQcmljZSxcclxuICAgICAgICBjbGFpbVBoYXNlcyxcclxuICAgIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbIm5mdERyb3AiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xhaW1lZCIsImdldEFsbENsYWltZWQiLCJ0b3RhbCIsInRvdGFsU3VwcGx5IiwiY2xhaW1Db25kaXRpb25zIiwiZ2V0QWxsIiwiY2xhaW1lZFN1cHBseSIsImxlbmd0aCIsInRvTnVtYmVyIiwibmZ0UHJpY2UiLCJjdXJyZW5jeU1ldGFkYXRhIiwiZGlzcGxheVZhbHVlIiwiY2xhaW1QaGFzZXMiLCJtYXAiLCJjb25kaXRpb24iLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-nft-drop.js\n");

/***/ }),

/***/ "(api)/./utils/nftDrop.js":
/*!**************************!*\
  !*** ./utils/nftDrop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nftDrop\": () => (/* binding */ nftDrop)\n/* harmony export */ });\n/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/sdk */ \"@thirdweb-dev/sdk\");\n/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sdk = new _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__.ThirdwebSDK(\"goerli\");\nconst nftDrop = sdk.getNFTDrop(\"0x547205cC5AF69E042d25458A40e470557104e77a\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9uZnREcm9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxHQUFHLEdBQUcsSUFBSUQsMERBQVcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTUUsT0FBTyxHQUFHRCxHQUFHLENBQUNFLFVBQVUsQ0FBQ0MsNENBQXdDLENBQUM7QUFFdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtZHJvcC10dXRvcmlhbC8uL3V0aWxzL25mdERyb3AuanM/ZmZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gJ0B0aGlyZHdlYi1kZXYvc2RrJ1xyXG5cclxuY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKCdnb2VybGknKVxyXG5jb25zdCBuZnREcm9wID0gc2RrLmdldE5GVERyb3AocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkZUX0RST1BfQUREUkVTUylcclxuXHJcbmV4cG9ydCB7IG5mdERyb3AgfVxyXG4iXSwibmFtZXMiOlsiVGhpcmR3ZWJTREsiLCJzZGsiLCJuZnREcm9wIiwiZ2V0TkZURHJvcCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ORlRfRFJPUF9BRERSRVNTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/nftDrop.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-nft-drop.js"));
module.exports = __webpack_exports__;

})();