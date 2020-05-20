// Test fast-path for String.split("").
"".split("");
[];
"a".split("");
["a"];
"abc".split("");
["a", "b", "c"];
"abcd".split("", 2);
["a", "b"];
"abcd".split("", 0);
[];
"abcd".split("", -1);
["a", "b", "c", "d"];
"abcd".split(undefined, 0);
[];
"abcd".split(undefined, 1);
["abcd"];
