function holeArray(sparse) {
  var a = [,,];

  if (sparse) {
    a.length = 1000;
  }

  return a;
}

function undefinedArray(sparse) {
  var a = [undefined, undefined, undefined];

  if (sparse) {
    a.length = 1000;
  }

  return a;
}

var a;
a = new Int32Array(holeArray(false));
a[0];
0;
a = new Int32Array(holeArray(true));
a[0];
0;
a = new Int32Array(undefinedArray(false));
a[0];
0;
a = new Int32Array(undefinedArray(true));
a[0];
0;
a = new Float64Array(holeArray(false));
a[0];
NaN;
a = new Float64Array(holeArray(true));
a[0];
NaN;
a = new Float64Array(undefinedArray(false));
a[0];
NaN;
a = new Float64Array(undefinedArray(true));
a[0];
NaN;
