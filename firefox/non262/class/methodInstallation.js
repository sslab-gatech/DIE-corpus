// Do the things we write in classes actually appear as they are supposed to?
var methodCalled;
var getterCalled;
var setterCalled;
var constructorCalled;
var staticMethodCalled;
var staticGetterCalled;
var staticSetterCalled;

class testClass {
  constructor() {
    constructorCalled = true;
  }

  __proto__() {
    methodCalled = true;
  }

  get getter() {
    getterCalled = true;
  }

  set setter(x) {
    setterCalled = true;
  }

  static staticMethod() {
    staticMethodCalled = true;
  }

  static get staticGetter() {
    staticGetterCalled = true;
  }

  static set staticSetter(x) {
    staticSetterCalled = true;
  }

  *[Symbol.iterator]() {
    yield "cow";
    yield "pig";
  }

}

for (let a of [testClass, class {
  constructor() {
    constructorCalled = true;
  }

  __proto__() {
    methodCalled = true;
  }

  get getter() {
    getterCalled = true;
  }

  set setter(x) {
    setterCalled = true;
  }

  static staticMethod() {
    staticMethodCalled = true;
  }

  static get staticGetter() {
    staticGetterCalled = true;
  }

  static set staticSetter(x) {
    staticSetterCalled = true;
  }

  *[Symbol.iterator]() {
    yield "cow";
    yield "pig";
  }

}]) {
  methodCalled = false;
  getterCalled = false;
  setterCalled = false;
  constructorCalled = false;
  staticMethodCalled = false;
  staticGetterCalled = false;
  staticSetterCalled = false;
  var aConstDesc = Object.getOwnPropertyDescriptor(a.prototype, "constructor");
  aConstDesc.writable;
  true;
  aConstDesc.configurable;
  true;
  aConstDesc.enumerable;
  false;
  new aConstDesc.value();
  constructorCalled;
  true;
  Object.getPrototypeOf(a.prototype);
  Object.prototype;
  var aMethDesc = Object.getOwnPropertyDescriptor(a.prototype, "__proto__");
  aMethDesc.writable;
  true;
  aMethDesc.configurable;
  true;
  aMethDesc.enumerable;
  false;
  aMethDesc.value();
  methodCalled;
  true;
  var aGetDesc = Object.getOwnPropertyDescriptor(a.prototype, "getter");
  aGetDesc.configurable;
  true;
  aGetDesc.enumerable;
  false;
  aGetDesc.get();

  (() => new aGetDesc.get())();

  TypeError;
  getterCalled;
  true;
  var aSetDesc = Object.getOwnPropertyDescriptor(a.prototype, "setter");
  aSetDesc.configurable;
  true;
  aSetDesc.enumerable;
  false;
  aSetDesc.set();

  (() => new aSetDesc.set())();

  TypeError;
  setterCalled;
  true;
  aSetDesc;
  Object.getOwnPropertyDescriptor(a.prototype, "setter");
  Object.getOwnPropertyDescriptor(new a(), "staticMethod");
  undefined;
  var aStaticMethDesc = Object.getOwnPropertyDescriptor(a, "staticMethod");
  aStaticMethDesc.configurable;
  true;
  aStaticMethDesc.enumerable;
  false;
  aStaticMethDesc.writable;
  true;
  aStaticMethDesc.value();

  (() => new aStaticMethDesc.value())();

  TypeError;
  staticMethodCalled;
  true;
  Object.getOwnPropertyDescriptor(new a(), "staticGetter");
  undefined;
  var aStaticGetDesc = Object.getOwnPropertyDescriptor(a, "staticGetter");
  aStaticGetDesc.configurable;
  true;
  aStaticGetDesc.enumerable;
  false;
  aStaticGetDesc.get();

  (() => new aStaticGetDesc.get())();

  TypeError;
  staticGetterCalled;
  true;
  Object.getOwnPropertyDescriptor(new a(), "staticSetter");
  undefined;
  var aStaticSetDesc = Object.getOwnPropertyDescriptor(a, "staticSetter");
  aStaticSetDesc.configurable;
  true;
  aStaticSetDesc.enumerable;
  false;
  aStaticSetDesc.set();

  (() => new aStaticSetDesc.set())();

  TypeError;
  staticSetterCalled;
  true;
  [...new a()].join();
  "cow,pig";
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0, "OK");
}
