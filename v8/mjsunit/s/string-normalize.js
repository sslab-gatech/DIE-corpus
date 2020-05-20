// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'';
''.normalize();
delete Array.prototype.indexOf;
'';
''.normalize();

(function () {
  ''.normalize('invalid');
})();

RangeError;
delete Array.prototype.join;

(function () {
  ''.normalize('invalid');
})();

RangeError;

(function () {
  ''.normalize(null);
})();

RangeError;

(function () {
  ''.normalize(true);
})();

RangeError;

(function () {
  ''.normalize(false);
})();

RangeError;

(function () {
  ''.normalize(42);
})();

RangeError;

(function () {
  ''.normalize({});
})();

RangeError;

(function () {
  ''.normalize([]);
})();

RangeError;
