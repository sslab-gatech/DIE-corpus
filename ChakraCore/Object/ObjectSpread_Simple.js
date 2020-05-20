//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function verifyPropertyDesc(obj, prop, desc, propName) {
  var actualDesc = Object.getOwnPropertyDescriptor(obj, prop);

  if (typeof propName === "undefined") {
    propName = prop;
  }

  console.log(desc.configurable, actualDesc.configurable);
  console.log(desc.enumerable, actualDesc.enumerable);
  console.log(desc.writable, actualDesc.writable);
}

var a = {
  i: 1,
  j: 2
};
var b = {
  x: 3,
  y: 4,
  z: 5
};
var c = {
  foo: 6
};

function t1() {
  let aClone = { ...a
  };
  console.log(1, aClone.i);
  console.log(2, aClone.j);
  console.log(2, Object.keys(aClone).length);
}

t1();

function t2() {
  let aClone = { ...a
  };
  console.log(1, aClone.i);
  console.log(2, aClone.j);
  console.log(2, Object.keys(aClone).length);
}

t2();

function t3() {
  let merged = { ...a,
    ...b
  };
  console.log(1, merged.i);
  console.log(2, merged.j);
  console.log(3, merged.x);
  console.log(4, merged.y);
  console.log(5, merged.z);
  console.log(5, Object.keys(merged).length);
}

t3();

function t4() {
  let merged = {
    i: 1,
    ...c
  };
  console.log(1, merged.i);
  console.log(6, merged.foo);
  console.log(2, Object.keys(merged).length);
  console.log(1, Object.keys(c).length); // Order should not matter in this case

  merged = { ...c,
    i: 1
  };
  console.log(1, merged.i);
  console.log(6, merged.foo);
  console.log(2, Object.keys(merged).length);
  console.log(1, Object.keys(c).length);
}

t4();

function t5() {
  let over = {
    i: 10,
    j: 11,
    ...a
  };
  console.log(1, over.i);
  console.log(2, over.j);
  console.log(2, Object.keys(over).length);
  over = { ...a,
    i: 10,
    j: 11
  };
  console.log(10, over.i);
  console.log(11, over.j);
  console.log(2, Object.keys(over).length);
  over = { ...a,
    ...{
      i: 10,
      j: 11
    }
  };
  console.log(10, over.i);
  console.log(11, over.j);
  console.log(2, Object.keys(over).length);
  let i = 10,
      j = 11;
  over = { ...a,
    i,
    j
  };
  console.log(10, over.i);
  console.log(11, over.j);
  console.log(2, Object.keys(over).length);
}

t5();

function t6() {
  let getterExecuted = false;
  let objWithGetter = {
    get i() {
      getterExecuted = true;
    },

    ...c
  };
  console.log(6, objWithGetter.foo);
  console.log(getterExecuted);
  console.log(2, Object.keys(objWithGetter).length);
  console.log(objWithGetter.hasOwnProperty("i"));
}

t6();

function t7() {
  let getterExecuted = false;
  let obj = {
    i: 1,
    ...{
      get j() {
        getterExecuted = true;
        return 2;
      }

    }
  };
  console.log(1, obj.i);
  console.log(getterExecuted);
  console.log(2, obj.j);
  console.log(2, Object.keys(obj).length);
}

t7();

function t8() {
  let val = 1;
  let source = {
    get i() {
      val++;
      return 1;
    },

    get j() {
      return val;
    }

  };
  let obj = { ...source
  };
  console.log(1, obj.i);
  console.log(2, obj.j);
  console.log(2, Object.keys(obj).length);
}

t8();

function t9() {
  let a = {
    i: 1
  };
  let b = {
    get j() {
      a.i = 3;
      return 2;
    }

  };
  let obj = { ...b,
    ...a
  };
  console.log(3, obj.i);
  console.log(2, obj.j);
  console.log(2, Object.keys(obj).length);
}

t9();

function t10() {
  let getterExecutions = 0;
  let objWithGetter = {
    get i() {
      getterExecutions++;
      return 1;
    }

  };
  let merged = {
    a: 2,
    ...objWithGetter,
    b: 3,
    ...objWithGetter
  };
  console.log(2, merged.a);
  console.log(3, merged.b);
  console.log(1, merged.i);
  console.log(3, Object.keys(merged).length);
  console.log(2, getterExecutions);
}

t10();

