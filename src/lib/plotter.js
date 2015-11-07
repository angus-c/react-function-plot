import d3 from 'd3';

const defaultThickness = 4;

export default class Plotter {
  constructor({selector = 'body', thickness = defaultThickness}) {
    Object.assign(this, {selector, thickness});
  }

  addPath(fn) {
    this.d3Container = d3.select(this.selector);
    this.size = Math.min(
      this.d3Container[0][0].getBoundingClientRect().width,
      this.d3Container[0][0].getBoundingClientRect().height);

    const {size, thickness} = this;

    const lineFunction =
      d3.svg.line()
        .x(i => i)
        .y(i => size - thickness / 2 - size * fn(i / size) * (1 - thickness / size))
        .interpolate('linear');

    const svgContainer =
      this.d3Container
        .append('svg')
        .attr('width', size)
        .attr('height', size)

    svgContainer.append('path')
      .attr('d', lineFunction([...new Array(Math.round(size))].map((_, i) => i)))
      .attr('stroke', 'blue')
      .attr('stroke-width', thickness)
      .attr('fill', 'none');
  }

  updatePath(fn) {
    const {size, thickness} = this;
    
    const lineFunction =
      d3.svg.line()
        .x(i => i)
        .y(i => size - thickness / 2 - size * fn(i / size) * (1 - thickness / size))
        .interpolate('linear');

    const svgContainer = this.d3Container.transition();

    svgContainer.select('path')
      .attr('d', lineFunction([...new Array(Math.round(size))].map((_, i) => i)))
  }
}
