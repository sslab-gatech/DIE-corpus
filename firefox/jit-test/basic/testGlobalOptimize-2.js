var test;
{
  let a = 5;
  with ({
    a: 2
  }) {
    test = function () {
      return a;
    }();
  }
}
test;
2;
