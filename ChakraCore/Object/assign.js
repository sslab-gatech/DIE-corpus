//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  let orig = {};
  let sym = Symbol("c");
  orig.a = 1;
  orig.b = "asdf";
  orig[sym] = "qwert";
  let newObj = Object.assign({}, orig);
  console.log(newObj.b, orig.b);
  console.log(newObj.a, orig.a);
  console.log(newObj[sym], orig[sym]);
}

t1();

function t2() {
  let orig = {};
  orig.a = 1;
  orig.b = "asdf";
  delete orig.a;
  let newObj = Object.assign({}, orig);
  console.log(newObj.b, orig.b);
  console.log(newObj.a, orig.a);
}

t2();

function t3() {
  let orig = {};
  orig.a = 1;
  Object.defineProperty(orig, 'b', {
    get: function () {
      return "asdf";
    },
    enumerable: true
  });
  let newObj = Object.assign({}, orig);
  console.log(newObj.b, orig.b);
  console.log(newObj.a, orig.a);
}

t3();

function t4() {
  let orig = {};
  orig.a = 1;
  Object.defineProperty(orig, 'b', {
    set: function () {
      ;
    },
    enumerable: true
  });
  let newObj = Object.assign({}, orig);
  console.log(newObj.b, orig.b);
  console.log(newObj.a, orig.a);
}

t4();

function t5() {
  let protoObj = {};
  let orig = Object.create(protoObj);
  orig.a = 1;
  orig.b = "asdf";
  let newObj = Object.assign({}, orig);
  console.log(newObj.b, orig.b);
  console.log(newObj.a, orig.a);
}

t5();

function t6() {
  let orig = {};
  orig.a = 1;
  Object.defineProperty(orig, 'b', {
    value: "asdf",
    enumerable: false
  });
  let newObj = Object.assign({}, orig);
  console.log(newObj.b, undefined);
  console.log(newObj.a, orig.a);
}

t6();

function t7() {
  Object.defineProperty(Object.prototype, 'b', {
    get: function () {
      return "asdf";
    }
  });
  let orig = {};
  orig.a = 1;
  let newObj = Object.assign({}, orig);
  console.log(newObj.b);
  console.log(newObj.a, orig.a);
}

t7();

function t8() {
  let orig = {};
  orig.a = 1;
  orig[0] = 2;
  let newObj = Object.assign({}, orig);
  console.log(newObj.a, orig.a);
  console.log(newObj[0], orig[0]);
}

t8();

function t9() {
  let orig = {};
  orig.a = 1;
  orig[0] = 2;
  let newObj = {};
  newObj[0] = 3;
  Object.assign(newObj, orig);
  console.log(newObj.a, orig.a);
  console.log(newObj[0], orig[0]);
}

t9();

function t10() {
  let orig = {};
  orig.a = 1;
  orig[0] = 2;
  Object.defineProperty(orig, '1', {
    value: "3",
    enumerable: false
  });
  let newObj = Object.assign({}, orig);
  console.log(newObj.a, orig.a);
  console.log(newObj[0], orig[0]);
  console.log(newObj[1], undefined);
}

t10();
