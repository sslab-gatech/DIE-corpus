//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var o = new Object();
print("*** Setting data property ***");
o.x = 23;
print("o.x=" + o.x);
print("*** Setting data property using defineProperty ***");
Object.defineProperty(o, "x", {
  value: 24
});
print("o.x=" + o.x);
print("*** Setting accessor property using defineProperty ***");
var x = "";
var z = "";
Object.defineProperty(o, "x", {
  get: function () {
    print("Getter called");
    return x;
  },
  set: function (val) {
    print("Setter called");
    z = 1000;
    x = val;
  }
});
o.x = 25;
print("o.x=" + o.x);
print("x=" + x);
print("z=" + z);
print("*** Setting backing store for accessor ***");
x = 26;
print("o.x=" + o.x);
var ab = new Object();
Object.defineProperty(ab, "foo", {
  get: function () {
    print("In getter");
  },
  configurable: true
});
Object.defineProperty(ab, "foo", {
  set: function (arg) {
    print("In setter");
  }
});
ab.foo;
ab.foo = 10;
delete ab.foo;

try {
  var ab = new Object();
  Object.defineProperty(ab, "foo", {
    get: function () {
      print("In getter");
    }
  });
  ab.foo;
  ab.foo = 10;
} catch (e) {
  print(e.description);
}

delete ab.foo;

try {
  var ab = new Object();
  Object.defineProperty(ab, "foo", {
    set: function (arg) {
      print("In setter");
    }
  });
  print(ab.foo);
  ab.foo = 10;
} catch (e) {
  print(e.description);
}

delete ab.foo;
var o = {};
o.a = 1;
o.b = 2;
o.c = 3;
o.d = 4;
o.e = 5;
o.f = 6;
o.g = 7;
o.h = 8;
o.i = 9;
o.j = 10;
o.k = 11;
o.l = 12;
o.m = 13;
o.n = 14;
o.o = 15;
o.p = 16;
o.q = 17;
Object.defineProperty(o, "qqq", {
  set: function () {
    ;
  },
  get: function () {
    print("get");
  }
});
print(o.qqq);
delete o.qqq; // prototype setter/getter

function Point() {
  this.x = 0;
  this.y = 0;
}

Point.prototype = {
  print: function () {
    print("x:" + this.x + ", y:" + this.y + ", z:" + this.z);
  }
};
Object.defineProperty(Point.prototype, "z", {
  set: function (v) {
    this._z = v;
  },
  get: function () {
    return this._z;
  }
});
var pt = new Point();
pt.z = 12;
pt.print();
Object.defineProperty(this, "abc", {
  set: function () {
    ;
  },
  get: function () {
    print("get global");
  }
});
print(abc);
delete this.abc;

(function () {
  print("*** Getters, prototypes, and deleting properties ***");

  function A() {
    ;
  }

  ;
  A.prototype = {
    get p() {
      return this._p;
    },

    set p(v) {
      this._p = v;
    }

  };
  var o = new A();
  o.p;
  delete A.prototype.p;
  o.p;
  print(o.p);
  print(A.prototype.p);
})();

(function () {
  print("*** Setters, prototypes, and deleting properties ***");

  function A() {
    ;
  }

  ;
  A.prototype = {
    get p() {
      return this._p;
    },

    set p(v) {
      this._p = v;
    }

  };
  var o = new A();
  o._p = undefined; // create the property to stop the setter from changing the type

  o.p = 1;
  delete A.prototype.p;
  o.p = 2;
  print(o.p);
  print(A.prototype.p);
})();
