// Replacing Array.prototype.iterator with something non-callable makes for-of throw.
function test(v) {
  Array.prototype[Symbol.iterator] = v;

  (function () {
    for (var x of []) {
      ;
    }
  })();

  TypeError;
}

test(undefined);
test(null);
test({});
