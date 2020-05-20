//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  var a = () => {
    return 123;
  };

  a();

  var b = arg => {
    return arg;
  };

  b(123);

  var c = (arg1, arg2) => {
    return arg1 + arg2;
  };

  c(1, 1);

  var d = () => 123;

  d();

  var e = arg => arg;

  e(123);

  var f = arg => {
    return arg;
  };

  f(123);

  var g = (arg1, arg2) => arg1 + arg2;

  g(1, 1);
}

test1();

function test2() {
  var a = () => {
    return 123;
  };

  a();

  var b = arg => {
    return arg;
  };

  b(123);

  var c = (arg1, arg2) => {
    return arg1 + arg2;
  };

  c(1, 1);

  var d = () => 123;

  d();

  var e = arg => arg;

  e(123);

  var f = arg => {
    return arg;
  };

  f(123);

  var g = (arg1, arg2) => arg1 + arg2;

  g(1, 1);
}

test2();

function test3() {
  var a = async () => {
    return 123;
  };

  a();

  var b = async arg => {
    return arg;
  };

  b();

  var c = async (arg1, arg2) => {
    return arg1 + arg2;
  };

  c();

  var d = async () => 123;

  d();

  var e = async arg => arg;

  e();

  var f = async arg => {
    return arg;
  };

  f();

  var g = async (arg1, arg2) => arg1 + arg2;

  g();
}

test3();

function test4() {
  var a = async yield => {
    yield;
  };

  a();

  function b(yield) {
    return yield;
  }

  b('b');

  var c = async yield => yield;

  c();

  async function d(yield) {
    return yield;
  }

  d();

  var e = async (a = yield) => {
    yield;
  };

  e();

  var f = async (a = yield) => yield;

  f();
}

test4();
