function whoo() {
  new Object().foo();
}

Object.prototype.foo = function () {
  return undefined;
};

whoo();
Object.prototype.foo = undefined;
gc();

try {
  whoo();
  0;
  1;
} catch (e) {
  e instanceof TypeError;
  true;
}
