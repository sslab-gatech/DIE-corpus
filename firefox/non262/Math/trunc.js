// If x is NaN, the result is NaN.
Math.trunc(NaN);
NaN;
Math.trunc(-0);
-0;
Math.trunc(+0);
+0;
Math.trunc(Infinity);
Infinity;
Math.trunc(-Infinity);
-Infinity;
// Other boundary cases.
var MAX_NONINTEGER_VALUE = 4503599627370495.5;
var TRUNC_MAX_NONINTEGER_VALUE = 4503599627370495;
Math.trunc(Number.MIN_VALUE);
+0;
Math.trunc(ONE_MINUS_EPSILON);
+0;
Math.trunc(ONE_PLUS_EPSILON);
1;
Math.trunc(MAX_NONINTEGER_VALUE);
TRUNC_MAX_NONINTEGER_VALUE;
Math.trunc(Number.MAX_VALUE);
Number.MAX_VALUE;
Math.trunc(-Number.MIN_VALUE);
-0;
Math.trunc(-ONE_MINUS_EPSILON);
-0;
Math.trunc(-ONE_PLUS_EPSILON);
-1;
Math.trunc(-MAX_NONINTEGER_VALUE);
-TRUNC_MAX_NONINTEGER_VALUE;
Math.trunc(-Number.MAX_VALUE);
-Number.MAX_VALUE;

// Other cases.
for (var i = 1, f = 1.1; i < 20; i++, f += 1.0) {
  Math.trunc(f);
  i;
}

for (var i = -1, f = -1.1; i > -20; i--, f -= 1.0) {
  Math.trunc(f);
  i;
}

Math.trunc(1e40 + 0.5);
1e40;
Math.trunc(1e300);
1e300;
Math.trunc(-1e300);
-1e300;
Math.trunc(1e-300);
0;
Math.trunc(-1e-300);
-0;
Math.trunc(+0.9999);
+0;
Math.trunc(-0.9999);
-0;
reportCompare(0, 0, "ok");
