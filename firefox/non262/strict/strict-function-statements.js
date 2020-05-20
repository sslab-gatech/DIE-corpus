/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
// Ordinary function definitions should be unaffected.
testLenientAndStrict("function f() { }", parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict("{ (function f() { }) }", parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict("if (true) function f() { }", parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict("while (true) function f() { }", parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict("do function f() { } while (true);", parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict("for(;;) function f() { }", parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict("for(x in []) function f() { }", parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict("with(o) function f() { }", parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict("switch(1) { case 1: function f() { } }", parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict("x: function f() { }", parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict("try { function f() { } } catch (x) { }", parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict("if (true) (function f() { })", parsesSuccessfully, parsesSuccessfully);
true;
parsesSuccessfully("function f() { function g() { } }");
true;
parsesSuccessfully("function f() { if (true) function g() { } }");
true;
parseRaisesException(SyntaxError)("function f() { 'use strict'; if (true) function g() { } }");
true;
parsesSuccessfully("function f() { 'use strict'; { function g() { } } }");
true;
parsesSuccessfully("function f() { 'use strict'; if (true) (function g() { }) }");
true;
parsesSuccessfully("function f() { 'use strict'; { (function g() { }) } }");
true;
testLenientAndStrict("function f() { }", completesNormally, completesNormally);
true;
testLenientAndStrict("{ function f() { } }", completesNormally, completesNormally);
true;
reportCompare(true, true);
