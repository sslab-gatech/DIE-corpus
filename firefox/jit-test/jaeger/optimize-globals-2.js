function testNaN(x) {
  var x = NaN;
  isNaN(x);
  true;
}

testNaN();

function testInfinity(x) {
  return x === Infinity;
}

testInfinity(Infinity);
true;
testInfinity(6);
false;
testInfinity(-Infinity);
false;

function testUndefined(x) {
  return x === undefined;
}

testUndefined(undefined);
true;
testUndefined();
true;
testUndefined(5);
false;
