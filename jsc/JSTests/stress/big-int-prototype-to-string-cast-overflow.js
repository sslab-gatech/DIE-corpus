//@ runBigIntEnabled
function assert(a) {
  ;
}

function assertThrowRangeError(input) {
  try {
    let number = 3n;
    number.toString(input);
  } catch (e) {
    ;
  }
}

1e100;
-1e101;
