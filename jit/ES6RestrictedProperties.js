//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 restricted property tests
function verifyAttributes(obj, prop, attribs, name) {
  var p = Object.getOwnPropertyDescriptor(obj, prop);

  if (typeof p === "undefined") {
    return;
  }

  console.log(undefined, p);
  console.log(attribs.writable, p.writable);
  console.log(attribs.enumerable, p.enumerable);
  console.log(attribs.configurable, p.configurable);
}

function verifyHasRestrictedOwnProperties(obj, name) {
  // NOTE: Results for this test method differ from other engines
  // NOTE: sm seems to make sloppy-mode functions behave like strict-mode functions for caller/arguments
  console.log(obj.hasOwnProperty('caller'));
  console.log(obj.hasOwnProperty('arguments'));
  var names = Object.getOwnPropertyNames(obj);
  console.log(-1, names.findIndex(e => {
    return e === 'arguments';
  }));
  console.log(-1, names.findIndex(e => {
    return e === 'caller';
  }));
  verifyAttributes(obj, 'caller', {
    writable: false,
    enumerable: false,
    configurable: false
  }, name);
  console.log(obj.propertyIsEnumerable('caller'));
  verifyAttributes(obj, 'arguments', {
    writable: false,
    enumerable: false,
    configurable: false
  }, name);
  console.log(obj.propertyIsEnumerable('arguments'));
  console.log(null, obj.caller);
  console.log(null, obj.arguments);

  try {
    obj.caller = 'something';
  } catch (e) {
    ;
  }

  try {
    obj.arguments = 'something';
  } catch (e) {
    ;
  } // NOTE: sm does not throw for non-strict function `obj`


  try {
    'use strict';

    obj.caller = 'something';
  } catch (e) {
    ;
  }

  try {
    'use strict';

    obj.arguments = 'something';
  } catch (e) {
    ;
  }

  console.log(null, obj.caller);
  console.log(null, obj.arguments); // NOTE: sm fails non-strict function

  try {
    Object.defineProperty(obj, 'arguments', {
      value: 123
    });
  } catch (e) {
    ;
  }

  try {
    Object.defineProperty(obj, 'caller', {
      value: 123
    });
  } catch (e) {
    ;
  } // NOTE: other engines: the above defineProperty makes the following not fail unless the above lines are commented-out because the above do not throw and therefore actually do the defineProperty)
  // NOTE: sm fails non-strict function


  console.log(delete obj.arguments);
  console.log(delete obj.caller); // NOTE: sm also fails non-strict function

  try {
    'use strict';

    delete obj.caller;
  } catch (e) {
    ;
  }

  try {
    'use strict';

    delete obj.arguments;
  } catch (e) {
    ;
  }
}

