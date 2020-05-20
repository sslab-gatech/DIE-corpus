function testObjectToNumber() {
  var o = {
    valueOf: () => -3
  };
  var x = 0;

  for (var i = 0; i < 10; i++) {
    x -= o;
  }

  return x;
}

testObjectToNumber();
30;
