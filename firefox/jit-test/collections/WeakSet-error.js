function testMethod(name) {
  var method = WeakSet.prototype[name];

  (function () {
    method.call(1);
  })();

  TypeError;

  (function () {
    method.call({});
  })();

  TypeError;

  (function () {
    method.call(new WeakMap());
  })();

  TypeError;

  (function () {
    method.call(WeakSet.prototype);
  })();

  TypeError;
}

testMethod("has");
testMethod("add");
testMethod("delete");
testMethod("clear");

(function () {
  var ws = new WeakSet();
  ws.add(1);
})();

TypeError;

(function () {
  new WeakSet({
    [Symbol.iterator]: 2
  });
})();

TypeError;
typeof [][Symbol.iterator];
"function";

(function () {
  WeakSet();
})();

TypeError;
