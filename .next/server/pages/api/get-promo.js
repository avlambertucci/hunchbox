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
    const textPromotionCell = sheet.getCell(2, 1); // console.log(activatePromotionCell.value)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIiJdLCJuYW1lcyI6WyJkb2MiLCJHb29nbGVTcHJlYWRzaGVldCIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNyZWRlbnRpYWxzIiwibG9hZEluZm8iLCJzaGVldCIsInNoZWV0c0J5SW5kZXgiLCJsb2FkQ2VsbHMiLCJhY3RpdmF0ZVByb21vdGlvbkNlbGwiLCJnZXRDZWxsIiwidGV4dFByb21vdGlvbkNlbGwiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0NvdXBvbiIsInZhbHVlIiwibWVzc2FnZSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLG9FQUFKLENBQXNCLDhDQUF0QixDQUFaO0FBR2dCLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBa0I7QUFFaEMsTUFBRztBQUNELFVBQU1ILEdBQUcsQ0FBQ0kscUJBQUosQ0FBMEJDLDhDQUExQixDQUFOO0FBQ0EsVUFBTUwsR0FBRyxDQUFDTSxRQUFKLEVBQU47QUFHQSxVQUFNQyxLQUFLLEdBQUdQLEdBQUcsQ0FBQ1EsYUFBSixDQUFrQixDQUFsQixDQUFkO0FBQ0EsVUFBTUQsS0FBSyxDQUFDRSxTQUFOLENBQWdCLE9BQWhCLENBQU47QUFFQSxVQUFNQyxxQkFBcUIsR0FBR0gsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUE5QjtBQUNBLFVBQU1DLGlCQUFpQixHQUFHTCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBQTFCLENBVEMsQ0FVRDs7QUFFQVIsT0FBRyxDQUFDVSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3JCQyxnQkFBVSxFQUFFTixxQkFBcUIsQ0FBQ08sS0FBdEIsS0FBOEIsWUFEckI7QUFFckJDLGFBQU8sRUFBRU4saUJBQWlCLENBQUNLO0FBRk4sS0FBZixDQUFSO0FBSUQsR0FoQkQsQ0FpQkEsT0FBTUUsR0FBTixFQUFVO0FBQ1JoQixPQUFHLENBQUNVLEdBQUosQ0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDckJDLGdCQUFVLEVBQUUsS0FEUztBQUVyQkUsYUFBTyxFQUFFO0FBRlksS0FBZixDQUFSO0FBSUQ7QUFDRCxDQXpCRCxFOzs7Ozs7Ozs7OztBQ1BELCtDIiwiZmlsZSI6InBhZ2VzL2FwaS9nZXQtcHJvbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9nZXQtcHJvbW8uanNcIik7XG4iLCIgXHJcbmltcG9ydCB7R29vZ2xlU3ByZWFkc2hlZXR9IGZyb20gJ2dvb2dsZS1zcHJlYWRzaGVldCc7XHJcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuLi8uLi9jcmVkZW50aWFscy5qc29uJ1xyXG5cclxuY29uc3QgZG9jID0gbmV3IEdvb2dsZVNwcmVhZHNoZWV0KCcxMHdGYUpBRmtPOEFuZXlOeURUdzUyN1lzVF9Sczhra3dyTm83MmQxMmhDQScpXHJcblxyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpPT57XHJcblxyXG4gIHRyeXtcclxuICAgIGF3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoY3JlZGVudGlhbHMpXHJcbiAgICBhd2FpdCBkb2MubG9hZEluZm8oKVxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsyXVxyXG4gICAgYXdhaXQgc2hlZXQubG9hZENlbGxzKCdBMzpCMycpXHJcbiAgICBcclxuICAgIGNvbnN0IGFjdGl2YXRlUHJvbW90aW9uQ2VsbCA9IHNoZWV0LmdldENlbGwoMiwgMCkgXHJcbiAgICBjb25zdCB0ZXh0UHJvbW90aW9uQ2VsbCA9IHNoZWV0LmdldENlbGwoMiwgMSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2YXRlUHJvbW90aW9uQ2VsbC52YWx1ZSlcclxuICAgIFxyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHNob3dDb3Vwb246IGFjdGl2YXRlUHJvbW90aW9uQ2VsbC52YWx1ZT09PVwiVkVSREFERUlST1wiLFxyXG4gICAgICBtZXNzYWdlOiB0ZXh0UHJvbW90aW9uQ2VsbC52YWx1ZVxyXG4gICAgfSkpXHJcbiAgfVxyXG4gIGNhdGNoKGVycil7XHJcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgc2hvd0NvdXBvbjogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgIH0pKVxyXG4gIH1cclxuIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnb29nbGUtc3ByZWFkc2hlZXRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==