//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  const n = 1;
  const m = 2;
  const r = 0.5;
  const s = 'prop';

  function test2() {
    c = class {
      get [n]() {
        return 42;
      }

      set [m](val) {
        ;
      }

      get [r]() {
        return 'a';
      }

      set [s](val) {
        ;
      }

      get [1 & Math]() {
        return 42;
      }

    };
    d = {
      get [n]() {
        return 42;
      },

      set [m](val) {
        ;
      },

      get [r]() {
        return 'a';
      },

      set [s](val) {
        ;
      }

    };
  }

  for (let i = 0; i < 100; ++i) {
    test2();
  }

  console.log('number' === typeof new c()[1]);
  console.log('undefined' === typeof new c()[2]);
  console.log('string' === typeof new c()[0.5]);
  console.log('undefined' === typeof new c()['prop']);
  console.log('number' === typeof new c()[1 & Math]);
  console.log('number' === typeof d[1]);
  console.log('undefined' === typeof d[2]);
  console.log('string' === typeof d[0.5]);
  console.log('undefined' === typeof d['prop']);
}

test1();
