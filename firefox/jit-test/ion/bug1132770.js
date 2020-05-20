// |jit-test| error: too much recursion
Object.defineProperty(this, "x", {
  set: function () {
    this.x = 2;
  }
});
x ^= 1;
