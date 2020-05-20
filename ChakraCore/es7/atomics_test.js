//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
if (typeof makeSharedArrayBuffer === "undefined") {
  makeSharedArrayBuffer = length => new SharedArrayBuffer(length);
}

var atomicsFunctionsList = [{
  op: Atomics.add,
  fullname: "Atomics.add",
  length: 3
}, {
  op: Atomics.and,
  fullname: "Atomics.and",
  length: 3
}, {
  op: Atomics.compareExchange,
  fullname: "Atomics.compareExchange",
  length: 4
}, {
  op: Atomics.exchange,
  fullname: "Atomics.exchange",
  length: 3
}, {
  op: Atomics.load,
  fullname: "Atomics.load",
  length: 2
}, {
  op: Atomics.or,
  fullname: "Atomics.or",
  length: 3
}, {
  op: Atomics.store,
  fullname: "Atomics.store",
  length: 3
}, {
  op: Atomics.sub,
  fullname: "Atomics.sub",
  length: 3
}, {
  op: Atomics.xor,
  fullname: "Atomics.xor",
  length: 3
}];
var atomicsFunctionsList2 = [{
  op: Atomics.wait,
  fullname: "Atomics.wait",
  onlyInt32: true,
  length: 4
}, {
  op: Atomics.notify,
  fullname: "Atomics.notify",
  onlyInt32: true,
  length: 3
}];
var allAtomicsFunctionsList = [...atomicsFunctionsList, ...atomicsFunctionsList2, {
  op: Atomics.isLockFree,
  fullname: "Atomics.isLockFree",
  length: 1
}];
var IntViews = [{
  ctor: Int8Array
}, {
  ctor: Int16Array
}, {
  ctor: Int32Array
}, {
  ctor: Uint8Array
}, {
  ctor: Uint16Array
}, {
  ctor: Uint32Array
}];

function t1() {
  try {
    Atomics();
  } catch (e) {
    ;
  }

  try {
    new Atomics();
  } catch (e) {
    ;
  }

  for (var {
    op,
    length
  } of allAtomicsFunctionsList) {
    console.log(typeof op, "function");
    console.log(op.length, length);

    try {
      new op();
    } catch (e) {
      ;
    }
  }
}

t1();

function t2() {
  var nonInt32Views = [new Int8Array(makeSharedArrayBuffer(8)), new Uint8Array(makeSharedArrayBuffer(8)), new Int16Array(makeSharedArrayBuffer(8)), new Uint16Array(makeSharedArrayBuffer(8)), new Uint32Array(makeSharedArrayBuffer(8))];

  for (var {
    op,
    fullname
  } of allAtomicsFunctionsList) {
    try {
      op();
    } catch (e) {
      ;
    }
  }

  for (var {
    op,
    fullname,
    onlyInt32
  } of [...atomicsFunctionsList, ...atomicsFunctionsList2]) {
    [undefined, null, 1, {}, [], new Array()].forEach(function (o) {
      try {
        op(o, 0, 0, 0);
      } catch (e) {
        ;
      }
    });

    if (onlyInt32) {
      try {
        op(new Int8Array(1), 0, 0, 0);
      } catch (e) {
        ;
      }

      for (var j of nonInt32Views) {
        try {
          op(new Int8Array(1), 0, 0, 0);
        } catch (e) {
          ;
        }
      }
    } else {
      try {
        op(new Int8Array(1), 0, 0, 0);
      } catch (e) {
        ;
      }
    }

    try {
      op(new Float32Array(1), 0, 0, 0);
    } catch (e) {
      ;
    }

    try {
      op(new Float32Array(makeSharedArrayBuffer(8)), 0, 0, 0);
    } catch (e) {
      ;
    }

    try {
      op(new Float64Array(makeSharedArrayBuffer(8)), 0, 0, 0);
    } catch (e) {
      ;
    }
  }
}

t2();

