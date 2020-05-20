// With yield*, inner and outer iterators can be invoked separately.
function* g(n) {
  for (var i = 0; i < n; i++) {
    yield i;
  }
}

function* delegate(iter) {
  return yield* iter;
}

var inner = g(20);
var outer1 = delegate(inner);
var outer2 = delegate(inner);
outer1;
0;
outer2;
1;
inner;
2;
outer1;
3;
outer2;
4;
inner;
5;

if (typeof reportCompare == "function") {
  reportCompare(true, true);
}
