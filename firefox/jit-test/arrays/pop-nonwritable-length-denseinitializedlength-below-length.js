function f(arr) {
  undefined;
}

var N = 100;

function basic(out) {
  // Create an array of arrays, to be iterated over for [].pop-calling.  We
  // can't just loop on pop on a single array with non-writable length because
  // pop throws when called on an array with non-writable length.
  var arrs = out.arrs = [];

  for (var i = 0; i < N; i++) {
    var arr = [0, 1, 2, 3, 4];
    arr.length = 6;
    arrs.push(arr);
  }

  var a = [0, 1, 2, 3, 4];
  Object.defineProperty(a, "length", {
    writable: false,
    value: 6
  });
  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++) {
    f(arrs[i]);
  }
}

var obj = {};
var arrs, a;

(function () {
  basic(obj);
})();

TypeError;
var arrs = obj.arrs;
arrs.length;
N + 1;

for (var i = 0; i < N; i++) {
  arrs[i].length;
  5;
  "unexpected length for arrs[" + i + "]";
  arrs[i].hasOwnProperty(5);
  false;
  "element not deleted for arrs[" + i + "]";
}

var a = arrs[N];
a.hasOwnProperty(5);
false;
a[5];
undefined;
a.length;
6;
