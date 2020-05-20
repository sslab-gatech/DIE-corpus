//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(String.prototype.hasOwnProperty('padStart'));
  console.log(String.prototype.hasOwnProperty('padEnd'));
  console.log(1, String.prototype.padStart.length);
  console.log(1, String.prototype.padEnd.length);
  console.log("padStart", String.prototype.padStart.name);
  console.log("padEnd", String.prototype.padEnd.name);
  var descriptor = Object.getOwnPropertyDescriptor(String.prototype, 'padStart');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  descriptor = Object.getOwnPropertyDescriptor(String.prototype, 'padEnd');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t1();

function t2() {
  console.log('foo'.padStart(), 'foo');
  console.log('foo'.padStart(1), 'foo');
  console.log('foo'.padStart(-1), 'foo');
  console.log('foo'.padStart(3), 'foo');
  console.log('foo'.padStart(4), ' foo');
  console.log('foo'.padStart(10), '       foo');
  console.log('foo'.padStart(10, ''), 'foo');
  console.log('foo'.padStart(10, undefined), '       foo');
  console.log('foo'.padStart(10, ' '), '       foo');
  console.log('foo'.padStart(4, '123'), '1foo');
  console.log('foo'.padStart(10, '123'), '1231231foo');
}

t2();

function t3() {
  console.log('foo'.padEnd(), 'foo');
  console.log('foo'.padEnd(1), 'foo');
  console.log('foo'.padEnd(-1), 'foo');
  console.log('foo'.padEnd(3), 'foo');
  console.log('foo'.padEnd(4), 'foo ');
  console.log('foo'.padEnd(10), 'foo       ');
  console.log('foo'.padEnd(10, ''), 'foo');
  console.log('foo'.padEnd(10, undefined), 'foo       ');
  console.log('foo'.padEnd(10, ' '), 'foo       ');
  console.log('foo'.padEnd(4, '123'), 'foo1');
  console.log('foo'.padEnd(10, '123'), 'foo1231231');
}

t3();

function t4() {
  try {
    {
      'foo'.padStart(2147483647);
    }
  } catch (e) {
    ;
  }

  try {
    {
      'foo'.padEnd(2147483647);
    }
  } catch (e) {
    ;
  }

  try {
    'foo'.padStart(2147483647, '');
  } catch (e) {
    ;
  }

  try {
    'foo'.padEnd(2147483647, '');
  } catch (e) {
    ;
  }

  try {
    'foo'.padStart(2147483647, '');
  } catch (e) {
    ;
  }

  try {
    'foo'.padEnd(2147483647, '');
  } catch (e) {
    ;
  }
}

t4();
