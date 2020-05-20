// Church booleans
var True = t => f => t;

var False = t => f => f;

var bool_to_str = b => b("True")("False");

var And = a => b => a(b)(a);

var Or = a => b => a(a)(b);

And(True)(True);
True;
And(True)(False);
False;
And(False)(True);
False;
And(False)(False);
False;
Or(True)(True);
True;
Or(True)(False);
True;
Or(False)(True);
True;
Or(False)(False);
False;
