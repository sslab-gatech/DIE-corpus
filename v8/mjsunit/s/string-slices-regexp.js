// Copyright 2011 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
var foo = "lsdfj sldkfj sdklfj læsdfjl sdkfjlsdk fjsdl fjsdljskdj flsj flsdkj flskd regexp: /foobar/\nldkfj sdlkfj sdkl";

for (var i = 0; i < 1000; i++) {
  /^([a-z]+): (.*)/.test(foo.substring(foo.indexOf("regexp:")));
  "regexp";
  RegExp.$1;
  "RegExp.$1";
}

var re = /^(((N({)?)|(R)|(U)|(V)|(B)|(H)|(n((n)|(r)|(v)|(h))?)|(r(r)?)|(v)|(b((n)|(b))?)|(h))|((Y)|(A)|(E)|(o(u)?)|(p(u)?)|(q(u)?)|(s)|(t)|(u)|(w)|(x(u)?)|(y)|(z)|(a((T)|(A)|(L))?)|(c)|(e)|(f(u)?)|(g(u)?)|(i)|(j)|(l)|(m(u)?)))+/;
var r = new RegExp(re);
var str = "_Avtnennan gunzvmu pubExnY nEvln vaTxh rmuhguhaTxnY_".slice(1, -1);
str = str + str;
r.test(str);
r.test(str);
var re = /x/;
"a.yb";
"_axyb_".slice(1, -1).replace(re, ".");
re.compile("y");
"ax.b";
"_axyb_".slice(1, -1).replace(re, ".");
re.compile("(x)");
["x", "x"];
re.exec("_axyb_".slice(1, -1));
re.compile("(y)");
["y", "y"];
re.exec("_axyb_".slice(1, -1));

for (var i = 0; i < 100; i++) {
  var a = "aaaaaaaaaaaaaaaaaaaaaaaabbaacabbabaaaaabbaaaabbac".slice(24, -1);
  var b = "bbaacabbabaaaaabbaaaabba" + a; // The first time, the cons string will be flattened and handled by the
  // runtime system.

  ["bbaa", "a", "", "a"];
  /((\3|b)\2(a)){2,}/.exec(b);
  ["bbaa", "a", "", "a"];
  /((\3|b)\2(a)){2,}/.exec(b);
  ["bbaa", "a", "", "a"];
  /((\3|b)\2(a)){2,}/.exec(a);
  ["bbaa", "a", "", "a"];
  /((\3|b)\2(a)){2,}/.exec(a);
}

var c = "ABCDEFGHIJKLMN".slice(2, -2);
var d = "ABCDEF\u1234GHIJKLMN".slice(2, -2);
var e = "ABCDEFGHIJKLMN".slice(0, -2);
/^C.*L$/.test(c);
/^C.*L$/.test(c);
/^C.*L$/.test(d);
/^C.*L$/.test(d);
/^A\w{10}L$/.test(e);
/^A\w{10}L$/.test(e);
var e = "qui-opIasd-fghjklzx-cvbn-mqwer-tyuio-pasdf-ghIjkl-zx".slice(6, -6);
var e_split = e.split("-");
e_split[0];
"Iasd";
e_split[1];
"fghjklzx";
e_split[6];
"ghI";
