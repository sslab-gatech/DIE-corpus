//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  var a = [];
  var b = 2;

  function f() {
    [a[(function () {
      ;
    }, b)]] = [2];
  }

  f();
}

test1();

function test2() {
  try {
    const c = 10;
    ({
      c
    } = {
      c: 11
    });
  } catch (e) {
    ;
  }
}

test2();

function test3() {
  (function ({}, {}, {}, {}, {}, a) {
    console.log(arguments[1].x, 1);
    console.log(a, 2);
  })({}, {
    x: 1
  }, {}, {}, {}, 2);

  (function ({}, {}, {}, {}, {}, a) {
    (function () {
      ;
    })();

    console.log(arguments[1].x, 1);
    console.log(a, 2);
  })({}, {
    x: 1
  }, {}, {}, {}, 2);

  (function ({}, {}, {}, {}, {}, a) {
    (function () {
      a;
    })();

    console.log(arguments[1].x, 1);
    console.log(a, 2);
  })({}, {
    x: 1
  }, {}, {}, {}, 2);
}

test3();

function test4() {
  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6) {
    console.log(arguments[2]);
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], 6);

  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6) {
    var k = x1 + x2 + x3 + x4 + x5 + x6;
    console.log(arguments[2]);
    console.log(k);
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], 6);

  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6) {
    (function () {
      ;
    });

    console.log(arguments[3]);
    var k = x1 + x2 + x3 + x4 + x5 + x6;
    console.log(k);
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], 6);

  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6) {
    (function () {
      x3;
      x5;
      x6;
    })();

    var k = x1 + x2 + x3 + x4 + x5 + x6;
    console.log(k);
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], 6);

  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6) {
    (function () {
      x3;
      x5;
      x6;
    })();

    var k = x1 + x2 + x3 + x4 + x5 + x6;
    console.log(arguments[3]);
    console.log(k);
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], 6);

  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6) {
    (function () {
      console.log(x1 + x2 + x3 + x4 + x5 + x6);
    })();
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], 6);
}

test4();

function test5() {
  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6) {
    (() => {
      console.log(arguments[2]);
    })();
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], 6);

  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6) {
    (() => {
      var k = x1 + x2 + x3 + x4 + x5 + x6;
      console.log(arguments[2]);
      console.log(k);
    })();
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], 6);
}

test5();

function test6() {
  (function (a, {
    b
  }, ...rest) {
    console.log(b);
    console.log(arguments[2]);
  })(1, {
    b: 2
  }, 3);

  (function (a, {
    b
  }, ...rest) {
    (function () {
      ;
    })();

    console.log(rest);
    console.log(arguments[2]);
  })(1, {
    b: 2
  }, 3);

  (function (a, {
    b
  }, ...rest) {
    (function () {
      console.log(b);
      console.log(rest);
    })();

    console.log(rest);
    console.log(arguments[2]);
  })(1, {
    b: 2
  }, 3);
}

test6();

function test7() {
  (function ([a, b], c, ...{
    rest1,
    rest2
  }) {
    console.log(rest1);
    console.log(rest2);
    console.log(c);
    console.log(arguments[1]);
  })([1, 2], 3, {
    rest1: 4,
    rest2: 5
  });

  (function ([a, b], c, ...{
    rest1,
    rest2
  }) {
    (function () {
      console.log(rest1);
      console.log(rest2);
      console.log(a + b);
    })();

    console.log(arguments[0]);
  })([1, 2], 3, {
    rest1: 4,
    rest2: 5
  });
}

test7();

function test8() {
  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6 = arguments[0]) {
    console.log(arguments[2]);
    console.log(x6);
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], undefined);

  (function (x1, {
    x2,
    x3
  }, [x4, x5], x6 = arguments[0] = 11) {
    console.log(arguments[0]);
    console.log(x6);
  })(1, {
    x2: 2,
    x3: 3
  }, [4, 5], undefined);
}

test8();

function test9() {
  var a = {},
      b;
  ({
    x: a,
    y: b = 1
  } = a);
  console.log(a);
  console.log(b);
}

test9();

function test10() {
  function f() {
    ({} = []).Symbol.interator();
  }

  ;
}