function verifyDoesNotHaveRestrictedOwnProperties(obj, name) {
  console.log(obj.hasOwnProperty('caller'));
  console.log(obj.hasOwnProperty('arguments'));
  var names = Object.getOwnPropertyNames(obj);
  console.log(-1, names.findIndex(e => {
    return e === 'arguments';
  }));
  console.log(-1, names.findIndex(e => {
    return e === 'caller';
  }));
  console.log(undefined, Object.getOwnPropertyDescriptor(obj, 'caller'));
  console.log(obj.propertyIsEnumerable('caller'));
  console.log(undefined, Object.getOwnPropertyDescriptor(obj, 'arguments'));
  console.log(obj.propertyIsEnumerable('arguments'));

  try {
    obj.caller;
  } catch (e) {
    ;
  }

  try {
    obj.arguments;
  } catch (e) {
    ;
  }

  try {
    'use strict';

    obj.caller;
  } catch (e) {
    ;
  }

  try {
    'use strict';

    obj.arguments;
  } catch (e) {
    ;
  }

  try {
    obj.caller = 'something';
  } catch (e) {
    ;
  }

  try {
    obj.arguments = 'something';
  } catch (e) {
    ;
  }

  try {
    'use strict';

    obj.caller = 'something';
  } catch (e) {
    ;
  }

  try {
    'use strict';

    obj.arguments = 'something';
  } catch (e) {
    ;
  }

  console.log(delete obj.arguments);

  try {
    Object.defineProperty(obj, 'arguments', {
      value: 123,
      writable: true,
      enumerable: true,
      configurable: true
    });
  } catch (e) {
    ;
  }

  console.log(obj.hasOwnProperty('arguments'));
  console.log(obj.propertyIsEnumerable('arguments'));
  console.log(123, obj.arguments);
  verifyAttributes(obj, 'arguments', {
    writable: true,
    enumerable: true,
    configurable: true
  }, name);
  console.log(delete obj.arguments);
  console.log(obj.hasOwnProperty('arguments'));
  console.log(delete obj.caller);

  try {
    Object.defineProperty(obj, 'caller', {
      value: 123,
      writable: true,
      enumerable: true,
      configurable: true
    });
  } catch (e) {
    ;
  }

  console.log(obj.hasOwnProperty('caller'));
  console.log(obj.propertyIsEnumerable('caller'));
  console.log(123, obj.caller);
  verifyAttributes(obj, 'caller', {
    writable: true,
    enumerable: true,
    configurable: true
  }, name);
  console.log(delete obj.caller);
  console.log(obj.hasOwnProperty('caller')); // Remove Function.prototype from the prototype chain.

  Object.setPrototypeOf(obj, Object.prototype);
  console.log(undefined, obj.arguments);

  try {
    obj.arguments = 'abc';
  } catch (e) {
    ;
  }

  console.log('abc', obj.arguments);
  console.log(obj.hasOwnProperty('arguments'));
  console.log(obj.propertyIsEnumerable('arguments'));
  verifyAttributes(obj, 'arguments', {
    writable: true,
    enumerable: true,
    configurable: true
  }, name);
  console.log(delete obj.arguments);
  console.log(obj.hasOwnProperty('arguments'));
  console.log(undefined, obj.caller);

  try {
    obj.caller = 'abc';
  } catch (e) {
    ;
  }

  console.log('abc', obj.caller);
  console.log(obj.hasOwnProperty('caller'));
  console.log(obj.propertyIsEnumerable('caller'));
  verifyAttributes(obj, 'caller', {
    writable: true,
    enumerable: true,
    configurable: true
  }, name);
  console.log(delete obj.caller);
  console.log(obj.hasOwnProperty('caller'));
}

function t1() {
  var obj = Function.prototype;
  console.log(obj.hasOwnProperty('caller'));
  console.log(obj.hasOwnProperty('arguments'));
  var p = Object.getOwnPropertyDescriptor(obj, 'caller');
  console.log(p.enumerable);
  console.log(p.configurable);
  console.log(obj.propertyIsEnumerable('caller'));
  console.log('function', typeof p.get);
  console.log('function', typeof p.set);

  try {
    p.get();
  } catch (e) {
    ;
  }

  try {
    p.set();
  } catch (e) {
    ;
  }

  var p2 = Object.getOwnPropertyDescriptor(obj, 'arguments');
  console.log(p2.enumerable);
  console.log(p2.configurable);
  console.log(obj.propertyIsEnumerable('arguments'));
  console.log('function', typeof p2.get);
  console.log('function', typeof p2.set);

  try {
    p2.get();
  } catch (e) {
    ;
  }

  try {
    p2.set();
  } catch (e) {
    ;
  } // NOTE: sm fails these tests


  console.log(p.get === p.set);
  console.log(p2.get === p2.set);
  console.log(p.get === p2.get);
  var names = Object.getOwnPropertyNames(obj);
  console.log(-1, names.findIndex(e => {
    return e === 'arguments';
  }));
  console.log(-1, names.findIndex(e => {
    return e === 'caller';
  })); // NOTE: sm fails these tests

  try {
    obj.caller;
  } catch (e) {
    ;
  }

  try {
    obj.arguments;
  } catch (e) {
    ;
  }

  try {
    obj.caller = 'something';
  } catch (e) {
    ;
  }

  try {
    obj.arguments = 'something';
  } catch (e) {
    ;
  }
}

t1();

function t2() {
  function nonStrictFunc() {
    ;
  }

  ;
  verifyHasRestrictedOwnProperties(nonStrictFunc, "Non-strict function");
}

t2();

function t3() {
  function strictFunc() {
    'use strict';

    ;
  }

  ;
  verifyDoesNotHaveRestrictedOwnProperties(strictFunc, "Strict function");
}

t3();

function t4() {
  class A {}

  ;
  verifyDoesNotHaveRestrictedOwnProperties(A, "Class");
}

t4();

function t5() {
  class A {
    static static_method() {
      ;
    }

  }

  ;
  verifyDoesNotHaveRestrictedOwnProperties(A.static_method, "Class static method");
}

t5();

function t6() {
  class A {
    static static_method() {
      'use strict';

      ;
    }

  }

  ;
  verifyDoesNotHaveRestrictedOwnProperties(A.static_method, "Class strict-mode static method");
}

t6();