function t3() {
  atomicsFunctionsList.forEach(function (atomicFunction) {
    if (atomicFunction.length != 3) {
      return;
    }

    IntViews.forEach(function (item) {
      [[0, 4, 4], [3, 2, 8]].forEach(function ([offset, length, elements]) {
        var sab = makeSharedArrayBuffer(item.ctor.BYTES_PER_ELEMENT * elements);
        var view = new item.ctor(sab, offset * item.ctor.BYTES_PER_ELEMENT, length);

        try {
          atomicFunction.op(view);
        } catch (e) {
          ;
        }

        try {
          atomicFunction.op(view, 0);
        } catch (e) {
          ;
        }

        [undefined, 1.1, "hi", NaN, {}].forEach(function (index) {
          atomicFunction.op(view, index, 1);
        });
        [-1, Infinity, -Infinity].forEach(function (index) {
          try {
            atomicFunction.op(view, index, 1);
          } catch (e) {
            ;
          }
        });

        try {
          atomicFunction.op(view, elements, 1);
        } catch (e) {
          ;
        }

        try {
          atomicFunction.op(view, length, 1);
        } catch (e) {
          ;
        }

        Object.defineProperty(view, 'length', {
          get: function () {
            return elements + 10;
          }
        });

        try {
          atomicFunction.op(view, elements + 1, 1);
        } catch (e) {
          ;
        }
      });
    });
  });
}

t3();

function t4() {
  IntViews.forEach(function (item) {
    [[0, 4, 4], [3, 2, 8]].forEach(function ([offset, length, elements]) {
      var sab = makeSharedArrayBuffer(item.ctor.BYTES_PER_ELEMENT * elements);
      var view = new item.ctor(sab, offset * item.ctor.BYTES_PER_ELEMENT, length);

      try {
        Atomics.compareExchange(view);
      } catch (e) {
        ;
      }

      try {
        Atomics.compareExchange(view, 0);
      } catch (e) {
        ;
      }

      try {
        Atomics.compareExchange(view, 0, 0);
      } catch (e) {
        ;
      }

      [undefined, 1.1, "hi", NaN, {}].forEach(function (index) {
        Atomics.compareExchange(view, index, 0, 0);
      });
      [-1, Infinity, -Infinity].forEach(function (index) {
        try {
          Atomics.compareExchange(view, index, 0, 0);
        } catch (e) {
          ;
        }
      });

      try {
        Atomics.compareExchange(view, elements, 0, 0);
      } catch (e) {
        ;
      }

      try {
        Atomics.compareExchange(view, length, 0, 0);
      } catch (e) {
        ;
      }
    });
  });
}

t4();

function t5() {
  IntViews.forEach(function (item) {
    [[0, 4, 4], [3, 2, 8]].forEach(function ([offset, length, elements]) {
      var sab = makeSharedArrayBuffer(item.ctor.BYTES_PER_ELEMENT * elements);
      var view = new item.ctor(sab, offset * item.ctor.BYTES_PER_ELEMENT, length);

      try {
        Atomics.load(view);
      } catch (e) {
        ;
      }

      [undefined, 1.1, "hi", NaN, {}].forEach(function (index) {
        Atomics.load(view, index);
      });
      [-1, Infinity, -Infinity].forEach(function (index) {
        try {
          Atomics.load(view, index);
        } catch (e) {
          ;
        }
      });

      try {
        Atomics.load(view, elements);
      } catch (e) {
        ;
      }

      try {
        Atomics.load(view, length);
      } catch (e) {
        ;
      }
    });
  });
}

t5();

function t6() {
  [[0, 4, 4], [3, 2, 8]].forEach(function ([offset, length, elements]) {
    var sab = makeSharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * elements);
    var view = new Int32Array(sab, offset * Int32Array.BYTES_PER_ELEMENT, length);

    try {
      Atomics.wait(view);
    } catch (e) {
      ;
    }

    try {
      Atomics.wait(view, 0);
    } catch (e) {
      ;
    }

    [undefined, 1.1, "hi", NaN, {}].forEach(function (index) {
      Atomics.wait(view, index, 1);
    });
    [-1, Infinity, -Infinity].forEach(function (index) {
      try {
        Atomics.wait(view, index, 0);
      } catch (e) {
        ;
      }
    });

    try {
      Atomics.wait(view, elements, 0);
    } catch (e) {
      ;
    }

    try {
      Atomics.wait(view, length, 0);
    } catch (e) {
      ;
    }
  });
}

t6();

function t7() {
  [[0, 4, 4], [3, 2, 8]].forEach(function ([offset, length, elements]) {
    var sab = makeSharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * elements);
    var view = new Int32Array(sab, offset * Int32Array.BYTES_PER_ELEMENT, length);

    try {
      Atomics.notify(view);
    } catch (e) {
      ;
    }

    [undefined, 1.1, "hi", NaN, {}].forEach(function (index) {
      Atomics.notify(view, index, 1);
    });
    [-1, Infinity, -Infinity].forEach(function (index) {
      try {
        Atomics.notify(view, index, 1);
      } catch (e) {
        ;
      }
    });

    try {
      Atomics.notify(view, elements, 1);
    } catch (e) {
      ;
    }

    try {
      Atomics.notify(view, length, 1);
    } catch (e) {
      ;
    }
  });
}

