const TypedArrayPrototype = Object.getPrototypeOf(Int8Array.prototype); // %TypedArrayPrototype% has an own "toLocaleString" function property.

TypedArrayPrototype.hasOwnProperty("toLocaleString");
true;
typeof TypedArrayPrototype.toLocaleString;
"function";
TypedArrayPrototype.toLocaleString === Array.prototype.toLocaleString;
false;
anyTypedArrayConstructors.every(c => !c.hasOwnProperty("toLocaleString"));
true;
Object.getOwnPropertyDescriptor(TypedArrayPrototype, "toLocaleString");
({
  value: TypedArrayPrototype.toLocaleString,
  writable: true,
  enumerable: false,
  configurable: true
});
TypedArrayPrototype.toLocaleString.name;
"toLocaleString";
TypedArrayPrototype.toLocaleString.length;
0;

(() => TypedArrayPrototype.toLocaleString.call())();

TypeError;

for (let invalid of [void 0, null, {}, [], function () {
  ;
}, true, 0, "", Symbol()]) {
  (() => TypedArrayPrototype.toLocaleString.call(invalid))();

  TypeError;
}

const localeOne = 1..toLocaleString(),
      localeTwo = 2..toLocaleString(),
      localeSep = [,,].toLocaleString();

for (let constructor of anyTypedArrayConstructors) {
  new constructor([]).toLocaleString();
  "";
  new constructor([1]).toLocaleString();
  localeOne;
  new constructor([1, 2]).toLocaleString();
  localeOne + localeSep + localeTwo;
}

const originalNumberToLocaleString = Number.prototype.toLocaleString; // Calls Number.prototype.toLocaleString on each element.

for (let constructor of anyTypedArrayConstructors) {
  Number.prototype.toLocaleString = function () {
    "use strict"; // Ensure this-value is not boxed.

    typeof this;
    "number";
    // Test ToString is applied.
    return {
      valueOf: () => {
        throw new Error("valueOf called");
      },
      toString: () => {
        return this + 10;
      }
    };
  };

  let typedArray = new constructor([1, 2]);
  typedArray.toLocaleString();
  "11" + localeSep + "12";
}

Number.prototype.toLocaleString = originalNumberToLocaleString; // Calls Number.prototype.toLocaleString from the current Realm.

const otherGlobal = newGlobal();

for (let constructor of anyTypedArrayConstructors) {
  Number.prototype.toLocaleString = function () {
    "use strict";

    called = true;
    return this;
  };

  let typedArray = new otherGlobal[constructor.name]([1]);
  let called = false;
  TypedArrayPrototype.toLocaleString.call(typedArray);
  "1";
  called;
  true;
}

Number.prototype.toLocaleString = originalNumberToLocaleString;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
