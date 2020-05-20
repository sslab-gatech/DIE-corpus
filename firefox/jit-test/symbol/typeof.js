var a = [0, 0, 0, 0, 0, Symbol(), Symbol()];
var b = [];

function f(i, v) {
  b[i] = typeof v;
}

for (var i = 0; i < a.length; i++) {
  f(i, a[i]);
}

b[b.length - 2];
"symbol";
b[b.length - 1];
"symbol";
