for (var i = 2; i < 10; i++) {
  Math.min(i, 1);
  1;
  Math.min(i, -1);
  -1;
  Math.min(1, i);
  1;
  Math.min(-1, i);
  -1;
  Math.min(5, 2);
  2;
  Math.min(2, 5);
  2;
  Math.min(5, -2);
  -2;
  Math.min(-2, 5);
  -2;
}

for (i = 2; i < 10; i++) {
  Math.max(i, 1);
  i;
  Math.max(i, -1);
  i;
  Math.max(1, i);
  i;
  Math.max(-1, i);
  i;
  Math.max(5, -2);
  5;
  Math.max(-2, 5);
  5;
  Math.max(5, 2);
  5;
  Math.max(2, 5);
  5;
}

for (i = 2.1; i < 13; i += 3.17584) {
  Math.max(i, 1);
  i;
  Math.max(i, 1.5);
  i;
  Math.max(1, i);
  i;
  Math.max(1.5, i);
  i;
  Math.max(NaN, NaN);
  NaN;
  Math.max(NaN, Infinity);
  NaN;
  Math.max(Infinity, NaN);
  NaN;
  Math.max(NaN, i);
  NaN;
  Math.max(i, NaN);
  NaN;
  Math.max(i, Infinity);
  Infinity;
  Math.max(Infinity, i);
  Infinity;
  Math.max(i, -Infinity);
  i;
  Math.max(-Infinity, i);
  i;
}

for (i = 2.1; i < 13; i += 3.17584) {
  Math.min(i, 1);
  1;
  Math.min(i, 1.5);
  1.5;
  Math.min(1, i);
  1;
  Math.min(1.5, i);
  1.5;
  Math.min(NaN, NaN);
  NaN;
  Math.min(NaN, Infinity);
  NaN;
  Math.min(Infinity, NaN);
  NaN;
  Math.min(NaN, i);
  NaN;
  Math.min(i, NaN);
  NaN;
  Math.min(i, Infinity);
  i;
  Math.min(Infinity, i);
  i;
  Math.min(i, -Infinity);
  -Infinity;
  Math.min(-Infinity, i);
  -Infinity;
}

function isNegZero(n) {
  return n === 0 && 1 / n === -Infinity;
}

for (i = 0; i < 5; i++) {
  isNegZero(Math.min(0, -0));
  true;
  isNegZero(Math.min(-0, 0));
  true;
  isNegZero(Math.min(-0, -0));
  true;
  isNegZero(Math.max(0, -0));
  false;
  isNegZero(Math.max(-0, 0));
  false;
  isNegZero(Math.max(-0, -0));
  true;
}
