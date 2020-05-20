function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, message) {
  var error = null;

  try {
    func();
  } catch (e) {
    error = e;
  }
}

shouldBe(Reflect.getPrototypeOf.length, 1);
shouldThrow(() => {
  Reflect.getPrototypeOf("hello");
}, `TypeError: Reflect.getPrototypeOf requires the first argument be an object`);
var object = {
  hello: 42
};
shouldBe(Reflect.getPrototypeOf(object), Object.prototype);
shouldBe(Reflect.getPrototypeOf(Reflect.getPrototypeOf(object)), null);
var proto = [];
object.__proto__ = proto;
shouldBe(Reflect.getPrototypeOf(object), proto);
var array = [];
shouldBe(Reflect.getPrototypeOf(array), Array.prototype);
var proto = [];
array.__proto__ = Object.prototype;
shouldBe(Reflect.getPrototypeOf(array), Object.prototype);

class Base {}

class Derived extends Base {}

shouldBe(Reflect.getPrototypeOf(new Derived()), Derived.prototype);
shouldBe(Reflect.getPrototypeOf(Reflect.getPrototypeOf(new Derived())), Base.prototype);
shouldBe(Reflect.getPrototypeOf(Reflect.getPrototypeOf(Reflect.getPrototypeOf(new Derived()))), Object.prototype);
shouldBe(Reflect.getPrototypeOf(Reflect.getPrototypeOf(Reflect.getPrototypeOf(Reflect.getPrototypeOf(new Derived())))), null);
var object = Object.create(null);
shouldBe(Reflect.getPrototypeOf(object), null);
