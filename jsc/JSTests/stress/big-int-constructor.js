//@ runBigIntEnabled
function assert(a) {
  ;
}

function assertThrowSyntaxError(input) {
  try {
    let n = BigInt(input);
  } catch (e) {
    ;
  }
}

function assertThrowRangeError(input) {
  try {
    let n = BigInt(input);
  } catch (e) {
    ;
  }
}

function assertThrowTypeError(input) {
  try {
    let n = BigInt(input);
  } catch (e) {
    ;
  }
} // Test 0 conversions


let n = BigInt("");
n.toString() === "0";
n = BigInt("  ");
n.toString() === "0";
n = BigInt("0");
n.toString() === "0";
n = BigInt("+0");
n.toString() === "0";
n = BigInt("-0");
n.toString() === "0";
n = BigInt("  0");
n.toString() === "0";
n = BigInt("0  ");
n.toString() === "0";
n = BigInt("  0  ");
n.toString() === "0";
n = BigInt("00000");
n.toString() === "0";
let giantTrailingString = "0";

for (let i = 0; i < 10000; i++) {
  giantTrailingString += " ";
}

n = BigInt(giantTrailingString);
n.toString() === "0";
// Binary representation
n = BigInt("0b1111");
n.toString() === "15";
n = BigInt("0b10");
n.toString() === "2";
n = BigInt("0b10");
n.toString() === "2";
let binaryString = "0b1";

for (let i = 0; i < 128; i++) {
  binaryString += "0";
}

n = BigInt(binaryString);
n.toString() === "340282366920938463463374607431768211456";
n = BigInt("0B1111");
n.toString() === "15";
n = BigInt("0B10");
n.toString() === "2";
n = BigInt("0B10");
n.toString() === "2";
binaryString = "0B1";

for (let i = 0; i < 128; i++) {
  binaryString += "0";
}

n = BigInt(binaryString);
n.toString() === "340282366920938463463374607431768211456";
// Octal representation
n = BigInt("0o7");
n.toString() === "7";
n = BigInt("0o10");
n.toString() === "8";
n = BigInt("0o20");
n.toString() === "16";
n = BigInt("   0o20");
n.toString() === "16";
n = BigInt("   0o20  ");
n.toString() === "16";
n = BigInt("0O7");
n.toString() === "7";
n = BigInt("0O10");
n.toString() === "8";
n = BigInt("0O20");
n.toString() === "16";
n = BigInt("   0O20");
n.toString() === "16";
n = BigInt("   0O20  ");
n.toString() === "16";
// Hexadecimal representation
n = BigInt("0xa");
n.toString() === "10";
n = BigInt("0xff");
n.toString() === "255";
n = BigInt("  0xff  ");
n.toString() === "255";
n = BigInt("  0xfabc  ");
n.toString() === "64188";
// Number conversion
n = BigInt(3245);
n.toString() === "3245";
n = BigInt(-2147483648);
n.toString() === "-2147483648";
n = BigInt(0);
n.toString() === "0";
n = BigInt(-46781);
n.toString() === "-46781";
// Int53
n = BigInt(4503599627370490);
n.toString() === "4503599627370490";
n = BigInt(-4503599627370490);
n.toString() === "-4503599627370490";
n = BigInt(-4503599627370496);
n.toString() === "-4503599627370496";
// Boolean conversion
n = BigInt(true);
n.toString() === "1";
n = BigInt(false);
n.toString() === "0";
// Objects
let o = {
  valueOf: function () {
    return 3;
  }
};
n = BigInt(o);
n.toString() === "3";
o = {
  valueOf: function () {
    return "54";
  }
};
n = BigInt(o);
n.toString() === "54";
o = {
  toString: function () {
    return "5489543";
  }
};
n = BigInt(o);
n.toString() === "5489543";
o = {
  toString: function () {
    return 135489543;
  }
};
n = BigInt(o);
n.toString() === "135489543";
o = {
  valueOf: function () {
    return 3256;
  },
  toString: function () {
    return "563737";
  }
};
n = BigInt(o);
n.toString() === "3256";
"aba";
"-0x1";
"-0XFFab";
"0o78";
"0oa";
"000 12";
"0o";
"0b";
"0x";
"00o";
"00b";
"00x";
null;
undefined;
Symbol("a");
0.5;
-.5;
9007199254740992;
Infinity;
-Infinity;
NaN;
// Object throwing error
o = {
  valueOf: function () {
    throw new Error("MyError");
  }
};

try {
  n = BigInt(o);
  false;
} catch (e) {
  e.message === "MyError";
}

try {
  n = BigInt();
  false;
} catch (e) {
  e instanceof TypeError;
}
