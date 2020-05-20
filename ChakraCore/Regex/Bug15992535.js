//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test() {
  try {
    // Should succeed.  Use 2^15 - 2 pairs of parens, because
    // the entire regex always counts as a capturing group.
    new RegExp("(ab)".repeat(0x7ffe));
  } catch (e) {
    ;
  }

  try {
    new RegExp("(ab)".repeat(0x8000));
  } catch (e) {
    ;
  }
}

test();
