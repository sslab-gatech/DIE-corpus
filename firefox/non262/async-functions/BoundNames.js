var BUGNUMBER = 1185106;
var summary = "Bound names of async functions";
print(BUGNUMBER + ": " + summary);

async function test() {
  ;
}

test.name;
"test";

var test2 = async function test2() {
  ;
};

test2.name;
"test2";

var anon = async function () {
  ;
};

anon.name;
"anon";

if (typeof Reflect !== "undefined" && Reflect.parse) {
  var tree = Reflect.parse("export default async function() {}", {
    target: "module"
  });
  tree.body[0].declaration.id.name;
  "default";
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
