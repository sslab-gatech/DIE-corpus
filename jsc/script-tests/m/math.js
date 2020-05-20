console.log("This test checks the behavior of the Math object as described in 15.8 of the language specification.");
Math.abs(NaN);
Math.abs(0);
Math.abs(-0);
Math.abs(1);
Math.abs(-1);
Math.abs(Number.MIN_VALUE);
Math.abs(-Number.MIN_VALUE);
Math.abs(Number.MAX_VALUE);
Math.abs(-Number.MAX_VALUE);
Math.abs(Infinity);
Math.abs(-Infinity);
Math.acos(NaN);
Math.acos(-0);
Math.acos(1);
Math.acos(1.1);
Math.acos(-1.1);
Math.acos(Infinity);
Math.acos(-Infinity);
Math.asin(NaN);
Math.asin(0);
Math.asin(-0);
Math.asin(1);
Math.asin(1.1);
Math.asin(-1.1);
Math.asin(Infinity);
Math.asin(-Infinity);
Math.atan(NaN);
Math.atan(0);
Math.atan(-0);
Math.atan(Infinity);
Math.atan2(NaN, NaN);
Math.atan2(NaN, 0);
Math.atan2(NaN, -0);
Math.atan2(NaN, 1);
Math.atan2(NaN, Infinity);
Math.atan2(NaN, -Infinity);
Math.atan2(0, NaN);
Math.atan2(-0, NaN);
Math.atan2(1, NaN);
Math.atan2(Infinity, NaN);
Math.atan2(-Infinity, NaN); // Regression test for Bug 26978 (https://bugs.webkit.org/show_bug.cgi?id=26978)

var testStr = "";
var v = {
  valueOf: function () {
    testStr += "one";
    return 1;
  }
};
var w = {
  valueOf: function () {
    testStr += "two";
    return 2;
  }
};
Math.atan2(v, w);
testStr;
/*
• Ify>0andxis+0, theresult isanimplementation-dependent approximationto +π/2.
• Ify>0andxis−0, theresult isanimplementation-dependent approximationto +π/2.
• Ifyis+0andx>0, theresult is+0.
• Ifyis+0andxis+0, theresult is+0.
• Ifyis+0andxis−0, theresult isanimplementation-dependent approximationto +π.
• Ifyis+0andx<0, theresult isanimplementation-dependent approximationto +π.
• Ifyis−0andx>0, theresult is−0.
• Ifyis−0andxis+0, theresult is−0.
• Ifyis−0andxis−0, theresult isanimplementation-dependent approximationto −π.
• Ifyis−0andx<0, theresult isanimplementation-dependent approximationto −π.
• Ify<0andxis+0, theresult isanimplementation-dependent approximationto −π/2.
• Ify<0andxis−0, theresult isanimplementation-dependent approximationto −π/2.
• Ify>0andyisfiniteandxis+∞, theresult is+0.
• Ify>0andyisfiniteandxis−∞, theresult ifanimplementation-dependent approximationto +π.
• Ify<0andyisfiniteandxis+∞, theresult is−0.
• Ify<0andyisfiniteandxis−∞, theresult isanimplementation-dependent approximationto−π.
• Ifyis+∞andxisfinite, theresult isanimplementation-dependent approximationto +π/2.
• Ifyis−∞andxisfinite, theresult isanimplementation-dependent approximationto −π/2.
• Ifyis+∞andxis+∞, theresult isanimplementation-dependent approximationto +π/4.
• Ifyis+∞andxis−∞, theresult isanimplementation-dependent approximationto +3π/4.
• Ifyis−∞andxis+∞, theresult isanimplementation-dependent approximationto −π/4.
• Ifyis−∞andxis−∞, theresult isanimplementation-dependent approximationto −3π/4.
*/

Math.ceil(NaN);
Math.ceil(0);
Math.ceil(-0);
Math.ceil(-0.5);
Math.ceil(1);
Math.ceil(-1);
Math.ceil(1.1);
Math.ceil(-1.1);
Math.ceil(Number.MAX_VALUE);
Math.ceil(-Number.MAX_VALUE);
Math.ceil(Infinity);
Math.ceil(-Infinity);
Math.cos(NaN);
Math.cos(0);
Math.cos(-0);
Math.cos(Infinity);
Math.cos(-Infinity);
Math.exp(NaN);
Math.exp(0);
Math.exp(-0);
Math.exp(Infinity);
Math.exp(-Infinity);
Math.floor(NaN);
Math.floor(0);
Math.floor(-0);
Math.floor(0.5);
Math.floor(1);
Math.floor(-1);
Math.floor(1.1);
Math.floor(-1.1);
Math.floor(Number.MAX_VALUE);
Math.floor(-Number.MAX_VALUE);
Math.floor(Infinity);
Math.floor(-Infinity);
Math.hypot.length;
Math.hypot(NaN);
Math.hypot();
Math.hypot(-0);
Math.hypot(0);
Math.hypot(-Infinity);
Math.hypot(Infinity);
Math.hypot(-3);
Math.hypot(3, 4);
Math.hypot(1, NaN, Infinity);
Math.hypot(3, 4, 5);
Math.hypot(3, 4, '5');
Math.hypot(-3, -4);
Math.hypot(3, -Infinity);
Math.hypot(3, NaN);
Math.hypot(NaN, 3);
Math.hypot(0, NaN);
Math.hypot(NaN, 0);

