/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/webhook/index.ts":
/*!****************************************!*\
  !*** ./src/functions/webhook/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _libs_notificaitonFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/notificaitonFactory */ \"./src/libs/notificaitonFactory.ts\");\n/* harmony import */ var _libs_notificationSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/notificationSystem */ \"./src/libs/notificationSystem.ts\");\n/* harmony import */ var _libs_storageSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/storageSystem */ \"./src/libs/storageSystem.ts\");\n/* harmony import */ var _helpers_responseHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/responseHelper */ \"./src/helpers/responseHelper.ts\");\n\n\n\n\n\n\n\nconst handler = async (event) => {\n    const storageService = new _libs_storageSystem__WEBPACK_IMPORTED_MODULE_5__.default();\n    storageService.save(event.body);\n    const notificationService = new _libs_notificationSystem__WEBPACK_IMPORTED_MODULE_4__.default();\n    notificationService.publish(_libs_notificaitonFactory__WEBPACK_IMPORTED_MODULE_3__.default.getNotification(event.body['event-data'].event));\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(_helpers_responseHelper__WEBPACK_IMPORTED_MODULE_6__.default.success(null));\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3dlYmhvb2svaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlZXZlLy4vc3JjL2Z1bmN0aW9ucy93ZWJob29rL2luZGV4LnRzP2RkYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcblxuaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnQGxpYnMvYXBpR2F0ZXdheSc7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tICdAbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tICdAbGlicy9sYW1iZGEnO1xuXG5pbXBvcnQgbWFpbEd1blNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEvbWFpbEd1blNjaGVtYSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uRmFjdG9yeSBmcm9tICcuLi8uLi9saWJzL25vdGlmaWNhaXRvbkZhY3RvcnknO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lOb3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCBOb3RpZmljYXRpb25TeXN0ZW0gZnJvbSAnLi4vLi4vbGlicy9ub3RpZmljYXRpb25TeXN0ZW0nO1xuaW1wb3J0IHsgSVN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9JU3RvcmFnZVNlcnZpY2UnO1xuaW1wb3J0IFN0b3JhZ2VTeXN0ZW0gZnJvbSAnLi4vLi4vbGlicy9zdG9yYWdlU3lzdGVtJztcbmltcG9ydCBSZXNwb25zZUhlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL3Jlc3BvbnNlSGVscGVyJztcblxuXG5jb25zdCBoYW5kbGVyOiBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PHR5cGVvZiBtYWlsR3VuU2NoZW1hPiA9IGFzeW5jIChldmVudCkgPT4ge1xuXG4gIC8vIFZhbGlkYXRpb25cbiAgLy8gaWYgKHByb2Nlc3MuZW52LkFQSV9LRVkgPT0gXCJcIil7XG4gIC8vICAgY29uc29sZS5sb2coJ0ludmFsaWQgQVBJIEtFWScpO1xuICAvLyAgIHJldHVybjtcbiAgLy8gfVxuICAvLyBjb25zdCB2YWx1ZSA9IGV2ZW50LmJvZHlbJ2V2ZW50LWRhdGEnXS50aW1lc3RhbXAgKyBldmVudC5ib2R5LnNpZ25hdHVyZS50b2tlbjtcbiAgLy8gY29uc3QgaGFzaCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGEyNTYnLFxuICAvLyAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUElfS0VZKVxuICAvLyAgICAgICAgICAgICAgICAgIC51cGRhdGUodmFsdWUpXG4gIC8vICAgICAgICAgICAgICAgICAgLmRpZ2VzdCgnaGV4Jyk7XG5cbiAgLy8gaWYgKGhhc2ggIT09IGV2ZW50LmJvZHkuc2lnbmF0dXJlLnRva2VuKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ0ludmFsaWQgc2lnbmF0dXJlJyk7XG4gIC8vICAgcmV0dXJuO1xuICAvLyB9XG5cbiAgLy8gU3RvcmUgUmF3IFdlYmhvb2tcbiAgY29uc3Qgc3RvcmFnZVNlcnZpY2U6IElTdG9yYWdlU2VydmljZSA9IG5ldyBTdG9yYWdlU3lzdGVtKCk7XG4gIHN0b3JhZ2VTZXJ2aWNlLnNhdmUoZXZlbnQuYm9keSk7XG5cbiAgLy8gUHVibGlzaCB0byBTTlNcbiAgY29uc3Qgbm90aWZpY2F0aW9uU2VydmljZTogSU5vdGlmaWNhdGlvblNlcnZpY2UgPSBuZXcgTm90aWZpY2F0aW9uU3lzdGVtKCk7XG4gIG5vdGlmaWNhdGlvblNlcnZpY2UucHVibGlzaChOb3RpZmljYXRpb25GYWN0b3J5LmdldE5vdGlmaWNhdGlvbihldmVudC5ib2R5WydldmVudC1kYXRhJ10uZXZlbnQpKTtcblxuICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKFJlc3BvbnNlSGVscGVyLnN1Y2Nlc3MobnVsbCkpO1xufVxuXG5leHBvcnQgY29uc3QgbWFpbiA9IG1pZGR5ZnkoaGFuZGxlcik7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBbUJBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/webhook/index.ts\n");

