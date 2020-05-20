var gen = function* () {
  yield;
}();

var t = gen.throw;

try {
  new t();
} catch (e) {
  actual = e;
}

actual.name;
"TypeError";
/is not a constructor/.test(actual.message);
true;
