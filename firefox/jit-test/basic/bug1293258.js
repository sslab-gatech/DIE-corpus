try {
  function test() {
    var arr = new Int8Array(400);
    var o = new test(true);
    arr[idx] = 9;
  }

  test();
} catch (e) {
  "" + e;
  "InternalError: too much recursion";
}
