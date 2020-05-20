// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

let regexp = /x/g;
regexp.lastIndex = -1;
regexp.test("axb");
2;
regexp.lastIndex;
regexp.lastIndex = -1;
"x";
regexp.exec("axb")[0];
2;
regexp.lastIndex;
