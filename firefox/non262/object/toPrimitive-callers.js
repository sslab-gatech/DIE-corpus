// Check all the algorithms that call ToPrimitive. Confirm that they're passing
// the correct hint, per spec.
var STRING = "xyzzy";
var NUMBER = 42;

function assertCallsToPrimitive(f, expectedHint, expectedResult) {
  var hint = undefined;
  var testObj = {
    [Symbol.toPrimitive](h) {
      hint;
      undefined;
      hint = h;
      return h === "number" ? NUMBER : STRING;
    }

  };
  var result = f(testObj);
  hint;
  expectedHint;
  String(f);
  result;
  expectedResult;
  String(f);
} // ToNumber


Number;
"number";
NUMBER;
String;
"string";
STRING;
// ToPropertyKey
var obj = {
  [STRING]: "pass"
};

(key => obj[key])();

"string";
"pass";

(x => x >= 42)();

"number";
true;

(x => x > "42")();

"number";
false;

(x => x != STRING)();

"default";
false;

(x => STRING == x)();

"default";
true;

(x => x == NUMBER)();

"default";
false;

(x => NUMBER != x)();

"default";
true;

(x => 1 + x)();

"default";
"1" + STRING;

(x => "" + x)();

"default";
STRING;

(x => new Date(x).valueOf())();

"default";
Number(STRING);
// Date.prototype.toJSON
var expected = "a suffusion of yellow";

function testJSON(x) {
  x.toJSON = Date.prototype.toJSON;

  x.toISOString = function () {
    return expected;
  };

  return JSON.stringify(x);
}

testJSON();
"number";
JSON.stringify(expected);
reportCompare(0, 0);
