module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/get-promo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./credentials.json":
/*!**************************!*\
  !*** ./credentials.json ***!
  \**************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"palpitebox-293513\",\"private_key_id\":\"b33ffb31c8a21e047a64eca64a9f7a7c31f9b9fd\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC8ApE1R0PJwrwI\\n4tkb2N2/FrGlnVZzjwCvsYX+/eytvCI8ayogwyXgol7f0BQKdC0GG89uXTpiWw04\\nJ/XvEDscX2Y/HkPh80SRqqCqgUsF03n6qw+Xa96OpbAp4Du0YH//+k3hoLjh3pRM\\n142sKDSFCh5ut57jUTxynxW2wAz3EO2Q6skWt1hDDUu6ua21P+mox0LFCM2I67xc\\n7lECfwPqu6Hzsq1qzNFDuckFJi3c4pU/tInflI2LvXmx+5sxQcWd+W5zmmaYyQtR\\nVkR5gxC3DrxWcIVjcdPx53oFi25LCKRXORleYv2jl9bfpKnKT0UJIRA8sgtRJvW1\\nq+qwWbcxAgMBAAECgf8J0Qdulg5A2HssHb0nNxH2imN35GFSYwt7dklvMZ+7DCA0\\n9lJndJXSgqfX5aeMn+qo1e0HRRslKaz19Nvq/W32jUjjAssiK7wtEhmEq26/XyCy\\nhve4XzZIK16HWb73gWe2D3VF0p5/TsH4DfPXvIXwbFsZW8FN6fh5v104NhMh5Et+\\nkJvfQlRR1LsszuqKKP3oNlv/iGFo3nFALO6a5DlcI2wI8bndzm3Cuh7pA1I8/vUB\\n6YWD9+l1kQxHG9uuWZsKPWYDcBApT7T3MRuyiKHpBofAtLpLMz7sCskg6JmfWZQ7\\nHikYfpd298fR/zj2Fwo4gzNr6iTV9alYbcTI0QECgYEA8cGU/1MbVBqc3XqNPjiJ\\nPbzrKG8CXuYAky3PA3HnarWAppeIowgt9lbmI9+W3Uj/KUqqekAgv/7RfU5esIG3\\n06ar8v/Nd2wS5op629NrhqGGQCbEJe5gEgRwQ1KLH3T0gtwXWIcxKVbiecJ64avm\\nsC2YPKx9XkFbP0i4mBs8ddECgYEAxxZUct8JJ61ZHQ7mYSmJYTfABG3MG3h5zifB\\nycmY9MqytaWWrZy7rPQOvA3ueRe1i8/2WmySjxiBPASuGsKI7GlYPIHKMPJ3jKPE\\n7aSmm8FuLCnfLk47IoobItTyWl8EJGbDbt3NNDPybAX5FONvlKbR1DAmBDIz0w6n\\nFQrdo2ECgYEA7kvJKS9q9ajRzIIbLSSfKsrH5PAfHxmJoYl6z0N8PzOvHwao+UJ7\\nw6B+cwfWdkKYuMPPbHc/kOCE8AXK0iLa5vYX8YtxpPBTZQlE9t/b0jXu1dcgat8f\\ntULIwaNgXN50kXSOUoXX0I7C6A/p/f3qgug+cjf3z2uOnL96rPvTybECgYEAxpIg\\nIv8Q65E8G/6bjHfYfa4UiJZXCWNN4nDHGhRIyohOXV1O/9UfX++BrtIadI9QVaZU\\nanZ2a+GeLRXh7fDwjxS3nIo7+DwvP4itR/Z880eoMsaEw3PmCZpEXKaXH8o7oG8b\\nKL50CUhy2InQmaQLy/HjwcdQc8j65d1si1FuJaECgYBtC9U1EFi+2BPVYbdMCXrm\\nDRPH/c+oTKu/lsBNM0JySe/EzSyamGAE1PRZN95pzLR7HhFHaYPPVcxx/VaKH8wC\\nB4npjDbw/R4OUKXgd2cHDVhCydhc+08EIMdYFJdBzxw2V324yt+6DsAHeG7ciP1e\\njf+MudLwhxVNdTGFxJ+oTQ==\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"palpitebox@palpitebox-293513.iam.gserviceaccount.com\",\"client_id\":\"108874925468857157626\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/palpitebox%40palpitebox-293513.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./pages/api/get-promo.js":
/*!********************************!*\
  !*** ./pages/api/get-promo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ "google-spreadsheet");
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../credentials.json */ "./credentials.json");
var _credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../credentials.json */ "./credentials.json", 1);


