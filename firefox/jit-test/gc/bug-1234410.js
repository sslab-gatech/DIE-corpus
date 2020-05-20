// |jit-test| skip-if: !('oomTest' in this)
oomTest(() => {
  try {
    for (var quit of oomTest.gcparam("//").ArrayBuffer(1)) {
      ;
    }
  } catch (e) {
    ;
  }
});
