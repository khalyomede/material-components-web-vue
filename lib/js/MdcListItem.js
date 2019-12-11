;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    selectable: {
      type: Boolean,
      "default": false
    },
    active: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-list-item": true,
        "mdc-list-item--selected": this.active
      };
    },
    role: function role() {
      return this.selectable ? "option" : false;
    },
    ariaSelected: function ariaSelected() {
      return this.active ? "true" : "false";
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:_vm.classes,attrs:{"tabindex":"0","role":_vm.role,"aria-selected":_vm.ariaSelected}},[_c('span',{staticClass:"mdc-list-item__text"},[_vm._t("default")],2)])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dae8b82", __vue__options__)
  } else {
    hotAPI.reload("data-v-5dae8b82", __vue__options__)
  }
})()}