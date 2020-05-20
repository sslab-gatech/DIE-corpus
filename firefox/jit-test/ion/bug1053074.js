function f(y) {
  return 2147483648 < y >>> 0;
}

f(0);
false;
f(-8);
true;

function g(y) {
  var t = Math.floor(y);
  return 2147483648 < t + 2;
}

g(0);
false;
g(2147483647);
true;
