//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
Object.create({}, {
  a: 0
});
Object.defineProperty({}, "x", 0);
Object.create({}, [0]);

(function () {
  a = 0;
  Object.create({}, this);
})();
