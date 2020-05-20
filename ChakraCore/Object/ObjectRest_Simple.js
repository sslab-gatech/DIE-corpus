//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  let {
    a,
    b,
    ...rest
  } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  console.log(1, a);
  console.log(2, b);
  console.log({
    c: 3,
    d: 4
  }, rest);
}

t1();

function t2() {
  var {
    a,
    b,
    ...rest
  } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  console.log(1, a);
  console.log(2, b);
  console.log({
    c: 3,
    d: 4
  }, rest);
}

t2();

function t3() {
  ({
    a,
    b,
    ...rest
  } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  });
  console.log(1, a);
  console.log(2, b);
  console.log({
    c: 3,
    d: 4
  }, rest);
}

t3();

function t4() {
  function foo({
    a: _a,
    b: _b,
    ..._rest
  }) {
    console.log(1, _a);
    console.log(2, _b);
    console.log({
      c: 3,
      d: 4
    }, _rest);
  }

  foo({
    a: 1,
    b: 2,
    c: 3,
    d: 4
  });
}

t4();

function t5() {
  try {
    throw {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
  } catch ({
    a: _a,
    b: _b,
    ..._rest
  }) {
    console.log(1, _a);
    console.log(2, _b);
    console.log({
      c: 3,
      d: 4
    }, _rest);
  }
}

t5();

function t6() {
  bar = [{
    a: 1,
    b: 2,
    c: 3,
    d: 4
  }];

  for ({
    a,
    b,
    ...rest
  } of bar) {
    console.log(1, a);
    console.log(2, b);
    console.log({
      c: 3,
      d: 4
    }, rest);
  }
}

t6();

function t7() {
  let {
    a,
    b,
    double: {
      c,
      ...rest
    }
  } = {
    a: 1,
    b: 2,
    double: {
      c: 3,
      d: 4
    }
  };
  console.log(1, a);
  console.log(2, b);
  console.log(3, c);
  console.log({
    d: 4
  }, rest);
}

t7();

function t8() {
  function foo({
    a: _a,
    b: _b,
    double: {
      c: _c,
      ..._rest
    }
  }) {
    console.log(1, _a);
    console.log(2, _b);
    console.log(3, _c);
    console.log({
      d: 4
    }, _rest);
  }

  foo({
    a: 1,
    b: 2,
    double: {
      c: 3,
      d: 4
    }
  });
}

t8();

function t9() {
  let {
    a,
    ["b"]: b,
    ...rest
  } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  console.log(1, a);
  console.log(2, b);
  console.log({
    c: 3,
    d: 4
  }, rest);
}

t9();

function t10() {
  function foo({
    a: _a,
    ["b"]: _b,
    ..._rest
  }) {
    console.log(1, _a);
    console.log(2, _b);
    console.log({
      c: 3,
      d: 4
    }, _rest);
  }

  foo({
    a: 1,
    b: 2,
    c: 3,
    d: 4
  });
}

t10();

function t11() {
  function foo(r) {
    if (r) {
      var {
        a,
        [foo(false)]: b,
        ...rest
      } = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
      };
      console.log(1, a);
      console.log(2, b);
      console.log({
        c: 3,
        d: 4
      }, rest);
    } else {
      var {
        one,
        ...rest
      } = {
        one: 1,
        two: 2,
        three: 3
      };
      console.log(1, one);
      console.log({
        two: 2,
        three: 3
      }, rest);
    }

    return "b";
  }

  foo(true);
}

t11();

function t13() {
  let {
    a,
    b,
    ...rest
  } = {
    a: 1,
    b: 2
  };
  console.log(1, a);
  console.log(2, b);
  console.log({}, rest);
}

t13();

function t14() {
  let getterExecuted = false;
  let obj = {
    a: 1,

    get b() {
      getterExecuted = true;
      return 2;
    }

  };
  let { ...rest
  } = obj;
  console.log(1, rest.a);
  console.log(getterExecuted);
  console.log(2, rest.b);
}

t14();

function t15() {
  let val = 1;
  let source = {
    get a() {
      val++;
      return 1;
    },

    get b() {
      return val;
    }

  };
  let {
    b,
    ...rest
  } = source;
  console.log(1, b);
  console.log(1, rest.a);
}

t15();

function t16() {
  let val = 1;
  let source = {
    get a() {
      val++;
      return 1;
    },

    get b() {
      return val;
    }

  };
  let {
    a,
    ...rest
  } = source;
  console.log(1, a);
  console.log(2, rest.b);
}

t16();

function t17() {
  let parent = {
    i: 1,
    j: 2
  };
  let child = Object.create(parent);
  child.i = 3;
  let { ...rest
  } = child;
  console.log(3, child.i);
  console.log(2, child.j);
  console.log(3, rest.i);
  console.log(rest.hasOwnProperty("j"));
}

t17();

function t18() {
  let sym = Symbol("foo");
  let a = {};
  a[sym] = 1;
  let { ...rest
  } = a;
  console.log(1, rest[sym]);
  console.log(1, Object.getOwnPropertySymbols(rest).length);
}

t18();

function t19() {
  let arr = [1, 2, 3];
  let {
    [2]: foo,
    ...rest
  } = arr;
  console.log(2, Object.keys(rest).length);
  console.log(1, rest[0]);
  console.log(2, rest[1]);
  console.log(3, foo);
}

t19();

function t20() {
  let { ...rest
  } = 1;
  console.log(0, Object.keys(rest).length);
}

t20();

function t21() {
  let { ...rest
  } = function i() {
    return 1;
  };

  console.log(0, Object.keys(rest).length);
}

t21();

function t22() {
  let { ...rest
  } = "edge";
  console.log(4, Object.keys(rest).length);
  console.log("e", rest[0]);
  console.log("d", rest[1]);
  console.log("g", rest[2]);
  console.log("e", rest[3]);
}

t22();

function t23() {
  let proxy = new Proxy({
    i: 1,
    j: 2
  }, {});
  let { ...rest
  } = proxy;
  console.log(2, Object.keys(rest).length);
  console.log(1, rest.i);
  console.log(2, rest.j);
}

t23();

function t24() {
  let handler = {
    get: function (obj, prop) {
      return obj[prop];
    }
  };
  let proxy = new Proxy({
    i: 1,
    j: 2
  }, handler);
  let { ...rest
  } = proxy;
  console.log(2, Object.keys(rest).length);
  console.log(1, rest.i);
  console.log(2, rest.j);
}

t24();

function t25() {
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
  let { ...rest
  } = proxy;
  console.log(2, Object.keys(rest).length);
  console.log(1, rest.i);
  console.log(2, rest.j);
  console.log(setterCalled);
}

t25();
