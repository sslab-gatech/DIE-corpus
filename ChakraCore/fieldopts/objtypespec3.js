//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
Object.prototype.prop0 = 100;

Object.prototype.method0 = function () {
  return 100;
};

function SimpleObject() {
  ;
}

function test1a(o) {
  return o.prop0;
}

print(test1a(new SimpleObject()));
print(test1a(new SimpleObject()));
print(test1a(new SimpleObject()));
print(test1a(1));

function test1b(o) {
  return o.method0();
}

print(test1b(new SimpleObject()));
print(test1b(new SimpleObject()));
print(test1b(new SimpleObject()));
print(test1b(1));

function test2a(o) {
  return o.prop0;
}

print(test2a(new SimpleObject()));
print(test2a(new SimpleObject()));
print(test2a(new SimpleObject()));
print(test2a(0.5));

function test2b(o) {
  return o.method0();
}

print(test2b(new SimpleObject()));
print(test2b(new SimpleObject()));
print(test2b(new SimpleObject()));
print(test2b(0.5));

function test3a(o) {
  return o.prop0;
}

print(test3a(new SimpleObject()));
print(test3a(new SimpleObject()));
print(test3a(new SimpleObject()));
print(test3a(Math.max(0x5a827999, -262144)));

function test3b(o) {
  return o.method0();
}

print(test3b(new SimpleObject()));
print(test3b(new SimpleObject()));
print(test3b(new SimpleObject()));
print(test3b(Math.max(0x5a827999, -262144)));

function test4a(o) {
  return o.prop0;
}

print(test4a(new SimpleObject()));
print(test4a(new SimpleObject()));
print(test4a(new SimpleObject()));
print(test4a(Math.max(0.5, -262144)));

function test4b(o) {
  return o.method0();
}

print(test4b(new SimpleObject()));
print(test4b(new SimpleObject()));
print(test4b(new SimpleObject()));
print(test4b(Math.max(0.5, -262144)));
