//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var handler = {
  getOwnPropertyDescriptor: function (target, name) {
    return emulatedProps[name];
  },
  defineProperty: function (target, name, desc) {
    emulatedProps[name] = desc; // $LOG('success: ' + success);

    return success[name];
  },
  preventExtensions: function (target) {
    Object.defineProperties(target, emulatedProps);
    Object.preventExtensions(target);
    return true;
  },
  deleteProperty: function (target, name) {
    delete emulatedProps[name];
    return success[name];
  },
  get: function (target, name, receiver) {
    var desc = emulatedProps[name];

    if (desc === undefined) {
      return emulatedProto[name];
    }

    if ('value' in desc) {
      return desc.value;
    }

    if ('get' in desc) {
      return desc.get.call(target);
    }
  },
  set: function (target, name, value, receiver) {
    return success[name];
  },
  has: function (target, name) {
    return !!emulatedProps[name];
  },
  hasOwn: function (target, name) {
    return !!emulatedProps[name];
  },
  ownKeys: function (target) {
    return Object.getOwnPropertyNames(emulatedProps);
  },
  enumerate: function (target) {
    return Object.getOwnPropertyNames(emulatedProps).filter(function (name) {
      return emulatedProps[name].enumerable;
    });
  }
};

function t1() {
  var target = {};
  emulatedProps = {};
  emulatedProps.x = {
    value: 'test',
    configurable: false
  };
  Object.defineProperty(target, 'x', emulatedProps.x);
  var proxy = new Proxy(target, handler); // Checkout handler code at the bottom

  var desc;
  delete emulatedProps.x;

  try {
    desc = Object.getOwnPropertyDescriptor(proxy, 'x');
  } catch (e) {
    ;
  }
}

t1();

function t2() {
  var target = {};
  emulatedProps = {};
  target.x = 20;
  Object.preventExtensions(target);
  var desc;
  var proxy = new Proxy(target, handler); // Checkout handler code at the bottom

  try {
    desc = Object.getOwnPropertyDescriptor(proxy, 'x');
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  var target = {};
  emulatedProps = {};
  emulatedProps.x = {
    value: 1,
    configurable: false
  };
  Object.preventExtensions(target);
  var proxy = new Proxy(target, handler);

  try {
    Object.getOwnPropertyDescriptor(proxy, 'x');
  } catch (e) {
    ;
  }
}

t3();

function t4() {
  var target = {};
  emulatedProps = {};
  emulatedProps.x = {
    value: 1,
    configurable: false
  };
  Object.defineProperty(target, 'x', {
    value: 1,
    configurable: true
  });
  var proxy = new Proxy(target, handler);

  try {
    desc = Object.getOwnPropertyDescriptor(proxy, 'x');
  } catch (e) {
    ;
  }
}

t4();

function t5() {
  emulatedProps = {};
  var target = {};
  Object.defineProperty(emulatedProps, 'y', {
    value: 'test',
    configurable: 'false'
  });
  var proxy = new Proxy(target, handler);

  try {
    var desc = Object.getOwnPropertyDescriptor(proxy, 'y');
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var target = {};
  Object.preventExtensions(target);
  emulatedProps = {};
  emulatedProps.x = 5;
  var proxy = new Proxy(target, emulatedProps);

  success = function () {
    ;
  };

  try {
    Object.defineProperty(proxy, 'x', {
      value: 20
    });
  } catch (e) {
    ;
  }
}

t6();

function t7() {
  var target = {};
  emulatedProps = {};
  var proxy = new Proxy(target, handler);

  success = function () {
    ;
  };

  success.x = 21;

  try {
    Object.defineProperty(proxy, 'x', {
      value: 20,
      configurable: false
    });
  } catch (e) {
    ;
  }
}

t7();

function t8() {
  var target = {};
  emulatedProps = {};
  emulatedProps.x = 5;
  var proxy = new Proxy(target, handler);
  Object.defineProperty(target, 'x', {
    value: 41,
    configurable: true
  });

  success = function () {
    ;
  };

  success.x = 21;

  try {
    Object.defineProperty(proxy, 'x', {
      value: 20,
      configurable: false
    });
  } catch (e) {
    ;
  }
}

t8();
