module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BlueWave.js":
/*!********************************!*\
  !*** ./components/BlueWave.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var BlueWave = function BlueWave() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1170 280"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "0",
    width: "1170",
    height: "280"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Account-01",
    transform: "translate(-270.000000, 0.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Rectangle-Copy-25",
    transform: "translate(270.000000, 0.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Rectangle-Copy-16"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    id: "Mask",
    fill: "#292F36",
    xlinkHref: "#path-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M-82.7853379,-628.005346 C-50.9662662,-639.054685 -32.7255662,-639.054685 -28.0632377,-628.005346 C141.176373,-226.921221 351.474563,-57.1907975 671.084893,-221.152738 C1003.90249,-391.890081 1265.94574,-305.875203 1457.21466,36.891897 L1457.21466,500.717331 L-82.7853379,500.717331 L-82.7853379,-628.005346 Z",
    id: "Rectangle-Copy-17",
    fill: "#2D3E51",
    mask: "url(#mask-2)",
    transform: "translate(687.214662, -67.787509) scale(1, -1) translate(-687.214662, 67.787509) "
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M168.416521,-457.609585 C194.656924,-466.715346 209.699579,-466.715346 213.544486,-457.609585 C353.112217,-127.076157 526.539946,12.7986854 790.114698,-122.32235 C1064.58116,-263.026995 1280.68176,-192.142134 1438.41652,90.3322342 L1438.41652,472.570776 L168.416521,472.570776 L168.416521,-457.609585 Z",
    fill: "#3B4D61",
    mask: "url(#mask-2)",
    transform: "translate(803.416521, 4.065935) scale(-1, -1) rotate(5.000000) translate(-803.416521, -4.065935) "
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlueWave);

/***/ }),

/***/ "./components/UserContext.js":
/*!***********************************!*\
  !*** ./components/UserContext.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/auth.js */ "./utils/auth.js");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserContext */ "./components/UserContext.js");
/* harmony import */ var _styles_PageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/PageWrapper */ "./styles/PageWrapper.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_BlueWave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BlueWave */ "./components/BlueWave.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var AccountHeader = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "account__AccountHeader",
  componentId: "mgn02c-0"
})(["display:flex;flex-direction:column;justify-content:center;padding:80px 60px;position:relative;z-index:1;.bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;}"]);
var AccountInfo = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "account__AccountInfo",
  componentId: "mgn02c-1"
})(["background:", ";padding:60px;"], function (props) {
  return props.theme.colors.white;
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "account__Content",
  componentId: "mgn02c-2"
})(["z-index:1;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.label.withConfig({
  displayName: "account__Label",
  componentId: "mgn02c-3"
})(["font-size:11px;line-height:18px;letter-spacing:1px;font-weight:bold;text-transform:uppercase;color:", ";"], function (props) {
  return props.theme.colors.orange;
});
var ArtistName = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.h1.withConfig({
  displayName: "account__ArtistName",
  componentId: "mgn02c-4"
})(["font-size:64px;font-weight:bold;letter-spacing:1px;line-height:44px;color:", ";"], function (props) {
  return props.theme.colors.orange;
});
var Row = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "account__Row",
  componentId: "mgn02c-5"
})(["display:flex;flex-direction:row;flex-wrap:wrap;"]);
var Data = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.h3.withConfig({
  displayName: "account__Data",
  componentId: "mgn02c-6"
})(["font-size:32px;line-height:44px;letter-spacing:0.5px;font-weight:bold;"]);
var Databox = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "account__Databox",
  componentId: "mgn02c-7"
})(["padding:30px 25px 30px 25px;border-radius:6px;flex:1 0 50%;max-width:calc(50% - 60px);margin:0px 30px 30px 0;&.orange{background:", ";color:", ";label{color:", ";}}&.black{background:", ";color:", ";label{color:", ";}}&.blue{background:", ";color:", ";label{color:", ";}}&.lightBlue{background:", ";color:", ";label{color:", ";}}"], function (props) {
  return props.theme.colors.orange;
}, function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.colors.orange;
}, function (props) {
  return props.theme.colors.orange;
}, function (props) {
  return props.theme.colors.blue;
}, function (props) {
  return props.theme.colors.seafoam;
}, function (props) {
  return props.theme.colors.seafoam;
}, function (props) {
  return props.theme.colors.seafoam;
}, function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.colors.black;
}); // const EditProfile = styled.a``;

