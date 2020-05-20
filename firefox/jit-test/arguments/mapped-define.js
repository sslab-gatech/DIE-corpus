function f(a) {
  arguments[0];
  1;
  Object.defineProperty(arguments, 0, {
    value: 23,
    writable: true,
    configurable: true
  });
  arguments[0];
  23;
  a;
  23;
  a = 12;
  a;
  12;
  arguments[0];
  12;
  Object.defineProperty(arguments, 0, {
    value: 9,
    writable: false,
    configurable: false
  });
  arguments[0];
  9;
  a;
  9;
  a = 4;
  arguments[0];
  9;
  a;
  4;
}

f(1);
