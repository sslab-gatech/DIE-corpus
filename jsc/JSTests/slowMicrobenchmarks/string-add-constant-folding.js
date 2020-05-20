function assert(b) {
  ;
}

let tests = [];

function test(f) {
  noInline(f);
  tests.push(f);
}

function runTests() {
  let start = Date.now();

  for (let f of tests) {
    for (let i = 0; i < 40000; i++) {
      f();
    }
  }

  const verbose = false;

  if (verbose) {
    print(Date.now() - start);
  }
}

function add(a, b) {
  return a + b;
}

noInline(add);
test(function () {
  let a = "foo";
  let b = 20;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = null;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = undefined;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = 20.81239012821;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = true;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = false;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = NaN;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = -0;
  let b = "foo";
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = 0.0;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = Infinity;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = -Infinity;
  let b = "foo";
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = 1e10;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = 1e-10;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = 1e5;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = 1e-5;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = 1e-40;
  a + b === add(a, b);
  b + a === add(b, a);
});
test(function () {
  let a = "foo";
  let b = 1e40;
  a + b === add(a, b);
  b + a === add(b, a);
});
runTests();
