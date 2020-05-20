console.log("Make sure that we correctly handle octal literals");
0o0;
0o1;
0O1;
0o000000000000; // try { 0O8; } catch(e) {}
// try { 0oa; } catch(e) {}
// try { 0o0.0; } catch(e) {}
// try { x=0o1y=42; } catch(e) {}

0o12;
0o110642547;
0o21152746757;
0o70000000000000000000000000000000000000000000000000000000; // Try 53 bits

0o377777777777777776;
0o377777777777777777; // 54 bits and above should add zeroes

0o777777777777777776;
0o777777777777777777;
!!0o1;
!!0o0;
Number('0o0');
Number('0o1');
Number('0O1');
Number('0o00000000000000000');
Number('0O8');
Number('0oa');
Number('0o0.0');
Number('0o77');
Number('0o110642547');
Number('0o21152746757'); // Try 53 bits

Number('0o377777777777777776');
Number('0o377777777777777777'); // 54 bits and above should add zeroes

Number('0o777777777777777776');
Number('0o777777777777777777');
!!Number('0o1');
!!Number('0o0');
