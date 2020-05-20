function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, message) {
  var error = null;

  try {
    func();
  } catch (e) {
    error = e;
  }
}

function testSloppy(string) {
  string[0] = 52;
  shouldBe(string[0], 'C');
  string[100] = 52;
  shouldBe(string[100], 52);
}

function testStrict(string) {
  'use strict';

  shouldThrow(() => {
    string[0] = 52;
  }, `TypeError: Attempted to assign to readonly property.`);
  shouldBe(string[0], 'C');
  string[100] = 52;
  shouldBe(string[100], 52);
}

testSloppy(new String("Cocoa"));
testStrict(new String("Cocoa"));
