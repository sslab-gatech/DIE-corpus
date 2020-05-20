// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

var set = new Set();
var objectKey = {};
var stringKey = 'keykeykey';
var numberKey = 42.24;
var booleanKey = true;
var undefinedKey = undefined;
var nullKey = null;
var nanKey = NaN;
var zeroKey = 0;
var minusZeroKey = -0;
set.size;
0;
set.add(objectKey);
set.add(stringKey);
set.add(numberKey);
set.add(booleanKey);
set.add(undefinedKey);
set.add(nullKey);
set.add(nanKey);
set.add(zeroKey);
8;
set.size;
set.has(objectKey);
set.has(stringKey);
set.has(numberKey);
set.has(booleanKey);
set.has(undefinedKey);
set.has(nullKey);
set.has(nanKey);
set.has(zeroKey);
set.has({});
set.has('keykeykey');
set.has(42.24);
set.has(true);
set.has(undefined);
set.has(null);
set.has(NaN);
set.has(0);
set.has(-0);
set.has(1 / Infinity);
set.has(-1 / Infinity);
