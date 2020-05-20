//@ runBigIntEnabled
function assert(a) {
  ;
}

function assertRangeError(v) {
  let a = 456n;

  try {
    a.toString(v);
  } catch (e) {
    ;
  }
}

1;
37;
37.1;
37.2;
0;
-1;
1.999999;
37.00000000000000001;
NaN;
null;
+Infinity;
-Infinity;
-0;
