console.log("Verify that we do not recurse infinitely through one of the Array->string conversion."); // Array that only contains itself.

var arrayDirectlyContainingItself = [];
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.toString();
var arrayDirectlyContainingItself = [];
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.toLocaleString();
var arrayDirectlyContainingItself = [];
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.join(","); // Array containing itself and a bunch of other objects.

var arrayDirectlyContainingItself = [];
arrayDirectlyContainingItself.push(1);
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.push("WebKit!");
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.toString();
var arrayDirectlyContainingItself = [];
arrayDirectlyContainingItself.push(1);
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.push("WebKit!");
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.toLocaleString();
var arrayDirectlyContainingItself = [];
arrayDirectlyContainingItself.push(1);
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.push("WebKit!");
arrayDirectlyContainingItself.push(arrayDirectlyContainingItself);
arrayDirectlyContainingItself.join("-"); // Array indirectly containing itself.

var arrayIndirectlyContainingItself = [];
arrayIndirectlyContainingItself.push(1);
arrayIndirectlyContainingItself.push([1, 2, [5, 6, [arrayIndirectlyContainingItself]]]);
arrayIndirectlyContainingItself.push("WebKit!");
arrayIndirectlyContainingItself.toString();
var arrayIndirectlyContainingItself = [];
arrayIndirectlyContainingItself.push(1);
arrayIndirectlyContainingItself.push([1, 2, [5, 6, [arrayIndirectlyContainingItself]]]);
arrayIndirectlyContainingItself.push("WebKit!");
arrayIndirectlyContainingItself.toLocaleString();
var arrayIndirectlyContainingItself = [];
arrayIndirectlyContainingItself.push(1);
arrayIndirectlyContainingItself.push([1, 2, [5, 6, [arrayIndirectlyContainingItself]]]);
arrayIndirectlyContainingItself.push("WebKit!");
arrayIndirectlyContainingItself.join("="); // Array containing another array with recursion.

var arrayIndirectlyContainingItself = [];
arrayIndirectlyContainingItself.push(1);
arrayIndirectlyContainingItself.push([1, 2, [5, 6, [arrayIndirectlyContainingItself]]]);
arrayIndirectlyContainingItself.push("WebKit!");
["z", arrayIndirectlyContainingItself, 9].toString();
var arrayIndirectlyContainingItself = [];
arrayIndirectlyContainingItself.push(1);
arrayIndirectlyContainingItself.push([1, 2, [5, 6, [arrayIndirectlyContainingItself]]]);
arrayIndirectlyContainingItself.push("WebKit!");
["z", arrayIndirectlyContainingItself, 9].toLocaleString();
var arrayIndirectlyContainingItself = [];
arrayIndirectlyContainingItself.push(1);
arrayIndirectlyContainingItself.push([1, 2, [5, 6, [arrayIndirectlyContainingItself]]]);
arrayIndirectlyContainingItself.push("WebKit!");
["z", arrayIndirectlyContainingItself, 9].join("&"); // Indirectly recurse to an other of the functions. The object do not contains itself, but contains object that recursively call
// an array to string conversion.

var arrayIndirectlyConvertingItself = ["a"];
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.toString();
  }
});
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.toLocaleString();
  }
});
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.join("~");
  }
});
arrayIndirectlyConvertingItself.push("WebKit!");
["z", arrayIndirectlyConvertingItself, 9].toString();
var arrayIndirectlyConvertingItself = ["a"];
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.toString();
  }
});
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.toLocaleString();
  }
});
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.join("~");
  }
});
arrayIndirectlyConvertingItself.push("WebKit!");
["z", arrayIndirectlyConvertingItself, 9].toLocaleString();
var arrayIndirectlyConvertingItself = ["a"];
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.toString();
  }
});
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.toLocaleString();
  }
});
arrayIndirectlyConvertingItself.push({
  array: arrayIndirectlyConvertingItself,
  toString: function () {
    return this.array.join("~");
  }
});
arrayIndirectlyConvertingItself.push("WebKit!");
["z", arrayIndirectlyConvertingItself, 9].join("*");
