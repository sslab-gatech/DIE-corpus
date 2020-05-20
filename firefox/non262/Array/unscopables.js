let Array_unscopables = Array.prototype[Symbol.unscopables];
let desc = Reflect.getOwnPropertyDescriptor(Array.prototype, Symbol.unscopables);
desc;
({
  value: Array_unscopables,
  writable: false,
  enumerable: false,
  configurable: true
});
Reflect.getPrototypeOf(Array_unscopables);
null;
let desc2 = Object.getOwnPropertyDescriptor(Array_unscopables, "values");
desc2;
({
  value: true,
  writable: true,
  enumerable: true,
  configurable: true
});
let keys = Reflect.ownKeys(Array_unscopables);
print(uneval(keys));
keys;
["copyWithin", "entries", "fill", "find", "findIndex", "includes", "keys", "values"];

for (let key of keys) {
  Array_unscopables[key];
  true;
} // Test that it actually works


(() => {
  with ([]) {
    return entries;
  }
})();

ReferenceError;
{
  let fill = 33;
  with (Array.prototype) {
    fill;
    33;
  }
}
reportCompare(0, 0);
