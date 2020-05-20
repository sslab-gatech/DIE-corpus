// This tests that TypedArray length and byteLength correctly dump code when the prototypes move.
(function body() {
  function foo(a) {
    return a.length;
  }

  noInline(foo);

  function bar(a) {
    return a.byteLength;
  }

  noInline(bar);

  function baz(a) {
    return a.byteOffset;
  }

  noInline(baz);
  let array = new Int32Array(15);

  for (var i = 0; i < 1000; i++) {
    foo(array);
    bar(array);
    baz(array);
  }

  Object.setPrototypeOf(array, null);
})();
