/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/* Deleting an identifier is a syntax error in strict mode code only. */
testLenientAndStrict('delete x;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('delete (x);', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('delete x.y;', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('delete Object();', returns(true), returns(true));
true;
testLenientAndStrict('function f() { delete x; }', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f() { "use strict"; delete x; }', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
reportCompare(true, true);
