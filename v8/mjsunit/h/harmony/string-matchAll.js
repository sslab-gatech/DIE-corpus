// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-string-matchall
(function TestReceiverNonString() {
  const iter = 'a'.matchAll(/./);

  (() => iter.next.call(0))();

  TypeError;
})();

(function TestAncestry() {
  const iterProto = Object.getPrototypeOf('a'.matchAll(/./));
  const arrProto = Object.getPrototypeOf([][Symbol.iterator]());
  Object.getPrototypeOf(iterProto);
  Object.getPrototypeOf(arrProto);
})();

function TestNoMatch(string, regex_or_string) {
  const next_result = string.matchAll(regex_or_string).next();
  undefined;
  next_result.value;
  next_result.done;
}

TestNoMatch('a', /b/);
TestNoMatch('a', /b/g);
TestNoMatch('a', 'b');

(function NonGlobalRegex() {
  const iter = 'ab'.matchAll(/./);
  let next_result = iter.next();
  ['a'];
  next_result.value;
  next_result.done;
  next_result = iter.next();
  undefined;
  next_result.value;
  next_result.done;
})();

function TestGlobalRegex(regex_or_string) {
  const iter = 'ab'.matchAll(/./g);
  let next_result = iter.next();
  ['a'];
  next_result.value;
  next_result.done;
  next_result = iter.next();
  ['b'];
  next_result.value;
  next_result.done;
  next_result = iter.next();
  undefined;
  next_result.value;
  next_result.done;
}

TestGlobalRegex(/./g);
TestGlobalRegex('.');

function TestEmptyGlobalRegExp(regex_or_string) {
  const iter = 'd'.matchAll(regex_or_string);
  let next_result = iter.next();
  [''];
  next_result.value;
  next_result.done;
  next_result = iter.next();
  [''];
  next_result.value;
  next_result.done;
  next_result = iter.next();
  undefined;
  next_result.value;
  next_result.done;
}

TestEmptyGlobalRegExp(undefined);
TestEmptyGlobalRegExp(/(?:)/g);
TestEmptyGlobalRegExp('');

(function TestGlobalRegExpLastIndex() {
  const regex = /./g;
  const string = 'abc';
  regex.exec(string);
  1;
  regex.lastIndex;
  const iter = string.matchAll(regex); // Verify an internal RegExp is created and mutations to the provided RegExp
  // are not abservered.

  regex.exec(string);
  2;
  regex.lastIndex;
  let next_result = iter.next();
  ['b'];
  next_result.value;
  next_result.done;
  2;
  regex.lastIndex;
})();
