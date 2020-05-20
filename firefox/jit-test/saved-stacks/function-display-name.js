// Test the functionDisplayName of SavedFrame instances.
function uno() {
  return dos();
}

const dos = () => tres.quattro();

let tres = {};

tres.quattro = () => saveStack();

const frame = uno();
frame.functionDisplayName;
"tres.quattro";
frame.parent.functionDisplayName;
"dos";
frame.parent.parent.functionDisplayName;
"uno";
frame.parent.parent.parent.functionDisplayName;
null;
frame.parent.parent.parent.parent;
null;
