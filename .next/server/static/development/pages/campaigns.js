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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/campaigns.js":
/*!****************************!*\
  !*** ./pages/campaigns.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/PageWrapper */ "./styles/PageWrapper.js");
/* harmony import */ var _components_BlueWave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlueWave */ "./components/BlueWave.js");
/* harmony import */ var _styles_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Button */ "./styles/Button.js");
/* harmony import */ var _styles_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Type */ "./styles/Type.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CampaignDefaultInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "campaigns__CampaignDefaultInner",
  componentId: "sc-2ynp4c-0"
})(["display:flex;flex-direction:column;width:auto;height:100vh;position:relative;justify-content:center;align-items:center;.bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;svg{height:100%;}}"]);
var CreateCampaignInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "campaigns__CreateCampaignInner",
  componentId: "sc-2ynp4c-1"
})(["background:", ";display:flex;flex-direction:row;position:relative;height:100vh;width:auto;"], function (props) {
  return props.theme.colors.blue;
});
var CampaignOutput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "campaigns__CampaignOutput",
  componentId: "sc-2ynp4c-2"
})(["flex:1 0 50%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
var CampaignForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "campaigns__CampaignForm",
  componentId: "sc-2ynp4c-3"
})(["background:", ";flex:1 0 50%;padding:60px;"], function (props) {
  return props.theme.colors.white;
});
var DefaultContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "campaigns__DefaultContentWrapper",
  componentId: "sc-2ynp4c-4"
})(["display:flex;flex-direction:column;z-index:1;text-align:center;.btn{margin:0 auto;margin-top:40px;}"]);
var DefaultTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "campaigns__DefaultTitle",
  componentId: "sc-2ynp4c-5"
})(["color:", ";font-size:64px;letter-spacing:1px;line-height:44px;margin:40px 0;"], function (props) {
  return props.theme.colors.orange;
});
var DefaultText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "campaigns__DefaultText",
  componentId: "sc-2ynp4c-6"
})(["color:", ";font-size:32px;line-height:44px;letter-spacing:0.5px;max-width:762px;margin:0 auto;"], function (props) {
  return props.theme.colors.white;
});

var Campaigns =
/*#__PURE__*/
function (_Component) {
  _inherits(Campaigns, _Component);

  function Campaigns() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Campaigns);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Campaigns)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasCampaigns: false,
      initialState: true
    });

    _defineProperty(_assertThisInitialized(_this), "createCampaignhandler", function () {
      var initialState = _this.state.initialState;

      _this.setState({
        initialState: !initialState
      });
    });

    return _this;
  }

  _createClass(Campaigns, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.hasCampaigns ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PageWrapper__WEBPACK_IMPORTED_MODULE_2__["LoggedInPageWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Campaigns")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PageWrapper__WEBPACK_IMPORTED_MODULE_2__["LoggedInPageWrapper"], null, this.state.initialState ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CampaignDefaultInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlueWave__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultContentWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultTitle, null, "Campaigns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultText, null, "Use the campaign builder to design and send your own custom text messages."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        blue: true,
        className: "btn",
        onClick: this.createCampaignhandler
      }, "Create a Campaign"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateCampaignInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CampaignOutput, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PhoneRendering, null, "output")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CampaignForm, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Type__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Campaign Text"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "textarea"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Type__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Campaign Text"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        type: "textarea",
        cols: "120",
        rows: "10"
      }))))));
    }
  }]);

  return Campaigns;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Campaigns);
var PhoneRendering = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "campaigns__PhoneRendering",
  componentId: "sc-2ynp4c-7"
})(["min-height:678px;width:375px;background:", ";border:1px solid ", ";"], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.black;
});
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "campaigns__InputWrapper",
  componentId: "sc-2ynp4c-8"
})(["input{height:50px;}input,textarea{display:block;width:100%;background:#ececec;-webkit-appearance:none;border:none;border:1px solid #d9d9d9;border-radius:4px;}"]);

/***/ }),

/***/ "./styles/Button.js":
/*!**************************!*\
  !*** ./styles/Button.js ***!
  \**************************/
/*! exports provided: Button, BlueButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueButton", function() { return BlueButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Button",
  componentId: "sc-13kfs1g-0"
})(["background:", ";color:", ";font-size:1.1rem;text-transform:uppercase;padding:20px 60px;border-radius:6px;align-self:flex-start;font-weight:bold;cursor:pointer;letter-spacing:1px;position:relative;overflow:hidden;z-index:1;position:relative;display:block;text-align:center;", " @media (min-width:769px){&:hover{&:after{transform:scale3d(17,17,1);}}}@media (min-width:769px){&:after{content:\"\";z-index:-1;position:absolute;top:50%;left:100%;margin:-15px 0 0 1px;width:30px;height:30px;border-radius:50%;background:", ";transform-origin:100% 50%;transform:scale3d(1,2,1);transition:transform 0.3s,opacity 0.3s;transition-timing-function:cubic-bezier(0.7,0,0.9,1);}}"], function (props) {
  return props.theme.colors.orange;
}, function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.blue && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:", ";color:", ";"], function (props) {
    return props.theme.colors.seafoam;
  }, function (props) {
    return props.theme.colors.black;
  });
}, function (props) {
  return props.theme.colors.white;
});
var BlueButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Button__BlueButton",
  componentId: "sc-13kfs1g-1"
})([""]);

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

/***/ "./styles/Type.js":
/*!************************!*\
  !*** ./styles/Type.js ***!
  \************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Type__Label",
  componentId: "sc-9iy20v-0"
})(["font-family:'Gotham';font-size:11px;color:", ";letter-spacing:1px;line-height:18px;text-transform:uppercase;font-weight:bold;"], function (props) {
  return props.theme.colors.black;
});

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/campaigns.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/campaigns.js */"./pages/campaigns.js");


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
//# sourceMappingURL=campaigns.js.map