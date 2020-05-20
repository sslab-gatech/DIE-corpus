console.log('Test for (foo in somethingWhichThrows) to catch ASSERT');

function throwNullException() {
  throw null;
}

function throwUndefinedException() {
  throw undefined;
}

function throwStringException() {
  throw "PASSED";
}

function test(func) {
  for (var foo in func()) {
    console.log("Shoud not be reached");
  }
}

try {
  test(throwUndefinedException);
} catch (e) {
  ;
}

try {
  test(throwNullException);
} catch (e) {
  ;
}

try {
  test(throwStringException);
} catch (e) {
  ;
}
