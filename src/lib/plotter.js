import d3 from 'd3';
import jsdom from 'jsdom'

const defaultDimensions = {
  height: 200,
  width: 200,
  thickness: 4
}

export default class Plotter {
  constructor(selector = 'body', dimensions = defaultDimensions) {
    Object.assign(this, {selector, dimensions});
    this.thicknessCorrection = 1 - this.dimensions.thickness / this.dimensions.height;
  }

  addPath(fn) {
    const {height, width, thickness} = this.dimensions;
    const lineFunction =
      d3.svg.line()
        .x(i => i)
        .y(i => height - thickness / 2 - width * fn(i / width) * this.thicknessCorrection)
        .interpolate('linear');

    // need to do document.querySelector before d3.select because no DOM in d3
    const svgContainer =
      d3.select((document || jsdom.jsdom()).querySelector(this.selector))
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    svgContainer.append('path')
      .attr('d', lineFunction([...new Array(width)].map((_, i) => i)))
      .attr('stroke', 'blue')
      .attr('stroke-width', thickness)
      .attr('fill', 'none');
  }

  updatePath(fn) {
    const {height, width, thickness} = this.dimensions;
    const lineFunction =
      d3.svg.line()
        .x(i => i)
        .y(i => height - thickness / 2 - width * fn(i / width) * this.thicknessCorrection)
        .interpolate('linear');

    const svgContainer = d3.select(this.selector).transition();

    svgContainer.select('path')
      .attr('d', lineFunction([...new Array(width)].map((_, i) => i)))
  }
}
