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
  let object = {
    toString() {
      return "C";
    }

  };
  shouldBe(String.prototype.repeat.call(object, 2.5), "CC");
  shouldBe(String.prototype.repeat.call(object, -0), "");
  shouldBe(String.prototype.repeat.call(object, 1), "C");
  shouldBe(String.prototype.repeat.call(object, {
    valueOf() {
      return 2.5;
    }

  }), "CC");
  shouldThrow(() => {
    String.prototype.repeat.call(object, {
      valueOf() {
        throw new Error("OK");
      }

    });
  }, `Error: OK`);
}
{
  shouldBe(String.prototype.repeat.call("", 0), "");
  shouldBe(String.prototype.repeat.call("", 0xFFFFFFFFF), "");
  shouldThrow(() => {
    String.prototype.repeat.call("", Infinity);
  }, `RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity`);
  shouldThrow(() => {
    String.prototype.repeat.call("", -2000);
  }, `RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity`);
}
