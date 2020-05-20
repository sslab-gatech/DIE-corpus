var obj = Object.create({
  a: "qux",
  d: "qux"
});
obj.a = "foo";
obj.b = "bar";
obj.c = "baz";
var values = Object.values(obj);
var passed = Array.isArray(values) && String(values) === "foo,bar,baz";
var complexObject = {
  obj: {
    a: 'x',
    b: 'y'
  },
  primitive: 'z'
};
passed = false;
values = Object.values(complexObject);
passed = values.length === 2 && values[0].a === 'x' && values[0].b === 'y' && values[1] === 'z';
values = Object.values({
  a: 'abcdef'
});
passed = values.length === 1 && values[0] === 'abcdef';
var primitives = [["string", ['s', 't', 'r', 'i', 'n', 'g']], [42, []], [Symbol("symbol"), []], [true, []], [false, []]];

function compare(ax, bx) {
  if (ax.length !== bx.length) {
    return false;
  }

  for (var i = 0, iz = ax.length; i < iz; ++i) {
    if (ax[i] !== bx[i]) {
      return false;
    }
  }

  return true;
}

for (var [primitive, expected] of primitives) {
  var ret = Object.values(primitive);

  if (!compare(ret, expected)) {
    throw new Error("bad value for " + String(primitive) + ": " + String(ret));
  }
}

[[null, "TypeError: Object.values requires that input parameter not be null or undefined"], [undefined, "TypeError: Object.values requires that input parameter not be null or undefined"]].forEach(function ([value, message]) {
  var error = null;

  try {
    Object.values(value);
  } catch (e) {
    error = e;
  }
});

const getInvokedFunctions = obj => {
  let arr = [];
  let p = new Proxy(obj, {
    ownKeys: function (...args) {
      arr.push("ownKeys");
      return Reflect.ownKeys(...args);
    },
    getOwnPropertyDescriptor: function (...args) {
      arr.push("getOwnPropertyDescriptor");
      return Reflect.getOwnPropertyDescriptor(...args);
    }
  });
  Object.values(p);
  return arr;
};

const arr1 = getInvokedFunctions({});
passed = arr1.length === 1 && arr1[0] === "ownKeys";
const arr2 = getInvokedFunctions({
  a: 'foo',
  b: 'boo'
});
passed = arr2.length === 3 && arr2[0] === "ownKeys";
passed = arr2[1] === "getOwnPropertyDescriptor";

Array.prototype.push = function () {
  throw new Error("Array.prototype.push should not be used during invoking of Object.values.");
};

Object.getOwnPropertyDescriptor = function () {
  throw new Error("Array.prototype.getOwnPropertyDescriptor should not be used during invoking of Object.values.");
};

values = Object.values({
  a: '1-2',
  b: '3-4'
});
passed = Array.isArray(values) && String(values) === "1-2,3-4";
