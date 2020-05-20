// Properties of Math.log2 that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.log2(NaN);
NaN;
Math.log2(-1e-10);
NaN;
Math.log2(-1e-5);
NaN;
Math.log2(-1e-1);
NaN;
Math.log2(-Number.MIN_VALUE);
NaN;
Math.log2(-Number.MAX_VALUE);
NaN;
Math.log2(-Infinity);
NaN;

for (var i = -1; i > -10; i--) {
  Math.log2(i);
  NaN;
} // If x is +0, the result is −∞.


Math.log2(+0);
-Infinity;
Math.log2(-0);
-Infinity;
Math.log2(1);
+0;
Math.log2(Infinity);
Infinity;
reportCompare(0, 0, 'ok');
