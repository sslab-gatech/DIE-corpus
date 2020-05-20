//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("typeof (new String()) : " + typeof new String(""));
print("typeof () : " + typeof "");
print("typeof (new Boolean(false)) : " + typeof new Boolean(false));
print("typeof (false) : " + typeof false);
print("typeof (new Number(0)) : " + typeof new Number(0));
print("typeof (0) : " + typeof 0);
print("typeof (new Number(12345.678)) : " + typeof new Number(12345.678));
print("typeof (12345.678) : " + typeof 12345.678);

function f() {
  function g() {
    ;
  }

  return g;
}

print("typeof function : " + typeof f);
print("typeof function returning function : " + typeof f());

function exc() {
  try {
    print(q);
  } catch (e) {
    print("Caught JS error on undefined var");
    print(typeof q);
  }
}

exc();
var x = {};
print("typeof empty obj : " + typeof x);
print("typeof obj : " + typeof new Object());
var y = [];
y[0] = 0;
print("typeof array element with number : " + typeof y[0]);
print("typeof undef element array : " + typeof y[1]);
print("typeof array : " + typeof y);
var verr = new Error("aaa");
print("typeof (err) : " + typeof verr);
var vDate = new Date(123);
print("typeof ( new Date) : " + typeof vDate);
print("typeof (new Array()) : " + typeof new Array());
var regx = /abc/;
print("typeof(regex) : " + typeof regx);
var s;
var map = {};

function CEvent() {
  do {
    ;
  } while (typeof (s = map.x) != "undefined");
}

CEvent();
