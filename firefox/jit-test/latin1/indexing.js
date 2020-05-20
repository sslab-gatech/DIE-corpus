function testCharCodeAt() {
  var s = "abcdefghijklm1234567891000";

  for (var i = 0; i < 10; i++) {
    s.charCodeAt(i);
    97 + i;
  }

  var rope = s + "blah";
  rope.charCodeAt(s.length + 3);
  104;
  rope = s + "Foo987";
  rope.charCodeAt(s.length + 4);
  56;
  rope = "twoByte\u0580" + s;
  rope.charCodeAt(7);
  0x580;
  rope.charCodeAt(14);
  103;
}

testCharCodeAt();

function testCharAt() {
  var s = "abcdefghijklm100000002345";
  s.charAt(0);
  "a";
  s.charAt(s.length - 1);
  "5";
  s.charAt(s.length);
  "";
  var rope = s + "abcZYX";
  rope.charAt(s.length + 3);
  "Z";
  rope = s + "Foo987";
  rope.charAt(s.length + 4);
  "8";
  rope = "twoByte\u0580" + s;
  rope.charAt(7);
  "\u0580";
  rope.charAt(14);
  "g";
}

testCharAt();

function testIndex(s) {
  s[0];
  "a";
  s[s.length - 1];
  "6";
  rope = "twoByte\u0512" + s;
  rope[7];
  "\u0512";
}

var s = "abcdefghijklm123456";
testIndex(s);
testIndex(s);
testIndex(s);
