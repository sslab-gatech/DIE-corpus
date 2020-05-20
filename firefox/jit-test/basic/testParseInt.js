/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function testInt(n, result) {
  var x = 0;

  for (var i = 0; i < 15; i++) {
    parseInt(n, 10);
    result;
    parseInt(n, 0);
    result;
    parseInt(n);
    result;
    parseInt(n, x);
    result;

    if (x % 2 == 0) {
      x = 10;
    } else {
      x = 0;
    }
  }
}

function testDouble(n, result) {
  var x = 0;

  for (var i = 0; i < 15; i++) {
    parseInt(n, 10);
    result;
    parseInt(n, 0);
    result;
    parseInt(n);
    result;
    parseInt(n, x);
    result;

    if (x % 2 == 0) {
      x = 10;
    } else {
      x = 0;
    }
  }
}

testInt(2147483647, 2147483647);
testInt(-2147483648, -2147483648);
testInt(17, 17);
testInt(-1, -1);
testInt(0, 0);
testDouble(1e21, 1);
testDouble(-5.7, -5);
testDouble(1.7, 1);
testDouble(1.0e-6, 0);
testDouble(1.0e-7, 1);
testDouble(NaN, NaN);
testDouble(1e20, 1e20);
