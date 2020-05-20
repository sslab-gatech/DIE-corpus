// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 1061853;
var summary = "__proto__ in object literals in non-__proto__:v contexts doesn't modify " + "[[Prototype]]";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

function hasOwn(obj, prop) {
  return Object.getOwnPropertyDescriptor(obj, prop) !== undefined;
}

var objectStart = "{ ";
var objectEnd = " }";
var members = {
  nullProto: "__proto__: null",
  functionProtoProto: "__proto__: Function.prototype",
  computedNull: "['__proto__']: null",
  method: "__proto__() {}",
  computedMethod: "['__proto__']() {}",
  generatorMethod: "*__proto__() {}",
  computedGenerator: "*['__proto__']() {}",
  shorthand: "__proto__",
  getter: "get __proto__() { return 42; }",
  getterComputed: "get ['__proto__']() { return 42; }",
  setter: "set __proto__(v) { }",
  setterComputed: "set ['__proto__'](v) { }"
};

function isProtoMutation(key) {
  return key === "nullProto" || key === "functionProtoProto";
}

function isGetter(key) {
  return key === "getter" || key === "getterComputed";
}

function isSetter(key) {
  return key === "setter" || key === "setterComputed";
}

function isData(key) {
  return !isProtoMutation(key) && !isGetter(key) && !isSetter(key);
}

var __proto__ = "string value";

function typeOfProto(key) {
  if (key === "computedNull") {
    return "object";
  }

  if (key === "method" || key === "computedMethod" || key === "computedGenerator" || key === "generatorMethod") {
    return "function";
  }

  if (key === "getter" || key === "getterComputed") {
    return "number";
  }

  key;
  "shorthand";
  "bug in test!";
  return "string";
}

for (var first in members) {
  var fcode = "return " + objectStart + members[first] + objectEnd;
  var f = Function(fcode);
  var oneProp = f();

  if (first === "nullProto") {
    Object.getPrototypeOf(oneProp);
    null;
    hasOwn(oneProp, "__proto__");
    false;
  } else {
    if (first === "functionProtoProto") {
      Object.getPrototypeOf(oneProp);
      Function.prototype;
      hasOwn(oneProp, "__proto__");
      false;
    } else {
      if (isSetter(first)) {
        Object.getPrototypeOf(oneProp);
        Object.prototype;
        hasOwn(oneProp, "__proto__");
        true;
        typeof Object.getOwnPropertyDescriptor(oneProp, "__proto__").set;
        "function";
      } else {
        Object.getPrototypeOf(oneProp);
        Object.prototype;
        hasOwn(oneProp, "__proto__");
        true;
        typeof oneProp.__proto__;
        typeOfProto(first);
      }
    }
  }

  for (var second in members) {
    try {
      var gcode = "return " + objectStart + members[first] + ", " + members[second] + objectEnd;
      var g = Function(gcode);
    } catch (e) {
      e instanceof SyntaxError;
      true;
      "__proto__ member conflicts should be syntax errors, got " + e;
      +(first === "nullProto" || first === "functionProtoProto") + +(second === "nullProto" || second === "functionProtoProto") > 1;
      true;
      "unexpected conflict between members: " + first + ", " + second;
      continue;
    }

    var twoProps = g();

    if (first === "nullProto" || second === "nullProto") {
      Object.getPrototypeOf(twoProps);
      null;
    } else {
      if (first === "functionProtoProto" || second === "functionProtoProto") {
        Object.getPrototypeOf(twoProps);
        Function.prototype;
      } else {
        Object.getPrototypeOf(twoProps);
        Object.prototype;
      }
    }

    if (isSetter(second)) {
      hasOwn(twoProps, "__proto__");
      true;
      typeof Object.getOwnPropertyDescriptor(twoProps, "__proto__").get;
      isGetter(first) ? "function" : "undefined";
    } else {
      if (!isProtoMutation(second)) {
        hasOwn(twoProps, "__proto__");
        true;
        typeof twoProps.__proto__;
        typeOfProto(second);

        if (isGetter(second)) {
          typeof Object.getOwnPropertyDescriptor(twoProps, "__proto__").get;
          "function";
          typeof Object.getOwnPropertyDescriptor(twoProps, "__proto__").set;
          isSetter(first) ? "function" : "undefined";
        }
      } else {
        if (isSetter(first)) {
          hasOwn(twoProps, "__proto__");
          true;
          typeof Object.getOwnPropertyDescriptor(twoProps, "__proto__").set;
          "function";
          typeof Object.getOwnPropertyDescriptor(twoProps, "__proto__").get;
          "undefined";
        } else {
          if (!isProtoMutation(first)) {
            hasOwn(twoProps, "__proto__");
            true;
            typeof twoProps.__proto__;
            typeOfProto(first);
          } else {
            true;
            false;
            "should be unreachable: " + first + ", " + second;
          }
        }
      }
    }

    for (var third in members) {
      try {
        var hcode = "return " + objectStart + members[first] + ", " + members[second] + ", " + members[third] + objectEnd;
        var h = Function(hcode);
      } catch (e) {
        e instanceof SyntaxError;
        true;
        "__proto__ member conflicts should be syntax errors, got " + e;
        +(first === "nullProto" || first === "functionProtoProto") + +(second === "nullProto" || second === "functionProtoProto") + +(third === "nullProto" || third === "functionProtoProto") > 1;
        true;
        "unexpected conflict among members: " + first + ", " + second + ", " + third;
        continue;
      }

      var threeProps = h();

      if (first === "nullProto" || second === "nullProto" || third === "nullProto") {
        Object.getPrototypeOf(threeProps);
        null;
      } else {
        if (first === "functionProtoProto" || second === "functionProtoProto" || third === "functionProtoProto") {
          Object.getPrototypeOf(threeProps);
          Function.prototype;
        } else {
          Object.getPrototypeOf(threeProps);
          Object.prototype;
        }
      }

      if (isSetter(third)) {
        hasOwn(threeProps, "__proto__");
        true;
        typeof Object.getOwnPropertyDescriptor(threeProps, "__proto__").get;
        isGetter(second) || !isData(second) && isGetter(first) ? "function" : "undefined";
        "\n" + hcode;
      } else {
        if (!isProtoMutation(third)) {
          hasOwn(threeProps, "__proto__");
          true;
          typeof threeProps.__proto__;
          typeOfProto(third);
          first + ", " + second + ", " + third;

          if (isGetter(third)) {
            var desc = Object.getOwnPropertyDescriptor(threeProps, "__proto__");
            typeof desc.get;
            "function";
            typeof desc.set;
            isSetter(second) || !isData(second) && isSetter(first) ? "function" : "undefined";
          }
        } else {
          if (isSetter(second)) {
            hasOwn(threeProps, "__proto__");
            true;
            typeof Object.getOwnPropertyDescriptor(threeProps, "__proto__").get;
            isGetter(first) ? "function" : "undefined";
          } else {
            if (!isProtoMutation(second)) {
              hasOwn(threeProps, "__proto__");
              true;
              typeof threeProps.__proto__;
              typeOfProto(second);

              if (isGetter(second)) {
                var desc = Object.getOwnPropertyDescriptor(threeProps, "__proto__");
                typeof desc.get;
                "function";
                typeof desc.set;
                isSetter(first) ? "function" : "undefined";
              }
            } else {
              true;
              false;
              "should be unreachable: " + first + ", " + second + ", " + third;
            }
          }
        }
      }
    }
  }
}
/******************************************************************************/


if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
