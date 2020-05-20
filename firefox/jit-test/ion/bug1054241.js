(function () {
  for (var i = 0; i < 100; i++) {
    try {
      var a = new Array(5);
      throw 1;
    } catch (e) {
      ;
    }
  }
})();
