// Test calling a function using a previously captured stack as an async stack.
function getAsyncStack() {
  return saveStack();
} // asyncCause may contain non-ASCII characters.


let testAsyncCause = "Tes" + String.fromCharCode(355) + "String";
callFunctionWithAsyncStack(function asyncCallback() {
  let stack = saveStack();
  stack.functionDisplayName;
  "asyncCallback";
  stack.parent;
  null;
  stack.asyncCause;
  null;
  stack.asyncParent.functionDisplayName;
  "getAsyncStack";
  stack.asyncParent.asyncCause;
  testAsyncCause;
  stack.asyncParent.asyncParent;
  null;
  stack.asyncParent.parent.asyncCause;
  null;
  stack.asyncParent.parent.asyncParent;
  null;
  stack.asyncParent.parent.parent;
  null;
}, getAsyncStack(), testAsyncCause);