var Account = function Account(_ref) {
  var token = _ref.token;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      loggedIn = _useContext.loggedIn;

  if (loggedIn) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["LoggedInPageWrapper"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AccountHeader, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "bg"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BlueWave__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, null, "Artist Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ArtistName, null, "Clairo"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AccountInfo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "artist-number"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Databox, {
      className: "data-box orange"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, null, "Fans"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Data, null, "17,890")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Databox, {
      className: "data-box black"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, null, "Fans"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Data, null, "17,890")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Databox, {
      className: "data-box blue"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, null, "Fans"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Data, null, "17,890")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Databox, {
      className: "data-box lightBlue"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, null, "Fans"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Data, null, "17,890")))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["PageWrapper"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AccountHeader, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, null, "Artist Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ArtistName, null, "Clairo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, loggedIn ? 'loggedIn' : ''));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth_js__WEBPACK_IMPORTED_MODULE_4__["withAuthSync"])(Account));

Account.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _nextCookie, token;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx), token = _nextCookie.token; // console.log({ token });

            return _context.abrupt("return", {
              token: token
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./styles/PageWrapper.js":
/*!*******************************!*\
  !*** ./styles/PageWrapper.js ***!
  \*******************************/
/*! exports provided: LoggedInPageWrapper, PageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInPageWrapper", function() { return LoggedInPageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return PageWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var LoggedInPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PageWrapper__LoggedInPageWrapper",
  componentId: "sc-17c7iy6-0"
})(["display:block;padding-left:270px;width:100%;height:100%;"]);
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PageWrapper",
  componentId: "sc-17c7iy6-1"
})(["display:block;"]);

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: login, logout, withAuthSync, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var login =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = _ref.token;
            js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("token", token, {
              expires: 1
            });
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/account");

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function login(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var logout = function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("token"); // to support logging out from all windows

  window.localStorage.setItem("logout", Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/signup");
}; // Gets the display name of a JSX component for dev tools

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
};

var withAuthSync = function withAuthSync(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(_class, _Component);

    _createClass(_class, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
          var token, componentProps;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  token = auth(ctx);
                  _context2.t0 = WrappedComponent.getInitialProps;

                  if (!_context2.t0) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 5;
                  return WrappedComponent.getInitialProps(ctx);

                case 5:
                  _context2.t0 = _context2.sent;

                case 6:
                  componentProps = _context2.t0;
                  return _context2.abrupt("return", _objectSpread({}, componentProps, {
                    token: token
                  }));

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function getInitialProps(_x2) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
      _this.syncLogout = _this.syncLogout.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener("storage", this.syncLogout);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("storage", this.syncLogout);
        window.localStorage.removeItem("logout");
      }
    }, {
      key: "syncLogout",
      value: function syncLogout(event) {
        if (event.key === "logout") {
          console.log("logged out from storage!");
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
        }
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, this.props);
      }
    }]);

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _defineProperty(_class, "displayName", "withAuthSync(".concat(getDisplayName(WrappedComponent), ")")), _temp;
};
var auth = function auth(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx),
      token = _nextCookie.token;
  /* this happens server only. ctx.req is available means that it is being rendered on the server  
    if we are on the server and the token is not available it means the user is not logged in
  */


  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: "/login"
    });
    ctx.res.end();
    return;
  }

  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
  }

  return token;
};

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/account.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/account.js */"./pages/account.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=account.js.map