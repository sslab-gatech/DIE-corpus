//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
this.__defineSetter__("x", function () {
  ;
});

let x = 'let';
Object.defineProperty(this, "x", {
  value: 0xdec0
});

if (x === 'let' && this.x === 57024) {
  console.log("PASS");
}
