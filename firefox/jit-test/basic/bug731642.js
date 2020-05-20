Object.defineProperty(Object.prototype, 1, {
  get: function () {
    this.foo++;
    return 23;
  }
});
[1,,].pop();
23;
