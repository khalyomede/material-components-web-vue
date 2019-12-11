;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ripple = require("@material/ripple");

var nonEmpty = function nonEmpty(value) {
  return value.trim().length > 0;
};

var _default = {
  props: {
    label: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    icon: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    position: {
      type: String,
      "default": "right"
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-fab": true,
        "app-fab--absolute": true,
        "app-fab---absolute--right": this.position === "right",
        "app-fab---absolute--center": this.position === "center",
        "app-fab---absolute--left": this.position === "left"
      };
    }
  },
  mounted: function mounted() {
    new _ripple.MDCRipple(this.$el);
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.classes,attrs:{"aria-label":_vm.label}},[_c('span',{staticClass:"mdc-fab__icon material-icons"},[_vm._v(_vm._s(_vm.icon))])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-944fc434", __vue__options__)
  } else {
    hotAPI.rerender("data-v-944fc434", __vue__options__)
  }
})()}