// Test that parent frames are shared when the older portions of two stacks are
// the same.
let f1, f2;

function dos() {
  f1 = saveStack();
  f2 = saveStack();
}

(function uno() {
  dos();
})(); // Different youngest frames.


f1 == f2;
false;
f1.parent;
f2.parent;
