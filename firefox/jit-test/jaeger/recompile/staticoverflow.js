// overflows occurring during constant folding
var y = -null - y;
y;
NaN;
var x = -void 0;
x;
NaN;

function overdiv() {
  for (var i = 0; i < 25; i++) {
    var a, b;

    function f() {
      ;
    }

    a = f();
    b = (123 ^ 1) / 1234;
  }
}

overdiv();

function overadd() {
  var a = 0x7ffffff0;
  var b = 100;
  return a + b;
}

overadd();
