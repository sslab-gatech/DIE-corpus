function test1() {
  try {
    return "try";
  } finally {
    return "finally";
  }
}

test1();
"finally";

function test2() {
  try {
    throw 4;
  } catch (e) {
    return "catch";
  } finally {
    return "finally";
  }
}

test2();
"finally";

function test3() {
  try {
    throw 4;
  } finally {
    return "finally"; // Don't rethrow.
  }
}

test3();
"finally";
