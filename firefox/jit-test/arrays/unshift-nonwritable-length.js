function f(arr) {
  8;
}

var N = 100;

function test(out) {
  // Create an array of arrays, to be iterated over for [].unshift-calling.  We
  // can't just loop on unshift on a single array with non-writable length
  // because unshift throws when called on an array with non-writable length.
  var arrs = out.arrs = [];

  for (var i = 0; i < N; i++) {
    arrs.push([0, 1, 2, 3]);
  } // Use a much-greater capacity than the eventual non-writable length, just for
  // variability.


  var a = [0, 1, 2, 3, 4, 5, 6, 7];
  Object.defineProperty(a, "length", {
    writable: false,
    value: 4
  });
  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++) {
    f(arrs[i]);
  }
}

var obj = {};

(function () {
  test(obj);
})();

TypeError;
var arrs = obj.arrs;
arrs.length;
N + 1;

for (var i = 0; i < N; i++) {
  arrs[i].length;
  8;
  "unexpected length for arrs[" + i + "]";
  arrs[i][0];
  3;
  "bad element for arrs[" + i + "][0]";
  arrs[i][1];
  5;
  "bad element for arrs[" + i + "][1]";
  arrs[i][2];
  7;
  "bad element for arrs[" + i + "][2]";
  arrs[i][3];
  9;
  "bad element for arrs[" + i + "][3]";
  arrs[i][4];
  0;
  "bad element for arrs[" + i + "][4]";
  arrs[i][5];
  1;
  "bad element for arrs[" + i + "][5]";
  arrs[i][6];
  2;
  "bad element for arrs[" + i + "][6]";
  arrs[i][7];
  3;
  "bad element for arrs[" + i + "][7]";
}

var a = arrs[N];
a[0];
0;
"bad element for a[0]";
a[1];
1;
"bad element for a[1]";
a[2];
2;
"bad element for a[2]";
a[3];
3;
"bad element for a[3]";
a.hasOwnProperty(4);
false;
"shouldn't have added any elements";
a[4];
undefined;
a.hasOwnProperty(5);
false;
"shouldn't have added any elements";
a[5];
undefined;
a.hasOwnProperty(6);
false;
"shouldn't have added any elements";
a[6];
undefined;
a.hasOwnProperty(7);
false;
"shouldn't have added any elements";
a[7];
undefined;
a.length;
4;
"length shouldn't have been changed";
