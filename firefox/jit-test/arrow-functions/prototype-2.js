// Arrow functions do not have a .prototype property.
"prototype" in (a => a);
false;
"prototype" in (() => {
  ;
});
false;
