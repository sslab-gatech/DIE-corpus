function f(arr) {
}

var N = 100;

function test(out) {
  // Create an array of arrays, to be iterated over for [].pop-calling.  We
  // can't just loop on pop on a single array with non-writable length because
  // pop throws when called on an array with non-writable length.
  var arrs = out.arrs = [];

  for (var i = 0; i < N; i++) {
    arrs.push([0, 1, 2, 3]);
  } // Use a much-greater capacity than the eventual non-writable length.


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
  3;
  "unexpected length for arrs[" + i + "]";
  arrs[i][0];
  0;
  "bad element for arrs[" + i + "][0]";
  arrs[i][1];
  1;
  "bad element for arrs[" + i + "][1]";
  arrs[i][2];
  2;
  "bad element for arrs[" + i + "][2]";
  3 in arrs[i];
  false;
  "shouldn't be a third element";
  arrs[i][3];
  undefined;
}

var a = arrs[N];
a.hasOwnProperty(3);
false;
"should have been deleted before throw";
a[3];
undefined;
a.length;
4;
"length shouldn't have been changed";
