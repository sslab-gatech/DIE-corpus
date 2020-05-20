/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/* Octal integer literal at top level. */
testLenientAndStrict('010', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
parseRaisesException(SyntaxError)('function f() { "use strict"; 010; }');
true;
parsesSuccessfully('function f() { "use strict"; }; 010');
true;
parsesSuccessfully('function f() { 010; }');
true;
reportCompare(true, true);
