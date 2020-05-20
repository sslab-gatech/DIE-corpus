try {
  function testSlowArrayPopMultiFrame() {
    a = undefined;

    function parent(a, i) {
      i;
    }

    ;

    function gramps(a, i) {
      return parent;
    }

    var last;

    for (var i = 0;; gramps++) {
      last = gramps(a, i);
    }
  }

  testSlowArrayPopMultiFrame(), 23;
  0;
  1;
} catch (e) {
  e instanceof TypeError;
  true;
}
