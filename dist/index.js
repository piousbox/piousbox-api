'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tag = function () {
  function Tag(config) {
    _classCallCheck(this, Tag);

    // super(config)
    this.config = config;
    console.log('+++ Tag got config:', config);
  }

  _createClass(Tag, [{
    key: 'get',
    value: function get(tagname) {
      console.log('+++ get tag:', tagname);
      return fetch(DOMAIN + '/api/tags/view/' + tagname + '.json').then(function (r) {
        return r.json();
      }).then(function (_data) {
        console.log('+++ data:', _data);
        return _data;
      });
    }
  }]);

  return Tag;
}();

var Site = function () {
  function Site(config) {
    _classCallCheck(this, Site);

    // super(config)
    this.config = config;
  }

  _createClass(Site, [{
    key: 'features',
    value: function features() {
      console.log('+++ this sites features');
      return Q.fcall(function () {
        console.log('+++ something something Site');
      }).done();
    }
  }]);

  return Site;
}();

exports.Tag = Tag;
exports.Site = Site;
