//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var sym1 = Symbol("bart");
var count = 0;

class A {
  constructor() {
    count++;
  }

  increment() {
    count++;
  }

  decrement() {
    count--;
  }

  getCount() {
    return count;
  }

  1() {
    return 1;
  }

  2() {
    return 2;
  }

  1.1() {
    return 1.1;
  }

  2.2() {
    return 2.2;
  }

  [1 + 3]() {
    return 4;
  }

  [1.1 + 1]() {
    return 2.1;
  }

  ["foo" + 1]() {
    return "foo1";
  }

  [sym1]() {
    return "bart";
  }

}

A.prototype.x = 42;
A.prototype["y"] = 30;
A.prototype[10] = 10;
A.prototype[10.1] = 10.1;
Object.defineProperty(A.prototype, "length", {
  writable: true,
  value: 2
});
Object.defineProperty(A, "length", {
  writable: true,
  value: -1
});

function t1() {
  class B extends A {
    constructor() {
      super();
      console.log(2, super.length);

      var super_arrow = () => {
        console.log(2, super.length);
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t1();

function t2() {
  class B extends A {
    constructor() {
      super();
      console.log(42, super.x);
      console.log(42, super["x"]);
      console.log(30, super["y"]);
      console.log(10, super[10]);
      console.log(10.1, super[10.1]);
      console.log(10, super["10"]);
      console.log(10.1, super["10.1"]);
    }

  }

  var bar = new B();
}

t2();

function t3() {
  class B extends A {
    constructor() {
      super();

      var super_arrow = () => {
        console.log(42, super.x);
        console.log(42, super["x"]);
        console.log(30, super["y"]);
        console.log(10, super[10]);
        console.log(10.1, super[10.1]);
        console.log(10, super["10"]);
        console.log(10.1, super["10.1"]);
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t3();

function t4() {
  class B extends A {
    constructor() {
      var super_arrow = () => {
        super();
        console.log(42, super.x);
        console.log(42, super["x"]);
        console.log(30, super["y"]);
        console.log(10, super[10]);
        console.log(10.1, super[10.1]);
        console.log(10, super["10"]);
        console.log(10.1, super["10.1"]);
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t4();

function t5() {
  count = 0;

  class B extends A {
    constructor() {
      var super_arrow = () => {
        try {
          super.increment();
        } catch (e) {
          ;
        }

        console.log(0, count);

        try {
          super.increment.call(5);
        } catch (e) {
          ;
        }

        try {
          super[1]();
        } catch (e) {
          ;
        }

        try {
          super[1].call(5);
        } catch (e) {
          ;
        }

        super();
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t5();

function t6() {
  count = 0;

  class B extends A {
    constructor() {
      super();

      var super_arrow = () => {
        super.increment.call(this);
        console.log(2, super.getCount.call(this));
        console.log(1, super[1].call(this));
      };

      super_arrow();
      super.decrement.call(this);
      console.log(1, super.getCount.call(this));
      console.log(2, super[2].call(this));
    }

  }

  var bar = new B();
}

t6();

function t7() {
  count = 0;

  class B extends A {
    constructor() {
      var super_arrow = () => {
        super();
        console.log(1, super.getCount());
        super.increment();
        console.log(2, super.getCount());
        super.decrement();
        console.log(1, super.getCount());
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t7();

function t8() {
  count = 0;

  class B extends A {
    constructor() {
      var super_arrow = () => {
        super();
        console.log(1, super["getCount"]());
        super["increment"]();
        console.log(2, super["getCount"]());
        super["decrement"]();
        console.log(1, super["getCount"]());
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t8();

function t9() {
  class B extends A {
    constructor() {
      var super_arrow = () => {
        super();
        console.log(1.1, super[1.1]());
        console.log(2.2, super[2.2]());
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t9();

function t10() {
  class B extends A {
    constructor() {
      var super_arrow = () => {
        super();
        console.log(1, super[1]());
        console.log(2, super[2]());
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t10();

function t11() {
  class B extends A {
    constructor() {
      var super_arrow = () => {
        super();
        console.log(2.1, super[2.1]());
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t11();

function t12() {
  class B extends A {
    constructor() {
      super();
      console.log(4, super[4]());
    }

  }

  var bar = new B();
}

t12();

function t13() {
  class B extends A {
    constructor() {
      var super_arrow = () => {
        super();
        console.log("foo1", super["foo1"]());
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t13();

function t14() {
  class B extends A {
    constructor() {
      var super_arrow = () => {
        super();
        console.log("bart", super[sym1]());
      };

      super_arrow();
    }

  }

  var bar = new B();
}

t14();

function t15() {
  count = 0;

  class B extends A {
    constructor() {
      super();
      console.log(1, super.getCount());
      super.increment();
      console.log(2, super.getCount());
      super.decrement();
      console.log(1, super.getCount());
    }

  }

  var bar = new B();
}

t15();

function t16() {
  count = 0;

  class B extends A {
    constructor() {
      super();
      console.log(1, super["getCount"]());
      super["increment"]();
      console.log(2, super["getCount"]());
      super["decrement"]();
      console.log(1, super["getCount"]());
    }

  }

  var bar = new B();
}

t16();

function t17() {
  class B extends A {
    constructor() {
      super();
      console.log(1.1, super[1.1]());
      console.log(2.2, super[2.2]());
    }

  }

  var bar = new B();
}

t17();

function t18() {
  class B extends A {
    constructor() {
      super();
      console.log(1, super[1]());
      console.log(2, super[2]());
    }

  }

  var bar = new B();
}

t18();

function t19() {
  class B extends A {
    constructor() {
      super();
      console.log(2.1, super[2.1]());
    }

  }

  var bar = new B();
}

t19();

function t20() {
  class B extends A {
    constructor() {
      super();
      console.log(4, super[4]());
    }

  }

  var bar = new B();
}

t20();

function t21() {
  class B extends A {
    constructor() {
      super();
      console.log("foo1", super["foo1"]());
    }

  }

  var bar = new B();
}

t21();

function t22() {
  class B extends A {
    constructor() {
      super();
      console.log("bart", super[sym1]());
    }

  }

  var bar = new B();
}

t22();
