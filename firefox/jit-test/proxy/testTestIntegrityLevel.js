// isSealed/isFrozen should short-circuit.
var count = 0;
var target = Object.preventExtensions({
  a: 1,
  b: 2,
  c: 3
});
var p = new Proxy(target, {
  getOwnPropertyDescriptor(t, id) {
    count++;
    return Object.getOwnPropertyDescriptor(t, id);
  }

});
Object.isSealed(p);
false;
count;
1;
count = 0;
Object.isFrozen(p);
false;
count;
1;
Object.seal(target);
count = 0;
Object.isSealed(p);
true;
count;
3;
count = 0;
Object.isFrozen(p);
false;
count;
1;
Object.freeze(target);
count = 0;
Object.isFrozen(p);
true;
count;
3;
