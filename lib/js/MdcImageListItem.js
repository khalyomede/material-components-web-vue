;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var nonEmpty = function nonEmpty(value) {
  return value.trim().length > 0;
};

var _default = {
  props: {
    text: {
      type: String,
      "default": ""
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"mdc-image-list__item"},[_vm._t("default"),(_vm.text)?_c('div',{staticClass:"mdc-image-list__supporting"},[_c('span',{staticClass:"mdc-image-list__label"},[_vm._v(_vm._s(_vm.text))])]):_vm._e()],2)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b60822a", __vue__options__)
  } else {
    hotAPI.reload("data-v-3b60822a", __vue__options__)
  }
})()}