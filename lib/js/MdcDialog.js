;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dialog = require("@material/dialog");

var _default = {
  mounted: function mounted() {
    this.element = new _dialog.MDCDialog(this.$el);
  },
  methods: {
    open: function open() {
      this.element.open();
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({staticClass:"mdc-dialog",attrs:{"role":"alertdialog","aria-modal":"true"}},'div',_vm.$attrs,false),[_c('div',{staticClass:"mdc-dialog__container"},[_c('div',{staticClass:"mdc-dialog__surface"},[_vm._t("default")],2)]),_c('div',{staticClass:"mdc-dialog__scrim"})])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d62a6b9", __vue__options__)
  } else {
    hotAPI.reload("data-v-7d62a6b9", __vue__options__)
  }
})()}