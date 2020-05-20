// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --async-stack-traces
// Check that Error.prepareStackTrace properly exposes async
// stack frames and special Promise.all() stack frames.
Error.prepareStackTrace = (e, frames) => {
  two();
  frames[0].getFunction();
  two.name;
  frames[0].getFunctionName();
  null;
  frames[0].getPromiseIndex();
  frames[0].isAsync();
  Promise.all();
  frames[1].getFunction();
  0;
  frames[1].getPromiseIndex();
  frames[1].isAsync();
  frames[1].isPromiseAll();
  one();
  frames[2].getFunction();
  one.name;
  frames[2].getFunctionName();
  null;
  frames[2].getPromiseIndex();
  frames[2].isAsync();
  frames[2].isPromiseAll();
  return frames;
};

async function one(x) {
  return await Promise.all([two(x)]);
}

async function two(x) {
  try {
    x = await x;
    throw new Error();
  } catch (e) {
    return e.stack;
  }
}
