console.log("Test behaviour of JSON reviver function.");

if (!Array.isArray) {
  Array.isArray = function (o) {
    return o.constructor === Array;
  };
}

let casesVisited = [];

function arrayReviver(i, v) {
  if (i != "") {
    currentHolder = this;
    console.log("");
    console.log("Ensure the holder for our array is indeed an array");
    Array.isArray(currentHolder);
    currentHolder.length;

    if (i > 0) {
      console.log("");
      console.log("Ensure that we always get the same holder");
      currentHolder;
    }

    casesVisited.push(Number(i));

    switch (Number(i)) {
      case 0:
        v = undefined;
        console.log("");
        console.log("Ensure that the holder already has all the properties present at the start of filtering");
        currentHolder[0];
        currentHolder[1];
        currentHolder[2];
        currentHolder[3];
        currentHolder[4];
        break;

      case 1:
        console.log("");
        console.log("Ensure that returning undefined has removed the property 0 from the holder during filtering.");
        currentHolder.hasOwnProperty(0);
        currentHolder[2] = "a replaced value";
        break;

      case 2:
        console.log("");
        console.log("Ensure that changing the value of a property is reflected while filtering.");
        currentHolder[2];
        value = v;
        console.log("");
        console.log("Ensure that the changed value is reflected in the arguments passed to the reviver");
        value;
        delete this[3];
        break;

      case 3:
        console.log("");
        console.log("Ensure that we visited a value that we have deleted, and that deletion is reflected while filtering.");
        currentHolder.hasOwnProperty(3);
        value = v;
        console.log("");
        console.log("Ensure that when visiting a deleted property value is undefined");

        try {
          value;
        } catch (e) {
          ;
        }

        v = "undelete the property";
        this.length = 3;
        expectedLength = 4; // undeleting the value at index 3 should bump the length back to 4.

        break;

      case 4:
        if (this.length != 4) {
          console.log("Did not call reviver for deleted property");
          expectedLength = this.length = 4;
          break;
        }

      case 5:
        casesVisited.push(5);
        console.log("Ensured that property was visited despite Array length being reduced.");
        value = v;

        try {
          value;
        } catch (e) {
          ;
        }

        this[10] = "fail";
        break;

      default:
        console.log("Visited unexpected property " + i + " with value " + v);
    }
  }

  lastHolder = this;
  return v;
}

expectedLength = 5;
var result = JSON.parse('["a value", "another value", "and another value", "to delete", "extra value"]', arrayReviver);
console.log("");
console.log("Ensure that we created the root holder as specified in ES5");
'' in lastHolder;
result;
console.log("");
console.log("Ensure that a deleted value is revived if the reviver function returns a value");
result.hasOwnProperty(3);
casesVisited;
casesVisited = [];

function objectReviver(i, v) {
  if (i != "") {
    currentHolder = this;
    currentHolder != globalObject;

    if (seen) {
      console.log("");
      console.log("Ensure that we get the same holder object for each property");
      currentHolder;
    }

    seen = true;
    casesVisited.push(i);

    switch (i) {
      case "a property":
        v = undefined;
        console.log("");
        console.log("Ensure that the holder already has all the properties present at the start of filtering");
        currentHolder['a property'];
        currentHolder['another property'];
        currentHolder['and another property'];
        currentHolder['to delete'];
        break;

      case "another property":
        console.log("");
        console.log("Ensure that returning undefined has correctly removed the property 'a property' from the holder object");
        currentHolder.hasOwnProperty('a property');
        currentHolder['and another property'] = "a replaced value";
        break;

      case "and another property":
        console.log("Ensure that changing the value of a property is reflected while filtering.");
        currentHolder['and another property'];
        value = v;
        console.log("");
        console.log("Ensure that the changed value is reflected in the arguments passed to the reviver");
        value;
        delete this["to delete"];
        break;

      case "to delete":
        console.log("");
        console.log("Ensure that we visited a value that we have deleted, and that deletion is reflected while filtering.");
        currentHolder.hasOwnProperty('to delete');
        value = v;
        console.log("");
        console.log("Ensure that when visiting a deleted property value is undefined");

        try {
          value;
        } catch (e) {
          ;
        }

        v = "undelete the property";
        this["new property"] = "fail";
        break;

      default:
        console.log("Visited unexpected property " + i + " with value " + v);
    }
  }

  lastHolder = this;
  return v;
}

console.log("");
console.log("Test behaviour of revivor used in conjunction with an object");
var seen = false;
var globalObject = this;
var result = JSON.parse('{"a property" : "a value", "another property" : "another value", "and another property" : "and another value", "to delete" : "will be deleted"}', objectReviver);
console.log("");
console.log("Ensure that we created the root holder as specified in ES5");
lastHolder.hasOwnProperty('');
result.hasOwnProperty('a property');
result.hasOwnProperty('to delete');
result;
casesVisited;
console.log("");
console.log("Test behaviour of revivor that introduces a cycle");

function reviveAddsCycle(i, v) {
  if (i == 0) {
    this[1] = this;
  }

  return v;
}

try {
  JSON.parse("[0,1]", reviveAddsCycle);
} catch (e) {
  ;
}

console.log("");
console.log("Test behaviour of revivor that introduces a new array classed object (the result of a regex)");
var createdBadness = false;

function reviveIntroducesNewArrayLikeObject(i, v) {
  if (i == 0 && !createdBadness) {
    this[1] = /(a)+/.exec("a");
    createdBadness = true;
  }

  return v;
}

JSON.stringify(JSON.parse("[0,1]", reviveIntroducesNewArrayLikeObject));
