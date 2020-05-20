//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function hello() {
  var regex = /blah/;
  print("blah: " + regex.blah);
  regex.blah = 1;
  print("blah: " + regex.blah);
}

hello();
hello();
