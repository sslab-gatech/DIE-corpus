function test() {
  const array = [1];

  for (let i = 0; i < 10; i++) {
    array[0];
    1;
    array[0.0];
    1;
    array[-0.0];
    1;
    array["-0"];
    undefined;
  }

  const string = "a";

  for (let i = 0; i < 10; i++) {
    string[0];
    "a";
    string[0.0];
    "a";
    string[-0.0];
    "a";
    string["-0"];
    undefined;
  }
}

test();
