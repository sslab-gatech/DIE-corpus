// globals:
a = b = get = set = eval = arguments = 10;
({
  arguments
}).arguments;
10;
var o = {
  a,
  b: b,
  get,
  set: set
};
o.a;
10;
o.b;
10;
o.get;
10;
o.set;
10;
var names = ['a', 'get', 'set', 'eval']; // global

names.forEach(ident => (new Function('return {' + ident + '}.' + ident + ';')(), 10)); // local

names.forEach(ident => (new Function('var ' + ident + ' = 20; return {' + ident + '}.' + ident + ';')(), 20)); // scope

names.forEach(ident => (new Function('var ' + ident + ' = 30; return (function () {return {' + ident + '}.' + ident + ';})();')(), 30));
var reserved = ['break', 'do', 'in', 'typeof', 'case', 'else', 'instanceof', 'var', 'catch', 'export', 'new', 'void', 'class', 'extends', 'return', 'while', 'const', 'finally', 'super', 'with', 'continue', 'for', 'switch', 'debugger', 'function', 'this', 'delete', 'import', 'try', 'enum', 'null', 'true', 'false']; // non-identifiers should also throw

var nonidents = ['"str"', '0'];
reserved.concat(nonidents).forEach(ident => ((() => new Function('return {' + ident + '}'))(), SyntaxError));
var reservedStrict = ['implements', 'interface', 'package', 'private', 'protected', 'public', 'static'];
reservedStrict.forEach(ident => (new Function('var ' + ident + ' = 10; return {' + ident + '}.' + ident + ';')(), 10));
reservedStrict.concat(['let', 'yield']).forEach(ident => ((() => new Function('"use strict"; return {' + ident + '}'))(), SyntaxError));
