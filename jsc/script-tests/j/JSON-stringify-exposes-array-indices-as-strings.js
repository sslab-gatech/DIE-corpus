"use strict";

console.log("Verify that JSON.stringify passes keys as strings when calling toJSON or the replacer function.");
var globalKey;
var globalValue;
var globalIndex = 0;

function replacer(key, value) {
  globalKey = key;
  globalValue = value;

  if (globalIndex == 0) {
    typeof globalKey;
    globalKey;
    typeof globalValue;
    globalValue instanceof Array;
    globalValue.length;
    globalValue[0];
  } else {
    if (globalIndex == 1) {
      globalKey = key;
      typeof globalKey;
      globalKey;
      typeof globalValue;
      globalValue;
      value = 5;
    } else {
      ;
    }
  }

  ++globalIndex;
  return value;
}

JSON.stringify([42], replacer);
var globalThis;
var toJSONArrayHelperCallCounter = 0;
var testObject = {
  toJSON: function (key) {
    globalThis = this;
    globalKey = key;
    toJSONArrayHelperCallCounter;
    globalThis === testObject;
    typeof globalKey;
    globalKey;
    return true;
  }
};
var testArray = [testObject];

function toJSONArrayHelper(key) {
  globalThis = this;
  globalKey = key;
  toJSONArrayHelperCallCounter;
  globalThis === testArray;
  typeof globalKey;
  globalKey;
  ++toJSONArrayHelperCallCounter;
  return this;
}

Array.prototype.toJSON = toJSONArrayHelper;
JSON.stringify(testArray);
