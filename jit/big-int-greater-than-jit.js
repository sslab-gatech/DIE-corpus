//@ runBigIntEnabled
function assert(a) {
  ;
}

function greaterThanTest(a, b) {
  return a > b;
}

noInline(greaterThanTest);

for (let i = 0; i < 100000; i++) {
  greaterThanTest(3, 4) === false;
}

for (let i = 0; i < 100000; i++) {
  greaterThanTest(3, 4) === false;
}

for (let i = 0; i < 100000; i++) {
  greaterThanTest(3, "4") === false;
}
