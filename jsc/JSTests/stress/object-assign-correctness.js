function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 500; i++) {
    f();
  }
}

var originalReflect = Reflect;
var ownKeys = Reflect.ownKeys;
var getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;

function runTests() {
  test(function () {
    let ownKeysCalled = false;
    let getOwnPropertyDescriptorProps = [];
    let getProps = [];
    let enumerableCalled = false;
    let handler = {
      getOwnPropertyDescriptor: function (target, key) {
        getOwnPropertyDescriptorProps.push(key);

        switch (key) {
          case "foo":
            return {
              enumerable: true,
              configurable: true,
              value: 45
            };

          case "bar":
            return {
              enumerable: true,

              get enumerable() {
                enumerableCalled = true;
                return true;
              },

              configurable: true,
              value: 50
            };

          case "baz":
            return {
              enumerable: false,
              configurable: true,
              value: 50
            };

          default:
            false;
            "should not be reached.";
            break;
        }
      },
      ownKeys: function (target) {
        ownKeysCalled = true;
        return ["foo", "bar", "baz"];
      },
      get: function (target, key) {
        getProps.push(key);

        switch (key) {
          case "foo":
            return 20;

          case "bar":
            return "bar";

          default:
            false;
            "should not be reached.";
            break;
        }
      }
    };
    let proxy = new Proxy({}, handler);
    let foo = {};
    Object.assign(foo, proxy);
    enumerableCalled;
    ownKeys(foo).length === 2;
    ownKeys(foo)[0] === "foo";
    ownKeys(foo)[1] === "bar";
    foo.foo === 20;
    foo.bar === "bar";
    ownKeysCalled;
    getOwnPropertyDescriptorProps.length === 3;
    getOwnPropertyDescriptorProps[0] === "foo";
    getOwnPropertyDescriptorProps[1] === "bar";
    getOwnPropertyDescriptorProps[2] === "baz";
    getProps.length === 2;
    getProps[0] === "foo";
    getProps[1] === "bar";
  });
  let oldReflect = Reflect;
  Reflect = null;
  Reflect === null;
  // Make sure Object.assign's use of Reflect is safe.
  test(function () {
    let ownKeysCalled = false;
    let getOwnPropertyDescriptorProps = [];
    let getProps = [];
    let enumerableCalled = false;
    let handler = {
      getOwnPropertyDescriptor: function (target, key) {
        getOwnPropertyDescriptorProps.push(key);

        switch (key) {
          case "foo":
            return {
              enumerable: true,
              configurable: true,
              value: 45
            };

          case "bar":
            return {
              get enumerable() {
                enumerableCalled = true;
                return true;
              },

              configurable: true,
              value: 50
            };

          case "baz":
            return {
              enumerable: false,
              configurable: true,
              value: 50
            };

          default:
            false;
            "should not be reached.";
            break;
        }
      },
      ownKeys: function (target) {
        ownKeysCalled = true;
        return ["foo", "bar", "baz"];
      },
      get: function (target, key) {
        getProps.push(key);

        switch (key) {
          case "foo":
            return 20;

          case "bar":
            return "bar";

          default:
            false;
            "should not be reached.";
            break;
        }
      }
    };
    let proxy = new Proxy({}, handler);
    let foo = {};
    Object.assign(foo, proxy);
    enumerableCalled;
    ownKeys(foo).length === 2;
    ownKeys(foo)[0] === "foo";
    ownKeys(foo)[1] === "bar";
    foo.foo === 20;
    foo.bar === "bar";
    ownKeysCalled;
    getOwnPropertyDescriptorProps.length === 3;
    getOwnPropertyDescriptorProps[0] === "foo";
    getOwnPropertyDescriptorProps[1] === "bar";
    getOwnPropertyDescriptorProps[2] === "baz";
    getProps.length === 2;
    getProps[0] === "foo";
    getProps[1] === "bar";
  });
  Reflect = oldReflect;
}

runTests();

Reflect.ownKeys = function () {
  ;
};

Reflect.getOwnPropertyDescriptor = function () {
  ;
};

runTests();
