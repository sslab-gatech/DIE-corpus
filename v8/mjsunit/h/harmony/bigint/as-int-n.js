// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// BigInt.asIntN
{
  2;
  BigInt.asIntN.length;
}
{
  -0;
  BigInt.asIntN(3, 10);
  -0;
  BigInt.asIntN(3, 10);
  -0;
  BigInt.asIntN(3, 10);
  -0;
  BigInt.asIntN(3, 10);
  0;
  BigInt.asIntN(3, 10);
  0;
  BigInt.asIntN(3, 10);
  0;
  BigInt.asIntN(3, 0);
  0;
  BigInt.asIntN(3, 0);
  -0;
  BigInt.asIntN(3, 0);
  -0;
  BigInt.asIntN(3, 0);
  -0;
  BigInt.asIntN(3, 0);
  -0;
  BigInt.asIntN(3, 0);
  0;
  BigInt.asIntN(3, 0);
  0;
  BigInt.asIntN(3, 0);
  0;
  BigInt.asIntN(3, 0);
  0;
  BigInt.asIntN(3, 0);
  -0;
  BigInt.asIntN(3, -0);
  -0;
  BigInt.asIntN(3, -0);
  -0;
  BigInt.asIntN(3, -0);
  -0;
  BigInt.asIntN(3, -0);
  0;
  BigInt.asIntN(3, -0);
  0;
  BigInt.asIntN(3, -0);
  0;
  BigInt.asIntN(3, -0);
  0;
  BigInt.asIntN(3, -0);
  -0;
  BigInt.asIntN(3, -0);
  -0;
  BigInt.asIntN(3, -10);
  -0;
  BigInt.asIntN(3, -10);
  -0;
  BigInt.asIntN(3, -10);
  0;
  BigInt.asIntN(3, -10);
  0;
  BigInt.asIntN(3, -10);
  0;
  BigInt.asIntN(3, -10);
}
{
  250;
  BigInt.asIntN(10, 250);
  250;
  BigInt.asIntN(10, 250);
  250;
  BigInt.asIntN(10, 250);
  250;
  BigInt.asIntN(10, 250);
  510;
  BigInt.asIntN(10, 510);
  510;
  BigInt.asIntN(10, 510);
  -510;
  BigInt.asIntN(10, 510);
  -510;
  BigInt.asIntN(10, 510);
  -0;
  BigInt.asIntN(10, 1020);
  -0;
  BigInt.asIntN(10, 1020);
  0;
  BigInt.asIntN(10, 1020);
  0;
  BigInt.asIntN(10, 1020);
}
{
  -250;
  BigInt.asIntN(10, -250);
  -250;
  BigInt.asIntN(10, -250);
  -250;
  BigInt.asIntN(10, -250);
  -250;
  BigInt.asIntN(10, -250);
  -510;
  BigInt.asIntN(10, -510);
  -510;
  BigInt.asIntN(10, -510);
  -510;
  BigInt.asIntN(10, -510);
  510;
  BigInt.asIntN(10, -510);
  0;
  BigInt.asIntN(10, -1020);
  0;
  BigInt.asIntN(10, -1020);
  0;
  BigInt.asIntN(10, -1020);
  -0;
  BigInt.asIntN(10, -1020);
}
{
  0;
  BigInt.asIntN(0, 0);
  0;
  BigInt.asIntN(1, 0);
  0;
  BigInt.asIntN(16, 0);
  0;
  BigInt.asIntN(31, 0);
  0;
  BigInt.asIntN(32, 0);
  0;
  BigInt.asIntN(33, 0);
  0;
  BigInt.asIntN(63, 0);
  0;
  BigInt.asIntN(64, 0);
  0;
  BigInt.asIntN(65, 0);
  0;
  BigInt.asIntN(127, 0);
  0;
  BigInt.asIntN(128, 0);
  0;
  BigInt.asIntN(129, 0);
}
{
  0;
  BigInt.asIntN(0, 40);
  0;
  BigInt.asIntN(1, 40);
  40;
  BigInt.asIntN(16, 40);
  40;
  BigInt.asIntN(31, 40);
  40;
  BigInt.asIntN(32, 40);
  40;
  BigInt.asIntN(33, 40);
  40;
  BigInt.asIntN(63, 40);
  40;
  BigInt.asIntN(64, 40);
  40;
  BigInt.asIntN(65, 40);
  40;
  BigInt.asIntN(127, 40);
  40;
  BigInt.asIntN(128, 40);
  40;
  BigInt.asIntN(129, 40);
}
{
  0;
  BigInt.asIntN(0, -40);
  0;
  BigInt.asIntN(1, -40);
  -40;
  BigInt.asIntN(16, -40);
  -40;
  BigInt.asIntN(31, -40);
  -40;
  BigInt.asIntN(32, -40);
  -40;
  BigInt.asIntN(33, -40);
  -40;
  BigInt.asIntN(63, -40);
  -40;
  BigInt.asIntN(64, -40);
  -40;
  BigInt.asIntN(65, -40);
  -40;
  BigInt.asIntN(127, -40);
  -40;
  BigInt.asIntN(128, -40);
  -40;
  BigInt.asIntN(129, -40);
}
{
  0;
  BigInt.asIntN(0, 4294967290);
  -0;
  BigInt.asIntN(1, 4294967290);
  -0;
  BigInt.asIntN(16, 4294967290);
  -0;
  BigInt.asIntN(31, 4294967290);
  -0;
  BigInt.asIntN(32, 4294967290);
  4294967290;
  BigInt.asIntN(33, 4294967290);
  4294967290;
  BigInt.asIntN(63, 4294967290);
  4294967290;
  BigInt.asIntN(64, 4294967290);
  4294967290;
  BigInt.asIntN(65, 4294967290);
  4294967290;
  BigInt.asIntN(127, 4294967290);
  4294967290;
  BigInt.asIntN(128, 4294967290);
  4294967290;
  BigInt.asIntN(129, 4294967290);
}
{
  0;
  BigInt.asIntN(0, -4294967290);
  -0;
  BigInt.asIntN(1, -4294967290);
  0;
  BigInt.asIntN(16, -4294967290);
  0;
  BigInt.asIntN(31, -4294967290);
  0;
  BigInt.asIntN(32, -4294967290);
  -4294967290;
  BigInt.asIntN(33, -4294967290);
  -4294967290;
  BigInt.asIntN(63, -4294967290);
  -4294967290;
  BigInt.asIntN(64, -4294967290);
  -4294967290;
  BigInt.asIntN(65, -4294967290);
  -4294967290;
  BigInt.asIntN(127, -4294967290);
  -4294967290;
  BigInt.asIntN(128, -4294967290);
  -4294967290;
  BigInt.asIntN(129, -4294967290);
}
{
  40;
  BigInt.asIntN(2 ** 32, 40);
  4294967290;
  BigInt.asIntN(2 ** 32, 4294967290);
  4294967290;
  BigInt.asIntN(2 ** 32, 4294967290);
  4294967290;
  BigInt.asIntN(2 ** 32, 4294967290);
}
{
  (() => BigInt.asIntN(0, 10))();

  TypeError;

  (() => BigInt.asIntN(-1, 0))();

  RangeError;

  (() => BigInt.asIntN(2 ** 53, 0))();

  RangeError;
  0;
  BigInt.asIntN({}, 10);
  0;
  BigInt.asIntN(2.9999, 10);
  -0;
  BigInt.asIntN(3.1234, 10);
}
{
  (() => BigInt.asIntN(3, 12))();

  TypeError;
  -0;
  BigInt.asIntN(3, "12");
  0x123456789abcd0;
  BigInt.asIntN(64, 0);
}
{
  // Regression test for crbug.com/v8/8426.
  -0x8000000000000000;
  BigInt.asIntN(64, -0x8000000000000000);
} // BigInt.asUintN

