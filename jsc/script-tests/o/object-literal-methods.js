console.log("basic tests for object literal methods");

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
  o = {
    add(x, y) {
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
    'add'(a, b, c) {
      return a + b + c;
    }

  };
  ;
} catch (e) {
  ;
}

o.add(1, 2, 3);

try {
  o = {
    'a(d)d'(a, b, c) {
      return a + b + c;
    }

  };
  ;
} catch (e) {
  ;
}

o['a(d)d'](1, 2, 3);

try {
  o = {
    100() {
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
    100.100() {
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
    1e3() {
      return 1e3;
    }

  };
  ;
} catch (e) {
  ;
}

o[1e3]();
o['1000']();

try {
  o = {
    0x11() {
      return 0x11;
    }

  };
  ;
} catch (e) {
  ;
}

o[0x11]();
o['17']();

try {
  o = {
    add([x, y]) {
      return x + y;
    }

  };
  ;
} catch (e) {
  ;
}

o.add([142, -100]);
a = 1;
b = 2;
c = 3;

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
    true() {
      return true;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    NaN() {
      return NaN;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  o = {
    eval() {
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

    foo() {
      return 10;
    },

    bar() {
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

    foo() {
      return 10;
    },

    bar() {
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

    foo() {
      return 10;
    },

    b: b,

    bar() {
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

    foo() {
      return 10;
    },

    b,

    bar() {
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
    inner: {
      method() {
        return 100;
      }

    }
  };
  ;
} catch (e) {
  ;
}

o.inner.method(); // Duplicate methods are okay.

try {
  o = {
    foo() {
      return 10;
    },

    foo() {
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
    get(x, y) {
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
    set(x, y) {
      return x + y;
    }

  };
  ;
} catch (e) {
  ;
}

o.set('hello', 'world'); // Getter/Setter syntax still works.

({
  get x() {
    return true;
  }

}).x;
({
  get 'x'() {
    return true;
  }

}).x;
({
  get 42() {
    return true;
  }

})['42'];
!!Object.getOwnPropertyDescriptor({
  set x(value) {
    ;
  }

}, 'x').set;
!!Object.getOwnPropertyDescriptor({
  set 'x'(value) {
    ;
  }

}, 'x').set;
!!Object.getOwnPropertyDescriptor({
  set 42(value) {
    ;
  }

}, '42').set; // Function parse errors.
// try { ({ (){} }); } catch(e) {}
// try { ({ foo(,,,){} }); } catch(e) {}
// try { ({ foo(a{}, bar(){} }); } catch(e) {}
// try { ({ foo(a, b), bar(){} }); } catch(e) {}
// try { ({ foo(a, b) { if }, bar(){} }); } catch(e) {}
// __proto__ method should be not modify the prototype.

({
  __proto__: function () {
    ;
  }
}) instanceof Function;
({
  __proto__() {
    ;
  }

}) instanceof Function;
({
  __proto__() {
    ;
  }

}).__proto__ instanceof Function; // try { { f() { return super.f(); } }.f(); } catch(e) {}
// try { new ({ f() { return super(); }.f); } catch(e) {}
// try { o = { f() { } }; new ({ __proto__: o, f() { return super(); } }).f; } catch(e) {}

try {
  ({
    f() {
      return (() => super.f())();
    }

  }).f();
} catch (e) {
  ;
}

o = {
  f() {
    return true;
  }

};
({
  __proto__: o,

  f() {
    return super.f();
  }

}).f();
o = {
  get p() {
    return true;
  }

};
({
  __proto__: o,

  get p() {
    return super.p;
  }

}).p;
o = {
  set p(p2) {
    ;
  }

};
({
  __proto__: o,

  set p(p2) {
    super.p = p2;
  }

}).p = true;
o = {
  f() {
    return true;
  }

};
({
  __proto__: o,

  f() {
    return (() => super.f())();
  }

}).f();
