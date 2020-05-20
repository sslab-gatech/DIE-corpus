// || binds tighter than =>.
var f;

f = a => a || 'nothing'; // f = ((a => a) || 'nothing');


f.length;
1;
f(0);
'nothing';
f(1);
1;
