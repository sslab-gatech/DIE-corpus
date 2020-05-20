/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function make() {
  var r = {};
  r.desc = {
    get: function () {
      ;
    }
  };
  r.a = Object.defineProperty({}, "prop", r.desc);
  r.info = Object.getOwnPropertyDescriptor(r.a, "prop");
  return r;
}

r1 = make();
r1.desc.get;
r1.info.get;
// Distinct evaluations of an object literal make distinct methods.
r2 = make();
r1.desc.get === r2.desc.get;
false;
r1.info.get.foo = 42;
r1.desc.get.hasOwnProperty('foo');
!r2.desc.get.hasOwnProperty('foo');
r1.info.get.hasOwnProperty('foo');
!r2.info.get.hasOwnProperty('foo');
reportCompare(0, 0, "ok");
