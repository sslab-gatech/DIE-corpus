function f() {
  var o = {};
  var x = o;
  bailout();
  return x;
}

f();
f();