t7();

function t8() {
  function ValidateAtomicOpFunctionality(ctor, atomicsOp, data) {
    [[0, 8, 8], [6, 2, 8]].forEach(function ([offset, length, elements]) {
      var sab = makeSharedArrayBuffer(elements * ctor.BYTES_PER_ELEMENT);
      var view = new ctor(sab, offset * ctor.BYTES_PER_ELEMENT, length);

      for (var {
        initValue,
        opValue,
        expectedReturn,
        expectedValue
      } of data) {
        if (initValue !== undefined) {
          view[1] = initValue;
        }

        var ret = atomicsOp(view, 1, opValue);
        console.log(ret, expectedReturn, "return value validation " + ctor.name + " " + atomicsOp.name);
        console.log(view[1], expectedValue, "final value validation " + ctor.name + " " + atomicsOp.name);
        console.log(Atomics.load(view, 1), expectedValue, "final value validation " + ctor.name + " " + atomicsOp.name);
        console.log(view[0], 0);
      }
    });
  }

  ValidateAtomicOpFunctionality(Int8Array, Atomics.add, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: undefined,
    opValue: 0x7B,
    expectedReturn: 6,
    expectedValue: -127
  }, {
    initValue: undefined,
    opValue: 10,
    expectedReturn: -127,
    expectedValue: -117
  }, {
    initValue: 0,
    opValue: 0x104,
    expectedReturn: 0,
    expectedValue: 4
  }]);
  ValidateAtomicOpFunctionality(Uint8Array, Atomics.add, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: undefined,
    opValue: 0xFB,
    expectedReturn: 6,
    expectedValue: 1
  }, {
    initValue: undefined,
    opValue: 0x80,
    expectedReturn: 1,
    expectedValue: 0x81
  }, {
    initValue: 0,
    opValue: 0x104,
    expectedReturn: 0,
    expectedValue: 4
  }]);
  ValidateAtomicOpFunctionality(Int16Array, Atomics.add, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: undefined,
    opValue: 0x7FFB,
    expectedReturn: 6,
    expectedValue: -32767
  }, {
    initValue: undefined,
    opValue: 20,
    expectedReturn: -32767,
    expectedValue: -32747
  }, {
    initValue: 0,
    opValue: 0x10004,
    expectedReturn: 0,
    expectedValue: 4
  }]);
  ValidateAtomicOpFunctionality(Uint16Array, Atomics.add, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: undefined,
    opValue: 0xFFFB,
    expectedReturn: 6,
    expectedValue: 1
  }, {
    initValue: undefined,
    opValue: 0x8000,
    expectedReturn: 1,
    expectedValue: 0x8001
  }, {
    initValue: 0,
    opValue: 0x10004,
    expectedReturn: 0,
    expectedValue: 4
  }]);
  ValidateAtomicOpFunctionality(Int32Array, Atomics.add, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: undefined,
    opValue: 0x7FFFFFFB,
    expectedReturn: 6,
    expectedValue: -0x7FFFFFFF
  }, {
    initValue: undefined,
    opValue: 0x7FFFFFFF,
    expectedReturn: -0x7FFFFFFF,
    expectedValue: 0
  }, {
    initValue: 0,
    opValue: 0x100000004,
    expectedReturn: 0,
    expectedValue: 4
  }]);
  ValidateAtomicOpFunctionality(Uint32Array, Atomics.add, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: undefined,
    opValue: 0xFFFFFFFB,
    expectedReturn: 6,
    expectedValue: 1
  }, {
    initValue: undefined,
    opValue: 0x7FFFFFFF,
    expectedReturn: 1,
    expectedValue: 0x80000000
  }, {
    initValue: 0,
    opValue: 0x100000004,
    expectedReturn: 0,
    expectedValue: 4
  }]); // Atomics.and tests

  ValidateAtomicOpFunctionality(Int8Array, Atomics.and, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 0
  }, {
    initValue: 0x5C,
    opValue: 0x1B,
    expectedReturn: 0x5C,
    expectedValue: 0x18
  }, {
    initValue: undefined,
    opValue: 0x108,
    expectedReturn: 0x18,
    expectedValue: 8
  }, {
    initValue: 0x7F,
    opValue: 0x80,
    expectedReturn: 0x7F,
    expectedValue: 0
  }]);
  ValidateAtomicOpFunctionality(Uint8Array, Atomics.and, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 0
  }, {
    initValue: 0x5C,
    opValue: 0x1B,
    expectedReturn: 0x5C,
    expectedValue: 0x18
  }, {
    initValue: undefined,
    opValue: 0x108,
    expectedReturn: 0x18,
    expectedValue: 8
  }, {
    initValue: 0xFF,
    opValue: 0x101,
    expectedReturn: 0xFF,
    expectedValue: 1
  }]);
  ValidateAtomicOpFunctionality(Int16Array, Atomics.and, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 0
  }, {
    initValue: 0x7FFB,
    opValue: 0x1006,
    expectedReturn: 0x7FFB,
    expectedValue: 0x1002
  }, {
    initValue: undefined,
    opValue: 0x10008,
    expectedReturn: 0x1002,
    expectedValue: 0
  }, {
    initValue: 0x7FFF,
    opValue: 0x8004,
    expectedReturn: 0x7FFF,
    expectedValue: 4
  }]);
  ValidateAtomicOpFunctionality(Uint16Array, Atomics.and, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 0
  }, {
    initValue: 0xBFFC,
    opValue: 0xA00B,
    expectedReturn: 0xBFFC,
    expectedValue: 0xA008
  }, {
    initValue: undefined,
    opValue: 0x10009,
    expectedReturn: 0xA008,
    expectedValue: 8
  }, {
    initValue: 0xFFFF,
    opValue: 0x10004,
    expectedReturn: 0xFFFF,
    expectedValue: 4
  }]);
  ValidateAtomicOpFunctionality(Int32Array, Atomics.and, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 0
  }, {
    initValue: 0x5FFFFFFC,
    opValue: 0xBFFFFFFB,
    expectedReturn: 0x5FFFFFFC,
    expectedValue: 0x1FFFFFF8
  }, {
    initValue: undefined,
    opValue: 0x8,
    expectedReturn: 0x1FFFFFF8,
    expectedValue: 8
  }, {
    initValue: 0x7FFFFFFF,
    opValue: 0x100000004,
    expectedReturn: 0x7FFFFFFF,
    expectedValue: 4
  }]);
  ValidateAtomicOpFunctionality(Uint32Array, Atomics.and, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 0
  }, {
    initValue: 0x5FFFFFFC,
    opValue: 0xBFFFFFFB,
    expectedReturn: 0x5FFFFFFC,
    expectedValue: 0x1FFFFFF8
  }, {
    initValue: undefined,
    opValue: 0x8,
    expectedReturn: 0x1FFFFFF8,
    expectedValue: 8
  }, {
    initValue: 0x9FFFFFFF,
    opValue: 0x100000004,
    expectedReturn: 0x9FFFFFFF,
    expectedValue: 4
  }]); // Atomics.exchange tests

  ValidateAtomicOpFunctionality(Int8Array, Atomics.exchange, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 4
  }, {
    initValue: 0x9C,
    opValue: 0x1B,
    expectedReturn: -100,
    expectedValue: 0x1B
  }, {
    initValue: undefined,
    opValue: 0x108,
    expectedReturn: 0x1B,
    expectedValue: 8
  }]);
  ValidateAtomicOpFunctionality(Uint8Array, Atomics.exchange, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 4
  }, {
    initValue: 0x9C,
    opValue: 0x1B,
    expectedReturn: 0x9C,
    expectedValue: 0x1B
  }, {
    initValue: undefined,
    opValue: 0x108,
    expectedReturn: 0x1B,
    expectedValue: 8
  }]);
  ValidateAtomicOpFunctionality(Int16Array, Atomics.exchange, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 4
  }, {
    initValue: 0x9FFB,
    opValue: 0x1006,
    expectedReturn: -24581,
    expectedValue: 0x1006
  }, {
    initValue: undefined,
    opValue: 0x10008,
    expectedReturn: 0x1006,
    expectedValue: 8
  }]);
  ValidateAtomicOpFunctionality(Uint16Array, Atomics.exchange, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 4
  }, {
    initValue: 0x9FFB,
    opValue: 0x1006,
    expectedReturn: 0x9FFB,
    expectedValue: 0x1006
  }, {
    initValue: undefined,
    opValue: 0x10008,
    expectedReturn: 0x1006,
    expectedValue: 8
  }]);
  ValidateAtomicOpFunctionality(Int32Array, Atomics.exchange, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 4
  }, {
    initValue: 0x9FFFFFFC,
    opValue: 0xBFFFFFFB,
    expectedReturn: -1610612740,
    expectedValue: -1073741829
  }, {
    initValue: undefined,
    opValue: 8,
    expectedReturn: -1073741829,
    expectedValue: 8
  }]);
  ValidateAtomicOpFunctionality(Uint32Array, Atomics.exchange, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 4
  }, {
    initValue: 0x5FFFFFFC,
    opValue: 0xBFFFFFFB,
    expectedReturn: 0x5FFFFFFC,
    expectedValue: 0xBFFFFFFB
  }, {
    initValue: undefined,
    opValue: 0x100000004,
    expectedReturn: 0xBFFFFFFB,
    expectedValue: 4
  }]); // Atomics.or tests

  ValidateAtomicOpFunctionality(Int8Array, Atomics.or, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: 0x5C,
    opValue: 0x1F,
    expectedReturn: 0x5C,
    expectedValue: 0x5F
  }, {
    initValue: undefined,
    opValue: 0x120,
    expectedReturn: 0x5F,
    expectedValue: 0x7F
  }]);
  ValidateAtomicOpFunctionality(Uint8Array, Atomics.or, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: 0x5C,
    opValue: 0x8F,
    expectedReturn: 0x5C,
    expectedValue: 0xDF
  }, {
    initValue: undefined,
    opValue: 0x120,
    expectedReturn: 0xDF,
    expectedValue: 0xFF
  }]);
  ValidateAtomicOpFunctionality(Int16Array, Atomics.or, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: 0x700B,
    opValue: 0x0F00,
    expectedReturn: 0x700B,
    expectedValue: 0x7F0B
  }, {
    initValue: undefined,
    opValue: 0x100F6,
    expectedReturn: 0x7F0B,
    expectedValue: 0x7FFF
  }]);
  ValidateAtomicOpFunctionality(Uint16Array, Atomics.or, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: 0xBFFC,
    opValue: 0xA00B,
    expectedReturn: 0xBFFC,
    expectedValue: 0xBFFF
  }, {
    initValue: 0x10,
    opValue: 0x10009,
    expectedReturn: 0x10,
    expectedValue: 0x19
  }]);
  ValidateAtomicOpFunctionality(Int32Array, Atomics.or, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: 0x5FFFFFFC,
    opValue: 0xBFFFFFFB,
    expectedReturn: 0x5FFFFFFC,
    expectedValue: -1
  }, {
    initValue: 0x100000004,
    opValue: 0x80,
    expectedReturn: 0x4,
    expectedValue: 0x84
  }]);
  ValidateAtomicOpFunctionality(Uint32Array, Atomics.or, [{
    initValue: 2,
    opValue: 4,
    expectedReturn: 2,
    expectedValue: 6
  }, {
    initValue: 0x5FFFFFFC,
    opValue: 0xBFFFFFFB,
    expectedReturn: 0x5FFFFFFC,
    expectedValue: 0xFFFFFFFF
  }, {
    initValue: 0x100000004,
    opValue: 0x80,
    expectedReturn: 0x4,
    expectedValue: 0x84
  }]); // Atomics.store tests

  ValidateAtomicOpFunctionality(Int8Array, Atomics.store, [{
    initValue: 0,
    opValue: 30,
    expectedReturn: 30,
    expectedValue: 30
  }, {
    initValue: undefined,
    opValue: 0xFF,
    expectedReturn: 0xFF,
    expectedValue: -1
  }]);
  ValidateAtomicOpFunctionality(Uint8Array, Atomics.store, [{
    initValue: 0,
    opValue: 30,
    expectedReturn: 30,
    expectedValue: 30
  }, {
    initValue: undefined,
    opValue: 0x1FF,
    expectedReturn: 0x1FF,
    expectedValue: 0xFF
  }]);
  ValidateAtomicOpFunctionality(Int16Array, Atomics.store, [{
    initValue: 0,
    opValue: 30,
    expectedReturn: 30,
    expectedValue: 30
  }, {
    initValue: undefined,
    opValue: 0xFFFF,
    expectedReturn: 0xFFFF,
    expectedValue: -1
  }]);
  ValidateAtomicOpFunctionality(Uint16Array, Atomics.store, [{
    initValue: 0,
    opValue: 30,
    expectedReturn: 30,
    expectedValue: 30
  }, {
    initValue: undefined,
    opValue: 0x1FFFF,
    expectedReturn: 0x1FFFF,
    expectedValue: 0xFFFF
  }]);
  ValidateAtomicOpFunctionality(Int32Array, Atomics.store, [{
    initValue: 0,
    opValue: 30,
    expectedReturn: 30,
    expectedValue: 30
  }, {
    initValue: undefined,
    opValue: 0xFFFFFFFF,
    expectedReturn: 0xFFFFFFFF,
    expectedValue: -1
  }]);
  ValidateAtomicOpFunctionality(Uint32Array, Atomics.store, [{
    initValue: 0,
    opValue: 30,
    expectedReturn: 30,
    expectedValue: 30
  }, {
    initValue: undefined,
    opValue: 0x1FFFFFFFF,
    expectedReturn: 0x1FFFFFFFF,
    expectedValue: 0xFFFFFFFF
  }]); // Atomics.sub tests

  ValidateAtomicOpFunctionality(Int8Array, Atomics.sub, [{
    initValue: 12,
    opValue: 4,
    expectedReturn: 12,
    expectedValue: 8
  }, {
    initValue: 50,
    opValue: 75,
    expectedReturn: 50,
    expectedValue: -25
  }, {
    initValue: 0x9C,
    opValue: 0x1B,
    expectedReturn: -100,
    expectedValue: -127
  }, {
    initValue: 0x7F,
    opValue: 0x80,
    expectedReturn: 0x7F,
    expectedValue: -1
  }]);
  ValidateAtomicOpFunctionality(Uint8Array, Atomics.sub, [{
    initValue: 12,
    opValue: 4,
    expectedReturn: 12,
    expectedValue: 8
  }, {
    initValue: 50,
    opValue: 75,
    expectedReturn: 50,
    expectedValue: 231
  }, {
    initValue: 0x9C,
    opValue: 0x1B,
    expectedReturn: 0x9C,
    expectedValue: 129
  }, {
    initValue: 0x7F,
    opValue: 0x80,
    expectedReturn: 0x7F,
    expectedValue: 255
  }]);
  ValidateAtomicOpFunctionality(Int16Array, Atomics.sub, [{
    initValue: 12,
    opValue: 4,
    expectedReturn: 12,
    expectedValue: 8
  }, {
    initValue: 50,
    opValue: 75,
    expectedReturn: 50,
    expectedValue: -25
  }, {
    initValue: 0x7FFF,
    opValue: 0x8004,
    expectedReturn: 0x7FFF,
    expectedValue: -5
  }]);
  ValidateAtomicOpFunctionality(Uint16Array, Atomics.sub, [{
    initValue: 12,
    opValue: 4,
    expectedReturn: 12,
    expectedValue: 8
  }, {
    initValue: 50,
    opValue: 75,
    expectedReturn: 50,
    expectedValue: 65511
  }, {
    initValue: 0x7FFF,
    opValue: 0x8004,
    expectedReturn: 0x7FFF,
    expectedValue: 65531
  }]);
  ValidateAtomicOpFunctionality(Int32Array, Atomics.sub, [{
    initValue: 12,
    opValue: 4,
    expectedReturn: 12,
    expectedValue: 8
  }, {
    initValue: 50,
    opValue: 75,
    expectedReturn: 50,
    expectedValue: -25
  }, {
    initValue: 0x7FFFFFFF,
    opValue: 0x100000004,
    expectedReturn: 0x7FFFFFFF,
    expectedValue: 2147483643
  }]);
  ValidateAtomicOpFunctionality(Uint32Array, Atomics.sub, [{
    initValue: 12,
    opValue: 4,
    expectedReturn: 12,
    expectedValue: 8
  }, {
    initValue: 50,
    opValue: 75,
    expectedReturn: 50,
    expectedValue: 0xFFFFFFE7
  }, {
    initValue: 0x9FFFFFFF,
    opValue: 5,
    expectedReturn: 0x9FFFFFFF,
    expectedValue: 0x9FFFFFFA
  }]); // Atomics.xor tests

  ValidateAtomicOpFunctionality(Int8Array, Atomics.xor, [{
    initValue: 10,
    opValue: 20,
    expectedReturn: 10,
    expectedValue: 30
  }, {
    initValue: 0x5C,
    opValue: 0x8F,
    expectedReturn: 0x5C,
    expectedValue: -45
  }]);
  ValidateAtomicOpFunctionality(Uint8Array, Atomics.xor, [{
    initValue: 10,
    opValue: 20,
    expectedReturn: 10,
    expectedValue: 30
  }, {
    initValue: 0x5C,
    opValue: 0x8F,
    expectedReturn: 0x5C,
    expectedValue: 0xD3
  }]);
  ValidateAtomicOpFunctionality(Int16Array, Atomics.xor, [{
    initValue: 10,
    opValue: 20,
    expectedReturn: 10,
    expectedValue: 30
  }, {
    initValue: 0x700B,
    opValue: 0x8F00,
    expectedReturn: 0x700B,
    expectedValue: -245
  }]);
  ValidateAtomicOpFunctionality(Uint16Array, Atomics.xor, [{
    initValue: 10,
    opValue: 20,
    expectedReturn: 10,
    expectedValue: 30
  }, {
    initValue: 0x700B,
    opValue: 0x8F00,
    expectedReturn: 0x700B,
    expectedValue: 0xFF0B
  }]);
  ValidateAtomicOpFunctionality(Int32Array, Atomics.xor, [{
    initValue: 10,
    opValue: 20,
    expectedReturn: 10,
    expectedValue: 30
  }, {
    initValue: 0x5FFFFFFC,
    opValue: 0xBFFFFFFB,
    expectedReturn: 0x5FFFFFFC,
    expectedValue: -536870905
  }]);
  ValidateAtomicOpFunctionality(Uint32Array, Atomics.xor, [{
    initValue: 10,
    opValue: 20,
    expectedReturn: 10,
    expectedValue: 30
  }, {
    initValue: 0x5FFFFFFC,
    opValue: 0xBFFFFFFB,
    expectedReturn: 0x5FFFFFFC,
    expectedValue: 0xE0000007
  }]);
}

