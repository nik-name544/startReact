"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;

var _makeRequest = _interopRequireDefault(require("./helpers/makeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function all() {
  return (0, _makeRequest["default"])('products/all.php');
}