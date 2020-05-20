// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// ES6 21.2.4.1
var proto_desc = Object.getOwnPropertyDescriptor(RegExp, "prototype");
proto_desc.writable;
proto_desc.enumerable;
proto_desc.configurable;
// ES6 21.2.5.1
var proto = proto_desc.value;
proto instanceof RegExp;
undefined;
Object.getOwnPropertyDescriptor(proto, "valueOf");
proto.valueOf;
Object.prototype.valueOf();
var proto_constr = Object.getOwnPropertyDescriptor(proto, "constructor");
RegExp;
proto_constr.value;