const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__["GoogleSpreadsheet"]('10wFaJAFkO8AneyNyDTw527YsT_Rs8kkwrNo72d12hCA');
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    await doc.useServiceAccountAuth(_credentials_json__WEBPACK_IMPORTED_MODULE_1__);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells('A3:B3');
    const activatePromotionCell = sheet.getCell(2, 0);
    const textPromotionCell = sheet.getCell(2, 1);
    console.log(activatePromotionCell.value);
    res.end(JSON.stringify({
      showCoupon: activatePromotionCell.value === "VERDADEIRO",
      message: textPromotionCell.value
    }));
  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ""
    }));
  }
});

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-spreadsheet");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIiJdLCJuYW1lcyI6WyJkb2MiLCJHb29nbGVTcHJlYWRzaGVldCIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNyZWRlbnRpYWxzIiwibG9hZEluZm8iLCJzaGVldCIsInNoZWV0c0J5SW5kZXgiLCJsb2FkQ2VsbHMiLCJhY3RpdmF0ZVByb21vdGlvbkNlbGwiLCJnZXRDZWxsIiwidGV4dFByb21vdGlvbkNlbGwiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0NvdXBvbiIsIm1lc3NhZ2UiLCJlcnIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLEdBQUcsR0FBRyxJQUFJQyxvRUFBSixDQUFzQiw4Q0FBdEIsQ0FBWjtBQUdnQixzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQWtCO0FBRWhDLE1BQUc7QUFDRCxVQUFNSCxHQUFHLENBQUNJLHFCQUFKLENBQTBCQyw4Q0FBMUIsQ0FBTjtBQUNBLFVBQU1MLEdBQUcsQ0FBQ00sUUFBSixFQUFOO0FBR0EsVUFBTUMsS0FBSyxHQUFHUCxHQUFHLENBQUNRLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1ELEtBQUssQ0FBQ0UsU0FBTixDQUFnQixPQUFoQixDQUFOO0FBRUEsVUFBTUMscUJBQXFCLEdBQUdILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBOUI7QUFDQSxVQUFNQyxpQkFBaUIsR0FBR0wsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUExQjtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWUoscUJBQXFCLENBQUNLLEtBQWxDO0FBRUFaLE9BQUcsQ0FBQ2EsR0FBSixDQUFRQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNyQkMsZ0JBQVUsRUFBRVQscUJBQXFCLENBQUNLLEtBQXRCLEtBQThCLFlBRHJCO0FBRXJCSyxhQUFPLEVBQUVSLGlCQUFpQixDQUFDRztBQUZOLEtBQWYsQ0FBUjtBQUlELEdBaEJELENBaUJBLE9BQU1NLEdBQU4sRUFBVTtBQUNSbEIsT0FBRyxDQUFDYSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3JCQyxnQkFBVSxFQUFFLEtBRFM7QUFFckJDLGFBQU8sRUFBRTtBQUZZLEtBQWYsQ0FBUjtBQUlEO0FBQ0QsQ0F6QkQsRTs7Ozs7Ozs7Ozs7QUNQRCwrQyIsImZpbGUiOiJwYWdlcy9hcGkvZ2V0LXByb21vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzXCIpO1xuIiwiIFxyXG5pbXBvcnQge0dvb2dsZVNwcmVhZHNoZWV0fSBmcm9tICdnb29nbGUtc3ByZWFkc2hlZXQnO1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vLi4vY3JlZGVudGlhbHMuanNvbidcclxuXHJcbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldCgnMTB3RmFKQUZrTzhBbmV5TnlEVHc1MjdZc1RfUnM4a2t3ck5vNzJkMTJoQ0EnKVxyXG5cclxuIFxyXG4gZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKT0+e1xyXG5cclxuICB0cnl7XHJcbiAgICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKGNyZWRlbnRpYWxzKVxyXG4gICAgYXdhaXQgZG9jLmxvYWRJbmZvKClcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMl1cclxuICAgIGF3YWl0IHNoZWV0LmxvYWRDZWxscygnQTM6QjMnKVxyXG4gICAgXHJcbiAgICBjb25zdCBhY3RpdmF0ZVByb21vdGlvbkNlbGwgPSBzaGVldC5nZXRDZWxsKDIsIDApIFxyXG4gICAgY29uc3QgdGV4dFByb21vdGlvbkNlbGwgPSBzaGVldC5nZXRDZWxsKDIsIDEpXHJcbiAgICBjb25zb2xlLmxvZyhhY3RpdmF0ZVByb21vdGlvbkNlbGwudmFsdWUpXHJcbiAgICBcclxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBzaG93Q291cG9uOiBhY3RpdmF0ZVByb21vdGlvbkNlbGwudmFsdWU9PT1cIlZFUkRBREVJUk9cIixcclxuICAgICAgbWVzc2FnZTogdGV4dFByb21vdGlvbkNlbGwudmFsdWVcclxuICAgIH0pKVxyXG4gIH1cclxuICBjYXRjaChlcnIpe1xyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHNob3dDb3Vwb246IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICB9KSlcclxuICB9XHJcbiB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=