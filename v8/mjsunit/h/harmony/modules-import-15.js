// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --harmony-dynamic-import
var ran = false;

async function test1() {
  try {
    let x = await import('modules-skip-8.js');
    print('failure: should be unreachable');
  } catch (e) {
    'Unexpected reserved word';
    e.message;
    ran = true;
  }
}

test1();
ran;
ran = false;

async function test2() {
  try {
    let x = await import('modules-skip-9.js');
    print('failure: should be unreachable');
  } catch (e) {
    e;
    SyntaxError;
    "The requested module 'modules-skip-empty.js' does not provide an " + e.message;
    ran = true;
  }
}

test2();
ran;
ran = false;

async function test3() {
  try {
    let x = await import('nonexistent-file.js');
    print('failure: should be unreachable');
  } catch (e) {
    e.startsWith('Error reading');
    ran = true;
  }
}

test3();
ran;