function t11() {
  let setterExecuted = false;
  let objWithSetter = {
    set foo(v) {
      setterExecuted = true;
    },

    ...c
  };
  console.log(6, objWithSetter.foo);
  console.log(1, Object.keys(objWithSetter).length);
  console.log(setterExecuted);
}

t11();

function t12() {
  let empty = { ...null
  };
  console.log(0, Object.keys(empty).length);
  empty = { ...undefined
  };
  console.log(0, Object.keys(empty).length);
}

t12();

function t13() {
  let base = {
    name: "foo",
    prev: {},
    num: 5
  };
  let derived = { ...base,
    name: "bar",
    prev: { ...base
    }
  };
  console.log("foo", base.name);
  console.log({}, base.prev);
  console.log(5, base.num);
  console.log(3, Object.keys(base).length);
  console.log("bar", derived.name);
  console.log("foo", derived.prev.name);
  console.log({}, derived.prev.prev);
  console.log(5, derived.prev.num);
  console.log(5, derived.num);
  console.log(3, Object.keys(derived).length);
}

t13();

function t14() {
  let obj = {
    [5]: 5,
    ["bar"]: 2,
    ...c
  };
  console.log(5, obj[5]);
  console.log(2, obj.bar);
  console.log(6, obj.foo);
  console.log(3, Object.keys(obj).length);
}

t14();

function t15() {
  let obj = {
    func() {
      return true;
    },

    ...c
  };
  console.log(6, obj.foo);
  console.log(obj.hasOwnProperty("func"));
  console.log(2, Object.keys(obj).length);
}

t15();

function t16() {
  let obj = { ...c
  };
  let defaultDesc = {
    configurable: true,
    enumerable: true,
    writable: true
  };
  verifyPropertyDesc(obj, "foo", defaultDesc);
}

t16();

function t17() {
  let parent = {
    i: 1,
    j: 2
  };
  let child = Object.create(parent);
  child.i = 3;
  let obj = { ...child
  };
  console.log(3, child.i);
  console.log(2, child.j);
  console.log(3, obj.i);
  console.log(obj.hasOwnProperty("j"));
}

t17();

function t18() {
  let sym = Symbol("foo");
  let a = {};
  a[sym] = 1;
  let obj = { ...a
  };
  console.log(1, obj[sym]);
  console.log(1, Object.getOwnPropertySymbols(obj).length);
}

t18();

function t19() {
  let temp = {};
  let obj = { ...(temp = a)
  };
  console.log(2, Object.keys(obj).length);
  console.log(1, obj.i);
  console.log(2, obj.j);
  obj = { ...(temp = 1)
  };
  console.log(0, Object.keys(obj).length);
}

t19();

function t20() {
  let arr = [1, 2];
  let obj = { ...[...arr, 3]
  };
  console.log(3, Object.keys(obj).length);
  console.log(1, obj[0]);
  console.log(2, obj[1]);
  console.log(3, obj[2]);
}

t20();

function t21() {
  let obj = { ...1
  };
  console.log(0, Object.keys(obj).length);
}

t21();

function t22() {
  let obj = { ...function i() {
      return 1;
    }
  };
  console.log(0, Object.keys(obj).length);
}

t22();

function t23() {
  let obj = { ..."edge"
  };
  console.log(4, Object.keys(obj).length);
  console.log("e", obj[0]);
  console.log("d", obj[1]);
  console.log("g", obj[2]);
  console.log("e", obj[3]);
}

t23();

function t24() {
  let proxy = new Proxy({
    i: 1,
    j: 2
  }, {});
  let obj = { ...proxy
  };
  console.log(2, Object.keys(obj).length);
  console.log(1, obj.i);
  console.log(2, obj.j);
}

t24();

function t25() {
  let handler = {
    get: function (obj, prop) {
      return obj[prop];
    }
  };
  let proxy = new Proxy({
    i: 1,
    j: 2
  }, handler);
  let obj = { ...proxy
  };
  console.log(2, Object.keys(obj).length);
  console.log(1, obj.i);
  console.log(2, obj.j);
}

t25();

function t26() {
  let setterCalled = false;
  let handler = {
    get: function (obj, prop) {
      return obj[prop];
    },
    set: function (obj, prop, value) {
      setterCalled = true;
    }
  };
  let proxy = new Proxy({
    i: 1,
    j: 2
  }, handler);
  let obj = { ...proxy
  };
  console.log(2, Object.keys(obj).length);
  console.log(1, obj.i);
  console.log(2, obj.j);
  console.log(setterCalled);
}

t26();
