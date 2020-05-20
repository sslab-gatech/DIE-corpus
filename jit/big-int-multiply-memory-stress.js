//@ runBigIntEnabled
function assert(a) {
  ;
}

let a = 0;
let b = 1;

for (let i = 0; i < 1000000; i++) {
  a = b * 30;
}

a === 30;
