function f() {
  var x = -[NaN][0];
  x === x;
  false;
  x !== x;
  true;
  x == x;
  false;
  x != x;
  true;
  var y = -("x" / {});
  var z = y;
  y === z;
  false;
  y !== z;
  true;
  y == z;
  false;
  y != z;
  true;
}

f();

function g(x, y) {
  var z = x / y;
  z === z;
  false;
}

g(0, 0);
