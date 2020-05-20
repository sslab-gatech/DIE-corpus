//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function MyRepl(matched, offset, input) {
  input.substring(offset, matched.length) == matched;
  return "Boo!";
}

var str = new String("asdfasdfGg");
print(str.replace("f", MyRepl));
print(str.replace(/a/, MyRepl));
print(str.replace(/d/g, MyRepl));
print(str.replace(/G*/gi, MyRepl));
