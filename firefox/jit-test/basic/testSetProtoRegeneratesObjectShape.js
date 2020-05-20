function testSetProtoRegeneratesObjectShape() {
  var f = function () {
    ;
  };

  var g = function () {
    ;
  };

  g.prototype.__proto__ = {};

  function iq(obj) {
    for (var i = 0; i < 10; ++i) {
      "" + obj.prototype;
    }
  }

  iq(f);
  iq(f);
  iq(f);
  iq(f);
  iq(g);
  return true;
}

testSetProtoRegeneratesObjectShape();
true;
