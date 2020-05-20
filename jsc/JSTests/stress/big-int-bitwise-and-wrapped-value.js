//@ runBigIntEnabled

assert = {
    sameValue: function(input, expected, message) {
        if (input !== expected)
            throw new Error(message);
    }
};

function testBitAnd(x, y, z, message) {
    assert.sameValue(x & y, z, message);
    assert.sameValue(y & x, z, message);
}

testBitAnd(Object(0b10 n), 0b01 n, 0b00 n, "ToPrimitive: unbox object with internal slot");

let o = {
    [Symbol.toPrimitive]: function() {
        return 0b10 n;
    }
};
testBitAnd(o, 0b01 n, 0b00 n, "ToPrimitive: @@toPrimitive");

o = {
    valueOf: function() {
        return 0b10 n;
    }
};
testBitAnd(o, 0b01 n, 0b00 n, "ToPrimitive: valueOf");

o = {
    toString: function() {
        return 0b10 n;
    }
}
testBitAnd(o, 0b01 n, 0b00 n, "ToPrimitive: toString");