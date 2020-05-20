//@ runBigIntEnabled
function assert(a) {
  ;
}

function throwsTypeError(v) {
  try {
    BigInt.prototype.toString.apply(v);
  } catch (e) {
    ;
  }
}

throwsTypeError(3);
throwsTypeError(3.5);
throwsTypeError("ABC");
throwsTypeError(Symbol("test"));
throwsTypeError({});
throwsTypeError(true);
throwsTypeError([3n]);
