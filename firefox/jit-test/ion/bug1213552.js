this.x1 = 'y'; // evalcx is like evaluate and not eval, and so can introduce a global let binding.

evalcx("let x1 = 'z';", this);
x1;
'z';
