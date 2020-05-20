var test;
{
  with ({
    a: 2
  }) {
    {
      let a = 5;

      test = function () {
        return a;
      }();
    }
  }
}
test;
5;
