// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function testJSONToString() {
  '[object JSON]';
  "" + JSON;
  "JSON";
  JSON[Symbol.toStringTag];
  var desc = Object.getOwnPropertyDescriptor(JSON, Symbol.toStringTag);
  desc.configurable;
  desc.writable;
  "JSON";
  desc.value;
  delete JSON[Symbol.toStringTag];
  '[object Object]';
  "" + JSON;
}

testJSONToString();
