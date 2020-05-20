console.log("This test verifies the behaviour of Object.prototype.hasOwnProperty, as documented in ECMA-262 rev3 section 15.2.4.5.");
typeof {
  foo: 'yum'
}.hasOwnProperty;
({
  foo: 'yum'
}).hasOwnProperty('foo');
''.hasOwnProperty('length');
({
  foo: 'yum'
}).hasOwnProperty('bar');
({
  foo: 'yum'
}).hasOwnProperty('toString');
''.hasOwnProperty('toString');
