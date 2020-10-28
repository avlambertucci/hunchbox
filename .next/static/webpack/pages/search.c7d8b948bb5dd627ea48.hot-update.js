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

  var save = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, data, onChangeF;
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
              onChangeF = function onChangeF(evt) {
                console.log(evt);
              };

              console.log(e);

            case 14:
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
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: "",
      children: " Please give a hunch and tell us how can we be better!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "grid justify-center py-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "E-mail:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Whatsapp:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Suggestion:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: " shadow-lg rounded py-3 my-6 bg-blue-400 hover:bg-blue-500 duration-300",
        onClick: save,
        children: "Salvar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("pre", {
        children: JSON.stringify(form, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwiTmFtZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmb3JtIiwidXNlRm9ybSIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZUYiLCJldnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsTUFEeUI7QUFFL0JDLFNBQUssRUFBRSxLQUZ3QjtBQUcvQkMsWUFBUSxFQUFFO0FBSHFCLEdBQUQsQ0FGRDtBQUFBLE1BRXhCQyxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQjs7QUFPL0IsTUFBTUMsSUFBSTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFY0MsS0FBSyxDQUFDLFdBQUQsRUFBYTtBQUN2Q0Msc0JBQU0sRUFBRSxNQUQrQjtBQUV2Q0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFGaUMsZUFBYixDQUZuQjs7QUFBQTtBQUVIUSxzQkFGRztBQUFBO0FBQUEscUJBTVVBLFFBQVEsQ0FBQ0MsSUFBVCxFQU5WOztBQUFBO0FBTUhDLGtCQU5HO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTVEMscUJBQU8sQ0FBQ0MsR0FBUjs7QUFUUztBQVdMQyx1QkFYSyxHQVdPLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFPO0FBQ3ZCSCx1QkFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDRCxlQWJVOztBQWNYSCxxQkFBTyxDQUFDQyxHQUFSLENBQVlHLENBQVo7O0FBZFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSmIsSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQWlCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFHLGVBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLDhCQUNFO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsMkNBQTdCO0FBQXlFLGdCQUFRLEVBQUVXLFNBQVM7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTyxpQkFBUyxFQUFDLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQywyQ0FBN0I7QUFBeUUsZ0JBQVEsRUFBRUEsU0FBUztBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFPLGlCQUFTLEVBQUMsaUJBQWpCO0FBQW1DLGVBQU8sRUFBQyxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLDJDQUE3QjtBQUF5RSxnQkFBUSxFQUFFQSxTQUFTO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBU0U7QUFBUSxpQkFBUyxFQUFDLHlFQUFsQjtBQUE0RixlQUFPLEVBQUVYLElBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFVRTtBQUFBLGtCQUFNSSxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0EzQ3VCTCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC5jN2Q4Yjk0OGJiNWRkNjI3ZWE0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cclxuICBjb25zdCBbZm9ybSwgdXNlRm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBOYW1lOiAnc3NhZicsXHJcbiAgICBFbWFpbDogJ2FzZicsXHJcbiAgICBXaGF0c2FwcDogJ2FzZicsXHJcbiAgfSlcclxuICBjb25zdCBzYXZlID0gYXN5bmMoKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3NhdmUnLHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICAgIGNvbnN0IG9uQ2hhbmdlRiA9IChldnQpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2dClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGUpXHJcblxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB0ZXh0LWNlbnRlciBweS04XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj5TdWdnZXN0aW9uczwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPiBQbGVhc2UgZ2l2ZSBhIGh1bmNoIGFuZCB0ZWxsIHVzIGhvdyBjYW4gd2UgYmUgYmV0dGVyITwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGp1c3RpZnktY2VudGVyIHB5LThcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXN0YXJ0XCIgaHRtbEZvcj1cIlwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWdyYXktMTAwIG15LTIgcm91bmRlZFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUYoKX0vPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc3RhcnRcIiBodG1sRm9yPVwiXCI+RS1tYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicC00IGJsb2NrIHNoYWRvdyBiZy1ncmF5LTEwMCBteS0yIHJvdW5kZWRcIiBvbkNoYW5nZT17b25DaGFuZ2VGKCl9Lz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXN0YXJ0XCIgaHRtbEZvcj1cIlwiPldoYXRzYXBwOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicC00IGJsb2NrIHNoYWRvdyBiZy1ncmF5LTEwMCBteS0yIHJvdW5kZWRcIiBvbkNoYW5nZT17b25DaGFuZ2VGKCl9Lz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXN0YXJ0XCIgaHRtbEZvcj1cIlwiPlN1Z2dlc3Rpb246PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWdyYXktMTAwIG15LTIgcm91bmRlZFwiLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBzaGFkb3ctbGcgcm91bmRlZCBweS0zIG15LTYgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS01MDAgZHVyYXRpb24tMzAwXCIgb25DbGljaz17c2F2ZX0+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9PC9wcmU+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=