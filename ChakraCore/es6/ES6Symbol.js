//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Symbol tests -- verifies the API shape and basic functionality
function VerifyToPropertyKey(key) {
  var obj = {};
  console.log(obj.hasOwnProperty(key));

  try {
    Object.defineProperty(obj, key, {
      value: 'something',
      enumerable: true
    });
  } catch (e) {
    ;
  }

  console.log(obj.hasOwnProperty(key));
  console.log(obj.propertyIsEnumerable(key));
  console.log(undefined, Object.getOwnPropertyDescriptor(obj, key));
  obj = {};

  obj.__defineGetter__(key, () => {
    return 2;
  });

  console.log(obj.hasOwnProperty(key));
  obj = {};

  obj.__defineSetter__(key, () => {
    return 2;
  });

  console.log(obj.hasOwnProperty(key));
  var count = 0;
  obj = Object.defineProperty({}, key, {
    set(v) {
      console.log(v);
      count++;
    }

  });

  var set = obj.__lookupSetter__(key);

  console.log('function', typeof set);
  set('abc');
  console.log(1, count);
  obj = Object.defineProperty({}, key, {
    get() {
      return 'abc';
    }

  });

  var get = obj.__lookupGetter__(key);

  console.log('function', typeof get);
  console.log('abc', get());
  obj = {};

  try {
    Reflect.set(obj, key, 'abc');
  } catch (e) {
    ;
  }

  console.log('abc', Reflect.get(obj, key));
  console.log(Reflect.deleteProperty(obj, key));
  console.log(Reflect.has(obj, key));

  try {
    Reflect.defineProperty(obj, key, {
      value: 'def',
      enumerable: true
    });
  } catch (e) {
    ;
  }

  console.log('def', Reflect.get(obj, key));
  console.log(undefined, Reflect.getOwnPropertyDescriptor(obj, key));
  obj = {};

  try {
    obj[key] = 123;
  } catch (e) {
    ;
  }

  console.log(123, obj[key]);
  console.log(obj.hasOwnProperty(key));
}

function t1() {
  console.log(Symbol !== undefined);
  console.log('function', typeof Symbol);
  console.log(0, Symbol.length);
  console.log('function', typeof Symbol.toString);
  console.log('function', typeof Symbol.valueOf);
  console.log('function', typeof Symbol.for);
  console.log(1, Symbol.for.length);
  descriptor = Object.getOwnPropertyDescriptor(Symbol, 'for');
  console.log(descriptor.writable, 'Symbol.for.descriptor.writable == true');
  console.log(descriptor.enumerable, 'Symbol.for.descriptor.enumerable == false');
  console.log(descriptor.configurable, 'Symbol.for.descriptor.configurable == true');
  console.log('function', typeof Symbol.keyFor);
  console.log(1, Symbol.keyFor.length);
  descriptor = Object.getOwnPropertyDescriptor(Symbol, 'keyFor');
  console.log(descriptor.writable, 'Symbol.keyFor.descriptor.writable == true');
  console.log(descriptor.enumerable, 'Symbol.keyFor.descriptor.enumerable == false');
  console.log(descriptor.configurable, 'Symbol.keyFor.descriptor.configurable == true');
}

t1();

