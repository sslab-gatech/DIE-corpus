console.log('Tests for string and numeric method names for ES6 class syntax');
constructorCallCount = 0;
new class {
  "constructor"() {
    constructorCallCount++;
  }

}();
constructorCallCount;
{
  class A {
    'constructor'() {
      constructorCallCount++;
    }

  }

  ;
  new A();
  constructorCallCount;
} // try { new (class { constructor() {} "constructor"() {} });; } catch(e) {}
// try { new (class { constructor() {} static "prototype"() {} });; } catch(e) {}

{
  class A {
    'foo'() {
      return 3;
    }

  }

  ;
  new A().foo();
}
{
  class A {
    get 'foo'() {
      return 4;
    }

  }

  ;
  new A().foo;
}
{
  class A {
    get 'foo'() {
      return 4;
    }

  }

  ;
  A.foo;
}
{
  class A {
    static get 'foo'() {
      return 5;
    }

  }

  ;
  A.foo;
}
{
  class A {
    static get 'foo'() {
      return 5;
    }

  }

  ;
  new A().foo;
}
fooValue = 0;
X = class {
  set 'foo'(value) {
    fooValue = value;
  }

};
new X().foo = 6;
fooValue;
X.foo = 7;
fooValue;
fooValue = 0;
X = class {
  static set 'foo'(value) {
    fooValue = value;
  }

};
X.foo = 8;
fooValue;
new X().foo = 7;
fooValue;
X = class {
  get 'foo'() {
    return 9;
  }

  set 'foo'(x) {
    ;
  }

};
x = new X();
x.foo;
X.foo;
fooValue = 0;
X = class {
  get 'foo'() {
    ;
  }

  set 'foo'(x) {
    fooValue = x;
  }

};
new X().foo = 9;
fooValue;
X.foo = 10;
fooValue;
X = class {
  static set 'foo'(x) {
    ;
  }

  static get 'foo'() {
    return 10;
  }

};
X.foo;
new X().foo;
fooValue = 0;
X = class {
  static set 'foo'(x) {
    fooValue = x;
  }

  static get 'foo'() {
    ;
  }

};
X.foo = 11;
fooValue;
new X().foo = 12;
fooValue;
{
  class A {
    get 0() {
      return 20;
    }

  }

  ;
  new A()[0];
}
;
{
  class A {
    get 0() {
      return 20;
    }

  }

  ;
  A[0];
}
;
{
  class A {
    static get 1() {
      return 21;
    }

  }

  ;
  A[1];
}
;
{
  class A {
    static get 1() {
      return 21;
    }

  }

  ;
  new A()[1];
}
;
setterValue = 0;
X = class {
  set 2(x) {
    setterValue = x;
  }

};
new X()[2] = 22;
setterValue;
X[2] = 23;
setterValue;
setterValue = 0;
X = class {
  static set 3(x) {
    setterValue = x;
  }

};
X[3] = 23;
setterValue;
new X()[3] = 23;
setterValue;
X = class {
  get 4() {
    return 24;
  }

  set 4(x) {
    ;
  }

};
x = new X();
x[4];
X[4];
setterValue = 0;
X = class {
  get 5() {
    ;
  }

  set 5(x) {
    setterValue = x;
  }

};
new X()[5] = 25;
setterValue;
X[5] = 26;
setterValue;
X = class {
  static set 6(x) {
    ;
  }

  static get 6() {
    return 26;
  }

};
X[6];
new X()[6];
setterValue = 0;
X = class {
  static set 7(x) {
    setterValue = x;
  }

  static get 7() {
    ;
  }

};
X[7] = 27;
setterValue;
new X()[7] = 28;
setterValue;

function x() {
  return class {
    'foo bar'() {
      return 29;
    }

  };
}

;
new (x())()['foo bar']();

function x() {
  return class {
    30() {
      return 30;
    }

  };
}

;
new (x())()[30]();
