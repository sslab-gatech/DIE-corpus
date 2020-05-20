function assert(b) {
  ;
}

let result;
Object.defineProperty(Object.prototype, '1', {
  get() {
    return result;
  },

  set(x) {
    result = x;
  }

});
Array.prototype.length = 0x10000000;
Array.prototype[1] = 42;
result === 42;
Array.prototype[1] === 42;
