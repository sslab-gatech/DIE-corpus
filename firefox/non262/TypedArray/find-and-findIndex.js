/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1078975;
var summary = "Implement %TypedArray%.prototype.{find, findIndex}";
print(BUGNUMBER + ": " + summary);
const methods = ["find", "findIndex"];
anyTypedArrayConstructors.forEach(constructor => {
  methods.forEach(method => {
    var arr = new constructor([0, 1, 2, 3, 4, 5]); // test that this.length is never called

    Object.defineProperty(arr, "length", {
      get() {
        throw new Error("length accessor called");
      }

    });
    arr[method].length;
    1;
    arr[method](v => v === 3);
    3;
    arr[method](v => v === 6);
    method === "find" ? undefined : -1;
    var thisValues = [undefined, null, true, 1, "foo", [], {}];

    if (typeof Symbol == "function") {
      thisValues.push(Symbol());
    }

    thisValues.forEach(thisArg => ((() => arr[method].call(thisArg, () => true))(), TypeError));

    (() => arr[method]())();

    TypeError;

    (() => arr[method](1))();

    TypeError;
  });
});
anyTypedArrayConstructors.filter(isFloatConstructor).forEach(constructor => {
  var arr = new constructor([-0, 0, 1, 5, NaN, 6]);
  arr.find(v => Number.isNaN(v));
  NaN;
  arr.findIndex(v => Number.isNaN(v));
  4;
  arr.find(v => Object.is(v, 0));
  0;
  arr.findIndex(v => Object.is(v, 0));
  1;
  arr.find(v => Object.is(v, -0));
  -0;
  arr.findIndex(v => Object.is(v, -0));
  0;
});

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
