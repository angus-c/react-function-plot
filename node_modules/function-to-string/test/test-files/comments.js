exports.fn = function comments (data) {
  // This is a comment
  return data;
};

exports.name = 'comments';
exports.params = ['data'];
exports.body = [
"",
"  // This is a comment",
"  return data;",
""
].join('\n');