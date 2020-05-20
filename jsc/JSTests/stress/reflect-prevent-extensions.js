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

shouldBe(Reflect.preventExtensions.length, 1);
shouldThrow(() => {
  Reflect.preventExtensions("hello");
}, `TypeError: Reflect.preventExtensions requires the first argument be an object`);
var object = {
  hello: 42
};
shouldBe(Reflect.isExtensible(object), true);
shouldBe(Reflect.preventExtensions(object), true);
shouldBe(Reflect.isExtensible(object), false);
object.ok = 42;
shouldBe(object.hasOwnProperty('ok'), false);
