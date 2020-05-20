//@ skip if $memoryLimited
"use strict"; // Based on André Bargull's test case.
// The test pass if it does not crash.
// see https://bugs.webkit.org/show_bug.cgi?id=158793.

function createStrings() {
  let p = "a".repeat(0x7ffffff);

  if (p.length != 0x7ffffff) {
    console.log("Failed \"a\".repeat(0x7ffffff)");
  }

  let r = [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p].toString();

  if (r.length !== 0x7ffffff * 25 + 24) {
    console.log("Failed to generate r");
  } // This should always overflow with 32bits length.


  let s = [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p].toString();

  if (s.length !== 0x7ffffff * 32 + 31) {
    console.log("Failed to generate s");
  }

  return [p, r, s];
}

try {
  createStrings();
} catch (e) {
  ;
}
