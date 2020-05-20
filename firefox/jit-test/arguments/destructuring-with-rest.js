function f1(a, bIs, [b], ...rest) {
  a;
  1;
  bIs;
  b;
  rest;
  [];
}

f1.length;
3;
f1(1, 3, [3]);
f1(1, 42, [42]);

function f2([a], ...rest) {
  a;
  undefined;
}

f2([]);

function f3([a], ...rest) {
  a;
  1;
  rest;
  [2, 3, 4];
}

f3([1], 2, 3, 4);
