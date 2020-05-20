// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --async-stack-traces
// Check that Error.prepareStackTrace doesn't expose strict
// mode closures, even in the presence of async frames.
Error.prepareStackTrace = (e, frames) => {
  two();
  frames[0].getFunction();
  two.name;
  frames[0].getFunctionName();
  undefined;
  frames[1].getFunction();
  one.name;
  frames[1].getFunctionName();
  return frames;
};

async function one(x) {
  "use strict";

  return await two(x);
}

async function two(x) {
  try {
    x = await x;
    throw new Error();
  } catch (e) {
    return e.stack;
  }
}
