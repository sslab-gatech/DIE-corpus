console.log('This tests for caller property in functions. Only functions that are called from inside of other functions and have a parent should have this property set. Tests return true when caller is found and false when the caller is null.');

function child() {
  return child.caller !== null;
}

function parent() {
  return child();
}

var childHasCallerWhenExecutingGlobalCode = child.caller !== null;
var childHasCallerWhenCalledWithoutParent = child();
var childHasCallerWhenCalledFromWithinParent = parent();
childHasCallerWhenExecutingGlobalCode;
childHasCallerWhenCalledWithoutParent;
childHasCallerWhenCalledFromWithinParent; // The caller property should throw in strict mode, and a non-strict function cannot use caller to reach a strict caller (see ES5.1 15.3.5.4).

function nonStrictCallee() {
  return nonStrictCallee.caller;
}

function strictCallee() {
  "use strict";

  return strictCallee.caller;
}

function nonStrictCaller(x) {
  return x();
} // Tail calls leak and show our caller's caller, which is null here


function strictCaller(x) {
  "use strict";

  var result = x();
  return result;
}

function strictTailCaller(x) {
  "use strict";

  return x();
}

nonStrictCaller(nonStrictCallee);

try {
  nonStrictCaller(strictCallee);
} catch (e) {
  ;
}

try {
  strictCaller(nonStrictCallee);
} catch (e) {
  ;
}

try {
  strictCaller(strictCallee);
} catch (e) {
  ;
}

strictTailCaller(nonStrictCallee);

try {
  strictTailCaller(strictCallee);
} catch (e) {
  ;
} // .caller within a bound function reaches the caller, ignoring the binding.


var boundNonStrictCallee = nonStrictCallee.bind();
var boundStrictCallee = strictCallee.bind();
nonStrictCaller(boundNonStrictCallee);

try {
  nonStrictCaller(boundStrictCallee);
} catch (e) {
  ;
}

try {
  strictCaller(boundNonStrictCallee);
} catch (e) {
  ;
}

try {
  strictCaller(boundStrictCallee);
} catch (e) {
  ;
}

strictTailCaller(boundNonStrictCallee);

try {
  strictTailCaller(boundStrictCallee);
} catch (e) {
  ;
} // Check that .caller throws as expected, over an accessor call. (per https://tc39.github.io/ecma262/#sec-forbidden-extensions)


function getFooGetter(x) {
  return Object.getOwnPropertyDescriptor(x, 'foo').get;
}

function getFooSetter(x) {
  return Object.getOwnPropertyDescriptor(x, 'foo').set;
}

var nonStrictAccessor = {
  get foo() {
    return getFooGetter(nonStrictAccessor).caller;
  },

  set foo(x) {
    if (getFooSetter(nonStrictAccessor).caller !== x) {
      throw false;
    }
  }

};
var strictAccessor = {
  get foo() {
    "use strict";

    return getFooGetter(strictAccessor).caller;
  },

  set foo(x) {
    "use strict";

    if (getFooSetter(strictAccessor).caller !== x) {
      throw false;
    }
  }

};

function nonStrictGetter(x) {
  return x.foo;
}

function nonStrictSetter(x) {
  x.foo = nonStrictSetter;
  return true;
}

function strictGetter(x) {
  "use strict";

  return x.foo;
}

function strictSetter(x) {
  "use strict";

  x.foo = nonStrictSetter;
  return true;
}

try {
  nonStrictGetter(nonStrictAccessor);
} catch (e) {
  ;
}

try {
  nonStrictGetter(strictAccessor);
} catch (e) {
  ;
}

try {
  strictGetter(nonStrictAccessor);
} catch (e) {
  ;
}

try {
  strictSetter(nonStrictAccessor);
} catch (e) {
  ;
}

try {
  strictGetter(strictAccessor);
} catch (e) {
  ;
}

try {
  strictSetter(strictAccessor);
} catch (e) {
  ;
}
