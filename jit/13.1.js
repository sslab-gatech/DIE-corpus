/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*
 * In strict mode, it is a syntax error for an identifier to appear
 * more than once in a function's argument list.
 */

/*
 * The parameters of ordinary function definitions should not contain
 * duplicate identifiers.
 */
testLenientAndStrict('function f(x,y) {}', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('function f(x,x) {}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f(x,y,z,y) {}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f(a,b,c,d,e,f,g,h,d) {}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f([x,y]) {}', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('function f([x,x]){}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f(x,[x]){}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f(x,x) { "use strict" };', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('Function("x","x","")', completesNormally, completesNormally);
true;
testLenientAndStrict('Function("x","y","")', completesNormally, completesNormally);
true;
testLenientAndStrict('Function("x","x","\'use strict\'")', raisesException(SyntaxError), raisesException(SyntaxError));
true;
testLenientAndStrict('Function("x","y","\'use strict\'")', completesNormally, completesNormally);
true;
testLenientAndStrict('(function (x,x) {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function (x,y) {})', parsesSuccessfully, parsesSuccessfully);
true;
testLenientAndStrict('function f(eval){}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f([eval]){}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f({x:eval}){}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function eval(){}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f(eval){"use strict";}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f([eval]){"use strict";}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f({x:eval}){"use strict";}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function eval(){"use strict";}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f(eval){})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f([eval]){})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f({x:eval}){})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function eval(){})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f(eval){"use strict";})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f([eval]){"use strict";})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f({x:eval}){"use strict";})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function eval(){"use strict";})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f(eval) {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f([eval]) {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f({x:eval}) {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function eval() {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x(eval){}})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x([eval]){}})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x({x:eval}){}})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x(eval){"use strict";}})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x([eval]){"use strict";}})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x({x:eval}){"use strict";}})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f(arguments){}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f([arguments]){}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f({x:arguments}){}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function arguments(){}', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f(arguments){"use strict";}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f([arguments]){"use strict";}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function f({x:arguments}){"use strict";}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('function arguments(){"use strict";}', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f(arguments){})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f([arguments]){})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f({x:arguments}){})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function arguments(){})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f(arguments){"use strict";})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f([arguments]){"use strict";})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f({x:arguments}){"use strict";})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function arguments(){"use strict";})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f(arguments) {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f([arguments]) {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function f({x:arguments}) {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('(function arguments() {})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x(arguments){}})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x([arguments]){}})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x({x:arguments}){}})', parsesSuccessfully, parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x(arguments){"use strict";}})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x([arguments]){"use strict";}})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('({set x({x:arguments}){"use strict";}})', parseRaisesException(SyntaxError), parseRaisesException(SyntaxError));
true;
testLenientAndStrict('Function("eval","")', completesNormally, completesNormally);
true;
testLenientAndStrict('Function("eval","\'use strict\';")', raisesException(SyntaxError), raisesException(SyntaxError));
true;
testLenientAndStrict('Function("arguments","")', completesNormally, completesNormally);
true;
testLenientAndStrict('Function("arguments","\'use strict\';")', raisesException(SyntaxError), raisesException(SyntaxError));
true;
reportCompare(true, true);
