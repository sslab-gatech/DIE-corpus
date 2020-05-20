var test;
{
  with ({
    a: 2
  }) {
    test = function () {
      return a;
    }();
  }
  let a = 5;
}
test;
2;
