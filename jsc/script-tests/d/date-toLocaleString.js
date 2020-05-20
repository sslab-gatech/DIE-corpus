//@ skip if $hostOS == "windows"
console.log("This test checks the behavior of Date.prototype.toLocaleString as described in the ECMAScript Internationalization API Specification (ECMA-402 2.0).");
Date.prototype.toLocaleString.length;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleString').enumerable;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleString').configurable;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleString').writable; // Test thisTimeValue abrupt completion.

try {
  Date.prototype.toLocaleString.call(new Date());
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call();
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call(undefined);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call(null);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call(0);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call(NaN);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call(Infinity);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call('1');
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call({});
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call([]);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleString.call(Symbol());
} catch (e) {
  ;
}

typeof new Date().toLocaleString() === 'string';
new Date(NaN).toLocaleString(); // Test for DateTimeFormat behavior.
// Test that locale parameter is passed through properly.

try {
  new Date().toLocaleString('i');
} catch (e) {
  ;
}

new Date(0).toLocaleString('zh-Hans-CN-u-nu-hanidec', {
  timeZone: 'UTC'
}); // Defaults to mdy, hms

new Date(0).toLocaleString('en', {
  timeZone: 'UTC'
}); // Test that options parameter is passed through properly.

try {
  new Date(0).toLocaleString('en', null);
} catch (e) {
  ;
}

new Date(0).toLocaleString('en', {
  timeZone: 'UTC',
  hour: 'numeric',
  minute: '2-digit'
});
new Date(0).toLocaleString('en', {
  timeZone: 'UTC',
  year: 'numeric',
  month: 'long'
}); // Test toLocaleDateString ()

Date.prototype.toLocaleDateString.length;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleDateString').enumerable;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleDateString').configurable;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleDateString').writable; // Test thisTimeValue abrupt completion.

try {
  Date.prototype.toLocaleDateString.call(new Date());
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call();
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call(undefined);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call(null);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call(0);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call(NaN);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call(Infinity);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call('1');
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call({});
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call([]);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleDateString.call(Symbol());
} catch (e) {
  ;
}

typeof new Date().toLocaleDateString() === 'string';
new Date(NaN).toLocaleDateString(); // Test for DateTimeFormat behavior.
// Test that locale parameter is passed through properly.

try {
  new Date().toLocaleDateString('i');
} catch (e) {
  ;
}

new Date(0).toLocaleDateString('zh-Hans-CN-u-nu-hanidec', {
  timeZone: 'UTC'
}); // Defaults to mdy

new Date(0).toLocaleDateString('en', {
  timeZone: 'UTC'
}); // Test that options parameter is passed through properly.

try {
  new Date(0).toLocaleDateString('en', null);
} catch (e) {
  ;
} // Adds mdy if no date formats specified.


new Date(0).toLocaleDateString('en', {
  timeZone: 'UTC',
  hour: 'numeric',
  minute: '2-digit'
}); // If any date formats specified, just use them.

new Date(0).toLocaleDateString('en', {
  timeZone: 'UTC',
  year: 'numeric',
  month: 'long'
}); // Test toLocaleTimeString ()

Date.prototype.toLocaleTimeString.length;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleTimeString').enumerable;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleTimeString').configurable;
Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleTimeString').writable; // Test thisTimeValue abrupt completion.

try {
  Date.prototype.toLocaleTimeString.call(new Date());
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call();
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call(undefined);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call(null);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call(0);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call(NaN);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call(Infinity);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call('1');
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call({});
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call([]);
} catch (e) {
  ;
}

try {
  Date.prototype.toLocaleTimeString.call(Symbol());
} catch (e) {
  ;
}

typeof new Date().toLocaleTimeString() === 'string';
new Date(NaN).toLocaleTimeString(); // Test for DateTimeFormat behavior.
// Test that locale parameter is passed through properly.

try {
  new Date().toLocaleTimeString('i');
} catch (e) {
  ;
}

new Date(0).toLocaleTimeString('zh-Hans-CN-u-nu-hanidec', {
  timeZone: 'UTC'
}); // Defaults to hms

new Date(0).toLocaleTimeString('en', {
  timeZone: 'UTC'
}); // Test that options parameter is passed through properly.

try {
  new Date(0).toLocaleTimeString('en', null);
} catch (e) {
  ;
} // If time formats specifed, just use them.


new Date(0).toLocaleTimeString('en', {
  timeZone: 'UTC',
  hour: 'numeric',
  minute: '2-digit'
}); // Adds hms if no time formats specified.

new Date(0).toLocaleTimeString('en', {
  timeZone: 'UTC',
  year: 'numeric',
  month: 'long'
});
