/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
testLenientAndStrict('var eval;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('var x,eval;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('var arguments;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('var x,arguments;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
reportCompare(true, true);
