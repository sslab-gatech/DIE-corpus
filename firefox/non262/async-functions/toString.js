var BUGNUMBER = 1185106;
var summary = "async function toString";
print(BUGNUMBER + ": " + summary);

async function f1(a, b, c) {
  await a;
}

f1.toString();
"async function f1(a, b, c) { await a; }";
(async function (a, b, c) {
  await a;
}).toString();
"async function (a, b, c) { await a; }";
(async (a, b, c) => await a).toString();
"async (a, b, c) => await a";
(async (a, b, c) => {
  await a;
}).toString();
"async (a, b, c) => { await a; }";
({
  async foo(a, b, c) {
    await a;
  }

}).foo.toString();
"async foo(a, b, c) { await a; }";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
