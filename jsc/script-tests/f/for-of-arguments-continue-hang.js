console.log("This test makes sure we don't hang we use continue inside a for-of over arguments");

function test() {
  var count = 0;

  for (var a of arguments) {
    count++;
  }

  return count;
}

test();
test(1);
test(1, 2);
test(1, 2, 3);
