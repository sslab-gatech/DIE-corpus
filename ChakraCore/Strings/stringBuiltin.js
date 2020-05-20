//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Test : var ss = new String(\"String123456EndString\");");
var ss = new String("String123456EndString");
st = ss.substring(3, 4);
print("ss.substring(3,4):  " + st);
st = ss.substring();
print("ss.substring():  " + st);
st = ss.substring(6, 2);
print("ss.substring(6,2):  " + st);
st = ss.substring(-6, 2);
print("ss.substring(-6,2):  " + st);
st = ss.substr(-6, 2);
print("ss.substr(-6,2):  " + st);
st = ss.substr(-1, 4);
print("ss.substr(-1,4):  " + st);
st = ss.slice(2, 7);
print("ss.slice(2, 7):  " + st);
st = ss.slice();
print("ss.slice():  " + st);
print("Test : var ss = new String(\"a\");");
ss = new String("a");
st = ss.substring(3, 4);
print("ss.substring(3,4):  " + st);
st = ss.substring();
print("ss.substring():  " + st);
st = ss.substring(6, 2);
print("ss.substring(6,2):  " + st);
st = ss.substring(-6, 2);
print("ss.substring(-6,2):  " + st);
st = ss.substr(-6, 2);
print("ss.substr(-6,2):  " + st);
st = ss.substr(-1, 4);
print("ss.substr(-1,4):  " + st); //implicit calls

var a = 1;
var b = 2;
var obj = {
  toString: function () {
    a = 3;
    return "Hello World";
  }
};
a = b;
Object.prototype.substr = String.prototype.substr;
var f = obj.substr(2, 3);
print(a);
st = ss.slice(2, 7);
print("ss.slice(2, 7):  " + st);
st = ss.slice();
print("ss.slice():  " + st); //implicit calls

