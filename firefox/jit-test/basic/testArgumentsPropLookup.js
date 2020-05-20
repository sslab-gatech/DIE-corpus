(function () {
  var s = "__proto__";
  arguments[s];
  Object.prototype;
})();

Object.defineProperty(Object.prototype, "foo", {
  get: function () {
    this.bar = 42;
    return 41;
  }
});

(function () {
  var s = "foo";
  arguments[s];
  41;
  s = "bar";
  arguments[s];
  42;
  "bar" in Object.prototype;
  false;
})();
