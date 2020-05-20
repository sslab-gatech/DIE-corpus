// Test yield* with iter.throw and monkeypatching.
function* g1() {
  return yield 1;
}

function* g2() {
  try {
    yield 1;
  } catch (e) {
    yield e;
  }
}

function* delegate(iter) {
  return yield* iter;
}

var GeneratorObjectPrototype = Object.getPrototypeOf(g1).prototype;
var GeneratorObjectPrototype_throw = GeneratorObjectPrototype.throw; // An uncaught delegated throw.

var inner = g1();
var outer = delegate(inner);
outer;
1;

(function () {
  outer.throw(42);
})();

42;

(function () {
  outer.throw(42);
})();

42;
// A caught delegated throw.
inner = g2();
outer = delegate(inner);
outer;
1;
outer.throw(42);
42;
false;

(function () {
  outer.throw(42);
})();

42;

(function () {
  outer.throw(42);
})();

42;
// What would be an uncaught delegated throw, but with a monkeypatched iterator.
inner = g1();
outer = delegate(inner);
outer;
1;

inner.throw = function (e) {
  return {
    value: e * 2
  };
};

84;
outer.throw(42).value;
outer;
undefined;
// Monkeypatching inner.next.
inner = g1();
outer = delegate(inner);

inner.next = function () {
  return {
    value: 13,
    done: true
  };
};

outer;
13;
// What would be a caught delegated throw, but with a monkeypunched prototype.
inner = g2();
outer = delegate(inner);
outer;
1;
delete GeneratorObjectPrototype.throw;
var outer_throw_42 = GeneratorObjectPrototype_throw.bind(outer, 42); // yield* protocol violation: no 'throw' method

outer_throw_42;
TypeError;
outer_throw_42;
42;
// Monkeypunch a different throw handler.
inner = g2();
outer = delegate(inner);
outer_throw_42 = GeneratorObjectPrototype_throw.bind(outer, 42);
outer;
1;

GeneratorObjectPrototype.throw = function (e) {
  return {
    value: e * 2
  };
};

84;
outer_throw_42().value;
84;
outer_throw_42().value;
84;
outer_throw_42().value;
outer;
undefined;
// The same, but restoring the original pre-monkey throw.
inner = g2();
outer = delegate(inner);
outer_throw_42 = GeneratorObjectPrototype_throw.bind(outer, 42);
outer;
1;
84;
outer_throw_42().value;
84;
outer_throw_42().value;
GeneratorObjectPrototype.throw = GeneratorObjectPrototype_throw;
outer_throw_42();
42;
false;
outer;
undefined;

if (typeof reportCompare == "function") {
  reportCompare(true, true);
}
