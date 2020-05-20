//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function correctProtoBound(proto, functionType) {
  Object.setPrototypeOf(functionType, proto);
  var boundF = Function.prototype.bind.call(functionType, null);
  return Object.getPrototypeOf(boundF) === proto;
}

function test1() {
  var f = function () {
    ;
  };

  var a = correctProtoBound(Function.prototype, f) && correctProtoBound({}, f) && correctProtoBound(null, f);
  console.log(a);
}

test1();

function test2() {
  var gf = function* () {
    ;
  };

  var a = correctProtoBound(Function.prototype, gf) && correctProtoBound({}, gf) && correctProtoBound(null, gf);
  console.log(a);
}

test2();

function test3() {
  var arrowfunction = () => 5;

  var a = correctProtoBound(Function.prototype, arrowfunction) && correctProtoBound({}, arrowfunction) && correctProtoBound(null, arrowfunction);
  console.log(a);
}

test3();

function test4() {
  class C {}

  var a = correctProtoBound(Function.prototype, C) && correctProtoBound({}, C) && correctProtoBound(null, C);
  console.log(a);
}

test4();

function test5() {
  function correctProtoBound(superclass) {
    class C extends superclass {
      constructor() {
        return Object.create(null);
      }

    }

    var boundF = Function.prototype.bind.call(C, null);
    return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
  }

  var a = correctProtoBound(Array) && correctProtoBound(null) && correctProtoBound(function () {
    ;
  });
  console.log(a);
}

test5();

function test6() {
  function correctProtoBound(proto) {
    var p = new Proxy(function () {
      ;
    }, {});
    Object.setPrototypeOf(p, proto);
    var boundF = Function.prototype.bind.call(p, null);
    return Object.getPrototypeOf(boundF) === proto;
  }

  var a = correctProtoBound(Function.prototype) && correctProtoBound({}); //&& correctProtoBound(null); proxy bug on setPrototypeOf for this case OS bug# 3842393

  console.log(a);
}

test6();
