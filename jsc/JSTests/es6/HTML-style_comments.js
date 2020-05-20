function test() {
  var a = 3;
  return a === 3;
}

if (!test()) {
  throw new Error("Test failed");
}
