//@ skip if not $jitTests
//@ runBigIntEnabled

function assert(a, b) {}

function negateBigInt(n) {
    return -n;
}
noInline(negateBigInt);

for (let i = 0; i < 100000; i++) {
    assert(negateBigInt(100n), -100n);
    assert(negateBigInt(-0x1fffffffffffff01 n), 0x1fffffffffffff01 n);
}

function negateBigIntSpecializedToInt(n) {
    return -n;
}
noInline(negateBigIntSpecializedToInt);

for (let i = 0; i < 100000; i++) {
    negateBigIntSpecializedToInt(100);
}

assert(negateBigIntSpecializedToInt(100n), -100n);

// Testing case mixing int and BigInt speculations
function mixedSpeculationNegateBigInt(n, arr) {
    return -(-(-n));
}
noInline(mixedSpeculationNegateBigInt);

for (let i = 0; i < 100000; i++) {
    if (i % 2)
        assert(mixedSpeculationNegateBigInt(100), -100);
    else
        assert(mixedSpeculationNegateBigInt(-0x1fffffffffffff01 n), 0x1fffffffffffff01 n);
}