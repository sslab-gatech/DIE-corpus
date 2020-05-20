//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Basic string compare.");
var str1 = "abcd1234";
var str2 = "1234567a";
var str1a = "abcd1234";
print("compare ( '" + str1 + "' , '" + str1a + "' ) = " + str1.localeCompare(str1a));
print("compare ( '" + str1 + "' , '" + str2 + "' ) = " + str1.localeCompare(str2));
print("compare ( '" + str1 + "' , undef ) = " + str1.localeCompare());
