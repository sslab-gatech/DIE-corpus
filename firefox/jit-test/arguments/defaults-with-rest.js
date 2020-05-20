function f1(a, bIs, b = 3, ...rest) {
  a;
  1;
  bIs;
  b;
  rest;
  [];
}

f1.length;
2;
f1(1, 3);
f1(1, 42, 42);

function f2(a , ...rest) {
  ;
} // TDZ


f2();
ReferenceError;

function f3(a , ...rest) {
  ;
}

f3();
ReferenceError;

function f4(a = 42, ...f) {
  typeof f;
  "function";

  function f() {
    ;
  }
}

f4();
