function f(a) {
  Object.freeze(arguments);
  a = 1;
  return arguments[0];
}

f(10);
10;
f("hello");
"hello";
