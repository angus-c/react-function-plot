import React from 'react';
import ReactDOM from 'react-dom';
import easingFunctions from './lib/simplifiedEasings';

import Plot from '../src/plot.jsx';

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: 'x * x * x * x',
      easingName: 'easeInOutQuad'
    };
  }

  render() {
    const {expression, easingName} = this.state;
    return (
      <div className='outer'>
        <form className='diyWrapper' onSubmit={e => this.onDIYSubmit(e)}>
          <h3>Edit the function expression</h3>
          <span>return y = </span>
          <input
            id='diyInput'
            ref='expression'
            type='text'
            defaultValue={this.state.expression}
          />
          <div className='panel diyContainer'>
            <Plot
              className='diy'
              fn={this.functionFromExpression(expression)}
              height={300}
              width={300}
              thickness={4}
            />
          </div>
        </form>
        <div className='easingsWrapper'>
          <h3>Select an Easing</h3>
          <select id='easingsSelector' onChange={e => this.onEasingChange(e)}>
            <option id='linear'>linear</option>
            <option id='easeInQuad'>ease-in quad</option>
            <option id='easeOutQuad'>ease-out quad</option>
            <option defaultValue id='easeInOutQuad'>ease-in-out quad</option>
            <option id='easeInCubic'>ease-in cubic</option>
          </select>
          <div className='panel easingsContainer'>
            <Plot
              className='easing'
              fn={this.functionFromEasingName(easingName)}
              height={300}
              width={300}
              thickness={4}
            />
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

  functionFromEasingName(easingName) {
    return easingFunctions[easingName];
  }

  functionFromExpression(expression) {
    // TODO: sanitize input
    return new Function('x', 'return ' + expression);
  }
}

ReactDOM.render(<Examples/>, document.querySelector('.reactRoot'));

export default Examples;
