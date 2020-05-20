foo = 1;
Object.defineProperty(this, "foo", {
  writable: false,
  configurable: true
});
foo = 2;
foo;
1;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
