function f(arr) {
  var x;

  for (var i = 0; i < 100; i++) {
    x = arr.pop();
  }

  return x;
}

var arr = [];

for (var i = 0; i < 130; i++) {
  arr.push({
    i: i
  });
}

f(arr).i;
30;
arr.length;
30;
f(arr);
undefined;
arr.length;
0;
