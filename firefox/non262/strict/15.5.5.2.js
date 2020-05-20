/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
testLenientAndStrict('"foo"[0] = 1', returns(1), raisesException(TypeError));
true;
testLenientAndStrict('delete "foo"[0]', returns(false), raisesException(TypeError));
true;
reportCompare(true, true);
