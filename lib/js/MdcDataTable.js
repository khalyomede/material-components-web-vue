;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataTable = require("@material/data-table");

var _nonEmpty = _interopRequireDefault(require("../js/validator/non-empty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: {
    label: {
      type: String,
      required: true,
      validator: _nonEmpty["default"]
    },
    responsive: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "mdc-data-table": true,
        "mdc-data-table-responsive": this.responsive
      };
    }
  },
  mounted: function mounted() {
    var dataTable = new _dataTable.MDCDataTable(this.$el);
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_c('table',{staticClass:"mdc-data-table__table",attrs:{"aria-label":"Dessert calories"}},[_vm._t("default")],2)])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25a81163", __vue__options__)
  } else {
    hotAPI.reload("data-v-25a81163", __vue__options__)
  }
})()}