'use strict';

let hook = {};

let Base = function () {
  ;
};

Base.prototype = new Proxy(Base.prototype, hook);

class Derived extends Base {
  testPrimitiveReceiver() {
    super.foo = "Derived";
  }

}

(() => Derived.prototype.testPrimitiveReceiver.call(null))();

`can't assign to property "foo" on ({}): not an object`;
