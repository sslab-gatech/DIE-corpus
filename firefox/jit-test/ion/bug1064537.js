function test(a) {
  return a ? a : 0;
}

function test2(a) {
  return a ? 0 : a;
}

function isNegativeZero(x) {
  return x === 0 && 1 / x === -Infinity;
}

test(0);
isNegativeZero(test(-0));
false;
isNegativeZero(test(-0));
false;
isNegativeZero(test2(-0));
true;
isNegativeZero(test2(-0));
true;
