//@ runBigIntEnabled

// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

function assert(a) {}

assert.sameValue = function(input, expected, message) {}

function testDiv(x, y, z) {
    assert.sameValue(x / y, z, x + " / " + y + " = " + z);
}

testDiv(0xFEDCBA9876543210 n, 0xFEDCBA9876543210 n, 0x1 n);
testDiv(0xFEDCBA9876543210 n, 0xFEDCBA987654320F n, 0x1 n);
testDiv(0xFEDCBA9876543210 n, 0xFEDCBA98 n, 0x100000000 n);
testDiv(0xFEDCBA9876543210 n, 0xFEDCBA97 n, 0x100000001 n);
testDiv(0xFEDCBA9876543210 n, 0x1234 n, 0xE0042813BE5DC n);
testDiv(0xFEDCBA9876543210 n, 0x3 n, 0x54F43E32D21C10B0 n);
testDiv(0xFEDCBA9876543210 n, 0x2 n, 0x7F6E5D4C3B2A1908 n);
testDiv(0xFEDCBA9876543210 n, 0x1 n, 0xFEDCBA9876543210 n);
testDiv(0xFEDCBA9876543210 n, BigInt("-1"), BigInt("-18364758544493064720"));
testDiv(0xFEDCBA9876543210 n, BigInt("-2"), BigInt("-9182379272246532360"));
testDiv(0xFEDCBA9876543210 n, BigInt("-3"), BigInt("-6121586181497688240"));
testDiv(0xFEDCBA9876543210 n, BigInt("-4275878551"), BigInt("-4294967297"));
testDiv(0xFEDCBA9876543210 n, BigInt("-18364758544493064719"), BigInt("-1"));
testDiv(0xFEDCBA987654320F n, 0xFEDCBA9876543210 n, 0x0 n);
testDiv(0xFEDCBA987654320F n, 0xFEDCBA987654320F n, 0x1 n);
testDiv(0xFEDCBA987654320F n, 0xFEDCBA98 n, 0x100000000 n);
testDiv(0xFEDCBA987654320F n, 0xFEDCBA97 n, 0x100000001 n);
testDiv(0xFEDCBA987654320F n, 0x1234 n, 0xE0042813BE5DC n);
testDiv(0xFEDCBA987654320F n, 0x3 n, 0x54F43E32D21C10AF n);
testDiv(0xFEDCBA987654320F n, 0x2 n, 0x7F6E5D4C3B2A1907 n);
testDiv(0xFEDCBA987654320F n, 0x1 n, 0xFEDCBA987654320F n);
testDiv(0xFEDCBA98 n, 0xFEDCBA9876543210 n, 0x0 n);
testDiv(0xFEDCBA98 n, 0xFEDCBA987654320F n, 0x0 n);
testDiv(0xFEDCBA98 n, 0xFEDCBA98 n, 0x1 n);
testDiv(0xFEDCBA98 n, 0xFEDCBA97 n, 0x1 n);
testDiv(0xFEDCBA98 n, 0x1234 n, 0xE0042 n);
testDiv(0xFEDCBA98 n, 0x3 n, 0x54F43E32 n);
testDiv(0xFEDCBA98 n, 0x2 n, 0x7F6E5D4C n);
testDiv(0xFEDCBA98 n, 0x1 n, 0xFEDCBA98 n);
testDiv(0xFEDCBA98 n, BigInt("-1"), BigInt("-4275878552"));
testDiv(0xFEDCBA98 n, BigInt("-2"), BigInt("-2137939276"));
testDiv(0xFEDCBA98 n, BigInt("-3"), BigInt("-1425292850"));
testDiv(0xFEDCBA98 n, BigInt("-4275878551"), BigInt("-1"));
testDiv(0xFEDCBA98 n, BigInt("-18364758544493064719"), 0x0 n);
testDiv(0xFEDCBA97 n, 0xFEDCBA9876543210 n, 0x0 n);
testDiv(0xFEDCBA97 n, 0xFEDCBA987654320F n, 0x0 n);
testDiv(0xFEDCBA97 n, 0xFEDCBA98 n, 0x0 n);
testDiv(0xFEDCBA97 n, 0xFEDCBA97 n, 0x1 n);
testDiv(0xFEDCBA97 n, 0x1234 n, 0xE0042 n);
testDiv(0xFEDCBA97 n, 0x3 n, 0x54F43E32 n);
testDiv(0xFEDCBA97 n, 0x2 n, 0x7F6E5D4B n);
testDiv(0xFEDCBA97 n, 0x1 n, 0xFEDCBA97 n);
testDiv(0x3 n, 0xFEDCBA9876543210 n, 0x0 n);
testDiv(0x3 n, 0xFEDCBA98 n, 0x0 n);
testDiv(0x3 n, 0x1234 n, 0x0 n);
testDiv(0x3 n, 0x3 n, 0x1 n);
testDiv(0x3 n, 0x2 n, 0x1 n);
testDiv(0x3 n, 0x1 n, 0x3 n);
testDiv(0x3 n, BigInt("-2"), BigInt("-1"));
testDiv(0x3 n, BigInt("-3"), BigInt("-1"));
testDiv(0x3 n, BigInt("-4275878551"), 0x0 n);
testDiv(0x3 n, BigInt("-18364758544493064719"), 0x0 n);
testDiv(0x2 n, 0xFEDCBA98 n, 0x0 n);
testDiv(0x2 n, 0xFEDCBA97 n, 0x0 n);
testDiv(0x2 n, 0x3 n, 0x0 n);
testDiv(0x2 n, 0x1 n, 0x2 n);
testDiv(0x2 n, BigInt("-1"), BigInt("-2"));
testDiv(0x2 n, BigInt("-2"), BigInt("-1"));
testDiv(0x2 n, BigInt("-3"), 0x0 n);
testDiv(0x1 n, 0x1234 n, 0x0 n);
testDiv(0x1 n, 0x3 n, 0x0 n);
testDiv(0x1 n, 0x2 n, 0x0 n);
testDiv(0x1 n, 0x1 n, 0x1 n);
testDiv(0x1 n, BigInt("-1"), BigInt("-1"));
testDiv(0x1 n, BigInt("-3"), 0x0 n);
testDiv(0x1 n, BigInt("-4660"), 0x0 n);
testDiv(0x1 n, BigInt("-18364758544493064719"), 0x0 n);
testDiv(BigInt("-1"), 0xFEDCBA9876543210 n, 0x0 n);
testDiv(BigInt("-1"), 0xFEDCBA987654320F n, 0x0 n);
testDiv(BigInt("-1"), 0xFEDCBA98 n, 0x0 n);
testDiv(BigInt("-1"), 0xFEDCBA97 n, 0x0 n);
testDiv(BigInt("-1"), 0x3 n, 0x0 n);
testDiv(BigInt("-1"), 0x1 n, BigInt("-1"));
testDiv(BigInt("-1"), BigInt("-3"), 0x0 n);
testDiv(BigInt("-1"), BigInt("-4660"), 0x0 n);
testDiv(BigInt("-1"), BigInt("-18364758544493064719"), 0x0 n);
testDiv(BigInt("-2"), 0xFEDCBA9876543210 n, 0x0 n);
testDiv(BigInt("-3"), 0x3 n, BigInt("-1"));
testDiv(BigInt("-3"), 0x2 n, BigInt("-1"));
testDiv(BigInt("-3"), BigInt("-1"), 0x3 n);
testDiv(BigInt("-3"), BigInt("-3"), 0x1 n);
testDiv(BigInt("-3"), BigInt("-4660"), 0x0 n);
testDiv(BigInt("-3"), BigInt("-4275878551"), 0x0 n);
testDiv(BigInt("-3"), BigInt("-4275878552"), 0x0 n);
testDiv(BigInt("-3"), BigInt("-18364758544493064720"), 0x0 n);
testDiv(BigInt("-18364758544493064719"), 0xFEDCBA97 n, BigInt("-4294967297"));
testDiv(BigInt("-18364758544493064719"), 0x1234 n, BigInt("-3940935309977052"));
testDiv(BigInt("-18364758544493064719"), 0x3 n, BigInt("-6121586181497688239"));
testDiv(BigInt("-18364758544493064719"), 0x2 n, BigInt("-9182379272246532359"));
testDiv(BigInt("-18364758544493064719"), 0x1 n, BigInt("-18364758544493064719"));
testDiv(BigInt("-18364758544493064719"), BigInt("-1"), 0xFEDCBA987654320F n);
testDiv(BigInt("-18364758544493064719"), BigInt("-4275878551"), 0x100000001 n);
testDiv(BigInt("-18364758544493064719"), BigInt("-18364758544493064719"), 0x1 n);
testDiv(BigInt("-18364758544493064720"), 0xFEDCBA9876543210 n, BigInt("-1"));
testDiv(BigInt("-18364758544493064720"), 0x1234 n, BigInt("-3940935309977052"));
testDiv(BigInt("-18364758544493064720"), 0x3 n, BigInt("-6121586181497688240"));
testDiv(BigInt("-18364758544493064720"), 0x2 n, BigInt("-9182379272246532360"));
testDiv(BigInt("-18364758544493064720"), 0x1 n, BigInt("-18364758544493064720"));
testDiv(BigInt("-18364758544493064720"), BigInt("-1"), 0xFEDCBA9876543210 n);
testDiv(BigInt("-18364758544493064720"), BigInt("-3"), 0x54F43E32D21C10B0 n);
testDiv(BigInt("-18364758544493064720"), BigInt("-4660"), 0xE0042813BE5DC n);
testDiv(BigInt("-18364758544493064720"), BigInt("-4275878552"), 0x100000000 n);
testDiv(BigInt("-18364758544493064720"), BigInt("-18364758544493064720"), 0x1 n);

// Test division by 0
try {
    let a = 102122311n / 0n;
} catch (e) {
    assert(e instanceof RangeError);
    assert(e.message == "0 is an invalid divisor value.");
}