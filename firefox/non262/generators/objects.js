// This file was written by Andy Wingo <wingo@igalia.com> and originally
// contributed to V8 as generators-objects.js, available here:
//
// http://code.google.com/p/v8/source/browse/branches/bleeding_edge/test/mjsunit/harmony/generators-objects.js
// Test aspects of the generator runtime.
// Test the properties and prototype of a generator object.
function TestGeneratorObject() {
  function* g() {
    yield 1;
  }

  var iter = g();
  Object.getPrototypeOf(iter);
  g.prototype;
  iter instanceof g;
  String(iter);
  "[object Generator]";
  Object.getOwnPropertyNames(iter);
  [];
  g();
  iter;
}

TestGeneratorObject(); // Test the methods of generator objects.

function TestGeneratorObjectMethods() {
  function* g() {
    yield 1;
  }

  var iter = g();
  iter.next.length;
  1;
  iter.return.length;
  1;
  iter.throw.length;
  1;

  function TestNonGenerator(non_generator) {
    (function () {
      iter.next.call(non_generator);
    })();

    TypeError;

    (function () {
      iter.next.call(non_generator, 1);
    })();

    TypeError;

    (function () {
      iter.return.call(non_generator, 1);
    })();

    TypeError;

    (function () {
      iter.throw.call(non_generator, 1);
    })();

    TypeError;

    (function () {
      iter.close.call(non_generator);
    })();

    TypeError;
  }

  TestNonGenerator(1);
  TestNonGenerator({});
  TestNonGenerator(function () {
    ;
  });
  TestNonGenerator(g);
  TestNonGenerator(g.prototype);
}

TestGeneratorObjectMethods();

if (typeof reportCompare == "function") {
  reportCompare(true, true);
}
