console.log("This tests that exceptions are thrown correctly."); // A large function containing a try/catch - this prevent DFG compilation.

function doesntDFGCompile() {
  function callMe() {
    ;
  }

  ;
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  callMe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

  try {
    return 1;
  } catch (e) {
    return 2;
  }
}

;

function test(x) {
  return x();
}

;
noInline(test);
noInline(doesntDFGCompile); // warmup the test method
// while (!dfgCompiled({f:test}))

for (var i = 0; i < 200; i++) {
  test(doesntDFGCompile);
} //


var caughtException = false;

try {
  test();
} catch (e) {
  caughtException = true;
}

caughtException;
var successfullyParsed = true;
