// Funny case that looks kind of like default arguments isn't.
var f = (msg = 'hi', w = window => w.alert(a, b)); // sequence expression

msg;
'hi';
typeof w;
'function';
f;
w;
