var actual = '';
var a = [0, 1];

for (var i in a) {
  appendToActual(i);
  delete a[1];
}

actual;
"0,";
