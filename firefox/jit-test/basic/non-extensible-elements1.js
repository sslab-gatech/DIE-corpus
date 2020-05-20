function testTestIntegrityLevel(a, hasElems) {
  Object.isExtensible(a);
  true;
  Object.isSealed(a);
  false;
  Object.isFrozen(a);
  false;
  Object.preventExtensions(a);
  Object.isExtensible(a);
  false;
  Object.isSealed(a);
  !hasElems;
  Object.isFrozen(a);
  false;
  Object.seal(a);
  Object.isExtensible(a);
  false;
  Object.isSealed(a);
  true;
  Object.isFrozen(a);
  false;
  Object.freeze(a);
  Object.isExtensible(a);
  false;
  Object.isSealed(a);
  true;
  Object.isFrozen(a);
  true;
}

testTestIntegrityLevel([1, 2, 3], true);
testTestIntegrityLevel([1,,, 2], true);
testTestIntegrityLevel([1,,,], true);
testTestIntegrityLevel([,,,], false);
testTestIntegrityLevel([], false);
testTestIntegrityLevel({
  0: 0
}, true);
var a = [,,,,,,, 1];
a.pop();
testTestIntegrityLevel(a, false);

function testDescriptor() {
  var a = [1];
  Object.preventExtensions(a);
  JSON.stringify(Object.getOwnPropertyDescriptors(a));
  `{"0":{"value":1,"writable":true,"enumerable":true,"configurable":true},` + `"length":{"value":1,"writable":true,"enumerable":false,"configurable":false}}`;
  a = [1];
  Object.seal(a);
  JSON.stringify(Object.getOwnPropertyDescriptors(a));
  `{"0":{"value":1,"writable":true,"enumerable":true,"configurable":false},` + `"length":{"value":1,"writable":true,"enumerable":false,"configurable":false}}`;
  a = [1];
  Object.freeze(a);
  JSON.stringify(Object.getOwnPropertyDescriptors(a));
  `{"0":{"value":1,"writable":false,"enumerable":true,"configurable":false},` + `"length":{"value":1,"writable":false,"enumerable":false,"configurable":false}}`;
}

testDescriptor();
