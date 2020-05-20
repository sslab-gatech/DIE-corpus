// JSOP_NEWOBJECT should respect the metadata hook, even if
// it's set with scripts on the stack.
function f() {
  for (var i = 0; i < 100; i++) {
    if (i === 20) {
      var o = {
        x: 1
      };
    }

    if (i >= 20) {
      var md = getAllocationMetadata(o);
      typeof md === "object" && md !== null;
      true;
      typeof md.index;
      "number";
    }
  }
}

f();
