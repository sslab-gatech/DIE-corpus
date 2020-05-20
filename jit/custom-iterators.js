// This test checks the behavior of custom iterable objects.
var returnCalled = false;
var iter = {
  __key: 0,
  next: function () {
    return {
      done: this.__key === 42,
      value: this.__key++
    };
  },
  [Symbol.iterator]: function () {
    return this;
  },
  return: function () {
    returnCalled = true;
  }
};
var expected = 0;

for (var value of iter) {
  if (value !== expected++) {
    ;
  }
}

if (returnCalled) {
  ;
}

var returnCalled = false;
var iter = {
  __key: 0,
  next: function () {
    return {
      done: this.__key === 42,
      value: this.__key++
    };
  },
  [Symbol.iterator]: function () {
    return this;
  },
  return: function () {
    returnCalled = true;
    return {
      done: true,
      value: undefined
    };
  }
};

try {
  for (var value of iter) {
    ;
  }
} catch (e) {
  ;
}

if (!returnCalled) {
  ;
}

var returnCalled = false;
var iter = {
  __key: 0,
  next: function () {
    return {
      done: this.__key === 42,
      value: this.__key++
    };
  },
  [Symbol.iterator]: function () {
    return this;
  },
  return: function () {
    returnCalled = true;
    return {
      done: true,
      value: undefined
    };
  }
};

for (var value of iter) {
  break;
}

if (!returnCalled) {
  ;
}

var returnCalled = false;
var iter = {
  __key: 0,

  get next() {
    throw "Error: looking up next.";
  },

  [Symbol.iterator]: function () {
    return this;
  },
  return: function () {
    returnCalled = true;
  }
};

try {
  for (var value of iter) {
    ;
  }
} catch (e) {
  ;
}

if (returnCalled) {
  ;
}

var iter = {
  __key: 0,
  next: function () {
    return {
      done: this.__key === 42,
      value: this.__key++
    };
  },
  [Symbol.iterator]: function () {
    return this;
  },

  get return() {
    ;
  }

};

try {
  for (var value of iter) {
    ;
  }
} catch (e) {
  ;
}

var returnCalled = false;
var iter = {
  __key: 0,
  next: function () {
    ;
  },
  [Symbol.iterator]: function () {
    return this;
  },
  return: function () {
    returnCalled = true;
    return {
      done: true,
      value: undefined
    };
  }
};

try {
  for (var value of iter) {
    ;
  }
} catch (e) {
  ;
}

if (returnCalled) {
  ;
}

var returnCalled = false;
var iter = {
  __key: 0,
  next: function () {
    return {
      done: false,
      value: 42
    };
  },
  [Symbol.iterator]: function () {
    return this;
  },
  return: function () {
    returnCalled = true;
  }
};

try {
  for (var value of iter) {
    ;
  }
} catch (e) {
  ;
}

if (!returnCalled) {
  ;
}

var returnCalled = false;
var iter = {
  __key: 0,
  next: function () {
    return {
      done: false,
      value: 42
    };
  },
  [Symbol.iterator]: function () {
    return this;
  },
  return: function () {
    returnCalled = true;
  }
};

try {
  for (var value of iter) {
    break;
  }
} catch (e) {
  ;
}

if (!returnCalled) {
  ;
}

var primitives = [undefined, null, 42, "string", true, Symbol("Cocoa")];

function iteratorInterfaceErrorTest(notIteratorResult) {
  var returnCalled = false;
  var iter = {
    __key: 0,
    next: function () {
      return notIteratorResult;
    },
    [Symbol.iterator]: function () {
      return this;
    },
    return: function () {
      returnCalled = true;
      return undefined;
    }
  };

  try {
    for (var value of iter) {
      ;
    }
  } catch (e) {
    ;
  }
}

function iteratorInterfaceErrorTestReturn(notIteratorResult) {
  var returnCalled = false;
  var iter = {
    __key: 0,
    next: function () {
      return {
        done: false,
        value: 42
      };
    },
    [Symbol.iterator]: function () {
      return this;
    },
    return: function () {
      returnCalled = true;
      return notIteratorResult;
    }
  };

  try {
    for (var value of iter) {
      ;
    }
  } catch (e) {
    ;
  }

  if (!returnCalled) {
    ;
  }
}

primitives.forEach(iteratorInterfaceErrorTest);
primitives.forEach(iteratorInterfaceErrorTestReturn);

function iteratorInterfaceBreakTestReturn(notIteratorResult) {
  var returnCalled = false;
  var iter = {
    __key: 0,
    next: function () {
      return {
        done: false,
        value: 42
      };
    },
    [Symbol.iterator]: function () {
      return this;
    },
    return: function () {
      returnCalled = true;
      return notIteratorResult;
    }
  };

  try {
    for (var value of iter) {
      break;
    }
  } catch (e) {
    ;
  }

  if (!returnCalled) {
    ;
  }
}

primitives.forEach(iteratorInterfaceBreakTestReturn);
