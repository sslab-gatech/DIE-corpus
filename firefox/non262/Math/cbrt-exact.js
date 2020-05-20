// Properties of Math.cbrt that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.cbrt(NaN);
NaN;
Math.cbrt(+0);
+0;
Math.cbrt(-0);
-0;
Math.cbrt(Infinity);
Infinity;
Math.cbrt(-Infinity);
-Infinity;
reportCompare(0, 0, "ok");
