console.log("This page tests iteration of properties on a string object.");
var stringProperties = new Array();
var i = 0;

for (var property in "abcde") {
  stringProperties[i++] = property;
}

stringProperties.length;
stringProperties[0];
stringProperties[1];
stringProperties[2];
stringProperties[3];
stringProperties[4];
