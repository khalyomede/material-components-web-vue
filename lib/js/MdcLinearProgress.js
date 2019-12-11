;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _linearProgress = require("@material/linear-progress");

var _default = {
  props: {
    indeterminate: {
      type: Boolean,
      "default": false
    },
    reverse: {
      type: Boolean,
      "default": false
    },
    buffer: {
      type: Number,
      "default": 0
    },
    progress: {
      type: Number,
      "default": 0
    }
  },
  mounted: function mounted() {
    var progress = new _linearProgress.MDCLinearProgress(this.$el);
    progress.determinate = !this.indeterminate;
    progress.reverse = this.reverse;
    progress.buffer = parseInt(this.buffer) / 100;
    progress.progress = parseInt(this.progress) / 100;
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-linear-progress",attrs:{"role":"progressbar"}},[_c('div',{staticClass:"mdc-linear-progress__buffering-dots"}),_c('div',{staticClass:"mdc-linear-progress__buffer"}),_c('div',{staticClass:"mdc-linear-progress__bar mdc-linear-progress__primary-bar"},[_c('span',{staticClass:"mdc-linear-progress__bar-inner"})]),_c('div',{staticClass:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar"},[_c('span',{staticClass:"mdc-linear-progress__bar-inner"})])])}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d23c483a", __vue__options__)
  } else {
    hotAPI.reload("data-v-d23c483a", __vue__options__)
  }
})()}