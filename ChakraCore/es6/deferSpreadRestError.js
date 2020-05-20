//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.  // Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function x() {
  (a, b = [...[1, 2, 3]], ...rest) => {
    ;
  };
}

x();

function y() {
  (a, b = [...[1, 2, 3]], ...rest) => {
    ;
  };
}

y();

function z() {
  (a, b = [...[1, 2, 3]], ...rest) => {
    ;
  };
}

z();
