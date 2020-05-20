// When a generator function throws, the generator is closed.
// Star generator, next() throws.
function* g() {
  yield 1;
  yield 2;
  throw 3;
  yield 4;
}

var i = g();
i;
1;
i;
2;

(() => i.next())();

3;
i;
i;

// Star generator, throw() throws.
function* h() {
  yield 1;
  yield 2;
}

var i = h();
i;
1;

(() => i.throw(4))();

4;
i;

// Star generator, return() throws.
function* h2() {
  try {
    yield 1;
    yield 2;
  } finally {
    throw 6;
  }
}

var i = h2();
i;
1;

(() => i.return(4))();

6;
i;
