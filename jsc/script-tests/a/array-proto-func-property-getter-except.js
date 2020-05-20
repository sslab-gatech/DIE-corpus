console.log("This test checks that functions on the array prototype correctly handle exceptions from property getters when called on non-array objects.");

function test(f) {
  var testObj = {
    length: 3
  };
  var propertyGetter = {
    get: function () {
      throw true;
    }
  };
  Object.defineProperty(testObj, 0, propertyGetter);
  Object.defineProperty(testObj, 1, propertyGetter);
  Object.defineProperty(testObj, 2, propertyGetter);

  try {
    f.call(testObj, function () {
      ;
    });
    return false;
  } catch (e) {
    return e === true;
  }
} // This test makes sense for these functions: (they should get all properties on the array)


test(Array.prototype.sort);
test(Array.prototype.every);
test(Array.prototype.some);
test(Array.prototype.forEach);
test(Array.prototype.map);
test(Array.prototype.filter);
test(Array.prototype.reduce);
test(Array.prototype.reduceRight); // Probably not testing much of anything in these cases, but make sure they don't crash!

test(Array.prototype.join);
test(Array.prototype.pop);
test(Array.prototype.push);
test(Array.prototype.reverse);
test(Array.prototype.shift);
test(Array.prototype.slice);
test(Array.prototype.splice);
test(Array.prototype.unshift);
test(Array.prototype.indexOf);
test(Array.prototype.lastIndexOf);
