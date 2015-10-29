var assert = require('assert');
var glob = require('glob');
var testFiles = glob.sync(__dirname + '/test-files/**/*.js');
var functionToString = require('../');

describe('functionToString', function () {
  testFiles.forEach(function (testFile) {
    describe('interpretting ' + testFile, function () {
      before(function () {
        var testCase = require(testFile);
        this.testCase = testCase;
        this.actualInfo = functionToString(testCase.fn);
      });

      it('has the expected name', function () {
        assert.deepEqual(this.testCase.name, this.actualInfo.name);
      });

      it('has the expected parameters', function () {
        assert.deepEqual(this.testCase.params, this.actualInfo.params);
      });

      it('has the expected body', function () {
        assert.strictEqual(this.testCase.body, this.actualInfo.body);
      });
    });
  });
});