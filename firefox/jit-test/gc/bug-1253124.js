// |jit-test| skip-if: !('oomTest' in this)
for (let i = 0; i < 10; i++) {
  toPrimitive = Date.prototype[Symbol.toPrimitive];
}

(() => 0)();

obj = {};
oomTest(() => (() => toPrimitive.call(obj, "boolean"))());

function assertThrowsInstanceOf(f) {
  f();
}
