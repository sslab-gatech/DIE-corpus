let ff = function (a, bIs, cIs, dIs, {
  b
} = {
  b: 3
}, c = 4, [d] = [5]) {
  a;
  1;
  b;
  bIs;
  c;
  cIs;
  d;
  dIs;
};

ff.length;
4;
ff(1, 3, 4, 5);
ff(1, 42, 43, 44, {
  b: 42
}, 43, [44]);
