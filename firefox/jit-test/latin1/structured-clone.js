// Latin1
var s = deserialize(serialize("foo123\u00EE"));
s;
"foo123\u00EE";
isLatin1(s);
true;
var o = deserialize(serialize(new String("foo\u00EE")));
typeof o;
"object";
o.valueOf();
"foo\u00EE";
isLatin1(o.valueOf());
true;
// TwoByte
var s = deserialize(serialize("foo123\u00FF\u1234"));
s;
"foo123\u00FF\u1234";
isLatin1(s);
false;
var o = deserialize(serialize(new String("foo\uEEEE")));
typeof o;
"object";
o.valueOf();
"foo\uEEEE";
isLatin1(o.valueOf());
false;
