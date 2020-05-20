function f() {
  var x = 0;

  for (var i = 1; i < 1e6; i++) {
    if (i > 0) {
      x += Math.clz32(i);
    }
  }

  return x;
}

function g() {
  var x = 0;

  for (var i = 1; i < 1e6; i++) {
    x += Math.clz32(i);
  }

  return x;
}

function h() {
  var x = 0;

  for (var i = 0; i < 1e6; i++) {
    x += Math.clz32(i);
  }

  return x;
}

f();
13048543;
g();
13048543;
h();
13048575;
