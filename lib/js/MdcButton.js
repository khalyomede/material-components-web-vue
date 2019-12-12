;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ripple = require("@material/ripple");

var _default = {
  props: {
    ripple: {
      type: Boolean,
      "default": true
    },
    raised: {
      type: Boolean,
      "default": false
    },
    unelevated: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    dense: {
      type: Boolean,
      "default": false
    },
    icon: {
      type: String,
      "default": ""
    },
    iconDirection: {
      type: String,
      "default": "left",
      validator: function validator(value) {
        return ["left", "right"].includes(value);
      }
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-button": true,
        "mdc-typography": true,
        "mdc-typography--button": true,
        "mdc-button--raised": this.raised,
        "mdc-button--unelevated": this.unelevated,
        "mdc-button--outlined": this.outlined,
        "mdc-button--dense": this.dense
      };
    }
  },
  mounted: function mounted() {
    if (this.ripple) {
      new _ripple.MDCRipple(this.$el);
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.classes},[_c('div',{staticClass:"mdc-button__ripple"}),(_vm.icon && _vm.iconDirection === 'left')?_c('i',{staticClass:"material-icons mdc-button__icon mdc-button__icon-left",attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(_vm.icon))]):_vm._e(),_c('span',{staticClass:"mdc-button__label"},[_vm._t("default")],2),(_vm.icon && _vm.iconDirection === 'right')?_c('i',{staticClass:"material-icons mdc-button__icon mdc-button__icon-right",attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(_vm.icon))]):_vm._e()])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-356068ba", __vue__options__)
  } else {
    hotAPI.reload("data-v-356068ba", __vue__options__)
  }
})()}