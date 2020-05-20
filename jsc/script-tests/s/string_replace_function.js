console.log("This will test string.replace with function replacer.");
"ABC".replace("B", "$$");
"ABC".replace("B", function () {
  return "$$";
});
"ABC".replace("B", function () {
  return "$$$";
});
"ABC".replace("B", function () {
  return "$$$$";
});
"ABC".replace("B", function () {
  return "$1";
});
"ABC".replace("B", function () {
  return "$2";
});
"John Doe".replace(/(\w+)\s(\w+)/, "$2 $1");
"John Doe".replace(/(\w+)\s(\w+)/, function () {
  return "$2 $1";
});
