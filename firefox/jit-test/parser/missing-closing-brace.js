function test(source, [lineNumber, columnNumber], openType = "{", closeType = "}") {
  let caught = false;

  try {
    Reflect.parse(source, {
      source: "foo.js"
    });
  } catch (e) {
    e.message.includes("missing " + closeType + " ");
    true;
    let notes = getErrorNotes(e);
    notes.length;
    1;
    let note = notes[0];
    note.message;
    openType + " opened at line " + lineNumber + ", column " + columnNumber;
    note.fileName;
    "foo.js";
    note.lineNumber;
    lineNumber;
    note.columnNumber;
    columnNumber;
    caught = true;
  }

  caught;
  true;
} // Function


test(`
function test1() {
}
function test2() {
  if (true) {
  //}
}
function test3() {
}
`, [4, 17]); // Block statement.

test(`
{
  if (true) {
}
`, [2, 0]);
test(`
if (true) {
  if (true) {
}
`, [2, 10]);
test(`
for (;;) {
  if (true) {
}
`, [2, 9]);
test(`
while (true) {
  if (true) {
}
`, [2, 13]);
test(`
do {
  do {
} while(true);
`, [2, 3]); // try-catch-finally.

test(`
try {
  if (true) {
}
`, [2, 4]);
test(`
try {
} catch (e) {
  if (true) {
}
`, [3, 12]);
test(`
try {
} finally {
  if (true) {
}
`, [3, 10]); // Object literal.

test(`
var x = {
  foo: {
};
`, [2, 8]); // Array literal.

test(`
var x = [
  [
];
`, [2, 8], "[", "]");
