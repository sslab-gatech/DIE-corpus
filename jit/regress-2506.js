// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict'; // Top-level code

let s = 0;
let ff = [undefined, undefined, undefined];

for (const x of [1, 2, 3]) {
  s += x;

  ff[x - 1] = function () {
    return x;
  };
}

6;
s;
1;
ff[0]();
2;
ff[1]();
3;
ff[2]();
let x = 1;
s = 0;

for (const z of [x, x + 1, x + 2]) {
  s += z;
}

6;
s;
s = 0;
var q = 1;

for (const x of [q, q + 1, q + 2]) {
  s += x;
}

6;
s;
let z = 1;
s = 0;

for (const x = 1; z < 2; z++) {
  s += x + z;
}

2;
s;
s = "";

for (const x in [1, 2, 3]) {
  s += x;
}

"012";
s;
"'use strict'; for (const x in [1,2,3]) { x++ }";
TypeError;

// Function scope
(function () {
  let s = 0;

  for (const x of [1, 2, 3]) {
    s += x;
  }

  6;
  s;
  let x = 1;
  s = 0;

  for (const q of [x, x + 1, x + 2]) {
    s += q;
  }

  6;
  s;
  s = 0;
  var q = 1;

  for (const x of [q, q + 1, q + 2]) {
    s += x;
  }

  6;
  s;
  s = "";

  for (const x in [1, 2, 3]) {
    s += x;
  }

  "012";
  s;
})();
