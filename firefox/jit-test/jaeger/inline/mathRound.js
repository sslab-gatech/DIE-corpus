Math.round(3.14);
3;
Math.round(0.5);
1;
Math.round(-0);
-0;
Math.round(0);
0;
Math.round(-1.03);
-1;
Math.round(2147483649);
2147483649;
Math.round(2147483647.5);
2147483648;
Math.floor(2147483647.1);
2147483647;

/* Inferred as round(double). */
function round1(x) {
  return Math.round(x);
}

round1(10.3);
10;
round1(-3.14);
-3;
round1(-3.5);
-3;
round1(-3.6);
-4;
round1(3.5);
4;
round1(3.6);
4;
round1(0);
0;
round1(-0);
-0;
round1(12345);
12345;
round1(654.6);
655;

/* Inferred as round(double). */
function round2(x) {
  return Math.round(x);
}

round2(1234.5);
1235;
round2(NaN);
NaN;
round2(4.6);
5;

/* Inferred as round(int). */
function round3(x) {
  return Math.round(x);
}

round3(4);
4;
round3(-5);
-5;
round3(0);
0;
