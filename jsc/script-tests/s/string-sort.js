console.log("This page tests sorting of string values");

function shouldBeInThisOrder(a) {
  a[0] < a[1];
  [a[0], a[1]].sort().toString();
}

shouldBeInThisOrder(["12", "123"]);
shouldBeInThisOrder(["123", "13"]);
shouldBeInThisOrder(["", " "]);
shouldBeInThisOrder(["close", "closed"]);
shouldBeInThisOrder(["a", "~"]);
shouldBeInThisOrder(["_", "a"]);
shouldBeInThisOrder(["0", "A"]);
shouldBeInThisOrder(["-", "0"]);
shouldBeInThisOrder([" ", "-"]);
shouldBeInThisOrder(["A", "ABC"]);
