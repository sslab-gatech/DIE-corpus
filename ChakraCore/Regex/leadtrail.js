//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var re1 = /^\s{2,}|\s{3,}$/g;
print("Test 1.1");
print("     blah     ".replace(re1, '') + "<END>");
print("====================");
print("Test 1.2");
print("     blah  ".replace(re1, '') + "<END>");
print("====================");
print("Test 1.3");
print(" blah   ".replace(re1, '') + "<END>");
var str1 = "        blah \n   blah   \n     blah\n     blah ";
var str2 = "     \n   \n     \n    ";
var str3 = "     \nb   \nb     \n    b\n \n\n    ";
var str3 = "     \nb   \nb     \n    ";
var re2 = /^\s{5,}|\s{1,}$/gm;
print("====================");
print("Test 2.1 (Multiline)");
print(str1.replace(re2, '<E>') + "<END>");
print("====================");
print("Test 2.2 (Multiline)");
print(str2.replace(re2, '<E>') + "<END>");
print("====================");
print("Test 2.3 (Multiline)");
print(str3.replace(re2, '<E>') + "<END>");
var re3 = /^\s*|\s*$/gm;
print("====================");
print("Test 3.1 (Multiline)");
print(str1.replace(re3, '<E>') + "<END>");
print("====================");
print("Test 3.2 (Multiline)");
print(str2.replace(re3, '<E>') + "<END>");
print("====================");
print("Test 3.3 (Multiline)");
print(str3.replace(re3, '<E>') + "<END>");
