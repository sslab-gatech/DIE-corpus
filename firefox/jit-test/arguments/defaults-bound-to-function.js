function f(a = 42) {
  return a;

  function a() {
    return 19;
  }
}

f()();
19;

function h(a, b = 43) {
  return [a, b];

  function b() {
    return 42;
  }
} // TDZ


h();
ReferenceError;

function i(b) {
  function b() {
    ;
  }
}

i();
ReferenceError;
i(42);

function j(a = 42, b = 8) {
  return b;

  function b() {
    return 43;
  }
} // TDZ


j();
ReferenceError;

function k(a = 42, b = 8) {
  return b;

  function a() {
    return 43;
  }
} // TDZ


k();
ReferenceError;

function l(a = 8, b = a) {
  return b;

  function a() {
    return 42;
  }
}

l()
8;

function m([a, b] = [1, 2], c = a) {
  function a() {
    return 42;
  }

  typeof a;
  "function";
  a();
  42;
  b;
  2;
  c;
  1;
}

m();
