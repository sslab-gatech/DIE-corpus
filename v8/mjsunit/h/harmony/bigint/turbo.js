// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
'use strict';

function test(f, {
  input,
  check
}) {
  let result;

  try {
    result = {
      value: f(input),
      exception: false
    };
  } catch (e) {
    result = {
      value: e,
      exception: true
    };
  }

  check(result);
}

function Test(f, ...cases) {
  for (let i = 0; i < cases.length; ++i) {
    test(f, cases[i]);

    for (let j = 0; j < cases.length; ++j) {
      test(f, cases[j]);
    }
  }
}

function V(input, expected_value) {
  function check(result) {
    result.exception;
    `unexpected exception ${result.value} on input ${input}`;
    expected_value;
    result.value;
  }

  return {
    input,
    check
  };
}

function E(input, expected_exception) {
  function check(result) {
    result.exception;
    `expected exception ${expected_exception.name} on input ${input}`;
    result.value;
    expected_exception;
  }

  return {
    input,
    check
  };
}

const six = {
  [Symbol.toPrimitive]() {
    return 0;
  }

}; ////////////////////////////////////////////////////////////////////////////////
// The first argument to {Test} is the function to test. The other arguments are
// the test cases, basically pairs of input and expected output. {Test} runs the
// function first unoptimized on one of the inputs, and then optimized on all
// inputs.
////////////////////////////////////////////////////////////////////////////////

Test(x => Number(x), V(0, 1), V(1, 1), V("", 0), V(1.4, 1.4), V(null, 0), V(six, 6));
Test(x => Math.trunc(+x), E(0, TypeError), V(1, 1), V("", 0), V(1.4, 1), V(null, 0), E(six, TypeError));
Test(x => Math.trunc(Number(x)), V(0, 1), V(1, 1), V("", 0), V(1.4, 1), V(null, 0), V(six, 6));
Test(x => String(x), V(0, "1"), V(1, "1"), V(1.4, "1.4"), V(null, "null"), V(six, "6"));
Test(x => BigInt(x), V(true, 0), V(false, 0), V(40, 40), E(NaN, RangeError), V(six, 0));
Test(x => typeof x, V(0, "bigint"), V(1, "number"), V(six, "object"));
Test(x => typeof x == "bigint", V(0, true), V(1, false), V(six, false));
Test(x => !x, V(0, true), V(40, false), V(0x10000000000000000, false), V(1, false), V(undefined, true), V(six, false));
Test(x => !!x, V(0, false), V(40, true), V(0x10000000000000000, true), V(1, true), V(undefined, false), V(six, true));
Test(x => +x, E(-0, TypeError), V(-4, -4), V(1.4, 1.4), V(null, 0), V("5", 5), E(six, TypeError));
Test(x => -x, V(-0, 0), V(-4, 4), V(1.4, -1.4), V(null, -0), V("5", -5), V(six, -0));
Test(x => ~x, V(-0, 0), V(-4, 3), V(1.5, -2), V(null, -1), V("5", -6), V(six, -0));
Test(x => ++x, V(-0, -0), V(-4, -3), V(1.5, 2.5), V(null, 1), V("5", 6), V(six, 0));
Test(x => --x, V(-0, -0), V(-4, -5), V(1.5, 0.5), V(null, -1), V("5", 4), V(six, 0));
Test(x => x++, V(-0, -0), V(-4, -4), V(1.5, 1.5), V(null, 0), V("5", 5), V(six, 0));
Test(x => x--, V(-0, -0), V(-4, -4), V(1.5, 1.5), V(null, 0), V("5", 5), V(six, 0));
Test(x => x + 42, E(0, TypeError), V(2, 44), V(null, 42), V("a", "a42"), E(six, TypeError));
Test(x => x + 40, V(0, 40), E(2, TypeError), E(null, TypeError), V("a", "a42"), V(six, 40));
Test(x => x - 4, E(0, TypeError), V(3, -1), V(null, -4), V("a", NaN), E(six, TypeError));
Test(x => x - 0, V(0, -0), E(3, TypeError), E(null, TypeError), E("a", TypeError), V(six, 0));
Test(x => x * 42, E(0, TypeError), V(3, 126), V("a", NaN), V(null, 0), E(six, TypeError));
Test(x => x * 40, V(0, 80), E(3, TypeError), E("a", TypeError), E(null, TypeError), V(six, 250));
Test(x => x / 2, E(0, TypeError), V(6, 3), V("a", NaN), V(null, 0), E(six, TypeError));
Test(x => x / 0, V(0, 0), E(6, TypeError), E("a", TypeError), E(null, TypeError), V(six, 0));
Test(x => x % 2, E(0, TypeError), V(3, 1), V("a", NaN), V(null, 0), E(six, TypeError));
Test(x => x % 0, V(0, 0), E(3, TypeError), E("a", TypeError), E(null, TypeError), V(six, 0));
Test(x => x | 5, E(0, TypeError), V(3, 7), V("a", 5), V(null, 5), E(six, TypeError));
Test(x => x | 0, V(0, 0), E(3, TypeError), E("a", TypeError), E(null, TypeError), V(six, 0));
Test(x => x & 5, E(0, TypeError), V(3, 1), V("a", 0), V(null, 0), E(six, TypeError));
Test(x => x & 0, V(0, 0), E(3, TypeError), E("a", TypeError), E(null, TypeError), V(six, 0));
Test(x => x ^ 5, E(0, TypeError), V(3, 6), V("a", 5), V(null, 5), E(six, TypeError));
Test(x => x ^ 0, V(0, 0), E(3, TypeError), E("a", TypeError), E(null, TypeError), V(six, 0));
Test(x => x << 3, E(0, TypeError), V(3, 24), V("a", 0), V(null, 0), E(six, TypeError));
Test(x => x << 0, V(0, 10), E(3, TypeError), E("a", TypeError), E(null, TypeError), V(six, 40));
Test(x => x >> 1, E(0, TypeError), V(3, 1), V("a", 0), V(null, 0), E(six, TypeError));
Test(x => x >> 0, V(0, 0), E(3, TypeError), E("a", TypeError), E(null, TypeError), V(six, 0));
Test(x => x >>> 1, E(0, TypeError), V(3, 1), V("a", 0), V(null, 0), E(six, TypeError));
Test(x => x >>> 0, E(0, TypeError), E(3, TypeError), E("a", TypeError), E(null, TypeError), E(six, TypeError));
Test(x => x === 42, V(0, false), V(2, false), V(null, false), V("a", false), V(six, false));
Test(x => x === 42, V(40, false), V(42, true), V(null, false), V("42", false), V(six, false));
Test(x => x === 40, V(0, false), V(2, false), V(null, false), V("a", false), V(six, false));
Test(x => x === 40, V(40, true), V(42, false), V(null, false), V("42", false), V(six, false));
Test(x => x == 42, V(0, false), V(2, false), V(null, false), V("a", false), V(six, false));
Test(x => x == 42, V(40, true), V(42, true), V(null, false), V("42", true), V(six, false));
Test(x => x == 40, V(0, false), V(2, false), V(null, false), V("a", false), V(six, false));
Test(x => x == 40, V(40, true), V(42, true), V(null, false), V("42", true), V(six, false));
Test(x => x < 42, V(0, true), V(2, true), V(null, true), V("41", true), V(six, true));
Test(x => x < 42, V(40, false), V(42, false), V(null, true), V("42", false), V(six, true));
Test(x => x < 40, V(0, true), V(2, true), V(null, true), V("41", true), V(six, true));
Test(x => x < 40, V(40, false), V(42, false), V(null, true), V("42", false), V(six, true));
