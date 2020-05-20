function f(x) {
  if (x.y()) {
    ;
  }

  ;
}

f({
  y: function () {
    ;
  }
});

try {
  f(10);
  0;
  1;
} catch (e) {
  e instanceof TypeError;
  true;
}
