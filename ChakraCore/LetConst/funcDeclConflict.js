//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function f1_f() {
  ;
}

;
var f2_v = 123;

function f3_f() {
  ;
}

;
var f4_v = 123;
let f5_l = 123;
const f6_c = 123;

(function ff() {
  if (true) {
    let fo5_l = 123;

    if (true) {
      // TODO: this is blocked by https://github.com/Microsoft/ChakraCore/issues/5070
      //
      // Top level function in eval conflicts with outer function level let
      try {
        function fo5_l() {
          ;
        }
      } catch (e) {
        ex = e.message;
      }

      ex = "5";
    }
  }

  if (true) {
    // Top level function in eval conflicts with outer function level const
    try {
      function fo6_c() {
        ;
      }
    } catch (e) {
      ex = e.message;
    }
  }

  console.log(ex);
  ex = "6";
  const fo6_c = 123;
})();

(function ffs() {
  'use strict';

  let fos5_l = 123; // Top level function in eval conflicts with outer function level let (strict)
  // function fos5_l(){}

  if (true) {
    // Top level function in eval conflicts with outer function level const (strict)
    function fos6_c() {
      ;
    }
  }

  const fos6_c = 123;
})();

(function ffl() {
  let fo5_l_sl = 123; // Top level function in eval conflicts with outer function level let

  try {
    function fo5_l_sl() {
      ;
    }
  } catch (e) {
    ex = e.message;
  }

  ex = "7"; // Top level function in eval conflicts with outer function level const

  try {
    function fo6_c_sl() {
      ;
    }
  } catch (e) {
    ex = e.message;
  }

  ex = "8";
  const fo6_c_sl = 123;
})();

(function ffn() {
  let fo5_l_nf = 123; // Top level function in "new Function" does not conflict with outer function level let

  f = function fo5_l_nf() {
    ;
  }; // Top level function in "new Function" does not conflict with outer function level const


  f = function fo6_c_nf() {
    ;
  };

  console.log(f.toString());
  const fo6_c_nf = 123;
})(); // Top level function in eval does not conflict with top level const, in a class (since strict is assumed)    


class C1 {
  static M() {
    function f6_c() {
      ;
    }
  }

}

C1.M(); // Top level function in eval does not conflict with class level get      

class C2 {
  get f7_l() {
    return "q";
  }

  static M() {
    function f7_l() {
      ;
    }
  }

}

C2.M();
