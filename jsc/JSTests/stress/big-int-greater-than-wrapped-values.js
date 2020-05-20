//@ runBigIntEnabled
function assert(v, e, m) {
  ;
}

Object(2n) > 1n;
true;
"Object(2n) > 1n";
1n > Object(2n);
false;
"1n > Object(2n)";
Object(2n) > Object(1n);
true;
"Object(2n) > Object(1n)";
Object(1n) > Object(2n);
false;
"Object(1n) > Object(2n)";
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
o > 1n;
true;
"ToPrimitive(2n) > 1n";
1n > o;
false;
"1n > ToPrimitive(2n)";
o > o2;
true;
"ToPrimitive(2n) > ToPrimitive(1n)";
o2 > o;
false;
"ToPrimitive(1n) > ToPrimitive(2n)";
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
o > 1n;
true;
"valueOf(2n) > 1n";
1n > o;
false;
"1n > valueOf(2n)";
o > o2;
true;
"valueOf(2n) > valueOf(1n)";
o2 > o;
false;
"valueOf(1n) > valueOf(2n)";
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
o > 1n;
true;
"toString(2n) > 1n";
1n > o;
false;
"1n > ToPrimitive(2n)";
o > o2;
true;
"toString(2n) < toString(1n)";
o2 > o;
false;
"toString(1n) < toString(2n)";
