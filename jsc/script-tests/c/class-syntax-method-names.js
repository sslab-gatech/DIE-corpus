console.log('Tests for various method names');
console.log('Instance methods');

try {
  class A {
    0.1() {
      return 1;
    }

  }

  ;
  new A()[0.1]();
} catch (e) {
  ;
}

try {
  class A {
    get() {
      return 2;
    }

  }

  ;
  new A().get();
} catch (e) {
  ;
}

try {
  class A {
    set() {
      return 3;
    }

  }

  ;
  new A().set();
} catch (e) {
  ;
}

try {
  class A {
    get get() {
      return 4;
    }

  }

  ;
  new A().get;
} catch (e) {
  ;
}

try {
  class A {
    get set() {
      return 5;
    }

  }

  ;
  new A().set;
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    set get(x) {
      setterValue = x;
    }

  }

  ;
  new A().get = 6;
  setterValue;
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    set set(x) {
      setterValue = x;
    }

  }

  ;
  new A().set = 7;
  setterValue;
} catch (e) {
  ;
}

console.log('');
var staticMethodValue = 'value';
console.log('Static methods');

try {
  class A {
    static 0.1() {
      return 101;
    }

  }

  ;
  A[0.1]();
} catch (e) {
  ;
}

try {
  class A {
    static get() {
      return 102;
    }

  }

  ;
  A.get();
} catch (e) {
  ;
}

try {
  class A {
    static set() {
      return 103;
    }

  }

  ;
  A.set();
} catch (e) {
  ;
}

try {
  class A {
    static get get() {
      return 104;
    }

  }

  ;
  A.get;
} catch (e) {
  ;
}

try {
  class A {
    static get set() {
      return 105;
    }

  }

  ;
  A.set;
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    static set get(x) {
      setterValue = x;
    }

  }

  ;
  A.get = 106;
  setterValue;
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    static set set(x) {
      setterValue = x;
    }

  }

  ;
  A.set = 107;
  setterValue;
} catch (e) {
  ;
}

try {
  class X {
    static arguments() {
      ;
    }

  }

  ;
} catch (e) {
  ;
}

try {
  class X {
    static caller() {
      ;
    }

  }

  ;
} catch (e) {
  ;
}

try {
  (class X {
    static arguments() {
      return staticMethodValue;
    }

  }).arguments();
} catch (e) {
  ;
}

try {
  (class X {
    static caller() {
      return staticMethodValue;
    }

  }).caller();
} catch (e) {
  ;
}

try {
  (class X {
    static arguments() {
      return staticMethodValue;
    }

  }).hasOwnProperty('arguments');
} catch (e) {
  ;
}

try {
  (class X {
    static caller() {
      return staticMethodValue;
    }

  }).hasOwnProperty('caller');
} catch (e) {
  ;
}

try {
  try {
    class X {
      static get arguments() {
        ;
      }

    }

    ;
  } catch (e) {
    ;
  }
} catch (e) {
  ;
}

try {
  try {
    class X {
      static get caller() {
        ;
      }

    }

    ;
  } catch (e) {
    ;
  }
} catch (e) {
  ;
}

try {
  (class X {
    static get arguments() {
      return staticMethodValue;
    }

  }).arguments;
} catch (e) {
  ;
}

try {
  (class X {
    static get caller() {
      return staticMethodValue;
    }

  }).caller;
} catch (e) {
  ;
}

try {
  (class X {
    static get arguments() {
      return staticMethodValue;
    }

  }).hasOwnProperty('arguments');
} catch (e) {
  ;
}

try {
  (class X {
    static get caller() {
      return staticMethodValue;
    }

  }).hasOwnProperty('caller');
} catch (e) {
  ;
}

try {
  class X {
    static caller() {
      return staticMethodValue;
    }

  }

  ;

  X.arguments = function () {
    ;
  };
} catch (e) {
  ;
}

try {
  class X {
    static arguments() {
      return staticMethodValue;
    }

  }

  ;

  X.caller = function () {
    ;
  };
} catch (e) {
  ;
}

try {
  class X {
    static caller() {
      return "";
    }

  }

  X.caller = function () {
    return staticMethodValue;
  };

  X.caller();
} catch (e) {
  ;
}

try {
  class X {
    static arguments() {
      return "";
    }

  }

  ;

  X.arguments = function () {
    return staticMethodValue;
  };

  X.arguments();
} catch (e) {
  ;
}

