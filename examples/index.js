import React from 'react';

import easingFunctions from './lib/simplifiedEasings';
import Plot from '../src/plot.jsx';

function renderDIY(expression) {
  const fn = new Function('x', 'return ' + expression);
  React.render(
    <Plot fn={fn} height={300} width={300} thickness={4}/>,
    document.querySelector('.diyContainer')
  );
}

renderDIY('x * x');
const diyInput = document.querySelector('#diyInput');
diyInput.onblur = (e) => {
  renderDIY(e.target.value);
}

function renderEasing(easingName = 'easeInQuad') {
  React.render(
    <Plot fn={easingFunctions[easingName]} height={300} width={300} thickness={4}/>,
    document.querySelector('.easingsContainer')
  );
}

renderEasing('easeInQuad');
const easingsSelector = document.querySelector('#easingsSelector');
easingsSelector.onchange = (e) => {
  renderEasing(easingsSelector.options[easingsSelector.selectedIndex].id);
}
