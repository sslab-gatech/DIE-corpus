Math.floor(3.14);
3;
Math.floor(-0);
-0;
Math.floor(0);
0;
Math.floor(-1.23);
-2;
Math.floor(2147483649);
2147483649;
Math.floor(2147483648.5);
2147483648;
Math.floor(2147483647.1);
2147483647;

/* Inferred as floor(double). */
function floor1(x) {
  return Math.floor(x);
}

floor1(10.3);
10;
floor1(-3.14);
-4;
floor1(-0);
-0;
floor1(678.3);
678;

/* Inferred as floor(double). */
function floor2(x) {
  return Math.floor(x);
}

floor2(3.4);
3;
floor2(NaN);
NaN;
floor2(-4.4);
-5;

/* Inferred as floor(int). */
function floor3(x) {
  return Math.floor(x);
}

floor3(4);
4;
floor3(-5);
-5;
floor3(0);
0;
