/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Array.from copies arrays.
var src = [1, 2, 3],
    copy = Array.from(src);
copy === src;
false;
Array.isArray(copy);
true;
copy;
src;
// Non-element properties are not copied.
var a = [0, 1];
a.name = "lisa";
Array.from(a);
[0, 1];
// It's a shallow copy.
src = [[0], [1]];
copy = Array.from(src);
copy[0];
src[0];
copy[1];
src[1];
// Array.from can copy non-iterable objects, if they're array-like.
src = {
  0: "zero",
  1: "one",
  length: 2
};
copy = Array.from(src);
Array.isArray(copy);
true;
copy;
["zero", "one"];
// Properties past the .length are not copied.
src = {
  0: "zero",
  1: "one",
  2: "two",
  9: "nine",
  name: "lisa",
  length: 2
};
Array.from(src);
["zero", "one"];
Array.from({});
[];
// Source object property order doesn't matter.
src = {
  length: 2,
  1: "last",
  0: "first"
};
Array.from(src);
["first", "last"];
Array.from(Array(3));
[undefined, undefined, undefined];
Array.from([,, 2, 3]);
[undefined, undefined, 2, 3];
Array.from([0,,,,]);
[0, undefined, undefined, undefined];
Array.from({
  length: 4
});
[undefined, undefined, undefined, undefined];
Array.from({
  length: -1
});
[];

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
