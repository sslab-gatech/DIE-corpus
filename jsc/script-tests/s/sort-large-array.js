console.log("This tests sorting an array with more than 10,000 values.");
var test = [];

for (var i = 0; i < 10010; i++) {
  test.push(10009 - i);
}

test.sort(function (a, b) {
  return a - b;
});
test.length;
test[9999];
test[10000];
test.slice(0, 20).join(', ');
test.slice(9990, 10010).join(', ');
var testNoValues = [];
testNoValues.length = 10110;
testNoValues.sort(function (a, b) {
  return a < b;
});
testNoValues.length;
testNoValues[9999];
testNoValues[10000];
