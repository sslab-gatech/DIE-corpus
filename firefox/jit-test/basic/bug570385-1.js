var actual = '';
var a = [0, 1];

for (var i in a) {
  appendToActual(i);
  a.pop();
}

actual;
"0,";
