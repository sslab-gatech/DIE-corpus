//@ skip if not $jitTests
//@ defaultNoEagerRun
"use strict"; // Checked int_min < value < 0

function opaqueCheckedBetweenIntMinAndZeroExclusive(arg) {
  if (arg < 0) {
    if (arg > (0x80000000 | 0)) {
      return Math.abs(arg);
    }
  }

  throw "We should not be here";
}

noInline(opaqueCheckedBetweenIntMinAndZeroExclusive);

function testCheckedBetweenIntMinAndZeroExclusive() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedBetweenIntMinAndZeroExclusive(-i) !== i) {
      throw "Failed testCheckedBetweenIntMinAndZeroExclusive()";
    }

    if (opaqueCheckedBetweenIntMinAndZeroExclusive(-2147483647) !== 2147483647) {
      throw "Failed testCheckedBetweenIntMinAndZeroExclusive() on -2147483647";
    }
  }
}

testCheckedBetweenIntMinAndZeroExclusive(); // Checked int_min < value <= 0

function opaqueCheckedBetweenIntMinExclusiveAndZeroInclusive(arg) {
  if (arg <= 0) {
    if (arg > (0x80000000 | 0)) {
      return Math.abs(arg);
    }
  }

  throw "We should not be here";
}

noInline(opaqueCheckedBetweenIntMinExclusiveAndZeroInclusive);

function testCheckedBetweenIntMinExclusiveAndZeroInclusive() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedBetweenIntMinExclusiveAndZeroInclusive(-i) !== i) {
      throw "Failed testCheckedBetweenIntMinExclusiveAndZeroInclusive()";
    }

    if (opaqueCheckedBetweenIntMinExclusiveAndZeroInclusive(0) !== 0) {
      throw "Failed testCheckedBetweenIntMinExclusiveAndZeroInclusive() on 0";
    }

    if (opaqueCheckedBetweenIntMinExclusiveAndZeroInclusive(-2147483647) !== 2147483647) {
      throw "Failed testCheckedBetweenIntMinExclusiveAndZeroInclusive() on -2147483647";
    }
  }
}

testCheckedBetweenIntMinExclusiveAndZeroInclusive(); // Checked int_min <= value < 0

function opaqueCheckedBetweenIntMinInclusiveAndZeroExclusive(arg) {
  if (arg < 0) {
    if (arg >= (0x80000000 | 0)) {
      return Math.abs(arg);
    }
  }

  throw "We should not be here";
}

noInline(opaqueCheckedBetweenIntMinInclusiveAndZeroExclusive);

function testCheckedBetweenIntMinInclusiveAndZeroExclusive() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedBetweenIntMinInclusiveAndZeroExclusive(-i) !== i) {
      throw "Failed testCheckedBetweenIntMinInclusiveAndZeroExclusive()";
    }

    if (opaqueCheckedBetweenIntMinInclusiveAndZeroExclusive(-2147483647) !== 2147483647) {
      throw "Failed testCheckedBetweenIntMinInclusiveAndZeroExclusive() on -2147483647";
    }
  }

  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedBetweenIntMinInclusiveAndZeroExclusive(-i) !== i) {
      throw "Failed testCheckedBetweenIntMinInclusiveAndZeroExclusive()";
    }

    let result = opaqueCheckedBetweenIntMinInclusiveAndZeroExclusive(-2147483648);

    if (result !== 2147483648) {
      throw "Failed testCheckedBetweenIntMinInclusiveAndZeroExclusive() on -2147483648, got " + result;
    }
  }
}

testCheckedBetweenIntMinInclusiveAndZeroExclusive(); // Checked int_min <= value <= 0

function opaqueCheckedBetweenIntMinAndZeroInclusive(arg) {
  if (arg <= 0) {
    if (arg >= (0x80000000 | 0)) {
      return Math.abs(arg);
    }
  }

  throw "We should not be here";
}

noInline(opaqueCheckedBetweenIntMinAndZeroInclusive);

function testCheckedBetweenIntMinAndZeroInclusive() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedBetweenIntMinAndZeroInclusive(-i) !== i) {
      throw "Failed testCheckedBetweenIntMinAndZeroInclusive()";
    }

    if (opaqueCheckedBetweenIntMinAndZeroInclusive(0) !== 0) {
      throw "Failed testCheckedBetweenIntMinAndZeroInclusive()";
    }

    if (opaqueCheckedBetweenIntMinAndZeroInclusive(-2147483647) !== 2147483647) {
      throw "Failed testCheckedBetweenIntMinAndZeroInclusive() on -2147483647";
    }
  }

  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedBetweenIntMinAndZeroInclusive(-i) !== i) {
      throw "Failed testCheckedBetweenIntMinAndZeroInclusive()";
    }

    if (opaqueCheckedBetweenIntMinAndZeroInclusive(0) !== 0) {
      throw "Failed testCheckedBetweenIntMinAndZeroInclusive()";
    }

    if (opaqueCheckedBetweenIntMinAndZeroInclusive(-2147483648) !== 2147483648) {
      throw "Failed testCheckedBetweenIntMinAndZeroInclusive() on -2147483648";
    }
  }
}

