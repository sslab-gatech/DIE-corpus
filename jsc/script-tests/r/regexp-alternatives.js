console.log('Test regular expression processing with alternatives.');
var s1 = "<p>content</p>";
s1.match(/<((\/([^>]+)>)|(([^>]+)>))/);
s1.match(/<((ABC>)|(\/([^>]+)>)|(([^>]+)>))/);
s1.match(/<(a|\/p|.+?)>/); // Force YARR to use Interpreter by using iterative parentheses

s1.match(/<((\/([^>]+)>)|((([^>])+)>))/);
s1.match(/<((ABC>)|(\/([^>]+)>)|((([^>])+)>))/);
s1.match(/<(a|\/p|(.)+?)>/); // Force YARR to use Interpreter by using backreference

var s2 = "<p>p</p>";
s2.match(/<((\/([^>]+)>)|(([^>]+)>))\5/);
s2.match(/<((ABC>)|(\/([^>]+)>)|(([^>]+)>))\6/);
s2.match(/<(a|\/p|.+?)>\1/);
