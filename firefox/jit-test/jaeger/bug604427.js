function testInt(x) {
  var a = x | 0;
  return a !== a;
}

testInt(10);
false;
