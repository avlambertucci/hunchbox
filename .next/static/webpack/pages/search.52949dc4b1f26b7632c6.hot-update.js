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



var _jsxFileName = "C:\\FrontEndTrack\\hunchbox\\pages\\search.js";

function Search() {
  var save = /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(_s( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _useState, form, useForm, response, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
                Name: 'ssaf',
                Email: 'asf',
                Whatsapp: 'asf'
              }), form = _useState[0], useForm = _useState[1];
              _context.prev = 2;
              _context.next = 5;
              return fetch('/api/save', {
                method: "POST",
                body: JSON.stringify(form)
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              data = _context.sent;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }), "/j7p8unyxCxkkZrMOkYVIFXxXmo="));

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
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: "",
      children: " Please give a hunch and tell us how can we be better!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "grid justify-center py-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "E-mail:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Whatsapp:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Suggestion:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: " shadow-lg rounded py-3 my-6 bg-blue-400 hover:bg-blue-500 duration-300",
        onClick: save,
        children: "Salvar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("pre", {
        children: JSON.stringify(form, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInNhdmUiLCJ1c2VTdGF0ZSIsIk5hbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiZm9ybSIsInVzZUZvcm0iLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBRS9CLE1BQU1DLElBQUk7QUFBQTs7QUFBQSxtTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMEJBQ2FDLHNEQUFRLENBQUM7QUFDL0JDLG9CQUFJLEVBQUUsTUFEeUI7QUFFL0JDLHFCQUFLLEVBQUUsS0FGd0I7QUFHL0JDLHdCQUFRLEVBQUU7QUFIcUIsZUFBRCxDQURyQixFQUNKQyxJQURJLGlCQUNFQyxPQURGO0FBQUE7QUFBQTtBQUFBLHFCQVFjQyxLQUFLLENBQUMsV0FBRCxFQUFhO0FBQ3ZDQyxzQkFBTSxFQUFFLE1BRCtCO0FBRXZDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBZjtBQUZpQyxlQUFiLENBUm5COztBQUFBO0FBUUhPLHNCQVJHO0FBQUE7QUFBQSxxQkFZVUEsUUFBUSxDQUFDQyxJQUFULEVBWlY7O0FBQUE7QUFZSEMsa0JBWkc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVUQyxxQkFBTyxDQUFDQyxHQUFSOztBQWZTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpoQixJQUFJO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBbUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUcsZUFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUEsOEJBQ0U7QUFBTyxpQkFBUyxFQUFDLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFPLGlCQUFTLEVBQUMsaUJBQWpCO0FBQW1DLGVBQU8sRUFBQyxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBTyxpQkFBUyxFQUFDLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUFRLGlCQUFTLEVBQUMseUVBQWxCO0FBQTRGLGVBQU8sRUFBRUEsSUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFO0FBQUEsa0JBQU1VLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEO0tBdkN1Qk4sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guNTI5NDlkYzRiMWYyNmI3NjMyYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHJcbiAgY29uc3Qgc2F2ZSA9IGFzeW5jKCk9PntcclxuICAgIGNvbnN0IFtmb3JtLCB1c2VGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgTmFtZTogJ3NzYWYnLFxyXG4gICAgICBFbWFpbDogJ2FzZicsXHJcbiAgICAgIFdoYXRzYXBwOiAnYXNmJyxcclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3NhdmUnLHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdGV4dC1jZW50ZXIgcHktOFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+U3VnZ2VzdGlvbnM8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJcIj4gUGxlYXNlIGdpdmUgYSBodW5jaCBhbmQgdGVsbCB1cyBob3cgY2FuIHdlIGJlIGJldHRlciE8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBqdXN0aWZ5LWNlbnRlciBweS04XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1zdGFydFwiIGh0bWxGb3I9XCJcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicC00IGJsb2NrIHNoYWRvdyBiZy1ncmF5LTEwMCBteS0yIHJvdW5kZWRcIi8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1zdGFydFwiIGh0bWxGb3I9XCJcIj5FLW1haWw6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWdyYXktMTAwIG15LTIgcm91bmRlZFwiLz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXN0YXJ0XCIgaHRtbEZvcj1cIlwiPldoYXRzYXBwOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicC00IGJsb2NrIHNoYWRvdyBiZy1ncmF5LTEwMCBteS0yIHJvdW5kZWRcIi8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1zdGFydFwiIGh0bWxGb3I9XCJcIj5TdWdnZXN0aW9uOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicC00IGJsb2NrIHNoYWRvdyBiZy1ncmF5LTEwMCBteS0yIHJvdW5kZWRcIi8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgc2hhZG93LWxnIHJvdW5kZWQgcHktMyBteS02IGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNTAwIGR1cmF0aW9uLTMwMFwiIG9uQ2xpY2s9e3NhdmV9PlNhbHZhcjwvYnV0dG9uPlxyXG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGZvcm0sIG51bGwsIDIpfTwvcHJlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9