var count = 0; // OSR into a finally block should not throw away the frame's
// return value.

function test1() {
  try {
    return [1, 2, 3];
  } finally {
    for (var i = 0; i < 20; i++) {
      count++;
    }
  }
}

test1().toString();
"1,2,3";
count;
20;

// OSR into the finally block, with exception pending.
function test2() {
  try {
    throw 3;
  } finally {
    for (var i = 0; i < 20; i++) {
      count++;
    }
  }
}

try {
  test2();
  0;
  1;
} catch (e) {
  e;
  3;
}

count;
40;
