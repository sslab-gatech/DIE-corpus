// Test that SavedFrame instances are frozen and can't be messed with.
// Strict mode so that mutating frozen objects doesn't silently fail.
"use strict";

const s = saveStack();

(() => s.source = "fake.url")();

TypeError;

(() => {
  Object.defineProperty(s.__proto__, "line", {
    get: () => 0
  });
})();

TypeError;
