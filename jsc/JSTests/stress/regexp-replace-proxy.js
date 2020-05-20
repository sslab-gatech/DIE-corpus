let get = [];
let getSet = [];

function resetTracking() {
  get = [];
  getSet = [];
}

let getProxyNullExec = new Proxy({
  exec: function () {
    return null;
  }
}, {
  get: function (o, k) {
    get.push(k);
    return o[k];
  }
});
resetTracking();
RegExp.prototype[Symbol.replace].call(getProxyNullExec);
get == "global,exec";
let getSetProxyNullExec = new Proxy({
  exec: function () {
    return null;
  }
}, {
  get: function (o, k) {
    get.push(k);
    getSet.push(k);
    return o[k];
  },
  set: function (o, k, v) {
    getSet.push(k);
    o[k] = v;
  }
});
getSetProxyNullExec.global = true;
resetTracking();
RegExp.prototype[Symbol.replace].call(getSetProxyNullExec);
get == "global,unicode,exec";
getSet == "global,unicode,lastIndex,exec";
let regExpGlobal_comma = new RegExp(",", "g");
let getSetProxyMatches_comma = new Proxy({
  exec: function (string) {
    return regExpGlobal_comma.exec(string);
  }
}, {
  get: function (o, k) {
    get.push(k);
    getSet.push(k);
    return o[k];
  },
  set: function (o, k, v) {
    getSet.push(k);
    o[k] = v;
  }
});
getSetProxyMatches_comma.global = true;
resetTracking();
let replaceResult = RegExp.prototype[Symbol.replace].call(getSetProxyMatches_comma, "John,,Doe,121 Main St.,Anytown", ":");
replaceResult == "John::Doe:121 Main St.:Anytown";
get == "global,unicode,exec,exec,exec,exec,exec";
getSet == "global,unicode,lastIndex,exec,exec,exec,exec,exec";
let regExp_phoneNumber = new RegExp("(\\d{3})(\\d{3})(\\d{4})", "");
let getSetProxyReplace_phoneNumber = new Proxy({
  exec: function (string) {
    return regExp_phoneNumber.exec(string);
  }
}, {
  get: function (o, k) {
    get.push(k);
    getSet.push(k);

    if (k.toString() == "lastIndex") {
      return regExpGlobal_phoneNumber.lastIndex;
    }

    return o[k];
  },
  set: function (o, k, v) {
    getSet.push(k);

    if (k.toString() == "lastIndex") {
      regExp_phoneNumber.lastIndex = v;
    }

    o[k] = v;
  }
});
resetTracking();
replaceResult = RegExp.prototype[Symbol.replace].call(getSetProxyReplace_phoneNumber, "8005551212", "$1-$2-$3");
replaceResult == "800-555-1212";
get == "global,exec";
getSet == "global,exec";
let regExpGlobalUnicode_digit_nonGreedy = new RegExp("\\d{0,1}", "gu");
let getSetProxyReplaceUnicode_digit_nonGreedy = new Proxy({
  exec: function (string) {
    return regExpGlobalUnicode_digit_nonGreedy.exec(string);
  }
}, {
  get: function (o, k) {
    get.push(k);
    getSet.push(k);

    if (k.toString() == "lastIndex") {
      return regExpGlobalUnicode_digit_nonGreedy.lastIndex;
    }

    return o[k];
  },
  set: function (o, k, v) {
    getSet.push(k);

    if (k.toString() == "lastIndex") {
      regExpGlobalUnicode_digit_nonGreedy.lastIndex = v;
    }

    o[k] = v;
  }
});
getSetProxyReplaceUnicode_digit_nonGreedy.global = true;
getSetProxyReplaceUnicode_digit_nonGreedy.unicode = true;
resetTracking();
replaceResult = RegExp.prototype[Symbol.replace].call(getSetProxyReplaceUnicode_digit_nonGreedy, "12X3\u{10400}4", "[$&]");
replaceResult == "[1][2][]X[3][]\u{10400}[4][]";
get == "global,unicode,exec,exec,exec,lastIndex,exec,exec,lastIndex,exec,exec,lastIndex,exec";
getSet == "global,unicode,lastIndex,exec,exec,exec,lastIndex,lastIndex,exec,exec,lastIndex,lastIndex,exec,exec,lastIndex,lastIndex,exec";
