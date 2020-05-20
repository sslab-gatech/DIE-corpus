console.log("This tests that floating point math supports for denormalized numbers.");
var count = 0;
var value = 1;

while (value / 2) {
  value /= 2;
  ++count;
}

if (count == 1074) {
  console.log("PASS");
} else {
  console.log("FAIL: expected 1074, actual " + count);
}
