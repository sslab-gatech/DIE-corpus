// Properties of Math.cosh that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.cosh(NaN);
NaN;
Math.cosh(+0);
1;
Math.cosh(-0);
1;
Math.cosh(Infinity);
Infinity;
Math.cosh(-Infinity);
Infinity;
reportCompare(0, 0, "ok");
