'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _chai = require('chai');

var _mochaJsdom = require('mocha-jsdom');

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _srcPlotJs = require('../src/plot.js');

var _srcPlotJs2 = _interopRequireDefault(_srcPlotJs);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var ReactTestUtils = _reactAddons2['default'].addons.TestUtils;

var spw = undefined;

describe('Plot', function () {
  (0, _mochaJsdom2['default'])();

  var SinglePlotWrapper = (function (_React$Component) {
    _inherits(SinglePlotWrapper, _React$Component);

    function SinglePlotWrapper() {
      _classCallCheck(this, SinglePlotWrapper);

      _get(Object.getPrototypeOf(SinglePlotWrapper.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SinglePlotWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('spw1', spw);
        var plot = _reactAddons2['default'].findDOMNode(ReactTestUtils.findRenderedDOMComponentWithClass(spw, "plot"));
        var childNodes = plot.childNodes;
        console.log(childNodes.length);
      }
    }, {
      key: 'render',
      value: function render() {
        return _reactAddons2['default'].createElement(_srcPlotJs2['default'], {
          className: 'plot1',
          fn: function (x) {
            return x * x;
          },
          height: 300,
          width: 300,
          thickness: 4
        });
      }
    }]);

    return SinglePlotWrapper;
  })(_reactAddons2['default'].Component);

  beforeEach(function () {
    spw = ReactTestUtils.renderIntoDocument(_reactAddons2['default'].createElement(SinglePlotWrapper, null));
    console.log('spw2', spw);
  });

  it('renders a single plot', function () {
    var plots = ReactTestUtils.scryRenderedDOMComponentsWithClass(spw, "plot");
    _chai.assert.isDefined(plots);
    _chai.assert.equal(plots.length, 1);
  });

  it('(the plot) is a DIV', function () {
    var plot = _reactAddons2['default'].findDOMNode(ReactTestUtils.findRenderedDOMComponentWithClass(spw, "plot"));
    _chai.assert.isDefined(plot);
    _chai.assert.equal(plot.tagName, 'DIV');
  });
});

//# sourceMappingURL=index.js.map