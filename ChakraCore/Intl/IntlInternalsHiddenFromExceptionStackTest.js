//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testCallback() {
  var array = [{
    toString: function () {
      throw new Error('Throwing...');
    }
  }, 5];
  var c = new Intl.Collator();
  array.sort(c.compare);
}

try {
  testCallback();
} catch (ex) {
  ;
}
