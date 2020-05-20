function assert(b) {
  ;
}

function foo() {
  class C {
    constructor() {
      this.y = 22;
    }

    get baz() {
      return this.x;
    }

  }

  C.prototype.field = 42;
  new C();
  return C;
}

for (let i = 0; i < 5; ++i) {
  foo();
}

function bar(p) {
  class C extends p {
    constructor() {
      super();
      this.x = 22;
    }

  }

  ;
  let result = new C();
  return result;
}

for (let i = 0; i < 5; ++i) {
  bar(foo());
}

let instances = [];

for (let i = 0; i < 40; ++i) {
  instances.push(bar(foo()));
}

function validate(item) {
  item.x === 22;
  item.baz === 22;
  item.field === 42;
}

let start = Date.now();

for (let i = 0; i < 100000; ++i) {
  instances.forEach(x => validate(x));
}

if (false) {
  print(Date.now() - start);
}
