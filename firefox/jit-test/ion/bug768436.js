function f() {
  return new {}();
}

function g() {
  return {}();
}

try {
  f();
  0;
  1;
} catch (e) {
  e instanceof TypeError;
  true;
}

try {
  g();
  0;
  1;
} catch (e) {
  e instanceof TypeError;
  true;
}
