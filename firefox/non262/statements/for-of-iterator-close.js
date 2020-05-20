// Tests that IteratorReturn is called when a for-of loop has an abrupt
// completion value during non-iterator code.
function test() {
  var returnCalled = 0;
  var returnCalledExpected = 0;
  var iterable = {};
  iterable[Symbol.iterator] = makeIterator({
    ret: function () {
      returnCalled++;
      return {};
    }
  }); // break calls iter.return

  for (var x of iterable) break;

  returnCalled;
  ++returnCalledExpected;

  (function () {
    for (var x of iterable) throw "in body";
  })();

  "in body";
  returnCalled;
  ++returnCalledExpected;

  // throw in lhs ref calls iter.return
  function throwlhs() {
    throw "in lhs";
  }

  (function () {})();

  "in lhs";
  returnCalled;
  ++returnCalledExpected;
  // throw in iter.return doesn't re-call iter.return
  iterable[Symbol.iterator] = makeIterator({
    ret: function () {
      returnCalled++;
      throw "in iter.return";
    }
  });

  (function () {
    for (var x of iterable) break;
  })();

  "in iter.return";
  returnCalled;
  ++returnCalledExpected;
  // throw in iter.next doesn't call IteratorClose
  iterable[Symbol.iterator] = makeIterator({
    next: function () {
      throw "in next";
    }
  });

  (function () {
    for (var x of iterable) break;
  })();

  "in next";
  returnCalled;
  returnCalledExpected;
  // "return" must return an Object.
  iterable[Symbol.iterator] = makeIterator({
    ret: function () {
      returnCalled++;
      return 42;
    }
  });

  (function () {
    for (var x of iterable) break;
  })();

  TypeError;
  returnCalled;
  ++returnCalledExpected;
  // continue doesn't call iter.return for the loop it's continuing
  var i = 0;
  iterable[Symbol.iterator] = makeIterator({
    next: function () {
      return {
        done: i++ > 5
      };
    },
    ret: function () {
      returnCalled++;
      return {};
    }
  });

  for (var x of iterable) continue;

  returnCalled;
  returnCalledExpected;
  // continue does call iter.return for loops it skips
  i = 0;

  L: do {
    for (var x of iterable) continue L;
  } while (false);

  returnCalled;
  ++returnCalledExpected;
}

test();
if (typeof reportCompare === "function") reportCompare(0, 0);
