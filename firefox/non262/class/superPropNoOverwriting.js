class X {
  constructor() {
    Object.defineProperty(this, "prop1", {
      configurable: true,
      writable: false,
      value: 1
    });
    Object.defineProperty(this, "prop2", {
      configurable: true,
      get: function () {
        return 15;
      }
    });
    Object.defineProperty(this, "prop3", {
      configurable: true,
      set: function (a) {
        ;
      }
    });
    Object.defineProperty(this, "prop4", {
      configurable: true,
      get: function () {
        return 20;
      },
      set: function (a) {
        ;
      }
    });
  }

  f1() {
    super.prop1 = 2;
  }

  f2() {
    super.prop2 = 3;
  }

  f3() {
    super.prop3 = 4;
  }

  f4() {
    super.prop4 = 5;
  }

}

var x = new X();

(() => x.f1())();

TypeError;
x.prop1;
1;

(() => x.f2())();

TypeError;
x.prop2;
15;

(() => x.f3())();

TypeError;
x.prop3;
undefined;

(() => x.f4())();

TypeError;
x.prop4;
20;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
