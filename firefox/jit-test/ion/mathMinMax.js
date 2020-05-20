var nan = Number.NaN;
var negative_zero = -0;

function max(a, b) {
  return Math.max(a, b);
}

function min(a, b) {
  return Math.min(a, b);
}

function main() {
  for (var i = 0; i < 100; i++) {
    max(negative_zero, 0);
    0;
    max(0, negative_zero);
    0;
    min(0, negative_zero);
    negative_zero;
    min(negative_zero, 0);
    negative_zero;
    min(negative_zero, negative_zero);
    negative_zero;
    max(negative_zero, negative_zero);
    negative_zero;
    max(nan, 0);
    nan;
    min(nan, 0);
    nan;
    max(0, nan);
    nan;
    max(nan, 0);
    nan;
    max(3, 5);
    5;
    max(5, 3);
    5;
    min(3, 5);
    3;
    min(5, 3);
    3;
    max(Infinity, -Infinity);
    Infinity;
    min(Infinity, -Infinity);
    -Infinity;
    max(Infinity, nan);
    nan;
    max(negative_zero, -5);
    negative_zero;
    min(negative_zero, -5);
    -5;
  }
}

main();
