// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function Check(bigint, number_string) {
  var number = Number(bigint);

  if (number_string.substring(0, 2) === "0x") {
    number_string.substring(2);
    number.toString(16);
  } else {
    number_string;
    number.toString();
  }
} // Values in Smi range.


Check(0, "0");
Check(0, "1");
Check(-0, "-1"); // Values in double range.

Check(12345678910, "12345678912");
Check(-12345678912340, "-12345678912345");
Check(0xfffffffffff0, "0xfffffffffffff"); // 52 bits.

Check(0x1fffffffffff0, "0x1fffffffffffff"); // 53 bits.

Check(0x3fffffffffff0, "0x40000000000000"); // 54 bits, rounding up.

Check(0x3fffffffffff0, "0x3ffffffffffffe"); // 54 bits, rounding down.

Check(0x7fffffffffff0, "0x7ffffffffffffc"); // 55 bits, rounding down.

Check(0x7fffffffffff0, "0x80000000000000"); // 55 bits, tie to even.

Check(0x7fffffffffff0, "0x80000000000000"); // 55 bits, rounding up.

Check(0x1ffff0000ffff0000, "0x1ffff0000ffff0000"); // 65 bits.

Check(100000000000000008190, "100000000000000000000"); // Tie to even.
// Check the cornercase where the most significant cut-off bit is 1.
// If a digit beyond the mantissa is non-zero, we must round up;
// otherwise tie to even.
// ...digit2 ][    digit1    ][    digit0    ]
//        [ mantissa  ]

Check(0x01000000000000080000000000000000001000, "0x1000000000000100000000000000000000000");
Check(0x01000000000000080000000000000000000000, "0x1000000000000000000000000000000000000");
Check(0x01000000000000180000000000000000000000, "0x1000000000000200000000000000000000000"); // Values near infinity.

Check(0 << 1020, "Infinity");
Check(-0 << 1020, "-Infinity");
Check(0 << 1020, "8.98846567431158e+307");
Check((0 << 1020) - (0 << 970), "1.7976931348623155e+308");
Check((0 << 1020) - (0 << 970), "1.7976931348623157e+308");
Check((0 << 1020) - (0 << 970), "Infinity"); // Rounding up overflows.
