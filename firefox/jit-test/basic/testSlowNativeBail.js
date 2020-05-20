function testSlowNativeBail() {
  var a = ['0', '1', '2', '3', '+'];

  try {
    for (var i = 0; i < a.length; i++) {
      new RegExp(a[i]);
    }

    true;
    false;
  } catch (exc) {
    exc instanceof SyntaxError;
    true;
  }
}

testSlowNativeBail();