function t2() {
  console.log(Symbol === Symbol.prototype.constructor);
  descriptor = Object.getOwnPropertyDescriptor(Symbol, 'prototype');
  console.log(descriptor.writable, 'Symbol.prototype.descriptor.writable == false');
  console.log(descriptor.enumerable, 'Symbol.prototype.descriptor.enumerable == false');
  console.log(descriptor.configurable, 'Symbol.prototype.descriptor.configurable == false');
  console.log('function', typeof Symbol.prototype.toString);
  descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, 'toString');
  console.log(descriptor.writable, 'Symbol.prototype.toString.descriptor.writable == true');
  console.log(descriptor.enumerable, 'Symbol.prototype.toString.descriptor.enumerable == false');
  console.log(descriptor.configurable, 'Symbol.prototype.toString.descriptor.configurable == true');
  console.log('function', typeof Symbol.prototype.valueOf);
  descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, 'valueOf');
  console.log(descriptor.writable, 'Symbol.prototype.valueOf.descriptor.writable == true');
  console.log(descriptor.enumerable, 'Symbol.prototype.valueOf.descriptor.enumerable == false');
  console.log(descriptor.configurable, 'Symbol.prototype.valueOf.descriptor.configurable == true');
  console.log('function', typeof Symbol.prototype[Symbol.toPrimitive]);
  console.log(1, Symbol.prototype[Symbol.toPrimitive].length);
  descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);
  console.log(descriptor.writable, 'Symbol.prototype[@@toPrimitive].descriptor.writable == false');
  console.log(descriptor.enumerable, 'Symbol.prototype[@@toPrimitive].descriptor.enumerable == false');
  console.log(descriptor.configurable, 'Symbol.prototype[@@toPrimitive].descriptor.configurable == true');
  var functionToString = Symbol.prototype[Symbol.toPrimitive].toString();
  var actualName = functionToString.substring(9, functionToString.indexOf('('));
  console.log('[Symbol.toPrimitive]', actualName);
  console.log('string', typeof Symbol.prototype[Symbol.toStringTag]);
  descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toStringTag);
  console.log(descriptor.writable, 'Symbol.prototype[@@toStringTag].descriptor.writable == false');
  console.log(descriptor.enumerable, 'Symbol.prototype[@@toStringTag].descriptor.enumerable == false');
  console.log(descriptor.configurable, 'Symbol.prototype[@@toStringTag].descriptor.configurable == true');
  console.log('Symbol', Symbol.prototype[Symbol.toStringTag]);
}

t2();

function t3() {
  var x = Symbol("x");
  var y = Symbol("y"); // toPrimitive() behavior

  console.log(x, x[Symbol.toPrimitive]());
  console.log(x, x[Symbol.toPrimitive].call(x));
  console.log(y, x[Symbol.toPrimitive].call(y));
  console.log(x == x[Symbol.toPrimitive].call(y));
  console.log(x, Symbol.prototype[Symbol.toPrimitive].call(x)); // TypeError scenarios

  try {
    x[Symbol.toPrimitive].call("x");
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive]();
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call(true);
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call(false);
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call(0);
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call(NaN);
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call("");
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call("abc");
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call(null);
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call(undefined);
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype[Symbol.toPrimitive].call({});
  } catch (e) {
    ;
  }

  var z = Object(y);
  console.log(y, Symbol.prototype[Symbol.toPrimitive].call(z));
  console.log(Object(x) == Symbol.prototype[Symbol.toPrimitive].call(z));
}

t3();

function t4() {
  function verifySymbol(propertyName) {
    var fullName = "Symbol[" + propertyName + "]";
    console.log(Symbol[propertyName] !== undefined);
    console.log('symbol', typeof Symbol[propertyName]);
    var descriptor = Object.getOwnPropertyDescriptor(Symbol, propertyName);
    console.log(descriptor.writable, fullName + '.descriptor.writable == false');
    console.log(descriptor.enumerable, fullName + 'descriptor.enumerable == false');
    console.log(descriptor.configurable, fullName + 'descriptor.configurable == false');
  }

  verifySymbol("hasInstance");
  verifySymbol("isConcatSpreadable");
  verifySymbol("iterator");
  verifySymbol("toPrimitive");
  verifySymbol("toStringTag");
  verifySymbol("unscopables");
  verifySymbol("species");
  verifySymbol("replace");
  verifySymbol("search");
  verifySymbol("match");
  verifySymbol("split");
}

t4();

