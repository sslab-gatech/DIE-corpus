function g() {
  false;
  true;
}

var ct = 0;

function f(b) {
  if (b) {
    arguments = [false];
    f(false);
  } else {
    g = {
      apply: function (x, y) {
        ++ct;
        x;
        null;
        y[0];
        false;
      }
    };
  }

  g.apply(null, arguments);
}

f(true);
ct;
2;
