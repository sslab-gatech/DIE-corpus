// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testSpreadIndex() {
  var result = [...[17, 42]][1];
  result;
  42;
})();

(function testSpreadProperty() {
  var result = [...[17, 42]].length;
  result;
  2;
})();

(function testSpreadMethodCall() {
  var result = [...[17, 42]].join("+");
  result;
  "17+42";
})();

(function testSpreadSavedMethodCall() {
  var x = [...[17, 42]];
  var method = x.join;
  var result = method.call(x, "+");
  result;
  "17+42";
})();

(function testSpreadAsTemplateTag() {
  (function () {
    [...[17, 42]]`foo`;
  })();

  TypeError;
})();
