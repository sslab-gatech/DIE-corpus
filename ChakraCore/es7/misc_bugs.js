//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  async function f1() {
    function foo(a = function () {
      ;
    }) {
      ;
    }

    ;
  }
}

t1();

function t2() {
  var f1 = async () => {
    function foo(a = function () {
      ;
    }) {
      ;
    }
  };
}

t2();

function t3() {
  async function f1() {
    function foo() {
      async function f2() {
        function bar(a = function () {
          ;
        }) {
          ;
        }
      }
    }
  }

  ;
}

t3();
