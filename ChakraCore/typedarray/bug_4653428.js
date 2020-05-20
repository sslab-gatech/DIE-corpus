//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
[(-1 >>> 0) + 1, (-1 >>> 0) + 2, Infinity].forEach(function (len) {
  new Uint8Array(len);
  new Uint8Array({
    length: len
  });
});
print("pass");
