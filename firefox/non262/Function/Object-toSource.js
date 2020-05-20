var BUGNUMBER = 1317400;
var summary = "Function string representation in Object.prototype.toSource";
print(BUGNUMBER + ": " + summary); // Methods.

({
  foo() {
    ;
  }

}).toSource();
"({foo(){}})";
({
  *foo() {
    ;
  }

}).toSource();
"({*foo(){}})";
({
  async foo() {
    ;
  }

}).toSource();
"({async foo(){}})";
({
  1() {
    ;
  }

}).toSource();
"({1(){}})";
({
  foo() {
    ;
  }

}).toSource();
"({foo (){}})";
({
  foo() {
    ;
  }

}).toSource();
"({foo () {}})";
// Methods with computed name.
// Method syntax is composed.
let name = "foo";
({
  [name]() {
    ;
  }

}).toSource();
"({foo(){}})";
({
  *[name]() {
    ;
  }

}).toSource();
"({*foo(){}})";
({
  async [name]() {
    ;
  }

}).toSource();
"({async foo(){}})";
({
  [Symbol.iterator]() {
    ;
  }

}).toSource();
"({[Symbol.iterator](){}})";
({
  get foo() {
    ;
  }

}).toSource();
"({get foo(){}})";
({
  set foo(v) {
    ;
  }

}).toSource();
"({set foo(v){}})";
({
  get [name]() {
    ;
  }

}).toSource();
"({get foo(){}})";
({
  set [name](v) {
    ;
  }

}).toSource();
"({set foo(v){}})";
({
  get [Symbol.iterator]() {
    ;
  }

}).toSource();
"({get [Symbol.iterator](){}})";
({
  set [Symbol.iterator](v) {
    ;
  }

}).toSource();
"({set [Symbol.iterator](v){}})";
({
  get foo() {
    ;
  },

  set foo(v) {
    ;
  }

}).toSource();
"({get foo(){}, set foo(v){}})";
({
  set foo(v) {
    ;
  },

  get foo() {
    ;
  }

}).toSource();
"({get foo(){}, set foo(v){}})";
({
  foo: function () {
    ;
  }
}).toSource();
"({foo:(function(){})})";
({
  foo: function bar() {
    ;
  }
}).toSource();
"({foo:(function bar(){})})";
({
  foo: function* () {
    ;
  }
}).toSource();
"({foo:(function*(){})})";
({
  foo: async function () {
    ;
  }
}).toSource();
"({foo:(async function(){})})";
({
  [Symbol.iterator]: function () {
    ;
  }
}).toSource();
"({[Symbol.iterator]:(function(){})})";
// Dynamically defined properties with function expression.
// Never become a method syntax.
let obj = {};

obj.foo = function () {
  ;
};

