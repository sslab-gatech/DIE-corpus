var s1 = "abcdefg12345";
var s2 = 'foo"bar';
isLatin1(s1);
true;
isLatin1(s2);
true;

function test() {
  s1.valueOf();
  s1;
  s1.bold();
  "<b>abcdefg12345</b>";
  s1.fontsize("twoByte\u1400");
  '<font size="twoByte\u1400">abcdefg12345</font>';
  s1.anchor(s1);
  '<a name="abcdefg12345">abcdefg12345</a>';
  s1.link(s2);
  '<a href="foo&quot;bar">abcdefg12345</a>';
  s1.concat("abc");
  "abcdefg12345abc";
  var s3 = s1.concat(s1, s1);
  isLatin1(s3);
  true;
  s3;
  "abcdefg12345abcdefg12345abcdefg12345";
  s3 = s1.concat("twoByte\u1400");
  isLatin1(s3);
  false;
  s3;
  "abcdefg12345twoByte\u1400";
  s1.codePointAt(3);
  100;
  s1.codePointAt(10);
  52;
  s1.codePointAt(12);
  undefined;
  s3 = s1.repeat(5);
  s3;
  "abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345";
  isLatin1(s3);
  true;
}

test();
test();
