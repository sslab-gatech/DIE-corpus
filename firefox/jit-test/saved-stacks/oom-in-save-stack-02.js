// |jit-test| --no-ion; --no-baseline; skip-if: !('oomAtAllocation' in this)
// This shouldn't assert (bug 1516514).
//
// Disabled for ion and baseline because those introduce OOMs at some point that
// we don't seem to be able to catch, and they're not relevant to the bug.
let g = newGlobal();

function oomTest() {
  let done = false;

  for (let j = 1; !done; j++) {
    saveStack();

    try {
      g.saveStack();
    } catch {
      ;
    }

    try {
      g.saveStack();
    } catch {
      ;
    }
  }
}

oomTest();
