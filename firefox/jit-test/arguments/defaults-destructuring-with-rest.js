function f1(a, bIs, [b] = [3], ...rest) {
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
f1(1, 42, [42]);

function f2([a] = [], ...rest) {
  a;
  undefined;
} // TDZ


f2();
ReferenceError;

function f3([a] = [], ...rest) {
  a;
  1;
  rest;
  [2, 3, 4];
} // TDZ


f3();
ReferenceError;

function f4(a, ...rest) {
  ;
} // TDZ


f4();
ReferenceError;
