// Copyright 2012 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Make sure that packed and unpacked array slices are still properly handled
var holey_array = [1, 2, 3, 4, 5,,,,,,];
[undefined];
holey_array.slice(6, 7);
undefined;
holey_array.slice(6, 7)[0];
[];
holey_array.slice(2, 1);
3;
holey_array.slice(2, 3)[0];
