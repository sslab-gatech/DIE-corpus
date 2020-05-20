console.log("This test checks that variable declarations with initializers inside of catch and with blocks do not set values in a deeper scope.");

function catchTest() {
  var e = "foo";

  try {
    throw "bar";
  } catch (e) {
    var e = "baz";
  }

  return e;
}

function catchTest2() {
  var e = "foo";

  try {
    throw "bar";
  } catch (e) {
    var e = "baz";
    return e;
  }
}

function withTest() {
  var e = "foo";
  var object = {
    'e': "bar"
  };
  with (object) {
    var e = "baz";
  }
  return e;
}

function withTest2() {
  var e = "foo";
  var object = {
    'e': "bar"
  };
  with (object) {
    var e = "baz";
    return e;
  }
}

catchTest();
catchTest2();
withTest();
withTest2();