try {
  Math.hypot(NaN, {
    valueOf: function () {
      throw "err";
    }
  });
} catch (e) {
  ;
}

try {
  Math.hypot(NaN, NaN, {
    valueOf: function () {
      throw "err";
    }
  });
} catch (e) {
  ;
}

sideEffect = 0;

try {
  Math.hypot({
    valueOf: function () {
      throw "error1";
    }
  }, {
    valueOf: function () {
      sideEffect = 1;
    }
  });
} catch (e) {
  ;
}

sideEffect;
Math.hypot(3, 4, 'foo');
Math.imul.length;
Math.log(NaN);
Math.log(0);
Math.log(-0);
Math.log(1);
Math.log(-1);
Math.log(-1.1);
Math.log(Infinity);
Math.log(-Infinity);
Math.max();
Math.max(NaN);
Math.max(NaN, 1);
Math.max(0);
Math.max(-0);
Math.max(-0, 0);

try {
  Math.max(NaN, {
    valueOf: function () {
      throw "err";
    }
  });
} catch (e) {
  ;
}

try {
  Math.max(NaN, NaN, {
    valueOf: function () {
      throw "err";
    }
  });
} catch (e) {
  ;
}

Math.max(-0, NaN, 0);
Math.max(-0, NaN, 0, NaN);
sideEffect = 0;

try {
  Math.max({
    valueOf: function () {
      throw "error1";
    }
  }, {
    valueOf: function () {
      sideEffect = 1;
    }
  });
} catch (e) {
  ;
}

sideEffect;
Math.min();
Math.min(NaN);
Math.min(NaN, 1);
Math.min(0);
Math.min(-0);
Math.min(-0, 0);

try {
  Math.min(NaN, {
    valueOf: function () {
      throw "err";
    }
  });
} catch (e) {
  ;
}

try {
  Math.min(NaN, NaN, {
    valueOf: function () {
      throw "err";
    }
  });
} catch (e) {
  ;
}

Math.min(-0, NaN, 0);
Math.min(-0, NaN, 0, NaN);
sideEffect = 0;

try {
  Math.min({
    valueOf: function () {
      throw "error1";
    }
  }, {
    valueOf: function () {
      sideEffect = 1;
    }
  });
} catch (e) {
  ;
}

sideEffect;
Math.pow(NaN, NaN);
Math.pow(NaN, 0);
Math.pow(NaN, -0);
Math.pow(NaN, 1);
Math.pow(NaN, Infinity);
Math.pow(NaN, -Infinity);
Math.pow(0, NaN);
Math.pow(-0, NaN);
Math.pow(1, NaN);
Math.pow(Infinity, NaN);
Math.pow(-Infinity, NaN);
/*
• Ifabs(x)>1andyis+∞, theresult is+∞.
• Ifabs(x)>1andyis−∞, theresult is+0.
• Ifabs(x)==1andyis+∞, theresult isNaN.
• Ifabs(x)==1andyis−∞, theresult isNaN.
• Ifabs(x)<1andyis+∞, theresult is+0.
• Ifabs(x)<1andyis−∞, theresult is+∞.
• Ifxis+∞andy>0, theresult is+∞.
• Ifxis+∞andy<0, theresult is+0.
• Ifxis−∞andy>0andyisanoddinteger, theresult is−∞.
• Ifxis−∞andy>0andyisnot anoddinteger, theresult is+∞.
• Ifxis−∞andy<0andyisanoddinteger, theresult is−0.
• Ifxis−∞andy<0andyisnot anoddinteger, theresult is+0.
• Ifxis+0andy>0, theresult is+0.
• Ifxis+0andy<0, theresult is+∞.
• Ifxis−0andy>0andyisanoddinteger, theresult is−0.
• Ifxis−0andy>0andyisnot anoddinteger, theresult is+0.
• Ifxis−0andy<0andyisanoddinteger, theresult is−∞.
• Ifxis−0andy<0andyisnot anoddinteger, theresult is+∞.
• Ifx<0andxisfiniteandyisfiniteandyisnot aninteger, theresult isNaN.
*/

