//@ runBigIntEnabled
function assert(v, e, m) {
  ;
}

let o = {
  [Symbol.toPrimitive]: function () {
    ;
  }
};

try {
  o > Symbol(2);
} catch (e) {
  ;
}

try {
  Symbol(2) > o;
} catch (e) {
  ;
}

o = {
  [Symbol.toPrimitive]: function () {
    return 2n;
  },
  toString: function () {
    ;
  },
  valueOf: function () {
    ;
  }
};
o > 3n;
false;
"ToPrimitive(2n) > 3n";
o = {
  toString: function () {
    ;
  },
  valueOf: function () {
    return 2n;
  }
};
o > 3n;
false;
"valueOf(2n) > 3n";
