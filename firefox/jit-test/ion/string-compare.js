function f(a, b) {
  return a == b;
}

var X = "" + Math.random();
var Y = "" + Math.random();
f(X + Y, X + Y);
true;
