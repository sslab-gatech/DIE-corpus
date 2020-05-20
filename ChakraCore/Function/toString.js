//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var a = 1;

function foo() {
  var x = 1;
}

var m = foo.toString();
print("Test 'toString()' on simple function:");
print(m);
print("Test 'toString()' on builtin function parseFloat:");
print(parseFloat.toString());

var an = function () {
  //anonymous
  a = a + 1;
};

print("Test 'toString()' on anonymous function:");
print(an.toString());
print("Test 'toString()' on an anonymous, unhinted function expression:");
print(function () {
  ;
});
print("Test 'toString()' on an anonymous, unhinted function expression in parentheses (different behavior in standards mode):");
print(function () {
  ;
});
print("Test 'toString()' on parent and nested function:");

function parent() {
  print("in parent");
  var bb = 1;

  function nested() {
    print("in nested");
    bb = 2;
  }

  nested();
  print(nested.toString());
}

parent();
print(parent.toString());
print('Test "somestring".indexOf.toString():');
print("somestring".indexOf.toString());
print('Test "somestring".indexOf:');
print("somestring".indexOf);
