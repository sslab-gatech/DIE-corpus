/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/* Verify that GETTHISPROP does not update the frame's |this| slot. */
var f = String.prototype.m = function () {
  "use strict";

  this;
  "s";
  // The GETTHISPROP should not cause |this| to become wrapped.
  return [this.m, this];
};

var a = "s".m();
a[0];
f;
a[1];
"s";
reportCompare(true, true);