function t7() {
  class A {
    method() {
      ;
    }

  }

  ;
  verifyDoesNotHaveRestrictedOwnProperties(A.prototype.method, "Class method");
}

t7();

function t8() {
  class A {
    method() {
      'use strict';

      ;
    }

  }

  ;
  verifyDoesNotHaveRestrictedOwnProperties(A.prototype.method, "Class strict-mode method");
}

t8();

function t9() {
  var obj = class A {
    static caller() {
      return 42;
    }

  };
  console.log(obj.hasOwnProperty('caller'));
  console.log(obj.hasOwnProperty('arguments'));
  console.log('{"writable":true,"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'caller')));
  console.log(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'arguments')));
  console.log('["caller","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(obj).sort()));
  console.log(42, obj.caller());

  try {
    obj.arguments;
  } catch (e) {
    ;
  }
}

t9();

function t10() {
  var obj = class A {
    static get arguments() {
      return 42;
    }

  };
  console.log(obj.hasOwnProperty('caller'));
  console.log(obj.hasOwnProperty('arguments'));
  console.log(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'caller')));
  console.log('{"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'arguments')));
  console.log('["arguments","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(obj).sort()));

  try {
    obj.caller;
  } catch (e) {
    ;
  }

  console.log(42, obj.arguments);
}

t10();

function t11() {
  var my_v;

  class A {
    set arguments(v) {
      my_v = v;
    }

  }

  ;
  var obj = A;
  console.log(obj.hasOwnProperty('caller'));
  console.log(obj.hasOwnProperty('arguments'));
  console.log(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'caller')));
  console.log(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'arguments')));
  console.log('["length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(obj).sort()));

  try {
    obj.caller;
  } catch (e) {
    ;
  }

  try {
    obj.arguments;
  } catch (e) {
    ;
  }

  var a = new A();
  console.log(a.hasOwnProperty('caller'));
  console.log(a.hasOwnProperty('arguments'));
  console.log(a.__proto__.hasOwnProperty('caller'));
  console.log(a.__proto__.hasOwnProperty('arguments'));
  a.arguments = 50;
  console.log(50, my_v);
  console.log(undefined, a.caller);
  a.caller = 123;
  console.log(123, a.caller);
}

t11();

function t12() {
  var obj = () => {
    ;
  };

  verifyDoesNotHaveRestrictedOwnProperties(obj, "Lambda");
}

t12();

function t13() {
  var obj = () => {
    'use strict';

    ;
  };

  verifyDoesNotHaveRestrictedOwnProperties(obj, "Strict-mode lambda");
}

t13();

function t14() {
  function target() {
    ;
  }

  var obj = target.bind(null);
  verifyDoesNotHaveRestrictedOwnProperties(obj, "Bound function");
}

t14();

function t15() {
  function target() {
    'use strict';

    ;
  }

  var obj = target.bind(null);
  verifyDoesNotHaveRestrictedOwnProperties(obj, "Bound strict-mode function");
}

t15();

function t16() {
  function* gf() {
    ;
  }

  verifyDoesNotHaveRestrictedOwnProperties(gf, "Generator function");
}

t16();

function t17() {
  function* gf() {
    'use strict';

    ;
  }

  verifyDoesNotHaveRestrictedOwnProperties(gf, "Generator strict-mode function");
}

t17();

function t18() {
  var obj = {
    func() {
      ;
    }

  };
  verifyDoesNotHaveRestrictedOwnProperties(obj.func, "Object-literal function");
}

t18();

function t19() {
  var obj = {
    func() {
      'use strict';

      ;
    }

  };
  verifyDoesNotHaveRestrictedOwnProperties(obj.func, "Object-literal strict-mode function");
}

t19();

function t20() {
  var obj = Function.prototype;

  try {
    Object.defineProperty(obj, 'arguments', {
      value: 42
    });
  } catch (e) {
    ;
  }

  try {
    Object.defineProperty(obj, 'caller', {
      value: 123
    });
  } catch (e) {
    ;
  }

  console.log(obj.arguments, 42);
  console.log(obj.caller, 123);

  try {
    'use strict';

    assert.isTrue(delete obj.caller);
  } catch (e) {
    ;
  }

  try {
    'use strict';

    assert.isTrue(delete obj.arguments);
  } catch (e) {
    ;
  }

  console.log(obj.arguments, undefined);
  console.log(obj.caller, undefined); // These should succeed even after the first delete above (normal delete behavior)

  console.log(delete obj.arguments);
  console.log(delete obj.caller);
}

t20();
