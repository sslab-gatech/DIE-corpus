// |jit-test| exitstatus: 6
function f(x) {
  if (x === 0) {
    return;
  }

  f(x - 1);
  f(x - 1);
  f(x - 1);
  f(x - 1);
  f(x - 1);
  f(x - 1);
}

f(100);
0;
1;
