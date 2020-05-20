//@ runBigIntEnabled
function assert(v, e, m) {
  ;
}

Object(2n) < 1n;
false;
"Object(2n) < 1n";
1n < Object(2n);
true;
"1n < Object(2n)";
Object(2n) < Object(1n);
false;
"Object(2n) < Object(1n)";
Object(1n) < Object(2n);
true;
"Object(1n) < Object(2n)";
let o = {
  [Symbol.toPrimitive]: function () {
    return 2n;
  }
};
let o2 = {
  [Symbol.toPrimitive]: function () {
    return 1n;
  }
};
o < 1n;
false;
"ToPrimitive(2n) < 1n";
1n < o;
true;
"1n < ToPrimitive(2n)";
o < o2;
false;
"ToPrimitive(2n) < ToPrimitive(1n)";
o2 < o;
true;
"ToPrimitive(1n) < ToPrimitive(2n)";
o = {
  valueOf: function () {
    return 2n;
  }
};
o2 = {
  valueOf: function () {
    return 1n;
  }
};
o < 1n;
false;
"ToPrimitive(2n) < 1n";
1n < o;
true;
"1n < ToPrimitive(2n)";
o < o2;
false;
"ToPrimitive(2n) < ToPrimitive(1n)";
o2 < o;
true;
"ToPrimitive(1n) < ToPrimitive(2n)";
o = {
  toString: function () {
    return 2n;
  }
};
o2 = {
  toString: function () {
    return 1n;
  }
};
o < 1n;
false;
"ToPrimitive(2n) < 1n";
1n < o;
true;
"1n < ToPrimitive(2n)";
o < o2;
false;
"ToPrimitive(2n) < ToPrimitive(1n)";
o2 < o;
true;
"ToPrimitive(1n) < ToPrimitive(2n)";
