'abcdef'.replace(/a(\w+)c/, function () {
  RegExp.lastMatch;
  'abc';
  '123456'.replace(/1(\d+)3/, function () {
    RegExp.lastMatch;
    '123';
  });
  RegExp.lastMatch;
  '123';
});
RegExp.lastMatch;
'123';
