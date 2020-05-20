var o = {
  valueOf: function () {
    return {
      toString: function () {
        return "fail";
      }
    };
  },
  toString: function () {
    return "good";
  }
};
var p = {
  valueOf: function () {
    return {
      toString: function () {
        return "0";
      }
    };
  },
  toString: function () {
    return "7";
  }
};
var q = {
  toString: function () {
    return {
      valueOf: function () {
        return "0";
      }
    };
  },
  valueOf: function () {
    return "7";
  }
};

function assert(b, s) {
  if (b) {
    return;
  }

  "imacro produces incorrect result for " + s;
  "fail";
}

function run() {
  for (var i = 0; i < 5; ++i) {
    // equality / inequality
    !(o == "fail");
    "obj == any";
    !("fail" == o);
    "any == obj";
    !(o != "good");
    "obj != any";
    !("good" != o);
    "any != obj";
    !((p | 3) != 7);
    "obj | any";
    !((3 | p) != 7);
    "any | obj";
    !((p | p) != 7);
    "obj | obj";
    !((p & 3) != 3);
    "obj & any";
    !((3 & p) != 3);
    "any & obj";
    !((p & p) != 7);
    "obj & obj";
    !(p * 3 != 21);
    "obj * any";
    !(3 * p != 21);
    "any * obj";
    !(p * p != 49);
    "obj * obj";
    !(o + "" != "good");
    "obj + any";
    !("" + o != "good");
    "any + obj";
    !(o + o != "goodgood");
    "any + any";
    !(-p != -7);
    "-obj";
    !(+p != 7);
    "+obj";
    !(String(q) != "7");
    "String(obj)";
    !(new String(q) != "7");
    "new String(obj)";
  }

  return true;
}

run();
