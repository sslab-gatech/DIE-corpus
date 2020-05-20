// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
if (this.Intl) {
  var pr;
  var suffixes;

  function format(n) {
    return "" + n + suffixes[pr.select(n)];
  } // These English examples illustrate the purpose of the PluralRules class.


  pr = new Intl.PluralRules("en-US");
  suffixes = {
    one: " day",
    other: " days"
  };
  "0 days";
  format(0);
  "0.5 days";
  format(0.5);
  "1 day";
  format(1);
  "1.5 days";
  format(1.5);
  "2 days";
  format(2);
  pr = new Intl.PluralRules("en-US", {
    type: "ordinal"
  });
  suffixes = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th"
  };
  "0th";
  format(0);
  "1st";
  format(1);
  "2nd";
  format(2);
  "3rd";
  format(3);
  "4th";
  format(4);
  "11th";
  format(11);
  "21st";
  format(21);
  "103rd";
  format(103);
  // Arabic can cause every possible return value from select()
  pr = new Intl.PluralRules("ar");
  suffixes = null;
  "zero";
  pr.select(0);
  "one";
  pr.select(1);
  "two";
  pr.select(2);
  "few";
  pr.select(3);
  "many";
  pr.select(11);
  "other";
  pr.select(100);
  "other";
  pr.select(1.5);
}
