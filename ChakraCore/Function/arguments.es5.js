//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function mkerr(message) {
  return messagePrefix + ": " + message;
}

var passedValue = 1;

function f(a) {
  var val1 = 2;
  a = val1;
  print(val1, a, "wrong value of named parameter (val1)");
  print(val1, arguments[0], "wrong value of indexed parameter (val1)");
  var val2 = 3;
  arguments[0] = val2;
  print(val2, arguments[0], "wrong value of indexed parameter (val2)");
  print(val2, a, "wrong value of named parameter (val2)");
}

f(passedValue);
var passedValue = 1;

function f(a) {
  var val = 2;
  Object.defineProperty(arguments, 0, {
    configurable: false,
    enumerable: false,
    value: val
  }); // Note that we expect writable: true because this was omitted in defineProperty above
  // which is actually re-define property with all attributes == true.

  var expected = {
    configurable: false,
    enumerable: false,
    writable: true,
    value: val
  };
  print(expected, Object.getOwnPropertyDescriptor(arguments, 0), "wrong value of getOwnPropertyDescriptor");
  print(val, a, "wrong value of named parameter");
}

f(passedValue);
var passedValue = 1;

function f(a) {
  Object.defineProperty(arguments, 0, {
    writable: false
  });
  var expected = {
    configurable: true,
    enumerable: true,
    writable: false,
    value: passedValue
  };
  print(expected, Object.getOwnPropertyDescriptor(arguments, 0), "wrong value of getOwnPropertyDescriptor"); // Attempt to change arguments[0] which is not writable now.

  var val1 = 2;
  arguments[0] = val1;
  print(passedValue, arguments[0], "non-writable changed");
  print(passedValue, a, "non-writable changed: named arg also changed"); // Change named arg value, verify we are in connection named vs indexed arg.

  var val2 = 3;
  a = val2;
  print(val2, a, "Attemp to change named arg: didn't work");
  print(passedValue, arguments[0], "At this time we should not be connected, but we are");
}

f(passedValue);
var passedValue = 1;

function f(a) {
  var val1 = 2;
  var val2 = 3;
  Object.defineProperty(arguments, 0, {
    writable: false,
    value: val1
  });
  var expected = {
    configurable: true,
    enumerable: true,
    writable: false,
    value: val1
  };
  print(expected, Object.getOwnPropertyDescriptor(arguments, 0), "wrong value of getOwnPropertyDescriptor");
  print(val1, arguments[0], "value: arguments[0]");
  print(val1, a, "value: a"); // Verify we are disconnected now.

  a = val2;
  print(val2, a, "new value: a");
  print(val1, arguments[0], "value: arguments[0] -- did not get disconnected!");
}

f(passedValue);
var passedValue = 1;
var val1 = 2;
var val2 = 3;

function f(a) {
  Object.defineProperty(arguments, 0, {
    value: val1
  });
  a = val1;
  print(val1, arguments[0], "arguments[0] got disconnected");
  arguments[0] = val2;
  print(val2, a, "a got disconnected");
}

f(passedValue);

function f(a, b) {
  Object.defineProperty(arguments, 0, {
    writable: false
  });
  var val1 = 3;
  var val2 = 4;
  arguments[1] = val1;
  print(val1, b, "arg[1] got disconnected");
  b = val2;
  print(val2, arguments[1], "arg[1] got disconnected");
}

f(1, 2);

function f(a) {
  var isGetterFired = false;
  var isSetterFired = false;
  Object.defineProperty(arguments, 0, {
    get: function () {
      isGetterFired = true;
      return this.value;
    },
    set: function (arg) {
      isSetterFired = true;
      this.value = arg;
    }
  });
  print(undefined, arguments[0], "unexpected arg[0] value right after conversion to accessor property");
  print(true, isGetterFired, "isGetterFired (1)");
  isGetterFired = false;
  var val1 = 2;
  arguments[0] = val1;
  print(true, isSetterFired, "isSetterFired");
  print(val1, arguments[0], "get value after set");
  print(true, isGetterFired, "isGetterFired (2)");
}

f(1);
var passedValue = 1;
var val1 = 2;
var val2 = 3;

