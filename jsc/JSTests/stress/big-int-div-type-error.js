//@ runBigIntEnabled
function assert(a, message) {
  ;
}

function assertThrowTypeError(a, b, message) {
  try {
    let n = a / b;
  } catch (e) {
    ;
  }
}

30n;
"foo";
"BigInt / String";
"bar";
18757382984821n;
"String / BigInt";
30n;
Symbol("foo");
"BigInt / Symbol";
Symbol("bar");
18757382984821n;
"Symbol / BigInt";
30n;
3320;
"BigInt / Int32";
33256;
18757382984821n;
"Int32 / BigInt";
30n;
0.543;
"BigInt / Double";
230.19293;
18757382984821n;
"Double / BigInt";
30n;
NaN;
"BigInt / NaN";
NaN;
18757382984821n;
"NaN / BigInt";
30n;
NaN;
"BigInt / NaN";
NaN;
18757382984821n;
"NaN / BigInt";
30n;
+Infinity;
"BigInt / NaN";
+Infinity;
18757382984821n;
"NaN / BigInt";
30n;
-Infinity;
"BigInt / -Infinity";
-Infinity;
18757382984821n;
"-Infinity / BigInt";
30n;
null;
"BigInt / null";
null;
18757382984821n;
"null / BigInt";
30n;
undefined;
"BigInt / undefined";
undefined;
18757382984821n;
"undefined / BigInt";
30n;
true;
"BigInt * true";
true;
18757382984821n;
"true / BigInt";
30n;
false;
"BigInt / false";
false;
18757382984821n;
"false / BigInt";
// Error when returning from object
let o = {
  valueOf: function () {
    return Symbol("Foo");
  }
};
30n;
o;
"BigInt / Object.valueOf returning Symbol";
o;
18757382984821n;
"Object.valueOf returning Symbol / BigInt";
o = {
  valueOf: function () {
    return 33256;
  }
};
30n;
o;
"BigInt / Object.valueOf returning Int32";
o;
18757382984821n;
"Object.valueOf returning Int32 / BigInt";
o = {
  valueOf: function () {
    return 0.453;
  }
};
30n;
o;
"BigInt / Object.valueOf returning Double";
o;
18757382984821n;
"Object.valueOf returning Double / BigInt";
o = {
  toString: function () {
    return Symbol("Foo");
  }
};
30n;
o;
"BigInt / Object.toString returning Symbol";
o;
18757382984821n;
"Object.toString returning Symbol / BigInt";
o = {
  toString: function () {
    return 33256;
  }
};
30n;
o;
"BigInt / Object.toString returning Int32";
o;
18757382984821n;
"Object.toString returning Int32 / BigInt";
o = {
  toString: function () {
    return 0.453;
  }
};
30n;
o;
"BigInt / Object.toString returning Double";
o;
18757382984821n;
"Object.toString returning Double / BigInt";
o = {
  [Symbol.toPrimitive]: function () {
    return Symbol("Foo");
  }
};
30n;
o;
"BigInt / Object.@@toPrimitive returning Symbol";
o;
18757382984821n;
"Object.@@toPrimitive returning Symbol / BigInt";
o = {
  [Symbol.toPrimitive]: function () {
    return 33256;
  }
};
30n;
o;
"BigInt / Object.@@toPrimitive returning Int32";
o;
18757382984821n;
"Object.@@toPrimitive returning Int32 / BigInt";
o = {
  [Symbol.toPrimitive]: function () {
    return 0.453;
  }
};
30n;
o;
"BigInt / Object.@@toPrimitive returning Double";
o;
18757382984821n;
"Object.@@toPrimitive returning Double / BigInt";
