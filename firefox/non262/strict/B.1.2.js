/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
testLenientAndStrict('"\\010"', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('"\\00"', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('"\\1"', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('"\\08"', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('"\\0"', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('"\\0x"', parsesSuccessfully, parsesSuccessfully);
true;
reportCompare(true, true);
