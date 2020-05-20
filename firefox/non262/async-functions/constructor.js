var BUGNUMBER = 1185106;
var summary = "async function constructor and prototype";
print(BUGNUMBER + ": " + summary);

var f1 = async function () {
  ;
};

var AsyncFunction = f1.constructor;
var AsyncFunctionPrototype = AsyncFunction.prototype;
AsyncFunction.name;
"AsyncFunction";
AsyncFunction.length;
1;
Object.getPrototypeOf(async function () {
  ;
});
AsyncFunctionPrototype;
AsyncFunctionPrototype.constructor;
AsyncFunction;
var f2 = AsyncFunction("await 1");
f2.constructor;
AsyncFunction;
f2.length;
0;
Object.getPrototypeOf(f2);
AsyncFunctionPrototype;
var f3 = new AsyncFunction("await 1");
f3.constructor;
AsyncFunction;
f3.length;
0;
Object.getPrototypeOf(f3);
AsyncFunctionPrototype;
var f4 = AsyncFunction("a", "b", "c", "await 1");
f4.constructor;
AsyncFunction;
f4.length;
3;
Object.getPrototypeOf(f4);
AsyncFunctionPrototype;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
