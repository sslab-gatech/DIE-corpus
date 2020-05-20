Math.pow(1, undefined);
NaN;
Math.pow(1, null);
1;
Math.pow(1, true);
1;
Math.pow(1, false);
1;
Math.pow(1, 0);
1;
Math.pow(1, -0);
1;
Math.pow(1, NaN);
NaN;
Math.pow(1, {});
NaN;
Math.pow(1, {
  valueOf: function () {
    return undefined;
  }
});
NaN;
x = 2.2;
Math.pow(x - 1.2, undefined);
NaN;
var y;
Math.pow(1, y);
NaN;
