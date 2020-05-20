//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  var sym1 = Symbol(),
      sym2 = Symbol(),
      sym3 = Symbol();
  var obj = {
    1: true,
    A: true
  };
  obj.B = true;
  obj[sym1] = true;
  obj[2] = true;
  obj[sym2] = true;
  Object.defineProperty(obj, 'C', {
    value: true,
    enumerable: true
  });
  Object.defineProperty(obj, sym3, {
    value: true,
    enumerable: true
  });
  Object.defineProperty(obj, 'D', {
    value: true,
    enumerable: true
  }); // Reflect.ownKeys

  console.log('Reflect.ownKeys');
  var result = Reflect.ownKeys(obj);

  for (var i in result) {
    console.log(result[i].toString());
  } // Object.getOwnPropertySymbols


  console.log('Object.getOwnPropertySymbols');
  result = Object.getOwnPropertySymbols(obj);

  for (var i in result) {
    console.log(result[i].toString());
  }
}

function test2() {
  function test() {
    ;
  }

  ;
  Object.defineProperty(test, 'A', {
    value: true,
    enumerable: true
  });
  Object.defineProperty(test, Symbol('blah'), {
    value: true,
    enumerable: true
  });
  Object.defineProperty(test, 'D', {
    value: true,
    enumerable: true
  }); // special properties 

  console.log('Reflect.ownKeys with special properties');
  result = Reflect.ownKeys(test);

  for (var i in result) {
    console.log(result[i].toString());
  }
}

function test3() {
  var x = {};
  Object.defineProperty(x, "a", {
    value: 5,
    enumerable: true
  });
  Object.defineProperty(x, "b", {
    get: function () {
      return 23;
    },
    enumerable: true
  });
  var p = new Proxy(x, {
    getOwnPropertyDescriptor: function (target, property) {
      return Reflect.getOwnPropertyDescriptor(target, property);
    }
  });
  console.log(Object.keys(p));
}

function test4() {
  function bar() {
    ;
  }

  ;
  var foo = new Proxy(bar, {});
  console.log(Object.getOwnPropertyNames(foo));
  console.log(Reflect.ownKeys(foo));
}

test1();
test2();
test3();
test4();
