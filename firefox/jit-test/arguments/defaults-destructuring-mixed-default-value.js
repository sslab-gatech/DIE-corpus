function f1(a = 1, [b, c = ((a, 2), a = 3, 42)] = [((a, 1), a = 2, 43)], {
  d,
  e = ((a, 4), a = 5, 44)
} = {
  d: ((a, 3), a = 4, 45)
}, f = ((a, 5), a = 6, 46)) {
  a;
  6;
  b;
  43;
  c;
  42;
  d;
  45;
  e;
  44;
  f;
  46;
}

f1.length;
0;
f1();

function f2(a = 1, [b, c = false] = [((a, 1), a = 2, 42), ((a, 2), a = 3, 43)], {
  d,
  e = false
} = {
  d: ((a, 3), a = 4, 44),
  e: ((a, 4), a = 5, 45)
}, f = ((a, 5), a = 6, 46)) {
  a;
  6;
  b;
  42;
  c;
  43;
  d;
  44;
  e;
  45;
  f;
  46;
}

f2.length;
0;
f2();

function f3(a = 1, [b, c = ((a, 1), a = 2, 42)] = [false], {
  d,
  e = ((a, 2), a = 3, 43)
} = {
  d: false
}, f = ((a, 3), a = 4, 44)) {
  a;
  4;
  b;
  8;
  c;
  42;
  d;
  9;
  e;
  43;
  f;
  44;
}

f3.length;
0;
f3(undefined, [8], {
  d: 9
});

function f4(a = 1, [b, c = false] = [false, false], {
  d,
  e = false
} = {
  d: false,
  e: false
}, f = ((a, 1), a = 2, 42)) {
  a;
  2;
  b;
  8;
  c;
  9;
  d;
  10;
  e;
  11;
  f;
  42;
}

f4.length;
0;
f4(undefined, [8, 9], {
  d: 10,
  e: 11
});
