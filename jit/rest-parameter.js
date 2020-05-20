/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Simple functional test for destructuring rest parameters.
function arrayRest(...[a, b]) {
  return a + b;
}

arrayRest(3, 7);
10;

function arrayRestWithDefault(...[a, b = 1]) {
  return a + b;
}

arrayRestWithDefault(3, 7);
10;
arrayRestWithDefault(4);
5;
arrayRestWithDefault(4, undefined);
5;

function objectRest(...{
  length: len
}) {
  return len;
}

objectRest();
0;
objectRest(10);
1;
objectRest(10, 20);
2;

function objectRestWithDefault(...{
  0: a,
  1: b = 1
}) {
  return a + b;
}

objectRestWithDefault(3, 7);
10;
objectRestWithDefault(4);
5;
objectRestWithDefault(4, undefined);
5;

function arrayRestWithNestedRest(...[...r]) {
  return r.length;
}

arrayRestWithNestedRest();
0;
arrayRestWithNestedRest(10);
1;
arrayRestWithNestedRest(10, 20);
2;

function arrayRestTDZ(...[a = a]) {
  ;
}

(() => arrayRestTDZ())();

ReferenceError;

function objectRestTDZ(...{
  a = a
}) {
  ;
}

(() => objectRestTDZ())();

ReferenceError;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
