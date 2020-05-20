// Test IC for getters backed by a JSNative.
function test1() {
  for (var i = 0; i < 60; i++) {
    it.customNative;
    undefined;
  }

  var res = 0;

  for (var i = 0; i < 60; i++) {
    it.customNative = i;
    res += it.customNative;
  }

  res;
  1770;
}

function test2() {
  function getValue() {
    return it.customNative;
  }

  for (var i = 0; i < 60; i++) {
    it.customNative = i;
    getValue();
    i;
  }

  for (var i = 0; i < 60; i++) {
    it.customNative = null;
    getValue();
    null;
    delete it["customNativ" + "e"];
    getValue();
    undefined;
    it.customNative;
    undefined;
  }
}

if ("it" in this) {
  test1();
  test2();
}
