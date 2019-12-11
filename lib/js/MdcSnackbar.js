;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _snackbar = require("@material/snackbar");

var _default = {
  props: {
    stacked: {
      type: Boolean,
      "default": false
    },
    leading: {
      type: Boolean,
      "default": false
    }
  },
  data: {
    element: null
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-snackbar": true,
        "mdc-snackbar--stacked": this.stacked,
        "mdc-snackbar--leading": this.leading
      };
    }
  },
  mounted: function mounted() {
    this.element = new _snackbar.MDCSnackbar(this.$el);
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_c('div',{staticClass:"mdc-snackbar__surface"},[_vm._t("default")],2)])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f911cc94", __vue__options__)
  } else {
    hotAPI.rerender("data-v-f911cc94", __vue__options__)
  }
})()}