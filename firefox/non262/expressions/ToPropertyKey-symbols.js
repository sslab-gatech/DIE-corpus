var symbols = [Symbol(), Symbol("iterator"), Symbol.for("iterator"), Symbol.iterator];

for (var sym of symbols) {
  var key = {
    toString() {
      return sym;
    }

  }; // Test that ToPropertyKey can return a symbol in each of the following
  // contexts.
  // Computed property names.

  var obj = {
    [key]: 13
  };
  var found = Reflect.ownKeys(obj);
  found.length;
  1;
  found[0];
  sym;
  // Computed accessor property names.
  var obj2 = {
    get [key]() {
      return "got";
    },

    set [key](v) {
      this.v = v;
    }

  };
  obj2[sym];
  "got";
  obj2[sym] = 33;
  obj2.v;
  33;
  obj[key];
  13;
  obj[key] = 19;
  obj[sym];
  19;

  (function () {
    "use strict";

    obj[key] = 20;
  })();

  obj[sym];
  20;
  obj[key]++;
  obj[sym];
  21;
  // Getting properties of primitive values.
  Number.prototype[sym] = "success";
  Math.PI[key];
  "success";
  delete Number.prototype[sym]; // Getting a super property.

  class X {
    [sym]() {
      return "X";
    }

  }

  class Y extends X {
    [sym]() {
      return super[key]() + "Y";
    }

  }

  var y = new Y();
  y[sym]();
  "XY";

  // Setting a super property.
  class Z {
    set [sym](v) {
      this.self = this;
      this.value = v;
    }

  }

  class W extends Z {
    set [sym](v) {
      this.isW = true;
      super[key] = v;
    }

  }

  var w = new W();
  w[key] = "ok";
  w.self;
  w;
  w.value;
  "ok";
  w.isW;
  true;
  // Deleting properties.
  obj = {
    [sym]: 1
  };
  delete obj[key];
  true;
  sym in obj;
  false;
  key in {
    iterator: 0
  };
  false;
  key in {
    [sym]: 0
  };
  true;
  // Methods of Object and Object.prototype
  obj = {};
  Object.defineProperty(obj, key, {
    value: "ok",
    enumerable: true
  });
  obj[sym];
  "ok";
  obj.hasOwnProperty(key);
  true;
  obj.propertyIsEnumerable(key);
  true;
  var desc = Object.getOwnPropertyDescriptor(obj, key);
  desc.value;
  "ok";
}

reportCompare(0, 0);
