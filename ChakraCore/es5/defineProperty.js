//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function getObject(propName) {
  var dummy = {};

  if (propName != undefined) {
    dummy[propName] = 0;
  }

  return dummy;
}

var o = getObject();
var propertyName = "foo02";
var pd = {};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: undefined,
  configurable: false,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo03";
var pd = {
  value: 0
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: 0,
  configurable: false,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo02_v3";
var pd = {
  configurable: true,
  writable: false
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: undefined,
  configurable: true,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo04";

var getter = function () {
  return this.Value;
};

var pd = {
  get: getter
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  get: getter,
  set: undefined,
  configurable: false,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var propertyName = "foo05";
var o = {
  foo05: 1
};
var pd = {};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: true,
  value: 1,
  configurable: true,
  enumerable: true
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var propertyName = "foo06";
var o = {
  foo06: 1
};
var pd = {
  value: 1
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: true,
  value: 1,
  configurable: true,
  enumerable: true
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo07";
var pd = {
  value: 0,
  configurable: false
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1,
  configurable: true
};

try {
  Object.defineProperty(o, propertyName, pd);
} catch (e) {
  ;
}

var o = getObject();
var propertyName = "foo08";
var pd = {
  value: 0
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1,
  enumerable: true
};

try {
  Object.defineProperty(o, propertyName, pd);
} catch (e) {
  ;
}

var o = getObject();
var propertyName = "foo09";
var pd = {
  value: 0,
  writable: true
}; // set writable to true to avoid throw code path.

Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1,
  writable: false
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: 1,
  configurable: false,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo10";
var pd = {
  value: 0,
  writable: true
}; // set writable to true to avoid throw code path.

Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1,
  enumerable: false,
  writable: false
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: 1,
  configurable: false,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo11";
var pd = {
  value: 0,
  configurable: true
};
Object.defineProperty(o, propertyName, pd);
pd = {
  enumerable: true
}; // change enumerable to make sure that descriptor is different from current.

Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: 0,
  configurable: true,
  enumerable: true
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo12";
var pd = {
  value: 0,
  configurable: false
};
Object.defineProperty(o, propertyName, pd);
pd = {
  get: function () {
    return this.Value;
  }
};

try {
  Object.defineProperty(o, propertyName, pd);
} catch (e) {
  ;
}

var o = getObject();
var propertyName = "foo13";
var pd = {
  value: 0,
  configurable: true,
  enumerable: true
};
Object.defineProperty(o, propertyName, pd);

var getter = function () {
  return this.Value;
};

pd = {
  get: getter
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  get: getter,
  set: undefined,
  configurable: true,
  enumerable: true
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo14";
var pd = {
  value: 0,
  configurable: true,
  enumerable: false
};
Object.defineProperty(o, propertyName, pd);

var getter = function () {
  return this.Value;
};

pd = {
  get: getter
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  get: getter,
  set: undefined,
  configurable: true,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo15";
var pd = {
  value: 0,
  configurable: true,
  enumerable: true
};
Object.defineProperty(o, propertyName, pd);

var getter = function () {
  return this.Value;
};

pd = {
  get: getter,
  configurable: false
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  get: getter,
  set: undefined,
  configurable: false,
  enumerable: true
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo16";
var pd = {
  set: function (arg) {
    print("setter was called");
    this.Value = arg;
  },
  configurable: true,
  enumerable: true
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: 1,
  configurable: true,
  enumerable: true
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo17";
var pd = {
  set: function (arg) {
    print("setter was called");
    this.Value = arg;
  },
  configurable: true,
  enumerable: false
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: 1,
  configurable: true,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo18";
var pd = {
  set: function (arg) {
    print("setter was called");
    this.Value = arg;
  },
  configurable: true,
  enumerable: false
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1,
  configurable: false
};
Object.defineProperty(o, propertyName, pd); // expected: configurable/enumerable = false/false.

var expected = {
  writable: false,
  value: 1,
  configurable: false,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo19";
var pd = {
  set: function (arg) {
    print("setter was called");
    this.Value = arg;
  },
  configurable: true,
  enumerable: true
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1,
  enumerable: false
};
Object.defineProperty(o, propertyName, pd); // expected: configurable/enumerable = true/false.

var expected = {
  writable: false,
  value: 1,
  configurable: true,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo20";
var pd = {
  value: 1
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 1
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: 1,
  configurable: false,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var o = getObject();
var propertyName = "foo21";
var pd = {
  value: 1
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 2,
  writable: true
};

try {
  Object.defineProperty(o, propertyName, pd);
} catch (e) {
  ;
}

var o = getObject();
var propertyName = "foo22";
var pd = {
  value: 1
};
Object.defineProperty(o, propertyName, pd);
pd = {
  value: 2,
  writable: false
};

try {
  Object.defineProperty(o, propertyName, pd);
} catch (e) {
  ;
}

var propertyName = "foo23";
var o = {
  foo23: 1
};
var pd = {
  value: 2,
  writable: false
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  writable: false,
  value: 2,
  configurable: true,
  enumerable: true
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
var propertyName = "foo24";
var o = {
  get foo24() {
    return this.Value;
  },

  set foo24(arg) {
    print("old setter");
    this.Value = arg;
  }

};

var newGetter = function () {
  return 2;
};

var newSetter = function (arg) {
  print("new setter");
};

var pd = {
  get: newGetter,
  set: newSetter
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  get: newGetter,
  set: newSetter,
  configurable: true,
  enumerable: true
};
print(expected, Object.getOwnPropertyDescriptor(o == propertyName));
var propertyName = "foo25";
var o = getObject();
var pd = {
  set: function (arg) {
    print("old setter");
    this.Value = arg;
  }
};
Object.defineProperty(o, propertyName, pd);
pd = {
  set: function (arg) {
    print("new setter");
  }
};

try {
  Object.defineProperty(o, propertyName, pd);
} catch (e) {
  ;
}

var propertyName = "foo26";
var o = getObject();
var pd = {
  get: function () {
    return this.Value;
  }
};
Object.defineProperty(o, propertyName, pd);
pd = {
  get: function () {
    print("new getter");
    return 2;
  }
};

try {
  Object.defineProperty(o, propertyName, pd);
} catch (e) {
  ;
}

var propertyName = "foo27";
var o = getObject();

var setter = function (arg) {
  print("setter");
};

var pd = {
  set: setter
};
Object.defineProperty(o, propertyName, pd);
pd = {
  get: undefined,
  set: setter
};
Object.defineProperty(o, propertyName, pd);
var expected = {
  get: undefined,
  set: setter,
  configurable: false,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName)); // define a data property.

var propertyName = "foo28";
var o = getObject();
var pd = {
  value: 1,
  configurable: true
};
Object.defineProperty(o, propertyName, pd); // re-define the property to be accessor property.

var log = "";

var getter = function () {
  log += "getter was called.";
  return this.Value;
};

var setter = function (arg) {
  log += "setter was called.";
  this.Value = arg;
};

pd = {
  get: getter,
  set: setter
};
Object.defineProperty(o, propertyName, pd); // set the value and get it.

var newValue = 2;
o[propertyName] = newValue;
var actualValue = o[propertyName]; // validate.

var expected = {
  get: getter,
  set: setter,
  configurable: true,
  enumerable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
print("setter was called.getter was called." == log);
print(newValue == actualValue);

try {
  (function () {
    Object.defineProperty([], "length", {
      configurable: false,
      get: function () {
        return 2;
      }
    });
  })();
} catch (e) {
  ;
}

try {
  (function () {
    Object.defineProperty(Array.prototype, "length", {
      configurable: false,
      get: function () {
        return 2;
      }
    });
  })();
} catch (e) {
  ;
}

var o = getObject();
var propertyName = "foo30";
var pd = {
  get: undefined
};
Object.defineProperty(o, propertyName, pd);
print(undefined == o[propertyName]);
var o = getObject();
var propertyName = "foo31";
var pd = {
  set: undefined
};
Object.defineProperty(o, propertyName, pd);
o[propertyName] = 1; // Make sure this does not throw.

print(undefined == o[propertyName]);
var o = getObject();
var propertyName = "foo32";
var pd = {
  configurable: true,
  value: 0
};
Object.defineProperty(o, propertyName, pd);
pd = {
  get: undefined
};
Object.defineProperty(o, propertyName, pd);
print(undefined == o[propertyName]);
var o = getObject();
var propertyName = "foo33";
var pd = {
  configurable: true,
  value: 0
};
Object.defineProperty(o, propertyName, pd);
pd = {
  set: undefined
};
Object.defineProperty(o, propertyName, pd);
o[propertyName] = 1; // Make sure this does not throw.

print(undefined == o[propertyName]);
var o = getObject();
var propertyName = "x";
Object.defineProperty(o, propertyName, {
  get: function () {
    return 0;
  },
  set: function (val) {
    print("setter was called although it shouldn't");
  },
  configurable: true
});
Object.preventExtensions(o);
var val = 1;
Object.defineProperty(o, propertyName, {
  value: val
});
var expected = {
  value: val,
  configurable: true,
  enumerable: false,
  writable: false
};
print(expected, Object.getOwnPropertyDescriptor(o, propertyName));
print(val == o[propertyName]);
print(false == Object.isExtensible(o));
var o = getObject();
Object.preventExtensions(o);
var propertyName = "foo01";
var pd = {};

try {
  Object.defineProperty(o, propertyName, pd);
} catch (e) {
  ;
}
