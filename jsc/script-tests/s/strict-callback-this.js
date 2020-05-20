console.log("This tests that a call to array/string prototype methods pass the correct this value (undefined) to strict callees.");
var undefinedString = String(undefined);
var globalObjectString = String(this);

function strictThrowThisString() {
  "use strict";

  throw String(this);
}

function nonstrictThrowThisString() {
  throw String(this);
}

function testArrayPrototypeSort(callback) {
  try {
    [1, 2].sort(callback);
  } catch (e) {
    return e;
  }

  return "FAILED";
}

function testArrayPrototypeFilter(callback) {
  try {
    [1, 2].filter(callback);
  } catch (e) {
    return e;
  }

  return "FAILED";
}

function testArrayPrototypeMap(callback) {
  try {
    [1, 2].map(callback);
  } catch (e) {
    return e;
  }

  return "FAILED";
}

function testArrayPrototypeEvery(callback) {
  try {
    [1, 2].every(callback);
  } catch (e) {
    return e;
  }

  return "FAILED";
}

function testArrayPrototypeForEach(callback) {
  try {
    [1, 2].forEach(callback);
  } catch (e) {
    return e;
  }

  return "FAILED";
}

function testArrayPrototypeSome(callback) {
  try {
    [1, 2].some(callback);
  } catch (e) {
    return e;
  }

  return "FAILED";
}

function testStringPrototypeReplace(callback) {
  try {
    "1,2".replace('1', callback);
  } catch (e) {
    return e;
  }

  return "FAILED";
}

testArrayPrototypeSort(strictThrowThisString);
testArrayPrototypeFilter(strictThrowThisString);
testArrayPrototypeMap(strictThrowThisString);
testArrayPrototypeEvery(strictThrowThisString);
testArrayPrototypeForEach(strictThrowThisString);
testArrayPrototypeSome(strictThrowThisString);
testStringPrototypeReplace(strictThrowThisString);
testArrayPrototypeSort(nonstrictThrowThisString);
testArrayPrototypeFilter(nonstrictThrowThisString);
testArrayPrototypeMap(nonstrictThrowThisString);
testArrayPrototypeEvery(nonstrictThrowThisString);
testArrayPrototypeForEach(nonstrictThrowThisString);
testArrayPrototypeSome(nonstrictThrowThisString);
testStringPrototypeReplace(nonstrictThrowThisString);