try {
  class X {
    static caller() {
      return "";
    }

  }

  X["caller"] = function () {
    return staticMethodValue;
  };

  X.caller();
} catch (e) {
  ;
}

try {
  class X {
    static arguments() {
      return "";
    }

  }

  ;

  X["arguments"] = function () {
    return staticMethodValue;
  };

  X.arguments();
} catch (e) {
  ;
}

try {
  class X {
    static *caller() {
      yield staticMethodValue;
    }

  }

  ;
  X.caller().next().value;
} catch (e) {
  ;
}

try {
  class X {
    static *arguments() {
      yield staticMethodValue;
    }

  }

  ;
  X.arguments().next().value;
} catch (e) {
  ;
}

try {
  class X {
    static *caller() {
      yield;
    }

  }

  ;

  X["caller"] = function* () {
    yield staticMethodValue;
  };

  X.caller().next().value;
} catch (e) {
  ;
}

try {
  class X {
    static *arguments() {
      yield;
    }

  }

  ;

  X["arguments"] = function* () {
    yield staticMethodValue;
  };

  X.arguments().next().value;
} catch (e) {
  ;
}

try {
  class X {
    *caller() {
      yield staticMethodValue;
    }

  }

  ;
  let x = new X();
  x.caller().next().value;
} catch (e) {
  ;
}

try {
  class X {
    *arguments() {
      yield staticMethodValue;
    }

  }

  ;
  let x = new X();
  x.arguments().next().value;
} catch (e) {
  ;
}

try {
  class X {
    *caller() {
      yield;
    }

  }

  ;
  let x = new X();

  x["caller"] = function* () {
    yield staticMethodValue;
  };

  x.caller().next().value;
} catch (e) {
  ;
}

try {
  class X {
    *arguments() {
      yield;
    }

  }

  ;
  let x = new X();

  x["arguments"] = function* () {
    yield staticMethodValue;
  };

  x.arguments().next().value;
} catch (e) {
  ;
}

console.log('');
console.log('Instance methods with computed names');

try {
  class A {
    ['a' + 'b']() {
      return 211;
    }

  }

  ;
  new A().ab();
} catch (e) {
  ;
}

try {
  class A {
    ['a' + 0]() {
      return 212;
    }

  }

  ;
  new A().a0();
} catch (e) {
  ;
}

try {
  class A {
    [0.1]() {
      return 213;
    }

  }

  ;
  new A()[0.1]();
} catch (e) {
  ;
}

try {
  class A {
    [1]() {
      return 214;
    }

  }

  ;
  new A()[1]();
} catch (e) {
  ;
}

function createClassWithInstanceMethod(name, value) {
  return class {
    [name]() {
      return value;
    }

  };
}

;

try {
  A = createClassWithInstanceMethod('foo', 215);
  new A()['foo']();
} catch (e) {
  ;
}

try {
  A = createClassWithInstanceMethod('foo', 216);
  B = createClassWithInstanceMethod('bar', 217);
  [new A()['foo'](), new B()['bar']()];
} catch (e) {
  ;
}

try {
  x = 218;

  class A {
    [x++]() {
      return x;
    }

  }

  ;
  new A()[218]();
} catch (e) {
  ;
}

try {
  x = undefined;

  class A {
    [(x = 220) && 'foo']() {
      return x;
    }

  }

  ;
  new A().foo();
} catch (e) {
  ;
}

try {
  x = 221;

  class A {
    [(x1 = x) && x++]() {
      return x1;
    }

    [(x2 = x) && x++]() {
      return x2;
    }

  }

  ;
  [new A()[221](), new A()[222]()];
} catch (e) {
  ;
}

try {
  x = 1;

  class A {
    ['foo' + x++]() {
      return 223;
    }

    ['foo' + x++]() {
      return 224;
    }

  }

  ;
  [new A().foo1(), new A().foo2()];
} catch (e) {
  ;
}

try {
  x = 1;

  class A {
    ['foo' + ++x]() {
      return 225;
    }

    [(x1 = x) && 'foo' + x++]() {
      return 226;
    }

  }

  ;
  [x1, x, new A().foo2()];
} catch (e) {
  ;
}

console.log('');
console.log('Static methods with computed names');

try {
  class A {
    static ['a' + 'b']() {
      return 311;
    }

  }

  ;
  A.ab();
} catch (e) {
  ;
}

try {
  class A {
    static ['a' + 0]() {
      return 312;
    }

  }

  ;
  A.a0();
} catch (e) {
  ;
}

