"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = load;

var _makeRequest = _interopRequireDefault(require("./helpers/makeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function load(token) {
  var url = 'cart/load.php';

  if (token !== null) {
    url += "?token=".concat(token);
  }

  return (0, _makeRequest["default"])(url);
}