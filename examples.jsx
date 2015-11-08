import React from 'react';
import ReactDOM from 'react-dom';
import easingFunctions from './lib/simplifiedEasings';
import sanitize from './lib/santitizer';

import Plot from './src/plot.jsx';

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: 'x * x',
      easingName: 'easeOutQuad'
    };
  }

  render() {
    const {expression, easingName} = this.state;
    return (
      <div>
        <h2>Examples using react-function-plot</h2>
        <span className='italic'>react-function-plot</span><span> is a React component for
          rendering JS functions as SVG paths
          (<a href="https://github.com/angus-c/react-function-plot">github</a>,&nbsp;
           <a href="https://www.npmjs.com/package/react-function-plot">npm</a>)</span>
        <div className='outer'>
          <form className='diyWrapper' onSubmit={e => this.onDIYSubmit(e)}>
            <h3>Edit the function expression</h3>
            <div className='code inline control'>return </div>
            <input className='code inline'
              autoFocus
              id='diyInput'
              ref='expression'
              type='text'
              defaultValue={this.state.expression}
            />
            <div className='panel diyContainer'>
              <Plot
                className='diy'
                fn={this.functionFromExpression(expression)}
                thickness={4}
              />
            </div>
          </form>
          <div className='easingsWrapper'>
            <h3 className='inline'>Select an Easing</h3>
            <select id='easingsSelector' onChange={e => this.onEasingChange(e)}>
              <option id='linear'>linear</option>
              <option id='easeInQuad'>ease-in quad</option>
              <option id='easeOutQuad'>ease-out quad</option>
              <option selected id='easeInOutQuad'>ease-in-out quad</option>
              <option id='easeInCubic'>ease-in cubic</option>
            </select>
            <div className='code ownline control'>
              {this.bodyFromFunction(this.functionFromEasingName(easingName))}
            </div>
            <div className='panel easingsContainer'>
              <Plot
                className='easing'
                fn={this.functionFromEasingName(easingName)}
                thickness={4}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onDIYSubmit(e) {
    e.preventDefault();
    this.setState({
      expression: this.refs.expression.value
    });
  }

  onEasingChange(e) {
    this.setState({
      easingName: e.target.options[e.target.selectedIndex].id
    });
  }

  bodyFromFunction(fn) {
    return fn.toString().replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
  }

  functionFromEasingName(easingName) {
    return easingFunctions[easingName];
  }

  functionFromExpression(expression) {
    return new Function('x', 'return ' + sanitize(expression));
  }
}

ReactDOM.render(<Examples/>, document.querySelector('.reactRoot'));

export default Examples;
