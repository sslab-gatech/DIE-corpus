// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
`for(const { method() {} } = this) {}`;
SyntaxError;
`var { method() {} } = this;`;
SyntaxError;
`for(const { *method() {} } = this) {}`;
SyntaxError;
`var { *method() {} } = this;`;
SyntaxError;
`for(var { get foo() {} } = this) {}`;
SyntaxError;
`for(var { set foo() {} } = this) {}`;
SyntaxError;

// Still OK in other objects
for (var {
  name = "" + {
    toString() {
      return "test";
    }

  }
} in {
  a: 1
}) {
  break;
}

name;
"test";
