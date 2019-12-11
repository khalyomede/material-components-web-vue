;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _switch = require("@material/switch");

var _nonEmpty = _interopRequireDefault(require("../js/validator/non-empty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  inheritAttrs: false,
  props: {
    off: {
      type: String,
      "default": "off",
      validator: _nonEmpty["default"]
    },
    on: {
      type: String,
      "default": "on",
      validator: _nonEmpty["default"]
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-switch": true,
        "mdc-switch--checked": this.checked,
        "mdc-switch--disabled": this.disabled
      };
    },
    disabled: function disabled() {
      return "disabled" in this.$attrs && this.$attrs.disabled !== false;
    },
    checked: function checked() {
      return "checked" in this.$attrs && this.$attrs.checked !== false;
    }
  },
  mounted: function mounted() {
    var component = new _switch.MDCSwitch(this.$refs.component);
    component.disabled = this.disabled;
    component.checked = this.checked;
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"component",staticClass:"mdc-switch"},[_c('div',{staticClass:"mdc-switch__track"}),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('label',{attrs:{"for":"basic-switch"}},[_vm._v("off/on")])])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-switch__thumb-underlay"},[_c('div',{staticClass:"mdc-switch__thumb"},[_c('input',{staticClass:"mdc-switch__native-control",attrs:{"type":"checkbox","id":"basic-switch","role":"switch"}})])])}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8984eab6", __vue__options__)
  } else {
    hotAPI.reload("data-v-8984eab6", __vue__options__)
  }
})()}