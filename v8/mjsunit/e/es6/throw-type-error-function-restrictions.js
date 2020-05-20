// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var throwTypeErrorFunction = Object.getOwnPropertyDescriptor(Function.prototype, 'arguments').get;
Object.prototype.hasOwnProperty.call(throwTypeErrorFunction, 'name');

(function () {
  'use strict';

  throwTypeErrorFunction.name = 'foo';
})();

TypeError;
var lengthDesc = Object.getOwnPropertyDescriptor(throwTypeErrorFunction, 'length');
lengthDesc.configurable;
'configurable';
lengthDesc.enumerable;
'enumerable';
lengthDesc.writable;
'writable';

(function () {
  'use strict';

  throwTypeErrorFunction.length = 42;
})();

TypeError;
Object.isFrozen(throwTypeErrorFunction);
