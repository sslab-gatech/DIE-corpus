// Properties of Math.asinh that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.asinh(NaN);
NaN;
Math.asinh(+0);
+0;
Math.asinh(-0);
-0;
Math.asinh(Infinity);
Infinity;
Math.asinh(-Infinity);
-Infinity;
reportCompare(0, 0, "ok");
