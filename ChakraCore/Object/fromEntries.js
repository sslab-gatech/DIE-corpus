//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function verifyProperties(obj, property, value) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, property);
  console.log(value, obj[property]);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log(descriptor.writable);
  obj[property] = "other value";
  console.log("other value", obj[property]);

  try {
    "use strict";

    delete obj[property];
  } catch (e) {
    ;
  }

  obj[property];
}

function verifyObject(expected, actual) {
  for (let i in actual) {
    console.log(expected.hasOwnProperty(i));
  }

  for (let i in expected) {
    verifyProperties(actual, i, expected[i]);
  }
}

function t1() {
  try {
    Object.fromEntries(null);
  } catch (e) {
    ;
  }

  try {
    Object.fromEntries(undefined);
  } catch (e) {
    ;
  }

  try {
    Object.fromEntries("something");
  } catch (e) {
    ;
  }

  try {
    Object.fromEntries(456);
  } catch (e) {
    ;
  }

  try {
    Object.fromEntries(Number());
  } catch (e) {
    ;
  }

  try {
    Object.fromEntries(String());
  } catch (e) {
    ;
  }

  try {
    Object.fromEntries(String("anything"));
  } catch (e) {
    ;
  }

  try {
    Object.fromEntries({});
  } catch (e) {
    ;
  }

  try {
    Object.fromEntries({
      a: "5",
      b: "10"
    });
  } catch (e) {
    ;
  }
}

t1();

function t2() {
  const obj1 = Object.fromEntries([["first", 50], ["second", 30], ["third", 60], ["fourth", 70]]);
  verifyObject({
    first: 50,
    second: 30,
    third: 60,
    fourth: 70
  }, obj1);
  const obj2 = Object.fromEntries([Object("a12234"), Object("b2kls"), Object("c3deg")]);
  verifyObject({
    a: "1",
    b: "2",
    c: "3"
  }, obj2);

  function testArguments() {
    verifyObject(expected, Object.fromEntries(arguments));
  }

  const expected = {
    abc: "one",
    bcd: "two",
    hsa: "three"
  };
  testArguments(["abc", "one"], ["bcd", "two"], ["hsa", "three"]);
}

t2();

function t3() {
  const arrayLike = {
    0: ["abc", "one"],
    1: ["bcd", "two"],
    2: ["hsa", "three"],
    length: 3,
    current: 0
  };

  try {
    Object.fromEntries(arrayLike);
  } catch (e) {
    ;
  }

  arrayLike[Symbol.iterator] = function () {
    const array = this;
    return {
      next: function () {
        const value = array[String(array.current)];
        ++array.current;
        return {
          value: value,
          done: array.length < array.current
        };
      }
    };
  };

  verifyObject({
    abc: "one",
    bcd: "two",
    hsa: "three"
  }, Object.fromEntries(arrayLike));
}

t3();

function t4() {
  let calledSet = false;
  Object.defineProperty(Object.prototype, "prop", {
    set: function () {
      calledSet = true;
    }
  });
  const obj = Object.fromEntries([["prop", 10]]);
  verifyProperties(obj, "prop", 10);
  console.log(calledSet);
}

t4();

function t5() {
  function* gen1() {
    yield ["val1", 10];
    yield ["val2", 50];
    yield ["val3", 60, "other stuff"];
  }

  const obj = Object.fromEntries(gen1());
  verifyObject({
    val1: 10,
    val2: 50,
    val3: 60
  }, obj);
  let unreachable = false;

  function* gen2() {
    yield ["val1", 10];
    yield "val2";
    unreachable = true;
    yield ["val3", 60, "other stuff"];
  }

  try {
    {
      Object.fromEntries(gen2());
    }
  } catch (e) {
    ;
  }

  console.log(unreachable);
}

t5();

function t6() {
  const accessedProps = [];
  const handler = {
    get: function (target, prop, receiver) {
      accessedProps.push(prop + Reflect.get(target, prop));
      return Reflect.get(target, prop);
    }
  };

  function* gen() {
    yield new Proxy(["a", "b", "c"], handler);
    yield new Proxy(["e", "g", "h", "j"], handler);
  }

  const obj = Object.fromEntries(gen());
  verifyObject({
    a: "b",
    e: "g"
  }, obj);
  const expected = ["0a", "1b", "0e", "1g"];
  const len = accessedProps.length;
  console.log(4, len);

  for (let i = 0; i < len; ++i) {
    console.log(expected[i], accessedProps[i]);
  }
}

t6();

function t7() {
  const accessedProps = [];
  const handler = {
    get: function (target, prop, receiver) {
      accessedProps.push(String(prop));
      return Reflect.get(target, prop);
    },
    set: function () {
      throw new Error("Should not be called");
    }
  };
  let result;
  assert.doesNotThrow(() => {
    result = Object.fromEntries(new Proxy([["a", 5], ["b", 2], ["c", 4]], handler));
  });
  verifyObject({
    a: 5,
    b: 2,
    c: 4
  }, result);
  expected = ["Symbol(Symbol.iterator)", "length", "0", "length", "1", "length", "2", "length"];

  for (let i = 0; i < 3; ++i) {
    console.log(expected[i], accessedProps[i]);
  }
}

t7();

function t8() {
  let calls = 0;

  Array.prototype[Symbol.iterator] = function () {
    return {
      next: function () {
        switch (calls) {
          case 0:
            calls = 1;
            return {
              done: false,
              value: ["key", "value"]
            };

          case 1:
            calls = 2;
            return {
              done: true,
              value: null
            };

          case 2:
            throw new Error("Should not be reached");
        }
      }
    };
  };

  let result;
  assert.doesNotThrow(() => {
    result = Object.fromEntries([1, 2, 3, 4]);
  }, "Once iterator is done should not be called again");
  verifyObject({
    key: "value"
  }, result);
}

t8();

function t9() {
  console.log("fromEntries", Object.fromEntries.name);
  console.log(1, Object.fromEntries.length);
  const descriptor = Object.getOwnPropertyDescriptor(Object, "fromEntries");
  console.log(descriptor.enumerable);
  console.log(descriptor.writable);
  console.log(descriptor.configurable);
  assert.doesNotThrow(() => {
    "use strict";

    delete Object.fromEntries.length;
  }, "Deleting Object.fromEntries.length should succeed");
  console.log(0, Object.fromEntries.length);
  assert.doesNotThrow(() => {
    "use strict";

    delete Object.fromEntries;
  }, "Deleting Object.fromEntries should succeed");
  assert.isUndefined(Object.fromEntries, "After deletion Object.fromEntries should be undefined");
}

t9();