try {
  class A {
    static [0.1]() {
      return 313;
    }

  }

  ;
  A[0.1]();
} catch (e) {
  ;
}

try {
  class A {
    static [1]() {
      return 314;
    }

  }

  ;
  A[1]();
} catch (e) {
  ;
}

try {
  function createClassWithStaticMethod(name, value) {
    return class {
      static [name]() {
        return value;
      }

    };
  }

  ;
} catch (e) {
  ;
}

try {
  A = createClassWithStaticMethod('foo', 315);
  A['foo']();
} catch (e) {
  ;
}

try {
  A = createClassWithStaticMethod('foo', 316);
  B = createClassWithStaticMethod('bar', 317);
  [A['foo'](), B['bar']()];
} catch (e) {
  ;
}

try {
  x = 218;

  class A {
    static [x++]() {
      return x;
    }

  }

  ;
  A[218]();
} catch (e) {
  ;
}

try {
  x = undefined;

  class A {
    static [(x = 220) && 'foo']() {
      return x;
    }

  }

  ;
  A.foo();
} catch (e) {
  ;
}

try {
  x = 221;

  class A {
    static [(x1 = x) && x++]() {
      return x1;
    }

    static [(x2 = x) && x++]() {
      return x2;
    }

  }

  ;
  [A[221](), A[222]()];
} catch (e) {
  ;
}

try {
  x = 1;

  class A {
    static ['foo' + x++]() {
      return 223;
    }

    static ['foo' + x++]() {
      return 224;
    }

  }

  ;
  [A.foo1(), A.foo2()];
} catch (e) {
  ;
}

try {
  x = 1;

  class A {
    static ['foo' + ++x]() {
      return 225;
    }

    static [(x1 = x) && 'foo' + x++]() {
      return 226;
    }

  }

  ;
  [x1, x, A.foo2()];
} catch (e) {
  ;
}

console.log('');
console.log('Instance methods with duplicated names');

try {
  class A {
    ab() {
      return 401;
    }

    ab() {
      return 402;
    }

  }

  ;
  new A().ab();
} catch (e) {
  ;
}

try {
  class A {
    'a'() {
      return 403;
    }

    'a'() {
      return 404;
    }

  }

  ;
  new A().a();
} catch (e) {
  ;
}

try {
  class A {
    1() {
      return 405;
    }

    1() {
      return 406;
    }

  }

  ;
  new A()[1]();
} catch (e) {
  ;
}

try {
  class A {
    0.1() {
      return 407;
    }

    0.1() {
      return 408;
    }

  }

  ;
  new A()[0.1]();
} catch (e) {
  ;
}

try {
  class A {
    ab() {
      return 409;
    }

    ['a' + 'b']() {
      return 410;
    }

  }

  ;
  new A().ab();
} catch (e) {
  ;
}

try {
  class A {
    ['ab']() {
      return 411;
    }

    ab() {
      return 412;
    }

  }

  ;
  new A().ab();
} catch (e) {
  ;
}

try {
  class A {
    a() {
      return 413;
    }

    ['a']() {
      return 414;
    }

    a() {
      return 415;
    }

  }

  ;
  new A().a();
} catch (e) {
  ;
}

try {
  class A {
    ['b']() {
      return 416;
    }

    b() {
      return 417;
    }

    ['b']() {
      return 418;
    }

  }

  ;
  new A().b();
} catch (e) {
  ;
}

try {
  class A {
    a() {
      return 419;
    }

    get a() {
      return 420;
    }

  }

  ;
  new A().a;
} catch (e) {
  ;
}

try {
  class A {
    get a() {
      return 421;
    }

    a() {
      return 422;
    }

  }

  ;
  new A().a();
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    a() {
      return 423;
    }

    set a(x) {
      setterValue = x;
    }

  }

  ;
  new A().a = 424;
  setterValue;
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    set a(x) {
      setterValue = x;
    }

    a() {
      return 425;
    }

  }

  ;
  new A().a();
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    get foo() {
      return 426;
    }

    set foo(x) {
      setterValue = x;
    }

  }

  ;
  a = new A();
  a.foo = a.foo;
  setterValue;
} catch (e) {
  ;
}

function valueTypes(object, proeprtyName) {
  descriptor = Object.getOwnPropertyDescriptor(object, proeprtyName);
  return ['value', 'get', 'set'].filter(function (name) {
    return name in descriptor;
  });
}

