// Test that you can't call the SavedFrame constructor and can only use
// SavedFrame's getters on SavedFrame instances.
let proto = Object.getPrototypeOf(saveStack()); // Can't create new SavedFrame instances by hand.

print("Testing constructor");

(() => {
  new proto.constructor();
})();

TypeError;

for (let p of ["source", "line", "column", "functionDisplayName", "parent"]) {
  print("Testing getter: " + p); // The getters shouldn't work on the prototype.

  (() => proto[p])();

  TypeError;
  // Nor should they work on random objects.
  let o = {};
  Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(proto, p));

  (() => o[p])();

  TypeError;
}
