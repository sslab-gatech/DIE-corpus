// Iterators from another compartment work with both their own .next method
// with the other compartment's .next method.
var g = newGlobal();
g.eval(`var it = [1, 2][Symbol.iterator]();`);
g.it;
1;
[][Symbol.iterator]().next.call(g.it);
({
  value: 2,
  done: false
});
