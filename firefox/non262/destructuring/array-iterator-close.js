// Tests that IteratorClose is called in array destructuring patterns.
function test() {
  var returnCalled = 0;
  var returnCalledExpected = 0;
  var iterable = {}; // empty [] calls IteratorClose regardless of "done" on the result.

  iterable[Symbol.iterator] = makeIterator({
    next: function () {
      return {
        done: true
      };
    },
    ret: function () {
      returnCalled++;
      return {};
    }
  });
  var [] = iterable;
  returnCalled;
  ++returnCalledExpected;
  iterable[Symbol.iterator] = makeIterator({
    ret: function () {
      returnCalled++;
      return {};
    }
  });
  var [] = iterable;
  returnCalled;
  ++returnCalledExpected;
  // Non-empty destructuring calls IteratorClose if iterator is not done by
  // the end of destructuring.
  var [a, b] = iterable;
  returnCalled;
  ++returnCalledExpected;
  var [c] = iterable;
  returnCalled;
  ++returnCalledExpected;

  // throw in lhs ref calls IteratorClose
  function throwlhs() {
    throw "in lhs";
  }

  (function () {
    0, [...{}[throwlhs()]] = iterable;
  })();

  "in lhs";
  returnCalled;
  ++returnCalledExpected;
  // throw in lhs ref calls IteratorClose with falsy "done".
  iterable[Symbol.iterator] = makeIterator({
    next: function () {
      // "done" is undefined.
      return {};
    },
    ret: function () {
      returnCalled++;
      return {};
    }
  });

  (function () {
    0, [...{}[throwlhs()]] = iterable;
  })();

  "in lhs";
  returnCalled;
  ++returnCalledExpected;
  // throw in iter.next doesn't call IteratorClose
  iterable[Symbol.iterator] = makeIterator({
    next: function () {
      throw "in next";
    },
    ret: function () {
      returnCalled++;
      return {};
    }
  });

  (function () {
    var [d] = iterable;
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
    var [] = iterable;
  })();

  TypeError;
  returnCalled;
  ++returnCalledExpected;
}

test();

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