function t5() {
  try {
    'string' + Symbol.iterator;
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  console.log('Symbol(description)', String(Symbol('description')));

  try {
    new String(Symbol('description'));
  } catch (e) {
    ;
  }
}

t6();

function t7() {
  console.log('Symbol(Symbol.hasInstance)', Object(Symbol.hasInstance).toString());
  console.log('Symbol(Symbol.isConcatSpreadable)', Object(Symbol.isConcatSpreadable).toString());
  console.log('Symbol(Symbol.iterator)', Object(Symbol.iterator).toString());
  console.log('Symbol(Symbol.toPrimitive)', Object(Symbol.toPrimitive).toString());
  console.log('Symbol(Symbol.toStringTag)', Object(Symbol.toStringTag).toString());
  console.log('Symbol(Symbol.unscopables)', Object(Symbol.unscopables).toString());
  console.log('Symbol()', Object(Symbol()).toString());
  console.log("Symbol(Some kind of long string description\n\n)", Object(Symbol("Some kind of long string description\n\n")).toString());
}

t7();

function t8() {
  console.log('symbol', typeof Symbol('mysymbol'));
  console.log('symbol', typeof Symbol(''));
  console.log('symbol', typeof Symbol());
}

t8();

function t9() {
  try {
    new Symbol();
  } catch (e) {
    ;
  }

  try {
    new Symbol('anything');
  } catch (e) {
    ;
  }
}

t9();

function t10() {
  console.log(Symbol('s') !== Symbol('s'));
}

t10();

function t11() {
  console.log(Symbol('something') !== Symbol('something'));
  console.log(Symbol('') !== Symbol(''));
  console.log(Symbol() !== Symbol());
  var my1 = Symbol('my');
  console.log(my1 === my1);
  var my2 = my1;
  console.log(my1 === my2);
  var o1 = Object(my1);
  var o2 = Object(my1);
  console.log(o1 !== o2);
  console.log(o1 !== my1);
  console.log(o1.valueOf() === o2.valueOf());
  var o3 = Object(Symbol('another'));
  console.log(o1 !== o3);
  var my3 = o1.valueOf();
  console.log(my1 === my3);
  console.log(Symbol.iterator !== Symbol('iterator'));
  console.log(Object(Symbol('sym')).valueOf() !== Object(Symbol('sym')).valueOf());
}

t11();

function t12() {
  var sym = Symbol('my');
  console.log(sym === 'string');
  console.log(sym === undefined);
  console.log(sym === null);
  console.log(sym === true);
  console.log(sym === false);
  console.log(sym === []);
  console.log(sym === {});
  console.log(sym === sym);
  console.log('string' === sym);
  console.log(undefined === sym);
  console.log(null === sym);
  console.log(true === sym);
  console.log(false === sym);
  console.log([] === sym);
  console.log({} === sym);
}

t12();

function t13() {
  var sym = Symbol('my');
  console.log(sym == 'string');
  console.log(sym == undefined);
  console.log(sym == null);
  console.log(sym == true);
  console.log(sym == false);
  console.log(sym == []);
  console.log(sym == {});
  console.log(sym == sym);
  console.log('string' == sym);
  console.log(undefined == sym);
  console.log(null == sym);
  console.log(true == sym);
  console.log(false == sym);
  console.log([] == sym);
  console.log({} == sym);
}

t13();

function t14() {
  var sym = Symbol('my');
  console.log(sym == Object(sym));
  console.log(Object(sym) == sym);
  console.log(Object(sym) == Object(sym));
  console.log(sym === Object(sym));
  console.log(Object(sym) === sym);
  console.log(Object(sym) === Object(sym));
}

t14();

function t15() {
  console.log('Symbol()', Symbol().toString());
  var sym = Symbol();
  console.log(sym.valueOf() === sym.valueOf());
}

t15();

function t16() {
  var o = {};
  o[Symbol.iterator] = 'some string';
  console.log('some string', o[Symbol.iterator]);
  console.log(o[Symbol.iterator.toString()] === undefined); // use functions to wrap property access to ensure we hit JIT code

  function getProperty(obj, sym) {
    return obj[sym];
  }

  function setProperty(obj, sym, val) {
    obj[sym] = val;
  }

  o = {};
  var my = Symbol();

  for (var i = 0; i < 5; i++) {
    setProperty(o, my, i);
    console.log(i, getProperty(o, my));
  }

  var sym = Symbol('sym');
  o = {};
  o[sym] = 'test';
  console.log('test', o[sym]);
  console.log(undefined, o['sym']);
  var s1 = Symbol('uniquevalue');
  var s2 = Symbol('uniquevalue');
  o = {};
  o[s1] = 's1';
  o[s2] = 's2';
  console.log('s1', o[s1]);
  console.log('s2', o[s2]);
  console.log(o[s1] != o[s2]);
  delete o[s1];
  console.log(undefined, o[s1]);
  console.log('s2', o[s2]); // Needs ES6 object literal improvements

  o = {
    [sym]: 'string'
  };
  console.log('string', o[sym]);
}

t16();

function t17() {
  var o = {};
  console.log(o.hasOwnProperty(Symbol.iterator));
  o[Symbol.iterator] = 'a string';
  console.log(o.hasOwnProperty(Symbol.iterator));
}

t17();

function t18() {
  try {
    Number(Symbol.iterator).valueOf();
  } catch (e) {
    ;
  }

  console.log(true, Boolean(Symbol.iterator));
  console.log('object', typeof Object(Symbol.iterator));
}

t18();

function t19() {
  console.log(Object.getOwnPropertySymbols !== undefined);
  console.log('function', typeof Object.getOwnPropertySymbols);
  console.log(1, Object.getOwnPropertySymbols.length);
}

t19();

function t20() {
  try {
    Object.getOwnPropertySymbols();
  } catch (e) {
    ;
  }

  try {
    Object.getOwnPropertySymbols(undefined);
  } catch (e) {
    ;
  }

  try {
    Object.getOwnPropertySymbols(null);
  } catch (e) {
    ;
  }

  console.log([], Object.getOwnPropertySymbols(true));
  console.log([], Object.getOwnPropertySymbols(1));
  console.log([], Object.getOwnPropertySymbols("a"));
  console.log([], Object.getOwnPropertySymbols(Symbol('a')));
  console.log([], Object.getOwnPropertySymbols({}));
}

t20();

function t21() {
  var sym = Symbol('c');
  var o = {};
  o['a'] = 'alpha';
  Object.defineProperty(o, 'b', {
    value: 'beta',
    enumerable: false
  });
  o[sym] = 'gamma';
  o['d'] = 'delta';
  var symbols = Object.getOwnPropertySymbols(o);
  console.log(1, symbols.length);

  for (var i = 0; i < symbols.length; i++) {
    console.log(typeof symbols[i] === 'symbol');
    console.log(symbols[i].toString() != 'a');
    console.log(symbols[i].toString() != 'b');
    console.log(symbols[i].toString() != 'd');
    console.log(symbols[i] === sym);
    console.log(symbols[i].toString() === sym.toString());
  }

  var s1 = Symbol('name');
  var s2 = Symbol('name');
  o = {};
  o[s1] = 'something';
  o[s2] = 'something else';
  symbols = Object.getOwnPropertySymbols(o);
  console.log(2, symbols.length);
  console.log(symbols[0] === s1);
  console.log(symbols[1] === s2);
  o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  symbols = Object.getOwnPropertySymbols(o);
  console.log(0, symbols.length);
}

t21();

function t22() {
  var sym = Symbol('c');
  var o = {};
  o['a'] = 'alpha';
  Object.defineProperty(o, 'b', {
    value: 'beta',
    enumerable: false
  });
  o[sym] = 'gamma';
  o['d'] = 'delta';
  var names = Object.getOwnPropertyNames(o);
  console.log(3, names.length);

  for (var i = 0; i < names.length; i++) {
    console.log(typeof names[i] === 'symbol');
    console.log(names[i] != 'c');
    console.log(names[i] != sym);
    console.log(names[i] != sym.toString());
  }

  o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  names = Object.getOwnPropertyNames(o);
  console.log(11, names.length);
  o = {};
  o[sym] = 'something';
  names = Object.getOwnPropertyNames(o);
  console.log(0, names.length);
}

t22();

function t23() {
  var sym = Symbol('c');
  var o = {};
  o['a'] = 'alpha';
  o['b'] = 'beta';
  o[sym] = 'gamma';
  o['d'] = 'delta';
  var keys = Object.keys(o);
  console.log(3, keys.length);

  for (var i = 0; i < keys.length; i++) {
    console.log(typeof keys[i] === 'symbol');
    console.log(keys[i] != 'c');
    console.log(keys[i] != sym);
    console.log(keys[i] != sym.toString());
  }
}

t23();

function t24() {
  var sym = Symbol('c');
  var o = {};
  o['a'] = 'alpha';
  o['b'] = 'beta';
  o[sym] = 'gamma';
  o['d'] = 'delta';

  for (k in o) {
    console.log(typeof k === 'symbol');
    console.log(o[k] !== 'gamma');
    console.log(k != sym);
    console.log(k != sym.toString());
  }
}

t24();

function t25() {
  var sym = Symbol();
  var o = {};
  Object.defineProperty(o, sym, {
    value: 'some value'
  });
  console.log('some value', o[sym]);
  console.log(undefined, o['sym']);
  console.log(undefined, o['']);
  console.log(undefined, o[sym.toString()]);
}

t25();

function t26() {
  var props = {};
  var s1 = Symbol('symbol 1');
  var s2 = Symbol('symbol 2');
  props['a'] = {
    value: 'alpha',
    enumerable: true
  };
  props[s1] = {
    value: 'beta',
    enumerable: true
  };
  props[s2] = {
    value: 'gamma',
    enumerable: true
  };
  props['d'] = {
    value: 'delta',
    enumerable: true
  };
  var o = {};
  Object.defineProperties(o, props);
  console.log('alpha', o['a']);
  console.log('delta', o['d']);
  console.log('beta', o[s1]);
  console.log('gamma', o[s2]);
  console.log(undefined, o['s1']);
  console.log(undefined, o['s2']);
  console.log(undefined, o['symbol 1']);
  console.log(undefined, o['symbol 2']);
  console.log(undefined, o[s1.toString()]);
  console.log(undefined, o[s2.toString()]);
}

t26();

function t27() {
  var props = {};
  var s1 = Symbol('symbol 1');
  var s2 = Symbol('symbol 2');
  props['a'] = {
    value: 'alpha',
    enumerable: true
  };
  props[s1] = {
    value: 'beta',
    enumerable: true
  };
  props[s2] = {
    value: 'gamma',
    enumerable: true
  };
  props['d'] = {
    value: 'delta',
    enumerable: true
  };
  var o = Object.create(Object.prototype, props);
  console.log('alpha', o['a']);
  console.log('delta', o['d']);
  console.log('beta', o[s1]);
  console.log('gamma', o[s2]);
  console.log(undefined, o['s1']);
  console.log(undefined, o['s2']);
  console.log(undefined, o['symbol 1']);
  console.log(undefined, o['symbol 2']);
  console.log(undefined, o[s1.toString()]);
  console.log(undefined, o[s2.toString()]);
}

t27();

function t28() {
  var sym = Symbol();
  var o = {};
  Object.defineProperty(o, sym, {
    value: 100000,
    writable: false,
    enumerable: true,
    configurable: false
  });
  var descriptor = Object.getOwnPropertyDescriptor(o, sym);
  console.log(descriptor.writable, 'o[sym].descriptor.writable == false');
  console.log(descriptor.enumerable, 'o[sym].descriptor.enumerable == true');
  console.log(descriptor.configurable, 'o[sym].descriptor.configurable == false');
}

t28();

function t29() {
  var sym1 = Symbol();
  var sym2 = Symbol();
  var o = {};
  Object.defineProperty(o, sym1, {
    value: 10,
    enumerable: true
  });
  Object.defineProperty(o, sym2, {
    value: 10,
    enumerable: false
  });
  console.log(o.propertyIsEnumerable(sym1), 'o.propertyIsEnumerable[sym1]');
  console.log(o.propertyIsEnumerable(sym2), 'o.propertyIsEnumerable[sym2]');
}

t29();

function t30() {
  var sym = Symbol();
  var o = {};
  var helpme;

  o.__defineSetter__(sym, function () {
    helpme = 'useful string';
  });

  o[sym] = 'anything';
  console.log('useful string', helpme);
}

t30();

function t31() {
  var sym = Symbol();
  var o = {};

  o.__defineGetter__(sym, function () {
    return 'anything';
  });

  console.log('anything', o[sym]);
}

t31();

function t32() {
  var sym = Symbol();
  var o = {};
  var helpme;

  var setter = function () {
    helpme = 'useful string';
  };

  o.__defineSetter__(sym, setter);

  var f = o.__lookupSetter__(sym);

  console.log(undefined, helpme);
  console.log(f === setter);
  f();
  console.log('useful string', helpme);
  helpme = undefined;
  o[sym] = 'anything';
  console.log('useful string', helpme);
}

t32();

function t33() {
  var sym = Symbol();
  var o = {};

  var getter = function () {
    return 'anything';
  };

  o.__defineGetter__(sym, getter);

  var f = o.__lookupGetter__(sym);

  console.log(f === getter);
  console.log('anything', f());
  console.log('anything', o[sym]);
}

t33();

function t34() {
  var sym = Symbol('1');
  var o = {};
  o[sym] = 'a string';
  console.log(undefined, o[1]);
  console.log('a string', o[sym]);
  o = [];
  o[1] = 'the number 1';
  o[sym] = 'the symbol 1';
  console.log(2, o.length);
  console.log('the number 1', o[1]);
  console.log('the symbol 1', o[sym]);
}

t34();

function t35() {
  try {
    Symbol.prototype.valueOf();
  } catch (e) {
    ;
  }

  try {
    Symbol.prototype.toString();
  } catch (e) {
    ;
  }
}

t35();

function t36() {
  var sym = Symbol.for('my string');
  var sym2 = Symbol.for('my string');
  console.log('symbol', typeof sym);
  console.log('Symbol(my string)', sym.toString());
  console.log(sym === sym2);
  var key = Symbol.keyFor(sym);
  console.log('my string', key);
}

t36();

function t37() {
  var sym = Symbol.for('my string');
  sym = undefined; // After cleaning up sym, there shouldn't be anyone pinning the PropertyRecord
  // except for the Symbol registration map.
  // If the reference to the PropertyRecord created above gets cleaned-up we will
  // cause an AV below when we try to reference it again.

  CollectGarbage();
  sym = Symbol.for('my string');
  console.log('symbol', typeof sym);
  console.log('Symbol(my string)', sym.toString());
}

t37();

function t38() {
  var sym = Symbol.for('my string');
  var sym2 = Symbol('my string');
  console.log(sym === sym2);
  console.log('my string', Symbol.keyFor(sym));
  console.log(undefined, Symbol.keyFor(sym2));
}

t38();

function t39() {
  var sym1 = Symbol.for('A\0X');
  var sym2 = Symbol.for('A\0Y');
  var sym3 = Symbol.for('A\0X');
  console.log(sym1 === sym2);
  console.log(sym1 === sym3);
}

t39();

function t40() {
  var x = Symbol();

  try {
    "str" + x;
  } catch (e) {
    ;
  }

  try {
    x + "str";
  } catch (e) {
    ;
  }

  try {
    10 + x;
  } catch (e) {
    ;
  }

  try {
    x + 10;
  } catch (e) {
    ;
  }
}

t40();

function t41() {
  var sym = Symbol('sym');
  var sym_object = Object(sym);
  var obj = {
    [sym_object]: 'value'
  };
  console.log('value', obj[sym]);
  console.log('value', obj[sym_object]);
  console.log([], Object.getOwnPropertyNames(obj));
  console.log([sym], Object.getOwnPropertySymbols(obj));
  var obj2 = {};
  obj2[sym_object] = 'value2';
  console.log('value2', obj2[sym]);
  console.log('value2', obj2[sym_object]);
  console.log([], Object.getOwnPropertyNames(obj2));
  console.log([sym], Object.getOwnPropertySymbols(obj2));
}

t41();

function t42() {
  var sym = Symbol('sym');
  var symbol_object = Object(sym);
  VerifyToPropertyKey(symbol_object);
}

t42();

function t43() {
  var sym = Symbol('sym');
  var tostring_object = {
    toString() {
      return sym;
    },

    valueOf() {
      console.log(false);
    }

  };
  VerifyToPropertyKey(tostring_object);
}

t43();

function t44() {
  var sym = Symbol('sym');
  var obj = {
    [sym]: 'value'
  };
  var valueof_object = {
    toString: null,

    valueOf() {
      return sym;
    }

  };
  VerifyToPropertyKey(valueof_object);
}

t44();

function t45() {
  var x = Symbol();
  var obj = {
    'length': x
  }; // We can't use parseInt directly here as that does ToString(obj) - we want something which calls ToNumber directly

  try {
    Array.prototype.lastIndexOf.call(obj, 1);
  } catch (e) {
    ;
  }
}

t45();

function t46() {
  var x = Symbol();

  try {
    "use strict";

    x.a = 1;
  } catch (e) {
    ;
  }
}

t46();

function t47() {
  var x = Symbol();

  try {
    "use strict";

    x['a' + 'b'] = 1;
  } catch (e) {
    ;
  }
}

t47();

function t48() {
  var x = Symbol();

  try {
    "use strict";

    x[12] = 1;
  } catch (e) {
    ;
  }
}

t48();

function t49() {
  var x = Symbol();
  x.a = 1;
  console.log(x.a, undefined);
}

t49();

function t50() {
  var x = Symbol();
  x['a' + 'b'] = 1;
  console.log(x['ab'], undefined);
}

t50();

function t51() {
  var x = Symbol();
  x[10086] = 1;
  console.log(x[10086], undefined);
}

t51();

function t52() {
  var object = {
    foo: Symbol()
  };
  var sym = Symbol("a");
  object[Symbol()] = 1;
  var array = [Symbol()];
  console.log('{}', JSON.stringify(object));
  console.log('[null]', JSON.stringify(array));
  console.log(undefined, JSON.stringify(Symbol()));
  console.log(undefined, JSON.stringify(sym));
}

t52();

function t53() {
  console.log('Symbol()', Symbol().toString());
  console.log('Symbol()', Symbol(undefined).toString());
  console.log('Symbol()', Symbol("").toString());
}

t53();

function t54() {
  // https://github.com/microsoft/ChakraCore/issues/1409
  var o = Object.create(null);

  try {
    o[Symbol()]();
  } catch (e) {
    ;
  }

  try {
    o[Symbol('foo')]();
  } catch (e) {
    ;
  }

  try {
    o[Symbol.iterator]();
  } catch (e) {
    ;
  }
}

t54();

function t55() {
  console.log(Symbol.toPrimitive != 1);
  console.log(Symbol.toPrimitive != NaN);
  var valueOfCalled = false;
  var a = Symbol('f');
  var b = {
    valueOf: function () {
      valueOfCalled = true;
      return a;
    }
  };
  console.log(a == b);
  console.log(valueOfCalled);
  valueOfCalled = false;
  console.log(b == a);
  console.log(valueOfCalled);
  console.log(a == Object(a));
}

t55();

function t56() {
  try {
    null[Symbol()];
  } catch (e) {
    ;
  }

  try {
    typeof null[Symbol()];
  } catch (e) {
    ;
  }

  try {
    new null[Symbol()]();
  } catch (e) {
    ;
  }

  try {
    undefined[Symbol('foo')];
  } catch (e) {
    ;
  }

  try {
    null[Symbol.iterator]();
  } catch (e) {
    ;
  }

  try {
    undefined[Symbol()] = 5;
  } catch (e) {
    ;
  }

  try {
    delete null[Symbol()];
  } catch (e) {
    ;
  }
}

t56();
