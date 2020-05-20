function f() {
  function g() {
    for (var i = 0; i < 3; i++) {
      x = i;
    }
  }

  ;
  var [x] = [];
  g();
  x;
  2;
  print(x);
}

f();
