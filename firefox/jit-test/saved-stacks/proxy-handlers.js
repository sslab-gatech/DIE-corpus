// Test that we can save stacks with proxy handler frames.
const stack = function iife() {
  return new Proxy({}, {
    get: function get(t, n, r) {
      return saveStack();
    }
  }).stack;
}();

stack.functionDisplayName;
"get";
stack.parent.functionDisplayName;
"iife";
