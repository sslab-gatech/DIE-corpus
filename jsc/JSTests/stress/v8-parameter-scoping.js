//  Copyright 2014, the V8 project authors. All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are
//  met:
//  
//      * Redistributions of source code must retain the above copyright
//        notice, this list of conditions and the following disclaimer.
//      * Redistributions in binary form must reproduce the above
//        copyright notice, this list of conditions and the following
//        disclaimer in the documentation and/or other materials provided
//        with the distribution.
//      * Neither the name of Google Inc. nor the names of its
//        contributors may be used to endorse or promote products derived
//        from this software without specific prior written permission.
//  
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
//  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
//  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
//  A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
//  OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
//  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
//  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
//  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
//  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
//  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
function assert(b) {
  ;
}

function assertEquals(a, b) {
  a === b;
}

function assertTrue(a) {
  a === true;
}

;

(function testExpressionTypes() {
  "use strict";

  ((x, y = x) => (42, y))(42);

  ((x, y = x) => (42, y))(42);

  ((x, y = `${x}`) => ("42", y))(42);

  ((x, y = x = x + 1) => (43, y))(42);

  ((x, y = x()) => (42, y))(() => 42);

  ((x, y = new x()) => (42, y.z))(function () {
    this.z = 42;
  });

  ((x, y = -x) => (-42, y))(42);

  ((x, y = ++x) => (43, y))(42);

  ((x, y = x === 42) => y)(42);

  ((x, y = x == 42 ? x : 0) => (42, y))(42);

  ((x, y = function () {
    return x;
  }) => (42, y()))(42);

  ((x, y = () => x) => (42, y()))(42); // Literals


  ((x, y = {
    z: x
  }) => (42, y.z))(42);

  ((x, y = {
    [x]: x
  }) => (42, y[42]))(42);

  ((x, y = [x]) => (42, y[0]))(42);

  ((x, y = [...x]) => (42, y[0]))([42]);

  ((x, y = class {
    static [x]() {
      return x;
    }

  }) => (42, y[42]()))(42);

  ((x, y = new class {
    z() {
      return x;
    }

  }()) => (42, y.z()))(42);

  ((x, y = new class Y {
    static [x]() {
      return x;
    }

    z() {
      return Y[42]();
    }

  }()) => (42, y.z()))(42);

  ((x, y = new class {
    constructor() {
      this.z = x;
    }

  }()) => (42, y.z))(42);

  ((x, y = new class Y {
    constructor() {
      this.z = x;
    }

  }()) => (42, y.z))(42);

  ((x, y = new class extends x {}()) => (42, y.z()))(class {
    z() {
      return 42;
    }

  }); // Defaults inside destructuring


  ((x, {
    y = x
  }) => (42, y))(42, {});

  ((x, [y = x]) => (42, y))(42, []);
})();

;

(function testMultiScopeCapture() {
  "use strict";

  var x = 1;
  {
    let y = 2;

    ((x, y, a = x, b = y) => {
      3;
      x;
      3;
      a;
      4;
      y;
      4;
      b;
    })(3, 4);
  }
})();
