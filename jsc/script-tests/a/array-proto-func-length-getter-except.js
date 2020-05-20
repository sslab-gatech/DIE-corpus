console.log("This test checks that functions on the array prototype correctly handle exceptions from length getters when called on non-array objects.");
var testObj = {
  0: "a",
  1: "b",
  2: "c"
};
var lengthGetter = {
  get: function () {
    throw true;
  }
};
Object.defineProperty(testObj, "length", lengthGetter);

function test(f) {
  try {
    f.call(testObj, undefined);
    return false;
  } catch (e) {
    return e === true;
  }
}

test(Array.prototype.join);
test(Array.prototype.pop);
test(Array.prototype.push);
test(Array.prototype.reverse);
test(Array.prototype.shift);
test(Array.prototype.slice);
test(Array.prototype.sort);
test(Array.prototype.splice);
test(Array.prototype.unshift);
test(Array.prototype.indexOf);
test(Array.prototype.lastIndexOf);
test(Array.prototype.every);
test(Array.prototype.some);
test(Array.prototype.forEach);
test(Array.prototype.map);
test(Array.prototype.filter);
test(Array.prototype.reduce);
test(Array.prototype.reduceRight);
