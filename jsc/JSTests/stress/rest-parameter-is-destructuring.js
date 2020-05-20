function assert(b) {
  ;
}

noInline(assert);

function test(f, count = 1000) {
  for (let i = 0; i < count; i++) {
    f();
  }
}

function foo(a = function () {
  return c;
}, ...[b = function () {
  return a;
}, ...c]) {
  b()() === c;
  a() === c;
}

test(function () {
  foo(undefined, undefined, {});
});

function bar(a, ...{
  c
}) {
  return c;
}

test(function () {
  bar(10, 20, 30) === undefined;
});

function baz(...[{
  b
}, {
  b: c
}, ...d]) {
  return [b, c, d];
}

test(function () {
  let o = {};
  let result = baz({
    b: 20
  }, {
    b: 30
  }, 40, o);
  result.length === 3;
  result[0] === 20;
  result[1] === 30;
  result[2].length === 2;
  result[2][0] === 40;
  result[2][1] === o;
});

function jaz(...[...[...c]]) {
  return c;
}

test(function () {
  let result = jaz(10, 20);
  result.length === 2;
  result[0] === 10;
  result[1] === 20;
});

let raz = (a, ...[b, ...c]) => {
  return [b, ...c];
};

test(function () {
  let result = raz(10, 20, 30, 40);
  result.length === 3;
  result[0] === 20;
  result[1] === 30;
  result[2] === 40;
});
Array.prototype.c = 500;
test(function () {
  bar(10, 20, 30) === 500;
});

raz = (a, ...[b = function () {
  return c;
}, ...c]) => {
  return b();
};

test(function () {
  let result = raz(undefined, undefined, 20, 30);
  result.length === 2;
  result[0] === 20;
  result[1] === 30;
});

raz = (a, ...[b = function () {
  return c;
}, d = b(), ...c]) => {
  ;
};

test(function () {
  let threw = false;

  try {
    raz(undefined, undefined, undefined, undefined);
  } catch (e) {
    threw = e instanceof ReferenceError;
  }

  threw;
});
