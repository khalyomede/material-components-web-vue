"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  bind: function bind(element, binding) {
    element.classList.add("mdc-typography");
    element.classList.add("mdc-typography--".concat(binding.value));
  }
};
exports["default"] = _default;