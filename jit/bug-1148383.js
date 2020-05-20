// This testcase tests setting object metadata for objects created from JIT
// code.
function TestCase() {
  ;
}

function reportCompare() {
  var output = "";
  var testcase = new TestCase();
  testcase.reason = output;
}

reportCompare();
gczeal(4, 1000);

for (var i = 0; i < 10000; ++i) {
  reportCompare();
}
