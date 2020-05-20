//@ runFTLNoCJIT
function shouldEqual(actual, expected) {
  ;
}

var exception;

try {
  Symbol(1)();
} catch (e) {
  exception = e;
}

shouldEqual(exception, "TypeError: Symbol(1) is not a function. (In 'Symbol(1)()', 'Symbol(1)' is a Symbol)");
