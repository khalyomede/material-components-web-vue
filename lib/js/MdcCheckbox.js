;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _formField = require("@material/form-field");

var _checkbox = require("@material/checkbox");

var _nonEmpty = _interopRequireDefault(require("../js/validator/non-empty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      required: true,
      validator: _nonEmpty["default"]
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-checkbox": true,
        "mdc-checkbox--disabled": this.disabled,
        "mdc-checkbox--checked": this.checked
      };
    },
    checked: function checked() {
      return "checked" in this.$attrs && this.$attrs.checked !== false;
    },
    disabled: function disabled() {
      return "disabled" in this.$attrs && this.$attrs.disabled !== false;
    }
  },
  mounted: function mounted() {
    var checkbox = new _checkbox.MDCCheckbox(this.$refs.component);
    var formField = new _formField.MDCFormField(this.$refs.input);
    formField.input = checkbox;
    checkbox.checked = this.checked;
    checkbox.disabled = this.disabled;
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-form-field"},[_c('div',{ref:"component",class:_vm.classes},[_c('input',_vm._g(_vm._b({ref:"input",staticClass:"mdc-checkbox__native-control",attrs:{"type":"checkbox"}},'input',_vm.$attrs,false),_vm.$listeners)),_c('div',{staticClass:"mdc-checkbox__background"},[_c('svg',{staticClass:"mdc-checkbox__checkmark",attrs:{"viewBox":"0 0 24 24"}},[_c('path',{staticClass:"mdc-checkbox__checkmark-path",attrs:{"fill":"none","d":"M1.73,12.91 8.1,19.28 22.79,4.59"}})]),_c('div',{staticClass:"mdc-checkbox__mixedmark"})])]),_c('label',{attrs:{"for":_vm.$attrs.id}},[_vm._v(_vm._s(_vm.text))])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-745ebd74", __vue__options__)
  } else {
    hotAPI.rerender("data-v-745ebd74", __vue__options__)
  }
})()}