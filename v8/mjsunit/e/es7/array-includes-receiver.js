// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Ensure `Array.prototype.includes` functions correctly for numerous elements
// kinds, and various exotic receiver types,
// TODO(caitp): update kIterCount to a high enough number to trigger inlining,
// once inlining this builtin is supported
var kIterCount = 1;
var kTests = {
  Array: {
    PACKED_ELEMENTS() {
      var r = /foo/;
      var s = new String("bar");
      var p = new Proxy({}, {});
      var o = {};
      var array = [r, s, p];

      for (var i = 0; i < kIterCount; ++i) {
        array.includes(p);
        array.includes(o);
      }
    },

    HOLEY_ELEMENTS() {
      var r = /foo/;
      var p = new Proxy({}, {});
      var o = {};
      var array = [r,, p];

      for (var i = 0; i < kIterCount; ++i) {
        array.includes(p);
        array.includes(o);
      }
    },

    PACKED_SMI_ELEMENTS() {
      var array = [0, 88, 9999, 1, -5, 7];

      for (var i = 0; i < kIterCount; ++i) {
        array.includes(9999);
        array.includes(-5);
        array.includes(-5.00001);
        array.includes(undefined);
        array.includes(NaN);
      }
    },

    HOLEY_SMI_ELEMENTS() {
      var array = [49,,, 72,,, 67, -48];

      for (var i = 0; i < kIterCount; ++i) {
        array.includes(72);
        array.includes(-48);
        array.includes(72, 4);
        array.includes(undefined);
        array.includes(undefined, -2);
        array.includes(NaN);
      }
    },

    PACKED_DOUBLE_ELEMENTS() {
      var array = [7.00000001, -13000.89412, 73451.4124, 5824.48, 6.0000495, 48.3488, 44.0, 76.35, NaN, 78.4];

      for (var i = 0; i < kIterCount; ++i) {
        array.includes(7.00000001);
        array.includes(7.00000001, 2);
        array.includes(NaN);
        array.includes(NaN, -1);
        array.includes(-13000.89412);
        array.includes(-13000.89412, -2);
        array.includes(undefined);
      }
    },

    HOLEY_DOUBLE_ELEMENTS() {
      var array = [7.00000001, -13000.89412,, 5824.48,, 48.3488,, NaN,, 78.4];

      for (var i = 0; i < kIterCount; ++i) {
        array.includes(7.00000001);
        array.includes(7.00000001, 2);
        array.includes(NaN);
        array.includes(NaN, -2);
        array.includes(-13000.89412);
        array.includes(-13000.89412, -2);
        array.includes(undefined, -2);
        array.includes(undefined, -1);
      }
    },

    DICTIONARY_ELEMENTS() {
      var array = [];
      Object.defineProperty(array, 4, {
        get() {
          return NaN;
        }

      });
      Object.defineProperty(array, 7, {
        value: Function
      });

      for (var i = 0; i < kIterCount; ++i) {
        array.includes(NaN);
        array.includes(NaN, -3);
        array.includes(Function);
        array.includes(undefined);
        array.includes(undefined, 7);
      }
    }

  },
  Object: {
    PACKED_ELEMENTS() {
      var r = /foo/;
      var s = new String("bar");
      var p = new Proxy({}, {});
      var o = {};
      var object = {
        0: r,
        1: s,
        2: p,
        length: 3
      }; // TODO(caitp): JSObjects always seem to start with HOLEY_ELEMENTS

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(object, p);
        Array.prototype.includes.call(object, o);
      }
    },

    HOLEY_ELEMENTS() {
      var r = /foo/;
      var p = new Proxy({}, {});
      var o = {};
      var object = {
        0: r,
        2: p,
        length: 3
      };

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(object, p);
        Array.prototype.includes.call(object, o);
      }
    },

    PACKED_SMI_ELEMENTS() {
      var object = {
        0: 0,
        1: 88,
        2: 9999,
        3: 1,
        4: -5,
        5: 7,
        length: 6
      }; // TODO(caitp): JSObjects always seem to start with HOLEY_ELEMENTS

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(object, 9999);
        Array.prototype.includes.call(object, -5);
        Array.prototype.includes.call(object, -5.00001);
        Array.prototype.includes.call(object, undefined);
        Array.prototype.includes.call(object, NaN);
      }
    },

    HOLEY_SMI_ELEMENTS() {
      var object = {
        0: 49,
        3: 72,
        6: 67,
        7: -48,
        length: 8
      }; // TODO(caitp): JSObjects always seem to start with HOLEY_ELEMENTS

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(object, 72);
        Array.prototype.includes.call(object, -48);
        Array.prototype.includes.call(object, 72, 4);
        Array.prototype.includes.call(object, undefined);
        Array.prototype.includes.call(object, undefined, -2);
        Array.prototype.includes.call(object, NaN);
      }
    },

    PACKED_DOUBLE_ELEMENTS() {
      var object = {
        0: 7.00000001,
        1: -13000.89412,
        2: 73451.4124,
        3: 5824.48,
        4: 6.0000495,
        5: 48.3488,
        6: 44.0,
        7: 76.35,
        8: NaN,
        9: 78.4,
        length: 10
      }; // TODO(caitp): JSObjects always seem to start with HOLEY_ELEMENTS

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(object, 7.00000001);
        Array.prototype.includes.call(object, 7.00000001, 2);
        Array.prototype.includes.call(object, NaN);
        Array.prototype.includes.call(object, NaN, -1);
        Array.prototype.includes.call(object, -13000.89412);
        Array.prototype.includes.call(object, -13000.89412, -2);
        Array.prototype.includes.call(object, undefined);
      }
    },

    HOLEY_DOUBLE_ELEMENTS() {
      var object = {
        0: 7.00000001,
        1: -13000.89412,
        3: 5824.48,
        5: 48.3488,
        7: NaN,
        9: 78.4,
        length: 10
      }; // TODO(caitp): JSObjects always seem to start with HOLEY_ELEMENTS

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(object, 7.00000001);
        Array.prototype.includes.call(object, 7.00000001, 2);
        Array.prototype.includes.call(object, NaN);
        Array.prototype.includes.call(object, NaN, -2);
        Array.prototype.includes.call(object, -13000.89412);
        Array.prototype.includes.call(object, -13000.89412, -2);
        Array.prototype.includes.call(object, undefined, -2);
        Array.prototype.includes.call(object, undefined, -1);
      }
    },

    DICTIONARY_ELEMENTS() {
      var object = {
        length: 8
      };
      Object.defineProperty(object, 4, {
        get() {
          return NaN;
        }

      });
      Object.defineProperty(object, 7, {
        value: Function
      });

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(object, NaN);
        Array.prototype.includes.call(object, NaN, -3);
        Array.prototype.includes.call(object, Function);
        Array.prototype.includes.call(object, undefined);
        Array.prototype.includes.call(object, undefined, 7);
      }

      (function prototypeModifiedDuringAccessor() {
        function O() {
          return {
            __proto__: {},

            get 0() {
              this.__proto__.__proto__ = {
                get 1() {
                  this[2] = "c";
                  return "b";
                }

              };
              return "a";
            },

            length: 3
          };
        } // Switch to slow path when first accessor modifies the prototype


        Array.prototype.includes.call(O(), "a");
        Array.prototype.includes.call(O(), "b");
        Array.prototype.includes.call(O(), "c");
        Array.prototype.includes.call(O(), "c", 2);
        Array.prototype.includes.call(O(), "b", 1);
        Array.prototype.includes.call(O(), undefined, 1);
      });
    }

  },
  String: {
    FAST_STRING_ELEMENTS() {
      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call("froyo", "y");
        Array.prototype.includes.call("froyo", "y", -1);
        Array.prototype.includes.call("froyo", "y", -2);
        Array.prototype.includes.call("froyo", NaN);
        Array.prototype.includes.call("froyo", undefined);
      }
    },

    SLOW_STRING_ELEMENTS() {
      var string = new String("froyo"); // Never accessible from A.p.includes as 'length' is not configurable

      Object.defineProperty(string, 34, {
        value: NaN
      });
      Object.defineProperty(string, 12, {
        get() {
          return "nope";
        }

      });

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call("froyo", "y");
        Array.prototype.includes.call("froyo", "y", -1);
        Array.prototype.includes.call("froyo", "y", -2);
        Array.prototype.includes.call(string, NaN);
        Array.prototype.includes.call(string, undefined);
        Array.prototype.includes.call(string, "nope");
      }
    }

  },
  Arguments: {
    FAST_SLOPPY_ARGUMENTS_ELEMENTS() {
      var args = function (a, b) {
        return arguments;
      }("foo", NaN, "bar");

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(args, undefined);
        Array.prototype.includes.call(args, NaN);
        Array.prototype.includes.call(args, NaN, -1);
        Array.prototype.includes.call(args, "bar", -1);
      }
    },

    SLOW_SLOPPY_ARGUMENTS_ELEMENTS() {
      var args = function (a, a) {
        return arguments;
      }("foo", NaN, "bar");

      Object.defineProperty(args, 3, {
        get() {
          return "silver";
        }

      });
      Object.defineProperty(args, "length", {
        value: 4
      });

      for (var i = 0; i < kIterCount; ++i) {
        Array.prototype.includes.call(args, undefined);
        Array.prototype.includes.call(args, NaN);
        Array.prototype.includes.call(args, NaN, -2);
        Array.prototype.includes.call(args, "bar", -2);
        Array.prototype.includes.call(args, "silver", -1);
      }
    }

  },
  TypedArray: {
    Int8Array() {
      var array = new Int8Array([-129, 128, NaN
      /* 0 */
      , +0
      /* 0 */
      , -0
      /* 0 */
      , +Infinity
      /* 0 */
      , -Infinity
      /* 0 */
      , 255
      /* -1 */
      , 127
      /* 127 */
      , -255
      /* 1 */
      ]);
      Array.prototype.includes.call(array, -129);
      Array.prototype.includes.call(array, 128);
      Array.prototype.includes.call(array, 0, 2);
      Array.prototype.includes.call(array, 0, 3);
      Array.prototype.includes.call(array, 0, 4);
      Array.prototype.includes.call(array, 0, 5);
      Array.prototype.includes.call(array, 0, 6);
      Array.prototype.includes.call(array, 0, 7);
      Array.prototype.includes.call(array, -1, 7);
      Array.prototype.includes.call(array, -1, 8);
      Array.prototype.includes.call(array, 127, 8);
      Array.prototype.includes.call(array, 127, 9);
      Array.prototype.includes.call(array, 1, 9);
    },

    Detached_Int8Array() {
      var array = new Int8Array(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    },

    Uint8Array() {
      var array = new Uint8Array([-1, 256, NaN
      /* 0 */
      , +0
      /* 0 */
      , -0
      /* 0 */
      , +Infinity
      /* 0 */
      , -Infinity
      /* 0 */
      , 255
      /* 255 */
      , 257
      /* 1 */
      , -128
      /* 128 */
      , -2
      /* 254 */
      ]);
      Array.prototype.includes.call(array, -1);
      Array.prototype.includes.call(array, 256);
      Array.prototype.includes.call(array, 0, 2);
      Array.prototype.includes.call(array, 0, 3);
      Array.prototype.includes.call(array, 0, 4);
      Array.prototype.includes.call(array, 0, 5);
      Array.prototype.includes.call(array, 0, 6);
      Array.prototype.includes.call(array, 0, 7);
      Array.prototype.includes.call(array, 255, 7);
      Array.prototype.includes.call(array, 255, 8);
      Array.prototype.includes.call(array, 1, 8);
      Array.prototype.includes.call(array, 1, 9);
      Array.prototype.includes.call(array, 128, 9);
      Array.prototype.includes.call(array, 128, 10);
      Array.prototype.includes.call(array, 254, 10);
    },

    Detached_Uint8Array() {
      var array = new Uint8Array(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    },

    Uint8ClampedArray() {
      var array = new Uint8ClampedArray([-1
      /* 0 */
      , NaN
      /* 0 */
      , 256
      /* 255 */
      , 127.6
      /* 128 */
      , 127.4
      /* 127 */
      , 121.5
      /* 122 */
      , 124.5
      /* 124 */
      ]);
      Array.prototype.includes.call(array, -1);
      Array.prototype.includes.call(array, 256);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 1);
      Array.prototype.includes.call(array, 255, 2);
      Array.prototype.includes.call(array, 128, 3);
      Array.prototype.includes.call(array, 128, 4);
      Array.prototype.includes.call(array, 127, 4);
      Array.prototype.includes.call(array, 127, 5);
      Array.prototype.includes.call(array, 122, 5);
      Array.prototype.includes.call(array, 122, 6);
      Array.prototype.includes.call(array, 124, 6);
    },

    Detached_Uint8ClampedArray() {
      var array = new Uint8ClampedArray(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    },

    Int16Array() {
      var array = new Int16Array([-32769, 32768, NaN
      /* 0 */
      , Infinity
      /* 0 */
      , -Infinity
      /* 0 */
      , -0
      /* 0 */
      , +0
      /* 0 */
      , 0x7FFFF
      /* -1 */
      , 30000
      /* 30000 */
      , 300000
      /* -27680 */
      ]);
      Array.prototype.includes.call(array, -32769);
      Array.prototype.includes.call(array, 32768);
      Array.prototype.includes.call(array, 0, 2);
      Array.prototype.includes.call(array, 0, 3);
      Array.prototype.includes.call(array, 0, 4);
      Array.prototype.includes.call(array, 0, 5);
      Array.prototype.includes.call(array, 0, 6);
      Array.prototype.includes.call(array, 0, 7);
      Array.prototype.includes.call(array, -1, 7);
      Array.prototype.includes.call(array, -1, 8);
      Array.prototype.includes.call(array, 30000, 8);
      Array.prototype.includes.call(array, 30000, 9);
      Array.prototype.includes.call(array, -27680, 9);
    },

    Detached_Int16Array() {
      var array = new Int16Array(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    },

    Uint16Array() {
      var array = new Uint16Array([-1, 65536, NaN
      /* 0 */
      , Infinity
      /* 0 */
      , -Infinity
      /* 0 */
      , -0
      /* 0 */
      , +0
      /* 0 */
      , 0x7FFFF
      /* 65535 */
      , 300000
      /* 37856 */
      , 3000000
      /* 50880 */
      ]);
      Array.prototype.includes.call(array, -1);
      Array.prototype.includes.call(array, 65536);
      Array.prototype.includes.call(array, 0, 2);
      Array.prototype.includes.call(array, 0, 3);
      Array.prototype.includes.call(array, 0, 4);
      Array.prototype.includes.call(array, 0, 5);
      Array.prototype.includes.call(array, 0, 6);
      Array.prototype.includes.call(array, 0, 7);
      Array.prototype.includes.call(array, 65535, 7);
      Array.prototype.includes.call(array, 65535, 8);
      Array.prototype.includes.call(array, 37856, 8);
      Array.prototype.includes.call(array, 37856, 9);
      Array.prototype.includes.call(array, 50880, 9);
    },

    Detached_Uint16Array() {
      var array = new Uint16Array(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    },

    Int32Array() {
      var array = new Int32Array([-2147483649, 2147483648, NaN
      /* 0 */
      , Infinity
      /* 0 */
      , -Infinity
      /* 0 */
      , -0
      /* 0 */
      , +0
      /* 0 */
      , 0x7FFFFFFFF
      /* -1 */
      , 4294968064
      /* 768 */
      , 4294959447
      /* -7849 */
      ]);
      Array.prototype.includes.call(array, -2147483649);
      Array.prototype.includes.call(array, 2147483648);
      Array.prototype.includes.call(array, 0.0, 2);
      Array.prototype.includes.call(array, 0.0, 3);
      Array.prototype.includes.call(array, 0, 4);
      Array.prototype.includes.call(array, 0, 5);
      Array.prototype.includes.call(array, 0.0, 6);
      Array.prototype.includes.call(array, 0.0, 7);
      Array.prototype.includes.call(array, -1, 7);
      Array.prototype.includes.call(array, -1, 8);
      Array.prototype.includes.call(array, 768, 8);
      Array.prototype.includes.call(array, 768, 9);
      Array.prototype.includes.call(array, -7849, 9);
    },

    Detached_Int32Array() {
      var array = new Int32Array(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    },

    Uint32Array() {
      var array = new Uint32Array([-1, 4294967296, NaN
      /* 0 */
      , Infinity
      /* 0 */
      , -Infinity
      /* 0 */
      , -0
      /* 0 */
      , +0
      /* 0 */
      , 0x7FFFFFFFF
      /* 4294967295 */
      , 4294968064
      /* 768 */
      , 4295079447
      /* 112151 */
      ]);
      Array.prototype.includes.call(array, -1);
      Array.prototype.includes.call(array, 4294967296);
      Array.prototype.includes.call(array, 0.0, 2);
      Array.prototype.includes.call(array, 0.0, 3);
      Array.prototype.includes.call(array, 0, 4);
      Array.prototype.includes.call(array, 0, 5);
      Array.prototype.includes.call(array, 0.0, 6);
      Array.prototype.includes.call(array, 0.0, 7);
      Array.prototype.includes.call(array, 4294967295, 7);
      Array.prototype.includes.call(array, 4294967295, 8);
      Array.prototype.includes.call(array, 768, 8);
      Array.prototype.includes.call(array, 768, 9);
      Array.prototype.includes.call(array, 112151, 9);
    },

    Detached_Uint32Array() {
      var array = new Uint32Array(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    },

    Float32Array() {
      var array = new Float32Array([-1, 4294967296, NaN, Infinity
      /* 0 */
      , -Infinity
      /* 0 */
      , -0
      /* 0 */
      , +0
      /* 0 */
      , 0x7FFFFFFFF
      /* 34359738368.0 */
      , -4294968064
      /* -4294968320.0 */
      , 4295079447
      /* 4295079424.0 */
      ]);
      Array.prototype.includes.call(array, -1.0);
      Array.prototype.includes.call(array, 4294967296);
      Array.prototype.includes.call(array, NaN, 2);
      Array.prototype.includes.call(array, Infinity, 3);
      Array.prototype.includes.call(array, -Infinity, 4);
      Array.prototype.includes.call(array, 0, 5);
      Array.prototype.includes.call(array, 0, 6);
      Array.prototype.includes.call(array, 0.0, 7);
      Array.prototype.includes.call(array, 34359738368.0, 7);
      Array.prototype.includes.call(array, 34359738368.0, 8);
      Array.prototype.includes.call(array, -4294968320.0, 8);
      Array.prototype.includes.call(array, -4294968320.0, 9);
      Array.prototype.includes.call(array, 4295079424.0, 9);
    },

    Detached_Float32Array() {
      var array = new Float32Array(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    },

    Float64Array() {
      var array = new Float64Array([-1, 4294967296, NaN, Infinity
      /* 0 */
      , -Infinity
      /* 0 */
      , -0
      /* 0 */
      , +0
      /* 0 */
      , 0x7FFFFFFFF
      /* 34359738367.0 */
      , -4294968064
      /* -4294968064.0 */
      , 4295079447
      /* 4295079447.0 */
      ]);
      Array.prototype.includes.call(array, -1.0);
      Array.prototype.includes.call(array, 4294967296);
      Array.prototype.includes.call(array, NaN, 2);
      Array.prototype.includes.call(array, Infinity, 3);
      Array.prototype.includes.call(array, -Infinity, 4);
      Array.prototype.includes.call(array, 0, 5);
      Array.prototype.includes.call(array, 0, 6);
      Array.prototype.includes.call(array, 0.0, 7);
      Array.prototype.includes.call(array, 34359738367.0, 7);
      Array.prototype.includes.call(array, 34359738367.0, 8);
      Array.prototype.includes.call(array, -4294968064.0, 8);
      Array.prototype.includes.call(array, -4294968064.0, 9);
      Array.prototype.includes.call(array, 4295079447.0, 9);
    },

    Detached_Float64Array() {
      var array = new Float32Array(10);
      Array.prototype.includes.call(array, 0);
      Array.prototype.includes.call(array, 0, 10);
    }

  }
};

function runSuites(suites) {
  Object.keys(suites).forEach(suite => runSuite(suites[suite]));

  function runSuite(suite) {
    Object.keys(suite).forEach(test => suite[test]());
  }
}

runSuites(kTests);
