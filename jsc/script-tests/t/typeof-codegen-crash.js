console.log("This test for a crash when optimizing expressions of the form 'typeof o == constant' where 'constant' is not a string.");
var o = {};
typeof o == undefined;
typeof o == null;
typeof o == true;
typeof o == false;
typeof o == 1;
typeof o == 1.0;
typeof o == {};
