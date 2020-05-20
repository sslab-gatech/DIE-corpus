function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
}

function test(value) {
  return Object.create(value);
}

noInline(test);

for (var i = 0; i < 1e4; ++i) {
  shouldThrow(() => {
    test(undefined);
  }, `TypeError: Object prototype may only be an Object or null.`);
}
