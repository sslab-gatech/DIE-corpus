// Properties of Math.sinh that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.sinh(NaN);
NaN;
Math.sinh(+0);
+0;
Math.sinh(-0);
-0;
Math.sinh(Infinity);
Infinity;
Math.sinh(-Infinity);
-Infinity;
reportCompare(0, 0, "ok");
