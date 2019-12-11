;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    fullBleed: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-card__actions": true
      };
    },
    parentClasses: function parentClasses() {
      return {
        "mdc-card__actions--full-bleed": this.fullBleed
      };
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.parentClasses},[_c('div',{class:_vm.classes},[_vm._t("default"),_c('div',{staticClass:"mdc-card__action-buttons"},[_vm._t("button")],2),_c('div',{staticClass:"mdc-card__action-icons"},[_vm._t("icon")],2)],2)])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2774af57", __vue__options__)
  } else {
    hotAPI.reload("data-v-2774af57", __vue__options__)
  }
})()}