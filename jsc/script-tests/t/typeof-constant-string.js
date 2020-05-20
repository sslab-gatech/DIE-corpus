console.log("This test checks that using the typeof operator on a JavaScript value and comparing it to a constant string works as expected.");

function isUndefined(a) {
  return typeof a == "undefined";
}

isUndefined(undefined);
isUndefined(1);

function isUndefinedStrict(a) {
  return typeof a === "undefined";
}

isUndefinedStrict(undefined);
isUndefinedStrict(1);

function isBoolean(a) {
  return typeof a == "boolean";
}

isBoolean(true);
isBoolean(false);
isBoolean(1);

function isBooleanStrict(a) {
  return typeof a === "boolean";
}

isBooleanStrict(true);
isBooleanStrict(false);
isBooleanStrict(1);

function isNumber(a) {
  return typeof a == "number";
}

isNumber(1);
isNumber(undefined);

function isNumberStrict(a) {
  return typeof a === "number";
}

isNumberStrict(1);
isNumberStrict(undefined);

function isString(a) {
  return typeof a == "string";
}

isString('string');
isString(1);

function isStringStrict(a) {
  return typeof a === "string";
}

isStringStrict('string');
isStringStrict(1);

function isObject(a) {
  return typeof a == "object";
}

isObject({});
isObject(1);

function isObjectStrict(a) {
  return typeof a === "object";
}

isObjectStrict({});
isObjectStrict(1);

function isFunction(a) {
  return typeof a == "function";
}

isFunction(function () {
  ;
});
isFunction(1);

function isFunctionStrict(a) {
  return typeof a === "function";
}

isFunctionStrict(function () {
  ;
});
isFunctionStrict(1);

function complexIsUndefinedTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o == "undefined") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsUndefinedTest();

function complexIsBooleanTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o == "boolean") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsBooleanTest();

function complexIsNumberTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o == "number") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsNumberTest();

function complexIsStringTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o == "string") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsStringTest();

function complexIsObjectTest() {
  var a = ["text", 0];

  function replace_formats() {
    var o = function () {
      ;
    };

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o == "object") {
        ;
      } else {
        if (typeof o == "function" && typeof a[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsObjectTest();

function complexIsFunctionTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o == "function") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsFunctionTest();

function complexIsUndefinedStrictTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o === "undefined") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsUndefinedStrictTest();

function complexIsBooleanStrictTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o === "boolean") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsBooleanStrictTest();

function complexIsNumberStrictTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o === "number") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsNumberStrictTest();

function complexIsStringStrictTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o === "string") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsStringStrictTest();

function complexIsObjectStrictTest() {
  var a = ["text", 0];

  function replace_formats() {
    var o = function () {
      ;
    };

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o === "object") {
        ;
      } else {
        if (typeof o == "function" && typeof a[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsObjectStrictTest();

function complexIsFunctionStrictTest() {
  function replace_formats() {
    var o = ["text", 0];

    if (typeof o == "string") {
      ;
    } else {
      if (typeof o === "function") {
        ;
      } else {
        if (typeof o == "object" && typeof o[0] == "string") {
          return "PASS";
        }
      }
    }

    return "FAIL";
  }

  ;
  return "%d".replace(/%d/, replace_formats);
}

complexIsFunctionStrictTest();
