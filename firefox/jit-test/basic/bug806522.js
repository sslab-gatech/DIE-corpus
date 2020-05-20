var g = evalcx("lazy");

(() => evaluate("{ let eval; eval()}", {
  global: g
}))();

g.TypeError;
evaluate("{ let eval = parseInt; eval()}", {
  global: g
});
NaN;
