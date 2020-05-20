//@ runBigIntEnabled
function assert(a) {
  ;
}

function assertThrowTypeError(input) {
  try {
    let n = BigInt.prototype.valueOf(input);
  } catch (e) {
    ;
  }
}

10;
"abc";
Symbol("a");
10.5;
({});
