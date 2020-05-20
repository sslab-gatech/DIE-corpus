// The Set constructor creates an empty Set by default.
var s = new Set();
s.size;
0;
s = new Set(undefined);
s.size;
0;
s = new Set(null);
s.size;
0;

(() => Set())();

TypeError;

(() => Set(undefined))();

TypeError;

(() => Set(null))();

TypeError;