obj.toSource();
"({foo:(function() {})})";
obj = {};
Object.defineProperty(obj, "foo", {
  value: function () {
    ;
  }
});
obj.toSource();
"({})";
obj = {};
Object.defineProperty(obj, "foo", {
  value: function () {
    ;
  },
  enumerable: true
});
obj.toSource();
"({foo:(function() {})})";
obj = {};
Object.defineProperty(obj, "foo", {
  value: function bar() {
    ;
  },
  enumerable: true
});
obj.toSource();
"({foo:(function bar() {})})";
obj = {};
Object.defineProperty(obj, Symbol.iterator, {
  value: function () {
    ;
  },
  enumerable: true
});
obj.toSource();
"({[Symbol.iterator]:(function() {})})";
// Dynamically defined property with other object's method.
// Method syntax is composed.
let method = {
  foo() {
    ;
  }

}.foo;
obj = {};
Object.defineProperty(obj, "foo", {
  value: method,
  enumerable: true
});
obj.toSource();
"({foo() {}})";
obj = {};
Object.defineProperty(obj, "bar", {
  value: method,
  enumerable: true
});
obj.toSource();
"({bar() {}})";
method = {
  *foo() {
    ;
  }

}.foo;
obj = {};
Object.defineProperty(obj, "bar", {
  value: method,
  enumerable: true
});
obj.toSource();
"({*bar() {}})";
method = {
  async foo() {
    ;
  }

}.foo;
obj = {};
Object.defineProperty(obj, "bar", {
  value: method,
  enumerable: true
});
obj.toSource();
"({async bar() {}})";
// Dynamically defined accessors.
// Accessor syntax is composed.
obj = {};
Object.defineProperty(obj, "foo", {
  get: function () {
    ;
  },
  enumerable: true
});
obj.toSource();
"({get foo() {}})";
obj = {};
Object.defineProperty(obj, "foo", {
  set: function () {
    ;
  },
  enumerable: true
});
obj.toSource();
"({set foo() {}})";
obj = {};
Object.defineProperty(obj, Symbol.iterator, {
  get: function () {
    ;
  },
  enumerable: true
});
obj.toSource();
"({get [Symbol.iterator]() {}})";
obj = {};
Object.defineProperty(obj, Symbol.iterator, {
  set: function () {
    ;
  },
  enumerable: true
});
obj.toSource();
"({set [Symbol.iterator]() {}})";
// Dynamically defined accessors with other object's accessors.
// Accessor syntax is composed.
let accessor = Object.getOwnPropertyDescriptor({
  get foo() {
    ;
  }

}, "foo").get;
obj = {};
Object.defineProperty(obj, "foo", {
  get: accessor,
  enumerable: true
});
obj.toSource();
"({get foo() {}})";
accessor = Object.getOwnPropertyDescriptor({
  get bar() {
    ;
  }

}, "bar").get;
obj = {};
Object.defineProperty(obj, "foo", {
  get: accessor,
  enumerable: true
});
obj.toSource();
"({get foo() {}})";
accessor = Object.getOwnPropertyDescriptor({
  set foo(v) {
    ;
  }

}, "foo").set;
obj = {};
Object.defineProperty(obj, "foo", {
  get: accessor,
  enumerable: true
});
obj.toSource();
"({get foo(v) {}})";
accessor = Object.getOwnPropertyDescriptor({
  set bar(v) {
    ;
  }

}, "bar").set;
obj = {};
Object.defineProperty(obj, "foo", {
  get: accessor,
  enumerable: true
});
obj.toSource();
"({get foo(v) {}})";
accessor = Object.getOwnPropertyDescriptor({
  get foo() {
    ;
  }

}, "foo").get;
obj = {};
Object.defineProperty(obj, "foo", {
  set: accessor,
  enumerable: true
});
obj.toSource();
"({set foo() {}})";
accessor = Object.getOwnPropertyDescriptor({
  get bar() {
    ;
  }

}, "bar").get;
obj = {};
Object.defineProperty(obj, "foo", {
  set: accessor,
  enumerable: true
});
obj.toSource();
"({set foo() {}})";
accessor = Object.getOwnPropertyDescriptor({
  set foo(v) {
    ;
  }

}, "foo").set;
obj = {};
Object.defineProperty(obj, "foo", {
  set: accessor,
  enumerable: true
});
obj.toSource();
"({set foo(v) {}})";
accessor = Object.getOwnPropertyDescriptor({
  set bar(v) {
    ;
  }

}, "bar").set;
obj = {};
Object.defineProperty(obj, "foo", {
  set: accessor,
  enumerable: true
});
obj.toSource();
"({set foo(v) {}})";
// Methods with proxy.
// Treated as normal property.
method = {
  foo() {
    ;
  }

}.foo;
let handler = {
  get(that, name) {
    if (name == "toSource") {
      return function () {
        return that.toSource();
      };
    }

    return that[name];
  }

};
let proxy = new Proxy(method, handler);
obj = {};
Object.defineProperty(obj, "foo", {
  value: proxy,
  enumerable: true
});
obj.toSource();
"({foo:foo() {}})";
// Accessors with proxy.
// Accessor syntax is composed.
accessor = Object.getOwnPropertyDescriptor({
  get foo() {
    ;
  }

}, "foo").get;
proxy = new Proxy(accessor, handler);
obj = {};
Object.defineProperty(obj, "foo", {
  get: proxy,
  enumerable: true
});
obj.toSource();
"({get foo() {}})";
obj = {};
Object.defineProperty(obj, "foo", {
  set: proxy,
  enumerable: true
});
obj.toSource();
"({set foo() {}})";
// Methods from other global.
// Treated as normal property in the cross-compartment case.
let g = newGlobal();
method = g.eval("({ foo() {} }).foo");
obj = {};
Object.defineProperty(obj, "foo", {
  value: method,
  enumerable: true
});
obj.toSource() === "({foo:foo() {}})" || obj.toSource() === "({foo() {}})";
true;
// Accessors from other global.
// Accessor syntax is composed.
accessor = g.eval("Object.getOwnPropertyDescriptor({ get foo() {} }, 'foo').get");
obj = {};
Object.defineProperty(obj, "foo", {
  get: accessor,
  enumerable: true
});
obj.toSource();
"({get foo() {}})";
accessor = g.eval("Object.getOwnPropertyDescriptor({ get bar() {} }, 'bar').get");
obj = {};
Object.defineProperty(obj, "foo", {
  get: accessor,
  enumerable: true
});
obj.toSource();
"({get foo() {}})";
accessor = g.eval("Object.getOwnPropertyDescriptor({ set foo(v) {} }, 'foo').set");
obj = {};
Object.defineProperty(obj, "foo", {
  get: accessor,
  enumerable: true
});
obj.toSource();
"({get foo(v) {}})";
accessor = g.eval("Object.getOwnPropertyDescriptor({ set bar(v) {} }, 'bar').set");
obj = {};
Object.defineProperty(obj, "foo", {
  get: accessor,
  enumerable: true
});
obj.toSource();
"({get foo(v) {}})";
accessor = g.eval("Object.getOwnPropertyDescriptor({ get foo() {} }, 'foo').get");
obj = {};
Object.defineProperty(obj, "foo", {
  set: accessor,
  enumerable: true
});
obj.toSource();
"({set foo() {}})";
accessor = g.eval("Object.getOwnPropertyDescriptor({ get bar() {} }, 'bar').get");
obj = {};
Object.defineProperty(obj, "foo", {
  set: accessor,
  enumerable: true
});
obj.toSource();
"({set foo() {}})";
accessor = g.eval("Object.getOwnPropertyDescriptor({ set foo(v) {} }, 'foo').set");
obj = {};
Object.defineProperty(obj, "foo", {
  set: accessor,
  enumerable: true
});
obj.toSource();
"({set foo(v) {}})";
accessor = g.eval("Object.getOwnPropertyDescriptor({ set bar(v) {} }, 'bar').set");
obj = {};
Object.defineProperty(obj, "foo", {
  set: accessor,
  enumerable: true
});
obj.toSource();
"({set foo(v) {}})";
// **** Some weird cases ****
// Accessors with generator or async.
obj = {};
Object.defineProperty(obj, "foo", {
  get: function* () {
    ;
  },
  enumerable: true
});
obj.toSource();
"({get foo() {}})";
obj = {};
Object.defineProperty(obj, "foo", {
  set: async function () {
    ;
  },
  enumerable: true
});
obj.toSource();
"({set foo() {}})";
// Modified toSource.
obj = {
  foo() {
    ;
  }

};

obj.foo.toSource = () => "hello";

obj.toSource();
"({hello})";
obj = {
  foo() {
    ;
  }

};

obj.foo.toSource = () => "bar() {}";

obj.toSource();
"({bar() {}})";
// Modified toSource with different method name.
obj = {};
Object.defineProperty(obj, "foo", {
  value: function bar() {
    ;
  },
  enumerable: true
});

obj.foo.toSource = () => "hello";

obj.toSource();
"({foo:hello})";
obj = {};
Object.defineProperty(obj, "foo", {
  value: function* bar() {
    ;
  },
  enumerable: true
});

obj.foo.toSource = () => "hello";

obj.toSource();
"({foo:hello})";
obj = {};
Object.defineProperty(obj, "foo", {
  value: async function bar() {
    ;
  },
  enumerable: true
});

obj.foo.toSource = () => "hello";

obj.toSource();
"({foo:hello})";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
