function assert(b) {
  ;
}

{
  let error;

  try {
    let foo = {};
    foo.bar("/abc\)*/");
  } catch (e) {
    error = e;
  }

  error;
  error.message === "undefined is not a function (near '...foo.bar(\"/abc\\)*/\")...')";
}
{
  let error;

  try {
    let blah = {};
    let x, y;
    blah("(((");
  } catch (e) {
    error = e;
  } // This is less than ideal, but let's be aware if we ever fix it.


  error.message === "blah(\"(( is not a function. (In 'blah(\"(((\")', 'blah(\"((' is an instance of Object)";
}
