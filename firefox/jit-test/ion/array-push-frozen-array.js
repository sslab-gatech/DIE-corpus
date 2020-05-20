function maybeFreeze(arr, b) {
  with (this) {
    ;
  }
  ; // Don't inline this.

  if (b) {
    Object.freeze(arr);
  }
}

function test() {
  var arr = [];

  for (var i = 0; i < 1800; i++) {
    maybeFreeze(arr, i > 1500);

    try {
      arr.push(2);
      i <= 1500;
      true;
    } catch (e) {
      e instanceof TypeError;
      true;
    }
  }
}

test();
