import d3 from 'd3';

const defaultThickness = 4;

export default class Plotter {
  constructor({selector = 'body', thickness = defaultThickness}) {
    Object.assign(this, {selector, thickness});
  }

  addPath(fn) {
    this.d3Container = d3.select(this.selector);

    // render in a square SVG, adjust margins to center
    const width = this.d3Container[0][0].getBoundingClientRect().width;
    const height = this.d3Container[0][0].getBoundingClientRect().height;
    const marginOffset = Math.abs((width - height) / 2);
    const marginToAdjust = width > height ? 'margin-left' : 'margin-top';
    this.size = Math.min(width, height);

    const {size, thickness} = this;

    const svgContainer =
      this.d3Container
        .append('svg')
        .attr('width', size)
        .attr('height', size)
        .attr('style', `${marginToAdjust}: ${marginOffset}px`)

    svgContainer.append('path')
      .attr('d', this.getLineFunction(fn)([...new Array(Math.round(size))].map((_, i) => i)))
      .attr('stroke', 'blue')
      .attr('stroke-width', thickness)
      .attr('fill', 'none');
  }

  updatePath(fn) {
    const {size} = this;

    const svgContainer = this.d3Container.transition();

    svgContainer.select('path')
      .attr('d', this.getLineFunction(fn)([...new Array(Math.round(size))].map((_, i) => i)))
  }

  getLineFunction(fn) {
    const {size, thickness} = this;
    return d3.svg.line()
      .x(i => i)
      .y(i => size - thickness / 2 - size * fn(i / size) * (1 - thickness / size))
      .interpolate('linear');
  }
}
