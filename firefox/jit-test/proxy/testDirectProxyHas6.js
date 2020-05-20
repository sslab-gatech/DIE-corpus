/*
 * Don't throw a type error if the trap reports an undefined property as
 * non-present, regardless of extensibility.
 */
var target = {};
Object.preventExtensions(target);
var handler = {
  has: () => false
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
  'foo' in p;
  false;
  Symbol.iterator in p;
  false;
}
