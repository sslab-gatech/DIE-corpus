//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function guarded_call(func) {
  try {
    func();
  } catch (e) {
    print(e.name + ": " + e.message);
  }
}

print(typeof Function.prototype);
print(Function.prototype);
print(Function.prototype());
print(Function.prototype("return 123;"));
print(Function.prototype(123, "foo", null));
guarded_call(function () {
  var o = new Function.prototype();
  print("Fail: " + o);
});
guarded_call(function () {
  var o = {} instanceof Function.prototype;
  print("Fail: " + o);
});
