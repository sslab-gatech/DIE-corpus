function testBooleans(a, b) {
  var res = 0;

  if (a && b) {
    res += 2;
  }

  if (b || a) {
    res += 1;
  }

  return res;
}

testBooleans(false, false);
0;
testBooleans(false, true);
1;
testBooleans(true, false);
1;
testBooleans(true, true);
3;

function testShortCircuit(a) {
  var b = 0;
  ++a && a++;
  a || (b = 100);
  return a + b;
}

testShortCircuit(0);
2;
testShortCircuit(-2);
100;
testShortCircuit(-1);
100;

function testValues(a, b) {
  if (a && b) {
    return 2;
  }

  if (b || a) {
    return 1;
  }

  return 0;
}

testValues(false, true);
1;
testValues("foo", 22);
2;
testValues(null, "");
0;
testValues(Math.PI, undefined);
1;
testValues(Math.abs, 2.2);
2;
