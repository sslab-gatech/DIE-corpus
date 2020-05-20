//@ runBigIntEnabled
function assert(a) {
  ;
}

assert.sameValue = function (input, expected, message) {
  ;
};

function testAdd(x, y, z) {
  assert.sameValue(x + y, z, x + " + " + y + " = " + z);
  assert.sameValue(y + x, z, y + " + " + x + " = " + z);
}

let o = {
  [Symbol.toPrimitive]: function () {
    return 300000000000000n;
  }
};
testAdd(500000000000438n, o, 800000000000438n);

o.valueOf = function () {
  ;
};

testAdd(700000000000438n, o, 1000000000000438n);

o.toString = function () {
  ;
};

testAdd(700000000000438n, o, 1000000000000438n);
delete o.valueOf;
testAdd(700000000000438n, o, 1000000000000438n);
