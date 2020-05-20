//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  var i = 0;
  var ret = JSON.stringify(new Proxy([], {
    get(t, pk, r) {
      if (pk === "length") {
        return ++i;
      }

      return Reflect.get(t, pk, r);
    }

  }));
  console.log(ret);
  console.log(i);
}

test1();

function test2() {
  try {
    () => JSON.stringify(new Proxy([], {
      get(t, pk, r) {
        if (pk === "length") {
          return 2 ** 31 + 1;
        }

        return Reflect.get(t, pk, r);
      }

    }));
  } catch (e) {
    ;
  }
}

test2();
