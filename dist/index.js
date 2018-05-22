'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = exports.Tag = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tag = function () {
  function Tag(config) {
    _classCallCheck(this, Tag);

    this.config = config;
    return this;
  }

  _createClass(Tag, [{
    key: 'get',
    value: function get(tagname) {
      var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var query = Object.keys(delta).map(function (k) {
        return k + '=' + delta[k];
      }).join('&');
      var url = this.config.apiUrl + '/api/tags/view/' + tagname + '.json?' + query;
      var a = _axios2.default.get(url).then(function (r) {
        return r.data;
      }).then(function (_data) {
        return _data;
      });
      return a;
    }
  }]);

  return Tag;
}();

var Site = function () {
  function Site(config) {
    _classCallCheck(this, Site);

    this.config = config;
    return this;
  }

  _createClass(Site, [{
    key: 'features',
    value: function features() {}
  }, {
    key: 'all',
    value: function all() {
      var url = this.config.apiUrl + '/api/sites/view/' + this.config.domain + '.json';
      var a = _axios2.default.get(url).then(function (r) {
        return r.data.site;
      });
      return a;
    }
  }]);

  return Site;
}();

exports.Tag = Tag;
exports.Site = Site;
