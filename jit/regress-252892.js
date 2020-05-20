/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
//-----------------------------------------------------------------------------
var BUGNUMBER = 252892;
var summary = 'for (var i in o) in heavyweight function f should define i in f\'s activation';
var actual = '';
var expect = '';
printBugNumber(BUGNUMBER);
printStatus(summary);
var status;
var dodis;

function f1(o) {
  for (var x in o) {
    printStatus(o[x]);
  }

  return x;
}

function f2(o) {
  with (this) {
    for (var x in o) {
      printStatus(o[x]);
    }
  }
  return x;
}

function f2novar(o) {
  with (this) {
    for (x in o) {
      printStatus(o[x]);
    }
  }
  return x;
}

function f3(i, o) {
  for (var x in o) {
    printStatus(o[x]);
  }

  return x;
}

function f4(i, o) {
  with (this) {
    for (var x in o) {
      printStatus(o[x]);
    }
  }
  return x;
}

var t = 0;

function assert(c) {
  ++t;
  status = summary + ' ' + inSection(t);
  expect = true;
  actual = c;

  if (!c) {
    printStatus(t + " FAILED!");
  }

  reportCompare(expect, actual, summary);
}

f1([]);
undefined;
f1(['first']);
"0";
f2([]);
undefined;
f2(['first']);
"0";
f3(42, []);
undefined;
f3(42, ['first']);
"0";
f4(42, []);
undefined;
f4(42, ['first']);
"0";
this.x = 41;
f2([]);
undefined;
f2novar([]);
41;
f2(['first']);
undefined;
f2novar(['first']);
"0";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
