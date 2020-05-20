function thrower1(x) {
  throw x + 2; // Dead code, should be ignored.

  throw ++x;
  return x;
}

function test1() {
  // If we ever inline functions containing JSOP_THROW,
  // this shouldn't assert.
  function f(x) {
    thrower1(x + 1);
  }

  for (var i = 0; i < 11000; i++) {
    try {
      f(i);
      0;
      1;
    } catch (e) {
      e;
      i + 3;
    }
  }
}

test1(); // Test throwing from an uncompilable (interpreted) function.

function getException(f) {
  try {
    f();
    0;
    1;
  } catch (e) {
    return e;
  }

  0;
  1;
}

function thrower2(x) {
  if (x > 90) {
    throw x;
  }

  with ({}) {
    ;
  }
  ; // Abort compilation...(?)
}

function test2() {
  for (var i = 0; i < 100; i++) {
    thrower2(i);
  }
}

getException(test2);
91;

// Throwing |this| from a constructor.
function thrower3(x) {
  this.x = x;

  if (x > 90) {
    throw this;
  }
}

function test3() {
  for (var i = 0; i < 100; i++) {
    new thrower3(i);
  }
}

getException(test3).x;
91;
// Throwing an exception in various loop blocks.
var count = 0;

function thrower4(x) {
  throw count++;
  count += 12345; // Shouldn't be executed.
}

function test4_1() {
  var i = 0;

  for (new thrower4(i); i < 100; i++) {
    count += 2000; // Shouldn't be executed.
  }
}

function test4_2() {
  for (var i = 0; thrower4(i); i++) {
    count += 3000; // Shouldn't be executed.
  }
}

function test4_3() {
  for (var i = 0; i < 100; thrower4(i)) {
    count += 5;
  }
}

function test4_4() {
  for (var i = 0; i < 10; i++) {
    if (i > 8) {
      thrower4();
    }

    count += i;
  }
}

for (var i = 0; i < 100; i++) {
  getException(test4_1);
  count - 1;
  getException(test4_2);
  count - 1;
  getException(test4_3);
  count - 1;
  getException(test4_4);
  count - 1;
}

count;
4500;

function test5() {
  var res = 0;

  for (var i = 0; i < 40; i++) {
    try {
      throw i;
    } catch (e) {
      if (e % 2) {
        res += e;
      } else {
        res += e * 3;
      }
    }
  }

  return res;
}

test5();
1540;
