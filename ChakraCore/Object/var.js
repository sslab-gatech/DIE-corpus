//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var defvar = 10;
print(defvar);

try {
  print(undefvar);
} catch (e) {
  print(e.message);
}

print(this.defvar);
print(this.undefvar);

function func() {
  print(defvar);

  try {
    print(undefvar);
  } catch (e) {
    print(e.message);
  } // this refers to the global object


  print(this.defvar);
  print(this.undefvar);
  return this;
}

var g = func();
print(g.defvar);
print(g.undefvar);
