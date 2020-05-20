function f(a, b, c, ...rest) {
  a;
  1;
  b;
  undefined;
  c;
  undefined;
  Array.isArray(rest);
  true;
  rest.length;
  0;
  Object.getPrototypeOf(rest);
  Array.prototype;
}

f(1);
