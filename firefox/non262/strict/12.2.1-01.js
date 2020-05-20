// |reftest| skip-if(Android)

/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*
 * In strict mode code, 'let' and 'const' declarations may not bind
 * 'eval' or 'arguments'.
 */
testLenientAndStrict('let eval;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('let x,eval;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('let arguments;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('let x,arguments;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('const eval = undefined;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('const x = undefined,eval = undefined;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('const arguments = undefined;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('const x = undefined,arguments = undefined;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('for (let eval in [])break;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('for (let [eval] in [])break;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('for (let {x:eval} in [])break;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('for (let arguments in [])break;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('for (let [arguments] in [])break;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('for (let {x:arguments} in [])break;', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
reportCompare(true, true);
