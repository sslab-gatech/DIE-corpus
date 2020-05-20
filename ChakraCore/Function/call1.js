//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = "global.x";
var o = {
  x: "object.x"
};

function foo(a) {
  print("In foo: " + a + ". this.x: " + this.x);
}

foo(1);
foo.call(o, 3);
var a = new Array();

for (var i = 0; i < 10; i++) {
  a[i] = i * i + 1;
}

print(Array.prototype.concat.call(a));
