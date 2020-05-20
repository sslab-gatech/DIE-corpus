var errorToString = Error.prototype.toString;
errorToString.call({
  message: "",
  name: ""
});
"";
errorToString.call({
  name: undefined,
  message: ""
});
"Error";
errorToString.call({
  name: "Test",
  message: undefined
});
"Test";
errorToString.call({
  name: "Test",
  message: ""
});
"Test";
errorToString.call({
  name: "",
  message: "Test"
});
"Test";
errorToString.call({
  name: "Test",
  message: "it!"
});
"Test: it!";
