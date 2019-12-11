;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _drawer = require("@material/drawer");

var _default = {
  props: {
    modal: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-drawer": true,
        "mdc-drawer--modal": this.modal
      };
    }
  },
  data: function data() {
    return {
      element: null
    };
  },
  mounted: function mounted() {
    this.element = _drawer.MDCDrawer.attachTo(this.$el);
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{class:_vm.classes},[_c('div',{staticClass:"mdc-drawer__content"},[_vm._t("default")],2)])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d8cb43c", __vue__options__)
  } else {
    hotAPI.rerender("data-v-2d8cb43c", __vue__options__)
  }
})()}