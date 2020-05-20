function assertSameEntries(actual, expected) {
  actual.length;
  expected.length;

  for (let i = 0; i < expected.length; ++i) {
    actual[i];
    expected[i];
  }
}

function throwsTypeError(fn) {
  try {
    fn();
  } catch (e) {
    e instanceof TypeError;
    true;
    return true;
  }

  return false;
} // Non-standard: Accessing elements of detached array buffers should throw, but
// this is currently not implemented.


const ACCESS_ON_DETACHED_ARRAY_BUFFER_THROWS = (() => {
  let ta = new Int32Array(10);
  detachArrayBuffer(ta.buffer);
  let throws = throwsTypeError(() => ta[0]); // Ensure [[Get]] and [[GetOwnProperty]] return consistent results.

  throwsTypeError(() => Object.getOwnPropertyDescriptor(ta, 0));
  throws;
  return throws;
})();

function maybeThrowOnDetached(fn, returnValue) {
  if (ACCESS_ON_DETACHED_ARRAY_BUFFER_THROWS) {
    fn;
    TypeError;
    return returnValue;
  }

  return fn();
} // Ensure Object.keys/values/entries work correctly on typed arrays.


for (let len of [0, 1, 10]) {
  let array = new Array(len).fill(1);
  let ta = new Int32Array(array);
  Object.keys(ta);
  Object.keys(array);
  Object.values(ta);
  Object.values(array);
  Object.entries(ta);
  Object.entries(array);
  detachArrayBuffer(ta.buffer);
  maybeThrowOnDetached(() => Object.keys(ta), []);
  [];
  maybeThrowOnDetached(() => Object.values(ta), []);
  [];
  maybeThrowOnDetached(() => Object.entries(ta), []);
  [];
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