t8();

function t9() {
  [[0, 4, 4], [3, 2, 8]].forEach(function ([offset, length, elements]) {
    IntViews.forEach(function ({
      ctor
    }) {
      var sab = makeSharedArrayBuffer(ctor.BYTES_PER_ELEMENT * elements);
      var view = new ctor(sab, offset * ctor.BYTES_PER_ELEMENT, length);
      view[1] = 20;
      var ret = Atomics.load(view, 1);
      console.log(ret, 20, "value validation " + ctor.name);
      console.log(view[0], 0);
    });
  });
}

t9();

function t10() {
  IntViews.forEach(function ({
    ctor
  }) {
    [[0, 8, 8], [6, 2, 8]].forEach(function ([offset, length, elements]) {
      var sab = makeSharedArrayBuffer(elements * ctor.BYTES_PER_ELEMENT);
      var view = new ctor(sab, offset * ctor.BYTES_PER_ELEMENT, length);
      view[1] = 10;
      var ret = Atomics.compareExchange(view, 1, 10, 20);
      console.log(ret, 10, "return value validation " + ctor.name);
      console.log(view[1], 20, "value validation " + ctor.name);
      var ret = Atomics.compareExchange(view, 1, 5, 30);
      console.log(ret, 20, "compared failed -  return value validation " + ctor.name);
      console.log(view[1], 20, "compared failed - value validation " + ctor.name);
    });
  });
}

