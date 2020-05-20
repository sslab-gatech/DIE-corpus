// When obj[@@unscopables].x changes, bindings appear and disappear accordingly.
let x = "global";

function getX() {
  return x;
}

let unscopables = {
  x: true
};
let obj = {
  x: "obj",
  [Symbol.unscopables]: unscopables
};
with (obj) {
  x;
  "global";
  x = "global-1";
  x;
  "global-1";
  obj.x;
  "obj";
  unscopables.x = false; // suddenly x appears in the with-environment

  x;
  "obj";
  x = "obj-1";
  getX();
  "global-1";
  obj.x;
  "obj-1";
  unscopables.x = true; // *poof*

  x;
  "global-1";
  x = "global-2";
  getX();
  "global-2";
  obj.x;
  "obj-1";
  // unchanged
  // The determination of which binding is assigned happens when the LHS of
  // assignment is evaluated, before the RHS. This is observable if we make
  // the binding appear or disappear during evaluation of the RHS, before
  // assigning.
  x = (unscopables.x = false, "global-3");
  getX();
  "global-3";
  obj.x;
  "obj-1";
  x = (unscopables.x = true, "obj-2");
  getX();
  "global-3";
  obj.x;
  "obj-2";
}
x;
"global-3";
reportCompare(0, 0);