function f(a) {
  Object.defineProperty(arguments, 0, {
    get: function () {
      return this.value;
    },
    set: function (arg) {
      this.value = arg;
    }
  });
  Object.defineProperty(arguments, 0, {
    value: val1
  });
  a = val2;
  print(arguments[0], val1, "arguments[0]");
  assert.areNotEqual(arguments[0], a, "arguments[0] != a");
}

f(passedValue);
var passedValue = 1;

function f(a) {
  Object.defineProperty(arguments, 0, {
    enumerable: true
  });
  var accumulator = "";

  for (var i in arguments) {
    accumulator += i.toString() + ": " + arguments[i] + ";";
  }

  print("0: " + passedValue + ";", accumulator, "accumulator");
}

f(passedValue);
var passedValue1 = 2;
var passedValue2 = 4;

function f(a, b, c, d) {
  Object.defineProperty(arguments, 0, {
    enumerable: false
  }); // arguments[0].enumerable = false.

  Object.defineProperty(arguments, 1, {
    writable: false
  }); // arguments[1].writable = false -> disconnected.

  delete arguments[2]; // arguments[2] is deleted.

  var i,
      accumulator = "";

  for (i in arguments) {
    accumulator += i.toString() + ": " + arguments[i] + ";";
  } // Note that we expect [1].enumerable = true because this was omitted in defineProperty above
  // which is actually re-define property that previously already had enumerable = true.


  print("1: " + passedValue1 + ";" + "3: " + passedValue2 + ";", accumulator, "accumulator");
}

f(1, passedValue1, 3, passedValue2);
var passedValue = "passed";
Object.defineProperty(Object.prototype, 0, {
  value: "from proto",
  configurable: true,
  writable: false
});

try {
  function f() {
    return arguments;
  }

  var argObj = f(passedValue);
  print(passedValue, argObj[0]);
} finally {
  delete Object.prototype[0];
}

var passedValue = "passed";
Object.defineProperty(Object.prototype, 0, {
  value: "from proto",
  configurable: true,
  writable: false
});

try {
  function f(a) {
    return arguments;
  }

  var argObj = f(passedValue);
  print(passedValue, argObj[0]);
} finally {
  delete Object.prototype[0];
}

var initial = "initial";
var passedValue = "passed";
var data = initial;
Object.defineProperty(Object.prototype, 0, {
  configurable: true,
  get: function () {
    return data;
  },
  set: function (arg) {
    data = arg;
  }
});

try {
  function f() {
    return arguments;
  }

  var argObj = f(passedValue);
  print(initial, data, "data: should not be changed as setter on prototype should not be fired");
  print(passedValue, argObj[0], "argObj[0]");
} finally {
  delete Object.prototype[0];
}

var initial = "initial";
var passedValue = "passed";
var data = initial;
Object.defineProperty(Object.prototype, 0, {
  configurable: true,
  get: function () {
    return data;
  },
  set: function (arg) {
    data = arg;
  }
});

try {
  function f(a) {
    return arguments;
  }

  var argObj = f(passedValue);
  print(initial, data, "data: should not be changed as setter on prototype should not be fired");
  print(passedValue, argObj[0], "argObj[0]");
} finally {
  delete Object.prototype[0];
}

var passedValue = 1;

function f(a) {
  Object.defineProperty(arguments, 0, {
    enumerable: false
  }); // Force convert to ES5 version.

  delete arguments[0];
  print(undefined, arguments[0], "was not deleted.");
  print(passedValue, a, "a is changed.");
}

f(passedValue);
var passedValue = 1;

function f(a, b) {
  Object.defineProperty(arguments, 0, {
    enumerable: false
  }); // Force convert to ES5 version.

  delete arguments[0];
  arguments[0] = passedValue + 1;
  print(passedValue, a, "a is changed.");
}

f(passedValue, 2);
var passedValue = 1;

function f(a) {
  delete arguments[0];
  var val = 2;
  Object.defineProperty(arguments, 0, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: val
  });
  print(val, arguments[0], "wrong value");
}

f(passedValue);
var passedValue = 1;

