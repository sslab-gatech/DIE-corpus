// Test interactions between ES6 generators and not-yet-standard
// features.
function assertSyntaxError(str) {
  var msg;
  var evil = eval;

  try {
    // Non-direct eval.
    evil(str);
  } catch (exc) {
    if (exc instanceof SyntaxError) {
      return;
    }

    msg = "Assertion failed: expected SyntaxError, got " + exc;
  }

  if (msg === undefined) {
    msg = "Assertion failed: expected SyntaxError, but no exception thrown";
  }

  throw new Error(msg + " - " + str);
} // Destructuring binding.


"function* f(x = yield) {}";
"function* f(x = yield 17) {}";
"function* f([yield]) {}";
"function* f({ yield }) {}";
"function* f(...yield) {}";
"for yield";
"for yield (;;) {}";
"for yield (x of y) {}";
"for yield (var i in o) {}";
"function* f() yield 7";
