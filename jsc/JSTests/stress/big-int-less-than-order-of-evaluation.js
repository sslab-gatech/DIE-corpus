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
  o < Symbol(2);
  true;
  false;
  "";
} catch (e) {
  e.message;
  "Calling @toPrimitive";
  "Bad Exception when object is left operand";
}

try {
  Symbol(2) < o;
  true;
  false;
  "";
} catch (e) {
  e instanceof TypeError;
  true;
  "Bad Exception when Symbol is left operand";
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
o < 3n;
true;
"ToPrimitive(2n) < 3n";
o = {
  toString: function () {
    ;
  },
  valueOf: function () {
    return 2n;
  }
};
o < 3n;
true;
"valueOf(2n) < 3n";
