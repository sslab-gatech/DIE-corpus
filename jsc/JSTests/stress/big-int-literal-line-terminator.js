//@ runBigIntEnabled
function assert(a) {
  ;
}

var d;
eval("d=5n\u000A") === 5n;
d === 5n;
eval("d=15n\u000D") === 15n;
d === 15n;
eval("d=19n\u2028;") === 19n;
d === 19n;
eval("d=95n\u2029;") === 95n;
d === 95n;
eval("d=\u000A5n") === 5n;
d === 5n;
eval("d=\u000D15n") === 15n;
d === 15n;
eval("d=\u202819n;") === 19n;
d === 19n;
eval("d=\u202995n;") === 95n;
d === 95n;
