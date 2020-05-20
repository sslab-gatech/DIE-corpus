//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
"use strict";

var r = delete this;

function test1() {
  console.log(r);
}

test1();

function test2() {
  function test() {
    "use strict";

    return delete this;
  }

  console.log(test());
}

test2();

function test3() {
  function test() {
    "use strict";

    return delete new.target;
  }

  console.log(test());
}

test3();

function test6() {
  function test() {
    "use strict";

    try {
      function test5_eval() {
        "use strict";

        let a = 'a';
      }

      test5_eval();
    } catch (e) {
      return true;
    }

    return false;
  }

  console.log(test());
}

test6();
