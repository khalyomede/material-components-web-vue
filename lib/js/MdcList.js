;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _list = require("@material/list");

var _ripple = require("@material/ripple");

var _default = {
  props: {
    twoLine: {
      type: Boolean,
      "default": false
    },
    ripple: {
      type: Boolean,
      "default": true
    },
    selectable: {
      type: Boolean,
      "default": false
    },
    radio: {
      type: Boolean,
      "default": false
    },
    checkbox: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-list": true,
        "mdc-list--two-line": this.twoLine
      };
    },
    role: function role() {
      if (this.selectable) {
        return "listbox";
      } else if (this.radio) {
        return "radiogroup";
      } else if (this.checkbox) {
        return "group";
      } else {
        return false;
      }
    }
  },
  mounted: function mounted() {
    var list = new _list.MDCList(this.$el);

    if (this.ripple) {
      list.listElements.map(function (listItem) {
        return new _ripple.MDCRipple(listItem);
      });
    }

    if (this.selectable) {
      list.singleSelection = true;
    }
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.classes,attrs:{"role":_vm.role}},[_vm._t("default")],2)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c60a14f", __vue__options__)
  } else {
    hotAPI.reload("data-v-3c60a14f", __vue__options__)
  }
})()}