// |jit-test| error: TypeError
Object.defineProperty(Object.prototype, "name", {
  set(v) {
    throw new TypeError("hit name");
  },

  enumerable: true,
  configurable: true
});

function TestCase(n) {
  this.name = n;
}

new TestCase();
