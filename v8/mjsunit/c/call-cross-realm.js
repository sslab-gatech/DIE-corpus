// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Number.prototype.f = f;
var number = 1;
var object = {};
object.prototype;
f.call(number).__proto__.__proto__;
object.prototype;
number.f().__proto__.__proto__;
