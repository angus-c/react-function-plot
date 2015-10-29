var esprima = require('esprima');

/**
 * Parses function into AST, extracts parameters and body, and returns information
 * @param {Function|String} fn Function/Source code of function to parse
 * @returns {Object} retObj
 * @returns {String} retObj.name Name of `fn`
 * @returns {String[]} retObj.params Array of parameters for `fn`
 * @returns {String} retObj.body Content of `fn`
 */
function functionToString(fn) {
  // Coerce strings to strings and functions to strings
  var fnStr = fn.toString();

  var fnAst;
  try {
    // Attempt to parse the AST
    var ast = esprima.parse(fnStr, {
      range: true
    });
    fnAst = ast.body[0];
  } catch (e) {
    // If there was an issue, try again with variable assignment
    // DEV: This handles anonymous funcitons (`function () {}`)
    fnStr = 'var x = ' + fnStr;
    var ast = esprima.parse(fnStr, {
      range: true
    });
    fnAst = ast.body[0].declarations[0].init;
  }

  // Extract the function body from the fnAst
  var fnBodyAst = fnAst.body;

  // Prepare and return the function information
  return {
    name: fnAst.id ? fnAst.id.name : '',
    params: fnAst.params.map(function getName(paramAst) {
      return paramAst.name;
    }),
    // TODO: Native code?
    body: fnStr.slice(fnBodyAst.range[0] + 1, fnBodyAst.range[1] - 1)
  };
}

module.exports = functionToString;