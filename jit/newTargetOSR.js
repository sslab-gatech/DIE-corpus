function testOSRNewTarget(expected) {
  for (let i = 0; i < 1100; i++) {
    new.target;
    expected;
  }
}

new testOSRNewTarget(testOSRNewTarget);
