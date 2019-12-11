;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ripple = require("@material/ripple");

var _iconButton = require("@material/icon-button");

var nonEmpty = function nonEmpty(value) {
  return value.trim().length > 0;
};

var _default = {
  props: {
    icon: {
      type: String,
      "default": ""
    },
    ripple: {
      type: Boolean,
      "default": true
    },
    toggle: {
      type: Boolean,
      "default": false
    },
    iconOn: {
      type: String,
      "default": ""
    },
    iconOff: {
      type: String,
      "default": ""
    },
    label: {
      type: String,
      "default": ""
    }
  },
  mounted: function mounted() {
    if (this.ripple) {
      var ripple = new _ripple.MDCRipple(this.$el);
      ripple.unbounded = true;
    }

    if (this.toggle) {
      var iconToggle = new _iconButton.MDCIconButtonToggle(document.querySelector(this.$el));
      iconToggle.unbounded = true;
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.toggle)?_c('button',{staticClass:"mdc-icon-button material-icons"},[_vm._v(_vm._s(_vm.icon))]):_c('button',{staticClass:"mdc-icon-button material-icons",attrs:{"aria-label":_vm.label,"aria-hidden":"true","aria-pressed":"false"}},[_c('i',{staticClass:"material-icons mdc-icon-button__icon mdc-icon-button__icon--on"},[_vm._v("favorite")]),_c('i',{staticClass:"material-icons mdc-icon-button__icon"},[_vm._v("favorite_border")])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ef56708", __vue__options__)
  } else {
    hotAPI.rerender("data-v-9ef56708", __vue__options__)
  }
})()}