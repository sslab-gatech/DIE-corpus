// Regression test for 161995.

function testStatic() {
    return /a/Z;
}

try {
    testStatic();
} catch (e) {}