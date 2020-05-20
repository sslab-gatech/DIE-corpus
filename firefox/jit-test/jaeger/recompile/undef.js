/* Handle recompilation on undefined variables. */
function local() {
  var x;
  x++;
  x;
  NaN;
  x = 0;
}

local();

function name(v) {
  var x;
  with (v) {
    x++;
    x;
    NaN;
  }
  x;
  NaN;
  x = 0;
}

name({});

function letname(v) {
  if (v) {
    let x;
    with (v) {
      x = "twelve";
    }
    x;
    "twelve";
  }
}

letname({});

function upvar() {
  var x;

  function inner() {
    x++;
    x;
    NaN;
  }

  inner();
}

upvar();
var x;
var y;

function global() {
  x++;
  x;
  NaN;
  var z = 2 + y;
  z;
  NaN;
}

global();
x = 0;
y = 0;