var getter = function () {
  return this.value;
};

var setter = function (arg) {
  this.value = arg;
};

function f(a) {
  delete arguments[0];
  Object.defineProperty(arguments, 0, {
    enumerable: true,
    configurable: true,
    get: getter,
    set: setter
  });
  var expected = {
    configurable: true,
    enumerable: true,
    get: getter,
    set: setter
  };
  print(expected, Object.getOwnPropertyDescriptor(arguments, 0), "wrong descriptor");
  var accumulator = "";

  for (var i in arguments) {
    accumulator += i.toString() + ": " + arguments[i] + ";";
  }

  print("0: " + undefined + ";", accumulator, "accumulator 2");
}

f(passedValue);
var passedValue1 = 1;
var passedValue2 = 2;
var newValue1 = 100;
var newValue2 = 200;
var i, accumulator;

function f(a, b) {
  // Scenario 1: delete prior to converting to ES5 version.
  delete arguments[0]; // Delete [0] prior to conversion to ES5.

  Object.defineProperty(arguments, 0, {
    configurable: true,
    enumerable: true,
    value: newValue1
  }); // Bring back [0] by defineProperty. Now args is ES5.

  accumulator = "";

  for (i in arguments) {
    accumulator += i.toString() + ": " + arguments[i] + ";";
  }

  print("0: " + newValue1 + ";" + "1: " + passedValue2 + ";", accumulator, "accumulator 1"); // Scenario 2: delete after converting to ES5 version.

  Object.defineProperty(arguments, 0, {
    configurable: true,
    enumerable: true,
    writable: true,
    value: newValue1
  }); // Bring back [0] by defineProperty. Now args is ES5.

  delete arguments[0]; // Delete [0] prior after conversion to ES5.

  arguments[0] = newValue2; // Bring back [0] by setting value.

  accumulator = "";

  for (i in arguments) {
    accumulator += i.toString() + ": " + arguments[i] + ";";
  }

  print("0: " + newValue2 + ";" + "1: " + passedValue2 + ";", accumulator, "accumulator 2");
}

f(passedValue1, passedValue2);
var passedValue1 = 1;
var passedValue2 = 2;
var passedValue3 = 3;
var passedValue4 = 4;
var newValue = 100;

function f(a, b, c) {
  Object.defineProperty(arguments, 0, {
    enumerable: true
  }); // Add objectArray item

  Object.defineProperty(arguments, 2, {
    enumerable: true
  }); // Add objectArray item

  var accumulator = "";
  delete arguments[0];
  arguments[0] = newValue;

  for (var i in arguments) {
    accumulator += i.toString() + ": " + arguments[i] + ";";
  }

  print("0: " + newValue + ";" + "1: " + passedValue2 + ";" + "2: " + passedValue3 + ";" + "3: " + passedValue4 + ";", accumulator, "accumulator");
}

f(passedValue1, passedValue2, passedValue3, passedValue4);

function f(a) {
  Object.defineProperty(arguments, 0, {
    enumerable: false
  }); // Note: Object.getOwnPropertyNames returns all properties, even non-enumerable.

  var actual = Object.getOwnPropertyNames(arguments);
  var expected = {
    0: "0",
    1: "1",
    2: "length",
    3: "callee"
  };
  print(expected, actual, "wrong property names");
}

f(101, 102);
var passedValue = 1;
var newPropertyName = "x";

function f(a, b) {
  if (isConvertNeeded) {
    Object.defineProperty(arguments, 1, {
      enumerable: true
    }); // Force convert to ES5 version.
  }

  Object.preventExtensions(arguments); // No new properties can be added.

  print(false, Object.isExtensible(arguments), mkerr("isExtensible"));

  try {
    Object.defineProperty(arguments, newPropertyName, {
      enumerable: true,
      value: 100
    }); // add new property

    assert.fail(mkerr("did not throw exception"));
  } catch (ex) {
    ;
  }

  arguments[newPropertyName] = 100;
  print(undefined, arguments[newPropertyName], mkerr("New property was added after preventExtensions was called"));
}

f(passedValue, passedValue + 1);
var passedValue = 1;

