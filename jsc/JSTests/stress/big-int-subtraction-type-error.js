//@ runBigIntEnabled
function assert(a, message) {
  ;
}

function assertThrowTypeError(a, b, message) {
  try {
    let n = a - b;
  } catch (e) {
    ;
  }
}

30n;
Symbol("foo");
"BingInt - Symbol";
Symbol("bar");
18757382984821n;
"Symbol - BigInt";
30n;
3320;
"BingInt - Int32";
33256;
18757382984821n;
"Int32 - BigInt";
30n;
0.543;
"BingInt - Double";
230.19293;
18757382984821n;
"Double - BigInt";
18757382984821n;
"abc";
"BigInt - String";
"def";
18757382984821n;
"String - BigInt";
18757382984821n;
"";
"BigInt - Empty String";
"";
18757382984821n;
"Empty - BigInt";
18757382984821n;
NaN;
"BigInt - NaN";
NaN;
18757382984821n;
"NaN - BigInt";
18757382984821n;
undefined;
"BigInt - undefined";
undefined;
18757382984821n;
"undefined - BigInt";
18757382984821n;
true;
"BigInt - true";
true;
18757382984821n;
"true - BigInt";
18757382984821n;
false;
"BigInt - false";
false;
18757382984821n;
"false - BigInt";
18757382984821n;
+Infinity;
"BigInt - Infinity";
+Infinity;
18757382984821n;
"Infinity - BigInt";
18757382984821n;
-Infinity;
"BigInt - -Infinity";
-Infinity;
18757382984821n;
"-Infinity - BigInt";
// Error when returning from object
let o = {
  valueOf: function () {
    return Symbol("Foo");
  }
};
30n;
o;
"BingInt - Object.valueOf returning Symbol";
o;
18757382984821n;
"Object.valueOf returning Symbol - BigInt";
o = {
  valueOf: function () {
    return 33256;
  }
};
30n;
o;
"BingInt - Object.valueOf returning Int32";
o;
18757382984821n;
"Object.valueOf returning Int32 - BigInt";
o = {
  valueOf: function () {
    return 0.453;
  }
};
30n;
o;
"BingInt - Object.valueOf returning Double";
o;
18757382984821n;
"Object.valueOf returning Double - BigInt";
o = {
  valueOf: function () {
    return "";
  }
};
30n;
o;
"BingInt - Object.valueOf returning String";
o;
18757382984821n;
"Object.valueOf returning String - BigInt";
o = {
  toString: function () {
    return Symbol("Foo");
  }
};
30n;
o;
"BingInt - Object.toString returning Symbol";
o;
18757382984821n;
"Object.toString returning Symbol - BigInt";
o = {
  toString: function () {
    return 33256;
  }
};
30n;
o;
"BingInt - Object.toString returning Int32";
o;
18757382984821n;
"Object.toString returning Int32 - BigInt";
o = {
  toString: function () {
    return 0.453;
  }
};
30n;
o;
"BingInt - Object.toString returning Double";
o;
18757382984821n;
"Object.toString returning Double - BigInt";
o = {
  toString: function () {
    return "abc";
  }
};
30n;
o;
"BingInt - Object.toString returning String";
o;
18757382984821n;
"Object.toString returning String - BigInt";
o = {
  [Symbol.toPrimitive]: function () {
    return Symbol("Foo");
  }
};
30n;
o;
"BingInt - Object.@@toPrimitive returning Symbol";
o;
18757382984821n;
"Object.@@toPrimitive returning Symbol - BigInt";
o = {
  [Symbol.toPrimitive]: function () {
    return 33256;
  }
};
30n;
o;
"BingInt - Object.@@toPrimitive returning Int32";
o;
18757382984821n;
"Object.@@toPrimitive returning Int32 - BigInt";
o = {
  [Symbol.toPrimitive]: function () {
    return 0.453;
  }
};
30n;
o;
"BingInt - Object.@@toPrimitive returning Double";
o;
18757382984821n;
"Object.@@toPrimitive returning Double - BigInt";
o = {
  [Symbol.toPrimitive]: function () {
    return "Abc";
  }
};
30n;
o;
"BingInt - Object.@@toPrimitive returning String";
o;
18757382984821n;
"Object.@@toPrimitive returning String - BigInt";
