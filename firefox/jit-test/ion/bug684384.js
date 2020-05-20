// Labeled break tests.
function f1() {
  foo: if ([1]) {
    bar: for (var i = 0; i < 100; i++) {
      if (i > 60) {
        break foo;
      }
    }

    0;
    1;
  }

  i;
  61;
  return true;
}

f1();
true;

// Label with no breaks.
function f2() {
  foo: if ([1]) {
    for (var i = 0; i < 100; i++) {
      ;
    }
  }

  i;
  100;
  return true;
}

f2();
true;

// No breaks and early return.
function f3() {
  foo: {
    if (true) {
      for (var i = 0; i < 100; i++) {
        ;
      }
    }

    return false;
  }

  i;
  100;
  return true;
}

f3();
false;

// Multiple breaks.
function f4() {
  foo: {
    if (true) {
      for (var i = 0; i < 100; i++) {
        if (i > 70) {
          break foo;
        }
      }

      if (i > 80) {
        break foo;
      }
    }

    break foo;
  }

  i;
  71;
  return true;
}

f4();
true;
