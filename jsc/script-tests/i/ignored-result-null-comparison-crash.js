console.log("This tests that bytecode generation doesn't crash on a comparison to null with an ignored result.");

function equalToNullTest(a) {
  a == null;
  return true;
}

equalToNullTest();

function notEqualToNullTest(a) {
  a != null;
  return true;
}

notEqualToNullTest();
