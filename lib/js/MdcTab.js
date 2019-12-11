;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tabBar = require("@material/tab-bar");

var _default = {
  mounted: function mounted() {
    var _this = this;

    var tab = new _tabBar.MDCTabBar(this.$el);
    var contents = this.$el.querySelectorAll(".content");
    tab.listen("MDCTabBar:activated", function (event) {
      _this.$el.querySelector(".content--active").classList.remove("content--active");

      contents[event.detail.index].classList.add("content--active");
    });
  }
};
exports["default"] = _default;
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-tab-bar",attrs:{"role":"tablist"}},[_c('div',{staticClass:"mdc-tab-scroller"},[_c('div',{staticClass:"mdc-tab-scroller__scroll-area"},[_c('div',{staticClass:"mdc-tab-scroller__scroll-content"},[_vm._t("default")],2)])]),_vm._t("content")],2)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cb214918", __vue__options__)
  } else {
    hotAPI.reload("data-v-cb214918", __vue__options__)
  }
})()}