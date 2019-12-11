;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    active: {
      type: Boolean,
      "default": false
    },
    icon: {
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
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'mdc-tab': true, 'mdc-tab--active': _vm.active },attrs:{"role":"tab","aria-selected":"true","tabindex":"0"}},[_c('span',{staticClass:"mdc-tab__content"},[(_vm.icon)?_c('span',{staticClass:"mdc-tab__icon material-icons",attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(_vm.icon))]):_vm._e(),_c('span',{staticClass:"mdc-tab__text-label"},[_vm._t("default")],2)]),_c('span',{class:{ 'mdc-tab-indicator': true, 'mdc-tab-indicator--active': _vm.active }},[_c('span',{staticClass:"mdc-tab-indicator__content mdc-tab-indicator__content--underline"})]),_c('span',{staticClass:"mdc-tab__ripple"})])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43d9ab27", __vue__options__)
  } else {
    hotAPI.rerender("data-v-43d9ab27", __vue__options__)
  }
})()}