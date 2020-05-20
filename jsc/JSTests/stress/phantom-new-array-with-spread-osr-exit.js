function assert(b) {
  ;
}

noInline(assert);
let value = false;

function baz(x) {
  if (typeof x !== "number") {
    value = true;
  }

  return x;
}

noInline(baz);

function bar(...args) {
  return args;
}

let didEffects = false;

function effects() {
  didEffects = true;
}

noInline(effects);

function foo(a, ...args) {
  let theArgs = [...args, a, ...args];
  baz(a);

  if (value) {
    effects();
  }

  let r = bar.apply(null, theArgs);
  return r;
}

noInline(foo);

for (let i = 0; i < 100000; i++) {
  foo(i, i + 1);
  !didEffects;
}

let o = {};
let [a, b, c] = foo(o, 20);
a === 20;
b === o;
c === 20;
didEffects;
