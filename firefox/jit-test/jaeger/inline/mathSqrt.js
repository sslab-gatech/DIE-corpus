Math.sqrt(-Infinity);
NaN;
Math.sqrt(-3.14);
NaN;
Math.sqrt(-2);
NaN;
Math.sqrt(-0);
-0;
Math.sqrt(0);
0;
Math.sqrt(2);
Math.SQRT2;
Math.sqrt(49);
7;
Math.sqrt(Infinity);
Infinity;

/* Inferred as sqrt(double). */
function sqrt1(x) {
  return Math.sqrt(x);
}

sqrt1(NaN);
NaN;
sqrt1(-Infinity);
NaN;
sqrt1(Infinity);
Infinity;
sqrt1(-0);
-0;
sqrt1(2);
Math.SQRT2;
sqrt1(16);
4;

/* Inferred as sqrt(int). */
function sqrt2(x) {
  return Math.sqrt(x);
}

sqrt2(4);
2;
sqrt2(169);
13;
sqrt2(0);
0;
