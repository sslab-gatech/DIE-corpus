function f(x, y, z) {
  if (1) {
    x = z;
  }

  return x + y;
}

f(0, 2, {});
"[object Object]2";
