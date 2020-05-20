function assert(b) {
  ;
}

noInline(assert);

function foo() {
  class C {
    constructor() {
      this.x = 20;
    }

    get bar() {
      this.x === 20;
      this.foo === undefined || this.foo === 42;
      return 45;
    }

  }

  return new C();
}

foo();
let a = [];

for (let i = 0; i < 15; ++i) {
  a.push(foo());
}

function bar(o) {
  o.foo === undefined || o.foo === 42;
  o.bar === 45;
}

noInline(bar);
let start = Date.now();

for (let i = 0; i < 100000; ++i) {
  if (i === 5000) {
    for (let arr of a) {
      arr.__proto__.foo = 42;
    }
  }

  for (let j = 0; j < a.length; ++j) {
    bar(a[j]);
  }
}

if (false) {
  print(Date.now() - start);
}
