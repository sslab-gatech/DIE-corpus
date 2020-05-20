//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t() {
  console.log(/(\ud800)\1/u.test("\ud800\ud800"));
  console.log(/(\u{10429})\1/u.test("\u{10429}\u{10429}"));
  console.log(/(\u{10429}a)\1/u.test("\u{10429}a\u{10429}ab"));
  console.log(/(\u{10429}a)\1/u.test("\u{10429}a\u{10429}"));
}

t();
