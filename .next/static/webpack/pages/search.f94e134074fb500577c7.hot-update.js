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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





var _jsxFileName = "C:\\FrontEndTrack\\hunchbox\\pages\\search.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function Search() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    Name: '',
    Email: '',
    Whatsapp: ''
  }),
      form = _useState[0],
      setForm = _useState[1];

  var onChangeF = function onChangeF(evt) {
    var value = evt.target;
    setForm(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        Name: evt.target.value
      });
    });
    console.log(value);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "container mx-auto text-center py-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
      className: "font-bold text-3xl",
      children: "Suggestions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      className: "",
      children: " Please give a hunch and tell us how can we be better!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "grid justify-center py-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "E-mail:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Whatsapp:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded",
        onChange: onChangeF
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        className: "flex flex-start",
        htmlFor: "",
        children: "Suggestion:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        className: "p-4 block shadow bg-gray-100 my-2 rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        className: " shadow-lg rounded py-3 my-6 bg-blue-400 hover:bg-blue-500 duration-300",
        onClick: save,
        children: "Salvar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("pre", {
        children: JSON.stringify(form, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(Search, "beZIuZMtltF0YtTGqWuTlOQKW80=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwiTmFtZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmb3JtIiwic2V0Rm9ybSIsIm9uQ2hhbmdlRiIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwib2xkIiwiY29uc29sZSIsImxvZyIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFUEMsc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxTQUFLLEVBQUUsRUFGd0I7QUFHL0JDLFlBQVEsRUFBRTtBQUhxQixHQUFELENBRkQ7QUFBQSxNQUV4QkMsSUFGd0I7QUFBQSxNQUVsQkMsT0FGa0I7O0FBTy9CLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBTztBQUN2QixRQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsTUFBbEI7QUFDQUosV0FBTyxDQUFDLFVBQUFLLEdBQUc7QUFBQSw2Q0FDTkEsR0FETTtBQUVUVCxZQUFJLEVBQUVNLEdBQUcsQ0FBQ0UsTUFBSixDQUFXRDtBQUZSO0FBQUEsS0FBSixDQUFQO0FBR0VHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0gsR0FORDs7QUFRQSxNQUFNSyxJQUFJO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVjQyxLQUFLLENBQUMsV0FBRCxFQUFhO0FBQ3ZDQyxzQkFBTSxFQUFFLE1BRCtCO0FBRXZDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQUZpQyxlQUFiLENBRm5COztBQUFBO0FBRUhlLHNCQUZHO0FBQUE7QUFBQSxxQkFNVUEsUUFBUSxDQUFDQyxJQUFULEVBTlY7O0FBQUE7QUFNSEMsa0JBTkc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNUVixxQkFBTyxDQUFDQyxHQUFSOztBQVRTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpDLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFjQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFHLGVBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLDhCQUNFO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsMkNBQTdCO0FBQXlFLGdCQUFRLEVBQUVQO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsMkNBQTdCO0FBQXlFLGdCQUFRLEVBQUVBO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsMkNBQTdCO0FBQXlFLGdCQUFRLEVBQUVBO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQU8saUJBQVMsRUFBQyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBU0U7QUFBUSxpQkFBUyxFQUFDLHlFQUFsQjtBQUE0RixlQUFPLEVBQUVPLElBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFVRTtBQUFBLGtCQUFNSSxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0FoRHVCTCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC5mOTRlMTM0MDc0ZmI1MDA1NzdjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cclxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBOYW1lOiAnJyxcclxuICAgIEVtYWlsOiAnJyxcclxuICAgIFdoYXRzYXBwOiAnJyxcclxuICB9KVxyXG4gIGNvbnN0IG9uQ2hhbmdlRiA9IChldnQpPT57XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXRcclxuICAgIHNldEZvcm0ob2xkID0+KHtcclxuICAgICAgLi4ub2xkLFxyXG4gICAgICBOYW1lOiBldnQudGFyZ2V0LnZhbHVlfSkpXHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZSA9IGFzeW5jKCk9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlJyx7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyIHB5LThcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPlN1Z2dlc3Rpb25zPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+IFBsZWFzZSBnaXZlIGEgaHVuY2ggYW5kIHRlbGwgdXMgaG93IGNhbiB3ZSBiZSBiZXR0ZXIhPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQganVzdGlmeS1jZW50ZXIgcHktOFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc3RhcnRcIiBodG1sRm9yPVwiXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInAtNCBibG9jayBzaGFkb3cgYmctZ3JheS0xMDAgbXktMiByb3VuZGVkXCIgb25DaGFuZ2U9e29uQ2hhbmdlRn0vPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc3RhcnRcIiBodG1sRm9yPVwiXCI+RS1tYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicC00IGJsb2NrIHNoYWRvdyBiZy1ncmF5LTEwMCBteS0yIHJvdW5kZWRcIiBvbkNoYW5nZT17b25DaGFuZ2VGfS8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1zdGFydFwiIGh0bWxGb3I9XCJcIj5XaGF0c2FwcDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInAtNCBibG9jayBzaGFkb3cgYmctZ3JheS0xMDAgbXktMiByb3VuZGVkXCIgb25DaGFuZ2U9e29uQ2hhbmdlRn0vPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc3RhcnRcIiBodG1sRm9yPVwiXCI+U3VnZ2VzdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInAtNCBibG9jayBzaGFkb3cgYmctZ3JheS0xMDAgbXktMiByb3VuZGVkXCIvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIHNoYWRvdy1sZyByb3VuZGVkIHB5LTMgbXktNiBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTUwMCBkdXJhdGlvbi0zMDBcIiBvbkNsaWNrPXtzYXZlfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShmb3JtLCBudWxsLCAyKX08L3ByZT5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==