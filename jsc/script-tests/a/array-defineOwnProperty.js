console.log("This test checks the behavior of [[DefineOwnProperty]] applied to Array objects (see ES5.1 15.4.5.1)."); // Test that properties other than length, array indices are handled as normal.

Object.defineProperty([], 'x', {
  get: function () {
    return true;
  }
}).x; // The length property can be set, and can be made read-only.

Object.defineProperty([], 'length', {
  value: 1
}).length;
var a = Object.defineProperty([], 'length', {
  writable: false
});
a[1] = 1;
a.length;
var a = Object.defineProperty([], 'length', {
  writable: false
});
a.length = 1;
a.length; // If writable is not specified, it should not change.

var a = Object.defineProperty([], 'length', {});
a.length = 1;
a.length; // The length property can be replaced with an accessor, or made either enumerable or configurable.

try {
  Object.defineProperty([], 'length', {
    get: function () {
      return true;
    }
  });
} catch (e) {
  ;
}

try {
  Object.defineProperty([], 'length', {
    enumerable: true
  });
} catch (e) {
  ;
}

try {
  Object.defineProperty([], 'length', {
    configurable: true
  });
} catch (e) {
  ;
}

try {
  Object.defineProperty(Object.defineProperty([], 'length', {
    writable: false
  }), 'length', {
    writable: true
  });
} catch (e) {
  ;
} // The value of an indexed property can be set.


var a = Object.defineProperty([], '0', {
  value: 42
});
a[0]; // An indexed property can be made non-writable/enumerable/configurable.

var a = Object.defineProperty([42], '0', {
  writable: false
});
a[0] = 1;
a[0];
var a = Object.defineProperty([42], '0', {
  enumerable: false
});
a[0] + Object.keys(a).length;
var a = Object.defineProperty([42], '0', {
  configurable: false
});
a.length = 0;
a[0]; // An indexed property can be defined as an accessor.

var foo = 0;
Object.defineProperty([], '0', {
  set: function (x) {
    foo = x;
  }
})[0] = 42;
foo;
Object.defineProperty([], '0', {
  get: function () {
    return true;
  }
})[0]; // A configurable, non-writable property can be made writable, but a non-configurable one cannot.

Object.defineProperty(Object.defineProperty([true], '0', {
  configurable: true,
  writable: false
}), '0', {
  writable: true
})[0];

try {
  Object.defineProperty(Object.defineProperty([true], '0', {
    configurable: false,
    writable: false
  }), '0', {
    writable: true
  })[0];
} catch (e) {
  ;
} // Reassigning the value is okay if the property is writable.


Object.defineProperty(Object.defineProperty([], '0', {
  value: 1,
  writable: true
}), '0', {
  value: 2
})[0]; // Reassigning the value is okay if the value doesn't change.

Object.defineProperty(Object.defineProperty([], '0', {
  value: 1
}), '0', {
  value: 1
})[0];
Object.defineProperty(Object.defineProperty([], '0', {
  value: Number.NaN
}), '0', {
  value: -Number.NaN
})[0];
Object.defineProperty(Object.defineProperty([], '0', {
  value: 'okay'.substring(0, 2)
}), '0', {
  value: 'not ok'.substring(4, 6)
})[0];
Object.defineProperty(Object.defineProperty([], '0', {
  value: true
}), '0', {
  value: true
})[0];
Object.defineProperty(Object.defineProperty([], '0', {
  value: false
}), '0', {
  value: false
})[0];
Object.defineProperty(Object.defineProperty([], '0', {
  value: null
}), '0', {
  value: null
})[0];
Object.defineProperty(Object.defineProperty([], '0', {
  value: undefined
}), '0', {
  value: undefined
})[0];
Object.defineProperty(Object.defineProperty([], '0', {
  value: Math
}), '0', {
  value: Math
})[0]; // Reassigning the value is not okay if the value changes.

try {
  Object.defineProperty(Object.defineProperty([], '0', {
    value: 1
  }), '0', {
    value: 2
  })[0];
} catch (e) {
  ;
}

try {
  Object.defineProperty(Object.defineProperty([], '0', {
    value: 'okay'
  }), '0', {
    value: 'not ok'
  })[0];
} catch (e) {
  ;
}

try {
  Object.defineProperty(Object.defineProperty([], '0', {
    value: true
  }), '0', {
    value: false
  })[0];
} catch (e) {
  ;
}

try {
  Object.defineProperty(Object.defineProperty([], '0', {
    value: false
  }), '0', {
    value: true
  })[0];
} catch (e) {
  ;
}

try {
  Object.defineProperty(Object.defineProperty([], '0', {
    value: Math
  }), '0', {
    value: Object
  })[0];
} catch (e) {
  ;
} // Reassigning the value is not okay if the type changes.


try {
  Object.defineProperty(Object.defineProperty([], '0', {
    value: null
  }), '0', {
    value: undefined
  })[0];
} catch (e) {
  ;
}

try {
  Object.defineProperty(Object.defineProperty([], '0', {
    value: undefined
  }), '0', {
    value: null
  })[0];
} catch (e) {
  ;
}

Object.defineProperty(Array.prototype, "0", {
  set: function () {
    throw false;
  }
});
Object.defineProperty(Array.prototype, "1", {
  set: function () {
    throw false;
  }
});
var arrObj = [, false];
Object.defineProperty(arrObj, "0", {
  set: function (x) {
    this.set = x === 42;
  }
});
arrObj[0] = 42;
arrObj.set;
;
arrObj[1] = true;
arrObj[1];
;
successfullyParsed = true;
