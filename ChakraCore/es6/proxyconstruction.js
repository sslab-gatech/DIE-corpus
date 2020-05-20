//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testConstructProxy(object, shouldFail) {
  let proxy1 = new Proxy(object, {
    construct: () => ({})
  });
  let proxy2 = new Proxy(object, {});

  if (shouldFail) {
    try {
      new proxy1();
    } catch (e) {
      ;
    }

    try {
      new proxy2();
    } catch (e) {
      ;
    }
  } else {
    try {
      new proxy1();
    } catch (e) {
      ;
    }

    try {
      new proxy2();
    } catch (e) {
      ;
    }
  }
}

function t1() {
  testConstructProxy(() => {
    ;
  }, true);
}

t1();

function t2() {
  let test2 = () => {
    ;
  };

  testConstructProxy(test2, true);
}

t2();

function t3() {
  testConstructProxy(async function () {
    ;
  }, true);
}

t3();

function t4() {
  testConstructProxy(async function test4() {
    ;
  }, true);
}

t4();

function t5() {
  testConstructProxy(function () {
    ;
  }, false);
}

t5();

function t6() {
  testConstructProxy(function test6() {
    ;
  }, false);
}

t6();

function t7() {
  class testing1 {
    static test() {
      ;
    }

  }

  testConstructProxy(testing1.test, true);
}

t7();

function t8() {
  class testing2 {
    test() {
      ;
    }

  }

  let instance = new testing2();
  testConstructProxy(instance.test, true);
}

t8();

function t9() {
  testConstructProxy(Math, true);
}

t9();

function t10() {
  testConstructProxy(Array, false);
}

t10();

function t11() {
  let testing = [];
  testConstructProxy(testing.sort, true);
  testConstructProxy(testing.includes, true);
  testConstructProxy(testing.slice, true);
}

t11();

function t12() {
  testConstructProxy(Object, false);
}

t12();

function t13() {
  testConstructProxy({}, true);
}

t13();

function t14() {
  let testingMethod = {
    test: function () {
      ;
    }
  };
  testConstructProxy(testingMethod.test, false);
}

t14();

function t15() {
  let testingMethod = {
    test() {
      ;
    }

  };
  testConstructProxy(testingMethod.test, true);
}

t15();

function t16() {
  testConstructProxy(Date, false);
}

t16();

function t17() {
  testConstructProxy(Number, false);
}

t17();

function t18() {
  testConstructProxy(Math.abs, true);
  testConstructProxy(Math.max, true);
  testConstructProxy(Math.min, true);
  testConstructProxy(Math.floor, true);
  testConstructProxy(Math.ceil, true);
  testConstructProxy(parseInt, true);
}

t18();
