// Test that we can save stacks with self-hosted function frames in them.
const map = function () {
  return [3].map(n => saveStack()).pop();
}();

map.parent.functionDisplayName;
"map";
map.parent.source;
"self-hosted";

const reduce = function () {
  return [3].reduce(() => saveStack(), 3);
}();

reduce.parent.functionDisplayName;
"reduce";
reduce.parent.source;
"self-hosted";

const forEach = function () {
  try {
    [3].forEach(n => {
      throw saveStack();
    });
  } catch (s) {
    return s;
  }
}();

forEach.parent.functionDisplayName;
"forEach";
forEach.parent.source;
"self-hosted";
