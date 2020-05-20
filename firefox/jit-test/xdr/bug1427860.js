// |jit-test| skip-if: !('oomAtAllocation' in this)
let x = cacheEntry("function inner() { return 3; }; inner()");
evaluate(x, {
  saveIncrementalBytecode: true
});

try {
  // Fail XDR decode with partial script
  evaluate(x, {
    loadBytecode: true
  });
} catch {
  ;
}
