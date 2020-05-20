//@ runBigIntEnabled
function assert(a) {
  ;
}

function greaterThanOrEqualTest(a, b) {
  return a >= b;
}

noInline(greaterThanOrEqualTest);

for (let i = 0; i < 100000; i++) {
  greaterThanOrEqualTest(3n, 4) === false;
}

for (let i = 0; i < 100000; i++) {
  greaterThanOrEqualTest(3n, 4n) === false;
}

for (let i = 0; i < 100000; i++) {
  greaterThanOrEqualTest(3n, "4") === false;
}
