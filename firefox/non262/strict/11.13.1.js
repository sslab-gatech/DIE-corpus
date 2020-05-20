/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*
 * Simple assignment expressions in strict mode code must not be
 * assignments to 'eval' or 'arguments'.
 */
testLenientAndStrict('arguments=1', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('eval=1', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(arguments)=1', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(eval)=1', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
reportCompare(true, true);
