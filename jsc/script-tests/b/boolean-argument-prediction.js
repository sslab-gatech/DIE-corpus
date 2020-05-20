console.log("This tests that arguments predicted to be boolean are checked.");

function predictBooleanArgument(b) {
  if (b) {
    return "yes";
  } else {
    return "no";
  }
}

predictBooleanArgument(true);
predictBooleanArgument(false);

for (var i = 0; i < 1000; ++i) {
  predictBooleanArgument(true);
  predictBooleanArgument(false);
}

predictBooleanArgument(true);
predictBooleanArgument(false);
predictBooleanArgument(0);
predictBooleanArgument(1);
predictBooleanArgument(2);
predictBooleanArgument(3);
predictBooleanArgument(4);

for (var i = 0; i < 1000; ++i) {
  predictBooleanArgument(0);
  predictBooleanArgument(1);
  predictBooleanArgument(2);
  predictBooleanArgument(3);
  predictBooleanArgument(4);
}

predictBooleanArgument(true);
predictBooleanArgument(false);
predictBooleanArgument(0);
predictBooleanArgument(1);
predictBooleanArgument(2);
predictBooleanArgument(3);
predictBooleanArgument(4);
