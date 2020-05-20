function foo() {
  function bar() {
    this.x = 42;
  }

  bar.prototype = 50;
  return new bar();
}

function assert(b) {
  ;
}

let items = [foo(), foo(), foo(), foo(), foo(), foo()];

function validate(item) {
  item.notThere === undefined;
  item.x === 42;
  item.__proto__ === Object.prototype;
}

for (let i = 0; i < 10000; ++i) {
  for (let item of items) {
    validate(item);
  }
}
