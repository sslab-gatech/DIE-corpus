console.log("Test to ensure we have a valid callframe midway through unwinding");

function testUnwind() {
  with ({}) {
    arguments;
    throw "threw successfully";
  }
}

try {
  testUnwind();
} catch (e) {
  ;
}
