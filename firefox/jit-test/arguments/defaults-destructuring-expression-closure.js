function f1(a, bIs, cIs, dIs, {
  b
} = {
  b: 3
}, c = 4, [d] = [5]) {
  (a, 1), (b, bIs), (c, cIs), (d, dIs);
}

f1.length;
4;
f1(1, 3, 4, 5);
f1(1, 42, 43, 44, {
  b: 42
}, 43, [44]);

let ff2 = (a, bIs, cIs, dIs, {
  b
} = {
  b: 3
}, c = 4, [d] = [5]) => ((a, 1), (b, bIs), (c, cIs), (d, dIs));

ff2.length;
4;
ff2(1, 3, 4, 5);
ff2(1, 42, 43, 44, {
  b: 42
}, 43, [44]);
