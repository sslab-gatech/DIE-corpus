//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
let a = 'global';

for (let a = 'for'; f = function () {
  a += ' loop';
};) {
  f();
  print(a);
  break;
}

print(a);

for (let a in this) {
  let f = function () {
    a = 'for-in loop';
  };

  f();
  print(a);
  break;
}

print(a);

function for_in() {
  for (const x in {
    a: 'a',
    b: 'b'
  }) {
    print(x);
  }
}

for_in();

function for_of() {
  for (const x of ['a', 'b']) {
    print(x);
  }
}

for_of(); // Should not allow const without initializer in standard for loop header
