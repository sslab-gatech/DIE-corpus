console.log("This test checks that toString() does not have a problem when an object has itself as a property."); // Array (elements)

var array = [];
array[0] = array;
array + ''; // Error (name, message)

var error = new Error();
error.name = error;
error.message = error;
error + ''; // RegExp (source)

var regexp = /a/;
regexp.source = regexp;
regexp + '';
