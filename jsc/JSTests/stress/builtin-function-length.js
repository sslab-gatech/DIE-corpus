function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
}

{
  shouldBe(JSON.stringify(Object.getOwnPropertyNames(Array.prototype.filter).sort()), `["length","name"]`);
  shouldBe(Array.prototype.filter.length, 1);
  shouldBe(JSON.stringify(Object.getOwnPropertyDescriptor(Array.prototype.filter, 'length')), `{"value":1,"writable":false,"enumerable":false,"configurable":true}`);
  shouldBe(delete Array.prototype.filter.length, true);
  shouldBe(JSON.stringify(Object.getOwnPropertyNames(Array.prototype.filter).sort()), `["name"]`);
}
{
  shouldThrow(function () {
    "use strict";

    Array.prototype.forEach.length = 42;
  }, `TypeError: Attempted to assign to readonly property.`);
}
{
  var resolve = null;
  var reject = null;
  new Promise(function (arg0, arg1) {
    resolve = arg0;
    reject = arg1;
  });
  shouldBe(resolve.length, 1);
  shouldBe(JSON.stringify(Object.getOwnPropertyDescriptor(resolve, 'length')), `{"value":1,"writable":false,"enumerable":false,"configurable":true}`);
  shouldBe(reject.length, 1);
  shouldBe(JSON.stringify(Object.getOwnPropertyDescriptor(reject, 'length')), `{"value":1,"writable":false,"enumerable":false,"configurable":true}`);
}