t10();

function t11() {
  var valueOf = {
    valueOf: () => 1
  };
  var toString = {
    toString: () => 1
  };
  IntViews.forEach(function ({
    ctor
  }) {
    [undefined, NaN, null, Number.POSITIVE_INFINITY, true, "1", "blah", 1.1, valueOf, toString].forEach(function (value) {
      var sab = makeSharedArrayBuffer(2 * ctor.BYTES_PER_ELEMENT);
      var view = new ctor(sab);
      var num = value | 0;
      view[1] = 10;
      var ret = Atomics.add(view, 1, value);
      console.log(ret, 10, "return value validation " + ctor.name);
      console.log(view[1], 10 + num, "final value validation " + ctor.name);
      view[1] = 10;
      var ret = Atomics.and(view, 1, value);
      console.log(ret, 10, "return value validation " + ctor.name);
      console.log(view[1], 10 & num, "final value validation " + ctor.name);
      view[1] = 10;
      var ret = Atomics.compareExchange(view, 1, 10, value);
      console.log(ret, 10, "return value validation " + ctor.name);
      console.log(view[1], num, "final value validation " + ctor.name);
      view[1] = 10;
      var ret = Atomics.exchange(view, 1, value);
      console.log(ret, 10, "return value validation " + ctor.name);
      console.log(view[1], num, "final value validation " + ctor.name);
      view[1] = 10;
      var ret = Atomics.or(view, 1, value);
      console.log(ret, 10, "return value validation " + ctor.name);
      console.log(view[1], 10 | num, "final value validation " + ctor.name);
      view[1] = 10;
      var ret = Atomics.sub(view, 1, value);
      console.log(ret, 10, "return value validation " + ctor.name);
      console.log(view[1], 10 - num, "final value validation " + ctor.name);
      view[1] = 10;
      var ret = Atomics.store(view, 1, value);

      if (value !== Number.POSITIVE_INFINITY) {
        console.log(ret, num, "return value validation " + ctor.name);
      }

      console.log(view[1], num, "final value validation " + ctor.name);
      view[1] = 10;
      var ret = Atomics.xor(view, 1, value);
      console.log(ret, 10, "return value validation " + ctor.name);
      console.log(view[1], 10 ^ num, "final value validation " + ctor.name);
    });
  });
}

