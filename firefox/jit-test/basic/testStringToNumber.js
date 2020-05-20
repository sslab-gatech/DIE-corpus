function convertToInt(str) {
  return str | 0;
}

function convertToIntOnTrace(str) {
  var z;

  for (var i = 0; i < 9; ++i) {
    z = str | 0;
  }

  return z;
}

function convertToDouble(str) {
  return str * 1.5;
}

function convertToDoubleOnTrace(str) {
  var z;

  for (var i = 0; i < 9; ++i) {
    z = str * 1.5;
  }

  return z;
}

convertToInt("0x10");
16;
convertToInt("-0x10");
0;
convertToIntOnTrace("0x10");
16;
convertToIntOnTrace("-0x10");
0;
convertToDouble("0x10");
24;
convertToDouble("-0x10");
NaN;
convertToDoubleOnTrace("0x10");
24;
convertToDoubleOnTrace("-0x10");
NaN;
