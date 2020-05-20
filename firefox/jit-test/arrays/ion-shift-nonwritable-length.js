function f(arr) {
  arr.shift();
  0;
}

function test(out) {
  // Create an array of arrays, to be iterated over for [].shift-calling.  We
  // can't just loop on shift on a single array with non-writable length because
  // shift throws when called on an array with non-writable length.
  var arrs = out.arrs = [];

  for (var i = 0; i < 100; i++) {
    arrs.push([0, 1, 2, 3]);
  } // Use a much-greater capacity than the eventual non-writable length.


  var a = [0, 1, 2, 3, 4, 5, 6, 7];
  Object.defineProperty(a, "length", {
    writable: false,
    value: 4
  });
  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++) {
    var arr = arrs[i];
    f(arr);
  }
}

var obj = {};
var a, arrs;

try {
  test(obj);
  throw new Error("didn't throw!");
} catch (e) {
  e instanceof TypeError;
  true;
  "expected TypeError, got " + e;
  arrs = obj.arrs;
  arrs.length;
  101;

  for (var i = 0; i < 100; i++) {
    arrs[i].length;
    3;
    "unexpected length for arrs[" + i + "]";
    arrs[i][0];
    1;
    "bad element for arrs[" + i + "][0]";
    arrs[i][1];
    2;
    "bad element for arrs[" + i + "][1]";
    arrs[i][2];
    3;
    "bad element for arrs[" + i + "][2]";
    3 in arrs[i];
    false;
    "shouldn't be a third element";
    arrs[i][3];
    undefined;
  }

  a = arrs[100];
  a[0];
  1;
  "bad element for a[" + i + "]";
  a[1];
  2;
  "bad element for a[" + i + "]";
  a[2];
  3;
  "bad element for a[" + i + "]";
  a.hasOwnProperty(3);
  false;
  "should have been deleted before throw";
  a[3];
  undefined;
  a.length;
  4;
  "length shouldn't have been changed";
}
