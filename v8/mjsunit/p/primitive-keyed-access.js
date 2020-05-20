// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(Number.prototype, "0", {
  set: function (v) {
    set = v;
  }
});
Object.defineProperty(String.prototype, "0", {
  set: function (v) {
    set = v;
  }
});
Object.defineProperty(String.prototype, "3", {
  set: function (v) {
    set = v;
  }
});
var set;
var n = 1;
set = 0;
n[0] = 100;
100;
set;
var s = "bla";
s[0] = 200;
100;
set;
s[3] = 300;
300;
set;

(function () {
  "use strict";

  var o = "123";
  o[1] = 10;
})();

(function () {
  "use strict";

  var o = "";
  o[1] = 10;
})();

(function () {
  "use strict";

  var o = 1;
  o[1] = 10;
})();

(function () {
  "use strict";

  var sym = Symbol('66');
  sym.a = 0;
})();

(function () {
  "use strict";

  var sym = Symbol('66');
  sym['a' + 'b'] = 0;
})();

(function () {
  "use strict";

  var sym = Symbol('66');
  sym[62] = 0;
})();

(function () {
  "use strict";

  var o = "bla";
  o["0"] = 1;
})();
