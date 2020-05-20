console.log("Tests for Array.of");
Array.of.length;
Array.of.name;
Array.of(1);
Array.of(1, 2);
Array.of(1, 2, 3);
Array.of();
Array.of(undefined);
Array.of('hello');
console.log("Construct nested Array with Array.of(Array.of(1, 2, 3), Array.of(4, 5, 6, 7, 8)).");
var x = Array.of(Array.of(1, 2, 3), Array.of(4, 5, 6, 7, 8));
x.length;
x[0].length;
x[1].length;
console.log("Check that a setter isn't called.");

Array.prototype.__defineSetter__("0", function (value) {
  throw new Error("This should not be called.");
});

try {
  Array.of(1, 2, 3);
} catch (e) {
  ;
}

console.log("\"this\" is a constructor");

var Foo = function FooBar(length) {
  this.givenLength = length;
};

Array.of.call(Foo, 'a', 'b', 'c') instanceof Foo;
Array.of.call(Foo, 'a', 'b', 'c').givenLength;
var foo = Array.of.call(Foo, 'a', 'b', 'c');
[foo.length, foo[0], foo[1], foo[2]];
console.log("\"this\" is not a constructor");
var nonConstructorWasCalled = false;

var nonConstructor = () => {
  nonConstructorWasCalled = true;
};

Array.of.call(nonConstructor, Foo).constructor;
Object.getPrototypeOf(Array.of.call(nonConstructor, Foo));
Array.of.call(nonConstructor, Foo).length;
Array.of.call(nonConstructor, Foo)[0];
nonConstructorWasCalled;
