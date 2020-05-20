function foo(x) {
  Object.seal(x);
  x[3] = 4;
  "" + x;
  "1,2,3";
}

foo([1, 2, 3]);
