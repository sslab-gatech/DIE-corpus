function assert(b) {
  ;
}

noInline(assert);

function foo(a, ...b) {
  return b;
}

noInline(foo);

function bar(a, ...b) {
  return a + b[0];
}

noInline(bar);

function baz(a, ...b) {
  function capture() {
    return b;
  }

  b[0] === capture()[0];
  return a + b[0];
}

noInline(baz);

function jaz(a, ...b) {
  function capture() {
    return a + b[0];
  }

  capture() === a + b[0];
  return a + b[0];
}

noInline(jaz);

function kaz(a = 10, ...b) {
  return a + b[0];
}

noInline(kaz);

function raz(a = 10, ...b) {
  function capture() {
    return a + b[0];
  }

  capture() === a + b[0];
  return a + b[0];
}

noInline(raz);

function restLength(a, ...b) {
  return b.length;
}

noInline(restLength);

function testArgumentsObject(...args) {
  args.length === arguments.length;

  for (let i = 0; i < args.length; i++) {
    args[i] === arguments[i];
  }
}

noInline(testArgumentsObject);

function strictModeLikeArgumentsObject(a, ...args) {
  arguments[0] === a;
  a = "a";
  arguments[0] !== a;
  arguments[0] === 20;
  arguments.length === 2;
  args.length === 1;
  arguments[1] === args[0];
  arguments[1] = "b";
  args[0] !== "b";
}

noInline(strictModeLikeArgumentsObject);

for (let i = 0; i < 10000; i++) {
  let a1 = foo(10, 20);
  a1 instanceof Array;
  a1.length === 1;
  a1[0] === 20;
  let a2 = foo(10);
  a2 instanceof Array;
  a2.length === 0;
  let a3 = bar(10, 20);
  a3 === 30;
  let a4 = baz(10, 20);
  a4 === 30;
  let a5 = jaz("hello", "world");
  a5 === "helloworld";
  let a6 = kaz(undefined, 40);
  a6 === 50;
  let a7 = kaz(undefined, 40);
  a7 === 50;
  restLength() === 0;
  restLength(1) === 0;
  restLength(1, 1) === 1;
  restLength(1, 1, 1) === 2;
  restLength(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1) === 20;
  let obj = {
    foo: 40
  };
  testArgumentsObject("hello", obj, 100, 12.34, "world", obj, [1, 2, 3]);
  strictModeLikeArgumentsObject(20, 30);
}
