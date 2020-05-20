console.log("This performs a number of different tests on JavaScript getters and setters.");
console.log("the get set object declaration syntax");
var o1 = {
  'a': 7,

  get b() {
    return this.a + 1;
  },

  set b(x) {
    this.a = x;
  }

};
o1.b;
o1.b = 10;
o1.b;
console.log("__defineGetter__ and __defineSetter__");
var o2 = new Object();
o2.a = 7;

o2.__defineGetter__('b', function getB() {
  return this.a + 1;
});

o2.__defineSetter__('b', function setB(x) {
  this.a = x;
});

o2.b;
o2.b = 10;
o2.b;
console.log("Setting a value without having a setter");
var o3 = {
  get x() {
    return 42;
  }

};
o3.x = 10;
o3.x;
console.log("Getting a value without having a getter");
var o4 = {
  set x(y) {
    ;
  }

};

try {
  o4.x;
} catch (e) {
  ;
}

console.log("__lookupGetter__ and __lookupSetter__");
var o4 = new Object();

function getB() {
  return this.a;
}

function setB(x) {
  this.a = x;
}

o4.__defineGetter__('b', getB);

o4.__defineSetter__('b', setB);

o4.__lookupGetter__('b');

o4.__lookupSetter__('b');

console.log("__defineGetter__ and __defineSetter__ with various invalid arguments");
var numExceptions = 0;
var o5 = new Object();

try {
  o5.__defineSetter__('a', null);
} catch (e) {
  ;
}

try {
  o5.__defineSetter__('a', o5);
} catch (e) {
  ;
}

try {
  o5.__defineGetter__('a', null);
} catch (e) {
  ;
}

try {
  o5.__defineGetter__('a', o5);
} catch (e) {
  ;
}

console.log("setters and getters with exceptions");
var o6 = {
  get x() {
    throw 'Exception in get';
  },

  set x(f) {
    throw 'Exception in set';
  }

};
var x = 0;
var numExceptions = 0;

try {
  x = o6.x;
} catch (e) {
  ;
}

x;

try {
  o6.x = 42;
} catch (e) {
  ;
}

console.log("Defining a setter should also define a getter for the same property which returns undefined. Thus, a getter defined on the prototype should not be called.");
o7 = {
  'a': 7,

  set x(b) {
    this.a = b;
  }

};
o7.prototype = {
  get x() {
    return 42;
  }

};

try {
  o7.x;
} catch (e) {
  ;
}

console.log("If an object has a property and its prototype has a setter function for that property, then setting the property should set the property directly and not call the setter function.");
var o8 = new Object();
o8.numSets = 0;
o8.x = 10;

o8.__proto__.__defineSetter__('x', function () {
  this.numSets++;
});

o8.x = 20;
o8.numSets;
({
  getter: "foo",
  b: "bar"
});
testObj = {
  get getter() {
    return 'getter was called.';
  },

  b: 'bar'
};
typeof testObj.getter;
console.log("the get set with string property name");
var o9 = {
  'a': 7,

  get 'b'() {
    return this.a + 1;
  },

  set 'b'(x) {
    this.a = x;
  }

};
o9.b;
o9.b = 10;
o9.b;
console.log("the get set with numeric property name");
var o10 = {
  'a': 7,

  get 42() {
    return this.a + 1;
  },

  set 42(x) {
    this.a = x;
  }

};
o10[42];
o10[42] = 10;
o10[42];
console.log("Defining getter only and accessing __lookupSetter__ should not crash");
var o11 = new Object();

function getB() {
  return this.a;
}

o11.__defineGetter__('b', getB);

o11.__lookupSetter__('b');

console.log("Defining setter only and accessing __lookupGetter__ should not crash");
var o12 = new Object();

function setB(x) {
  this.a = x;
}

o12.__defineSetter__('b', setB);

o12.__lookupGetter__('b');

console.log("When undefined, accessing __lookupGetter__ and __lookupSetter__ should not crash");
var o13 = new Object();

o13.__lookupGetter__('b');

o13.__lookupSetter__('b');

console.log("__defineGetter__ and __defineSetter__ should throw exceptions when acting on sealed objects");
var o14 = {
  a: 14
};
Object.seal(o14);

try {
  o14.__defineGetter__('a', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o14.__defineGetter__('b', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o14.__defineSetter__('a', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o14.__defineSetter__('b', function () {
    ;
  });
} catch (e) {
  ;
}

console.log("__defineGetter__ and __defineSetter__ should throw exceptions when acting on frozen objects");
var o15 = {
  a: 15
};
Object.freeze(o15);

try {
  o15.__defineGetter__('a', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o15.__defineGetter__('b', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o15.__defineSetter__('a', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o15.__defineSetter__('b', function () {
    ;
  });
} catch (e) {
  ;
}

console.log("__defineGetter__ and __defineSetter__ should throw exceptions when acting on unconfigurable properties");
var o16 = {
  a: 16
};
Object.defineProperty(o16, "b", {
  value: 16,
  configurable: false
});

try {
  o16.__defineGetter__('a', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o16.__defineSetter__('a', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o16.__defineSetter__('b', function () {
    ;
  });
} catch (e) {
  ;
}

try {
  o16.__defineSetter__('b', function () {
    ;
  });
} catch (e) {
  ;
}

console.log("__lookupGetter__ can be interrupted by a proxy throwing an exception");

var getter17 = () => {
  return "WebKit!";
};

var o17 = Object.defineProperty(new Object(), 'property', {
  get: getter17
});
o17.property;

o17.__lookupGetter__('property');

o17.__lookupSetter__('property');

var o17Exception = {
  toString: () => {
    return "o17 Proxy raised exception";
  }
};
var o17Proxy = new Proxy(o17, {
  getOwnPropertyDescriptor: () => {
    throw o17Exception;
  }
});

try {
  o17Proxy.__lookupGetter__('property');
} catch (e) {
  ;
}

try {
  o17Proxy.__lookupSetter__('property');
} catch (e) {
  ;
}

o17Proxy.property;
o17.property;

o17.__lookupGetter__('property');

console.log("__lookupSetter__ can be interrupted by a proxy throwing an exception");

var setter18 = function (newValue) {
  return this.value = newValue;
};

var o18 = Object.defineProperty(new Object(), 'property', {
  set: setter18
});
o18.property = 5;
o18.property;
o18.value;

o18.__lookupGetter__('property');

o18.__lookupSetter__('property');

var o18Exception = {
  toString: () => {
    return "o18 Proxy raised exception";
  }
};
var o18Proxy = new Proxy(o18, {
  getOwnPropertyDescriptor: () => {
    throw o18Exception;
  }
});

try {
  o18Proxy.__lookupGetter__('property');
} catch (e) {
  ;
}

try {
  o18Proxy.__lookupSetter__('property');
} catch (e) {
  ;
}

try {
  o18Proxy.property = 'JavaScriptCore!';
} catch (e) {
  ;
}

o18Proxy.property;
o18Proxy.value;
o18.property = 'JavaScriptCore!';
o18.property;
o18.value;

o18.__lookupGetter__('property');

o18.__lookupSetter__('property');
