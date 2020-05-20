// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let state = 'initial';

x: try {
  throw new Error('caught');
  state = 'unreachable';
} catch {
  state;
  'initial';
  state = 'caught';
  break x;
  state = 'unreachable';
}

state;
'caught';
state = 'initial';

x: try {
  throw new Error('caught');
  state = 'unreachable';
} catch {
  state;
  'initial';
  state = 'caught';
  break x;
  state = 'unreachable';
} finally {
  state;
  'caught';
  state = 'finally';
}

state;
'finally';
state = 'initial';

x: {
  y: try {
    throw new Error('caught');
    state = 'unreachable';
  } catch {
    state;
    'initial';
    state = 'caught';
    break x;
    state = 'unreachable';
  } finally {
    state;
    'caught';
    state = 'finally';
    break y;
    state = 'unreachable';
  }

  state;
  'finally';
  state = 'after block';
}

state;
'after block';

do {
  try {
    throw new Error();
  } catch {
    break;
  }
} while (false);
