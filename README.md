## react-function-plot

A React component to render a JS function as an SVG path

### Install

```
npm install react-function-plot
```

### Usage

```jsx
// commonJS...
var Plot = require('react-function-plot');
// ...or es2015
import Plot from 'react-function-plot';

<Plot
  className='myPlot'
  fn={myFunction}
  height={300}
  width={300}
  thickness={4}
/>
```
`fn` can be any JavaScript function that takes a single numeric argument...
```js
// es5
function(t) {return 0.9/t}
// es2015
x => x * x
// or even
n => Math.random();
```
`className` is a required prop – it allows multiple `Plot` components to be used on the same page.
### Usage Example

Click [here](http://anguscroll.com/react-function-plot/) to play with a working example. Here's [the source](https://github.com/angus-c/react-function-plot/blob/gh-pages/examples.jsx) for the
example component.  

<img src="http://anguscroll.com/react-function-plot/screenshots/expression-and-easing.png" alt="example screenshot" style="width: 400px;"/>

### Tests

Coming soon
