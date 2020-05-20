//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test(x, s, e) {
  var result = x.substring(s, e);
  print('"' + result + '", length:', result.length);
} //
// Test regular strings
//


var left = "abcdefghijklmnopqrstuvwxyz";
test(left, 1, 10);
test(left, 0, 5);
test(left, 15, 25); //
// Test concatenated strings
//

var right = "1234567890";
var c = left + right;
print("Left-only");
test(c, 1, 10);
test(c, 0, 5);
test(c, 15, 25);
print();
print("Right-only");
var o = left.length;
test(c, o + 1, o + 5);
test(c, o, o + 10);
print();
print("Split");
test(c, o - 2, o + 3);
test(c, 0, c.length);
print(); //
// Test parameter validation
//

print("Split");
test(left, 3); // To end of string

test(left, 0, 0);
test(left, 0, 1);
