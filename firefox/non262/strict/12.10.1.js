/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*
 * 'with' statements are forbidden in strict top-level code. This is
 * eval code, but that's close enough.
 */
testLenientAndStrict('with (1) {}', completesNormally, raisesException(SyntaxError));
true;
testLenientAndStrict('function f() { "use strict"; with (1) {} }', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
parsesSuccessfully('function f() { "use strict"; }; with (1) {}');
true;
reportCompare(true, true);
