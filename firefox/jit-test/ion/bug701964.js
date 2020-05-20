function f(v) {
  return v.length;
}

function g(v) {
  return v.length;
}

function h(v) {
  return v.length;
}

function aliasCheck(v) {
  v[0] = v.length;
  v[1] = v.length;
  v[2] = v.length;
  return v;
}

for (let i = 41; i; i--) {
  f([]);
  0;
  f([0]);
  1;
  f([0, 1]);
  2;
  f([0, 1, 2]);
  3;
  g("");
  0;
  g("1");
  1;
  g("12");
  2;
  g("123");
  3;
  h({});
  undefined;
  h({
    a: 1
  });
  undefined;
  h({
    a: 1,
    b: 2
  });
  undefined;
  h({
    a: 1,
    b: 2,
    length: 3
  });
  3;
  arraysEqual(aliasCheck([0, 1, 2]), [3, 3, 3]);
  true;
}