try {
  class A {
    get foo() {
      ;
    }

    foo() {
      ;
    }

    set foo(x) {
      ;
    }

  }

  ;
  valueTypes(new A().__proto__, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    set foo(x) {
      ;
    }

    foo() {
      ;
    }

    get foo() {
      ;
    }

  }

  ;
  valueTypes(new A().__proto__, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

    get foo() {
      ;
    }

    set foo(x) {
      ;
    }

  }

  ;
  valueTypes(new A().__proto__, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

    set foo(x) {
      ;
    }

    get foo() {
      ;
    }

  }

  ;
  valueTypes(new A().__proto__, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    get foo() {
      ;
    }

    set foo(x) {
      ;
    }

    foo() {
      ;
    }

  }

  ;
  valueTypes(new A().__proto__, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    set foo(x) {
      ;
    }

    get foo() {
      ;
    }

    foo() {
      ;
    }

  }

  ;
  valueTypes(new A().__proto__, 'foo');
} catch (e) {
  ;
}

console.log('');
console.log('Static methods with duplicated names');

try {
  class A {
    static ab() {
      return 501;
    }

    static ab() {
      return 502;
    }

  }

  ;
  A.ab();
} catch (e) {
  ;
}

try {
  class A {
    static 'a'() {
      return 503;
    }

    static 'a'() {
      return 504;
    }

  }

  ;
  A.a();
} catch (e) {
  ;
}

try {
  class A {
    static 1() {
      return 505;
    }

    static 1() {
      return 506;
    }

  }

  ;
  A[1]();
} catch (e) {
  ;
}

try {
  class A {
    static 0.1() {
      return 507;
    }

    static 0.1() {
      return 508;
    }

  }

  ;
  A[0.1]();
} catch (e) {
  ;
}

try {
  class A {
    static ab() {
      return 509;
    }

    static ['a' + 'b']() {
      return 510;
    }

  }

  ;
  A.ab();
} catch (e) {
  ;
}

try {
  class A {
    static ['ab']() {
      return 511;
    }

    static ab() {
      return 512;
    }

  }

  ;
  A.ab();
} catch (e) {
  ;
}

try {
  class A {
    static a() {
      return 513;
    }

    static ['a']() {
      return 514;
    }

    static a() {
      return 515;
    }

  }

  ;
  A.a();
} catch (e) {
  ;
}

try {
  class A {
    static ['b']() {
      return 516;
    }

    static b() {
      return 517;
    }

    static ['b']() {
      return 518;
    }

  }

  ;
  A.b();
} catch (e) {
  ;
}

try {
  class A {
    static a() {
      return 519;
    }

    static get a() {
      return 520;
    }

  }

  ;
  A.a;
} catch (e) {
  ;
}

try {
  class A {
    static get a() {
      return 521;
    }

    static a() {
      return 522;
    }

  }

  ;
  A.a();
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    static a() {
      return 523;
    }

    static set a(x) {
      setterValue = x;
    }

  }

  ;
  A.a = 524;
  setterValue;
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    static set a(x) {
      setterValue = x;
    }

    static a() {
      return 525;
    }

  }

  ;
  A.a();
} catch (e) {
  ;
}

try {
  setterValue = undefined;

  class A {
    static get foo() {
      return 526;
    }

    static set foo(x) {
      setterValue = x;
    }

  }

  ;
  A.foo = A.foo;
  setterValue;
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      ;
    }

    static foo() {
      ;
    }

    static set foo(x) {
      ;
    }

  }

  ;
  valueTypes(A, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    static set foo(x) {
      ;
    }

    static foo() {
      ;
    }

    static get foo() {
      ;
    }

  }

  ;
  valueTypes(A, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    static foo() {
      ;
    }

    static get foo() {
      ;
    }

    static set foo(x) {
      ;
    }

  }

  ;
  valueTypes(A, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    static foo() {
      ;
    }

    static set foo(x) {
      ;
    }

    static get foo() {
      ;
    }

  }

  ;
  valueTypes(A, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      ;
    }

    static set foo(x) {
      ;
    }

    static foo() {
      ;
    }

  }

  ;
  valueTypes(A, 'foo');
} catch (e) {
  ;
}

try {
  class A {
    static set foo(x) {
      ;
    }

    static get foo() {
      ;
    }

    static foo() {
      ;
    }

  }

  ;
  valueTypes(A, 'foo');
} catch (e) {
  ;
}

console.log('');
console.log('Static methods with duplicated names');
