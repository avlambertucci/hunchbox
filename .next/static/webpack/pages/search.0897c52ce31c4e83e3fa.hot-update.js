webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\FrontEndTrack\\hunchbox\\pages\\search.js",
    _s = $RefreshSig$();


function Search() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Name: 'ssaf',
    Email: 'asf',
    Whatsapp: 'asf'
  }),
      form = _useState[0],
      useForm = _useState[1];

  var onChangeF = function onChangeF(evt) {
    console.log(evt);
  };

  var save = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/save', {
                method: "POST",
                body: JSON.stringify(form)
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function save() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "container mx-auto text-center py-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      className: "font-bold text-3xl",
      children: "Suggestions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: "",
      children: " Please give a hunch and tell us how can we be better!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "grid justify-center py-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "E-mail:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Whatsapp:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Suggestion:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: " shadow-lg rounded py-3 my-6 bg-blue-400 hover:bg-blue-500 duration-300",
        onClick: save,
        children: "Salvar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("pre", {
        children: JSON.stringify(form, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(Search, "nWoPEvrizMV4ibBKEyHGjOFHAI0=");

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwiTmFtZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmb3JtIiwidXNlRm9ybSIsIm9uQ2hhbmdlRiIsImV2dCIsImNvbnNvbGUiLCJsb2ciLCJzYXZlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBRVBDLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxNQUR5QjtBQUUvQkMsU0FBSyxFQUFFLEtBRndCO0FBRy9CQyxZQUFRLEVBQUU7QUFIcUIsR0FBRCxDQUZEO0FBQUEsTUFFeEJDLElBRndCO0FBQUEsTUFFbEJDLE9BRmtCOztBQU8vQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFELEVBQU87QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxJQUFJO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVjQyxLQUFLLENBQUMsV0FBRCxFQUFhO0FBQ3ZDQyxzQkFBTSxFQUFFLE1BRCtCO0FBRXZDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsSUFBZjtBQUZpQyxlQUFiLENBRm5COztBQUFBO0FBRUhZLHNCQUZHO0FBQUE7QUFBQSxxQkFNVUEsUUFBUSxDQUFDQyxJQUFULEVBTlY7O0FBQUE7QUFNSEMsa0JBTkc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNUVixxQkFBTyxDQUFDQyxHQUFSOztBQVRTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpDLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFjQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFHLGVBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLDhCQUNFO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsMkNBQTdCO0FBQXlFLGdCQUFRLEVBQUVKLFNBQVM7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTyxpQkFBUyxFQUFDLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQywyQ0FBN0I7QUFBeUUsZ0JBQVEsRUFBRUEsU0FBUztBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFPLGlCQUFTLEVBQUMsaUJBQWpCO0FBQW1DLGVBQU8sRUFBQyxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLDJDQUE3QjtBQUF5RSxnQkFBUSxFQUFFQSxTQUFTO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBU0U7QUFBUSxpQkFBUyxFQUFDLHlFQUFsQjtBQUE0RixlQUFPLEVBQUVJLElBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFVRTtBQUFBLGtCQUFNSSxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0E1Q3VCTCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4wODk3YzUyY2UzMWM0ZTgzZTNmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cclxuICBjb25zdCBbZm9ybSwgdXNlRm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBOYW1lOiAnc3NhZicsXHJcbiAgICBFbWFpbDogJ2FzZicsXHJcbiAgICBXaGF0c2FwcDogJ2FzZicsXHJcbiAgfSlcclxuICBjb25zdCBvbkNoYW5nZUYgPSAoZXZ0KT0+e1xyXG4gICAgY29uc29sZS5sb2coZXZ0KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZSA9IGFzeW5jKCk9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlJyx7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyIHB5LThcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPlN1Z2dlc3Rpb25zPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+IFBsZWFzZSBnaXZlIGEgaHVuY2ggYW5kIHRlbGwgdXMgaG93IGNhbiB3ZSBiZSBiZXR0ZXIhPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQganVzdGlmeS1jZW50ZXIgcHktOFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc3RhcnRcIiBodG1sRm9yPVwiXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInAtNCBibG9jayBzaGFkb3cgYmctZ3JheS0xMDAgbXktMiByb3VuZGVkXCIgb25DaGFuZ2U9e29uQ2hhbmdlRigpfS8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1zdGFydFwiIGh0bWxGb3I9XCJcIj5FLW1haWw6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWdyYXktMTAwIG15LTIgcm91bmRlZFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUYoKX0vPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc3RhcnRcIiBodG1sRm9yPVwiXCI+V2hhdHNhcHA6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWdyYXktMTAwIG15LTIgcm91bmRlZFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUYoKX0vPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc3RhcnRcIiBodG1sRm9yPVwiXCI+U3VnZ2VzdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInAtNCBibG9jayBzaGFkb3cgYmctZ3JheS0xMDAgbXktMiByb3VuZGVkXCIvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIHNoYWRvdy1sZyByb3VuZGVkIHB5LTMgbXktNiBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTUwMCBkdXJhdGlvbi0zMDBcIiBvbkNsaWNrPXtzYXZlfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShmb3JtLCBudWxsLCAyKX08L3ByZT5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==