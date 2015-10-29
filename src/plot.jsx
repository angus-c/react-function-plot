import Plotter from './lib/plotter';
import classnames from 'classnames';
import React from 'react';

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.plotSelector = ['.plot', this.props.className].join('.');
    this.plotter = new Plotter({selector: this.plotSelector, thickness: props.thickness});
  }

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    fn: React.PropTypes.func,
    thickness: React.PropTypes.number
  }

  componentDidMount() {
    this.plotter.addPath(this.props.fn);
  }

  componentDidUpdate() {
    this.plotter.updatePath(this.props.fn);
  }

  render() {
    const className = classnames('plot', this.props.className);
    return (
      <div className={className}/>
    );
  }
}

export default Plot;
