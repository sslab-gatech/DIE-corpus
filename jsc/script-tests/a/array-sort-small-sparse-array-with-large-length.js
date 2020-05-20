console.log("Tests that we can quickly sort a small sparse array that has a large length.");
var array = [];
array[10000000] = 42;
array.sort();
var result = "";

for (var s in array) {
  console.log("array[" + s + "] = " + array[s]);

  if (result) {
    result += ",";
  }

  result += array[s];
}

result;
array.length;
array[0];
