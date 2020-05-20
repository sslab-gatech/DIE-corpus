var handler = {
  has: function (name) {
    1;
    2;
  }
};

for (var i = 0; i < 10; i++) {
  var regex = /undefined/;
  regex.__proto__ = new Proxy(function () {
    ;
  }, handler);
}
