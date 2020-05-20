//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  const ta = Int8Array.of(42);
  ta.non_indexed = 'whatever';
  console.log('whatever', ta.non_indexed);
  var res = delete ta.non_indexed;
  console.log(true, res);
  console.log(undefined, ta.non_indexed);
}

t1();

function t2() {
  const ta = Int8Array.of(42);
  var id = 'id';
  Object.defineProperty(ta, id, {
    value: 17,
    configurable: false
  });
  var res = delete ta[id];
  console.log(false, res);
  console.log(17, ta[id]);

  try {
    'use strict';

    delete ta[id];
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  const ta = Int8Array.of(42);
  var res = delete ta[0];
  console.log(false, res);
  console.log(42, ta[0]);

  try {
    'use strict';

    delete ta[0];
  } catch (e) {
    ;
  }
}

t3();

function t4() {
  const ta = Int8Array.of(42);
  var res = delete ta.length;
  console.log(true, res);
  console.log(1, ta.length);

  res = function () {
    'use strict';

    return delete ta.length;
  }();

  console.log(true, res);
  console.log(1, ta.length);
}

t4();
