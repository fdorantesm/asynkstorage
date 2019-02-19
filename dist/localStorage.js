"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AsyncLocalStorage =
/*#__PURE__*/
function () {
  function AsyncLocalStorage() {
    _classCallCheck(this, AsyncLocalStorage);
  }

  _createClass(AsyncLocalStorage, [{
    key: "getItem",
    value: function getItem(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return new Promise(function (resolve, reject) {
        if (key in localStorage) {
          var val;

          try {
            val = JSON.parse(localStorage.getItem(key));
          } catch (e) {
            val = localStorage.getItem(key);
          }

          resolve(val);
        } else {
          resolve(defaultValue);
        }
      });
    }
  }, {
    key: "setItem",
    value: function setItem(key, val) {
      return new Promise(function (resolve) {
        val = Object.isExtensible(val) ? JSON.stringify(val) : val;
        localStorage.setItem(key, val);
        resolve();
      });
    }
  }, {
    key: "removeKey",
    value: function removeKey(key) {
      return new Promise(function (resolve, reject) {
        if (key in localStorage) {
          localStorage.removeItem(key);
          resolve();
        } else {
          reject();
        }
      });
    }
  }, {
    key: "has",
    value: function has(key) {
      return new Promise(function (resolve, reject) {
        if (key in localStorage) {
          var obj = JSON.parse(localStorage.getItem(key));
          resolve(true);
        } else {
          reject(false);
        }
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      return new Promise(function (resolve) {
        localStorage.clear();
        resolve();
      });
    }
  }, {
    key: "keys",
    value: function keys() {
      return new Promise(function (resolve) {
        resolve(Object.keys(localStorage));
      });
    }
  }]);

  return AsyncLocalStorage;
}();

module.exports = new AsyncLocalStorage();
