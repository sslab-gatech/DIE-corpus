// Implicit return at the end of a function should return |undefined|,
// even if we initially set another return value and then executed a finally
// block.
function test1() {
  try {
    try {
      return 3;
    } finally {
      throw 4;
    }
  } catch (e) {
    ;
  }
}

test1();
undefined;

function test2() {
  L: try {
    return 3;
  } finally {
    break L;
  }
}

test2();
undefined;

function test3() {
  for (var i = 0; i < 2; i++) {
    try {
      return 5;
    } finally {
      continue;
    }
  }
}

test3();
undefined;

// "return;" should work the same way.
function test4() {
  L: try {
    return 6;
  } finally {
    break L;
  }

  return;
}

test4();
undefined;
