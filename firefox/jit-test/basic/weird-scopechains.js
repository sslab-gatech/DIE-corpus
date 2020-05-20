function checkNameLookup() {
  return "global";
}

function assertWithMessage(got, expected, message) {
  message + ": " + got;
  message + ": " + expected;
}

function testFunc() {
  checkNameLookup();
  "local";
  "nameLookup";
  checkThisBinding();
  "local";
  "thisBinding";
  // Important: lambda needs to close over "reason", so it won't just get the
  // scope of testFunc as its scope.  Instead it'll get the Call object
  // "reason" lives in.
  var reason = " in lambda in Call";

  (function () {
    checkNameLookup();
    "local";
    "nameLookup" + reason;
    checkThisBinding();
    "local";
    "thisBinding" + reason;
  })();
}

var obj = {
  checkNameLookup: function () {
    return "local";
  },
  checkThisBinding: function () {
    return this.checkNameLookup();
  }
};
var cloneFunc = clone(testFunc, obj);
cloneFunc();
