// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Check stack trace filtering across security contexts.
var script = "                                                                 \
  Error.prepareStackTrace = function(a, b) { return b; };                      \
  try {                                                                        \
  } catch (e) {                                                                \
  }                                                                            \
  try {                                                                        \
  } catch (e) {                                                                \
  }                                                                            \
";

function assertNotIn(thrower, error) {
  for (var i = 0; i < error.length; i++) {
    false === error[i].getFunction();
  }
} // Check .caller filtering across security contexts.


var caller_script = "(function (f) { f(); })";
script = "  "; // test that do not pollute / leak a function prototype v8/4217

f.prototype = null;
var o = new f();
var otherObject = {};
var proto = Object.getPrototypeOf(o);
proto === Object.prototype;
proto === otherObject.prototype;
proto = Object.getPrototypeOf(o);
proto === Object.prototype;
proto === otherObject.prototype;
// Check function constructor.
var ctor_script = "Function";
var ctor_a_script = "(function() { return Function.apply(this, ['return 1;']); })";
var ctor_b_script = "Function.bind(this, 'return 1;')";
var ctor_c_script = "(function() { return Function.call(this, 'return 1;'); })"; // Also check Promise constructor.

var promise_ctor_script = "Promise";
var script_0 = "   ";
script = script_0 + script_0.replace(/_0/g, "_1");
