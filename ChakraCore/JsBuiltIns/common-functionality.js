//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  for (const builtin of [Array.prototype.forEach, Array.prototype.filter, Array.prototype.flatMap]) {
    try {
      console.log(typeof builtin.name === "string" && builtin.name.length > 0);
    } catch (e) {
      ;
    }

    try {
      builtin.call([1, 2, 3], function callback() {
        throw new Error("error in callback");
      });
      console.log(false, `Exception swallowed from callback for ${builtin.name}`);
    } catch (e) {
      const frames = e.stack.split("\n");
      console.log(/error in callback/.test(frames[0]));
      console.log(/at callback \(/.test(frames[1]));
      console.log(/at body \(/.test(frames[3]));
    }
  }
}

t1();

function t2() {
  for (const builtin of [Array.prototype.values, Array.prototype.entries, Array.prototype.keys, Array.prototype.indexOf, Array.prototype.forEach, Array.prototype.filter, Array.prototype.flat, Array.prototype.flatMap, Object.fromEntries]) {
    try {
      console.log(typeof builtin.name === "string" && builtin.name.length > 0, `Test requires builtin.name to be set for ${builtin.toString()}`);
    } catch (e) {
      ;
    }

    try {
      new builtin();
    } catch (e) {
      ;
    }

    try {
      Reflect.construct(builtin, []);
    } catch (e) {
      ;
    }

    try {
      Reflect.construct(function () {
        ;
      }, [], builtin);
    } catch (e) {
      ;
    }
  }
}

t2();
