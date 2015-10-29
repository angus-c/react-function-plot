exports.fn = function callback (info, cb) {
  var hello = 'world';
  cb(null, hello);
};

exports.name = 'callback';
exports.params = ['info', 'cb'];
exports.body = [
"",
"  var hello = 'world';",
"  cb(null, hello);",
""
].join('\n');