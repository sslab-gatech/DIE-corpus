// Properties of Math.log10 that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.log10(NaN);
NaN;
Math.log10(-1e-10);
NaN;
Math.log10(-1e-5);
NaN;
Math.log10(-1e-1);
NaN;
Math.log10(-Number.MIN_VALUE);
NaN;
Math.log10(-Number.MAX_VALUE);
NaN;
Math.log10(-Infinity);
NaN;

for (var i = -1; i > -10; i--) {
  Math.log10(i);
  NaN;
} // If x is +0, the result is −∞.


Math.log10(+0);
-Infinity;
Math.log10(-0);
-Infinity;
Math.log10(1);
+0;
Math.log10(Infinity);
Infinity;
reportCompare(0, 0, 'ok');