/***/ }),

/***/ "./src/helpers/responseHelper.ts":
/*!***************************************!*\
  !*** ./src/helpers/responseHelper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResponseHelper)\n/* harmony export */ });\nclass ResponseHelper {\n    static general(success, data, message = \"Success\") {\n        return { success, data, message };\n    }\n    static success(data, message = \"Success\") {\n        return this.general(true, data, message);\n    }\n    static error(data, message = \"Error\") {\n        return this.general(false, data, message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9yZXNwb25zZUhlbHBlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VldmUvLi9zcmMvaGVscGVycy9yZXNwb25zZUhlbHBlci50cz8xNmI2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZUhlbHBlciB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmFsKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSwgbWVzc2FnZSA6IHN0cmluZyA9XCJTdWNjZXNzXCIpe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzLCBkYXRhLCBtZXNzYWdlIH07XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc3VjY2VzcyhkYXRhOiBhbnksIG1lc3NhZ2UgOiBzdHJpbmcgPVwiU3VjY2Vzc1wiKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhbCh0cnVlLCBkYXRhLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXJyb3IoZGF0YTogYW55LCBtZXNzYWdlIDogc3RyaW5nID1cIkVycm9yXCIpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmFsKGZhbHNlLCBkYXRhLCBtZXNzYWdlKTtcbiAgICB9XG5cbn0iXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/responseHelper.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjZWV2ZS8uL3NyYy9saWJzL2FwaUdhdGV3YXkudHM/NjI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQsIEhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiXG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsICdib2R5Jz4gJiB7IGJvZHk6IEZyb21TY2hlbWE8Uz4gfVxuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IEhhbmRsZXI8VmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sIEFQSUdhdGV3YXlQcm94eVJlc3VsdD5cblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChyZXNwb25zZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlZXZlLy4vc3JjL2xpYnMvbGFtYmRhLnRzPzZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./src/libs/notificaitonFactory.ts":
/*!*****************************************!*\
  !*** ./src/libs/notificaitonFactory.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotificationFactory)\n/* harmony export */ });\nclass NotificationFactory {\n    static createObject(event) {\n        return {\n            Provider: \"Mailgun\",\n            timestamp: (new Date).getTime(),\n            type: event\n        };\n    }\n    static getNotification(event) {\n        switch (event) {\n            case 'accepted':\n                return this.createObject(event);\n                break;\n            case 'rejected':\n                return this.createObject(event);\n                break;\n            case 'delivered':\n                return this.createObject(event);\n                break;\n            case 'failed':\n                return this.createObject(event);\n                break;\n            case 'opened':\n                return this.createObject(event);\n                break;\n            case 'clicked':\n                return this.createObject(event);\n                break;\n            case 'unsubscribed':\n                return this.createObject(event);\n                break;\n            case 'complained':\n                return this.createObject(event);\n                break;\n            case 'stored':\n                return this.createObject(event);\n                break;\n            case 'list_member_uploaded':\n                return this.createObject(event);\n                break;\n            case 'list_member_upload_error':\n                return this.createObject(event);\n                break;\n            case 'list_uploaded':\n                return this.createObject(event);\n                break;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9ub3RpZmljYWl0b25GYWN0b3J5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjZWV2ZS8uL3NyYy9saWJzL25vdGlmaWNhaXRvbkZhY3RvcnkudHM/ZjAzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTm90aWZpY2F0aW9uRGF0YSB9IGZyb20gJy4uL2ludGVyZmFjZXMvSU5vdGlmaWNhdGlvbkRhdGEnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbkZhY3Rvcnkge1xuICAgIHN0YXRpYyBjcmVhdGVPYmplY3QoZXZlbnQ6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiA8SU5vdGlmaWNhdGlvbkRhdGE+e1xuICAgICAgICAgICAgUHJvdmlkZXI6IFwiTWFpbGd1blwiLFxuICAgICAgICAgICAgdGltZXN0YW1wOiAobmV3IERhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHR5cGU6IGV2ZW50XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vdGlmaWNhdGlvbihldmVudDogc3RyaW5nKTogSU5vdGlmaWNhdGlvbkRhdGEge1xuICAgICAgICBzd2l0Y2goZXZlbnQpe1xuICAgICAgICAgICAgY2FzZSAnYWNjZXB0ZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU9iamVjdChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZWplY3RlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlT2JqZWN0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbGl2ZXJlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlT2JqZWN0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlT2JqZWN0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29wZW5lZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlT2JqZWN0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NsaWNrZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU9iamVjdChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1bnN1YnNjcmliZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU9iamVjdChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb21wbGFpbmVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVPYmplY3QoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RvcmVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVPYmplY3QoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGlzdF9tZW1iZXJfdXBsb2FkZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU9iamVjdChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsaXN0X21lbWJlcl91cGxvYWRfZXJyb3InOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU9iamVjdChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsaXN0X3VwbG9hZGVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVPYmplY3QoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/notificaitonFactory.ts\n");

/***/ }),

