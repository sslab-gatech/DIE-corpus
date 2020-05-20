//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
let x = "let x";
this.x = 20;
print(this.x);
delete this.x;
print(x);
print(x);

if (this.x) {
  print(this.x);
}

Object.preventExtensions(this);
Object.getOwnPropertyNames(this).forEach(function (p) {
  Object.defineProperty(this, p, {
    configurable: false
  });
});

if (Object.isSealed(this)) {
  print("PASS");
}
