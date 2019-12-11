;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _formField = require("@material/form-field");

var _radio = require("@material/radio");

var _nonEmpty = _interopRequireDefault(require("../js/validator/non-empty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      "default": ""
    }
  },
  computed: {
    checked: function checked() {
      return "checked" in this.$attrs && this.$attrs.checked !== false;
    },
    disabled: function disabled() {
      return "disabled" in this.$attrs && this.$attrs.disabled !== false;
    }
  },
  mounted: function mounted() {
    var radio = new _radio.MDCRadio(this.$refs.component);
    var formField = new _formField.MDCFormField(this.$el);
    formField.input = radio;
    radio.checked = this.checked;
    radio.disabled = this.disabled;
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-form-field"},[_c('div',{ref:"component",staticClass:"mdc-radio"},[_c('input',_vm._g(_vm._b({staticClass:"mdc-radio__native-control",attrs:{"type":"radio"}},'input',_vm.$attrs,false),_vm.$listeners)),_vm._m(0)]),(_vm.text)?_c('label',{attrs:{"for":_vm.$attrs.id}},[_vm._v(_vm._s(_vm.text))]):_vm._e()])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-radio__background"},[_c('div',{staticClass:"mdc-radio__outer-circle"}),_c('div',{staticClass:"mdc-radio__inner-circle"})])}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6175371a", __vue__options__)
  } else {
    hotAPI.reload("data-v-6175371a", __vue__options__)
  }
})()}