Math.round(NaN);
Math.round(0);
Math.round(-0);
Math.round(0.4);
Math.round(-0.4);
Math.round(0.5);
Math.round(-0.5);
Math.round(0.6);
Math.round(-0.6);
Math.round(1);
Math.round(-1);
Math.round(1.1);
Math.round(-1.1);
Math.round(1.5);
Math.round(-1.5);
Math.round(1.6);
Math.round(-1.6);
Math.round(8640000000000000); // The following is expected. Double can't represent .5 in this case.

Math.round(8640000000000000.5);
Math.round(8640000000000001);
Math.round(8640000000000002);
Math.round(9007199254740990);
Math.round(9007199254740991);
Math.round(1.7976931348623157e+308);
Math.round(-8640000000000000);
Math.round(-8640000000000001);
Math.round(-8640000000000002);
Math.round(-9007199254740990);
Math.round(-9007199254740991);
Math.round(-1.7976931348623157e+308);
Math.round(Infinity);
Math.round(-Infinity);
Math.sign(NaN);
Math.sign('string');
Math.sign([1, 2, 3]);
Math.sign({});
Math.sign(0);
Math.sign(-0);
Math.sign(-1);
Math.sign(1);
Math.sign(0.1);
Math.sign(-0.1);
Math.sign(10000);
Math.sign(-10000);
Math.sign(Number.MIN_VALUE);
Math.sign(-Number.MIN_VALUE);
Math.sign(Number.MAX_VALUE);
Math.sign(-Number.MAX_VALUE);
Math.sign(Infinity);
Math.sign(-Infinity);
Math.sin(NaN);
Math.sin(0);
Math.sin(-0);
Math.sin(Infinity);
Math.sin(-Infinity);
Math.sqrt(NaN);
Math.sqrt(0);
Math.sqrt(-0);
Math.sqrt(1);
Math.sqrt(-1);
Math.sqrt(Infinity);
Math.sqrt(-Infinity);
Math.tan(NaN);
Math.tan(0);
Math.tan(-0);
Math.tan(Infinity);
Math.tan(-Infinity);
Math.acosh(NaN);
Math.acosh(0);
Math.acosh(0.5);
Math.acosh(-1);
Math.acosh(Infinity);
Math.acosh(-Infinity);
Math.asinh(NaN);
Math.asinh(0);
Math.asinh(-0);
Math.asinh(Infinity);
Math.asinh(-Infinity);
Math.atanh(NaN);
Math.atanh(0);
Math.atanh(-0);
Math.atanh(-1);
Math.atanh(1);
Math.atanh(Infinity);
Math.atanh(-Infinity);
Math.cbrt(NaN);
Math.cbrt(0);
Math.cbrt(-0);
Math.cbrt(8);
Math.cbrt(-8);
Math.cbrt(Infinity);
Math.cbrt(-Infinity);
Math.cosh(NaN);
Math.cosh(0);
Math.cosh(-0);
Math.cosh(Infinity);
Math.cosh(-Infinity);
Math.expm1(NaN);
Math.expm1(0);
Math.expm1(-0);
Math.expm1(Infinity);
Math.expm1(-Infinity);
Math.fround(NaN);
Math.fround(0);
Math.fround(-0);
Math.fround(Infinity);
Math.fround(-Infinity);
Math.log1p(NaN);
Math.log1p(0);
Math.log1p(-0);
Math.log1p(Infinity);
Math.log1p(-1);
Math.log1p(-Infinity);
Math.log10(NaN);
Math.log10(0);
Math.log10(-0);
Math.log10(10);
Math.log10(-1);
Math.log10(-Infinity);
Math.log10(Infinity);
Math.log10(1);
Math.log2(NaN);
Math.log2(0);
Math.log2(-0);
Math.log2(2);
Math.log2(-1);
Math.log2(-Infinity);
Math.log2(Infinity);
Math.log2(1);
Math.asinh(NaN);
Math.asinh(0);
Math.asinh(-0);
Math.asinh(Infinity);
Math.asinh(-Infinity);
Math.sinh(NaN);
Math.sinh(0);
Math.sinh(-0);
Math.sinh(Infinity);
Math.sinh(-Infinity);
Math.tanh(NaN);
Math.tanh(0);
Math.tanh(-0);
Math.tanh(Infinity);
Math.tanh(-Infinity);
Math.trunc(NaN);
Math.trunc(0);
Math.trunc(-0);
Math.trunc(Infinity);
Math.trunc(-Infinity);
Math.trunc(-0.5);
Math.trunc(0.5);
Math.trunc(0xFFFFFFFF * 2 + 0.5);
var __Math = Math;
delete Math;
;

function global() {
  return this;
}

'Math' in global();
Math = __Math;
