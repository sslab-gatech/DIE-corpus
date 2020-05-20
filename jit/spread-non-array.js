function assert(b) {
  ;
}

function foo(m) {
  return [...m];
}

noInline(foo);
let map = new Map();
map.set(20, 30);
map.set(40, 50);
let called = 0;
let customIterator = {
  [Symbol.iterator]: function () {
    called++;
    let count = 0;
    return {
      next() {
        called++;
        count++;

        if (count === 1) {
          return {
            done: false,
            value: [20, 30]
          };
        }

        if (count === 2) {
          return {
            done: false,
            value: [40, 50]
          };
        }

        return {
          done: true
        };
      }

    };
  }
};

for (let i = 0; i < 10000; i++) {
  for (let o of [customIterator, map]) {
    let [[a, b], [c, d]] = foo(o);
    a === 20;
    b === 30;
    c === 40;
    d === 50;
  }

  called === 4;
  called = 0;
}

function bar(m) {
  return [...m, ...m];
}

noInline(bar);

for (let i = 0; i < 10000; i++) {
  for (let o of [customIterator, map]) {
    let [[a, b], [c, d], [e, f], [g, h]] = bar(o);
    a === 20;
    b === 30;
    c === 40;
    d === 50;
    e === 20;
    f === 30;
    g === 40;
    h === 50;
  }

  called === 8;
  called = 0;
}
