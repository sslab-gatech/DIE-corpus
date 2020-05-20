//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  (function () {
    try {
      ;
    } catch ({
      x
    }) {
      var x = 1;
    }

    console.log(x, undefined);
  })();

  (function () {
    let y = 1;

    try {
      throw {
        y: 10
      };
    } catch ({
      y
    }) {
      console.log(y, 10);
    }

    console.log(y, 1);
  })();

  (function () {
    let x = 1;

    try {
      throw [{
        x: 10
      }];
    } catch ([{
      x
    }]) {
      console.log(x, 10);
    }

    console.log(x, 1);
  })();
}

test1();

function test2() {
  try {
    throw [1];
  } catch ([e1]) {
    console.log(e1, 1);
  }

  try {
    throw {
      e2: 2
    };
  } catch ({
    e2
  }) {
    console.log(e2, 2);
  }

  try {
    throw [3, {
      e4: [4]
    }];
  } catch ([e3, {
    e4: [e4]
  }]) {
    console.log(e3, 3);
    console.log(e4, 4);
  }
}

test2();

function test3() {
  try {
    throw [];
  } catch ([e1 = 11]) {
    console.log(e1, 11);
  }

  try {
    throw {};
  } catch ({
    e2 = 22
  }) {
    console.log(e2, 22);
  }

  try {
    throw [, {
      e4: []
    }];
  } catch ([e3 = 11, {
    e4: [e4 = 22]
  } = {
    e4: []
  }]) {
    console.log(e3, 11);
    console.log(e4, 22);
  }
}

test3();

function test4() {
  (function () {
    try {
      throw {
        x1: 'x1',
        x2: 'x2',
        x3: 'x3'
      };
    } catch ({
      x1,
      x2,
      x3
    }) {
      (function () {
        x1;
        x2;
        x3;
      })();

      let m = x1 + x2 + x3;
      console.log(m, 'x1x2x3');
    }
  })();

  (function () {
    try {
      throw ['y1', 'y2', 'y3'];
    } catch ([x1, x2, x3]) {
      (function () {
        x1;
        x2;
        x3;
      })();

      let m = x1 + x2 + x3;
      console.log(m, 'y1y2y3');
    }
  })();

  (function () {
    try {
      throw ['y1', 'y2', 'y3'];
    } catch ([x1, x2, x3]) {
      (function () {
        x2;
      })();

      let m = x1 + x2 + x3;
      console.log(m, 'y1y2y3');
    }
  })();

  (function () {
    try {
      throw ['y1', 'y2', 'y3'];
    } catch ([x1, x2, x3]) {
      let m = x1 + x2 + x3;
      console.log(m, 'y1y2y3');
    }
  })();

  (function () {
    try {
      throw ['y1', 'y2', 'y3'];
    } catch ([x1, x2, x3]) {
      (function () {
        x1;
        x2;
        x3;
      })();

      let m = x1 + x2 + x3;
      console.log(m, 'y1y2y3');
    }
  })();

  (function () {
    try {
      throw ['y1', 'y2', 'y3'];
    } catch ([x1, x2, x3]) {
      (function () {
        x1;
        x2;
        x3;
      })();

      let m = x1 + x2 + x3;
      console.log(m, 'y1y2y3');
    }
  })();
}

test4();

function test5() {
  (function () {
    try {
      var c = 10;
      throw ['inside'];
    } catch ([x, y = function () {
      return c;
    }]) {
      console.log(y(), 10);
      console.log(x, 'inside');
    }
  })();

  (function () {
    try {
      throw [];
    } catch ([x = 10, y = function () {
      return x;
    }]) {
      console.log(y(), 10);
    }
  })();

  (function () {
    try {
      throw [];
    } catch ([x = 10, y = function () {
      return x;
    }]) {
      console.log(y(), 10);
    }
  })();

  (function () {
    try {
      throw {};
    } catch ({
      x = 10,
      y = function () {
        return x;
      }
    }) {
      console.log(y(), 10);
    }
  })();

  (function () {
    try {
      throw ['inside', {}];
    } catch ([x = 10, {
      y = function () {
        return x;
      }
    }]) {
      console.log(y(), 'inside');
    }
  })();

  (function () {
    try {
      throw ['inside', {}];
    } catch ([x, {
      y = () => arguments[0]
    }]) {
      console.log(y(), 10);
      console.log(x, 'inside');
    }
  })(10);

  (function (a = 1, b = () => a) {
    try {
      throw [];
    } catch ([x = 10, y = function () {
      return b;
    }]) {
      console.log(y()(), 1);
    }
  })();

  (function () {
    var z = 100;

    (function () {
      try {
        throw [];
      } catch ([x = 10, y = () => x + z]) {
        console.log(y(), 110);
      }
    })();
  })();

  (function () {
    var z = 100;

    (function () {
      try {
        throw [];
      } catch ([x = z = 10, y = () => x]) {
        console.log(y(), 10);
        console.log(z, 10);
      }
    })();
  })();

  (function () {
    var a = 100;

    (function () {
      var b = 200;

      try {
        throw [];
      } catch ([x = () => y, y = 10, z = () => a]) {
        c = () => x() + z() + b;

        console.log(c(), 310);
      }
    })();
  })();

  (function () {
    var a = 100;

    (function () {
      var b = 200;

      try {
        throw [];
      } catch ([x = () => y, y = 10, z = () => a]) {
        c = () => x() + z() + b;

        console.log(c(), 310);
      }
    })();
  })();

  (function () {
    try {
      var c = 10;
      throw [];
    } catch ([x = 1, y = function () {
      return c + x;
    }]) {
      console.log(y(), 11);
    }
  })();

  (function () {
    try {
      var c = 10;
      throw [];
    } catch ([x = 1, y = function () {
      return c + x;
    }]) {
      console.log(y(), 11);
    }
  })();

  (function () {
    try {
      var c = 10;
      throw {
        x: 'inside',
        y: []
      };
    } catch ({
      x,
      y: [y = function (a = 10, b = () => a) {
        return b;
      }]
    }) {
      console.log(y()(), 10);
    }
  })();

  (function () {
    var f = function foo(a) {
      try {
        if (!a) {
          return foo(1);
        }

        var c = 10;
        throw [];
      } catch ([y = function () {
        return c + a;
      }]) {
        console.log(y(), 11);
      }
    };

    f();
  })();
}

test5();
