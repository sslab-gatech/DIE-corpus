var code = cacheEntry("(x => x.toSource())`bar`;");
var g = newGlobal({
  cloneSingletons: true
});
"[\"bar\"]";
evaluate(code, {
  global: g,
  saveBytecode: true
});
"[\"bar\"]";
evaluate(code, {
  global: g,
  loadBytecode: true
});
