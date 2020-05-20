function f(v) {
  if (v + "") {
    ({} = v);
  }
}

f(true);
f({});

(() => f(null))();

TypeError;

(() => f(undefined))();

TypeError;

function g(v) {
  if (v + "") {
    ({} = v);
  }
}

g(true);
g({});

(() => g(undefined))();

TypeError;

(() => g(null))();

TypeError;

function h(v) {
  if (v + "") {
    [] = v;
  }
}

h([true]);
h("foo");

(() => h(undefined))();

TypeError;

(() => h(null))();

TypeError;
Object.defineProperty(Boolean.prototype, "v", {
  get() {
    "use strict";

    return typeof this;
  },

  enumerable: true,
  configurable: true
});
Object.defineProperty(Number.prototype, "v", {
  get() {
    "use strict";

    return typeof this;
  },

  enumerable: true,
  configurable: true
});
Object.defineProperty(String.prototype, "v", {
  get() {
    "use strict";

    return typeof this;
  },

  enumerable: true,
  configurable: true
});
Object.defineProperty(Symbol.prototype, "v", {
  get() {
    "use strict";

    return typeof this;
  },

  enumerable: true,
  configurable: true
});

function primitiveThisSupported() {
  return 3.14.custom === "number";
}

function primitiveThisTests() {
  function f(v) {
    var type = typeof v;
    ({
      v
    } = v);
    v;
    type;
  }

  f(true);
  f(3.14);
  f(72);
  f("ohai");
  f(Symbol.iterator);

  (() => f(undefined))();

  TypeError;

  (() => f(null))();

  TypeError;

  function g(v) {
    var type = typeof v;
    ({
      v
    } = v);
    v;
    type;
  }

  g(true);
  g(3.14);
  g(72);
  g("ohai");
  g(Symbol.iterator);

  (() => g(null))();

  TypeError;

  (() => g(undefined))();

  TypeError;
}

if (primitiveThisSupported()) {
  primitiveThisTests();
} // Ensure the internal implementation of destructuring object pattern
// assignment -- using a self-hosted intrinsic function -- works even when lazy
// standard class initialization hasn't occurred.  Unfortunately we can't use
// |newGlobal()| because that method eagerly initializes standard classes.


evalcx("({} = 1);", evalcx("lazy"));
