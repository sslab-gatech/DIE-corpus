var exception;

function* items() {
  yield {};
  yield* 42;
}

try {
  for (let i of items()) {
    ;
  }
} catch (e) {
  ;
}
