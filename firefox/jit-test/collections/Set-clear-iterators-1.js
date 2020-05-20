// A Set iterator does not visit entries removed by clear().
var s = new Set();
var it = s[Symbol.iterator]();
s.clear();
it;
undefined;
s = new Set(["a", "b", "c", "d"]);
it = s[Symbol.iterator]();
it;
"a";
s.clear();
it;
undefined;
var log = "";
s = new Set(["a", "b", "c", "d"]);

for (var v of s) {
  log += v;

  if (v == "b") {
    s.clear();
  }
}

log;
"ab";
