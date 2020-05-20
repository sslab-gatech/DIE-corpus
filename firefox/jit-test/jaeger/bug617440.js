function f() {
  var x = 1.23;

  function g() {
    var y = x++;
    y;
    1.23;
  }

  g();
  x;
  2.23;
}

f();
