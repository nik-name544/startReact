"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeRequest;
var mainServerUrl = '/reactcourseapi/';

function makeRequest(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var baseUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : mainServerUrl;
  return fetch(baseUrl + url, options).then(function (response) {
    if (response.status !== 200) {
      return response.text().then(function (text) {
        throw new Error(text);
      });
    }

    return response.json();
  });
} // makeRequest('all.php').then((data) => {}).catch((err) => {})