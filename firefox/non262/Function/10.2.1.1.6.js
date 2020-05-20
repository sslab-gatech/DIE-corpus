/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function strictThis() {
  'use strict';

  return this;
}
/* Check that calls of flat closure slots get the right |this|. */


function flat(g) {
  function h() {
    return g();
  }

  return h;
}

flat(strictThis)();
undefined;

/* Check that calls up upvars get the right |this|. */
function upvar(f) {
  function h() {
    return f();
  }

  return h();
}

upvar(strictThis);
undefined;

/* Check that calls to with-object properties get an appropriate 'this'. */
var obj = {
  f: strictThis
};
with (obj) {
  /* 
   * The method won't compile anything containing a 'with', but it can
   * compile 'g'.
   */
  function g() {
    return obj.f();
  }

  g();
  obj;
}
reportCompare(true, true);
