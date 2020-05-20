// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function toSlowMode(re) {
  re.exec = str => RegExp.prototype.exec.call(re, str);

  return re;
} // Construction does not throw.


{
  let re = /./s;
  re = RegExp(".", "s");
  re = new RegExp(".", "s");

  (() => new RegExp(".", "wtf"))();

  SyntaxError;
} // The flags accessors.

{
  let re = /./s;
  "s";
  re.flags;
  re.global;
  re.ignoreCase;
  re.multiline;
  re.sticky;
  re.unicode;
  re.dotAll;
  re = toSlowMode(/./s);
  "s";
  re.flags;
  re.global;
  re.ignoreCase;
  re.multiline;
  re.sticky;
  re.unicode;
  re.dotAll;
  re = /./gimyus;
  "gimsuy";
  re.flags;
  re.global;
  re.ignoreCase;
  re.multiline;
  re.sticky;
  re.unicode;
  re.dotAll;
  re = /./gimyu;
  "gimuy";
  re.flags;
  re.global;
  re.ignoreCase;
  re.multiline;
  re.sticky;
  re.unicode;
  re.dotAll;
} // Different construction variants with all flags.

{
  "gimsuy";
  new RegExp("", "yusmig").flags;
  "gimsuy";
  new RegExp().compile("", "yusmig").flags;
} // Default '.' behavior.

{
  let re = /^.$/;
  re.test("a");
  re.test("3");
  re.test("π");
  re.test("\u2027");
  re.test("\u0085");
  re.test("\v");
  re.test("\f");
  re.test("\u180E");
  re.test("\u{10300}");
  re.test("\n");
  re.test("\r");
  re.test("\u2028");
  re.test("\u2029");
} // Default '.' behavior (unicode).

{
  let re = /^.$/u;
  re.test("a");
  re.test("3");
  re.test("π");
  re.test("\u2027");
  re.test("\u0085");
  re.test("\v");
  re.test("\f");
  re.test("\u180E");
  re.test("\u{10300}");
  re.test("\n");
  re.test("\r");
  re.test("\u2028");
  re.test("\u2029");
} // DotAll '.' behavior.

{
  let re = /^.$/s;
  re.test("a");
  re.test("3");
  re.test("π");
  re.test("\u2027");
  re.test("\u0085");
  re.test("\v");
  re.test("\f");
  re.test("\u180E");
  re.test("\u{10300}");
  re.test("\n");
  re.test("\r");
  re.test("\u2028");
  re.test("\u2029");
} // DotAll '.' behavior (unicode).

{
  let re = /^.$/su;
  re.test("a");
  re.test("3");
  re.test("π");
  re.test("\u2027");
  re.test("\u0085");
  re.test("\v");
  re.test("\f");
  re.test("\u180E");
  re.test("\u{10300}");
  re.test("\n");
  re.test("\r");
  re.test("\u2028");
  re.test("\u2029");
}
