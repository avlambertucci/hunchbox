webpackHotUpdate_N_E("pages/search",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





var _jsxFileName = "C:\\FrontEndTrack\\hunchbox\\pages\\search.js",
    _s = $RefreshSig$();


function Search() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    Name: 'ssaf',
    Email: 'asf',
    Whatsapp: 'asf'
  }),
      form = _useState[0],
      useForm = _useState[1];

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
              console.log(e);

            case 13:
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "container mx-auto text-center py-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
      className: "font-bold text-3xl",
      children: "Suggestions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      className: "",
      children: " Please give a hunch and tell us how can we be better!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "grid justify-center py-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: useForm = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("useForm"), function (e) {
          e.target.value;
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "E-mail:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: function onChange(e) {
          e.target.value;
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Whatsapp:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: function onChange(e) {
          e.target.value;
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Suggestion:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        className: " shadow-lg rounded py-3 my-6 bg-blue-400 hover:bg-blue-500 duration-300",
        onClick: save,
        children: "Salvar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("pre", {
        children: JSON.stringify(form, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsIk5hbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiZm9ybSIsInVzZUZvcm0iLCJzYXZlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFUEMsc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLE1BRHlCO0FBRS9CQyxTQUFLLEVBQUUsS0FGd0I7QUFHL0JDLFlBQVEsRUFBRTtBQUhxQixHQUFELENBRkQ7QUFBQSxNQUV4QkMsSUFGd0I7QUFBQSxNQUVsQkMsT0FGa0I7O0FBTy9CLE1BQU1DLElBQUk7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRWNDLEtBQUssQ0FBQyxXQUFELEVBQWE7QUFDdkNDLHNCQUFNLEVBQUUsTUFEK0I7QUFFdkNDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBRmlDLGVBQWIsQ0FGbkI7O0FBQUE7QUFFSFEsc0JBRkc7QUFBQTtBQUFBLHFCQU1VQSxRQUFRLENBQUNDLElBQVQsRUFOVjs7QUFBQTtBQU1IQyxrQkFORztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU1RDLHFCQUFPLENBQUNDLEdBQVI7O0FBVFM7QUFXWEQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxDQUFaOztBQVhXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpYLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFHLGVBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLDhCQUNFO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsMkNBQTdCO0FBQXlFLGdCQUFRLEVBQUVELE9BQU8seUdBQUUsVUFBQ1ksQ0FBRCxFQUFLO0FBQUNBLFdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFUO0FBQWUsU0FBdkI7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTyxpQkFBUyxFQUFDLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQywyQ0FBN0I7QUFBeUUsZ0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRCxFQUFLO0FBQUNBLFdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFUO0FBQWU7QUFBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBTyxpQkFBUyxFQUFDLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQywyQ0FBN0I7QUFBeUUsZ0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRCxFQUFLO0FBQUNBLFdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFUO0FBQWU7QUFBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBTyxpQkFBUyxFQUFDLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUFRLGlCQUFTLEVBQUMseUVBQWxCO0FBQTRGLGVBQU8sRUFBRWIsSUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFO0FBQUEsa0JBQU1JLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQXZDdUJMLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjQ0NmVmYjkzYTAzODIzNTZkYThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHJcbiAgY29uc3QgW2Zvcm0sIHVzZUZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgTmFtZTogJ3NzYWYnLFxyXG4gICAgRW1haWw6ICdhc2YnLFxyXG4gICAgV2hhdHNhcHA6ICdhc2YnLFxyXG4gIH0pXHJcbiAgY29uc3Qgc2F2ZSA9IGFzeW5jKCk9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlJyx7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB0ZXh0LWNlbnRlciBweS04XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj5TdWdnZXN0aW9uczwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPiBQbGVhc2UgZ2l2ZSBhIGh1bmNoIGFuZCB0ZWxsIHVzIGhvdyBjYW4gd2UgYmUgYmV0dGVyITwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGp1c3RpZnktY2VudGVyIHB5LThcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXN0YXJ0XCIgaHRtbEZvcj1cIlwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWdyYXktMTAwIG15LTIgcm91bmRlZFwiIG9uQ2hhbmdlPXt1c2VGb3JtPSAoZSk9PntlLnRhcmdldC52YWx1ZX19Lz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXN0YXJ0XCIgaHRtbEZvcj1cIlwiPkUtbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInAtNCBibG9jayBzaGFkb3cgYmctZ3JheS0xMDAgbXktMiByb3VuZGVkXCIgb25DaGFuZ2U9eyhlKT0+e2UudGFyZ2V0LnZhbHVlfX0vPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc3RhcnRcIiBodG1sRm9yPVwiXCI+V2hhdHNhcHA6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWdyYXktMTAwIG15LTIgcm91bmRlZFwiIG9uQ2hhbmdlPXsoZSk9PntlLnRhcmdldC52YWx1ZX19Lz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXN0YXJ0XCIgaHRtbEZvcj1cIlwiPlN1Z2dlc3Rpb246PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWdyYXktMTAwIG15LTIgcm91bmRlZFwiLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBzaGFkb3ctbGcgcm91bmRlZCBweS0zIG15LTYgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS01MDAgZHVyYXRpb24tMzAwXCIgb25DbGljaz17c2F2ZX0+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9PC9wcmU+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=