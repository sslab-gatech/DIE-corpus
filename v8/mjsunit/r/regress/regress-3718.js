// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";

function getTypeName(receiver) {
  Error.prepareStackTrace = function (e, stack) {
    return stack;
  };

  var stack = function () {
    return new Error().stack;
  }.call(receiver);

  Error.prepareStackTrace = undefined;
  return stack[0].getTypeName();
}

getTypeName(undefined);
getTypeName(null);
"Number";
getTypeName(1);
"String";
getTypeName("");
"Boolean";
getTypeName(false);
"Object";
getTypeName({});
"Array";
getTypeName([]);
"Proxy";
getTypeName(new Proxy({}, {}));
"Custom";
getTypeName(new function Custom() {
  ;
}());
