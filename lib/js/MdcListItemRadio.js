;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  inheritAttrs: false,
  computed: {
    ariaChecked: function ariaChecked() {
      return this.$attrs.checked ? "true" : "false";
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"mdc-list-item",attrs:{"role":"radio","aria-checked":_vm.ariaChecked}},[_c('span',{staticClass:"mdc-list-item__graphic"},[_c('div',{staticClass:"mdc-radio"},[_c('input',_vm._g(_vm._b({staticClass:"mdc-radio__native-control",attrs:{"type":"radio"}},'input',_vm.$attrs,false),_vm.$listeners)),_vm._m(0)])]),_c('label',{staticClass:"mdc-list-item__text",attrs:{"for":_vm.$attrs.id}},[_vm._t("default")],2)])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-radio__background"},[_c('div',{staticClass:"mdc-radio__outer-circle"}),_c('div',{staticClass:"mdc-radio__inner-circle"})])}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-272ccb6e", __vue__options__)
  } else {
    hotAPI.rerender("data-v-272ccb6e", __vue__options__)
  }
})()}