//test no assert
function testBug465688() {
  for (let d of [-0x80000000, -0x80000000]) {
    - -d;
  }

  return true;
}

testBug465688();
true;
