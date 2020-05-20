console.log("Tests that -2^31/-1 (and a bunch of other corner cases) does the right thing.");

function myDiv(a, b) {
  return a / b;
}

function myDivByNeg1(a) {
  return a / -1;
}

function myDivNeg2ToThe31(b) {
  return -2147483648 / b;
}

function myMod(a, b) {
  return a % b;
}

function myModByNeg1(a) {
  return a % -1;
}

function myModBy2(a) {
  return a % 2;
}

function myModBy1073741824(a) {
  return a % 1073741824;
}

function myModNeg2ToThe31(b) {
  return -2147483648 % b;
}

function myOtherDiv(a, b) {
  return a / b;
}

function myOtherDivByNeg1(a) {
  return a / -1;
}

function myOtherDivNeg2ToThe31(b) {
  return -2147483648 / b;
}

function myOtherMod(a, b) {
  return a % b;
}

function myOtherModByNeg1(a) {
  return a % -1;
}

function myOtherModNeg2ToThe31(b) {
  return -2147483648 % b;
}

function myDivExpectingInt(a, b) {
  return a / b | 0;
}

var w = 4;
var v = 2;
var x = -2147483648;
var y = -1;
var z = 3; // Use a loop to ensure we cover all three tiers of optimization.

for (var i = 0; i < 200; ++i) {
  myDiv(x, y);
  myDivByNeg1(x);
  myDivNeg2ToThe31(y);
  myMod(x, y);
  myMod(x, z);
  myModByNeg1(x);
  myModBy2(x);
  myModBy1073741824(x);
  myModBy2(y);
  myModBy1073741824(y);
  myModBy2(z);
  myModBy1073741824(z);
  myModNeg2ToThe31(y);

  if (i > 100) {
    w = x;
    v = y;
  }

  myOtherDiv(w, v);
  myOtherDivByNeg1(w);
  myOtherDivNeg2ToThe31(v);
  myOtherMod(w, v);
  myOtherModByNeg1(w);
  myOtherModNeg2ToThe31(v);
  myOtherModNeg2ToThe31(3);
  myDivExpectingInt(x, y);
}
