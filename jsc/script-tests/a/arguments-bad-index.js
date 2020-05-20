console.log("This test checks whether arguments crashes when passed a bad index.");

function indexArguments(index) {
  return arguments[index];
}

indexArguments(1, "a");
indexArguments("1 ", "a");
indexArguments(0xDEADBEEF);
indexArguments(0xFFFFFFFF);
