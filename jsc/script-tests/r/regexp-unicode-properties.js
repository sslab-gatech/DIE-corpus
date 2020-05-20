console.log('Test for of RegExp Unicode properties');
let src1 = "";

for (let c = 1; c <= 0x7f; c++) {
  src1 += String.fromCharCode(c);
}

let re1 = new RegExp("\\p{ASCII}*", "u");
var matchResult1 = src1.match(re1);
matchResult1[0];
let src2 = "p{Any-Old-Property}";
let re2 = /\p{Any-Old-Property}/;
re2.test(src2);

try {
  /\p{Any-Old-Property}/u.test(src2);
} catch (e) {
  ;
}

try {
  /\p{Script=Hebrew/u.test("Testing");
} catch (e) {
  ;
}

try {
  /\p{Hebrew/u.test("Testing");
} catch (e) {
  ;
}

try {
  /\p{Hebrew}/u.test("Testing");
} catch (e) {
  ;
}

try {
  /\p{Letter/u.test("Testing");
} catch (e) {
  ;
}

try {
  /\p{Cc/u.test("Testing");
} catch (e) {
  ;
}

let src3 = "DeadBeef4A11";
let re3a = /\p{ASCII_Hex_Digit}*/u;
src3.match(re3a)[0];
let re3b = /\p{AHex}*/u;
src3.match(re3b)[0];
let src4 = "The Rain In Spain Falls Mainly on THE Plains.";
let re4a = /\p{General_Category=Uppercase_Letter}/ug;
let exp4 = ["T", "R", "I", "S", "F", "M", "T", "H", "E", "P"];
src4.match(re4a);
let re4c = /\p{General_Category=Lu}/ug;
src4.match(re4c);
let re4d = /\p{gc=Lu}/ug;
src4.match(re4d);
let re4e = /\p{Uppercase_Letter}/ug;
src4.match(re4e);
let re4f = /\p{Lu}/ug;
src4.match(re4f);
let src5 = "SOME LOWER CASE: abdudtrj\u017f\u00ba\u2147\ua739\u{118c4}";
let re5a = /\p{Lowercase}+/u;
src5.match(re5a)[0];
let re5b = /\p{Lowercase_Letter}+/u;
src5.match(re5b)[0];
let re5c = /\P{Lowercase_Letter}+/u;
src5.match(re5c)[0];
let src6 = "The Greek word \u03bb\u03cc\u03b3\u03bf\u03c2 means \"reason\".";
let re6a = /\p{Script_Extensions=Grek}+/u;
re6a.exec(src6)[0];
let re6b = /\P{Script_Extensions=Grek}+/u;
re6b.exec(src6)[0];
let re6c = /[ \p{Script=Latin}\p{Script_Extensions=Grek}]+/u;
re6c.exec(src6)[0];
let src7a = "2 + 2 = 4";
let re7a = /\p{Math}/u;
re7a.exec(src7a)[0];
let re7b = /[\p{Math}]+/u;
re7b.exec(src7a)[0];
let re7c = /[\p{Number}\p{Math}]+/u;
re7c.exec(src7a)[0];
let re7d = /[\p{Number}\p{Math}\p{space}]+/u;
re7d.exec(src7a)[0];
let src7b = "2 ^ .5 = 1.4142135";
re7d.exec(src7b)[0];
let re7e = /[\p{Number}\p{Math}\p{space}\.]+/u;
re7e.exec(src7b)[0];
let src7c = "2 \u00f7 3 = ~0.666666";
re7e.exec(src7c)[0];
let re7f = /[\p{N}\{No}\p{Math}\p{space}\.]+/u;
let src7d = "5\u00b3 + 3\u00b2 = 134";
re7f.exec(src7d)[0];
let re7g = /[\p{Math}]+/ug;
src7d.match(re7g);
let src8 = "Hello is \u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd in Tamil";
let re8a = /[\p{Script_Extensions=Taml}]+/u;
re8a.exec(src8)[0];
let re8b = /[\p{Script_Extensions=Latn}\p{Script_Extensions=Taml} ]+/u;
re8b.exec(src8)[0];
