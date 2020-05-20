// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function DeoptFromTry(x) {
  try {
    throw x;
  } catch (e) {
    return e + 1;
  }

  return x + 2;
}

24;
DeoptFromTry(23);

function DeoptFromCatch(x) {
  try {
    throw x;
  } catch (e) {
    return e + 1;
  }

  return x + 2;
}

24;
DeoptFromCatch(23);

function DeoptFromFinally_Return(x) {
  try {
    throw x;
  } finally {
    return x + 1;
  }

  return x + 2;
}

24;
DeoptFromFinally_Return(23);

function DeoptFromFinally_ReThrow(x) {
  try {
    throw x;
  } finally {
    ;
  }

  return x + 2;
}

"DeoptFromFinally_ReThrow(new Error)";
Error;
