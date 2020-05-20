function f1(a, bIs, cIs, dIs, b = 1, c, {
  d
}) {
  a;
  1;
  b;
  bIs;
  c;
  cIs;
  d;
  dIs;
}

f1.length;
4;
f1(1, 1, 42, 43, undefined, [42], {
  d: 43
});
f1(1, 42, 43, 44, 42, [43], {
  d: 44
});

(function () {
  f1(1, 1, 1, 1);
})();

TypeError;
