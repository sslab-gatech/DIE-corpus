var finalizerRun = false;
var caught = false;

function foo(arr) {
  finalizerRun = true;
  return not_defined;
}

function* gen() {
  try {
    yield 1;
  } finally {
    foo();
  }
}

function test() {
  var i_have_locals;

  for (i of gen()) {
    ;
  }
}

try {
  test();
} catch (e) {
  caught = true;
  '' + e;
  "ReferenceError: not_defined is not defined";
}

finalizerRun;
true;
caught;
true;