test10();

function test11() {
  function foo({
    a
  }) {
    function x() {
      ;
    }
  }

  foo({});

  function foo1(...[b]) {
    function x() {
      ;
    }
  }

  foo1([]);
}

test11();

function test12() {
  function foo(x1, x2, x3, x4) {
    console.log(x1);
    console.log(x2);
    console.log(x3[0][0]);
    console.log(x4[0][0][0][0]);
  }

  var a1;
  var a2;
  foo([{}] = 'first', 'second', [[a1]] = [['third']], [[[[a2]]]] = [[[['fourth']]]]);
  console.log(a1);
  console.log(a2);
}

test12();

function test13() {
  var nextCount = 0;
  var returnCount = 0;
  var iterable = {};

  iterable[Symbol.iterator] = function () {
    return {
      next: function () {
        nextCount++;
        return {
          value: 1,
          done: false
        };
      },
      return: function (value) {
        returnCount++;
        return {
          done: true
        };
      }
    };
  };

  var obj = {
    set prop(val) {
      throw new Error('From setter');
    }

  };

  var foo = function () {
    ;
  };

  try {
    foo([[obj.prop]] = [iterable]);
  } catch (e) {
    ;
  }

  console.log(nextCount);
  console.log(returnCount);
}

test13();

function test14() {
  var a1 = 10;
  var b1 = 20;

  bar1 = ({
    abcdef = a1 = 30
  } = b1 = 40) => {
    try {
      throw a1;
    } catch (a1) {
      ;
    }
  };

  bar1();
  console.log(a1, 30);
  console.log(b1, 40);
  var a2 = 10;
  var b2 = 20;

  bar2 = ({
    abcdef = a2 = 30
  } = b2 = 40) => {
    try {
      throw a2;
    } catch (a2) {
      ;
    }
  };

  bar2({
    abcdef: 50
  });
  console.log(a2, 10);
  console.log(b2, 20);
  var a3 = 10;
  var b3 = 20;

  bar3 = ({
    aa3 = a3,
    bb3 = b3,
    abcdef = a3 = 30
  } = b3 = 40) => {
    try {
      console.log(a3, undefined);
      console.log(b3, undefined);
      console.log(aa3, 10);
      console.log(bb3, 20);
      var a3 = 60;
      var b3 = 70;
      throw a3;
    } catch (a3) {
      ;
    }
  };

  bar3({
    abcdef: 50
  });
  console.log(a3, 10);
  console.log(b3, 20);
  var a4 = 10;
  var b4 = 15;

  bar4 = ({
    b4 = (xyz = 4) => a4
  } = 1) => {
    b4 = 35;
    return b4;
  };

  var c4 = bar4();

  var d4 = function ({
    a4,
    b4
  } = {
    a4: 20,
    b4: 25
  }) {
    return a4;
  }();

  console.log(a4, 10);
  console.log(b4, 15);
  console.log(c4, 35);
  console.log(d4, 20);
}

test14();

function test15() {
  try {
    [this.x] = [];
  } catch (e) {
    ;
  }

  try {
    ({
      x: this.x
    } = {});
  } catch (e) {
    ;
  }

  (function () {
    this.x = 1, this.y = 2;
    [this.x, this.y] = [this.y, this.x];
    console.log(this.x);
    console.log(this.y);
  })();

  try {
    [...this.x] = [1];
  } catch (e) {
    ;
  }
}

test15();

function test16() {
  function* gn() {
    try {
      throw [];
    } catch ([c = yield 2]) {
      ;
    }
  }

  ;
  var it = gn();
  var k = it.next();
  console.log(2, k.value);
}

test16();

function test17() {
  function* gn() {
    try {
      throw [{
        x: []
      }];
    } catch ([{
      x: [c = yield 2]
    }]) {
      ;
    }
  }

  ;
  var it = gn();
  var k = it.next();
  console.log(2, k.value);
}

test17();

function test18() {
  function test1() {
    function bar() {
      this.x = ({
        y1: {
          z1 = arguments
        }
      } = {});
      {
        ;
      }
    }

    for (var y in {}) {
      ;
    }

    ;
  }

  ;
  test1();
}

test18();
