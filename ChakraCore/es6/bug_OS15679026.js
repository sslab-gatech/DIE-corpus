//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test() {
  class c extends null {
    constructor() {
      return {};
    }

    meth() {
      super['prop'] = 'something';
      super.prop = 'something';
    }

  }

  try {
    (() => c.prototype.meth.call({}))();
  } catch (e) {
    ;
  }
}

test();
