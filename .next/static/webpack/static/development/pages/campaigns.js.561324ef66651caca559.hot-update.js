webpackHotUpdate("static/development/pages/campaigns.js",{

/***/ "./pages/campaigns.js":
/*!****************************!*\
  !*** ./pages/campaigns.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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







var CampaignDefaultInner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "campaigns__CampaignDefaultInner",
  componentId: "sc-2ynp4c-0"
})(["display:flex;flex-direction:column;width:auto;height:100vh;position:relative;justify-content:center;align-items:center;.bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;svg{height:100%;}}"]);
var CreateCampaignInner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "campaigns__CreateCampaignInner",
  componentId: "sc-2ynp4c-1"
})(["background:", ";display:flex;flex-direction:row;position:relative;height:100vh;width:auto;"], function (props) {
  return props.theme.colors.blue;
});
var CampaignOutput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "campaigns__CampaignOutput",
  componentId: "sc-2ynp4c-2"
})(["flex:1 0 50%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
var CampaignForm = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "campaigns__CampaignForm",
  componentId: "sc-2ynp4c-3"
})(["background:", ";flex:1 0 50%;padding:60px;"], function (props) {
  return props.theme.colors.white;
});
var DefaultContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "campaigns__DefaultContentWrapper",
  componentId: "sc-2ynp4c-4"
})(["display:flex;flex-direction:column;z-index:1;text-align:center;.btn{margin:0 auto;margin-top:40px;}"]);
var DefaultTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "campaigns__DefaultTitle",
  componentId: "sc-2ynp4c-5"
})(["color:", ";font-size:64px;letter-spacing:1px;line-height:44px;margin:40px 0;"], function (props) {
  return props.theme.colors.orange;
});
var DefaultText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
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
var PhoneRendering = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "campaigns__PhoneRendering",
  componentId: "sc-2ynp4c-7"
})(["min-height:678px;width:375px;background:", ";border:1px solid ", ";"], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.black;
});
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "campaigns__InputWrapper",
  componentId: "sc-2ynp4c-8"
})(["input{height:50px;}input,textarea{display:block;width:100%;background:#ececec;-webkit-appearance:none;border:none;border:1px solid #d9d9d9;border-radius:4px;}"]);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=campaigns.js.561324ef66651caca559.hot-update.js.map