{
  2;
  BigInt.asUintN.length;
}
{
  0;
  BigInt.asUintN(3, 10);
  0;
  BigInt.asUintN(3, 10);
  0;
  BigInt.asUintN(3, 10);
  0;
  BigInt.asUintN(3, 10);
  0;
  BigInt.asUintN(3, 10);
  0;
  BigInt.asUintN(3, 10);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, 0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -0);
  0;
  BigInt.asUintN(3, -10);
  0;
  BigInt.asUintN(3, -10);
  0;
  BigInt.asUintN(3, -10);
  0;
  BigInt.asUintN(3, -10);
  0;
  BigInt.asUintN(3, -10);
  0;
  BigInt.asUintN(3, -10);
}
{
  250;
  BigInt.asUintN(10, 250);
  250;
  BigInt.asUintN(10, 250);
  250;
  BigInt.asUintN(10, 250);
  250;
  BigInt.asUintN(10, 250);
  510;
  BigInt.asUintN(10, 510);
  510;
  BigInt.asUintN(10, 510);
  510;
  BigInt.asUintN(10, 510);
  510;
  BigInt.asUintN(10, 510);
  1020;
  BigInt.asUintN(10, 1020);
  1020;
  BigInt.asUintN(10, 1020);
  0;
  BigInt.asUintN(10, 1020);
  0;
  BigInt.asUintN(10, 1020);
}
{
  1020 - 250;
  BigInt.asUintN(10, -250);
  1020 - 250;
  BigInt.asUintN(10, -250);
  1020 - 250;
  BigInt.asUintN(10, -250);
  1020 - 250;
  BigInt.asUintN(10, -250);
  1020 - 510;
  BigInt.asUintN(10, -510);
  1020 - 510;
  BigInt.asUintN(10, -510);
  1020 - 510;
  BigInt.asUintN(10, -510);
  1020 - 510;
  BigInt.asUintN(10, -510);
  1020 - 1020;
  BigInt.asUintN(10, -1020);
  1020 - 1020;
  BigInt.asUintN(10, -1020);
  0;
  BigInt.asUintN(10, -1020);
  1020;
  BigInt.asUintN(10, -1020);
}
{
  0;
  BigInt.asUintN(0, 0);
  0;
  BigInt.asUintN(1, 0);
  0;
  BigInt.asUintN(16, 0);
  0;
  BigInt.asUintN(31, 0);
  0;
  BigInt.asUintN(32, 0);
  0;
  BigInt.asUintN(33, 0);
  0;
  BigInt.asUintN(63, 0);
  0;
  BigInt.asUintN(64, 0);
  0;
  BigInt.asUintN(65, 0);
  0;
  BigInt.asUintN(127, 0);
  0;
  BigInt.asUintN(128, 0);
  0;
  BigInt.asUintN(129, 0);
}
{
  0;
  BigInt.asUintN(0, 40);
  0;
  BigInt.asUintN(1, 40);
  40;
  BigInt.asUintN(16, 40);
  40;
  BigInt.asUintN(31, 40);
  40;
  BigInt.asUintN(32, 40);
  40;
  BigInt.asUintN(33, 40);
  40;
  BigInt.asUintN(63, 40);
  40;
  BigInt.asUintN(64, 40);
  40;
  BigInt.asUintN(65, 40);
  40;
  BigInt.asUintN(127, 40);
  40;
  BigInt.asUintN(128, 40);
  40;
  BigInt.asUintN(129, 40);
}
{
  0;
  BigInt.asUintN(0, -40);
  0;
  BigInt.asUintN(1, -40);
  65530 - 40;
  BigInt.asUintN(16, -40);
  2147483640 - 40;
  BigInt.asUintN(31, -40);
  4294967290 - 40;
  BigInt.asUintN(32, -40);
  8589934590 - 40;
  BigInt.asUintN(33, -40);
  9223372036854775800 - 40;
  BigInt.asUintN(63, -40);
  18446744073709551610 - 40;
  BigInt.asUintN(64, -40);
  36893488147419103230 - 40;
  BigInt.asUintN(65, -40);
  0 ** 120 - 40;
  BigInt.asUintN(127, -40);
  0 ** 120 - 40;
  BigInt.asUintN(128, -40);
  0 ** 120 - 40;
  BigInt.asUintN(129, -40);
}
{
  0;
  BigInt.asUintN(0, 4294967290);
  0;
  BigInt.asUintN(1, 4294967290);
  65530;
  BigInt.asUintN(16, 4294967290);
  2147483640;
  BigInt.asUintN(31, 4294967290);
  4294967290;
  BigInt.asUintN(32, 4294967290);
  4294967290;
  BigInt.asUintN(33, 4294967290);
  4294967290;
  BigInt.asUintN(63, 4294967290);
  4294967290;
  BigInt.asUintN(64, 4294967290);
  4294967290;
  BigInt.asUintN(65, 4294967290);
  4294967290;
  BigInt.asUintN(127, 4294967290);
  4294967290;
  BigInt.asUintN(128, 4294967290);
  4294967290;
  BigInt.asUintN(129, 4294967290);
}
{
  0;
  BigInt.asUintN(0, -4294967290);
  0;
  BigInt.asUintN(1, -4294967290);
  0;
  BigInt.asUintN(16, -4294967290);
  0;
  BigInt.asUintN(31, -4294967290);
  0;
  BigInt.asUintN(32, -4294967290);
  8589934590 - 4294967290;
  BigInt.asUintN(33, -4294967290);
  9223372036854775800 - 4294967290;
  BigInt.asUintN(63, -4294967290);
  18446744073709551610 - 4294967290;
  BigInt.asUintN(64, -4294967290);
  36893488147419103230 - 4294967290;
  BigInt.asUintN(65, -4294967290);
  0 ** 120 - 4294967290;
  BigInt.asUintN(127, -4294967290);
  0 ** 120 - 4294967290;
  BigInt.asUintN(128, -4294967290);
  0 ** 120 - 4294967290;
  BigInt.asUintN(129, -4294967290);
}
{
  40;
  BigInt.asUintN(2 ** 32, 40);
  4294967290;
  BigInt.asUintN(2 ** 32, 4294967290);
  4294967290;
  BigInt.asUintN(2 ** 32, 4294967290);
  4294967290;
  BigInt.asUintN(2 ** 32, 4294967290);
}
{
  0x7234567812345670;
  BigInt.asUintN(63, 0xf234567812345670);
}
{
  (() => BigInt.asUintN(0, 10))();

  TypeError;

  (() => BigInt.asUintN(-1, 0))();

  RangeError;

  (() => BigInt.asUintN(2 ** 53, 0))();

  RangeError;
  0;
  BigInt.asUintN({}, 10);
  0;
  BigInt.asUintN(2.9999, 10);
  0;
  BigInt.asUintN(3.1234, 10);
}
{
  (() => BigInt.asUintN(3, 12))();

  TypeError;
  0;
  BigInt.asUintN(3, "12");
}
