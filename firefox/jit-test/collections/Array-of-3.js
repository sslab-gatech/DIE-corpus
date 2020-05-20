// Array.of does not leave holes
Array.of(undefined);
[undefined];
Array.of(undefined, undefined);
[undefined, undefined];
Array.of.apply(this, [,, undefined]);
[undefined, undefined, undefined];
Array.of.apply(this, Array(4));
[undefined, undefined, undefined, undefined];
