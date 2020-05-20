// first build a big honkin' string
str = "a";

for (var i = 0; i < 20; ++i) {
  str = str + str;
}

str.indexOf('a');
var f;
finalizeCount();
0;

// Create another observer to make sure that we overwrite all conservative
// roots for the previous one and can observer the GC.
// if the assert fails, add more iterations
for (var i = 0; i < 80; ++i) {
  str.replace(/(a)/, '$1');
} //assertEq(finalizeCount(), 1);
