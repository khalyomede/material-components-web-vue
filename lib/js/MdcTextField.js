;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textfield = require("@material/textfield");

var _default = {
  inheritAttrs: false,
  props: {
    fullWidth: {
      type: Boolean,
      "default": false
    },
    textarea: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    outlined: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-text-field": true,
        "mdc-text-field--fullwidth": this.fullWidth,
        "mdc-text-field--textarea": this.textarea,
        "mdc-text-field--outlined": this.outlined,
        "mdc-text-field--no-label": !this.label
      };
    }
  },
  mounted: function mounted() {
    new _textfield.MDCTextField(this.$refs.component);
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"component",class:_vm.classes},[(!this.textarea)?_c('input',_vm._g(_vm._b({staticClass:"mdc-text-field__input",attrs:{"type":"text"}},'input',_vm.$attrs,false),_vm.$listeners)):_c('textarea',{staticClass:"mdc-text-field__input",attrs:{"rows":"8","cols":"40"}}),(!this.fullWidth && !this.textarea && !this.outlined)?_c('label',{staticClass:"mdc-floating-label",attrs:{"for":_vm.$attrs.id}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),(this.textarea || this.outlined)?_c('div',{staticClass:"mdc-notched-outline"},[_c('div',{staticClass:"mdc-notched-outline__leading"}),(this.label)?_c('div',{staticClass:"mdc-notched-outline__notch"},[_c('label',{staticClass:"mdc-floating-label",attrs:{"for":_vm.$attrs.id}},[_vm._v(_vm._s(_vm.label))])]):_vm._e(),_c('div',{staticClass:"mdc-notched-outline__trailing"})]):_vm._e(),_c('div',{staticClass:"mdc-line-ripple"})]),_vm._t("default")],2)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63952e6c", __vue__options__)
  } else {
    hotAPI.reload("data-v-63952e6c", __vue__options__)
  }
})()}