function f(a, b) {
  if (isConvertNeeded) {
    Object.defineProperty(arguments, 1, {
      enumerable: true
    }); // Force convert to ES5 version.
  }

  Object.preventExtensions(arguments); // This causes configurable, writable = false for all properties + Object.preventExtensions.
  // Note: formals existed prior to calling Object.preventExtensions, thus they are still modifiable.

  print(false, Object.isExtensible(arguments), "isExtensible");
  var actual = Object.getOwnPropertyDescriptor(arguments, 0);
  var expected = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: passedValue
  };
  print(expected, actual, mkerr("wrong descriptor - initial")); // Try to modify/re-configure
  // Note: do not change value here as it causes different code path than exercised by identified issue.

  Object.defineProperty(arguments, 0, {
    enumerable: false
  });
  Object.defineProperty(arguments, 0, {
    writable: false
  });
  Object.defineProperty(arguments, 0, {
    configurable: false
  });
  var expected = {
    configurable: false,
    enumerable: false,
    writable: false,
    value: passedValue
  };
  print(expected, Object.getOwnPropertyDescriptor(arguments, 0), mkerr("wrong descriptor - after redefine"));
}

f(passedValue, passedValue + 1);
var passedValue = 1;

function f(a, b) {
  if (isConvertNeeded) {
    Object.defineProperty(arguments, 1, {
      enumerable: true
    }); // Force convert to ES5 version.
  }

  Object.seal(arguments); // This causes configurable = false for all properties + Object.preventExtensions.

  print(true, Object.isSealed(arguments), mkerr("isSealed"));
  print(false, Object.isExtensible(arguments), mkerr("isExtensible"));
  var actual = Object.getOwnPropertyDescriptor(arguments, 0);
  var expected = {
    configurable: false,
    enumerable: true,
    writable: true,
    value: passedValue
  };
  print(expected, actual, mkerr("wrong descriptor"));
}

f(passedValue, passedValue + 1);
var passedValue = 1;

function f(a, b) {
  if (isConvertNeeded) {
    Object.defineProperty(arguments, 1, {
      enumerable: true
    }); // Force convert to ES5 version.
  }

  Object.freeze(arguments); // This causes configurable AND writable = false for all properties + Object.preventExtensions.

  print(true, Object.isFrozen(arguments), mkerr("isFrozen"));
  print(true, Object.isSealed(arguments), mkerr("isSealed"));
  print(false, Object.isExtensible(arguments), mkerr("isExtensible"));
  var actual = Object.getOwnPropertyDescriptor(arguments, 0);
  var expected = {
    configurable: false,
    enumerable: true,
    writable: false,
    value: passedValue
  };
  print(expected, actual, mkerr("wrong descriptor"));
}

f(passedValue, passedValue + 1);
var passedValue1 = 1;
var passedValue2 = 2;

function f(a, b) {
  delete arguments[1];
  Object.preventExtensions(arguments);
  var accumulator = "";

  for (var i in arguments) {
    accumulator += i.toString() + ": " + arguments[i] + ";";
  }

  print("0: " + passedValue1 + ";", accumulator, "accumulator");
  print(undefined, arguments[1], "arguments[1]");
}

f(passedValue1, passedValue2);
var passedValue1 = 1;
var val = 2;

function f(a) {
  Object.defineProperty(arguments, 0, {
    enumerable: true
  });
  a = val;
  Object.defineProperty(arguments, 0, {
    writable: false
  });
  var expected = {
    configurable: true,
    enumerable: true,
    writable: false,
    value: val
  };
  print(expected, Object.getOwnPropertyDescriptor(arguments, 0));
}

f(passedValue1);
var accumulator = "";

function f(a, b) {
  Object.preventExtensions(arguments);

  for (var i in arguments) {
    if (accumulator.length != 0) {
      accumulator += ",";
    }

    accumulator += arguments[i];
  }
}

var value = 5;
f(value);
var expected = helpers.isVersion10OrLater ? value.toString() : value.toString() + ",undefined"; // IE9 compat mode -- Win8 558490.

print(expected, accumulator, "Wrong accumulated value");
