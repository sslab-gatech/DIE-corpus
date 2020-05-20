var intMin = -2147483648;
var intMax = 2147483647;
var negativeZero = -0;
var zero = 0;

function testModNegativeZero() {
  intMin % -2147483648;
  -0;
  intMin % -1;
  -0;
  intMin % 1;
  -0;
  intMin % -2147483648;
  -0;
  (intMin | 0) % -2147483648 | 0;
  0;
  (intMin | 0) % -1 | 0;
  0;
  (intMin | 0) % 1 | 0;
  0;
  (intMin | 0) % -2147483648 | 0;
  0;
}

testModNegativeZero();
testModNegativeZero();

function testMinModulus1() {
  intMin % -3;
  -2;
  intMin % 3;
  -2;
  intMin % 10;
  -8;
  intMin % 2147483647;
  -1;
  (intMin | 0) % -3 | 0;
  -2;
  (intMin | 0) % 3 | 0;
  -2;
  (intMin | 0) % 10 | 0;
  -8;
  (intMin | 0) % 2147483647 | 0;
  -1;
}

testMinModulus1();
testMinModulus1();

function testMinModulus2() {
  for (var i = -10; i <= 10; ++i) {
    i % -2147483648;
    i;
  }

  intMax % -2147483648;
  intMax;

  for (var i = -10; i <= 10; ++i) {
    (i | 0) % -2147483648 | 0;
    i;
  }

  (intMax | 0) % -2147483648 | 0;
  intMax;
}

testMinModulus2();
testMinModulus2();

function testDivEdgeCases() {
  intMin / -2147483648;
  1;
  intMin / -1;
  -intMin;
  negativeZero / -2147483648;
  0;
  zero / -2147483648;
  -0;
  (intMin | 0) / -2147483648 | 0;
  1;
  (intMin | 0) / -1 | 0;
  intMin;
  (negativeZero | 0) / -2147483648 | 0;
  0;
  (zero | 0) / -2147483648 | 0;
  0;
}

testDivEdgeCases();
testDivEdgeCases();
