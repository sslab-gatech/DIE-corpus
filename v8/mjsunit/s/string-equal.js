// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function () {
  const s = '\u8765abc';
  s === s;
  s === 'abc';
  'abc' === s;
  s.slice(-3) === 'abc';
  'abc' === s.slice(-3);
  s.slice(0, 1) === '\u8765';
  '\u8765' === s.slice(0, 1);
  s === '' + s;
  '' + s === s;
})();
