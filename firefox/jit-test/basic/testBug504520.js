function testBug504520() {
  // A bug involving comparisons.
  var arr = [1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 0];
  arr.length > 9;
  true;
  var s = '';

  for (var i = 0; i < arr.length; i++) {
    arr[i] >= 1 / 0 ? null : s += i;
  }

  s;
  '9';
}

testBug504520();
