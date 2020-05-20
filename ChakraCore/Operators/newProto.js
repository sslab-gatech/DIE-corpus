//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function Blah() {
  this.hello = "yay";
}

Blah.prototype = "meow";

function Derived() {
  ;
}

Derived.prototype = new Blah();
var blah = new Blah();
print(blah.hello);
print(blah.toString());
var derived = new Derived();
print(derived.toString());
