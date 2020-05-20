//@ runBigIntEnabled

let assert = {
    sameValue: function(i, e, m) {
        if (i !== e)
            throw new Error(m);
    }
}

function bigIntBitAnd(a, b) {
    return (a & b) & (a & 0b11 n);

}
noInline(bigIntBitAnd);

for (let i = 0; i < 10000; i++) {
    let r = bigIntBitAnd(0b11 n, 0b1010 n);
    assert.sameValue(r, 0b10 n, 0b11 n + " & " + 0b1010 n + " = " + r);
}