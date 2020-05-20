function tagA(strings) {
  strings.length;
  2;
  strings[0];
  "a";
  strings[1];
  "";
}

function tagAB(strings) {
  strings.length;
  2;
  strings[0];
  "a";
  strings[1];
  "b";
}

var data = [1, 2, 3];

function tag(strings, value1, value2) {
  return strings[0] + value1 + strings[1] + value2 + strings[2];
}

function complex() {
  return tag`${data[0]} ${data[1] + data[2]}`;
}

for (var i = 0; i < 20; i++) {
  tagA`a${0}`;
  tagAB`a${0}b`;
  complex();
  "1 5";
}
