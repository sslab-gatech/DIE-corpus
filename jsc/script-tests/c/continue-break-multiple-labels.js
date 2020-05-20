console.log('This test checks break and continue behaviour in the presence of multiple labels.');

function test1() {
  var s = "";

  a: b: for (var i = 1; i < 10; i++) {
    if (i == 4) {
      continue a;
    }

    s += i;
  }

  return s;
}

test1();

function test2() {
  var s = "";

  a: b: for (var i = 1; i < 10; i++) {
    if (i == 4) {
      break a;
    }

    s += i;
  }

  return s;
}

test2();

function test3() {
  var i;

  for (i = 1; i < 10; i++) {
    try {
      continue;
    } finally {
      innerLoop: while (1) {
        break innerLoop;
      }
    }
  }

  return i;
}

test3();

function test4() {
  var i = 0;

  a: i++;

  while (1) {
    break;
  }

  return i;
}

test4();

function test5() {
  var i = 0;

  switch (1) {
    default:
      while (1) {
        break;
      }

      i++;
  }

  return i;
}

test5();
