;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    phone: {
      type: Number,
      "default": 12,
      validator: function validator(value) {
        return 1 <= value && value <= 12;
      }
    },
    tablet: {
      type: Number,
      "default": 12,
      validator: function validator(value) {
        return 1 <= value && value <= 8;
      }
    },
    desktop: {
      type: Number,
      "default": 12,
      validator: function validator(value) {
        return 1 <= value && value <= 4;
      }
    }
  },
  computed: {
    classes: function classes() {
      return "mdc-layout-grid__cell ".concat(this.phoneClass, " ").concat(this.tabletClass, " ").concat(this.desktopClass);
    },
    phoneClass: function phoneClass() {
      return "mdc-layout-grid__cell--span-".concat(this.phone, "-phone");
    },
    tabletClass: function tabletClass() {
      return "mdc-layout-grid__cell--span-".concat(this.tablet, "-tablet");
    },
    desktopClass: function desktopClass() {
      return "mdc-layout-grid__cell--span-".concat(this.desktop, "-desktop");
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_vm._t("default")],2)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-273a8cf9", __vue__options__)
  } else {
    hotAPI.rerender("data-v-273a8cf9", __vue__options__)
  }
})()}