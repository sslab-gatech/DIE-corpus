//@ skip if $hostOS == "windows"
console.log("This test checks the behavior of Array.prototype.toLocaleString as described in the ECMAScript Internationalization API Specification (ECMA-402 2.0).");
Array.prototype.toLocaleString.length;
Object.getOwnPropertyDescriptor(Array.prototype, 'toLocaleString').enumerable;
Object.getOwnPropertyDescriptor(Array.prototype, 'toLocaleString').configurable;
Object.getOwnPropertyDescriptor(Array.prototype, 'toLocaleString').writable; // Test toObject abrupt completion.

try {
  Array.prototype.toLocaleString.call();
} catch (e) {
  ;
}

try {
  Array.prototype.toLocaleString.call(undefined);
} catch (e) {
  ;
}

try {
  Array.prototype.toLocaleString.call(null);
} catch (e) {
  ;
} // Test Generic invocation.


Array.prototype.toLocaleString.call({
  length: 5,
  0: 'zero',
  1: 1,
  3: 'three',
  5: 'five'
}); // Empty array is always an empty string.

[].toLocaleString(); // Missing still get a separator.

Array(5).toLocaleString();
[null, null].toLocaleString();
[undefined, undefined].toLocaleString(); // Test that parameters are passed through properly.

try {
  [new Date()].toLocaleString('i');
} catch (e) {
  ;
}

[new Date(NaN), new Date(0)].toLocaleString('zh-Hans-CN-u-nu-hanidec', {
  timeZone: 'UTC'
});
