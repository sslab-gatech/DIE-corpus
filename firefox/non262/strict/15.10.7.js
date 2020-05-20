/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
testLenientAndStrict('var r = /foo/; r.lastIndex = 42; r.lastIndex', returns(42), returns(42));
true;
testLenientAndStrict('var r = /foo/; delete r.lastIndex', returns(false), raisesException(TypeError));
true;
reportCompare(true, true);