t11();

function t12() {
  var sab = makeSharedArrayBuffer(16);
  var view = new Int8Array(sab, 0, 8);
  var lengthChange = {
    valueOf: function () {
      view.length = 0;
      return 2;
    }
  };
  var lengthChange1 = {
    valueOf: function () {
      Object.defineProperty(view, 'length', {
        get: function () {
          return 0;
        }
      });
      return 2;
    }
  };
  var bufferChange = {
    valueOf: function () {
      view.buffer = null;
      return 2;
    }
  };
  view[1] = 0;
  Atomics.add(view, 1, lengthChange);
  console.log(view[1], 2);
  view[1] = 0;
  Atomics.add(view, 1, lengthChange1);
  console.log(view[1], 2);
  view[1] = 0;
  Atomics.add(view, 1, bufferChange);
  console.log(view[1], 2);
}

t12();

function t13() {
  class MySAB extends SharedArrayBuffer {}

  var sab = new MySAB(16);
  console.log(sab instanceof MySAB);
  console.log(sab instanceof SharedArrayBuffer);
  var view = new Int8Array(sab, 0, 8);
  view[1] = 10;
  var ret = Atomics.add(view, 1, 20);
  console.log(ret, 10);
  console.log(Atomics.load(view, 1), 30);
}

t13();

