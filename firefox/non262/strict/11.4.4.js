/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*
 * Prefix increment expressions must not have 'eval' or 'arguments' as
 * their operands.
 */
testLenientAndStrict('++arguments', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('++eval', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('++(arguments)', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('++(eval)', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
reportCompare(true, true);