testCheckedBetweenIntMinAndZeroInclusive(); // Unchecked int_min < value < 0

function opaqueUncheckedBetweenIntMinAndZeroExclusive(arg) {
  if (arg < 0) {
    if (arg > (0x80000000 | 0)) {
      return Math.abs(arg) | 0;
    }
  }

  throw "We should not be here";
}

noInline(opaqueUncheckedBetweenIntMinAndZeroExclusive);

function testUncheckedBetweenIntMinAndZeroExclusive() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueUncheckedBetweenIntMinAndZeroExclusive(-i) !== i) {
      throw "Failed testUncheckedBetweenIntMinAndZeroExclusive()";
    }

    if (opaqueUncheckedBetweenIntMinAndZeroExclusive(-2147483647) !== 2147483647) {
      throw "Failed testUncheckedBetweenIntMinAndZeroExclusive() on -2147483647";
    }
  }
}

testUncheckedBetweenIntMinAndZeroExclusive(); // Unchecked int_min < value <= 0

function opaqueUncheckedBetweenIntMinExclusiveAndZeroInclusive(arg) {
  if (arg <= 0) {
    if (arg > (0x80000000 | 0)) {
      return Math.abs(arg) | 0;
    }
  }

  throw "We should not be here";
}

noInline(opaqueUncheckedBetweenIntMinExclusiveAndZeroInclusive);

function testUncheckedBetweenIntMinExclusiveAndZeroInclusive() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueUncheckedBetweenIntMinExclusiveAndZeroInclusive(-i) !== i) {
      throw "Failed testUncheckedBetweenIntMinExclusiveAndZeroInclusive()";
    }

    if (opaqueUncheckedBetweenIntMinExclusiveAndZeroInclusive(0) !== 0) {
      throw "Failed testUncheckedBetweenIntMinExclusiveAndZeroInclusive() on 0";
    }

    if (opaqueUncheckedBetweenIntMinExclusiveAndZeroInclusive(-2147483647) !== 2147483647) {
      throw "Failed testUncheckedBetweenIntMinExclusiveAndZeroInclusive() on -2147483647";
    }
  }
}

testUncheckedBetweenIntMinExclusiveAndZeroInclusive(); // Unchecked int_min <= value < 0

function opaqueUncheckedBetweenIntMinInclusiveAndZeroExclusive(arg) {
  if (arg < 0) {
    if (arg >= (0x80000000 | 0)) {
      return Math.abs(arg) | 0;
    }
  }

  throw "We should not be here";
}

noInline(opaqueUncheckedBetweenIntMinInclusiveAndZeroExclusive);

function testUncheckedBetweenIntMinInclusiveAndZeroExclusive() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueUncheckedBetweenIntMinInclusiveAndZeroExclusive(-i) !== i) {
      throw "Failed testUncheckedBetweenIntMinInclusiveAndZeroExclusive()";
    }

    if (opaqueUncheckedBetweenIntMinInclusiveAndZeroExclusive(-2147483647) !== 2147483647) {
      throw "Failed testUncheckedBetweenIntMinInclusiveAndZeroExclusive() on -2147483647";
    }

    if (opaqueUncheckedBetweenIntMinInclusiveAndZeroExclusive(-2147483648) !== -2147483648) {
      throw "Failed testUncheckedBetweenIntMinInclusiveAndZeroExclusive() on -2147483648";
    }
  }
}

testUncheckedBetweenIntMinInclusiveAndZeroExclusive(); // Unchecked int_min <= value <= 0

function opaqueUncheckedBetweenIntMinAndZeroInclusive(arg) {
  if (arg <= 0) {
    if (arg >= (0x80000000 | 0)) {
      return Math.abs(arg) | 0;
    }
  }

  throw "We should not be here";
}

noInline(opaqueUncheckedBetweenIntMinAndZeroInclusive);

function testUncheckedBetweenIntMinAndZeroInclusive() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueUncheckedBetweenIntMinAndZeroInclusive(-i) !== i) {
      throw "Failed testUncheckedBetweenIntMinAndZeroInclusive()";
    }

    if (opaqueUncheckedBetweenIntMinAndZeroInclusive(0) !== 0) {
      throw "Failed testUncheckedBetweenIntMinAndZeroInclusive()";
    }

    if (opaqueUncheckedBetweenIntMinAndZeroInclusive(-2147483647) !== 2147483647) {
      throw "Failed testUncheckedBetweenIntMinAndZeroInclusive() on -2147483647";
    }

    if (opaqueUncheckedBetweenIntMinInclusiveAndZeroExclusive(-2147483648) !== -2147483648) {
      throw "Failed testUncheckedBetweenIntMinInclusiveAndZeroExclusive() on -2147483648";
    }
  }
}

