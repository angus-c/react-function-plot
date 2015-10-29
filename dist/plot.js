'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _libPlotter = require('./lib/plotter');

var _libPlotter2 = _interopRequireDefault(_libPlotter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Plot = (function (_React$Component) {
  _inherits(Plot, _React$Component);

  function Plot(props) {
    _classCallCheck(this, Plot);

    _get(Object.getPrototypeOf(Plot.prototype), 'constructor', this).call(this, props);
    var height = props.height;
    var width = props.width;
    var thickness = props.thickness;

    this.plotter = new _libPlotter2['default'](['.plot', this.props.className].join('.'), { height: height, width: width, thickness: thickness });
  }

  _createClass(Plot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.plotter.addPath(this.props.fn);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.plotter.updatePath(this.props.fn);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2['default'])('plot', this.props.className);
      return _react2['default'].createElement('div', { className: className });
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string.isRequired,
      fn: _react2['default'].PropTypes.func,
      height: _react2['default'].PropTypes.number,
      width: _react2['default'].PropTypes.number,
      thickness: _react2['default'].PropTypes.number
    },
    enumerable: true
  }]);

  return Plot;
})(_react2['default'].Component);

exports['default'] = Plot;
module.exports = exports['default'];