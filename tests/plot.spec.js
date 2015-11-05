import { assert } from 'chai';
import jsdom from 'mocha-jsdom';
import Plot from '../src/plot.js';
import React from 'react/addons';
import ReactDOM from 'react-dom';

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

class MultiplePlotWrapper extends React.Component {
  render() {
    return (
      <div>
        <Plot
          className='plot1'
          fn={x => x * x}
          height={300}
          width={300}
          thickness={4}
        />
        <Plot
          className='plot2'
          fn={x => x * x}
          height={300}
          width={300}
          thickness={4}
        />
      </div>
    );
  }
}

describe('Plot', () => {
  jsdom();

  let spw;

  describe('Single Plot renderer', () => {
    beforeEach(() => {
      spw = ReactTestUtils.renderIntoDocument(<SinglePlotWrapper/>);
    });

    it('renders a single plot', () => {
      const plots = ReactTestUtils.scryRenderedDOMComponentsWithClass(spw, "plot");
      assert.isDefined(plots);
      assert.equal(plots.length, 1);
    });
    
    it('(the plot) is a DIV', () => {
      const plotNode =
        ReactDOM.findDOMNode(ReactTestUtils.findRenderedDOMComponentWithClass(spw, "plot"));
      assert.isDefined(plotNode);
      assert.equal(plotNode.tagName, 'DIV');
    });
  });
  
  describe('Multiple Plot renderer', () => {
    beforeEach(() => {
      spw = ReactTestUtils.renderIntoDocument(<MultiplePlotWrapper/>);
    });

    it('renders two plots', () => {
      const plots = ReactTestUtils.scryRenderedDOMComponentsWithClass(spw, "plot");
      assert.isDefined(plots);
      assert.equal(plots.length, 2);
    });
    
    it('(each plot) is a DIV', () => {
      const plots = ReactTestUtils.scryRenderedDOMComponentsWithClass(spw, "plot");
      plots.forEach(plot => {
        const plotNode = ReactDOM.findDOMNode(plot);
        assert.equal(plotNode.tagName, 'DIV');
      });
    });
  });
});
