function f(arr) {
  arr.pop();
}

var N = 100;

function test() {
  // Create an array of arrays, to be iterated over for [].pop-calling.  We
  // can't just loop on pop on a single array with non-writable length because
  // pop throws when called on an array with non-writable length.
  var arrs = [];

  for (var i = 0; i < N; i++) {
    arrs.push([0, 1, 2, 3]);
  } // Test Ion-pop where dense initialized length < length.


  var a = [0, 1, 2];
  a.length = 4;
  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++) {
    f(arrs[i]);
  }

  return arrs;
}

var arrs = test();
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
a.length;
3;
"unexpected length for arrs[" + i + "]";
a[0];
0;
"bad element for arrs[" + i + "][0]";
a[1];
1;
"bad element for arrs[" + i + "][1]";
a[2];
2;
"bad element for arrs[" + i + "][2]";
3 in a;
false;
"shouldn't be a third element";
a[3];
undefined;
