//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function guarded_call(func) {
  try {
    func();
  } catch (e) {
    print(e.name + " : " + e.message);
  }
}

var testCount = 0;

function scenario(title) {
  if (testCount > 0) {
    print("\n");
  }

  print(testCount++ + ".", title);
}

scenario("Array: default");
var arr = [1, 2,, 3];
print(arr);
scenario("Array: Replaced Array.prototype.join");

Array.prototype.join = function () {
  return "replaced Array.prototype.join";
};

print(arr);
scenario("Array: Replaced non-callable Array.prototype.join");
Array.prototype.join = 1234; // non-callable

print(arr);
scenario("Object: no join");
var o = {};
guarded_call(function () {
  print(Array.prototype.toString.apply(o));
});
scenario("Object: has join");
var o = {
  join: function () {
    return "o join";
  }
};
guarded_call(function () {
  print(Array.prototype.toString.apply(o));
});
scenario("Object: non-callable join");
var o = {
  join: 1234
};
guarded_call(function () {
  print(Array.prototype.toString.apply(o));
});
scenario("Object: no join, replaced Object.prototype.toString");
var o = {};

Object.prototype.toString = function () {
  return "replaced Object.prototype.toString";
};

guarded_call(function () {
  print(Array.prototype.toString.apply(o));
});
