//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function verifyToStringSource(re, overriddenSource, expectedSource) {
  Object.defineProperty(re, 'source', {
    value: overriddenSource
  });
  var str = re.toString();
  var [, returnedSource] = str.split('/');
  console.log(expectedSource, returnedSource);
}

function verifyToStringFlags(re, overriddenFlags, expectedFlags) {
  Object.defineProperty(re, 'flags', {
    value: overriddenFlags
  });
  var str = re.toString();
  var [,, returnedFlags] = str.split('/');
  console.log(expectedFlags, returnedFlags);
}

function flattenArray(array) {
  return Array.prototype.concat.apply([], array);
}

var flagPropertyNames = ["global", "ignoreCase", "multiline", "options", "sticky", "unicode"];
var nonGenericPropertyNames = flagPropertyNames.concat("source");
var propertyNames = nonGenericPropertyNames.concat("flags"); // Values returned by the properties are tested in other files since they
// are independent of the config flag and work regardless of where the
// properties are.

function t1(name) {
  var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, name);

  try {
    descriptor;
    console.log(descriptor.enumerable);
    console.log(descriptor.configurable);
  } catch (e) {
    ;
  }

  try {
    descriptor.value;
    descriptor.set;
    var getter = descriptor.get;
    getter;
    console.log('function', typeof getter);
    console.log("get " + name, descriptor.get.name);
    console.log(0, descriptor.get.length);
  } catch (e) {
    ;
  }
}

function t2(name) {
  var descriptor = Object.getOwnPropertyDescriptor(/./, name);
  descriptor;
}

function t3(name) {
  class Subclass extends RegExp {}

  var re = new Subclass();

  try {
    re[name];
  } catch (e) {
    ;
  }

  ;
}

function t4(name) {
  var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, name);
  delete RegExp.prototype[name];
  console.log(name in RegExp.prototype);

  try {
    Object.defineProperty(RegExp.prototype, name, descriptor);
  } catch (e) {
    ;
  }
}

flattenArray(propertyNames.map(t1));
flattenArray(propertyNames.map(t2));
flattenArray(propertyNames.map(t3));
flattenArray(propertyNames.map(t4));

function t5(name) {
  try {
    var o = Object.create(/./);
    var getter = Object.getOwnPropertyDescriptor(RegExp.prototype, name).get;
    getter.bind(o);
  } catch (e) {
    ;
  }
}

nonGenericPropertyNames.map(t5);

function t6(name) {
  try {
    var getter = Object.getOwnPropertyDescriptor(RegExp.prototype, name).get;
    var result = getter.call(RegExp.prototype);
    result;
  } catch (e) {
    ;
  }
}

flagPropertyNames.map(t6);

function t7() {
  var getter = Object.getOwnPropertyDescriptor(RegExp.prototype, "source").get;
  var result = getter.call(RegExp.prototype);
  console.log(result);
}

t7();

function t8() {
  var re = {
    source: "source",
    flags: "gi"
  };
  var string = RegExp.prototype.toString.call(re);
  console.log(string);
}

t8();

function t9() {
  var overriddenSource = undefined;
  var expectedSource = "undefined";
  verifyToStringSource(/source/, overriddenSource, expectedSource);
}

t9();

function t10() {
  var overriddenSource = 1;
  var expectedSource = overriddenSource.toString();
  verifyToStringSource(/source/, overriddenSource, expectedSource);
}

t10();

function t11() {
  class Subclass extends RegExp {}

  var overriddenSource = "source";
  var expectedSource = overriddenSource;
  verifyToStringSource(new Subclass(), overriddenSource, expectedSource);
}

t11();

function t12() {
  var overriddenFlags = undefined;
  var expectedFlags = "undefined";
  verifyToStringFlags(/./g, overriddenFlags, expectedFlags);
}

t12();

function t13() {
  var overriddenFlags = 1;
  var expectedFlags = overriddenFlags.toString();
  verifyToStringFlags(/./g, overriddenFlags, expectedFlags);
}

t13();

function t14() {
  class Subclass extends RegExp {}

  var overriddenFlags = 'imy';
  var expectedFlags = overriddenFlags;
  verifyToStringFlags(new Subclass(), overriddenFlags, expectedFlags);
}

t14();
