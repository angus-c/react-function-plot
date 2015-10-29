'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var defaultDimensions = {
  height: 200,
  width: 200,
  thickness: 4
};

var Plotter = (function () {
  function Plotter() {
    var selector = arguments.length <= 0 || arguments[0] === undefined ? 'body' : arguments[0];
    var dimensions = arguments.length <= 1 || arguments[1] === undefined ? defaultDimensions : arguments[1];

    _classCallCheck(this, Plotter);

    _Object$assign(this, { selector: selector, dimensions: dimensions });
    this.thicknessCorrection = 1 - this.dimensions.thickness / this.dimensions.height;
  }

  _createClass(Plotter, [{
    key: 'addPath',
    value: function addPath(fn) {
      var _this = this;

      var _dimensions = this.dimensions;
      var height = _dimensions.height;
      var width = _dimensions.width;
      var thickness = _dimensions.thickness;

      var lineFunction = _d32['default'].svg.line().x(function (i) {
        return i;
      }).y(function (i) {
        return height - thickness / 2 - width * fn(i / width) * _this.thicknessCorrection;
      }).interpolate('linear');

      var svgContainer = _d32['default'].select(this.selector).append('svg').attr('width', width).attr('height', height);

      svgContainer.append('path').attr('d', lineFunction([].concat(_toConsumableArray(new Array(width))).map(function (_, i) {
        return i;
      }))).attr('stroke', 'blue').attr('stroke-width', thickness).attr('fill', 'none');
    }
  }, {
    key: 'updatePath',
    value: function updatePath(fn) {
      var _this2 = this;

      var _dimensions2 = this.dimensions;
      var height = _dimensions2.height;
      var width = _dimensions2.width;
      var thickness = _dimensions2.thickness;

      var lineFunction = _d32['default'].svg.line().x(function (i) {
        return i;
      }).y(function (i) {
        return height - thickness / 2 - width * fn(i / width) * _this2.thicknessCorrection;
      }).interpolate('linear');

      var svgContainer = _d32['default'].select(this.selector).transition();

      svgContainer.select('path').attr('d', lineFunction([].concat(_toConsumableArray(new Array(width))).map(function (_, i) {
        return i;
      })));
    }
  }]);

  return Plotter;
})();

exports['default'] = Plotter;
module.exports = exports['default'];