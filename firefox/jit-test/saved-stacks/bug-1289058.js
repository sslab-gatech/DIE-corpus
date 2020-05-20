const g1 = newGlobal({});
const g2 = newGlobal(newGlobal);
g1.g2obj = g2.eval("new Object");
g1.evaluate(`
  const global = this;
  function capture(shouldIgnoreSelfHosted = true) {
  }
  (function iife1() {
    const captureTrueStack = capture(true);
  }());
`, {});
