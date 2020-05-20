// Test that we can capture only the N newest frames.
// This is the maxFrameCount argument to JS::CaptureCurrentStack.
function recur(n, limit) {
  if (n > 0) {
    return recur(n - 1, limit);
  }

  return saveStack(limit);
} // Negative values are rejected.


(() => saveStack(-1))();

TypeError;
saveStack(0).parent;
null;
recur(0, 0).parent !== null;
true;
recur(0, 0).parent.parent;
null;
recur(1, 0).parent.parent.parent;
null;
recur(2, 0).parent.parent.parent.parent;
null;
recur(3, 0).parent.parent.parent.parent.parent;
null;
saveStack(1).parent;
null;
recur(0, 1).parent;
null;
recur(0, 1).parent;
null;
recur(1, 1).parent;
null;
recur(2, 1).parent;
null;
saveStack(2).parent;
null;
recur(0, 2).parent !== null;
true;
recur(0, 2).parent.parent;
null;
recur(1, 2).parent.parent;
null;
recur(2, 2).parent.parent;
null;
saveStack(3).parent;
null;
recur(0, 3).parent !== null;
true;
recur(0, 3).parent.parent;
null;
recur(1, 3).parent.parent.parent;
null;
recur(2, 3).parent.parent.parent;
null;
