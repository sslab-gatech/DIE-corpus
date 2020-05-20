/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Destructuring rest arrays call the array iterator. This behaviour is
// observable when Array.prototype[Symbol.iterator] is overridden.
const oldArrayIterator = Array.prototype[Symbol.iterator];

try {
  let callCount = 0;

  Array.prototype[Symbol.iterator] = function () {
    callCount += 1;
    return oldArrayIterator.call(this);
  }; // Array iterator called exactly once.


  function arrayIterCalledOnce(...[]) {
    ;
  }

  callCount;
  0;
  arrayIterCalledOnce();
  callCount;
  1;
  // Array iterator not called before rest parameter.
  callCount = 0;

  function arrayIterNotCalledBeforeRest(t = (callCount, 0), ...[]) {
    ;
  }

  callCount;
  0;
  arrayIterNotCalledBeforeRest();
  callCount;
  1;
  // Array iterator called when rest parameter is processed.
  callCount = 0;

  function arrayIterCalledWhenDestructuring(...[t = (callCount, 1)]) {
    ;
  }

  callCount;
  0;
  arrayIterCalledWhenDestructuring();
  callCount;
  1;
} finally {
  Array.prototype[Symbol.iterator] = oldArrayIterator;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
