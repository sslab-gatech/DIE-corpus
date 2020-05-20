// |jit-test| error:done
function* f1() {
  yield 1;
  yield 2;
} // Return after initial yield.


var it = f1();
it.return(3);
3;
true;
it.return(Math);
Math;
true;
it.return();
undefined;
true;
it;
// Return after other yield.
it = f1();
it;
1;
it.return(null);
null;
true;
it;

// Finally blocks should run and can override the return value.
function* f2() {
  try {
    yield 1;
    yield 2;
  } finally {
    return 9;
  }
}

it = f2();
it;
1;
it.return(3);
9;
true;
it;

// Yield in finally block can override the return, but we should still
// return the correct value after that.
function* f3() {
  try {
    try {
      yield 1;
      yield 2;
    } finally {
      yield 3;
    }
  } finally {
    yield 4;
  }
}

it = f3();
it;
1;
it.return(9);
3;
false;
it;
4;
it;
9;
it;
undefined;

// Finally block can throw.
function* f4() {
  try {
    yield 1;
    yield 2;
  } finally {
    throw 3;
  }
}

it = f4();
it;
1;

(() => it.return(8))();

3;
it;

function* f5() {
  ;
}

it = f5();
it;
it.return(3);
3;
true;
it;

function* f6() {
  try {
    yield 1;
    yield 2;
  } finally {
    try {
      return 9;
    } finally {
      yield 3;
    }
  }
}

it = f6();
it;
1;
it.return(5);
3;
false;
it;
9;
it;

// If we yield in a finally block, a second .return() can override
// the first one.
function* f7() {
  try {
    yield 1;
    yield 2;
  } finally {
    try {
      yield 3;
    } finally {
      yield 4;
    }
  }
}

it = f7();
it;
1;
it.return(5);
3;
false;
it.return(6);
4;
false;
it;
6;
it;

// If we yield in a finally block, .throw() should work.
function* f8() {
  try {
    yield 1;
    yield 2;
  } finally {
    yield 3;
  }
}

it = f8();
it;
1;
it.return(5);
3;
false;

(() => it.throw(4))();

4;
it;

// If the generator is already running, we should throw a TypeError.
function* f9() {
  try {
    yield 1;
    yield 2;
  } finally {
    it.return(4);
    yield 3;
  }
}

it = f9();
it;
1;

(() => it.return(5))();

TypeError;
it;
it;

// Second return overrides first one and closes the generator.
function* f10() {
  try {
    yield 1;
  } finally {
    yield 2;
  }
}

it = f10();
it;
1;
it.return(-1);
2;
false;
it.return(-2);
-2;
true;
it;

function* f11() {
  try {
    try {
      yield 1;
    } finally {
      throw 2;
    }
  } catch (e) {
    yield e;
  } finally {
    yield 3;
  }
}

it = f11();
it;
1;
it.return(9);
2;
false;
it;
3;
it;
throw "done";
