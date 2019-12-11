;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _topAppBar = require("@material/top-app-bar");

var _default = {
  props: {
    "short": {
      type: Boolean,
      "default": false
    },
    dense: {
      type: Boolean,
      "default": false
    },
    prominent: {
      type: Boolean,
      "default": false
    },
    fixed: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-top-app-bar": true,
        "mdc-top-app-bar--short": this["short"],
        "mdc-top-app-bar--dense": this.dense,
        "mdc-top-app-bar--prominent": this.prominent,
        "mdc-top-app-bar--fixed": this.fixed
      };
    }
  },
  mounted: function mounted() {
    new _topAppBar.MDCTopAppBar(this.$el);
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{class:_vm.classes},[_c('div',{staticClass:"mdc-top-app-bar__row"},[_c('section',{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[_vm._t("start")],2),_c('section',{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{"role":"toolbar"}},[_vm._t("end")],2)])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ba6d586", __vue__options__)
  } else {
    hotAPI.rerender("data-v-3ba6d586", __vue__options__)
  }
})()}