import { assert } from 'chai';
import jsdom from 'mocha-jsdom';
import Plot from '../src/plot.js';
import React from 'react/addons';

const ReactTestUtils = React.addons.TestUtils;

class SinglePlotWrapper extends React.Component {
  render() {
    return (
      <Plot
        className='plot1'
        fn={x => x * x}
        height={300}
        width={300}
        thickness={4}
      />
    );
  }
}

describe('Plot', () => {
  jsdom();

  let spw;

  beforeEach(() => {
    spw = ReactTestUtils.renderIntoDocument(<SinglePlotWrapper/>);
  });

  it('renders a single plot', () => {
    const plots = ReactTestUtils.scryRenderedDOMComponentsWithClass(spw, "plot");
    assert.isDefined(plots);
    assert.equal(plots.length, 1);
  });
  
  it('(the plot) is a DIV', () => {
    const plot =
      React.findDOMNode(ReactTestUtils.findRenderedDOMComponentWithClass(spw, "plot"));
    assert.isDefined(plot);
    assert.equal(plot.tagName, 'DIV');
  });

  it('(the plot\'s child node) is an SVG', () => {
    const plot =
      React.findDOMNode(ReactTestUtils.findRenderedDOMComponentWithClass(spw, "plot"));
    const childNodes = plot.childNodes;
    console.log(childNodes.length);
  });

  
});
