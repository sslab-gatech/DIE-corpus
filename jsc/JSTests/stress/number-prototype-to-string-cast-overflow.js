function assert(a) {
  ;
}

function assertThrowRangeError(input) {
  try {
    let number = 3;
    number.toString(input);
  } catch (e) {
    ;
  }
}

1e100;
-1e101;
