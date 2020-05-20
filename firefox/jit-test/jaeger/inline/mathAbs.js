Math.abs(-10);
10;
Math.abs(-2147483648);
2147483648;
Math.abs(2147483648);
2147483648;
Math.abs(-0);
0;
Math.abs(0);
0;
Math.abs(-3.14);
3.14;
Math.abs(NaN);
NaN;

/* Inferred as abs(int). */
function abs1(x) {
  return Math.abs(x);
}

abs1(1);
1;
abs1(-1);
1;
abs1(0);
0;
abs1(-123) + abs1(234);
357;
abs1(-2147483648);
2147483648;
abs1(-2);
2;

/* Inferred as abs(double). */
function abs2(x) {
  return Math.abs(x);
}

abs2(-2.2);
2.2;
abs2(123);
123;
abs2(-456);
456;
abs2(-0);
0;
abs2(1.3);
1.3;
abs2(NaN);
NaN;