var a = 1;
var b = 2;
var obj = {
  toString: function () {
    a = 3;
    return "Hello World";
  }
};
a = b;
Object.prototype.slice = String.prototype.slice;
var f = obj.slice();
print(a);
print("Test : var ss = new String(\"abcdefg123456qweeeeaatt\");");
ss = new String("abcdefg123456qweeeeaatt");
st = ss.replace("g12", "******");
print("ss.replace():  " + st);
print("Test : var ss = new String(\"abcdefg1\" + \"23456qweeeeaatt\");");
ss = new String("abcdefg1" + "23456qweeeeaatt");
st = ss.replace("g12", "+++++");
print("ss.replace():  " + st);
print("Test : var ss = new String(\"abcdefg123456qweeeeaatt\");");
ss = new String("abcdefg123456qweeeeaatt");
st = ss.indexOf("g123");
print("ss.indexOf(\"g123\"):  " + st);
print("Test : var ss = new String(\"abcdefg1\" + \"23456qweeeeaatt\");");
ss = new String("abcdefg1" + "23456qweeeeaatt");
st = ss.indexOf("g123");
print("ss.indexOf(\"g123\"):  " + st);
print("Test : var ss = new String(\"0123456789\" + \"abcde\" + \"\" + \"fghijk\" + \"lmnoprs\");");
ss = new String("0123456789" + "abcde" + "" + "fghijk" + "lmnoprs");
st = ss.indexOf("89ab", 4);
print("ss.indexOf(\"89ab\", 4):  " + st);
st = ss.indexOf("def", 11);
print("ss.indexOf(\"def\", 11):  " + st);
st = ss.indexOf("klm", 15);
print("ss.indexOf(\"klm\", 15):  " + st);
print("Test : var ss = new String(\"0123\" + \"0123456789\" + \"\" + \"01234567\" + \"234567\");");
ss = new String("0123" + "0123456789" + "" + "01234567" + "234567");
st = ss.indexOf("0123012");
print("ss.indexOf(\"0123012\"):  " + st);
st = ss.indexOf("23", 1);
print("ss.indexOf(\"23\", 1):  " + st);
st = ss.indexOf("23", 5);
print("ss.indexOf(\"23\", 5):  " + st);
st = ss.indexOf("23", 10);
print("ss.indexOf(\"23\", 10):  " + st);
print("Test : var ss = new String(\"0123\" + \"0123456789\" + \"\" + \"hideundefined01234567\" + \"234567\");");
ss = new String("0123" + "0123456789" + "" + "hideundefined01234567" + "234567");
st = ss.indexOf();
print("ss.indexOf():  " + st);
print("Test : var ss = new String(\"aaccca\" + \"bbcccb\" +\"cccc\"+\"0123\" + \"0123456789\" + \"\" + \"hideundefined01234567\" + \"234567\");");
ss = new String("aaccca" + "bbcccb" + "cccc" + "0123" + "0123456789" + "" + "hideundefined01234567" + "234567");
st = ss.indexOf("6789" + "" + "hideundefined01234567" + "2345", 2);
print("ss.indexOf(\"6789\" + \"\" + \"hideundefined01234567\" + \"2345\", 2):  " + st);
print("Test : var ss = new String(\"abcdefg123456qweeeeaatt\");");
ss = new String("abcdefg123456qweeeeaatt");
st = ss.lastIndexOf("g123");
print("ss.lastIndexOf(\"g123\"):  " + st);
print("Test : var ss = new String(\"abcdefg1\" + \"23456qweeeeaatt\");");
ss = new String("abcdefg1" + "23456qweeeeaatt");
st = ss.lastIndexOf("g123");
print("ss.lastIndexOf(\"g123\"):  " + st);
print("Test : var ss = new String(\"0123456789\" + \"abcde\" + \"\" + \"fghijk\" + \"lmnoprs\");");
ss = new String("0123456789" + "abcde" + "" + "fghijk" + "lmnoprs");
st = ss.lastIndexOf("89ab", 4);
print("ss.lastIndexOf(\"89ab\", 4):  " + st);
st = ss.lastIndexOf("def", 18);
print("ss.lastIndexOf(\"def\", 18):  " + st);
st = ss.lastIndexOf("klm", 15);
print("ss.lastIndexOf(\"klm\", 15):  " + st);
print("Test : var ss = new String(\"0123\" + \"0123456789\" + \"\" + \"01234567\" + \"234567\");");
ss = new String("0123" + "0123456789" + "" + "01234567" + "234567");
st = ss.lastIndexOf("0123012");
print("ss.lastIndexOf(\"0123012\"):  " + st);
st = ss.lastIndexOf("23", 1);
print("ss.lastIndexOf(\"23\", 1):  " + st);
st = ss.lastIndexOf("23", 5);
print("ss.lastIndexOf(\"23\", 5):  " + st);
st = ss.lastIndexOf("23", 10);
print("ss.lastIndexOf(\"23\", 10):  " + st);
print("Test : var ss = new String(\"0123\" + \"0123456789\" + \"\" + \"hideundefined01234567\" + \"234567\");");
ss = new String("0123" + "0123456789" + "" + "hideundefined01234567" + "234567");
st = ss.lastIndexOf();
print("ss.lastIndexOf():  " + st);
print("Test : var ss = new String(\"String123456EndString\");");
var ss = new String("String123456EndString");
st = ss.search("234");
print("ss.search(\"234\"):  " + st);
st = ss.search(/234/);
print("ss.search(\/234\/):  " + st); //implicit calls

var a = 1;
var b = 2;
var obj = {
  toString: function () {
    a = 3;
    return "Hello World";
  }
};
a = b;
Object.prototype.search = String.prototype.search;
var f = obj.search("ell");
print(a); //st = ss.search(/[e-m]+/);
//print("ss.search(\/6.d\/):  " + st);
//st = ss.search(/\d{2,4}/);
//print("ss.search(\/\\d{2,4}):  " + st);

print("Test : var ss = new String(\"AAAAAAAAAAbbbbbbbbbb\");");
var ss = new String("AAAAAAAAAAbbbbbbbbbb");
var st = ss.toLowerCase();
print("ss.toLowerCase():  " + st);
print("Test big string");
ss = new String("AAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbb" + "AAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbbAAAAAAAAAAbbbbbbbbbb");
st = ss.toUpperCase();
print("ss.toUpperCase():  " + st); //implicit calls

var a = 1;
var b = 2;
var obj = {
  toString: function () {
    a = 3;
    return "Hello World";
  }
};
a = b;
Object.prototype.toUpperCase = String.prototype.toUpperCase;
var f = obj.toUpperCase();
print(a);
