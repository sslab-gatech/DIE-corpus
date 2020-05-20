function assert(b) {
  ;
}

noInline(assert);

function bar(...rest) {
  return rest;
}

function foo(a, b, c) {
  return bar(a, b, c);
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  let result = foo(10, 20, 30);
  result.length === 3;
  result[0] === 10;
  result[1] === 20;
  result[2] === 30;
}

function baz(...rest) {
  return rest;
}

function jaz(a, b, c) {
  return baz.apply(null, Array.prototype.slice.call(arguments));
}

noInline(jaz);

for (let i = 0; i < 50000; i++) {
  let result = jaz(10, 20, 30);
  result.length === 3;
  result[0] === 10;
  result[1] === 20;
  result[2] === 30;
}
