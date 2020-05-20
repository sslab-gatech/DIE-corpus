//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = {};
print("x.valueOf()");

try {
  x.valueOf(); //Fine - there's no way to inject null or undefined as the 'this' value
} catch (e) {
  print(e);
}

print("x.valueOf.call(undefined)");

try {
  x.valueOf.call(undefined); //SHOULD throw a TypeError in ES5/IE10
} catch (e) {
  print(e);
}

print("x.valueOf.call(null)");

try {
  x.valueOf.call(null); //SHOULD throw a TypeError in ES5/IE10
} catch (e) {
  print(e);
}

print("x.valueOf.call()");

try {
  x.valueOf.call(); //SHOULD throw a TypeError in ES5/IE10
} catch (e) {
  print(e);
}

print("typeof x.valueOf.call(true)");
print(typeof x.valueOf.call(true)); //SHOULD print 'object' in ES5/IE10

print("typeof x.valueOf.call(42)");
print(typeof x.valueOf.call(42)); //SHOULD print 'object' in ES5/IE10

print("typeof x.valueOf.call('Hello')");
print(typeof x.valueOf.call('Hello')); //SHOULD print 'object' in ES5/IE10
