console.log("Bound Function Names");

function assert(b, text) {
  if (b) {
    console.log(text);
  } else {
    console.log(`Bad result: ${text}`);
  }
}

(function () {
  ;
}).bind().name === "bound ";
"Anonymous function bound name.";
(function foo() {
  ;
}).bind().name === "bound foo";
"Function bound name should be foo.";

function bar() {
  ;
}

bar.bind().name === "bound bar";
"Function bound name should be bar.";
bar.bind().bind().name === "bound bound bar";
"Function double bound name should be bar.";
console.log("Test InternalFunction names.");
Error.bind().name === "bound Error";
"Function bound name should be Error.";
Function.bind().name === "bound Function";
"Function bound name should be Function.";
