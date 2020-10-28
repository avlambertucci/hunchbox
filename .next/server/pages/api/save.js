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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/save.js");
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

/***/ "./pages/api/save.js":
/*!***************************!*\
  !*** ./pages/api/save.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ "google-spreadsheet");
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../credentials.json */ "./credentials.json");
var _credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../credentials.json */ "./credentials.json", 1);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__["GoogleSpreadsheet"]('10wFaJAFkO8AneyNyDTw527YsT_Rs8kkwrNo72d12hCA');
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    await doc.useServiceAccountAuth(_credentials_json__WEBPACK_IMPORTED_MODULE_1__);
    await doc.loadInfo();
    const data = JSON.parse(req.body);
    const sheet = doc.sheetsByIndex[1];
    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');
    const activatePromotionCell = sheetConfig.getCell(2, 0);
    const textPromotionCell = sheetConfig.getCell(2, 1);
    let Cupom = "";
    let Promo = "";
    let FillDate = "";

    const genCupom = () => {
      const code = parseInt(moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
      return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);
    };

    if (activatePromotionCell.value === "VERDADEIRO") {
      //todo gerar cupom
      Cupom = genCupom();
      Promo = textPromotionCell.value, FillDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD/MM/YYYY, HH:mm:ss');
    }

    const payload = await sheet.addRow({
      Name: data.Name,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom,
      Promo,
      "Fill Date": FillDate,
      Rate: 5
    });
    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.end(err);
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

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NhdmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiXSwibmFtZXMiOlsiZG9jIiwiR29vZ2xlU3ByZWFkc2hlZXQiLCJyZXEiLCJyZXMiLCJ1c2VTZXJ2aWNlQWNjb3VudEF1dGgiLCJjcmVkZW50aWFscyIsImxvYWRJbmZvIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJzaGVldCIsInNoZWV0c0J5SW5kZXgiLCJzaGVldENvbmZpZyIsImxvYWRDZWxscyIsImFjdGl2YXRlUHJvbW90aW9uQ2VsbCIsImdldENlbGwiLCJ0ZXh0UHJvbW90aW9uQ2VsbCIsIkN1cG9tIiwiUHJvbW8iLCJGaWxsRGF0ZSIsImdlbkN1cG9tIiwiY29kZSIsInBhcnNlSW50IiwibW9tZW50IiwiZm9ybWF0IiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInZhbHVlIiwicGF5bG9hZCIsImFkZFJvdyIsIk5hbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiUmF0ZSIsInNlbmQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FB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QVI7QUFDRDtBQUNGLENBaERELEU7Ozs7Ozs7Ozs7O0FDTEEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL3NhdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9zYXZlLmpzXCIpO1xuIiwiaW1wb3J0IHtHb29nbGVTcHJlYWRzaGVldH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0JztcclxuaW1wb3J0IGNyZWRlbnRpYWxzIGZyb20gJy4uLy4uL2NyZWRlbnRpYWxzLmpzb24nXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuY29uc3QgZG9jID0gbmV3IEdvb2dsZVNwcmVhZHNoZWV0KCcxMHdGYUpBRmtPOEFuZXlOeURUdzUyN1lzVF9Sczhra3dyTm83MmQxMmhDQScpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpPT57XHJcblxyXG4gIHRyeXtcclxuICAgIGF3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoY3JlZGVudGlhbHMpXHJcbiAgICBhd2FpdCBkb2MubG9hZEluZm8oKVxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gKEpTT04ucGFyc2UocmVxLmJvZHkpKTtcclxuICAgIFxyXG4gICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsxXVxyXG5cclxuICAgIGNvbnN0IHNoZWV0Q29uZmlnID0gZG9jLnNoZWV0c0J5SW5kZXhbMl1cclxuICAgIGF3YWl0IHNoZWV0Q29uZmlnLmxvYWRDZWxscygnQTM6QjMnKVxyXG4gICAgY29uc3QgYWN0aXZhdGVQcm9tb3Rpb25DZWxsID0gc2hlZXRDb25maWcuZ2V0Q2VsbCgyLCAwKSBcclxuICAgIGNvbnN0IHRleHRQcm9tb3Rpb25DZWxsID0gc2hlZXRDb25maWcuZ2V0Q2VsbCgyLCAxKVxyXG5cclxuICAgIGxldCBDdXBvbSA9IFwiXCJcclxuICAgIGxldCBQcm9tbyA9IFwiXCJcclxuICAgIGxldCBGaWxsRGF0ZSA9IFwiXCJcclxuICAgIFxyXG4gICAgY29uc3QgZ2VuQ3Vwb20gPSAoKT0+e1xyXG4gICAgICBjb25zdCBjb2RlID0gcGFyc2VJbnQobW9tZW50KCkuZm9ybWF0KCdZWU1NRERISG1tc3NTU1MnKSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBjb2RlLnN1YnN0cigwLDQpICsgJy0nICsgY29kZS5zdWJzdHIoNCw0KSArICctJyArIGNvZGUuc3Vic3RyKDgsNClcclxuICAgIH1cclxuXHJcbiAgICBpZihhY3RpdmF0ZVByb21vdGlvbkNlbGwudmFsdWU9PT1cIlZFUkRBREVJUk9cIil7XHJcbiAgICAgIC8vdG9kbyBnZXJhciBjdXBvbVxyXG4gICAgICBDdXBvbSA9IGdlbkN1cG9tKClcclxuICAgICAgUHJvbW8gPSB0ZXh0UHJvbW90aW9uQ2VsbC52YWx1ZSxcclxuICAgICAgRmlsbERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ0REL01NL1lZWVksIEhIOm1tOnNzJyk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgc2hlZXQuYWRkUm93KHsgXHJcbiAgICAgIE5hbWU6IGRhdGEuTmFtZSxcclxuICAgICAgRW1haWw6IGRhdGEuRW1haWwsXHJcbiAgICAgIFdoYXRzYXBwOiBkYXRhLldoYXRzYXBwLFxyXG4gICAgICBDdXBvbSxcclxuICAgICAgUHJvbW8sXHJcbiAgICAgIFwiRmlsbCBEYXRlXCI6IEZpbGxEYXRlLFxyXG4gICAgICBSYXRlOiA1XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIHJlcy5zZW5kKHJlcS5ib2R5KVxyXG4gIH1cclxuICBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgcmVzLmVuZChlcnIpXHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9