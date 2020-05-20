function f() {
  return /x/;
}

function g() {
  return f() == f();
}

for (var i = 0; i < 2; ++i) {
  g();
  false;
}
