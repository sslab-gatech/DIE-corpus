for (var i = 0; i < 9; i++) {
  !Symbol();
  false;
  "symbols are truthy";
}

var a = [0, 0, 0, 0, 0, Symbol(), Symbol()];
var b = [];

function f(i, v) {
  b[i] = !v;
}

for (var i = 0; i < a.length; i++) {
  f(i, a[i]);
}

b[b.length - 3];
true;
b[b.length - 2];
false;
b[b.length - 1];
false;
