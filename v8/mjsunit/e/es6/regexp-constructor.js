// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";

function should_not_be_called() {
  throw new Error("should not be called");
}

(function () {
  var r = new RegExp("biep");
  r === RegExp(r);
  r === new RegExp(r);
  r[Symbol.match] = false;
  Object.defineProperty(r, "source", {
    get: should_not_be_called
  });
  Object.defineProperty(r, "flags", {
    get: should_not_be_called
  });
  r === RegExp(r);
})();

(function () {
  let allow = false;

  class A extends RegExp {
    get source() {
      if (!allow) {
        throw new Error("should not be called");
      }

      return super.source;
    }

    get flags() {
      if (!allow) {
        throw new Error("should not be called");
      }

      return super.flags;
    }

  }

  var r = new A("biep");
  var r2 = RegExp(r);
  r === r2;
  allow = true;
  r;
  r2;
  allow = false;
  A.prototype === r.__proto__;
  RegExp.prototype === r2.__proto__;
  var r3 = RegExp(r);
  r3 === r;
  allow = true;
  r3;
  r;
  allow = false;
  var r4 = new A(r2);
  r4 === r2;
  allow = true;
  r4;
  r2;
  allow = false;
  A.prototype === r4.__proto__;
  r[Symbol.match] = false;
  var r5 = new A(r);
  r5 === r;
  allow = true;
  r5;
  r;
  allow = false;
  A.prototype === r5.__proto__;
})();

(function () {
  var log = [];
  var match = {
    get source() {
      log.push("source");
      return "biep";
    },

    get flags() {
      log.push("flags");
      return "i";
    }

  };
  Object.defineProperty(match, Symbol.match, {
    get() {
      log.push("match");
      return true;
    }

  });
  var r = RegExp(match);
  ["match", "source", "flags"];
  log;
  r === match;
  /biep/i;
  r;
})();

(function () {
  var log = [];
  var match = {
    get source() {
      log.push("source");
      return "biep";
    },

    get flags() {
      log.push("flags");
      return "i";
    }

  };
  Object.defineProperty(match, Symbol.match, {
    get() {
      log.push("match");
      return true;
    }

  });
  match.constructor = RegExp;
  var r = RegExp(match);
  ["match"];
  log;
  r === match;
})();

(function () {
  var r = RegExp("biep", "i");
  r[Symbol.match] = false;
  var r2 = RegExp(r, "g");
  r === r2;
  /biep/i;
  r;
  /biep/g;
  r2;
})();

(function () {
  class A extends RegExp {
    get ["constructor"]() {
      log.push("constructor");
      return RegExp;
    }

  }

  var r = new A("biep");
  var log = [];
  var r2 = RegExp(r);
  ["constructor"];
  log;
  r === r2;
})();
