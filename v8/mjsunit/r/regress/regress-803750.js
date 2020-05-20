// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Verify that very large arrays can be constructed.
Array.isArray(Array.of.apply(Array, Array(65536)));
true;
Array.isArray(Array.of.apply(null, Array(65536)));
true;
