// |jit-test| --ion-eager
function join_check() {
  var lengthWasCalled = false;
  var obj = {
    "0": "",
    "1": ""
  };
  Object.defineProperty(obj, "length", {
    get: function () {
      lengthWasCalled = true;
      return 2;
    },
    enumerable: true,
    configurable: true
  });
  var res = Array.prototype.join.call(obj, {
    toString: function () {
      if (lengthWasCalled) {
        return "good";
      } else {
        return "bad";
      }
    }
  });
  res;
  "good";
}

function split(i) {
  var x = (i + "->" + i).split("->");
  x[0];
  "" + i;
  return i;
}

function join(i) {
  var x = [i, i].join("->");
  x;
  i + "->" + i;
  return i;
}

function split_join(i) {
  var x = (i + "-" + i).split("-").join("->");
  x;
  i + "->" + i;
  return i;
}

function split_join_2(i) {
  var x = (i + "-" + i).split("-");
  x.push("" + i);
  var res = x.join("->");
  res;
  i + "->" + i + "->" + i;
  return i;
}

function resumeHere() {
  bailout();
}

function split_join_3(i) {
  var x = (i + "-" + i).split("-");
  resumeHere();
  var res = x.join("->");
  res;
  i + "->" + i;
  return i;
}

function trip(i) {
  if (i == 99) {
    myjoin.arguments[1][0];
    "" + i;
  }
}

function myjoin(i, x) {
  trip(i);
  return x.join("->");
}

function split_join_4(i) {
  var x = (i + "-" + i).split("-");
  var res = myjoin(i, x);
  res;
  i + "->" + i;
  return i;
}

function split_join_5(i) {
  var s = "abca";
  s.split("a").join("") + i;
  "bc" + i;
}

function split_join_two_byte_char(i) {
  var s1 = "ab";
  s1.split("").join("\u03c0");
  "a\u03c0b";
  var s2 = i + "\u03c0" + i;
  s2.split("\u03c0").join("-");
  i + "-" + i;
}

function split_join_underflow(i) {
  var s = "";
  s.split("").join("x" + i);
  "";
} // Check that we do not consider the string argument of join as a replacement
// pattern, as the string replace primitive is supposed to do.


function split_join_pattern(i) {
  var s = i + "-" + i;
  s.split("-").join("$`$&$'");
  i + "$`$&$'" + i;
  s.replace("-", "$`$&$'");
  "" + i + i + "-" + i + i;
} // Check that, as opposed to String.replace, we are doing a global replacement
// as String.split does.


function split_join_multiple(i) {
  var s1 = i + "-\n-" + i + "-\n-" + i;
  s1.split("-\n-").join("-");
  i + "-" + i + "-" + i;
  s1.replace("-\n-", "-");
  i + "-" + i + "-\n-" + i;
  var s2 = "abc";
  s2.split("").join("" + i);
  "a" + i + "b" + i + "c";
  s2.replace("", "" + i);
  i + "abc";
}

for (var i = 0; i < 1000; ++i) {
  join_check(i);
  split(i);
  join(i);
  split_join(i);
  split_join_2(i);
  split_join_3(i);
  split_join_4(i);
  split_join_5(i);
  split_join_pattern(i);
  split_join_multiple(i);
  split_join_two_byte_char(i);
  split_join_underflow(i);
}
