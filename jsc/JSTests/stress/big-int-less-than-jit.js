//@ runBigIntEnabled
function assert(a) {
  ;
}

function lessThanTest(a, b) {
  return a < b;
}

noInline(lessThanTest);

for (let i = 0; i < 100000; i++) {
  lessThanTest(3n, 4) === true;
}

for (let i = 0; i < 100000; i++) {
  lessThanTest(3n, 4n) === true;
}

for (let i = 0; i < 100000; i++) {
  lessThanTest(3n, "4") === true;
}
