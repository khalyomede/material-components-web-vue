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
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"mdc-list-item",attrs:{"role":"checkbox","aria-checked":_vm.ariaChecked}},[_c('span',{staticClass:"mdc-list-item__graphic"},[_c('div',{staticClass:"mdc-checkbox"},[_c('input',_vm._g(_vm._b({staticClass:"mdc-checkbox__native-control",attrs:{"type":"checkbox"}},'input',_vm.$attrs,false),_vm.$listeners)),_c('div',{staticClass:"mdc-checkbox__background"},[_c('svg',{staticClass:"mdc-checkbox__checkmark",attrs:{"viewBox":"0 0 24 24"}},[_c('path',{staticClass:"mdc-checkbox__checkmark-path",attrs:{"fill":"none","d":"M1.73,12.91 8.1,19.28 22.79,4.59"}})])])]),_c('div',{staticClass:"mdc-checkbox__mixedmark"})]),_c('label',{staticClass:"mdc-list-item__text",attrs:{"for":_vm.$attrs.id}},[_vm._t("default")],2)])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bfe5036", __vue__options__)
  } else {
    hotAPI.rerender("data-v-7bfe5036", __vue__options__)
  }
})()}