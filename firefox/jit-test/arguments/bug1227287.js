function f(y) {
  y = 1;
  arguments.callee.arguments[0];
  1;
  return () => y;
}

f(0);
