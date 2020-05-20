function f() {
  return 2;
}

function g(o) {
  with (o) {
    var f = function () {
      return 4;
    };
  }
  return f();
}

g({});
4;
