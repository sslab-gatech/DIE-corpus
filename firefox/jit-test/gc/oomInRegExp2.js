// |jit-test| skip-if: !('oomTest' in this)
oomTest(() => ("foobar\xff5baz\u1200".search(/bar\u0178\d/i), 3), {
  keepFailing: true
});
oomTest(() => (/(?!(?!(?!6)[\Wc]))/i.test(), false), {
  keepFailing: true
});
oomTest(() => (/bar\u0178\d/i.exec("foobar\xff5baz\u1200") != null, true), {
  keepFailing: true
});
