var BUGNUMBER = 1185106;
var summary = "async name token in property and object destructuring pattern";
print(BUGNUMBER + ": " + summary);
{
  let a = {
    async: 10
  };
  a.async;
  10;
}
{
  let a = {
    async() {
      ;
    }

  };
  a.async instanceof Function;
  true;
  a.async.name;
  "async";
}
{
  let async = 11;
  let a = {
    async
  };
  a.async;
  11;
}
{
  let {
    async
  } = {
    async: 12
  };
  async;
  12;
}
{
  let {
    async = 13
  } = {};
  async;
  13;
}
{
  let {
    async: a = 14
  } = {};
  a;
  14;
}
{
  let {
    async,
    other
  } = {
    async: 15,
    other: 16
  };
  async;
  15;
  other;
  16;
  let a = {
    async,
    other
  };
  a.async;
  15;
  a.other;
  16;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
