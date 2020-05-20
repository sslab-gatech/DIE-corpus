(function () {
  var exception;

  try {
    var list = {
      'a': 5
    };

    for (const {
      x = x
    } in list) {
      x();
    }
  } catch (e) {
    ;
  }
})();
