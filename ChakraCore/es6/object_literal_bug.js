//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  (function () {
    let a = 1;
    {
      let a = 2;
      var m = {
        a
      };
      console.log(m.a, 2);
    }
  })();

  {
    let a2 = 1;
    ({
      a2
    } = {
      a2: 2
    });
    console.log(a2, 2);
  }
  {
    // Object literal shorthand - referenced in different scopoe works correctly.
    {
      d;
    }
    {
      {
        {
          d;
        }
      }
      ;
      var c = {
        d
      };
    }
    {
      var d = [];
    }
  }
}

t1();

function t2() {
  var o = {
    get m() {
      ;
    },

    set m(v) {
      ;
    }

  };
  var g = Object.getOwnPropertyDescriptor(o, 'm').get;
  var s = Object.getOwnPropertyDescriptor(o, 'm').set;
  console.log(false, g.hasOwnProperty('prototype'));
  console.log(false, s.hasOwnProperty('prototype'));
}

t2();
