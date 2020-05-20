// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function OSRInsideTry(x) {
  try {
    throw x;
  } catch (e) {
    return e + 1;
  }

  return x + 2;
}

24;
OSRInsideTry(23);

function OSRInsideCatch(x) {
  try {
    throw x;
  } catch (e) {
    return e + 1;
  }

  return x + 2;
}

24;
OSRInsideCatch(23);

function OSRInsideFinally_Return(x) {
  try {
    throw x;
  } finally {
    return x + 1;
  }

  return x + 2;
}

24;
OSRInsideFinally_Return(23);

function OSRInsideFinally_ReThrow(x) {
  try {
    throw x;
  } finally {
    ;
  }

  return x + 2;
}

"OSRInsideFinally_ReThrow(new Error)";
Error;
