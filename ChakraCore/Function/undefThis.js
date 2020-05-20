//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Tests to verify that "undefined" is passed as "this" to non-property-reference callees
try {
  print((1, Object.prototype.valueOf)());
} catch (e) {
  print(e);
}

try {
  var foo = Object.prototype.valueOf;
  print(foo());
} catch (e) {
  print(e);
}

(function () {
  try {
    print((1, Object.prototype.valueOf)());
  } catch (e) {
    print(e);
  }

  try {
    var foo = Object.prototype.valueOf;
    print(foo());
  } catch (e) {
    print(e);
  }
})();

function f1() {
  "use strict";

  var f1a = function () {
    print(this === undefined);
  };

  f1a();
}

f1();

function f2() {
  function f2a() {
    "use strict";

    print(this === undefined);
  }

  f2a();
}

f2();

function x() {
  "use strict";

  print(this);
}

x.bind()();
