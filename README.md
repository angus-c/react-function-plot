## react-function-plot

___
WORK IN PROGRESS  
___

A React component to render a JS function as an SVG path

### Install

npm module coming soon

### Usage

```jsx
// commonJS
var Plot = require('react-function-plot');
```

or

```jsx
// es2015
import Plot from 'react-function-plot';
```
then

```jsx
<Plot
  className='myPlot'
  fn={myFunction}
  height={300}
  width={300}
  thickness={4}
/>
```

`myFunction` is any JavaScript function that takes a single numeric argument. 
e.g.
```js
// es5
function(t) {return 0.9/t} 
```

or

```js
// es2015
x => x * x
```

or even

```js
// es2015
x => Math.random();
```

`className` is a required prop – it allows multiple `Plot` components to be used on the same page. 

### Example:

Here's a [working example](http://anguscroll.com/react-function-plot/) and here's [the source](https://github.com/angus-c/react-function-plot/blob/gh-pages/examples.jsx) for the
example component.  

