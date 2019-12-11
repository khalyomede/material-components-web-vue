;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    numeric: {
      type: Boolean,
      "default": false
    },
    header: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    headerClasses: function headerClasses() {
      return {
        "mdc-data-table__header-cell": true,
        "mdc-data-table__cell--numeric": this.numeric
      };
    },
    bodyClasses: function bodyClasses() {
      return {
        "mdc-data-table__cell": true,
        "mdc-data-table__cell--numeric": this.numeric
      };
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.header)?_c('th',{class:_vm.headerClasses,attrs:{"role":"columnheader","scope":"col"}},[_vm._t("default")],2):_c('td',{class:_vm.bodyClasses},[_vm._t("default")],2)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c11bf36", __vue__options__)
  } else {
    hotAPI.reload("data-v-0c11bf36", __vue__options__)
  }
})()}