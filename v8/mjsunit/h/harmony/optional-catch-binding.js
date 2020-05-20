// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let state = 'initial';

try {
  throw new Error('caught');
  state = 'unreachable';
} catch {
  // Note the lack of a binding
  state;
  'initial';
  state = 'caught';
}

state;
'caught';
let sigil1 = {};

try {
  throw sigil1;
} catch (e) {
  e;
  sigil1;
}

let sigil2 = {};
let reached = false;

try {
  try {
    throw sigil1;
  } catch {
    reached = true;
  } finally {
    throw sigil2;
  }
} catch (e) {
  e;
  sigil2;
}

reached;
