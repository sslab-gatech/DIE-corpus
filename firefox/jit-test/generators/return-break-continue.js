// break in finally.
function* f1() {
  L: try {
    yield 1;
  } finally {
    break L;
  }

  return 2;
}

it = f1();
it;
1;
it.return(4);
2;
true;
it;

// continue in finally, followed by return.
function* f2() {
  do {
    try {
      yield 1;
    } catch (e) {
      0;
      1;
    } finally {
      continue;
    }
  } while (0);

  return 2;
}

it = f2();
it;
1;
it.return(4);
2;
true;
it;

// continue in finally, followed by yield.
function* f3() {
  do {
    try {
      yield 1;
    } catch (e) {
      0;
      1;
    } finally {
      continue;
    }
  } while (0);

  yield 2;
}

it = f3();
it;
1;
it.return(4);
2;
false;
it;

// continue in finally.
function* f4() {
  var i = 0;

  while (true) {
    try {
      yield i++;
    } finally {
      if (i < 3) {
        continue;
      }
    }
  }
}

it = f4();
it;
0;
it.return(-1);
1;
false;
it.return(-2);
2;
false;
it.return(-3);
-3;
true;
it;
