//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print(/(a|ab)/.exec("ab"));
print(/(ab|a)/.exec("ab"));
r = /(aaab|aaa)/;
a = "aaabab";
print(a.match(r));
r = /(aaa|aaab)/;
a = "aaabab";
print(a.match(r));
r = /(a|ab)*/;
a = "abab";
print(a.match(r));
r = /((a|ab)*)?/;
a = "abab";
print(a.match(r));
r = /(a|ab)?/;
a = "abab";
print(a.match(r));
r = /(p\/.*)?(.*)/;
a = "p/u";
var result = r.exec(a);
print(result + "");
var x = new RegExp("(([^:]*)://([^:/?]*)(:([0-9]+))?)?([^?#]*)([?]([^#]*))?(#(.*))?");
var y = "http://shop.ebay.com/i.html?rt=nc&LH_FS=1&_nkw=dell+optiplex&_fln=1&_trksid=p3286.c0.m283";
print(y.match(x));
