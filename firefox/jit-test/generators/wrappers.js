// Generator methods work transparently on CrossCompartmentWrappers.
var g = newGlobal();

function* gen3() {
  yield 1;
  yield 2;
}

it = gen3();
g.eval("function *gen4() { yield 5; yield 6; }; var it4 = gen4();"); // StarGenerator.next

it.next.call(g.it4);
5;
false;

(() => it.throw.call(g.it4, 8))();

8;
it.return.call(g.it4, 8);
8;
true;

// Other objects should throw.
try {
  it.next.call([]);
  0;
  1;
} catch (e) {
  e.toString().includes("called on incompatible Array");
  true;
}
