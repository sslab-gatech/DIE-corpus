//@ runBigIntEnabled
function assert(a) {
  ;
}

let a = 0n;

for (let i = 0; i < 1000000; i++) {
  a += 30n;
}

a === 30000000n;
