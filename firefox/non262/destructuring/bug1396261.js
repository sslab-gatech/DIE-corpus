// Ensure array or object literals with trailing property accessors are not
// treated as nested destructuring patterns in assignment destructuring
// contexts.
// Array destructuring with normal element.
[{
  a: 0
}.x] = [];
[[0].x] = []; // Array destructuring with spread element.

[...{
  a: 0
}.x] = [];
[...[0].x] = []; // Object destructuring with normal property.

({
  a: {
    b: 0
  }.x
} = {});
({
  a: [0].x
} = {}); // Object destructuring with spread property.

({ ...{
    b: 0
  }.x
} = {});
({ ...[0].x
} = {}); // Object literal with initializer shorthand in destructuring context.

(() => Function(`[{a = 0}.x] = [];`))();

SyntaxError;

(() => Function(`[...{a = 0}.x] = [];`))();

SyntaxError;

(() => Function(`({a: {b = 0}.x} = {});`))();

SyntaxError;

(() => Function(`({...{b = 0}.x} = {});`))();

SyntaxError;

// Object destructuring with "eval" or "arguments" shorthand in strict mode.
(function () {
  "use strict"; // Ensure "eval" resp. "arguments" is not treated as an assignment.

  [{}.x] = [];
  [...{}.x] = [];
  ({
    a: {}.x
  } = {});
  ({ ...{}.x
  } = {});
  [{}.x] = [];
  [...{}.x] = [];
  ({
    a: {}.x
  } = {});
  ({ ...{}.x
  } = {});
})();

if (typeof reportCompare === "function") reportCompare(0, 0);