/***/ "./src/libs/notificationSystem.ts":
/*!****************************************!*\
  !*** ./src/libs/notificationSystem.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotificationSystem)\n/* harmony export */ });\nclass NotificationSystem {\n    publish(data) {\n        console.log('Notification Data', data);\n        return true;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9ub3RpZmljYXRpb25TeXN0ZW0udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlZXZlLy4vc3JjL2xpYnMvbm90aWZpY2F0aW9uU3lzdGVtLnRzPzUwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lOb3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IElOb3RpZmljYXRpb25EYXRhIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JTm90aWZpY2F0aW9uRGF0YSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uU3lzdGVtIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG4gICAgcHVibGlzaChkYXRhOiBJTm90aWZpY2F0aW9uRGF0YSkgOiBib29sZWFuIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vdGlmaWNhdGlvbiBEYXRhJywgZGF0YSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuXG59Il0sIm1hcHBpbmdzIjoiOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/notificationSystem.ts\n");

/***/ }),

/***/ "./src/libs/storageSystem.ts":
/*!***********************************!*\
  !*** ./src/libs/storageSystem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StorageSystem)\n/* harmony export */ });\nclass StorageSystem {\n    save(data) {\n        console.log('RawWebhookData', data);\n        return true;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9zdG9yYWdlU3lzdGVtLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjZWV2ZS8uL3NyYy9saWJzL3N0b3JhZ2VTeXN0ZW0udHM/MWY3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUmF3V2ViSG9va0RhdGEgfSBmcm9tICdzcmMvaW50ZXJmYWNlcy9JUmF3V2ViSG9va0RhdGEnO1xuaW1wb3J0IHsgSVN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JU3RvcmFnZVNlcnZpY2UnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2VTeXN0ZW0gaW1wbGVtZW50cyBJU3RvcmFnZVNlcnZpY2Uge1xuXG4gICAgc2F2ZShkYXRhOiBJUmF3V2ViSG9va0RhdGEpOiBib29sZWFuIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jhd1dlYmhvb2tEYXRhJywgZGF0YSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuXG59Il0sIm1hcHBpbmdzIjoiOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/storageSystem.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/webhook/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;