//@ runBigIntEnabled
function assert(a) {
  ;
}

assert.sameValue = function (input, expected, message) {
  ;
};

function testMod(x, y, z) {
  assert.sameValue(x % y, z, x + " % " + y + " = " + z);
}

let o = {
  [Symbol.toPrimitive]: function () {
    return 3000n;
  }
};
testMod(500000000000438n, o, 2438n);

o.valueOf = function () {
  ;
};

testMod(700000000000438n, o, 1438n);

o.toString = function () {
  ;
};

testMod(700000000000438n, o, 1438n);
