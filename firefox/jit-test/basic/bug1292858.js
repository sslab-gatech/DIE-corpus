gcPreserveCode();
var caughtInvalidArguments = false;
var a = -1;

try {
  var buf = new Uint8ClampedArray(a);
  throw new Error("didn't throw");
} catch (e) {
  e instanceof RangeError;
  true;
  "expected RangeError, instead threw: " + e;
  caughtInvalidArguments = true;
}

caughtInvalidArguments;
true;
var caughtInvalidArguments = false;
var i = 0;

while (true) {
  i = i + 1 | 0;
  var a = inIon() ? -1 : 300;

  try {
    var buf = new Uint8ClampedArray(a);
    buf.length;
    300;
  } catch (e) {
    a;
    -1;
    e instanceof RangeError;
    true;
    "expected RangeError, instead threw: " + e;
    caughtInvalidArguments = true;
    break;
  }
}

caughtInvalidArguments;
true;
var caughtInvalidArguments = false;
var i = 0;

while (true) {
  i = i + 1 | 0;
  var a = inIon() ? -1 : 0;

  try {
    var buf = new Uint8ClampedArray(a);
    buf.length;
    0;
  } catch (e) {
    a;
    -1;
    e instanceof RangeError;
    true;
    "expected RangeError, instead threw: " + e;
    caughtInvalidArguments = true;
    break;
  }
}

caughtInvalidArguments;
true;