function t14() {
  var view = new Int32Array(makeSharedArrayBuffer(8));
  assert.doesNotThrow(() => Atomics.wait(view, 0, 0, 0), "Atomics.wait is allowed on the index 0, where the view's length is 2");
  assert.doesNotThrow(() => Atomics.wait(view, "0", 0, 0), "ToNumber : Atomics.wait is allowed on the index 0, where the view's length is 2");

  try {
    Atomics.wait(view, 2, 0, 0);
  } catch (e) {
    ;
  }

  try {
    Atomics.wait(view, -1, 0, 0);
  } catch (e) {
    ;
  }
}

t14();

function t15() {
  var view = new Int32Array(makeSharedArrayBuffer(8));
  [2, "2", {
    valueOf: () => 2
  }].forEach(function (value) {
    view[0] = 1;
    var ret = Atomics.wait(view, 0, value, 0);
    console.log(ret, "not-equal");
  });
  [10, "10", {
    valueOf: () => 10
  }].forEach(function (value) {
    view[0] = 10;
    var ret = Atomics.wait(view, 0, value, 5);
    console.log(ret, "timed-out");
  });
  view[0] = 10;
  var ret = Atomics.wait(view, 0, 10, Number.NEGATIVE_INFINITY);
  console.log(ret, "timed-out");
}

t15();

function t16() {
  [2 ** 15, 2 ** 20, 2 ** 25].forEach(function (size) {
    IntViews.forEach(function (item) {
      var view = new item.ctor(makeSharedArrayBuffer(size));
      Atomics.add(view, 0, 10);
      Atomics.store(view, 2 ** 10, 20);
      console.log(Atomics.load(view, 0), 10);
      console.log(Atomics.load(view, 2 ** 10), 20);
    });
  });
}

t16();
