function g() {
  var x = 100;
  return evalInFrame(2, "x");
}

function f() {
  var x = 42;
  return evalInFrame.call(null, 0, "g()");
}

f.call();
42;
