//@ runBigIntEnabled

function assert(a) {}

function assertThrowSyntaxError(input) {
    try {
        eval(input);
    } catch (e) {}
}

// Test 0 conversions
let n = 0n;
assert(n === 0n);

n = 00n;
assert(n === 0n);

// Binary representation

n = 0b1111 n;
assert(n === 15n);

n = 0b10 n;
assert(n === 2n);

n = 0b010 n;
assert(n === 2n);

let binaryString = "0b1";
for (let i = 0; i < 128; i++)
    binaryString += "0";

n = eval(binaryString + "n");
assert(n === 340282366920938463463374607431768211456n);

n = 0B1111 n;
assert(n === 15n);

n = 0B10 n;
assert(n === 2n);

binaryString = "0B1";
for (let i = 0; i < 128; i++)
    binaryString += "0";

n = eval(binaryString + "n");
assert(n === 340282366920938463463374607431768211456n);

// Octal representation

n = 0o7 n;
assert(n === 7n);

n = 0o10 n;
assert(n === 8n);

n = 0o20 n;
assert(n === 16n);

n = 0o00020 n;
assert(n === 16n);

n = 0O7 n;
assert(n === 7n);

n = 0O10 n;
assert(n === 8n);

n = 0O20 n;
assert(n === 16n);

n = 0O20 n;
assert(n === 16n);

// Hexadecimal representation

n = 0xa n;
assert(n === 10n);

n = 0xff n;
assert(n === 255n);

n = 0x000ff n;
assert(n === 255n);

n = 0xfabc n;
assert(n === 64188n);

assertThrowSyntaxError("0b2n");
assertThrowSyntaxError("0b02n");
assertThrowSyntaxError("0b1nn");
assertThrowSyntaxError("0o89n");
assertThrowSyntaxError("0o08n");
assertThrowSyntaxError("0o7nn");
assertThrowSyntaxError("0xgn");
assertThrowSyntaxError("0x0gn");
assertThrowSyntaxError("0xfnn");
assertThrowSyntaxError("100nn");
assertThrowSyntaxError("1a0nn");
assertThrowSyntaxError("10E20n");

try {
    eval("--10n");
    assert(false);
} catch (e) {
    assert(e instanceof ReferenceError);
}