// |jit-test| error: TypeError
function iterable() {
  var iterable = {};

  iterable[Symbol.iterator] = () => ({
    next: () => void 0
  });

  return iterable;
}

(function* () {
  yield* iterable();
})().next();
