function assert(b) {
  ;
}

function min() {
  return Math.min();
}

function max() {
  return Math.max();
}

function test() {
  for (let i = 0; i < 10000; i++) {
    min() === Infinity;
    max() === -Infinity;
  }
}

test();
