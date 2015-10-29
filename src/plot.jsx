import Plotter from './lib/plotter';
import classnames from 'classnames';
import React from 'react';

class Plot extends React.Component {
  constructor(props) {
    super(props);
    const {height, width, thickness} = props;
    this.plotter = new Plotter(
      ['.plot', this.props.className].join('.'),
      {height, width, thickness}
    );
  }

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    fn: React.PropTypes.func,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
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
