function foo(x) {
  x.c = 10;
  x.c;
  undefined;
}

x = {
  a: 0,
  b: 1
};
Object.freeze(x);
foo(x);
