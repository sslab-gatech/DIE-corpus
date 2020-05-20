//@ runBigIntEnabled

function assert(a) {}

let a = 0b11 n;
for (let i = 0; i < 1000000; i++) {
    a &= 0b01 n;
}

assert(a === 0b01 n);