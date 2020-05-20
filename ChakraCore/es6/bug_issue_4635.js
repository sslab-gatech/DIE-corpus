//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  var obj = {};
  obj.a = class A {};
  console.log(obj.a.name);
}

test1();

function test2() {
  var obj = {};
  obj.a = class {};
  console.log('' === obj.a.name);
}

test2();

function test3() {
  var obj = {};
  obj.a = class A {
    n() {
      return this.constructor.name;
    }

  };
  var a = new obj.a();
  console.log('A' === a.constructor.name);
  console.log('A' === a.n());
}

test3();

function test4() {
  var obj = {};
  obj.a = class {
    n() {
      return this.constructor.name;
    }

  };
  var a = new obj.a();
  console.log('' === a.constructor.name);
  console.log('' === a.n());
}

test4();
