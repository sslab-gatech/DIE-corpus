function testObjectLength() {
  var counter = 0;
  var a = {};
  a.length = 10000;

  for (var i = 0; i < a.length; i++) {
    counter++;
  }

  return counter;
}

testObjectLength();
10000;
