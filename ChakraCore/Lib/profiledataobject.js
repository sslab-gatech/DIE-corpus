//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function constantLookup(val, table) {
  for (var prop in table) {
    if (table[prop] == val) {
      return prop;
    }
  } // Special case for ImplicitCallFlags


  if (table.Accessor) {
    var flags = [];

    if (val & table.None) {
      flags.push("None");
    }

    if ((val & table.ToPrimitive) != table.None) {
      flags.push("ToPrimitive");
    }

    if ((val & table.Accessor) != table.None) {
      flags.push("Accessor");
    }

    if ((val & table.External) != table.None) {
      flags.push("External");
    }

    if ((val & table.Exception) != table.None) {
      flags.push("Exception");
    }

    if (val == table.All) {
      flags.push("All");
    }

    if (val & table.Dispose) {
      flags.push("Dispose");
    }

    return flags.join(" | ");
  } // Special case for ValueType - unset all but the most significant type bit, preserve the 'likely' bit, exclude the array
  // detail bits, and look it up again


  if (table.hasOwnProperty("LikelyBit")) {
    var highestTypeBitIndex = table.VALUE_TYPE_COMMON_BIT_COUNT - 1;

    if (val & table.ObjectBit) {
      val &= ~((1 << table.VALUE_TYPE_OBJECT_BIT_COUNT) - 1 ^ (1 << table.VALUE_TYPE_COMMON_BIT_COUNT) - 1);
    } else {
      highestTypeBitIndex += table.VALUE_TYPE_NONOBJECT_BIT_COUNT;
    }

    for (var i = highestTypeBitIndex; i >= 0; --i) {
      if (val & 1 << i) {
        var generalizedVal = val & (~((1 << i) - 1) | table.LikelyBit);

        for (var prop in table) {
          if (table[prop] == generalizedVal) {
            return prop;
          }
        }

        break;
      }
    }
  }

  return "ERROR: constant not found";
}

function dumpProfileData(f, msg) {
  print("Profile data for " + msg);
}

function I1(x) {
  return x;
}

function I2(x) {
  return x;
}

function I3(x) {
  return x;
}

function I4(x) {
  return x;
}

function test1() {
  var sum = I1("test") + I2(123) + I3(0.5) + I4({});
}

test1();
dumpProfileData(test1, "test1");

function test2(a, b, c, d, e, f) {
  var sum = 0;

  for (var i = 0; i < a.length; ++i) {
    sum += a[i];
  }

  for (var i = 0; i < b.length; ++i) {
    sum += b[i];
  }

  for (var i = 0; i < c.length; ++i) {
    sum += c[i];
  }

  for (var i = 0; i < d.length; ++i) {
    sum += d[i];
  }

  for (var i = 0; i < e.length; ++i) {
    sum += e[i];
  }

  for (var i = 0; i < f.length; ++i) {
    sum += f[i];
  }
}

test2([1, 2, 3, 4, 5], [-0x80000000, 0x7fffffff], new Uint8Array(10), new Float64Array(10), new Int16Array(10), [0.3, 0.4, 0.5, 0.6, 0.7]);
dumpProfileData(test2, "test2");
test2([1, 2, 3.5, 4.2, 5], [0, 0x7fffffff], new Uint8Array(10), "a string", new Int16Array(10), [0.3, 0.4, 0.5, 0.6, 0.7]);
dumpProfileData(test2, "test2 - second call");

function test3(a, b, c, d) {
  var sum = 0;

  for (var i = 0; i < a.p.length; ++i) {
    sum += a.p[i];
  }

  for (var i = 0; i < b.p.length; ++i) {
    sum += b.p[i];
  }

  if (
  /* false */
  typeof c === "blah") {
    sum += c.p[i];
  }
}

test3({
  p: new Uint32Array(10)
}, {
  p: [null,,,,]
}, 0);
dumpProfileData(test3, "test3");

function test4(a, b, c) {
  var sum = a + b + c;
}

dumpProfileData(test4, "test4 - before call");
test4("a string", 5.3, 3);
dumpProfileData(test4, "test4");
test4("a string", 3, 3);
dumpProfileData(test4, "test4 - second call");

function test5(a, b) {
  var x1 = {
    valueOf: function () {
      return 7;
    }
  };
  var x2 = {
    get prop() {
      return 8;
    }

  };
  var sum = 0;

  for (var i = 0; i < 5; ++i) {
    ;
  }

  for (var i = 0; i < 5; ++i) {
    sum += x1;
  }

  for (var i = 0; i < 5; ++i) {
    sum += x2.prop;
  }

  for (var i = 0; i < 5; ++i) {
    sum += x1 + x2.prop;
  }
}

test5();
dumpProfileData(test5, "test5");
