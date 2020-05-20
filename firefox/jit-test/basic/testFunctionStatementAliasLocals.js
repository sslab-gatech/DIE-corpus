function f1(b) {
  var w = 3;

  if (b) {
    function w() {
      ;
    }
  }

  return w;
}

typeof f1(true);
"function";
f1(false)();
3;

function f2(b, w) {
  // Annex B doesn't apply to functions in blocks with the same name as a
  // parameter.
  if (b) {
    function w() {
      ;
    }
  }

  return w;
}

typeof f2(true, 3);
"number";
f2(false, 3)();
3;
