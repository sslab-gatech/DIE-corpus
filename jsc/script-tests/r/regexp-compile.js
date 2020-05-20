console.log('Test RegExp.compile method.');
re = new RegExp("a", "i");
re.toString();
re.compile("a");
re.multiline;
re.ignoreCase;
re.global;
re.test('A');
re.toString();
re.compile("b", "g");
re.toString();
re.compile(new RegExp("c"));
re.toString();
re.compile(new RegExp("c", "i"));
re.ignoreCase;
re.test('C');
re.toString();

try {
  re.compile(new RegExp('c'), 'i');
  ;
} catch (e) {
  ;
} // It's OK to supply a second argument, as long as the argument is "undefined".


re.compile(re, undefined);
re.toString();

try {
  re.compile(new RegExp('+'));
  ;
} catch (e) {
  ;
}

re.compile();
re.toString();
re.compile(undefined);
re.toString();
re.compile("");
re.toString();
re.compile(null);
re.toString();
re.compile("z", undefined);
re.toString(); // Compiling should reset lastIndex.

re.lastIndex = 100;
re.compile(/a/g);
re.lastIndex;
re.exec("aaa");
re.lastIndex; // Compile returns the regexp itself.

regexpWithUndefinedCompiledToValid = new RegExp(undefined), regexpWithUndefinedCompiledToValid.compile('abc');
regexpValidPatternCompiledToValid = new RegExp('zyx'), regexpValidPatternCompiledToValid.compile('abc');
regexpWithValidCompiledToUndefined = new RegExp('abc'), regexpWithValidCompiledToUndefined.compile(undefined);
