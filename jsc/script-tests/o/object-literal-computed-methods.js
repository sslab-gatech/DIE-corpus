console.log("basic tests for object literal computed methods");

try {
  o = {
    ['f' + 'oo']() {
      return 10;
    }

  };
  ;
} catch (e) {
  ;
}

o.foo();
typeof o.foo;
o.foo.length;
o.foo.name;
o.foo.toString();
Object.getOwnPropertyDescriptor(o, 'foo').value;
Object.getOwnPropertyDescriptor(o, 'foo').enumerable;
Object.getOwnPropertyDescriptor(o, 'foo').configurable;
Object.getOwnPropertyDescriptor(o, 'foo').writable;

try {
  methodName = 'add';
  o = {
    [methodName](x, y) {
      return x + y;
    }

  };
  ;
} catch (e) {
  ;
}

o.add(42, -10);
typeof o.add;
o.add.length;
o.add.name;
o.add.toString();

try {
  o = {
    [function () {
      return 'method';
    }()](x, y) {
      return x + y;
    }

  };
  ;
} catch (e) {
  ;
}

o.method(142, -10);

try {
  o = {
    [10 * 10]() {
      return 100;
    }

  };
  ;
} catch (e) {
  ;
}

o[100]();
o['100']();

try {
  o = {
    [100 + 0.100]() {
      return 100.100;
    }

  };
  ;
} catch (e) {
  ;
}

o[100.1]();
o['100.1']();

try {
  o = {
    ['a' + 'dd']([x, y]) {
      return x + y;
    }

  };
  ;
} catch (e) {
  ;
}

o.add([142, -100]);

try {
  o = {
    [Array]([x, y]) {
      return x + y;
    }

  };
  ;
} catch (e) {
  ;
}

o[Array.toString()]([142, -100]);
a = 1;
b = 2;
c = 3;
foo = "foo";
bar = "bar";

try {
  o = {
    foo() {
      return 10;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    foo() {
      return 10;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    [true]() {
      return true;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    [NaN]() {
      return NaN;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    [eval]() {
      return eval;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    a: 1,

    [foo]() {
      return 10;
    },

    [bar]() {
      return 20;
    },

    b: 2
  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    a: 1,

    [foo]() {
      return 10;
    },

    [bar]() {
      return 20;
    },

    b
  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    a: 1,

    [foo]() {
      return 10;
    },

    b: b,

    [bar]() {
      return 20;
    },

    c: 2
  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    a: 1,

    [foo]() {
      return 10;
    },

    b,

    [bar]() {
      return 20;
    },

    c
  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    [foo]: {
      [bar]() {
        return 100;
      }

    }
  };
  ;
} catch (e) {
  ;
}

o.foo.bar(); // Duplicate methods are okay.

try {
  o = {
    [foo]() {
      return 10;
    },

    [foo]() {
      return 20;
    }

  };
  ;
} catch (e) {
  ;
}

o.foo(); // Method named "get" or "set".

try {
  o = {
    ['get'](x, y) {
      return x + y;
    }

  };
  ;
} catch (e) {
  ;
}

o.get('hello', 'world');

try {
  o = {
    ['set'](x, y) {
      return x + y;
    }

  };
  ;
} catch (e) {
  ;
}

o.set('hello', 'world'); // Function parse errors.

/*
try { ({ [](,,,){} }); } catch(e) {}
try { ({ [1+](){} }); } catch(e) {}
try { ({ [1,](){} }); } catch(e) {}
try { ({ [1,'name'](){} }); } catch(e) {}
try { ({ [[1](){} }); } catch(e) {}
try { ({ [foo](,,,){} }); } catch(e) {}
try { ({ [foo](a{}, bar(){} }); } catch(e) {}
try { ({ [foo](a, b), bar(){} }); } catch(e) {}
try { ({ [foo](a, b) { if }, bar(){} }); } catch(e) {}
*/
// __proto__ method should be not modify the prototype.

({
  __proto__: function () {
    ;
  }
}) instanceof Function;
({
  ['__proto__']() {
    ;
  }

}) instanceof Function;
({
  ['__proto__']() {
    ;
  }

}).__proto__ instanceof Function;