testUncheckedBetweenIntMinAndZeroInclusive(); // Checked value < 0

function opaqueCheckedLessThanZero(arg) {
  if (arg < 0) {
    return Math.abs(arg);
  }

  throw "We should not be here";
}

noInline(opaqueCheckedLessThanZero);

function testCheckedLessThanZero() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedLessThanZero(-i) !== i) {
      throw "Failed testCheckedLessThanZero()";
    }

    if (opaqueCheckedLessThanZero(-2147483647) !== 2147483647) {
      throw "Failed testCheckedLessThanZero() on -2147483647";
    }
  }

  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedLessThanZero(-i) !== i) {
      throw "Failed testCheckedLessThanZero()";
    }

    let result = opaqueCheckedLessThanZero(-2147483648);

    if (result !== 2147483648) {
      throw "Failed testCheckedLessThanZero() on -2147483648, got " + result;
    }
  }
}

testCheckedLessThanZero(); // Checked value <= 0

function opaqueCheckedLessThanOrEqualZero(arg) {
  if (arg <= 0) {
    return Math.abs(arg);
  }

  throw "We should not be here";
}

noInline(opaqueCheckedLessThanOrEqualZero);

function testCheckedLessThanOrEqualZero() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedLessThanOrEqualZero(-i) !== i) {
      throw "Failed testCheckedLessThanOrEqualZero()";
    }

    if (opaqueCheckedLessThanOrEqualZero(0) !== 0) {
      throw "Failed testCheckedLessThanOrEqualZero() on 0";
    }

    if (opaqueCheckedLessThanOrEqualZero(-2147483647) !== 2147483647) {
      throw "Failed testCheckedLessThanOrEqualZero() on -2147483647";
    }
  }

  for (let i = 1; i < 1e5; ++i) {
    if (opaqueCheckedLessThanOrEqualZero(-i) !== i) {
      throw "Failed testCheckedLessThanOrEqualZero()";
    }

    if (opaqueCheckedLessThanOrEqualZero(-2147483648) !== 2147483648) {
      throw "Failed testCheckedLessThanOrEqualZero() on -2147483648";
    }
  }
}

testCheckedLessThanOrEqualZero(); // Unchecked value < 0

function opaqueUncheckedLessThanZero(arg) {
  if (arg < 0) {
    return Math.abs(arg) | 0;
  }

  throw "We should not be here";
}

noInline(opaqueUncheckedLessThanZero);

function testUncheckedLessThanZero() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueUncheckedLessThanZero(-i) !== i) {
      throw "Failed testUncheckedLessThanZero()";
    }

    if (opaqueUncheckedLessThanZero(-2147483647) !== 2147483647) {
      throw "Failed testUncheckedLessThanZero() on -2147483647";
    }

    if (opaqueUncheckedLessThanZero(-2147483648) !== -2147483648) {
      throw "Failed testUncheckedLessThanOrEqualZero() on -2147483648";
    }
  }

  for (let i = 1; i < 1e5; ++i) {
    if (opaqueUncheckedLessThanZero(-i) !== i) {
      throw "Failed testUncheckedLessThanZero()";
    }

    if (opaqueUncheckedLessThanZero(-2147483648) !== -2147483648) {
      throw "Failed testUncheckedLessThanZero() on -2147483648";
    }
  }
}

testUncheckedLessThanZero(); // Unchecked value <= 0

function opaqueUncheckedLessThanOrEqualZero(arg) {
  if (arg <= 0) {
    return Math.abs(arg) | 0;
  }

  throw "We should not be here";
}

noInline(opaqueUncheckedLessThanOrEqualZero);

function testUncheckedLessThanOrEqualZero() {
  for (let i = 1; i < 1e5; ++i) {
    if (opaqueUncheckedLessThanOrEqualZero(-i) !== i) {
      throw "Failed testUncheckedLessThanOrEqualZero()";
    }

    if (opaqueUncheckedLessThanOrEqualZero(0) !== 0) {
      throw "Failed testUncheckedLessThanOrEqualZero() on 0";
    }

    if (opaqueUncheckedLessThanOrEqualZero(-2147483647) !== 2147483647) {
      throw "Failed testUncheckedLessThanOrEqualZero() on -2147483647";
    }

    if (opaqueUncheckedLessThanOrEqualZero(-2147483648) !== -2147483648) {
      throw "Failed testUncheckedLessThanOrEqualZero() on -2147483648";
    }
  }
}

testUncheckedLessThanOrEqualZero();
