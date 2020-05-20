console.log("This test checks that the Function constructor works correctly in the presence of single line comments.");
new Function('return true//')();
new Function('return true;//')();
new Function('a', 'return a//')(true);
new Function('a', 'return a;//')(true);
