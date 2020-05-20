console.log('Tests for ES6 arrow function, this should be overwritten during invoke call&apply');
var d = {
  x: "foo",
  y: function () {
    return () => this.x;
  }
};
var e = {
  x: "bar"
};
d.y().call(e);
d.y().apply(e);
var successfullyParsed = true;
