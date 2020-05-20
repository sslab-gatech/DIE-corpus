//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
const simpleAsmDef = `
function x(v) {
  v = v | 0;
  return v | 0;
}
return x;`;

function test1() {
  var o = {
    set m(stdlib) {
      "use asm";

      var I32 = stdlib.Int32Array;

      function x(v) {
        v = v | 0;
        return v | 0;
      }

      return x;
    }

  };
  o.m = 5;
}

test1();

function test2() {
  class BaseClass {}

  class MyClass extends BaseClass {
    f(a, b, c, d, e) {
      print(a);
    }

    constructor() {
      "use asm";

      function x(v) {
        v = v | 0;
        return v | 0;
      }

      return x;
    }

  }

  var x = new MyClass("df");
  x(3);
}

test2();

function test3() {
  class MyClass {
    static asmModuleClassMember() {
      "use asm";

      function x(v) {
        v = v | 0;
        return v | 0;
      }

      return x;
    }

  }

  MyClass.asmModuleClassMember()(3);
}

test3();

function test4() {
  class MyClass {
    asmModuleClassMember() {
      "use asm";

      function x(v) {
        v = v | 0;
        return v | 0;
      }

      return x;
    }

  }

  var v = new MyClass("df");
  v.asmModuleClassMember()(3);
}

test4();

function test5() {
  var obj = {
    asmModuleMethod() {
      "use asm";

      function x(v) {
        v = v | 0;
        return v | 0;
      }

      return x;
    }

  };
  obj.asmModuleMethod()(3);
}

test5();

function test6() {
  function asmModuleEval() {
    "use asm";

    function bar() {
      console.log('in bar');
    }

    function x(v) {
      v = v | 0;
      return v | 0;
    }

    return x;
  }

  asmModuleEval()(3);
}

test6();

function test7() {
  function asmModuleChildEval() {
    "use asm";

    function x(v) {
      v = v | 0;

      function bar() {
        console.log('in bar');
      }

      return v | 0;
    }

    return x;
  }

  asmModuleChildEval()();
}

test7();

function test8() {
  function asmModuleArguments() {
    "use asm";

    arguments;

    function x(v) {
      v = v | 0;
      return v | 0;
    }

    return x;
  }

  asmModuleArguments();
}

test8();

function test9() {
  function asmModuleWith() {
    "use asm";

    with (5) {
      function x(v) {
        v = v | 0;
        return v | 0;
      }

      return x;
    }
  }
}

test9();

function test10() {
  const asmModuleLambda = () => {
    "use asm";

    function x(v) {
      v = v | 0;
      return v | 0;
    }

    return x;
  };

  asmModuleLambda()(3);
}

test10();

function test11() {
  function asmModuleDestructuring({
    Math: {
      sin
    }
  }) {
    "use asm";

    function x(v) {
      v = +v;
      return +sin(+v);
    }

    return x;
  }
}

test11();

function test12() {
  function asmModuleDestructuringChild() {
    "use asm";

    function x({
      v
    }) {
      v = +v;
      return +v;
    }

    return x;
  }

  asmModuleDestructuringChild()({
    v: 3
  });
}

test12();

function test13() {
  function asmModuleRest(...rest) {
    "use asm";

    function x(v) {
      v = v | 0;
      return v | 0;
    }

    return x;
  }

  asmModuleRest()(3);
}

test13();

function test14() {
  function asmModuleDefault(stdlib = {
    Math
  }) {
    "use asm";

    var sin = stdlib.Math.sin;

    function x(v) {
      v = +v;
      return + +sin(+v);
    }

    return x;
  }

  asmModuleDefault()(3);
}

test14();

function test15() {
  var obj = {
    asmModuleSuper() {
      "use asm";

      var a = super.toString;

      function x(v) {
        v = v | 0;
        return v | 0;
      }

      return x;
    }

  };
  obj.asmModuleSuper()(3);
}

test15();

function test16() {
  function* asmModuleGenerator() {
    "use asm";

    function x(v) {
      v = v | 0;
      return v | 0;
    }

    return x;
  }

  asmModuleGenerator().next().value(3);
}

test16();

function test17() {
  async function asmModuleAsync() {
    "use asm";

    function x(v) {
      v = v | 0;
      return v | 0;
    }

    return x;
  }

  asmModuleAsync().then(f => f(3));
}

test17();
