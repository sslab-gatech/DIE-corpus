//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
const dotAllMatch = ["hel\nlo", "hel\rlo", "hel\u2028lo", "hel\u2029lo"];
const alwaysMatch = ["hel\vlo", "hel\flo", "hel\u0085lo"];
const neverMatch = ["hel\n\nlo", "hel\rllo", "hel\u2028llo", "hell\u2029lo", "hel \vlo", "hel \flo", "hel \u0085lo"];

function t1() {
  const reg = /hel.lo/;
  neverMatch.forEach(function (string) {
    console.log(reg.test(string));
  });
  dotAllMatch.forEach(function (string) {
    console.log(reg.test(string));
  });
  alwaysMatch.forEach(function (string) {
    console.log(reg.test(string));
  });
}

t1();

function t2() {
  const reg = /hel.lo/s;
  neverMatch.forEach(function (string) {
    console.log(reg.test(string));
  });
  dotAllMatch.forEach(function (string) {
    console.log(reg.test(string));
  });
  alwaysMatch.forEach(function (string) {
    console.log(reg.test(string));
  });
}

t2();

function t3() {
  const withFlag = /stuff/s;
  const withoutFlag = /stuff/;
  console.log(withFlag.dotAll);
  console.log(withoutFlag.dotAll);
  console.log(delete withFlag.dotAll);

  try {
    "use strict";

    delete withFlag.dotAll;
  } catch (e) {
    ;
  }

  console.log(delete withoutFlag.dotAll);

  try {
    "use strict";

    delete withoutFlag.dotAll;
  } catch (e) {
    ;
  }

  console.log(withFlag.hasOwnProperty("dotAll"));
  console.log(withoutFlag.hasOwnProperty("dotAll"));
}

t3();

function t4() {
  const dotAll = RegExp.prototype.dotAll;
  console.log(RegExp.prototype.hasOwnProperty("dotAll"));
  const desc = Object.getOwnPropertyDescriptor(RegExp.prototype, "dotAll");
  console.log(desc.configurable);
  console.log(desc.enumerable);
  console.log(dotAll, undefined);
  RegExp.prototype.dotAll = 5;
  console.log(dotAll, undefined);
  console.log(delete RegExp.prototype.dotAll);
  console.log(RegExp.prototype.hasOwnProperty("dotAll"));
  const withFlag = /stuff/s;
  const withoutFlag = /stuff/;
  console.log(withFlag.dotAll, undefined);
  console.log(withoutFlag.dotAll, undefined);
}

t4();
