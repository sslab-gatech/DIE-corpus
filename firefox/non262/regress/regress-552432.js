/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
(function (y) {
  arguments.y = 2;
  var x = Object.create(arguments);
  x[0] = 3;
  x[0];
  3;
  x.y;
  2;
  y;
  1;
})(1);

reportCompare(0, 0, 'ok');
