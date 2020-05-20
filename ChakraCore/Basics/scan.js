//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var result;

try {
  result = String.fromCharCode(11) == '\v';
} catch (ex) {
  result = "Exception";
}

print(result);
