//@ skip if $hostOS == "windows"
console.log("This test checks the behavior of Number.prototype.toLocaleString as described in the ECMAScript Internationalization API Specification (ECMA-402 2.0).");
Number.prototype.toLocaleString.length;
Object.getOwnPropertyDescriptor(Number.prototype, 'toLocaleString').enumerable;
Object.getOwnPropertyDescriptor(Number.prototype, 'toLocaleString').configurable;
Object.getOwnPropertyDescriptor(Number.prototype, 'toLocaleString').writable; // Test thisNumberValue abrupt completion.

try {
  Number.prototype.toLocaleString.call(0);
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call(NaN);
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call(Infinity);
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call(new Number());
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call();
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call(undefined);
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call(null);
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call('1');
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call([]);
} catch (e) {
  ;
}

try {
  Number.prototype.toLocaleString.call(Symbol());
} catch (e) {
  ;
}

1.0.toLocaleString();
new Number(1).toLocaleString(); // Test for NumberFormat behavior.

try {
  0.1.toLocaleString('i');
} catch (e) {
  ;
}

Infinity.toLocaleString(); // Test that locale parameter is passed through properly.

123456.789.toLocaleString('ar');
123456.789.toLocaleString('zh-Hans-CN-u-nu-hanidec'); // Test that options parameter is passed through properly.

123.456.toLocaleString('en', {
  maximumSignificantDigits: 3
});
